---
layout: page
title: "Q133035: Diamond Sonic Sound LX Card Does Not Seem to Work"
permalink: /kb/133/Q133035/
---

## Q133035: Diamond Sonic Sound LX Card Does Not Seem to Work

{% raw %}

	Article: Q133035
	Product(s): Microsoft Windows 95.x Retail Product
	Version(s): 
	Operating System(s): 
	Keyword(s): 
	Last Modified: 17-DEC-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows 95 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	After you install the drivers for the Diamond Sonic Sound LX sound card, the
	following problems occur:
	
	- When you restart the computer you receive an error message stating that the
	  Mmsystem.dll file was changed.
	
	- No sound events occur and the Play button is unavailable in the Sounds tool
	  in Control Panel.
	
	- You do not see a speaker icon on the taskbar.
	
	It may seem as if the drivers for the Diamond Sonic Sound LX sound card are not
	functioning.
	
	CAUSE
	=====
	
	The Setup program for the Diamond Sonic Sound LX sound card (and other Diamond
	sound cards) makes the following changes to the [drivers] section of the
	System.ini file:
	
	- WAVE=SND16.DRV
	
	- MIDI=SND16.DRV
	
	The Setup program also replaces the Mmsystem.dll file.
	
	RESOLUTION
	==========
	
	Use any text editor (such as Notepad) to edit the System.ini file. Change the
	line that reads
	
	  WAVE=SND16.DRV
	
	to read:
	
	  WAVE=MMSYSTEM.DLL.
	
	Change the line that read
	
	  MIDI=SND16.DRV
	
	to read:
	
	  MIDI=MMSYSTEM.DLL
	
	After you make these changes, save and then close the file.
	
	Also, extract the original Mmsystem.dll file to the Windows\System folder. To do
	so, follow these steps:
	
	1. Restart your computer. When you see the "Starting Windows 95" message, press
	  the F8 key, then choose Safe Mode Command Prompt Only from the Startup menu.
	
	  NOTE: If you are using a Windows 95 CD-ROM, choose Step-by-Step Confirmation
	  and choose Yes only for the CD-ROM drivers.
	
	2. If you are using Windows 95 disks, type the following line at the MS-DOS
	  prompt
	
	  extract <drive>:\win95_08.cab mmsystem.dll /l c:\windows\system
	
	  where <drive> is the drive letter of the floppy disk drive you are
	  using. Make sure to insert Disk 8 in the floppy disk drive.
	
	3. If you are using a Windows 95 CD-ROM, type the following line at the MS-DOS
	  prompt
	
	  extract <drive>:\win95\win95_08.cab mmsystem.dll /l c:\windows\system
	
	  where <drive> is the drive letter of the CD-ROM drive.
	
	4. After you extract the Mmsystem.dll file, restart your computer normally.
	
	MORE INFORMATION
	================
	
	The third-party product discussed in this article is manufactured by a vendor
	independent of Microsoft; we make no warranty, implied or otherwise, regarding
	this product's performance or reliability.
	
	Additional query words: hcl
	
	======================================================================
	Keywords          :  
	Technology        : kbWin95search kbZNotKeyword3
	
	=============================================================================
	

{% endraw %}
