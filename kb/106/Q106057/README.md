---
layout: page
title: "Q106057: Windows Err Msg: Driver Error: Cannot Load &lt;Driver Name&gt;..."
permalink: /kb/106/Q106057/
---

## Q106057: Windows Err Msg: Driver Error: Cannot Load &lt;Driver Name&gt;...

{% raw %}

	Article: Q106057
	Product(s): Microsoft Windows 95.x Retail Product
	Version(s): WINDOWS:3.1,3.11
	Operating System(s): 
	Keyword(s): 
	Last Modified: 26-SEP-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows versions 3.1, 3.11 
	- Microsoft Windows for Workgroups versions 3.1, 3.11 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you try to add drivers in the Drivers section of Control Panel, Windows
	generates the following error message
	
	  Driver Error: Cannot load <driver name>. The driver file may be
	  missing. Try installing the driver again or contact your system
	  administrator.
	
	where <driver name> is one of the following:
	
	  Intel Indeo (TM) Video Board
	  Timer
	  MIDI Mapper
	  [MCI] MIDI Sequencer
	  [MCI] Sound
	  Sound driver for PC Speaker
	
	CAUSE
	=====
	
	You can receive this error message when you attempt to install drivers from
	Windows 3.11 or Windows for Workgroups 3.11 into Windows 3.1.
	
	This error can also occur if one of the following conditions exists:
	
	- MMSYSTEM.DLL is corrupted or missing from the Windows SYSTEM subdirectory.
	
	- LZEXPAND.DLL is corrupted or missing from the Windows SYSTEM subdirectory, or
	  is the wrong version.
	
	- EXPAND.EXE is corrupted or missing from the Windows SYSTEM subdirectory, or
	  is the wrong version.
	
	RESOLUTION
	==========
	
	You can correct this problem by expanding MMSYSTEM.DL_ and LZEXPAND.DL_ from
	your original Windows or Windows for Workgroups disks using the following
	syntax:
	
	  expand a:<filename>.dl_ <windows
	  drive:directory>\system\<filename>.dll
	
	For example, if you are expanding MMSYSEM.DL_, your original Windows floppy disk
	is in drive A, and your Windows directory is C:\WINDOWS, type the following at
	the MS-DOS command prompt and then press ENTER:
	
	  expand a:mmsystem.dl_ c:\windows\system\mmsystem.dll
	
	EXPAND.EXE does not need to be expanded from the original Windows disks and can
	simply be copied to your Windows directory.
	
	Use the following table to determine the disk on which MMSYSTEM.DL_ is located:
	
	Product                         1.44-MB 3.5-inch       1.2-MB 5.25-inch
	-----------------------------------------------------------------------
	
	Windows 3.1 and 3.11            Disk 4                 Disk 5
	Windows for Workgroups 3.1      Disk 5                 Disk 7
	Windows for Workgroups 3.11     Disk 4                 Disk 5
	
	Use the following table to determine the disk on which LZEXPAND.DL_ is located:
	
	Product                         1.44-MB 3.5-inch       1.2-MB 5.25-inch
	-----------------------------------------------------------------------
	
	Windows 3.1                     Disk 2                 Disk 1
	Windows 3.11                    Disk 2                 Disk 3
	Windows for Workgroups 3.1      Disk 3                 Disk 3
	Windows for Workgroups 3.11     Disk 2                 Disk 2
	
	Use the following table to determine the disk on which EXPAND.EXE is located:
	
	Product                         1.44-MB 3.5-inch       1.2-MB 5.25-inch
	-----------------------------------------------------------------------
	
	Windows 3.1                     Disk 3                 Disk 3
	Windows 3.11                    Disk 4                 Disk 5
	Windows for Workgroups 3.1      Disk 6                 Disk 8
	Windows for Workgroups 3.11     Disk 6                 Disk 6
	
	Additional query words: err msg 3.10 3.11
	
	======================================================================
	Keywords          :  
	Technology        : kbAudDeveloper kbWin3xSearch kbWFWSearch kbZNotKeyword3 kbWin310 kbWin311 kbWFW310 kbWFW311
	Version           : WINDOWS:3.1,3.11
	
	=============================================================================
	

{% endraw %}
