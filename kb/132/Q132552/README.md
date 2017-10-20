---
layout: page
title: "Q132552: SNA: Separate Logon Prompt If Non-MS Network Protocol Installed"
permalink: /kb/132/Q132552/
---

## Q132552: SNA: Separate Logon Prompt If Non-MS Network Protocol Installed

{% raw %}

	Article: Q132552
	Product(s): Microsoft SNA Server
	Version(s): WINDOWS:2.1,2.11 SP1;2.11 SP2,3.0 (all SP),4.0,4.0 SP1,4.0 SP2,4.0 SP3,4.0 SP1
	Operating System(s): 
	Keyword(s): 
	Last Modified: 13-JUN-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft SNA Server, versions 2.1, 2.11 SP1, 2.11 SP2, 3.0 SP1, 3.0 SP2, 3.0 SP3, 3.0 SP4, 4.0, 4.0 SP1, 4.0 SP2, 4.0 SP3, 4.0 SP1, on platform(s):
	   - the operating system: Microsoft Windows NT 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	A separate logon screen appears each time the SNA client software (WNAP) is
	started. (WNAP is an abbreviation for Windows Network Access Process.)
	
	This problem occurs when an SNA Server Windows 3.1 or 3.11 client is installed
	with a protocol other than Microsoft Networking (named pipes), even if the user
	is logged on to the same Windows NT Server.
	
	CAUSE
	=====
	
	You do not have a secure communication channel established yet.
	
	When your SNA Server Windows 3.1 or 3.11 client software uses the TCP/IP sockets,
	NetWare IPX/SPX, AppleTalk, or Banyan Vines IP (or any client- server transport,
	except named pipes) protocol to communicate with the Windows NT server, a secure
	communication channel is not established with the server, because the Windows
	Socket interface these protocols rely on does not include guaranteed security.
	Therefore, to ensure a secure communication channel, SNA client software (WNAP)
	requires you to log on separately to the Windows NT servers running SNA Server.
	
	When you log on to WNAP, your user name, password, and domain name credentials
	are combined and encrypted and then stored locally so debug programs cannot
	determine your password. These encrypted credentials are validated by the server
	when the client connects to the server. If the validation fails, you are
	prompted to reenter the password.
	
	When the client tries to connect to other servers, you are not prompted again for
	your credentials, because your previously encrypted credentials are used for
	validation automatically.
	
	NOTE: SNA Server Windows NT clients take advantage of a single-user logon process
	that does not require a special SNA Server logon, regardless of the protocol
	used to connect to the servers.
	
	RESOLUTION
	==========
	
	Depending on which version of SNA Server you are running one of the following
	solutions applies.
	
	SNA Server 2.1
	--------------
	
	When you log on to Windows NT Server using TCP/IP, NetWare IPX/SPX, or Banyan IP
	from Windows 3.1 or Windows for Workgroups 3.11 clients, you can use one of the
	two WNAP command lines noted below to cache your credentials and prevent the
	Domain Login dialog box from appearing when you start WNAP manually.
	
	Add an icon in the Windows Startup group for WNAP.EXE (the SNA Windows 3.1 and
	Windows for Workgroups 3.11 client program) that has the following command line.
	This causes WNAP to start automatically when Windows for Workgroups is started:
	
	  "wnap /user: /pwd:" (without the quotation marks)
	
	NOTE: Do not type a user name and password after /user: and /pwd:, respectively!
	There must be no space after the colon in /pwd:; however, a space after /user:
	is allowed.
	
	This command lets you log on to the Windows NT Server using the guest account
	(provided that the guest account is enabled and has no password).
	
	
	The next command requires that you have a valid account in the Windows NT SNA
	Server domain:
	
	  "wnap /user:<user_name> /pwd:<password>" (without the quotation
	  marks)
	
	SNA Server 2.11 and Later
	-------------------------
	
	The following additional options are available under SNA Server version 2.11 and
	later:
	
	1. You can add the following two new entries to the [WNAP] section of the
	  WIN.INI file:
	
	  "LogonUserName=<user_name>
	  LogonPassword=<password>" (without the quotation marks)
	
	  WNAP parses these entries and uses them when an application is first started,
	  reducing the need for starting WNAP manually with command- line parameters.
	
	  Also, to use the guest account using the parameters in WIN.INI, add these
	  entries:
	
	  "LogonUserName=guest
	  LogonPassword= " (without the quotation marks)
	
	  NOTE: Do not include a space after the equal sign (=).
	
	2. Automate the use of Windows for Workgroups 3.11 cached domain passwords.
	
	If the above WIN.INI entries are not present on a Windows for Workgroups 3.11
	client, and if you are using the cached domain password feature of Windows for
	Workgroups (enabled in the network Control Panel Startup dialog box by selecting
	Log On To Windows NT Or LAN Manager Domain), WNAP automatically retrieves your
	credentials from Windows for Workgroups when WNAP starts.
	
	
	WNAP starts automatically when an SNA Server application (3270, 5250, or an
	application written to the SNA Server APIs) is started, or when Windows for
	Workgroups is started (if a WNAP icon is added to the Startup group).
	
	NOTE: Your data on SNA Server resources may not be safe if you log off from
	Windows for Workgroups without terminating WNAP.
	
	This is because, by default, WNAP remains running even if you log off from
	Windows for Workgroups and then log back on. Therefore, if you log off from
	Windows for Workgroups without terminating WNAP and a new user logs on, then
	WNAP still has your credentials cached because WNAP only checks the Windows for
	Workgroups credentials during WNAP startup. This can become a security problem
	because the new user now has access to all your SNA Server resources.
	
	To solve this problem, configure WNAP as follows so that it terminates
	automatically when you quit the last SNA application:
	
	1. Add AutoTerminate=Yes to the [WNAP] section of the WIN.INI file.
	
	2. Start WNAP automatically by starting an SNA application.
	
	NOTE: If you start WNAP manually, WNAP does not terminate automatically when the
	last SNA application quits, even if AutoTerminate is set to Yes.
	
	With some emulators, WNAP terminates when the last connection is disconnected;
	with other emulators, you need to quit the emulator. This behavior depends on
	how the emulator is implemented. With the SNA Server applets, the WNAP
	terminates when you quit the applet.
	
	NOTE: If your Windows for Workgroups domain password expires, or if you are
	required to change your domain password during the next domain logon attempt,
	the SNA client logon fails with Error 546.
	
	To solve this problem, you must log on and change your domain password first. You
	may then have to update your SNA client configuration to use your new password.
	There is no additional user interaction required when you use the Windows for
	Workgroups cached domain password.
	
	SNA Server MS-DOS Client
	------------------------
	
	When you use the SNA Server MS-DOS client, you can start the SNABASE.EXE program
	as follows:
	
	  " snabase /user:<user_name> /pwd:<password>" (without the
	  quotation marks)
	
	
	Additional query words: prodsna 2.00 2.10 2.11 3.0 4.0
	
	======================================================================
	Keywords          :  
	Technology        : kbAudDeveloper kbSNAServSearch
	Version           : WINDOWS:2.1,2.11 SP1;2.11 SP2,3.0 (all SP),4.0,4.0 SP1,4.0 SP2,4.0 SP3,4.0 SP1
	
	=============================================================================
	

{% endraw %}
