---
layout: page
title: "Q130854: Automating the SNA Server Win 3.x Client Login Process"
permalink: /kb/130/Q130854/
---

## Q130854: Automating the SNA Server Win 3.x Client Login Process

{% raw %}

	Article: Q130854
	Product(s): Microsoft SNA Server
	Version(s): WINDOWS:2.1,2.11,3.0,4.0
	Operating System(s): 
	Keyword(s): kbinterop kbnetwork kbsetup sna4
	Last Modified: 13-JUN-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft SNA Server, versions 2.1, 2.11, 3.0, 4.0 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	When the SNA Server Windows 3.x client software is configured to use TCP/IP
	sockets, Netware IPX/SPX, or Banyan IP (any client-server transport except named
	pipes), the SNA client software (WNAP) uses a separate user login to the Windows
	NT servers running SNA Server to ensure security is maintained. This article
	describes ways to automate this client login process using SNA Server versions
	2.1 and 2.11.
	
	SNA Server 2.1
	--------------
	
	When you log into Windows NT Server using TCP/IP, Netware IPX/SPX or Banyan IP
	from Windows 3.x clients, the two WNAP command lines noted below can be used to
	remove the Domain Login dialog box when starting WNAP manually.
	
	Add an icon in the Windows Startup group for WNAP.EXE (the SNA Windows 3.x client
	process) that has the following command line option. This causes WNAP to start
	automatically when Windows is started:
	
	  "WNAP /USER: /PWD:" (without the quotation marks)
	
	NOTE: There must be no space after the semi-colon (:).
	
	This command lets the user login to the Windows NT Server using the guest account
	(provided that the guest account is enabled and has no password).
	
	
	The next command requires that the user have a valid account in the Windows
	NT/SNA Server domain:
	
	  WNAP /USER:<userid> /PWD:<password>
	
	SNA Server 2.11/3.x
	-------------------
	
	The following additional options are available under SNA 2.11 and 3.x:
	
	1. The following two new options can be added to the [WNAP] section of the
	  WIN.INI file:
	
	  LogonUserName=<USERID>
	  LogonPassword=<PASSWORD>
	
	  WNAP will parse these entries and use them when a application is first
	  started, reducing the need for starting WNAP manually with command line
	  parameters.
	
	  Also, to use the guest account using the parameters in WIN.INI, add the
	  entries as such:
	
	  "LogonUserName=guest
	  LogonPassword=" (without the quotation marks)
	
	  NOTE: There must be no space after the equals sigh (=).
	
	2. Automated use of Windows for Workgroups 3.11 cached domain password.
	
	If the above WIN.INI entries are not present on a Windows for Workgroups 3.11
	client, and if the user is using the cached domain password feature of Windows
	for Workgroups (enabled in the network Control Panel Startup dialog box by
	selecting "Log On to Windows NT or LAN Manager Domain"), the user password is
	automatically retrieved from Windows for Workgroups.
	
	
	WNAP will start automatically when an SNA Server application (3270, 5250, or an
	application written to the SNA Server APIs is started), or when Windows is
	started (if a WNAP icon is added to the Startup group). If the cached domain
	password method is used, WNAP retrieves the username when WNAP is started. If
	the Windows for Workgroups user logs off and on, WNAP is still running under the
	previous user context.
	
	To resolve this problem, WNAP can be configured to terminate automatically when
	the last SNA application ends by adding AutoTerminate=Yes to the [WNAP] section
	of the WIN.INI file. By default, WNAP remains running even if the Windows for
	Workgroups user logs off and then logs back on. The user should quite all SNA
	applications before logging off in Windows for Workgroups. This ensures that
	WNAP will quit so that it will be restarted again when the new Windows for
	Workgroups user logs in and starts an SNA application.
	
	To enable the AutoTerminate feature:
	
	1. Add AutoTerminate=Yes to the [WNAP] section of the WIN.INI file.
	
	2. Start WNAP automatically by starting an SNA application. If WNAP is started
	  manually, WNAP will not unload, even if AutoTerminate is set to Yes.
	
	With some emulators the WNAP will quit when the last connection is disconnected.
	With other emulators you need to exit from the emulator. This behavior depends
	on how the emulator is implemented. With the SNA Server applets the WNAP won't
	unload before you exit from the applet.
	
	Windows for Workgroups Domain Password Expiration
	-------------------------------------------------
	
	If the Windows for Workgroups user's domain password expires, or if user is
	required to change their domain password on the next domain login attempt, the
	SNA client login dialog will fail with Error 546. To solve this problem, the
	Windows for Workgroups user must login and change their domain password first.
	The user may then need to update their SNA client configuration to reflect their
	new password. There is no additional user interaction required when using the
	Windows for Workgroups cached domain password.
	
	Additional query words: prodsna
	
	======================================================================
	Keywords          : kbinterop kbnetwork kbsetup sna4 
	Technology        : kbAudDeveloper kbSNAServSearch kbSNAServ300 kbSNAServ211 kbSNAServ400 kbSNAServ210
	Version           : WINDOWS:2.1,2.11,3.0,4.0
	
	=============================================================================
	

{% endraw %}
