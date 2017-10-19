---
layout: page
title: "Q125801: Disabling Execute Permission Causes Irrelevant Error Messages"
permalink: /kb/125/Q125801/
---

## Q125801: Disabling Execute Permission Causes Irrelevant Error Messages

	Article: Q125801
	Product(s): Microsoft Windows NT
	Version(s): 
	Operating System(s): 
	Keyword(s): 
	Last Modified: 08-AUG-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Workstation version 3.5 
	- Microsoft Windows NT Server version 3.5 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you run a program under File Manager from a Windows NT file system (NTFS)
	partition, and the program has the Execute permission disabled, the following
	error message appears:
	
	  Cannot Run Program
	  Not enough memory to start the specified application.
	  Quit one or more applications, and then try again.
	
	When you run the program from Program Manager, the following error message
	appears:
	
	  Application Execution Error
	  Insufficient memory to run this application; close one or more Windows
	  applications and try again.
	
	When you run the program from the MS-DOS Command Prompt (CMD.EXE), the following
	error message appears:
	
	  Access is denied.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in Windows NT version 3.5. We are
	researching this problem and will post new information here in the Microsoft
	Knowledge Base as it becomes available.
	
	Steps to Reproduce Problem
	--------------------------
	
	1. Start File Manager and highlight an executable file (*.EXE) on an NTFS
	  partition.
	
	2. From the Security menu, choose Permissions.
	
	3. In the Type of Access box choose select Special Access.
	
	4. Select all options except for Execute.
	
	5. Run the program from File Manager, Program Manager, or the MS-DOS Command
	  Prompt.
	
	Additional query words: prodnt winfile
	======================================================================
	Keywords          :  
	Technology        : kbWinNTsearch kbWinNTWsearch kbWinNT350search kbWinNTW350 kbWinNTW350search kbWinNTSsearch kbWinNTS350 kbWinNTS350search
	
	=============================================================================
	
