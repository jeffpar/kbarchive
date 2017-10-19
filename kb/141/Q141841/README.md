---
layout: page
title: "Q141841: Restore Windows Files Option Missing from Setup"
permalink: /kb/141/Q141841/
---

## Q141841: Restore Windows Files Option Missing from Setup

	Article: Q141841
	Product(s): Microsoft Windows 95.x Retail Product
	Version(s): WINDOWS:95
	Operating System(s): 
	Keyword(s): kbsetup win95kbfaq
	Last Modified: 17-DEC-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows 95 
	-------------------------------------------------------------------------------
	
	
	SYMPTOMS
	========
	
	When you run Windows 95 Setup from within Windows 95, the Restore Windows Files
	option (also known as the Verify Install option) may not appear.
	
	CAUSE
	=====
	
	This behavior can occur if a title in the Setuplog.txt file contains more than
	32 characters (including spaces). Titles are also known as section headers, and
	begin and end with brackets ([]).
	
	RESOLUTION
	==========
	
	Disable any titles containing more than 32 characters in the Setuplog.txt file.
	To do so, follow these steps:
	
	1. Restart the computer. When you see the "Starting Windows 95" message, press
	  the F8 key, and then choose Command Prompt Only from the Startup menu.
	
	2. Type the following lines at the command prompt:
	
	  " attrib -h setuplog.txt
	  edit setuplog.txt " (without the quotation marks)
	
	3. Place a semicolon (;) at the beginning of any title containing more than 32
	  characters.
	
	4. On the File menu, click Exit. Choose Yes to save the file when you are
	  prompted.
	
	5. Restart the computer and then run Setup again.
	
	MORE INFORMATION
	================
	
	The Restore Windows Files option includes the following choices:
	
	- Restore Windows files that are changed or corrupted
	
	- Copy all Windows files again
	
	Choosing the first option replaces only files that are missing or have changed
	since the last time you ran Setup. Choosing the second option replaces all files
	and allows you to change the installation folder.
	
	Note that if any of the following lines are missing from the Setuplog.txt file,
	the Restore Windows Files option will not be available in Setup:
	
	[Setup]
	Reboot=1
	InstallDir=<Install Path>
	
	[Started]
	Started=Passed
	
	[Restart]
	Restart=Passed
	
	Additional query words: reinstall
	
	======================================================================
	Keywords          : kbsetup win95 kbfaq
	Technology        : kbWin95search kbZNotKeyword3
	Version           : WINDOWS:95
	
	=============================================================================
	
