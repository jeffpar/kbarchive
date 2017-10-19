---
layout: page
title: "Q140834: Username/Password Support in SNA Server Win95 Client Registry"
permalink: /kb/140/Q140834/
---

## Q140834: Username/Password Support in SNA Server Win95 Client Registry

	Article: Q140834
	Product(s): Microsoft SNA Server
	Version(s): WINDOWS:2.1,2.11,3.0
	Operating System(s): 
	Keyword(s): 
	Last Modified: 11-JUN-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft SNA Server, versions 2.1, 2.11, 3.0, on platform(s):
	   - the operating system: Microsoft Windows NT 
	-------------------------------------------------------------------------------
	
	
	IMPORTANT: This article contains information about modifying the registry. Before you modify the registry, make sure to back it up and make sure that you understand how to restore the registry if a problem occurs. For information about how to back up, restore, and edit the registry, click the following article number to view the article in the Microsoft Knowledge Base:
	
	  Q256986 Description of the Microsoft Windows Registry
	
	SYMPTOMS
	========
	
	This article describes the update for SNA Server Windows 95 clients that use a
	non-named-pipe transport (such as Banyan Vines, IPX/SPX, and TCP/IP Sockets) and
	do not log on to a Windows NT domain.
	
	When you configure a SNA Server Windows 95 client for a non-named pipe transport
	SNA Server uses the Windows 95 cached password to validate users for sponsor
	connections (A sponsor connection is used by SNA Server to learn about the SNA
	Server domain.) However, if Windows 95 is not configured to log on to a Windows
	NT domain, you must install the update and provide your SNA Server Windows 95
	client registry with your Windows NT domain username and password as explained
	below.
	
	For more information about the Windows 3.x client, please see the following
	article in the Microsoft Knowledge Base:
	
	  Q132552 SNA: Separate Logon Prompt If Non-MS Network Protocol Installed
	
	For more information about the Windows 95 client, please see the following
	article in the Microsoft Knowledge Base:
	
	  Q157440 Windows 95 Client Receives MSN Pop-up Screen When Starting
	
	STATUS
	======
	
	This feature is included in SNA Server, version 3.0, as well as the latest U.S.
	Service Pack for SNA Server, version 2.11. For information on obtaining the
	Service Pack, query on the following word in the Microsoft Knowledge Base
	(without the spaces):
	
	  S E R V P A C K
	
	MORE INFORMATION
	================
	
	When to Use the Update
	----------------------
	
	WARNING: If you use Registry Editor incorrectly, you may cause serious problems
	that may require you to reinstall your operating system. Microsoft cannot
	guarantee that you can solve problems that result from using Registry Editor
	incorrectly. Use Registry Editor at your own risk.
	
	The following conditions require you to install the update and configure the
	Windows 95 client registry to supply a Windows NT domain username and password:
	
	- If Client for Microsoft Networks is not listed in the Windows 95 Control
	  Panel Networks option.
	
	  -or-
	
	- If, when you select Client for Microsoft Networks, there is no check mark
	  next to Log on to Windows NT Domain.
	
	Required Windows 95 Registry Entries
	------------------------------------
	
	The new update requires that you add new values and your Windows NT Domain
	username and password to the Windows 95 registry.
	
	You can add the required information under HKEY_CURRENT_USER or the
	HKEY_LOCAL_MACHINE subtree. However, the Windows 95 client checks the
	HKEY_CURRENT_USER first and therefore performs faster if you choose that
	subtree. To add the information:
	
	1. Under the HKEY_CURRENT_USER subtree (or the HKEY_LOCAL_MACHINE subtree), go
	  to the following subkey:
	
	Software\Microsoft\SnaBase\Parameters
	
	2. Add the following value names, data types, and data for your password and
	  username:
	
	     Value Name: Password
	     Data Type:  REG_SZ
	     Data:       <your_password>
	
	     Value Name: UserName
	     Data Type:  REG_SZ
	     Data:       <your_user_name>
	
	Updated Files
	-------------
	
	Microsoft has updated the following files:
	
	  <SNA_Root>\SYSTEM\SNABASE.EXE
	  <Windows_95_root>\SYSTEM\SNAKRNL.DLL
	
	Additional query words: prodsna 2.11 3.0
	
	======================================================================
	Keywords          :  
	Technology        : kbAudDeveloper kbSNAServSearch
	Version           : WINDOWS:2.1,2.11,3.0
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	
