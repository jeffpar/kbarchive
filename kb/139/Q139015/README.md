---
layout: page
title: "Q139015: Trap 0x0000000A in ExFreePool of NTOSKRNL.EXE"
permalink: kb/139/Q139015/
---

## Q139015: Trap 0x0000000A in ExFreePool of NTOSKRNL.EXE

	Article: Q139015
	Product(s): Microsoft Windows NT
	Version(s): winnt:3.51
	Operating System(s): 
	Keyword(s): kbprint kbPrinting
	Last Modified: 07-SEP-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Server version 3.51 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	Your computer running Windows NT 3.51 experiences a Trap 0x0000000A in NTOSKRNL
	with the following stack trace:
	
	fe1b3ac0 8010e05d 00000001 00000001 c0390a98 NT!_KiTrap0E+0x252
	fe1b3b50 80164c1a ff50cca8 fe50d168 fe3b27e8 NT!_ExFreePool+0x2f7
	fe1b3b88 801220d3 fe401628 fe1b3c00 fe1b3c70 NT!_MiCreateDataFileMap+0x2ca
	fe1b3c3c 80109614 ffb5a314 00000007 00000000 NT!_MmCreateSection+0x43b
	fe1b3ce4 fbcf4bf9 fe401628 e2647018 00000000 NT!_CcInitializeCacheMap+0x242
	fe1b3e0c fbcf52e0 fe3fa188 fe3e3870 00000000 Ntfs!_NtfsCommonRead+0x313
	fe1b3e88 fbe6d6c7 fe401628 fe1b3f00 00000000 Ntfs!_NtfsFsdRead+0xf9
	fe1b3ea0 fbe67ca0 fe1b3f6c fbcf7b59 fbd01038
	srv!_SrvBuildReadOrWriteRequest+0xf
	fe1b3f00 fbe61525 fe3e3788 fe3e3788 fbe61483 srv!_SrvSmbReadRaw+0x37d
	fe1b3f0c fbe61483 fe3e3788 fe3e3788 fe3e5b60 srv!_SrvProcessSmb+0x18
	fe1b3f20 fbe72185 fe3e3788 fe1b3f7c 00000000 srv!_SrvRestartReceive+0x90
	fe1b3f40 fbe7210b fe3e5b60 00000000 80132910
	srv!_DequeueAndProcessWorkItem+0x31
	fe1b3f4c 80132910 fe3e5b60 00000000 00000000 srv!_WorkerThread+0x24
	fe1b3f7c 8013cf4e fbe720e7 fe3e5b60 00000000
	NT!_PspSystemThreadStartup+0x40
	
	CAUSE
	=====
	
	The server Traps because the memory manager tries to free a block of pool that
	had already been freed.
	
	The problem occurs when mapping memory to hold a large file. Memory manager tries
	to fulfill a large pool allocation request, when this fails (usually a low
	memory situation), memory manager breaks up the allocation into smaller
	requests. If the smaller allocation requests also fail, the memory manager frees
	up any of the requests that had succeeded.
	
	
	RESOLUTION
	==========
	
	This problem has been corrected in the latest Service Pack for Windows NT
	version 3.51.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in Windows NT version 3.51. This
	problem was corrected in the latest Windows NT 3.51 U.S. Service Pack. For
	information on obtaining the Service Pack, query on the following word in the
	Microsoft Knowledge Base (without the spaces):
	
	  S E R V P A C K
	
	Additional query words: prodnt
	
	======================================================================
	Keywords          : kbprint kbPrinting 
	Technology        : kbWinNTsearch kbWinNT351search kbWinNTSsearch kbWinNTS351 kbWinNTS351search
	Version           : winnt:3.51
	
	=============================================================================
	
