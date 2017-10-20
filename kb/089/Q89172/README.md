---
layout: page
title: "Q89172: Banyan Vines 3270 with Windows 3.0 and 3.0a"
permalink: /kb/089/Q89172/
---

## Q89172: Banyan Vines 3270 with Windows 3.0 and 3.0a

{% raw %}

	Article: Q89172
	Product(s): Microsoft Windows 95.x Retail Product
	Version(s): WINDOWS:3.0,3.0a
	Operating System(s): 
	Keyword(s): 
	Last Modified: 08-NOV-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows versions 3.0, 3.0a 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	This article discusses conditions that may cause Windows to hang when a Banyan
	Vines 3270 program is run. The following topics are included:
	
	- NEWREV 1W patch causes Windows to hang
	
	- Banyan Vines 3270/RA 3270 hangs because of login script
	
	- Windows 3.0 and 3270 with Banyan Mail
	
	MORE INFORMATION
	================
	
	NEWREV 1W Patch Causes Windows to Hang
	--------------------------------------
	
	After the server software has been updated with the addition of the NEWREV 1W
	patch, network clients accessing 3270 services under Windows may experience
	problems with their computers' locking, according to Banyan.
	
	Note: There is no workaround for this problem other than removing the patch and
	going back to a former revision level.
	
	Banyan Vines 3270/RA 3270 Hangs Because of Login Script
	-------------------------------------------------------
	
	Banyan Vines 3270/RA 3270 may not function correctly after an invalid login
	statement under Vines 4.0. The following causes the problem:
	
	1. Choose the MS-DOS icon in Windows.
	
	2. Execute the 3270 command. You receive a host screen.
	
	3. Request the Time Sharing Operation (TSO). You will receive a Login dialog
	  box.
	
	4. Enter an invalid name/password combination for the 3270 connection. You
	  receive an invalid name/password message.
	
	5. Before the screen is updated, press ALT+TAB to switch back to the Windows
	  environment. The system hangs and the computer has to be turned off and
	  restarted. (Pressing CTRL+ALT+DEL does not work.)
	
	  Note: There is no workaround for this problem.
	
	Windows 3.0 and 3270 with Banyan Mail
	-------------------------------------
	
	To run Banyan Mail and 3270 Terminal Emulation simultaneously under Windows 3.0,
	do the following:
	
	1. Place the command
	
	  Z:\SETMSGS OFF
	
	  in the Banyan start up batch file anywhere after the LOGIN command. Replace
	  Z:\ with the path to the SETMSGS command if necessary. If this command is not
	  used, and a network broadcast message appears, the 3270 communications link
	  may be broken.
	
	2. Start Banyan Vines and log on before entering Windows.
	
	3. Set the PIF for the 3270 Terminal Emulator session for Background and Full
	  Screen.
	
	4. Set the PIF for Banyan Mail to run full screen with neither Background nor
	  Exclusive selected.
	
	The Banyan products included here are manufactured by Banyan, a vendor
	independent of Microsoft; we make no warranty, implied or otherwise, regarding
	these products' performance or reliability.
	
	REFERENCES
	==========
	
	Banyan Vines technical support may be reached at (508) 366-6089.
	
	"Vines 4.02 Known Anomalies Report," April 24, 1991
	
	Additional query words: 3.00 3.00a Banyan Vines 4.00 4.01 3270 newrev patch
	
	======================================================================
	Keywords          :  
	Technology        : kbWin3xSearch kbZNotKeyword3 kbWin300 kbWin300a
	Version           : WINDOWS:3.0,3.0a
	
	=============================================================================
	

{% endraw %}
