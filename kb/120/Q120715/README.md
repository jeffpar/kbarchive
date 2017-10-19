---
layout: page
title: "Q120715: Problems Associated with the Servers Group"
permalink: /kb/120/Q120715/
---

## Q120715: Problems Associated with the Servers Group

	Article: Q120715
	Product(s): Microsoft Windows NT
	Version(s): 1.1,2.x,3.5
	Operating System(s): 
	Keyword(s): 
	Last Modified: 08-AUG-2001
	
	3.10 3.50
	
	WINDOWS
	
	kbnetwork
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Server version 3.5 
	- Microsoft Windows NT Advanced Server 
	- Microsoft LAN Manager, versions 1.1, 2.x 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	Windows NT Server and Windows NT Advanced Server use the Servers group to
	recognize LAN Manager servers participating in the Windows NT Server or Windows
	NT Advanced Server domain. (In the remainder of this article, Windows NT Server
	also refers to Windows NT Advanced Server.) When a LAN Manager server is added
	to the domain as a backup domain controller (BDC), its Machine account is added
	to the Servers group.
	
	When PORTUAS or the Upgrade Manager is used to transfer the User Account
	information from an existing LAN Manager primary domain controller (PDC) to a
	new Windows NT PDC, the Servers group is transferred, as are the user accounts
	that were created for each of the servers.
	
	If the Servers group contains the wrong server accounts, problems will result.
	
	MORE INFORMATION
	================
	
	Below is a list of potential problems, their causes and solutions:
	
	- Windows NT machine is listed in Server Manager as a LAN Manager server.
	
	  Reason: The machine name of that server matches the machine name of a member
	  of the Servers group in the domain.
	
	  Solution: Remove that server account from the Servers group.
	
	- Windows NT Server attempts to synchronize account database with LAN Manager
	  servers in a different domain, or, LAN Manager is not properly synchronizing
	  the User Account database.
	
	  Reason: The Netlogon service reads the Servers group to find the list of
	  servers it should send user account database updates to. It sends to the
	  specific server name. It doesn't validate which domain the machine is a
	  member of. For additional information, please see the following article in
	  the Microsoft Knowledge Base:
	
	  ARTICLE-ID: Q113409
	  TITLE : LAN Manager UAS Corrupted after Importing into NTAS Domain
	
	  Solution: Remove server account(s) from the Servers group, or add the server
	  to the Servers group.
	
	- LAN Manager server cannot be promoted to BDC from standalone role if the PDC
	  is a Windows NT Server.
	
	  Reason: A user account for the Server Name already exists in the Windows NT
	  Server domain and in the local user account information on the LAN Manager
	  server. The passwords don't match.
	
	  Solution: Use Server Manager to create a machine account for the LAN Manager
	  server. Remove any user account for the Server name on the Windows NT Server
	  domain and on the LAN Manager server while in standalone role.
	
	- LAN Manager server does not appear in Server Manager when View Domain Members
	  Only is selected, or LAN Manager server that is NOT part of the domain is
	  shown when View Domain Members Only is selected.
	
	  Reason: Server Manager does not check with the LAN Manager servers when
	  displaying information, but it checks the Servers group. If a LAN Manager
	  server is on the network and communicating with the Windows NT Server, it
	  will be listed in Server Manager. If the LAN Manager server isn't included in
	  the Servers group, it will not appear to the Windows NT Server as part of its
	  domain. On the other hand, if a server that is not part of the domain is
	  included in the Servers group, it appears as a domain member in Server
	  Manager.
	
	- Netlogon service fails in a LAN Manager domain, LAN Manager users are not
	  able to log on.
	
	  Reasons: A LAN Manager PDC is upgraded to a Windows NT Server and the original
	  LAN Manager domain is left intact. PORTUAS creates computer accounts on the
	  Windows NT Server for each of the LAN Manager servers in the original Servers
	  group. Server accounts will then exist in both domains, the LAN Manager
	  domain and the new Windows NT Server domain.
	
	  Solution: Remove the servers group and/or server accounts from one of the
	  machines; either the new Windows NT Server PDC or the LAN Manager PDC. Use
	  Server Manager to remove the server account from the Windows NT Server
	  domain.
	
	- Replication and trust relationships function incorrectly between Windows NT
	  Server and LAN Manager domains.
	
	  Reason: Duplicate server accounts exist in different domains, and are members
	  of the Servers group on one or both of the domains.
	
	  Solution: Remove the servers group and/or server accounts from one of the
	  domains; either the new Windows NT Server PDC or the LAN Manager PDC. Use
	  Server Manager to remove the server account from the Windows NT Server
	  domain.
	
	Additional query words: prodnt 3.10
	
	======================================================================
	Keywords          :  
	Technology        : kbWinNTsearch kbWinNT350search kbWinNTSsearch kbWinNTS350 kbWinNTAdvSerSearch kbWinNTS350search kbAudDeveloper kbLanManSearch kbLanMan110 kbLanMan200xSearch
	Version           : :1.1,2.x,3.5
	
	=============================================================================
	
