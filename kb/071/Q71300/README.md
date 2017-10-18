---
layout: page
title: "Q71300: LAN Manager Pop-up Messages While Running MS-DOS Applications"
permalink: kb/071/Q71300/
---

## Q71300: LAN Manager Pop-up Messages While Running MS-DOS Applications

	Article: Q71300
	Product(s): Microsoft Windows 95.x Retail Product
	Version(s): WINDOWS:3.0,3.0a
	Operating System(s): 
	Keyword(s): 
	Last Modified: 15-OCT-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows versions 3.0, 3.0a 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	If you have Microsoft Windows 3.0 configured for a Microsoft LAN Manager 2.0
	enhanced (or 100-percent-compatible) network, and the network is currently
	loaded, you can receive pop-up messages from a server or from other users on the
	network. These messages are displayed in a Windows pop-up panel titled
	"WinPopup," whose associated executable is WINPOPUP.EXE. This executable is
	typically on the LOAD= line in the WIN.INI file.
	
	You cannot receive pop-up messages if you are currently running an MS-DOS
	application and any of the following conditions is true:
	
	- You are running Windows in real mode.
	
	- You are running Windows in standard mode.
	
	- You are running the MS-DOS application with full-screen and exclusive display
	  and tasking options settings in Windows enhanced mode.
	
	You can receive pop-up messages while running the MS-DOS application in Windows
	enhanced mode if the application is running in a window and/or the exclusive
	tasking option for the application is unchecked.
	
	NOTE: If you are running a full-screen, nonexclusive MS-DOS application in
	Windows enhanced mode and you receive a pop-up message, the MS-DOS application
	will minimize to allow the pop-up message to be displayed.
	
	MORE INFORMATION
	================
	
	The Messenger service receives the messages and passes them to NetPopup.
	However, if NetPopup detects that Windows is running, then it simply queues the
	messages (to prevent the messages from crashing Windows). WinPopup polls
	NetPopup every three seconds or so to determine if there are any messages.
	However, because WinPopup is running in the background,if you are running in
	real or standard mode or are running a full-screen exclusive MS-DOS session in
	enhanced mode, WinPopup is not able to respond. The message(s) will be displayed
	once you switch back to Windows or quit the MS-DOS application.
	
	NOTE: In IBM's DOS LAN Requester, NETPOPUP.EXE is called MSGPOPUP.EXE. Also
	MSGPOPUP.EXE is loaded into memory when the /POP parameter is included in the
	NET START command.
	
	Additional query words: 3.0 3.00 3.00a win30
	
	======================================================================
	Keywords          :  
	Technology        : kbWin3xSearch kbZNotKeyword3 kbWin300 kbWin300a
	Version           : WINDOWS:3.0,3.0a
	
	=============================================================================
	
