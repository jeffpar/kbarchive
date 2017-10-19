---
layout: page
title: "Q115482: SET VOLUME Provides Support for MS-DOS-Style Paths"
permalink: /kb/115/Q115482/
---

## Q115482: SET VOLUME Provides Support for MS-DOS-Style Paths

	Article: Q115482
	Product(s): Microsoft FoxPro
	Version(s): MACINTOSH:2.5b,2.5c,3.0b
	Operating System(s): 
	Keyword(s): 
	Last Modified: 04-AUG-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft FoxPro for Macintosh, versions 2.5b, 2.5c 
	- Microsoft Visual FoxPro for Macintosh, version 3.0b 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	To assign a drive letter to the Macintosh volume (hard disk), use the SET VOLUME
	command.
	
	MORE INFORMATION
	================
	
	After a drive letter has been assigned to the hard disk, you can use normal
	MS-DOS-style path conventions, with the exception of folders (directories) whose
	names contain spaces. If a folder name contains spaces, the entire path must be
	enclosed in quotation marks.
	
	For more information about Macintosh paths, volumes, folders, and files, see page
	17 of the "Installation and Macintosh Features Guide."
	
	Steps to Assign a Drive Letter to the Hard Disk
	-----------------------------------------------
	
	1. Determine the name of the hard disk. Using the Macintosh Finder, view the
	  name displayed below the hard disk icon, or type the following in the FoxPro
	  Command window:
	
	        SET VOLUME C: TO  && Clears VOLUME setting, if any
	        SET DEFAULT TO    && Makes the volume's root the current directory
	        ?SYS(5)           && Displays volume name
	
	2. In this example, assume the hard disk is called "Macintosh HD:" (without the
	  quotation marks). Type one of the following commands in the Command window:
	
	        SET VOLUME C: TO "Macintosh HD:"
	
	  -or-
	
	        SET VOLUME C: TO SYS(5)
	
	NOTE: To set the drive letter each time FoxPro starts, add the following line to
	the CONFIG.FPM file:
	
	     VOLUME C: = "Macintosh HD:"
	
	Referencing a Folder Name with Spaces
	-------------------------------------
	
	Assume the SET VOLUME command has been issued, and a folder called Test Folder
	exists in the hard disk window.
	
	To set the default to this folder, type the following in the Command window:
	
	     SET DEFAULT TO "C:\Test Folder"
	
	NOTE: In this example, do not use a folder that resides on the desktop itself.
	You should see the folder in the hard disk window. If the hard disk window is
	not open, double-click the hard disk icon, usually located in the upper-right
	corner of the desktop.
	
	For information about referencing folders on the desktop, please see the
	following article(s) in the Microsoft Knowledge Base:
	
	  Q114806 Path to the Macintosh Desktop
	
	(c) Microsoft Corporation 2000, All Rights Reserved. Contributions by Kevin
	Zollman, Microsoft Corporation.
	
	
	Additional query words: VFoxMac FoxMac pathing akz
	
	======================================================================
	Keywords          :  
	Technology        : kbHWMAC kbOSMAC kbVFPsearch kbAudDeveloper kbFoxproSearch kbFoxPro250bMac kbFoxPro250cMac kbVFP300bMac
	Version           : MACINTOSH:2.5b,2.5c,3.0b
	
	=============================================================================
	
