---
layout: page
title: "Q133133: USER32.DBG Link Date Does Not Match USER32.DLL"
permalink: kb/133/Q133133/
---

## Q133133: USER32.DBG Link Date Does Not Match USER32.DLL

	Article: Q133133
	Product(s): Microsoft Windows NT
	Version(s): 3.51
	Operating System(s): 
	Keyword(s): 
	Last Modified: 06-FEB-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Workstation version 3.51 
	- Microsoft Windows NT Server version 3.51 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you run MSVC 2.1 SETUPDBG.EXE to install symbol files on your computer
	running Windows NT 3.51 Server or Workstation, the following error message
	appears:
	
	  The version of the file 'User32.DBG' does not match the corresponding DLL on
	  your machine. Do you want to copy it?
	
	When you choose Yes, the program continues.
	
	CAUSE
	=====
	
	This error is generated because SETUPDBG.EXE looks at the link date for symbol
	verification.
	
	
	STATUS
	------
	
	Microsoft has confirmed this to be a problem in Windows NT version 3.51. We are
	researching this problem and will post new information here in the Microsoft
	Knowledge Base as it becomes available.
	
	Additional query words: 3.51 prodnt
	
	======================================================================
	Keywords          :  
	Technology        : kbWinNTsearch kbWinNTWsearch kbWinNT351search kbWinNTW351search kbWinNTW351 kbWinNTSsearch kbWinNTS351 kbWinNTS351search
	Version           : :3.51
	
	=============================================================================
	
