---
layout: page
title: "Q254493: SHORTCUT.EXE Does Not Accept Pathnames In Command Line"
permalink: /kb/254/Q254493/
---

## Q254493: SHORTCUT.EXE Does Not Accept Pathnames In Command Line

	Article: Q254493
	Product(s): Microsoft Press
	Version(s): 
	Operating System(s): 
	Keyword(s): 
	Last Modified: 01-APR-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- MSPRESS Microsoft Windows NT Server 4.0 Resource Kit ISBN 1-57231-344-7 
	- MSPRESS Microsoft Windows NT Workstation 4.0 Resource Kit ISBN 1-57231-343-9 
	- MSPRESS Microsoft Windows 95 Resource Kit ISBN 1-55615-678-2 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	If you use the command line to direct SHORTCUT.EXE to a .LNK file within the
	directory structure, such as the following command from the command prompt:
	
	SHORTCUT -S C:\DIR1\DIR2\SHCUT.LNK
	
	SHORTCUT.EXE may return an error message similar to the following:
	
	  Error: Unable to find C:\DIR1\SHCUT.LNK
	
	CAUSE
	=====
	
	SHORTCUT.EXE does not correctly interpret path names when the -S switch is used.
	
	WORKAROUND
	==========
	
	Change to the directory containing the .LNK file before executing SHORTCUT.EXE.
	
	STATUS
	======
	
	Microsoft Press has confirmed this to be a problem in the books listed at the
	beginning of this article. We are researching this problem and will post new
	information as soon as it becomes available.
	
	MORE INFORMATION
	================
	
	Steps to Reproduce the Behavior
	-------------------------------
	
	1. Create a valid .LNK file as C:\DIR1\DIR2\SHCUT.LNK.
	
	2. From the C:\ prompt, type SHORTCUT -S C:\DIR1\DIR2\SHCUT.LNK.
	  The following error message will be displayed:
	
	  Error: unable to find C:\DIR1\SHCUT.LNK
	
	3. From the C:\ prompt, type SHORTCUT -S \DIR1\DIR2\SHCUT.LNK.
	  The following error message will be displayed:
	
	  Error: unable to find \DIR1\DIR2\SHCUT.LNK
	
	4. From the C:\ prompt, type CD \DIR1\DIR2.
	
	5. Type SHORTCUT -S SHCUT.LNK. No error will be displayed.
	
	Additional query words: RKBOOK NT40 WIN95 RESKIT TOOLS RESOURCE KIT
	
	======================================================================
	Keywords          :  
	Technology        : kbMSPressSearch kbZNotKeyword6 kbZNotKeyword2 kbZNotKeyword3
	Version           : :
	Issue type        : kbprb
	
	=============================================================================
	
