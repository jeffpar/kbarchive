---
layout: page
title: "Q84880: Troubleshooting Tips for &quot;Wrong Disc in the CD-ROM&quot; Error"
permalink: /kb/084/Q84880/
---

## Q84880: Troubleshooting Tips for &quot;Wrong Disc in the CD-ROM&quot; Error

{% raw %}

	Article: Q84880
	Product(s): Microsoft Home Multimedia Titles
	Version(s): 
	Operating System(s): 
	Keyword(s): 
	Last Modified: 08-NOV-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Multimedia Beethoven for Windows, version 1.0 
	- Microsoft Multimedia Stravinsky for Windows, version 1.0 
	- Microsoft Multimedia Mozart for Windows, versions 1.0, 1.0a 
	- Microsoft Multimedia Schubert for Windows, version 1.0 
	- Microsoft Multimedia Strauss for Windows, version 1.0 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	If you get the error message "The wrong disc is in the CD-ROM drive..." from
	Microsoft Beethoven, Stravinsky, Strauss, or Schubert, the CD-ROM drive might
	not meet the Multimedia PC specifications or the correct drivers are not loaded.
	Stravinsky, Mozart, Strauss, and Schubert should all load the [MCI] CD Audio
	driver during setup. Beethoven does not do this.
	
	The error message for Mozart is "The correct CD must be in drive X: to continue"
	(where X is the drive letter of the CD-ROM drive).
	
	The following discusses troubleshooting tips designed to help you run these
	multimedia applications if the above error message is encountered.
	
	If you are using Microsoft Windows NT, please also see the following article(s)
	in the Microsoft Knowledge Base:
	
	  Q104151 Setup Doesn't Install Audio Drivers in NT
	
	MORE INFORMATION
	================
	
	To troubleshoot this problem, follow these steps:
	
	1. Ensure that the CD Audio Driver is loaded:
	
	  These applications rely on MCICDA.DRV, the MCI CD Audio driver, for playing
	  most of the music. If the MCI commands are failing, you should get similar
	  results when trying to play CD Audio from Media Player (MusicBox will
	  probably work fine because it does not use MCI commands). If this driver is
	  not loaded or is loaded incorrectly, do the following to properly install the
	  driver:
	
	  a. Check the Drivers option of the Windows Control Panel to make sure that
	     the MCI CD Audio driver is loaded (it may be called MCI Redbook Audio.) If
	     it is not there, add it with the Add button. You can install it yourself
	     by adding CDAudio=mcicda.drv to the [MCI] section of SYSTEM.INI. Make sure
	     that MCICDA.DRV is in your WINDOWS\SYSTEM directory.
	
	  b. Check the SYSTEM.INI file for the line:
	
	        drivers=mmsystem.dll
	
	     It should be at the end of the [boot] section. Add this line if it is not
	     there. Make sure that MMSYSTEM.DLL is in your WINDODWS\SYSTEM directory.
	
	2. Try a different CD:
	
	  If the MCI CD Audio driver is installed and the disc is still generating an
	  error message, try to play an audio CD from Media Player. If it works, try to
	  play a non-mixed mode audio disc from Media Player. Some CD-ROM drivers
	  generate a hardware error message from the Beethoven CD because it has data
	  as the first track. If Media Player plays an audio disc, but not on one of
	  the discs mentioned above, then your CD-ROM drivers are probably at fault.
	  Make sure that MSCDEX 2.20 (or later) is being used with a device driver (in
	  CONFIG.SYS) that was written for it. If CDAudio is not on Media Player's
	  Device menu, delete MPLAYER.INI and try again.
	
	  NOTE: With the Media Vision MPC upgrade kit that shipped with Microsoft
	  Windows 3.0a with Multimedia Extensions 1.0, you may need to add a /P:3 to
	  the DEVICE=TSLCDR.SYS line in the CONFIG.SYS file. Without this switch, the
	  TSLCDR driver turns off seeking, and you will not be able to move to
	  different tracks in Media Player while the disc is stopped. This has the
	  nasty side effect of not letting you play audio tracks on a mixed mode CD if
	  the first track is data. (You can't seek to the audio track, and you can't
	  play the data track).
	
	Additional query words: 1.00 toolbook dev/drv sound multi-media multi media multimedia C D disc disk 1.00a 1.0a TSLCDR.SYS NEC Multispin double multi-spin multi spin tshoot
	
	======================================================================
	Keywords          :  
	Technology        : kbHomeProdSearch kbHomeMMsearch kbZNotKeyword kbMMStrauss kbMMSchubert kbMMStravinsky kbMMMozart100 kbMMMozart100a kbMMBeethoven100
	
	=============================================================================
	

{% endraw %}
