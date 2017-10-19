---
layout: page
title: "Q143024: PPT7: Files Installed by PowerPoint Viewer for Windows 95"
permalink: /kb/143/Q143024/
---

## Q143024: PPT7: Files Installed by PowerPoint Viewer for Windows 95

	Article: Q143024
	Product(s): Microsoft PowerPoint for Windows
	Version(s): 7.0
	Operating System(s): 
	Keyword(s): kbsetup kbdta kbdiskdir kbdir
	Last Modified: 31-JUL-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft PowerPoint Viewer for Windows 95, version 7.0 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	When you install PowerPoint Viewer, six files are installed on your computer.
	The following table lists these files along with their sizes, versions, and
	creation dates.
	
	  File             Size (bytes)       Version        Date
	  ---------------------------------------------------------------------
	
	  License.txt           4,915         N/A            12/18/95
	
	  Pp4x32.dll          547,840         7.0            See the "More
	                                                     Information" section
	                                                     of this article
	
	  Ppview32.exe      1,924,096         7.0            12/18/95
	
	  Ppvwread.txt          5,178         N/A            12/18/95
	
	  Pngsetup.dat             12         N/A            12/18/95
	
	  Pngsetup.ex_         55,456         7.1            12/18/95
	
	MORE INFORMATION
	================
	
	Pp4x32.dll is installed only if Setup does not detect Pp4x32.dll in the
	destination directory (for example, the file is not installed if you are
	installing the 32-bit viewer into the directory of PowerPoint for Windows 95,
	version 7.0). The current version is 7.0, and the date may be either 7/20/95 (if
	the program is installed with PowerPoint for Windows 95, version 7.0) or
	12/18/95 (if the program is installed with PowerPoint Viewer for Windows 95).
	
	The default location of PowerPoint depends on the type of installation. The
	following table lists the location based on the installation type.
	
	  If Viewer is installed              The program will be in this location
	  ------------------------------------------------------------------------
	
	  Without Microsoft Office installed  C:\Ppview32
	  With Microsoft Office installed     C:\Msoffice\Powerpnt
	  With PowerPoint installed           C:\Powerpnt
	
	Additional query words: 7.00 w_powerpnt powerpoint 32 bit viewer
	
	======================================================================
	Keywords          : kbsetup kbdta kbdiskdir kbdir 
	Technology        : kbPowerptViewerSearch kbPowerptViewer700 kbZnotKeyword7 kbViewerSearch
	Version           : :7.0
	Hardware          : x86
	Issue type        : kbinfo
	
	=============================================================================
	
