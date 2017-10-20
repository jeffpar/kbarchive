---
layout: page
title: "Q172450: NetDDE Connections Fail When &quot;Logon to&quot; Restrictions Apply"
permalink: /kb/172/Q172450/
---

## Q172450: NetDDE Connections Fail When &quot;Logon to&quot; Restrictions Apply

{% raw %}

	Article: Q172450
	Product(s): Microsoft Windows NT
	Version(s): WinNT:3.5,3.51,4.0
	Operating System(s): 
	Keyword(s): 
	Last Modified: 09-AUG-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Workstation versions 3.5, 3.51, 4.0 
	- Microsoft Windows NT Server versions 3.5, 3.51, 4.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	You are prompted for a password when connecting to a Windows NT computer while
	using a network dynamic data exchange (DDE) application.
	
	CAUSE
	=====
	
	"Logon to" restrictions are implemented such that user A can only log on to
	workstation A. User B logs on to workstation B, but no "Logon to" restrictions
	are placed on this user. A network DDE application is then started on both
	workstations. When workstation A attempts to dial workstation B through the
	network DDE application, User A is prompted for a password. If any valid
	non-administrative user and password is used, the connection fails with an
	"Invalid Password" pop-up error message.
	
	When the network DDE client connects to the network DDE server, the server will
	impersonate the client. Because of this security restriction, the server portion
	of the network DDE application is responding with the password dialog box.
	
	RESOLUTION
	==========
	
	Remove "Logon To" account restrictions for the user account that originates the
	connection.
	
	-or-
	
	Add netdde to the list of workstations the user can log on from.
	
	-or-
	
	From the originating computer, perform the following steps:
	
	1. Use the Domain Administrator's account.
	
	2. Use the answering computer's Administrator account.
	
	3. Enable the domain Guest account and use it to originate the connection.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in Microsoft Windows NT versions
	3.51 and 4.0. We are researching this problem and will post new information here
	in the Microsoft Knowledge Base as it becomes available.
	
	
	Additional query words: prodnt chat hearts
	
	======================================================================
	Keywords          :  
	Technology        : kbWinNTsearch kbWinNTWsearch kbWinNTW400 kbWinNTW400search kbWinNT351search kbWinNT350search kbWinNT400search kbWinNTW350 kbWinNTW350search kbWinNTW351search kbWinNTW351 kbWinNTSsearch kbWinNTS400search kbWinNTS400 kbWinNTS351 kbWinNTS350 kbWinNTS351search kbWinNTS350search
	Version           : WinNT:3.5,3.51,4.0
	Hardware          : x86
	
	=============================================================================
	

{% endraw %}
