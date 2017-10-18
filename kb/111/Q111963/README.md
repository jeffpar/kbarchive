---
layout: page
title: "Q111963: Enabling Sound Events for WinPopup in WFWG 3.11"
permalink: kb/111/Q111963/
---

## Q111963: Enabling Sound Events for WinPopup in WFWG 3.11

	Article: Q111963
	Product(s): Microsoft Windows 3.x Retail Product
	Version(s): MACINTOSH:1.0; WINDOWS:1.0,3.11; :1.0,1.0a,2.0
	Operating System(s): 
	Keyword(s): 
	Last Modified: 04-JUN-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows for Workgroups version 3.11 
	- Microsoft Windows Sound System, versions 1.0, 1.0a, 2.0 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	If you use Windows for Workgroups version 3.11 WinPopup and you have either
	Microsoft Windows Sound System or Microsoft Sound Bits installed, you can enable
	system sounds for WinPopup events.
	
	MORE INFORMATION
	================
	
	To add sound events for WinPopup, add the following to lines to the [sounds]
	section of your WIN.INI file
	
	     WinPopUpOpen=<wavefile>,WinPopUp Open
	     WinPopUpClose=<wavefile>,WinPopUp Close
	     WinPopUpMinimize=<wavefile>,WinPopUp Min
	     WinPopUpRestoreUp=<wavefile>,WinPopUp Restore Up
	
	where <wavefile> is the path to a wave file. For example:
	
	  WinPopUpOpen=c:\windows\ding.wav,WinPopUp Open
	
	NOTE: The WinPopUpOpen sound does not play the corresponding sound when WinPopup
	pops up. The sound is played when you restore WinPopup to an open window.
	
	Additional query words: 3.11 wss sound bits SNDEVNTS.DRV WinPop-up
	
	======================================================================
	Keywords          :  
	Technology        : kbAudDeveloper kbWFWSearch kbWinSoundSysSearch kbWFW311 kbWinSoundSys100 kbWinSoundSys100a kbWinSoundSys200
	Version           : MACINTOSH:1.0; WINDOWS:1.0,3.11; :1.0,1.0a,2.0
	
	=============================================================================
	
