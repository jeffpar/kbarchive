---
layout: page
title: "Q142610: Err Msg: OS Loader V3.51 TRAP 0000000E PAGE FAULT"
permalink: /kb/142/Q142610/
---

## Q142610: Err Msg: OS Loader V3.51 TRAP 0000000E PAGE FAULT

	Article: Q142610
	Product(s): Microsoft Windows NT
	Version(s): 3.51
	Operating System(s): 
	Keyword(s): kbother
	Last Modified: 05-FEB-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Workstation version 3.51 
	- Microsoft Windows NT Server version 3.51 
	-------------------------------------------------------------------------------
	
	
	SYMPTOMS
	========
	
	Upon startup, Windows NT 3.51 displays the following black screen:
	
	  OS Loader V3.51
	  TRAP 0000000E ===============  PAGE FAULT ==================
	  **At linear address 00000FFC
	  tr=0028 cr0=80000011 cr2=00000ffc cr3=00030000
	  gdt limit=03ff base=00036000 idt limit=07FF base00036400
	  cs:eip=0008:0031C50E ss:esp=0010:00061260 errcode=0000
	  flags=00010016 NoCy NoZr IntDis Down TrapDis
	  eax=00000000 ebx=003230F0 ecx=00000FFC edx=003230F0 ds=0010 es=0010
	  edi=FFFFFFFF esi=FFFFFFFF ebp=000612C0 cr0=80000011 fs=0030 gs=0000
	
	NOTE: the register values may vary from system to system.
	
	WORKAROUND
	==========
	
	Use the following KB article to create a Windows NT Boot disk.
	
	KB ID: Q119467 Creating a Boot Disk for an NTFS or FAT Partition.
	
	Replace the Windows NT 3.51 ntldr with one from Windows NT V3.51 service pack-5
	or the ntldr that ships with Windows NT 4.0.
	
	
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in Windows NT version 3.51. This
	problem was corrected in the latest Windows NT 3.51 U.S. Service Pack. For
	information on obtaining the Service Pack, query on the following word in the
	Microsoft Knowledge Base (without the spaces):
	
	  S E R V P A C K
	
	Additional query words: prodnt 3.51
	
	======================================================================
	Keywords          : kbother 
	Technology        : kbWinNTsearch kbWinNTWsearch kbWinNT351search kbWinNTW351search kbWinNTW351 kbWinNTSsearch kbWinNTS351 kbWinNTS351search
	Version           : :3.51
	
	=============================================================================
	
