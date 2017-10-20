---
layout: page
title: "Q141597: Cannot Install Sound Blaster AWE32 Sound Card from Setup Disk"
permalink: /kb/141/Q141597/
---

## Q141597: Cannot Install Sound Blaster AWE32 Sound Card from Setup Disk

{% raw %}

	Article: Q141597
	Product(s): Microsoft Windows 95.x Retail Product
	Version(s): 95
	Operating System(s): 
	Keyword(s): kb3rdparty kberrmsg kbsound win95
	Last Modified: 17-DEC-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows 95 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you run the Setup disk for the Sound Blaster AWE32 sound card, you may
	receive the following error message:
	
	  We've encountered an error as follows:
	  On script line 184 we had a problem:
	  Unable to create directory C:\WINDOWS\SYSTEM\<filename>
	  Continue installing? "Y" or "N"
	
	where <filename> is Sb16snd.drv, Cspman.dll, or Sbawe32.drv.
	
	When you receive this error message, you also receive a series of error messages,
	including general protection (GP) fault error messages.
	
	After upgrading to Windows 95, you may receive the following error message:
	
	  Systray - Error loading program
	
	CAUSE
	=====
	
	The Windows 95 drivers for the AWE32 sound card were loaded and in use when you
	tried to run the Setup disk. Some of the drivers were replaced by Windows 3.x
	drivers from the Setup disk.
	
	In the case of the "Systray" error while upgrading to Windows 95, Setup failed to
	upgrade drivers for Creative Labs Sound Blaster 16 or AWE 32.
	
	RESOLUTION
	==========
	
	Remove the AWE32 sound card in Device Manager and then use the Add New Hardware
	tool in Control Panel to redetect the sound card.
	
	NOTE: It may also be necessary to disable lines in the System.ini file that
	reference the following files before you can redetect the sound card:
	
	  Sb16aux.drv
	  Sb16snd.drv
	  Sbawe32.drv
	
	To disable these lines, open the System.ini file in any text editor (such as
	Notepad), and place a semicolon (;) at the beginning of each line you want to
	disable. After you disable the lines, save the System.ini file and restart
	Windows 95.
	
	MORE INFORMATION
	================
	
	After you receive the error messages described above, you receive the following
	error message when you restart your computer:
	
	  Sound Blaster AWE32 MIDI Synth VSBPD.386 not installed
	
	When Windows 95 starts, you see a blank desktop. Running a program restores the
	desktop. Windows 95 seems to work correctly, but trying to use any audio
	component results in GP fault error messages such as:
	
	  MSGSRV32 caused a general protection fault in MMSYSTEM.DLL
	  RUNDLL32 caused a general protection fault in SB16AUX.DRV
	  MMTASK caused a segment not present fault in CSPMAN.DLL
	  SYSTRAY caused a general protection fault in SB16AUX.DRV
	
	Shutting down and restarting the computer results in the following error
	message:
	
	  System File Error - The following system files have been replaced with older
	  versions:
	
	  cspman.dll, sb16snd.drv, msmixmgr.dll
	
	This is followed by a blank desktop and GP faults as described above.
	
	Additional query words: gpf homemm awe 32
	
	======================================================================
	Keywords          : kb3rdparty kberrmsg kbsound win95 
	Technology        : kbWin95search kbZNotKeyword3
	Version           : :95
	
	=============================================================================
	

{% endraw %}
