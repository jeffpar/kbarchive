---
layout: page
title: "Q172456: How to Automatically Replace Files In Use by Windows 95"
permalink: kb/172/Q172456/
---

## Q172456: How to Automatically Replace Files In Use by Windows 95

	Article: Q172456
	Product(s): Microsoft Windows 95.x Retail Product
	Version(s): WINDOWS:95
	Operating System(s): 
	Keyword(s): win95
	Last Modified: 17-DEC-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows 95 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	This article describes how to automatically replace a file that is in use by
	Windows 95 without booting to MS-DOS mode.
	
	MORE INFORMATION
	================
	
	You can replace files in use by Windows 95 by using an .inf file. The following
	sample .inf file demonstrates this method:
	
	  ; Replace.inf
	  ; This is a Setup information file to replace a driver or file that is
	  ; in use by Windows 95.
	  ; Copyright 1993-1997 Microsoft Corporation
	
	  [DefaultInstall]
	  CopyFiles=NewFile.copy.sys
	
	  [version]
	  signature="$CHICAGO$"
	  AdvancedINF=2.0
	
	  [DestinationDirs]
	  NewFile.copy.sys=11
	
	  [NewFile.copy.sys]
	  Old.exe, New.exe, Tempfile.exe
	
	  [SourceDisksNames]
	  55="My Very Own File Update.","",1
	
	  [SourceDisksFiles]
	  New.exe=55
	
	  ; End of this .inf file.
	
	This sample file assumes that a file named Old.exe is located in the Windows
	folder and is currently running. When you run the .inf file, the following
	actions occur:
	
	The New.exe file is copied to the C:\Windows\System folder. This location is
	specified in the [DestinationDirs] section of the .inf file. In addition to
	being copied, the file is renamed to Tempfile.exe. This temporary name is
	specified in the [NewFile.copy.sys] section of the .inf file.
	
	The computer must be rebooted for the changes to take effect. During the boot
	process, the temporary file is renamed from the temporary name to the
	appropriate name on the hard disk before the original file is loaded and locked
	open. This functionality is defined in the [rename] section of the Wininit.ini
	file.
	
	Once the file rename has occurred, the Wininit.ini file is renamed to Wininit.bak
	so you can see the last action that took place with the Wininit.ini file.
	
	To process an .inf file, you can either right-click the file and then click
	Install, or use the following command:
	
	  c:\windows\rundll.exe setupx.dll,InstallHinfSection DefaultInstall 130
	  <path to file>.inf
	
	This line should be typed as a single line. It has been wrapped in this article
	for readability purposes. When you run this command, you are prompted to restart
	the computer.
	
	
	REFERENCES
	==========
	
	For additional information about .inf files and their parameters, see Appendix C
	in the Microsoft Windows 95 Resource Kit.
	
	For more information about the Wininit.ini file, please see the following article
	in the Microsoft Knowledge Base:
	
	  Q140570 HOWTO: Moving Files That Are Currently in Use
	
	======================================================================
	Keywords          : win95 
	Technology        : kbWin95search kbZNotKeyword3
	Version           : WINDOWS:95
	Issue type        : kbhowto
	
	=============================================================================
	
