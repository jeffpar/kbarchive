---
layout: page
title: "Q128756: Command Line Switches for the XCOPY Command"
permalink: kb/128/Q128756/
---

## Q128756: Command Line Switches for the XCOPY Command

	Article: Q128756
	Product(s): Microsoft Windows 95.x Retail Product
	Version(s): 95
	Operating System(s): 
	Keyword(s): kbusage win95
	Last Modified: 17-DEC-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows 95 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	This article lists the command line switches for the XCOPY command in Windows
	95.
	
	MORE INFORMATION
	================
	
	The command line switches for the XCOPY command listed in this article are in
	addition to the switches supported by the MS-DOS version of the XCOPY command.
	To see a list of these switches, type "xcopy /?" (without the quotation marks)
	at a command prompt in Windows 95.
	
	The following switches are included in Windows NT and Windows 95:
	
	/T - Copy directory structure only
	/D - Copy files that are newer than the destination files
	/C - Continue even on error
	/H - Copy hidden and system files, too
	/R - Overwrite read-only files
	/U - Copy only files that already exist on destination
	/N - Copy using short names
	
	The following switches are new for Windows 95:
	
	/I - Copies more than one file to destination (assumes destination is a
	    directory)
	/Q - Copies files without showing filenames
	/F - Displays full path and destination while copying files
	/L - Displays files that would be copied
	/K - Copies attributes (as opposed to resetting read-only attributes)
	
	The following switches are included in MS-DOS and Windows 95:
	
	/Y - Copy without confirming replacement of existing files
	/-Y - Confirm replacement of existing files
	/A - Copy source files that have Archive file attributes set
	/M - Copy source files that have Archive file attributes set, but turns
	    off source attributes.
	/D:date - Copies files modified on or after the specified date
	/P - Prompts to confirm whether you want to create each destination file
	/S - Copies directories and subdirectories unless they are empty
	/E - Copies any subdirectories, even if they are empty
	/V - Verifies each file as it is written to the destination file
	/W - Displays a message to press a key to begin copying files
	
	Notes
	-----
	
	- The /V switch is ignored in Windows 95.
	
	- The /I, /Q, /F, /L, and /K switches are available only when you are running
	  Xcopy from within Windows 95.
	
	======================================================================
	Keywords          : kbusage win95 
	Technology        : kbWin95search kbZNotKeyword3
	Version           : 95
	
	=============================================================================
	
