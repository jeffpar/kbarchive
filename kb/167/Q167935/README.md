---
layout: page
title: "Q167935: XCLN: Able to Log On with Incorrect Windows NT Credentials"
permalink: kb/167/Q167935/
---

## Q167935: XCLN: Able to Log On with Incorrect Windows NT Credentials

	Article: Q167935
	Product(s): Microsoft Exchange
	Version(s): WinNT:4.0,5.0
	Operating System(s): 
	Keyword(s): kbusage
	Last Modified: 21-APR-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Exchange Windows NT client, versions 4.0, 5.0 
	-------------------------------------------------------------------------------
	
	IMPORTANT: This article contains information about editing the registry.
	Before you edit the registry, make sure you understand how to restore it
	if a problem occurs. For information on how to do this, view the "Restoring
	the Registry" online Help topic in Regedit.exe or the "Restoring a Registry
	Key" online Help topic in Regedt32.exe.
	
	SYMPTOMS
	========
	
	Under certain conditions, the Microsoft Exchange Windows NT client may allow you
	to gain access to your mailbox even though you enter incorrect Windows NT
	credentials (user name, domain name, or password). This problem occurs when the
	Use Network Security During Logon option is disabled for your profile. Normally,
	when this option is disabled, you have to enter the correct Windows NT
	credentials before being given access to your mailbox.
	
	CAUSE
	=====
	
	The behavior described above will only occur if all of the following conditions
	are met:
	
	- You physically log on to the Windows NT domain at the Exchange Server
	  computer where your mailbox resides.
	
	- The account with which you log on to the domain is the Primary Windows NT
	  account of the mailbox being accessed.
	
	- The ncalrpc protocol, which refers to the Local RPC protocol, is listed in
	  the RPC_Binding_Order value of the following Registry key:
	
	     HKEY_LOCAL_MACHINE\SOFTWARE\Microsoft\Exchange\Exchange Provider
	
	- The Exchange Windows client uses Local RPC communication to resolve the
	  connection to the Exchange Server computer.
	
	For example, you log on to the Exchange Server computer and create a profile with
	the Use Network Security During Logon option disabled. When attempting to log on
	to your mailbox, you are prompted to enter the appropriate Windows NT
	credentials. Even if you enter the wrong user name, domain name, or password,
	you will still be connected to your mailbox. This is because, like the Named
	Pipes protocol, Local RPC caches your logon credentials. These credentials
	override any credentials entered manually by you. This behavior is by design.
	
	It is important to note that users will not be able to access another user's
	mailbox. If an attempt is made to do so with invalid Windows NT credentials, the
	user will be denied access to the mailbox, as expected. Also, local RPC
	communication is only used when Exchange Client is running on the same computer
	as the RPC target (in this case the server).
	
	RESOLUTION
	==========
	
	WARNING: Using Registry Editor incorrectly can cause serious problems that may
	require you to reinstall Windows. Microsoft cannot guarantee that problems
	resulting from the incorrect use of Registry Editor can be solved. Use Registry
	Editor at your own risk.
	
	For information about how to edit the registry, view the "Changing Keys And
	Values" online Help topic in Registry Editor (Regedit.exe) or the "Add and
	Delete Information in the Registry" and "Edit Registry Data" online Help topics
	in Regedt32.exe. Note that you should back up the registry before you edit it.
	
	To resolve this problem, modify the registry in one of the following ways:
	
	- Remove ncalrpc from the RPC_Binding_Order registry value.
	
	  -OR-
	
	- Change the order in which ncalrpc appears in the RPC binding order. For
	  example, make TCP/IP the first protocol and then local RPC. This entry would
	  appear as follows:
	
	     ncacn_ip_tcp,ncalrpc,ncacn_spx,ncacn_np,netbios,ncacn_vns_spp
	
	Additional query words: login
	
	======================================================================
	Keywords          : kbusage 
	Technology        : kbExchangeSearch kbExchangeClientSearch kbZNotKeyword2 kbZNotKeyword3 kbExchange400NT kbExchange500NT
	Version           : WinNT:4.0,5.0
	
	=============================================================================
	
