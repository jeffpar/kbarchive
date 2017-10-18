---
layout: page
title: "Q77405: View File Does Not Show Subdirectories in MS-DOS Shell"
permalink: kb/077/Q77405/
---

## Q77405: View File Does Not Show Subdirectories in MS-DOS Shell

	Article: Q77405
	Product(s): Microsoft Disk Operating System
	Version(s): MS-DOS:5.0,5.0a,6.0
	Operating System(s): 
	Keyword(s): 
	Last Modified: 22-NOV-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft MS-DOS operating system versions 5.0, 5.0a, 6.0 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	Within MS-DOS 5.0 or later Shell, if files in the root directory can be viewed
	but files in other directories cannot, ensure that the Select Across Directories
	option is not active in the Options Menu. If it is inactive, the DOSSHELL.INI
	file may be corrupted.
	
	MORE INFORMATION
	================
	
	The DOSSHELL.INI file can be recreated by expanding the appropriate file from
	the MS-DOS 5 or later Upgrade disks. The following list identifies the file to
	expand based on the monitor being used.
	
	  Monitor          File to Expand
	  -------          --------------
	
	  Monochrome:      MONO.IN_
	  CGA:             CGA.IN_
	  EGA:             EGA.IN_
	  EGA monochrome:  MONO.IN_
	  VGA:             EGA.IN_
	  VGA monochrome:  MONO.IN_
	
	These files are located on disk 2 (3.5-inch format) or disk 3 (5.25-inch format).
	It is not necessary to replace other Shell files.
	
	The DOSSHELL.INI file can be corrupted in several ways. The following are two
	common causes for a corrupt DOSSHELL.INI file:
	
	- Not exiting Shell properly
	
	  You must exit either by pressing ALT+F4, or by choosing Exit from the File
	  menu. In both cases, wait for the DOS prompt to appear before turning the
	  computer off. The DOSSHELL.INI is updated each time you exit Shell, so
	  cutting power early can damage the file. Note: After pressing SHIFT+F9 to
	  temporarily exit to a DOS prompt, type "exit" (without the quotation marks)
	  to return to Shell before exiting Shell.
	
	- Editing the file with a word processor that saves the file in binary format
	
	  If a text editor or word processor is used to modify the file, and its default
	  file format is its own binary format, verify that the DOSSHELL.INI is saved
	  as text only or ASCII format.
	
	For additional information, query on the following words:
	
	  "DOS" (without the quotation marks) and "Shell" (without the quotation marks)
	  and "5.0" (without the quotation marks) and "Select Across Directories"
	  (without the quotation marks)
	
	
	Additional query words: 5.00 5.00a 6.00
	
	======================================================================
	Keywords          :  
	Technology        : kbMSDOSSearch kbMSDOS600 kbMSDOS500 kbMSDOS500a
	Version           : MS-DOS:5.0,5.0a,6.0
	
	=============================================================================
	
