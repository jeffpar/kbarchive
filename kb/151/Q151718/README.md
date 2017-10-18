---
layout: page
title: "Q151718: Managing Memory in MS-DOS Mode"
permalink: kb/151/Q151718/
---

## Q151718: Managing Memory in MS-DOS Mode

	Article: Q151718
	Product(s): Microsoft Windows 95.x Retail Product
	Version(s): 95
	Operating System(s): 
	Keyword(s): win95
	Last Modified: 17-DEC-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows 95 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	This article describes how to configure an MS-DOS-mode shortcut in Windows 95
	for optimal memory management.
	
	MORE INFORMATION
	================
	
	To manage each MS-DOS-mode shortcut separately, configure the MS-DOS shortcuts
	to use custom configuration files.
	
	To enable the use of the High Memory Area (HMA) and Upper Memory Blocks (UMBs) in
	the Upper Memory Area (UMA), add the following lines to the custom Config.sys
	file:
	
	  Device=C:\WINDOWS\HIMEM.SYS
	  Device=C:\WINDOWS\EMM386.EXE NOEMS ; or RAM to use Expanded Memory
	  DOS=HIGH,UMB
	
	To load device drivers high from the Config.sys file, use the following syntax:
	
	  DeviceHigh=C:\WINDOWS\COMMAND\DRVSPACE.SYS /MOVE ; loads DRVSPACE high
	
	Other Config.sys commands that help preserve conventional memory include:
	
	  BuffersHigh=
	  FCBSHigh=
	  FilesHigh=
	  InstallHigh=
	  LastDriveHigh=
	  StacksHigh=
	
	To load TSRs high from the custom Autoexec.bat file, use the following syntax:
	
	  LoadHigh=C:\WINDOWS\COMMAND\DOSKEY.COM ; loads DOSKey high
	
	======================================================================
	Keywords          : win95 
	Technology        : kbWin95search kbZNotKeyword3
	Version           : 95
	
	=============================================================================
	
