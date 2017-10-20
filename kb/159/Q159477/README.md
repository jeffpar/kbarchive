---
layout: page
title: "Q159477: SMSLS or PGC Stop Responding When Programs in Startup Group"
permalink: /kb/159/Q159477/
---

## Q159477: SMSLS or PGC Stop Responding When Programs in Startup Group

{% raw %}

	Article: Q159477
	Product(s): Microsoft Systems Management Server
	Version(s): winnt:1.0,1.1,1.2
	Operating System(s): 
	Keyword(s): kbinterop kbnetwork kbInventory kbPGC smsinv smspgc
	Last Modified: 30-JUL-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Systems Management Server versions 1.0, 1.1, 1.2 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you are starting network-dependent applications (such as Winpopup or
	Msremind) from the Windows Startup group, the Systems Management Server login
	script or the Program Group Control (PGC) application may stop responding, or
	your application may be prevented from starting or closing successfully.
	
	CAUSE
	=====
	
	During the startup or the login of your Windows client, the file Smsrunxx.exe,
	and possibly the login script Smsls.bat, is started. These files perform
	different tasks within the Systems Management Server installation and operation
	of a client. When Windows tries to start a network-dependent application, a
	conflict may occur with PGC when it is running to perform the installation of a
	shared application (such as Microsoft Office). This behavior is due to the
	architecture of Systems Management Server and Windows.
	
	WORKAROUND
	==========
	
	To prevent these conflicts from occurring, you can delay the start of your
	network-dependent applications. For a delayed start, use a PIF file that
	includes the following batch file:
	
	  @echo off
	  REM we don't have a wait statement, so use choice with timeout...
	  choice /C:ync /N / T:y,60
	  rem for Windows NT use these lines...
	  rem start WINPOPUP.EXE
	  rem exit
	  rem for Windows 3.1X, Windows 95 or Windows for Workgroups use this
	  rem line...
	  WINPOPUP.EXE
	
	You can modify the choice timeout parameter "/t:" to a higher or lower value.
	This timeout value depends on the amount of network traffic and the number of
	shared applications that run with Systems Management Server PGC.
	
	
	Additional query words: autostart
	
	======================================================================
	Keywords          : kbinterop kbnetwork kbInventory kbPGC smsinv smspgc 
	Technology        : kbSMSSearch kbSMS100 kbSMS110 kbSMS120
	Version           : winnt:1.0,1.1,1.2
	
	=============================================================================
	

{% endraw %}
