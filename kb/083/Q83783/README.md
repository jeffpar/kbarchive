---
layout: page
title: "Q83783: Adding Sound Functions and a Sound Icon to Control Panel"
permalink: /kb/083/Q83783/
---

## Q83783: Adding Sound Functions and a Sound Icon to Control Panel

	Article: Q83783
	Product(s): Microsoft Windows 95.x Retail Product
	Version(s): WINDOWS:3.1,3.11; :1.0
	Operating System(s): 
	Keyword(s): 
	Last Modified: 03-OCT-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows versions 3.1, 3.11 
	- Microsoft Windows with Multimedia Extensions, version 1.0 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	Windows version 3.1 and Windows with Multimedia Extensions version 1.0 have a
	sound icon in the Control Panel. This icon allows sounds to be assigned to
	several functions. To add additional sounds, you can either program or purchase
	a software package designed specifically for this functionality.
	
	MORE INFORMATION
	================
	
	Windows 3.1 has the following development functions to which sounds (files with
	a .WAV extension) can be assigned. This information is listed in the WIN.INI
	file, but you cannot add additional sound functions without the underlying
	programming support. The following example demonstrates how the [Sounds] section
	of the WIN.INI file should appear to provide the underlying programming
	support:
	
	     [Sounds]
	     SystemAsterisk=C:\W31\CHORD.WAV,Asterisk
	     SystemHand=chord.wav,Critical Stop
	     SystemDefault=ding.wav,Default Beep
	     SystemExclamation=chord.wav,Exclamation
	     SystemQuestion=chord.wav,Question
	     SystemExit=chimes.wav,Windows Exit
	     SystemStart=C:\W31\CHIMES.WAV,Windows Start
	
	All of these functions are defined by the Windows multimedia MessageBeep
	function. You can add additional sound functions with the sndPlaySound function,
	provided you are programming Windows applications with the Microsoft Multimedia
	Development Kit.
	
	REFERENCES
	==========
	
	"Microsoft Multimedia Development Kit: Programmer's Workbook," pages 4-1 through
	4-8
	
	Additional query words: 3.10 SND.CPL
	
	======================================================================
	Keywords          :  
	Technology        : kbWin3xSearch kbZNotKeyword3 kbWinMultiXSearch kbWin310 kbWin311 kbWinMultiX100
	Version           : WINDOWS:3.1,3.11; :1.0
	
	=============================================================================
	
