---
layout: page
title: "Q182840: Net Localgroup Access Violates"
permalink: /kb/182/Q182840/
---

## Q182840: Net Localgroup Access Violates

	Article: Q182840
	Product(s): Microsoft Windows NT
	Version(s): WinNT:4.0
	Operating System(s): 
	Keyword(s): 
	Last Modified: 09-AUG-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Server version 4.0 
	- Microsoft Windows NT Workstation version 4.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you issue the following net command from a Windows NT MS-DOS command
	prompt, "NET LOCALGROUP", the computer will display the following Dr. Watson
	error message:
	
	  An application error has occurred
	  and an application error log is being generated.
	
	  NET1.exe
	  Exception: access violation (0xc00000005), Address: 0x7780158b
	
	**Note that the address reported may differ from the one above.
	
	The net localgroup command is designed to display a list of local groups on the
	computer that you are running the command against.
	
	CAUSE
	=====
	
	This is caused by having more than 500 local groups defined in the security
	account manager (SAM) database of the target computer, whether that is the
	primary domain controller (PDC) or a member server or workstation.
	
	RESOLUTION
	==========
	
	As a workaround, if a list needs to be generated of all the local groups that
	are defined in the SAM database, the Windows NT Server Resource Kit utility,
	Addusers.exe will accomplish this. Addusers.exe has been tested and confirmed to
	be a suitable workaround for this issue. For more information on the Addusers
	utility, see the documentation in the Resource Kit or use the /? switch on the
	command line, (that is, addusers.exe /?).
	
	STATUS
	======
	
	Microsoft has confirmed this to be a bug in the Microsoft products listed at the
	beginning of this article. We are researching this bug and will post new
	information here in the Microsoft Knowledge Base as it becomes available.
	
	MORE INFORMATION
	================
	
	
	
	Additional query words: drwtsn32.log user.dmp debug
	
	======================================================================
	Keywords          :  
	Technology        : kbWinNTsearch kbWinNTWsearch kbWinNTW400 kbWinNTW400search kbWinNT400search kbWinNTSsearch kbWinNTS400search kbWinNTS400
	Version           : WinNT:4.0
	Hardware          : ALPHA MIPS x86
	Issue type        : kbbug
	Solution Type     : kbpending
	
	=============================================================================
	
