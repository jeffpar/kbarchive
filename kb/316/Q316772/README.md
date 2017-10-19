---
layout: page
title: "Q316772: XADM: Cluster Registry Checkpoint Event ID 1024 Err Mssg Logged"
permalink: /kb/316/Q316772/
---

## Q316772: XADM: Cluster Registry Checkpoint Event ID 1024 Err Mssg Logged

	Article: Q316772
	Product(s): Microsoft Exchange
	Version(s): 4.0,5.5
	Operating System(s): 
	Keyword(s): kbenv kbtool exc55
	Last Modified: 06-AUG-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Exchange Server, version 5.5 
	- Microsoft Windows NT Server, Enterprise Edition version 4.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	If an Exchange Server 5.5 computer is running in a Windows NT Server 4.0
	cluster, an error message may be logged in the System event log that is similar
	to:
	
	  Event ID: 1024
	  Source: ClusSvc
	  Type: Error
	  Category: (64)
	  Description: The registry checkpoint for cluster resource Microsoft Exchange
	  Internet Mail Service could not be restored to registry key
	  HKEY_LOCAL_MACHINE\SYSTEM\CurrentControlSet\Services\MSExchangeIMC. The
	  resource may not function correctly. Make sure that no other processes have
	  open handles to registry keys in this registry subtree.
	
	
	CAUSE
	=====
	
	This issue may occur if the registry key for that resource is being used. The
	Winlogon.exe locks the following registry keys:
	
	- HKEY_LOCAL_MACHINE\System\ControlSet001\Services\MSExchangeIMC\Diagnostics
	
	- HKEY_LOCAL_MACHINE\System\ControlSet001\Services\MSExchangeIS\ParametersSystem
	
	- HKEY_LOCAL_MACHINE\System\ControlSet001\Services\MSExchangeIMC\Parameters
	
	Even after you quit the Exchange Server Administrator program, Winlogon keeps
	these registry keys locked. Therefore, when you take the cluster offline, and
	then bring it online again, Exchange Server cannot write the registry checkpoint
	because Winlogon has the keys locked.
	
	RESOLUTION
	==========
	
	To resolve this issue, obtain the Windows NT 4.0 Security Rollup Package. For
	additional information, click the article number below to view the article in
	the Microsoft Knowledge Base:
	
	  Q299444 Post-Windows NT 4.0 Service Pack 6a Security Rollup Package (SRP)
	
	The English-language version of this fix should have the following file
	attributes or later:
	
	  Date          Time    Size      File name      Platform
	  -------------------------------------------------------
	  04-APR-2000   00:46   135,440   Services.exe   Intel
	  04-APR-2000   00:46   192,272   Winlogon.exe   Intel
	  04-APR-2000   00:45   249,104   Services.exe   Alpha
	  04-APR-2000   00:45   275,216   Winlogon.exe   Alpha
	
	For additional information, click the article number below to view the article in
	the Microsoft Knowledge Base:
	
	  Q259042 Handle Leak in WinLogon After Applying Windows NT 4.0 SP6
	
	
	
	
	
	Additional query words:
	
	======================================================================
	Keywords          : kbenv kbtool exc55 
	Technology        : kbWinNTsearch kbWinNT400search kbWinNTSsearch kbWinNTSEntSearch kbWinNTSEnt400 kbWinNTS400search kbExchangeSearch kbExchange550 kbZNotKeyword2
	Version           : :4.0,5.5
	Issue type        : kbprb
	
	=============================================================================
	
