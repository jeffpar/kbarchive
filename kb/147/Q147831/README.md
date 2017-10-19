---
layout: page
title: "Q147831: How to Install Old MS-DOS Tools in Windows 95"
permalink: /kb/147/Q147831/
---

## Q147831: How to Install Old MS-DOS Tools in Windows 95

	Article: Q147831
	Product(s): Microsoft Windows 95.x Retail Product
	Version(s): 95
	Operating System(s): 
	Keyword(s): kbtool win95
	Last Modified: 17-DEC-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows 95 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	Windows 95 includes most of the MS-DOS tools included with previous versions of
	Microsoft MS-DOS. This article describes how to install the other old MS-DOS
	tools that are not installed automatically by Windows 95.
	
	MORE INFORMATION
	================
	
	To install the other MS-DOS tools, follow these steps:
	
	1. Insert the Windows 95 CD-ROM in the CD-ROM drive.
	
	  NOTE: If you have the floppy disk version of Windows 95, you can obtain the
	  MS-DOS tools from online services. For information about obtaining the MS-DOS
	  tools from an online service, please see the following article in the
	  Microsoft Knowledge Base:
	
	  Q135315 CD-ROM Extras for Microsoft Windows 95 Upgrade
	
	2. At a command prompt, switch to the CD-ROM drive and then change to the
	  Other\Oldmsdos folder.
	
	3. To install the MS-DOS tools in the default folders, type the following line
	  and then press ENTER:
	
	  " instsupp.bat " (without the quotation marks)
	
	  To install the MS-DOS tools to a different folder, type the following line and
	  then press ENTER
	
	  " instsupp.bat <folder> " (without the quotation marks)
	
	  where <folder> is the folder in which you want the tools installed.
	
	4. Restart your computer.
	
	If you install to a folder other than the default folder, the Msbackup files are
	not copied and the Memmaker files are installed in the Windows\Command folder.
	You must move these files to the Windows folder manually.
	
	If you install to the default folders, the following files are installed in the
	Windows folder:
	
	  Chkstate.sys
	  Memmaker.exe
	  Memmaker.inf
	  Memmaker.hlp
	  Sizer.exe
	
	If you install to the default folders, the following files are installed in the
	Windows\Command folder:
	
	  Append.exe     Qbasic.hlp
	  Expand.exe     Restore.exe
	  Graphics.com   Tree.com
	  Graphics.pro   Undelete.exe
	  Help.com       Loadfix.com
	  Help.hlp       Monoumb.386
	  Instsupp.bat   Print.exe
	  Interlnk.exe   Qbasic.exe
	  Intersvr.exe   Replace.exe
	
	If you specify an installation folder other than the Windows folder, all the
	files listed above are installed in that folder except for the following files.
	These files must be copied manually:
	
	  Msbackdb.ovl   Msbackup.hlp
	  Msbconfg.ovl   Msbackup.exe
	  Msbackup.ovl   Msbackfr.ovl
	  Msbconfg.hlp   Msbackdr.ovl
	  Msbackfb.ovl
	
	When you use the Instsupp.bat file to install the MS-DOS tools, the Setver table
	is updated to reflect the changes. However, the Setver table is not updated for
	Restore.exe. For additional information about this issue, please see the
	following article in the Microsoft Knowledge Base:
	
	  Q138248 Instsupp.bat File Does Not Install Restore.exe Properly
	
	======================================================================
	Keywords          : kbtool win95 
	Technology        : kbWin95search kbZNotKeyword3
	Version           : 95
	Issue type        : kbhowto
	
	=============================================================================
	
