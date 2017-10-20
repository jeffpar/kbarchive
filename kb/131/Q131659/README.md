---
layout: page
title: "Q131659: RAS Err Msg Connecting a Remote Server Share: Access Denied"
permalink: /kb/131/Q131659/
---

## Q131659: RAS Err Msg Connecting a Remote Server Share: Access Denied

{% raw %}

	Article: Q131659
	Product(s): Microsoft Windows 3.x Retail Product
	Version(s): WINDOWS:3.11
	Operating System(s): 
	Keyword(s): 
	Last Modified: 29-OCT-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows for Workgroups version 3.11 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you try to connect to a remote resource over an existing Remote Access
	Service (RAS) link that you have access rights to, one of the following messages
	appears after you enter the correct password:
	
	- From File Manager:
	
	  Stop. Access has been denied.
	
	- From MS-DOS Command Prompt:
	
	  Error 5: Access has been denied.
	
	These symptoms occur after you call a RAS server from your RAS client and the RAS
	server authenticates you successfully. Your RAS connection is not affected when
	the above error messages appear.
	
	CAUSE
	=====
	
	Your local logon credentials differ from your remote domain credentials or, if
	they do not differ, you are not logged on to Windows for Workgroups.
	
	How RAS Logon and Network Logon Differ
	--------------------------------------
	
	The RAS server does not log you on to the remote domain with your user account,
	password, and domain credentials you enter in the RAS Authentication dialog box.
	The remote domain controller only uses these credentials to verify that you have
	permission to physically access the network as a dial-in client.
	
	NOTE: The RAS Authentication dialog box only appears if you are not logged on to
	Windows for Workgroups, or if you are calling a RAS server from your RAS client
	for the first time. If you are not prompted by this dialog box, RAS uses the
	credentials you enter during your very first RAS call.
	
	To validate your access to protected resources on the remote domain, the remote
	domain controller checks the credentials you enter when you log on locally to
	Windows for Workgroups.
	
	Therefore, if your local logon credentials differ from the remote domain
	credentials, or if you are not logged on locally, you cannot access protected
	resources on the remote domain and one of the messages above appears.
	
	RESOLUTION
	==========
	
	To gain access to your remote resources:
	
	- Log on to the remote domain after you establish the RAS connection.
	
	-or-
	
	- Automatically log on remotely when you start Windows for Workgroups (before
	  the RAS link is established).
	
	These solutions are explained below. They assume that the remote domain
	administrator has previously granted you access rights to the share you are
	trying to connect to.
	
	Log On to the Remote Domain After You Establish the RAS Connection
	------------------------------------------------------------------
	
	To log on to the remote domain after you establish the RAS connection, or after
	you log on locally, enter your remote domain name in Control Panel Network and
	then log off and on again:
	
	1. Run Control Panel and choose Network.
	
	2. Choose Startup.
	
	3. Select "Log On To Windows NT Or LAN Manager Domain".
	
	4. Enter the remote domain name in the Domain Name field and choose OK.
	
	  NOTE: Making the local domain name identical to the remote domain name is a
	  security issue. Check with your administrator before changing it.
	
	5. Choose OK again.
	
	6. From the Program Manager Network group, run Log On/Off to log off.
	
	  NOTE: Logging off does not hang up your RAS connection.
	
	7. Run Log On/Off again to log on with your remote user name and password.
	
	If the symptoms still occur, and you are sure you are supplying correct
	credentials, check with your network administrator to determine if you have
	access permissions to the remote share.
	
	Automatically Log On Remotely at Windows for Workgroups Startup
	
	(Before the RAS Link is Established)
	------------------------------------
	
	To configure Windows for Workgroups and RAS so you do not have to log on, make
	your local user account, password, and domain name credentials the same as your
	remote domain credentials.
	
	NOTE: Making the local domain name identical to the remote domain name is a
	security issue. Check with your administrator before changing it.
	
	If you cannot make your credentials the same (due to your network configuration),
	you can still avoid logging off and on again after each RAS connection. To do
	so, run Control Panel to enter your remote domain name so you can use your
	remote domain credentials when you are logging on during startup of Windows for
	Workgroups (even though the RAS connection does not exist yet):
	
	1. Run Control Panel and choose Network.
	
	2. Choose Startup.
	
	3. Select "Log On To Windows NT Or LAN Manager Domain".
	
	4. Enter the remote domain name in the Domain Name field and choose OK.
	
	  NOTE: Making the local domain name identical to the remote domain name is a
	  security issue. Check with your administrator before changing it.
	
	5. In the Microsoft Windows Network dialog box choose Log Off.
	
	  NOTE: Logging off does not hang up your RAS connection.
	
	6. If your remote user name is different from your local user name, type your
	  remote user name in the Default Logon Name field and choose OK.
	
	7. Quit Windows for Workgroups and reboot your computer.
	
	8. Start Windows for Workgroups and enter your remote user name and password in
	  the logon dialog box.
	
	  NOTE: A message appears stating that you are logged on. Your remote domain
	  credentials are now cached for automatic use when you later connect over RAS
	  to your protected resources on the remote domain.
	
	  Ignore the part of the message that indicates there was no server to log you
	  on. This message is expected because the remote domain controller cannot be
	  reached for account validation until you have a RAS connection.
	
	Each time you log on with your remote credentials when you start Windows for
	Workgroups, you will be able to establish the RAS connection and connect to your
	protected remote resources without having to log off and on again.
	
	NOTE: Logging on with your remote credentials may prevent you from accessing
	local resources and browse lists because your remote credentials may not be
	valid on your local network. For more information, contact your network
	administrator.
	
	Additional query words: 3.11 wfwg wfw pop up
	
	======================================================================
	Keywords          :  
	Technology        : kbAudDeveloper kbWFWSearch kbWFW311
	Version           : WINDOWS:3.11
	
	=============================================================================
	

{% endraw %}
