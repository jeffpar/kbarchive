---
layout: page
title: "Q189214: Running Win 98: Win98 Starts Here Demo Installation Confusing"
permalink: kb/189/Q189214/
---

## Q189214: Running Win 98: Win98 Starts Here Demo Installation Confusing

	Article: Q189214
	Product(s): Microsoft Press
	Version(s): 
	Operating System(s): 
	Keyword(s): kbdocerr
	Last Modified: 07-JAN-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- MSPRESS Running Microsoft Windows 98 ISBN 1-57231-681-0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	The Readme.txt file in the root directory of the CD-ROM states that to install
	the Windows 98 Starts Here demo, you should run Autorun.exe from the Win98SH
	folder.
	
	However, if you run \Win98SH\Autorun.exe, My Computer will open and display the
	root directory of the C drive. Nothing else will occur.
	
	CAUSE
	=====
	
	The autorun.inf file contains errors that cause the Autorun.exe to function
	incorrectly.
	
	WORKAROUND
	==========
	
	From the Win98SH folder, open Start.htm. The demo will now proceed normally.
	
	STATUS
	======
	
	This problem was corrected in the second printing of "Running Microsoft Windows
	98."
	
	MORE INFORMATION
	================
	
	The first printing of "Running Microsoft Windows 98" and the second and later
	printings of "Running Microsoft Windows 98" include different demonstration
	copies of "Microsoft Windows 98 Starts Here."
	
	The second and later printings include a Setup.exe program in the Win98SH folder.
	The first printing does not.
	
	The information in this article applies to the first printing of "Running
	Microsoft Windows 98" only. The second and later printings will have this
	problem corrected.
	
	Additional query words: ms_press win98sh 1-57231-681-0
	
	======================================================================
	Keywords          : kbdocerr 
	Technology        : kbMSPressSearch
	Version           : :
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	
