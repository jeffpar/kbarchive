---
layout: page
title: "Q134326: Windows NT 3.5 Service Pack 2 Does Not Detect Windows NT Version"
permalink: /kb/134/Q134326/
---

## Q134326: Windows NT 3.5 Service Pack 2 Does Not Detect Windows NT Version

	Article: Q134326
	Product(s): Microsoft Windows NT
	Version(s): 
	Operating System(s): 
	Keyword(s): 
	Last Modified: 08-AUG-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Workstation versions 3.5, 3.51 
	- Microsoft Windows NT Server versions 3.5, 3.51 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you run the Windows NT 3.5 Service Pack 2 Update program (UPDATE.EXE) in
	Windows NT 3.51, the following STOP error message appears when you restart
	Windows NT:
	
	  STOP: c0000139 - The procedure call point NtAllocateUuids could not be
	  located in the dynamic link library NTDLL.DLL
	
	CAUSE
	=====
	
	Windows NT 3.5 Service Pack 2 should only be applied to Windows NT version 3.5.
	The Windows NT 3.5 Service Pack 2 UPDATE.EXE does not detect if you are
	attempting to install over Windows NT version 3.51.
	
	WORKAROUND
	==========
	
	To work around this problem, you must upgrade to Windows NT 3.51 again. The
	Emergency Repair Disk cannot salvage the Windows NT 3.51 system since the
	registry information for the operating system version has been changed to
	Windows NT 3.5 Service Pack 2. The Repair process for Windows NT looks for the
	operating system version.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in Windows NT version 3.5 Service
	Pack 2. We are researching this problem and will post new information here in
	the Microsoft Knowledge Base as it becomes available.
	
	
	Additional query words: prodnt
	
	======================================================================
	Keywords          :  
	Technology        : kbWinNTsearch kbWinNTWsearch kbWinNT351search kbWinNT350search kbWinNTW350 kbWinNTW350search kbWinNTW351search kbWinNTW351 kbWinNTSsearch kbWinNTS351 kbWinNTS350 kbWinNTS351search kbWinNTS350search
	
	=============================================================================
	
