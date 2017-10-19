---
layout: page
title: "Q157174: Windows NT Logon Script Does Not Run on Windows 95 RAS Client"
permalink: /kb/157/Q157174/
---

## Q157174: Windows NT Logon Script Does Not Run on Windows 95 RAS Client

	Article: Q157174
	Product(s): Microsoft Windows NT
	Version(s): WINDOWS:; winnt:3.5,3.51
	Operating System(s): 
	Keyword(s): kbinterop kbnetwork
	Last Modified: 08-AUG-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows 95 
	- Microsoft Windows NT Server versions 3.5, 3.51 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	If you are logging on to a Windows NT domain over a remote access service (RAS)
	connection and you have an associated Windows NT logon script, the logon script
	does not run when you log on to the domain through the RAS server. This problem
	occurs if your computer is running Windows 95.
	
	CAUSE
	=====
	
	When you started Windows 95, you may have tried to log on at the first prompt
	during startup. At that point, you would have received an error message stating
	that there is no server to validate you because you are a remote user and not on
	the network. The text of the error message is:
	
	  No domain server was available to validate your password. You may not be able
	  to gain access to some network resources.
	
	As this point, the logon script can no longer be run when logging on to the
	domain later over a RAS connection.
	
	WORKAROUND
	==========
	
	To work around this issue, you can click Cancel when you are logging on at
	Windows 95 startup. Then, when you dial the RAS server, you again receive the
	dialog box to log on. This time, the logon script associated with the account
	runs correctly. However, if you cancel the initial Windows 95 logon prompt, be
	aware that you will be unable to save your passwords when you connect by using
	Dial-Up Networking to other servers. The Save Password check box will be
	unavailable, and previously saved passwords will not be filled in for you
	automatically.
	
	Because of the inability to save passwords when you cancel the Windows 95 startup
	logon, a preferred method of resolve this issue is to disable the network
	adapter in the computer that is causing the initial network logon prompt to
	appear when you start Windows. You can accomplish this most easily by creating a
	new hardware profile that has the network adapter disabled. For example, this
	would allow you to use a laptop computer that has a network adapter built into
	the motherboard to have one hardware profile for use when the network adapter is
	needed (when you are connected to the corporate LAN), and a separate hardware
	profile with the network adapter disabled in Device Manager for when the laptop
	computer is mobile and you make use of Dial-Up Networking to connect to a
	corporate RAS server.
	
	Note that this issue in Windows 95 has been successfully resolved in some
	scenarios by using the updated file for Windows 95 described in the following
	Microsoft Knowledge Base article in conjunction with the Dial-Up Networking
	(DUN) 1.3 update:
	
	  Q154434 Err Msg: No Domain Server Was Available to Validate...
	
	In these scenarios, which involve computers with built-in network adapters that
	sometimes are plugged into a LAN and at other times are disconnected from the
	LAN and using Dial-Up Networking to connect to a RAS server on the LAN, the
	issue was resolved by applying the DUN 1.3 upgrade first, and then applying the
	updated files listed in the article.
	
	Additional query words: prodnt tshoot login execute executed
	
	======================================================================
	Keywords          : kbinterop kbnetwork 
	Technology        : kbWinNTsearch kbWinNT351search kbWinNT350search kbWinNTSsearch kbWinNTS351 kbWinNTS350 kbWinNTS351search kbWinNTS350search kbWin95search kbZNotKeyword3
	Version           : WINDOWS:; winnt:3.5,3.51
	Issue type        : kbprb
	
	=============================================================================
	
