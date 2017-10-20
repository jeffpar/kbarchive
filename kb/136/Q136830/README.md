---
layout: page
title: "Q136830: DriveSpace May Fail to Restart in Mini-Windows Mode"
permalink: /kb/136/Q136830/
---

## Q136830: DriveSpace May Fail to Restart in Mini-Windows Mode

{% raw %}

	Article: Q136830
	Product(s): Microsoft Windows 95.x Retail Product
	Version(s): 95
	Operating System(s): 
	Keyword(s): kberrmsg kbtool win95
	Last Modified: 18-DEC-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows 95 
	- Microsoft Plus! for Windows 95 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you perform a DriveSpace operation that requires Windows 95 to restart,
	Windows 95 may be unable to restart in mini-Windows mode, causing the operation
	to fail. You may receive an error message similar to one of the following
	messages, or your computer may stop responding (hang).
	
	- DrvSpace caused a General Protection Fault in module W31SPACE.EXE
	
	- DrvSpace caused a Page Fault in module W31SPACE.EXE
	
	- Error Loading PROGMAN.EXE
	
	- Error Loading GDI.EXE
	
	- Error Loading USER.EXE
	
	- Error loading VGA.DRV
	
	- Cannot start Windows in standard mode
	
	- Segment load failure in W31space.exe
	
	- Standard Mode: Bad fault in MSDos Extender
	
	CAUSE
	=====
	
	This problem can occur if the files in the hidden Failsafe.drv folder or the
	Mini.cab file in the Windows\System folder are damaged. These files are required
	for Windows 95 to restart in mini-Windows mode.
	
	RESOLUTION
	==========
	
	To resolve this problem, follow these steps:
	
	1. Restart your computer at an MS-DOS prompt. To do so, press the F8 key when
	  you see the "Starting Windows 95" message, and then choose Safe Mode Command
	  Prompt Only from the Startup menu.
	
	2. Backup your Autoexec.bat and Config.sys files, and then copy the Autoexec.bat
	  and Config.sys files from the hidden Failsafe.drv folder on the physical boot
	  drive (usually either drive C or the host for drive C if drive C is
	  compressed) to the root directory of drive C, replacing the files that are
	  already there. To backup your Autoexec.bat and Config.sys files and then copy
	  the files, type the following commands, pressing ENTER after each line
	
	  " copy <drive>:\autoexec.bat autoexec.xxx
	  copy <drive>:\config.sys config.xxx
	  copy <drive>:\failsafe.drv\autoexec.bat c:\ /y
	  copy <drive>:\failsafe.drv\config.sys c:\ /y " (without the quotation
	  marks)
	
	  where <drive> is the physical boot drive.
	
	3. Remove the Failsafe.drv folder from the physical boot drive (usually either
	  drive C or the host for drive C if drive C is compressed).
	
	  IMPORTANT NOTE: The Failsafe.drv folder may contain drivers necessary for
	  troubleshooting if this procedure does not correct the problem. You should
	  copy the Failsafe.drv folder and all its contents to another drive or folder
	  before deleting it.
	
	  To remove the Failsafe.drv folder, type the following command at an MS- DOS
	  command prompt
	
	  " deltree <drive>:\failsafe.drv " (without the quotation marks)
	
	  where <drive> is the physical boot drive.
	
	
	1. Copy the Mini.cab file from your original Windows 95 disks or CD-ROM to the
	  Windows\System folder.
	
	  NOTE: The Mini.cab file is located on disk 1 of the standard 3.5-inch Windows
	  95 disks, or in the Win95 folder on the Windows 95 CD-ROM. You can copy this
	  file using Windows Explorer or the COPY command. You do not need to use the
	  EXTRACT command with this file.
	
	  If you are using Microsoft Plus! for Windows 95 and you do not have access to
	  your original Windows 95 disks or CD-ROM, you can extract the Mini.cab file
	  from the Microsoft Plus! disks or CD-ROM. The Mini.cab file is located in the
	  Plus_2.cab file on the CD-ROM, or in the Plus_1.cab file on the disks. For
	  information about using the EXTRACT command, please see the following article
	  in the Microsoft Knowledge Base:
	
	  Q129605 How to Extract Original Compressed Windows Files
	
	2. Restart Windows 95 normally.
	
	3. Run DriveSpace and try the operation again.
	
	MORE INFORMATION
	================
	
	For additional information about DriveSpace operations that require Windows 95
	to restart, please see the following article in the Microsoft Knowledge Base:
	
	  Q124558 DriveSpace Err Msg: Mini.cab File Is Missing or Damaged...
	
	
	======================================================================
	Keywords          : kberrmsg kbtool win95 
	Technology        : kbWin95search kbGamesSearch kbPlusSearch kbZNotKeyword3 kbPlus95
	Version           : 95
	Issue type        : kbprb
	
	=============================================================================
	

{% endraw %}
