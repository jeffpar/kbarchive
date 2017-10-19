---
layout: page
title: "Q147381: How to Use System Policies On a Standalone Computer"
permalink: /kb/147/Q147381/
---

## Q147381: How to Use System Policies On a Standalone Computer

	Article: Q147381
	Product(s): Microsoft Windows 95.x Retail Product
	Version(s): 95
	Operating System(s): 
	Keyword(s): kbenv kbtool win95
	Last Modified: 17-DEC-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows 98 
	- Microsoft Windows 95 
	-------------------------------------------------------------------------------
	
	IMPORTANT: This article contains information about editing the registry.
	Before you edit the registry, you should first make a backup copy of the
	registry files (System.dat and User.dat). Both are hidden files in the
	Windows folder.
	
	SUMMARY
	=======
	
	This article describes how to configure Windows to use a system policy on a
	stand-alone computer (a computer that is not on a network).
	
	WARNING: Using System Policy Editor (Poledit.exe) incorrectly can cause serious
	problems that may require you to reinstall Windows. Microsoft cannot guarantee
	that problems resulting from the incorrect use of System Policy Editor can be
	solved. Use System Policy Editor at your own risk.
	
	MORE INFORMATION
	================
	
	You can use system policies in Windows to customize parts of the desktop or to
	restrict access to certain programs or options.
	
	To use system policies, user profiles must be enabled and System Policy Editor
	must be installed. System Policy Editor is available in the following
	locations:
	
	Windows 95
	----------
	
	The Admin\Apptools\Poledit folder on the Windows 95 CD-ROM.
	
	NOTE: System Policy Editor is not included in the floppy disk version of Windows
	95. You can download Policy.exe, a self-extracting file containing Poledit.exe,
	from online services. Please see the following article in the Microsoft
	Knowledge Base for information about downloading Policy.exe:
	
	  Q135315 CD-ROM Extras for Microsoft Windows 95 Upgrade
	
	Windows 98
	----------
	
	The Tools\Reskit\Netadmin\Poledit folder on the Windows 98 CD-ROM.
	
	Use the Add/Remove Programs tool in Control Panel to install System Policy
	Editor.
	
	To configure a standalone Windows-based computer to use system policies, follow
	these steps:
	
	1. Click the Start button, and then click Run.
	
	2. In the Open box, type "poledit" (without the quotation marks), and then click
	  OK.
	
	3. In System Policy Editor, click Open Registry on the File menu.
	
	4. Double-click the Local Computer icon, then the Network icon, and then
	  double-click the Update icon.
	
	5. Click the Remote Update check box, and then click Manual in the Update Mode
	  box. In the Path box, type the path and file name for your system policy
	  file. You can place this file in any folder on the hard disk. Click OK.
	
	6. On the File menu, click Save. On the File menu, click New File.
	
	7. Select the system policy settings you want to use.
	
	8. On the File menu, click Save As. Save the file with the name and path you
	  used in step 5.
	
	  NOTE: If you try to save a file with an extension other than .pol, you receive
	  the error message "An error occurred writing the registry. The file cannot be
	  saved." Therefore, if you specified a file name with an extension other than
	  .pol in step 5, save the file with a .pol extension in step 8, quit System
	  Policy Editor, and then rename the file to match the file name you specified
	  in step 5. Restart Windows.
	
	9. Quit System Policy Editor, and then restart Windows.
	
	For information about how to set up locally-based system policies on a computer
	running Windows NT, see the following article in the Microsoft Knowledge Base:
	
	  Q168579 How to Set Up Locally-Based System Policies
	
	Additional query words: protect
	
	======================================================================
	Keywords          : kbenv kbtool win95 
	Technology        : kbWin95search kbWin98search kbZNotKeyword3 kbWin98
	Version           : 95
	Issue type        : kbhowto
	
	=============================================================================
	
