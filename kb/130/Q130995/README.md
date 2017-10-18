---
layout: page
title: "Q130995: RAS:&quot;Error 1326&quot; or &quot;Access Denied&quot; Connecting to Remote Share"
permalink: kb/130/Q130995/
---

## Q130995: RAS:&quot;Error 1326&quot; or &quot;Access Denied&quot; Connecting to Remote Share

	Article: Q130995
	Product(s): Windows for Workgroups and Windows NT Networking Issues
	Version(s): ; winnt:3.5,3.51
	Operating System(s): 
	Keyword(s): 
	Last Modified: 08-AUG-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Server version 3.1 
	- Microsoft Windows NT Workstation version 3.1 
	- Microsoft Windows NT Advanced Server 
	- Microsoft Windows NT Workstation versions 3.5, 3.51 
	- Microsoft Windows NT Server versions 3.5, 3.51 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you try to connect over an existing Remote Access Service (RAS) link to a
	remote resource you have access rights to, one of the following messages appears
	after you enter the correct password (your RAS connection remains unaffected):
	
	From File Manager:
	
	  Stop. Access is denied.
	
	From MS-DOS Command Prompt:
	
	  System error 1326 has occurred.
	  Logon failure: unknown user name or bad password.
	
	These symptoms occur after you call a RAS server from your RAS client and the RAS
	server authenticates you successfully.
	
	CAUSE
	=====
	
	Your local logon credentials differ from the remote domain credentials.
	
	The RAS server does not log you on to the remote domain with your user account,
	password, and domain credentials you enter in the RAS Authentication dialog box.
	It only uses these credentials to verify that you have permission to physically
	access the network as a dial-in client. To validate your access to protected
	resources on the remote domain, the remote domain controller checks the
	credentials you entered when you first logged on locally, not the RAS
	Authentication dialog box credentials you entered just before calling the RAS
	server.
	
	Therefore, if your local logon credentials differ from the remote domain
	credentials, you cannot access protected resources on the remote domain and one
	of the messages above appears.
	
	RESOLUTION
	==========
	
	Use one of these three solutions to gain access to your remote resources:
	
	- Log on to the remote domain after you establish the RAS connection.
	
	- Automatically log on remotely at Windows NT startup (before RAS link).
	
	- Supply your remote credentials each time you connect to a remote share.
	
	These solutions are explained below. They assume that the administrator of the
	remote domain has previously granted you access rights to the share you are
	trying to connect to.
	
	Log On to the Remote Domain After You Establish the RAS Connection
	------------------------------------------------------------------
	
	Log off your local domain and log on to the remote domain by pressing
	CTRL+ALT+DEL.
	
	For this to work, the following actions must occur:
	
	- The administrator of the remote domain needs to create a domain account for
	  your computer.
	
	- Your computer needs to join the remote domain. For instructions on how to
	  join a remote domain over a RAS link, please see the following article in the
	  Microsoft Knowledge Base:
	
	  Q125856 Joining a Domain from a Windows NT Workstation Running RAS
	
	NOTE: If the symptoms still occur, and you are sure you are supplying the correct
	credentials, check with your network administrator to see whether you have
	access permissions to the remote share.
	
	Automatically Log on Remotely at Windows NT Startup (Before RAS Link)
	---------------------------------------------------------------------
	
	You can avoid logging off and on again after each RAS connection. To do this, you
	need to follow the requirements in the above section titled "Log On to the
	Remote Domain After You Establish the RAS Connection." Then do one of the
	following:
	
	- Use your remote domain credentials when you are logging on during startup of
	  Windows NT even though the RAS connection does not exist yet.
	
	-or-
	
	- For completely transparent local and remote access, make your local user
	  account, password, and domain name credentials the same as your remote domain
	  credentials.
	
	  NOTE: Making the local domain name identical to the remote domain name is a
	  security issue and may require reinstallation of Windows NT, depending on
	  which version of Windows NT you are running. Check with your administrator
	  regarding the security issue. Consult your Windows NT documentation regarding
	  changing your domain name.
	
	For additional information, please see the following article in the Microsoft
	Knowledge Base:
	
	  Q126701 TITLE : RAS: Use Cached Credentials to Log On to a Different Domain
	
	Supply Your Remote Credentials Each Time You Connect to a Remote Share
	----------------------------------------------------------------------
	
	If your computer is not part of the remote domain, or if you do not want to log
	on to the remote domain by pressing CTRL+ALT+DEL, use one of the following
	procedures to gain access to your remote resources. Depending on which of your
	remote credentials differ from your local credentials, one of the following
	solutions applies.
	
	- When Only Your Passwords Differ:
	
	  If only your passwords differ, enter your password for the remote domain when
	  you are prompted for it.
	
	  NOTE: If the symptoms still occur, but your passwords are the same on both
	  domains, then you or your system logon cache must have supplied a different
	  user name or domain name. For more information on supplying the correct
	  credentials, read the information below.
	
	- When Using File Manager and Your Domain Names or User Names Differ:
	
	  Supply your remote domain credentials in the Connect As field in the File
	  Manager Connect Network Drive dialog box. If your local domain name is
	  different than the remote domain name, enter your credentials as follows:
	
	  <remote_domain_name>\<remote_user_name>
	
	  NOTE: If the remote domain name and local domain name are identical, then
	  enter only your remote user name.
	
	- When Using the NET USE Command:
	
	  Supply your remote domain credentials with the /USER command switch of the NET
	  USE command. For example:
	
	  NET USE R: \\Finance\Data /USER:Corporate\FredMgr
	
	  where Corporate is the remote domain name and FredMgr is the remote user name.
	
	
	Additional query words: prodnt 3.10
	
	======================================================================
	Keywords          :  
	Technology        : kbWinNTsearch kbWinNTWsearch kbWinNT351search kbWinNT350search kbWinNTW350 kbWinNTW350search kbWinNTW351search kbWinNTW351 kbWinNTW310 kbWinNTSsearch kbWinNTS351 kbWinNTS350 kbWinNTS310 kbWinNTAdvSerSearch kbWinNTS351search kbWinNTS350search kbWinNTS310search kbWinNT310Search kbWinNTW310Search
	Version           : :; winnt:3.5,3.51
	
	=============================================================================
	
