import React, { useState, useEffect } from 'react';
import { useNavigate, useSearchParams } from 'react-router-dom';
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow
} from '@/components/ui/table';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue
} from '@/components/ui/select';
import { Badge } from '@/components/ui/badge';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger
} from '@/components/ui/dropdown-menu';
import {
  Search,
  Filter,
  MoreHorizontal,
  Download,
  Plus,
  FileText,
  UserCheck,
  UserX,
  Users,
  Award,
  Globe
} from 'lucide-react';
import { mockBeneficiaries, mockPrograms } from '@/lib/mock-data';
import { BeneficiaryStatus, Program } from '@/lib/types';
import { toast } from 'sonner';
import { cn } from '@/lib/utils';

export function BeneficiariesPage() {
  const navigate = useNavigate();
  const [searchParams] = useSearchParams();
  const initialSearch = searchParams.get('search') || '';

  const [searchTerm, setSearchTerm] = useState(initialSearch);
  const [statusFilter, setStatusFilter] = useState<string>('all');
  const [programFilter, setProgramFilter] = useState<string>('all');

  // Stats for the overview
  const totalBeneficiaries = mockBeneficiaries.length;
  const activeCount = mockBeneficiaries.filter(b => b.status === BeneficiaryStatus.ACTIVE).length;
  const graduatedCount = mockBeneficiaries.filter(b => b.status === BeneficiaryStatus.GRADUATED).length;

  // Sync state with URL params
  useEffect(() => {
    const query = searchParams.get('search');
    if (query !== null) {
      setSearchTerm(query);
    }
  }, [searchParams]);

  // Filtering logic
  const filteredBeneficiaries = mockBeneficiaries.filter(beneficiary => {
    const matchesSearch = beneficiary.fullName.toLowerCase().includes(searchTerm.toLowerCase()) ||
      beneficiary.location.district.toLowerCase().includes(searchTerm.toLowerCase());

    const matchesStatus = statusFilter === 'all' || beneficiary.status === statusFilter;
    const matchesProgram = programFilter === 'all' || beneficiary.program.id === programFilter;

    return matchesSearch && matchesStatus && matchesProgram;
  });

  const handleExport = () => {
    toast.success("Exporting beneficiary data to CSV...");
  };

  const handleStatusChange = (id: string, newStatus: BeneficiaryStatus) => {
    toast.success(`Updated status for beneficiary ${id} to ${newStatus}`);
  };

  const formatDate = (date: Date) => {
    if (!date) return 'N/A';
    return new Intl.DateTimeFormat('en-US', {
      month: 'short',
      day: 'numeric',
      year: 'numeric',
    }).format(date);
  };

  return (
    <div className="space-y-8 pb-10">
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 pt-4">
        <div>
          <div className="flex items-center gap-2 text-slate-400 font-bold text-[10px] uppercase tracking-[3px] mb-2">
            <Users size={14} strokeWidth={2} />
            <span>Management Hub</span>
          </div>
          <h1 className="text-4xl md:text-5xl font-black text-slate-900 dark:text-white tracking-tight leading-tight">Beneficiaries <span className="text-teal-600">Enrolled</span></h1>
        </div>
        <div className="flex gap-3">
          <Button
            variant="outline"
            className="h-12 px-6 rounded-2xl bg-white dark:bg-slate-900 border-slate-200 dark:border-slate-800 font-bold text-slate-600 dark:text-slate-400 hover:bg-slate-50 transition-all flex items-center gap-2 shadow-sm"
            onClick={handleExport}
          >
            <Download size={18} strokeWidth={2} />
            <span className="hidden sm:inline">Export CSV</span>
          </Button>
          <Button
            className="h-12 px-8 rounded-2xl bg-teal-600 hover:bg-teal-700 text-white font-black uppercase tracking-widest text-xs transition-all hover:scale-[1.02] active:scale-[0.98] shadow-lg shadow-teal-500/25 flex items-center gap-2"
            onClick={() => navigate('/admin/beneficiaries/add')}
          >
            <Plus size={18} strokeWidth={3} />
            Add Beneficiary
          </Button>
        </div>
      </div>

      {/* Stats Quick Overview */}
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
        {[
          { label: 'Total Enrolled', value: totalBeneficiaries, icon: Users, color: 'text-blue-600', bg: 'bg-blue-50 dark:bg-blue-900/10' },
          { label: 'Active Support', value: activeCount, icon: UserCheck, color: 'text-teal-600', bg: 'bg-teal-50 dark:bg-teal-900/10' },
          { label: 'Successful Graduates', value: graduatedCount, icon: Award, color: 'text-purple-600', bg: 'bg-purple-50 dark:bg-purple-900/10' },
        ].map((stat, i) => (
          <div key={i} className={`p-6 rounded-[2rem] border border-slate-100 dark:border-slate-800 ${stat.bg} flex items-center gap-5 transition-all hover:border-teal-500/20 group`}>
            <div className={`h-14 w-14 rounded-2xl bg-white dark:bg-slate-900 flex items-center justify-center ${stat.color} shadow-sm border border-slate-100 dark:border-slate-800 group-hover:scale-110 transition-transform`}>
              <stat.icon size={28} strokeWidth={1.5} />
            </div>
            <div>
              <p className="text-[10px] font-black text-slate-400 uppercase tracking-[2px] mb-1">{stat.label}</p>
              <h3 className="text-3xl font-black text-slate-900 dark:text-white leading-none">{stat.value}</h3>
            </div>
          </div>
        ))}
      </div>

      {/* Modern Filter Bar */}
      <div className="p-2 bg-white dark:bg-slate-900 rounded-[2.5rem] border border-slate-200/60 dark:border-slate-800 shadow-sm flex flex-col lg:flex-row gap-2">
        <div className="relative flex-1 group">
          <Search className="absolute left-6 top-1/2 -translate-y-1/2 text-slate-400 group-focus-within:text-teal-600 transition-colors" size={18} strokeWidth={2.5} />
          <Input
            placeholder="Search beneficiaries by name, district, or phone..."
            className="h-14 pl-14 pr-6 bg-transparent border-none focus-visible:ring-0 font-bold text-slate-700 dark:text-slate-200 placeholder:text-slate-400 placeholder:font-medium"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
        </div>

        <div className="flex flex-col sm:flex-row gap-2">
          <div className="h-10 w-px bg-slate-100 dark:bg-slate-800 self-center hidden lg:block mx-2" />

          <Select value={statusFilter} onValueChange={setStatusFilter}>
            <SelectTrigger className="w-full sm:w-[180px] h-14 rounded-[2rem] border-none bg-slate-50 dark:bg-slate-950/50 hover:bg-slate-100 px-6 transition-all">
              <div className="flex items-center gap-3">
                <Filter className="h-4 w-4 text-teal-600" />
                <SelectValue placeholder="Status" />
              </div>
            </SelectTrigger>
            <SelectContent className="rounded-2xl border-slate-100 dark:border-slate-800 shadow-2xl">
              <SelectItem value="all" className="font-bold text-xs py-3 px-4">All Statuses</SelectItem>
              <SelectItem value={BeneficiaryStatus.ACTIVE} className="font-bold text-xs py-3 px-4">Active Status</SelectItem>
              <SelectItem value={BeneficiaryStatus.GRADUATED} className="font-bold text-xs py-3 px-4">Graduated</SelectItem>
              <SelectItem value={BeneficiaryStatus.INACTIVE} className="font-bold text-xs py-3 px-4">Inactive</SelectItem>
            </SelectContent>
          </Select>

          <Select value={programFilter} onValueChange={setProgramFilter}>
            <SelectTrigger className="w-full sm:w-[220px] h-14 rounded-[2rem] border-none bg-slate-50 dark:bg-slate-950/50 hover:bg-slate-100 px-6 transition-all">
              <div className="flex items-center gap-3">
                <FileText className="h-4 w-4 text-teal-600" />
                <SelectValue placeholder="All Programs" />
              </div>
            </SelectTrigger>
            <SelectContent className="rounded-2xl border-slate-100 dark:border-slate-800 shadow-2xl">
              <SelectItem value="all" className="font-bold text-xs py-3 px-4">All Programs</SelectItem>
              {mockPrograms.map(p => (
                <SelectItem key={p.id} value={p.id} className="font-bold text-xs py-3 px-4">{p.name.en}</SelectItem>
              ))}
            </SelectContent>
          </Select>
        </div>
      </div>

      {/* Premium Table Container */}
      <div className="bg-white dark:bg-slate-900 rounded-[2.5rem] border border-slate-200/60 dark:border-slate-800 overflow-hidden shadow-sm">
        <div className="overflow-x-auto">
          <Table className="min-w-[1000px] lg:min-w-full">
            <TableHeader className="bg-slate-50/50 dark:bg-slate-950/50">
              <TableRow className="border-slate-100 dark:border-slate-800 hover:bg-transparent h-16">
                <TableHead className="pl-10 font-black text-[10px] uppercase tracking-widest text-slate-400">Beneficiary</TableHead>
                <TableHead className="font-black text-[10px] uppercase tracking-widest text-slate-400">Program Track</TableHead>
                <TableHead className="font-black text-[10px] uppercase tracking-widest text-slate-400">Regional Data</TableHead>
                <TableHead className="font-black text-[10px] uppercase tracking-widest text-slate-400">Status</TableHead>
                <TableHead className="font-black text-[10px] uppercase tracking-widest text-slate-400">Enrollment</TableHead>
                <TableHead className="pr-10 text-right font-black text-[10px] uppercase tracking-widest text-slate-400">Actions</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {filteredBeneficiaries.length === 0 ? (
                <TableRow>
                  <TableCell colSpan={6} className="h-64 text-center">
                    <div className="flex flex-col items-center justify-center gap-4">
                      <div className="h-20 w-20 rounded-full bg-slate-50 dark:bg-slate-950 flex items-center justify-center text-slate-200 dark:text-slate-800">
                        <Search size={40} strokeWidth={1} />
                      </div>
                      <div>
                        <p className="text-lg font-bold text-slate-900 dark:text-white">No results found</p>
                        <p className="text-sm text-slate-500">Try adjusting your filters or search terms</p>
                      </div>
                    </div>
                  </TableCell>
                </TableRow>
              ) : (
                filteredBeneficiaries.map((beneficiary) => (
                  <TableRow key={beneficiary.id} className="hover:bg-slate-50/80 dark:hover:bg-slate-950/50 transition-all border-slate-100 dark:border-slate-800 h-24 group">
                    <TableCell className="pl-10">
                      <div className="flex items-center gap-4">
                        <div className="relative">
                          <Avatar className="h-12 w-12 border-2 border-white dark:border-slate-900 shadow-sm rounded-2xl group-hover:scale-105 transition-transform">
                            <AvatarFallback className="bg-gradient-to-br from-teal-500 to-teal-700 text-white text-sm font-black">
                              {beneficiary.fullName.split(' ').map(n => n[0]).join('').substring(0, 2)}
                            </AvatarFallback>
                          </Avatar>
                          <div className={`absolute -bottom-1 -right-1 h-4 w-4 rounded-full border-2 border-white dark:border-slate-900 ${beneficiary.status === BeneficiaryStatus.ACTIVE ? 'bg-green-500' : 'bg-slate-300'
                            }`} />
                        </div>
                        <div>
                          <p className="font-black text-slate-900 dark:text-white leading-tight group-hover:text-teal-600 transition-colors">{beneficiary.fullName}</p>
                          <p className="text-[11px] font-bold text-slate-400 mt-1">{beneficiary.user.phone}</p>
                        </div>
                      </div>
                    </TableCell>
                    <TableCell>
                      <div className="flex flex-col gap-1">
                        <span className="text-sm font-bold text-slate-700 dark:text-slate-300">{beneficiary.program.name.en}</span>
                        <span className="text-[10px] font-black uppercase tracking-wider text-teal-600 opacity-60">Empowerment Track</span>
                      </div>
                    </TableCell>
                    <TableCell>
                      <div className="flex items-center gap-2">
                        <div className="h-8 w-8 rounded-lg bg-teal-50 dark:bg-teal-900/20 flex items-center justify-center text-teal-600">
                          <Globe size={14} strokeWidth={2} />
                        </div>
                        <div>
                          <p className="text-sm font-bold text-slate-700 dark:text-slate-200 capitalize">{beneficiary.location.district}</p>
                          <p className="text-[10px] text-slate-400 font-medium capitalize">{beneficiary.location.sector} Sector</p>
                        </div>
                      </div>
                    </TableCell>
                    <TableCell>
                      <Badge
                        variant="outline"
                        className={cn(
                          "h-7 px-3 rounded-full font-black text-[9px] uppercase tracking-widest border-none flex items-center gap-1.5 w-fit",
                          beneficiary.status === BeneficiaryStatus.ACTIVE ? 'bg-green-100 text-green-700 dark:bg-green-500/10 dark:text-green-400' :
                            beneficiary.status === BeneficiaryStatus.GRADUATED ? 'bg-blue-100 text-blue-700 dark:bg-blue-500/10 dark:text-blue-400' :
                              'bg-slate-100 text-slate-600 dark:bg-slate-800/50 dark:text-slate-400'
                        )}
                      >
                        <div className={cn("h-1.5 w-1.5 rounded-full",
                          beneficiary.status === BeneficiaryStatus.ACTIVE ? 'bg-green-500' :
                            beneficiary.status === BeneficiaryStatus.GRADUATED ? 'bg-blue-500' :
                              'bg-slate-400'
                        )} />
                        {beneficiary.status}
                      </Badge>
                    </TableCell>
                    <TableCell>
                      <div className="flex flex-col">
                        <span className="text-sm font-bold text-slate-700 dark:text-slate-300">{formatDate(beneficiary.enrollmentDate)}</span>
                        <span className="text-[10px] text-slate-400">Regular Intake</span>
                      </div>
                    </TableCell>
                    <TableCell className="pr-10 text-right">
                      <DropdownMenu>
                        <DropdownMenuTrigger asChild>
                          <Button variant="ghost" className="h-10 w-10 p-0 rounded-xl hover:bg-slate-100 dark:hover:bg-slate-800 transition-all">
                            <MoreHorizontal className="h-5 w-5 text-slate-400" />
                          </Button>
                        </DropdownMenuTrigger>
                        <DropdownMenuContent align="end" className="w-56 rounded-2xl border-slate-100 dark:border-slate-800 shadow-2xl p-2">
                          <DropdownMenuLabel className="px-3 pt-2 pb-1 text-[10px] font-black uppercase tracking-widest text-slate-400">Entity Control</DropdownMenuLabel>
                          <DropdownMenuItem className="rounded-xl py-3 px-3 cursor-pointer group" onClick={() => navigate(`/admin/beneficiaries/${beneficiary.id}`)}>
                            <FileText className="mr-3 h-4 w-4 text-slate-400 group-hover:text-teal-600 transition-colors" />
                            <span className="font-bold text-sm">Open File</span>
                          </DropdownMenuItem>
                          <DropdownMenuItem className="rounded-xl py-3 px-3 cursor-pointer group">
                            <UserCheck className="mr-3 h-4 w-4 text-slate-400 group-hover:text-teal-600 transition-colors" />
                            <span className="font-bold text-sm">Verify Activity</span>
                          </DropdownMenuItem>
                          <DropdownMenuSeparator className="my-2 bg-slate-50 dark:bg-slate-800" />
                          <DropdownMenuItem
                            className="rounded-xl py-3 px-3 cursor-pointer text-red-600 focus:text-red-700 focus:bg-red-50 dark:focus:bg-red-500/10 transition-all group"
                            onClick={() => handleStatusChange(beneficiary.id, BeneficiaryStatus.INACTIVE)}
                          >
                            <UserX className="mr-3 h-4 w-4 opacity-70 group-hover:scale-110 transition-transform" />
                            <span className="font-bold text-sm">Suspend Status</span>
                          </DropdownMenuItem>
                        </DropdownMenuContent>
                      </DropdownMenu>
                    </TableCell>
                  </TableRow>
                ))
              )}
            </TableBody>
          </Table>
        </div>
        <div className="px-10 py-6 border-t border-slate-50 dark:border-slate-800 flex flex-col sm:flex-row items-center justify-between gap-4 bg-slate-50/30 dark:bg-slate-950/20">
          <p className="text-[10px] font-black text-slate-400 uppercase tracking-widest leading-none">
            Viewing <span className="text-teal-600">{filteredBeneficiaries.length}</span> of {mockBeneficiaries.length} Database Records
          </p>
          <div className="flex gap-1">
            {[1, 2, 3].map(p => (
              <Button key={p} variant="ghost" className={`h-8 w-8 p-0 rounded-lg text-[10px] font-bold ${p === 1 ? 'bg-white dark:bg-slate-900 shadow-sm border border-slate-100 dark:border-slate-800 text-teal-600' : 'text-slate-400'}`}>{p}</Button>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}