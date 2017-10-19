---
layout: page
title: "Q157440: Windows 95 Client Receives MSN Pop-up Screen When Starting"
permalink: /kb/157/Q157440/
---

## Q157440: Windows 95 Client Receives MSN Pop-up Screen When Starting

	Article: Q157440
	Product(s): Microsoft SNA Server
	Version(s): 2.11,2.11 SP1,2.11 SP2,3.0,3.0 SP1,3.0 SP2,3.0 SP3,3.0 SP4,4.0,4.0 SP1,4.0 SP2
	Operating System(s): 
	Keyword(s): kbinterop
	Last Modified: 13-JUN-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft SNA Server, versions 2.11, 2.11 SP1, 2.11 SP2, 3.0, 3.0 SP1, 3.0 SP2, 3.0 SP3, 3.0 SP4, 4.0, 4.0 SP1, 4.0 SP2, on platform(s):
	   - the operating system: Microsoft Windows NT 
	   - the operating system: Microsoft Windows 95 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	A Windows 95 SNA Server Client configured for TCP/IP protocol gets the Microsoft
	Network (MSN) sign-on dialog box every time the client software is started. This
	should happen only on computers that were configured for using MSN at a previous
	time.
	
	NOTE: Any third party 5250 and 3270 clients that use the SNA Server client to
	connect to a host system and reflect this behavior can use the following
	workaround.
	
	CAUSE
	=====
	
	When MSN is installed, it automatically configures the computer to autodial MSN
	whenever a TCP/IP winsock call is attempted.
	
	WORKAROUND
	==========
	
	WARNINGS:
	
	- The following workaround will affect the behavior of applications which need
	  to use MSN as their service provider.
	
	- Using Registry Editor incorrectly can cause serious, system-wide problems
	  that may require you to reinstall Windows 95 to correct them. Microsoft
	  cannot guarantee that any problems resulting from the use of Registry Editor
	  can be solved. Use this tool at your own risk.
	
	To change this behavior on standard installs of Microsoft Windows 95 with MSN:
	
	- Run the Control Panel Internet application and then clear the Use AutoDial
	  check box.
	
	  -or-
	
	- Right click the Internet icon on the desktop. Select Properties and clear the
	  Use AutoDial check box.
	
	The following will be necessary if you use Microsoft Internet Explorer version
	3.0, or any other browser that changes the Internet Control Panel Applet:
	
	- Run the Windows 95 Registry Editor and change the EnableAutodial Binary value
	  of the following keys to 00 00 00 00:
	
	  MyComputer\HKEY_CURRENT_USER\Software\Microsoft\Windows\CurrentVersion\ 
	  Internet Settings
	
	  MyComputer\HKEY_USERS\.Default\Software\Microsoft\Windows\ 
	  CurrentVersion\Internet Settings
	
	Additional query words: winsock win95 applet
	
	======================================================================
	Keywords          : kbinterop 
	Technology        : kbAudDeveloper kbSNAServSearch
	Version           : :2.11,2.11 SP1,2.11 SP2,3.0,3.0 SP1,3.0 SP2,3.0 SP3,3.0 SP4,4.0,4.0 SP1,4.0 SP2
	
	=============================================================================
	
