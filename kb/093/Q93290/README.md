---
layout: page
title: "Q93290: PRB: DBWIN Sample Application May Appear to Hang Windows"
permalink: /kb/093/Q93290/
---

## Q93290: PRB: DBWIN Sample Application May Appear to Hang Windows

{% raw %}

	Article: Q93290
	Product(s): Microsoft Windows Software Development Kit
	Version(s): WINDOWS:3.1
	Operating System(s): 
	Keyword(s): kb16bitonly
	Last Modified: 05-NOV-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows Software Development Kit (SDK) 3.1 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When using the Microsoft Windows Software Development Kit (SDK) version 3.1,
	Windows may appear to hang if the following three items are true:
	
	1. You are using the DBWIN sample application (DBWIN.EXE--see pages 245- 247 of
	  the Windows SDK "Programming Tools" manual) to catch the output of the debug
	  kernel.
	
	2. There is no other output device, other than DBWIN.
	
	3. The "Break on Warnings" option is set in DBWIN.
	
	CAUSE
	=====
	
	Upon entry to Windows, warnings may be displayed by the debug kernel. If the
	Break on Warnings option is set as an option in the DBWIN sample application and
	the Save Debug Settings is chosen from the File menu, DBWIN will save the option
	in the DebugOptions setting of the WIN.INI file under the [WINDOWS] header.
	Windows reads the WIN.INI file on startup and sees that bit number 12 of the
	DebugOptions field under the [WINDOWS] heading has been set (0x1000).
	
	If bit number 12 has been set and warnings are generated before the DBWIN
	application is started, the debug kernel will generate fatal exit warnings.
	Because there is no output screen defined (because DBWIN is not running yet and
	there is no alternate output screen), the system will appear to be hung, when in
	reality it is waiting for input. However, because DBWIN has not defined where
	the input will come from, the only solution is to reboot and change the WIN.INI
	(or SYSTEM.INI) settings before entering Windows (See RESOLUTION for details).
	
	RESOLUTION
	==========
	
	To work around the problem, do one of the following:
	
	1. Change the DebugOptions setting in the WIN.INI file under the [WINDOWS]
	  heading. The value listed will be a four-digit hexadecimal number. The first
	  digit must be changed to an even number to ensure that bit number 12 is not
	  set (for example, 0x3000 should be changed to 0x2000). This method will cause
	  the Break on Warnings option in DBWIN to be unchecked.
	
	2. Add the following section to the SYSTEM.INI file:
	
	     [debug]
	     OutputTo=NUL
	
	  A filename could replace NUL in the above statement if desired.
	
	Once one of these procedures has been done, enter Windows and it will come up
	normally.
	
	MORE INFORMATION
	================
	
	To reproduce the problem, do the following:
	
	1. Ensure that you are running the debug kernel (run N2D.BAT from the MS- DOS
	  prompt before entering Windows).
	
	2. Run the DBWIN sample application.
	
	3. Choose Settings from the Options menu.
	
	4. Ensure that the Break on Warnings check box is checked.
	
	5. Choose OK.
	
	6. Choose Save Debug Settings from the File menu.
	
	To determine whether the change was successfully made, edit the WIN.INI file and
	view the DebugOptions setting under the [WINDOWS] heading. Bit number 12 should
	be set (the first digit will be an odd number).
	
	Additional query words: 3.10 DBWIN.EXE
	
	======================================================================
	Keywords          : kb16bitonly 
	Technology        : kbAudDeveloper kbWin3xSearch kbSDKSearch kbWinSDKSearch kbWinSDK310
	Version           : WINDOWS:3.1
	
	=============================================================================
	

{% endraw %}
