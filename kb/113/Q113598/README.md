---
layout: page
title: "Q113598: Application Execution Error After Changing Country to Turkey"
permalink: /kb/113/Q113598/
---

## Q113598: Application Execution Error After Changing Country to Turkey

	Article: Q113598
	Product(s): Microsoft Windows NT
	Version(s): 3.1
	Operating System(s): 
	Keyword(s): kbother
	Last Modified: 08-AUG-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Server version 3.1 
	- Microsoft Windows NT Workstation version 3.1 
	- Microsoft Windows NT Advanced Server, version 3.1 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	If you change the International settings of Country to Turkey and Language to
	Turkish in Control Panel, the following error message may appear when you
	restart your computer and select any of the default Windows NT or Windows NT
	Advanced Server applications:
	
	  Application Execution Error
	  The path <filename> is invalid.
	
	CAUSE
	=====
	
	This occurs due to directory names and file names that include the letter "i"
	(lowercase) being changed. The character "i" is changed to a character "y" (with
	an accent). Therefore, if the system root directory name for Windows NT includes
	the letter "i", all applications within that directory may not run correctly.
	
	WORKAROUND
	==========
	
	Do the following steps to work around this problem:
	
	1. Click the program icon once and press ALT+ENTER to display the program item
	  properties.
	
	2. Choose the Browse option button, select the file for that application, and
	  then choose the OK button.
	
	3. Make a note of the new entry on the command line, and then choose OK.
	
	Repeat these steps for all program items that are affected.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in Windows NT and Windows NT
	Advanced Server version 3.1. This problem was corrected in Windows NT version
	3.5.
	
	Additional query words: prodnt ntas fat file manager
	
	======================================================================
	Keywords          : kbother 
	Technology        : kbWinNTsearch kbWinNTWsearch kbWinNTW310 kbWinNTSsearch kbWinNTS310 kbWinNTAdvSerSearch kbWinNTAdvServ310 kbWinNTS310search kbWinNT310Search kbWinNTW310Search
	Version           : 3.1
	
	=============================================================================
	
