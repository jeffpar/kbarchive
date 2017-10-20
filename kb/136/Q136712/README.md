---
layout: page
title: "Q136712: Common Questions About Browsing with Windows"
permalink: /kb/136/Q136712/
---

## Q136712: Common Questions About Browsing with Windows

{% raw %}

	Article: Q136712
	Product(s): Microsoft Windows NT
	Version(s): 2000,3.5,3.51,4.0
	Operating System(s): 
	Keyword(s): kbnetwork
	Last Modified: 04-FEB-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Workstation versions 3.5, 3.51, 4.0 
	- Microsoft Windows NT Server versions 3.5, 3.51, 4.0 
	- Microsoft Windows 2000 Professional 
	- Microsoft Windows 2000 Server 
	- Microsoft Windows 2000 Advanced Server 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	The following are common questions and answers regarding browsing with Windows
	on your local area network (LAN).
	
	MORE INFORMATION
	================
	
	Question:
	
	Does browsing printers work the same as browsing servers?
	
	Answer:
	
	Yes. When a print server announces itself, it sets the SV_TYPE_PRINTQ_SERVER bit
	in the announcement. Print manager requests domains and print servers in its
	NetServerEnum request.
	
	Question:
	
	If a multihomed computer connected to two disjoint networks runs Windows NT with
	TCP/IP installed and functions as a browser, can clients on one network browse
	servers on the other network?
	
	Answer:
	
	No. As far as the browser is concerned, these are two disjoint networks and the
	browser is not able to browse across disjoint networks (only across subnets on a
	single network). The critical issue is that NetBT presents the cards as distinct
	physical networks to the browser.
	
	For a Domain Master Browser, the list of servers returned to the client only
	contains the servers that are associated with the endpoint the browse request
	was received on. This is done because the Domain Master Browser does not know if
	the servers on the other endpoint are reachable by the clients. Because backup
	browsers, or local Master Browsers, rely on the master list of servers from the
	Domain Master Browser, a local Master Browser (even if also multihomed), does
	not provide a list of remote severs either.
	
	On the other hand, the IPX protocol presents a multihomed computer as a single
	atomic network, so the Windows NT browser browses across those networks.
	
	For additional information about multihomed browsing, please see the following
	article in the Microsoft Knowledge Base:
	
	  ARTICLE-ID: Q133241
	  TITLE : Browsing Domain Master Browsers w/ Multiple NICs and Protocols
	
	
	Question:
	
	What registry parameter is used to hide a server from the browser?
	
	Answer:
	
	WARNING: Using Registry Editor incorrectly can cause serious, system-wide
	problems that may require you to reinstall Windows NT to correct them. Microsoft
	cannot guarantee that any problems resulting from the use of Registry Editor can
	be solved. Use this tool at your own risk.
	
	1. Under the HKEY_LOCAL_MACHINE subtree, go to the following subkey:
	
	  \SYSTEM\CurrentControlSet\Services\LanmanServer\Parameters
	
	2. From the Edit menu, choose Add Value and type:
	
	  Hidden
	
	  NOTE: This value is case sensitive and must begin with a capital H.
	
	3. In the Data Type field, choose REG_DWORD and choose OK.
	
	4. In the Data field, type 1 to enable hiding and choose OK.
	
	  NOTE: Data field range: 0 or 1
	        Default: 0 (false)
	
	5. Restart your computer.
	
	
	Question:
	
	On a Windows NT Server, if you run Control Panel and choose Network, and then
	select Computer Browser and choose Configure, a dialog box with the option Other
	Domain appears. What does this option do?
	
	Answer:
	
	You can use this option to make a domain that only contains LAN Manager servers
	visible to a Windows NT browser.
	
	NOTE: LAN Manager server browser announcements use the DOMAIN<00> name
	format. Windows NT based browsers ignore this name format by default.
	
	Question:
	
	What are the registry parameters related to browsing?
	
	Answer:
	
	WARNING: Using Registry Editor incorrectly can cause serious, system-wide
	problems that may require you to reinstall Windows NT to correct them. Microsoft
	cannot guarantee that any problems resulting from the use of Registry Editor can
	be solved. Use this tool at your own risk.
	
	Under the HKEY_LOCAL_MACHINE subtree, look under the following subkeys for some
	common registry settings that relate to browsing:
	
	- \SYSTEM\CurrentControlSet\Services\LanmanServer\Parameters\LMannounce
	
	   - LMannounce parameter information:
	
	      - Value is set to 1 (TRUE) to make Windows NT browser visible to LAN
	        Manager clients. This setting causes the Windows NT browser to announce
	        itself with a LAN Manager 2.x compatible server announcement.
	
	- \SYSTEM\CurrentControlSet\Services\Browser\Parameters\IsDomainMaster
	
	   - IsDomainMaster parameter information:
	
	      - When set to 1, this parameter provides a priority boost to increase its
	        likely hood of winning a master browser election. It does not allow the
	        browse server to become the domain master browser. This value is a
	        boolean value and can be any of the following: Yes/No, True/False, or
	        1/0.
	
	   - MaintainServerList:
	
	      - When set to NO, the server is not a browse server.
	
	      - When set to YES, the server becomes a browse server.
	
	      - When set to AUTO, the server becomes a browse master if the master
	        browser asks it do so.
	
	For additional information on browsing related Registry parameters, please see
	the following article in the Microsoft Knowledge Base:
	
	  ARTICLE-ID: Q134985 TITLE : Browsing & Other Traffic Incur High Costs
	  over ISDN Routers
	
	Additional query words: prodnt
	
	======================================================================
	Keywords          : kbnetwork 
	Technology        : kbWinNTsearch kbWinNTWsearch kbWinNTW400 kbWinNTW400search kbWinNT351search kbWinNT350search kbWinNT400search kbWinNTW350 kbWinNTW350search kbWinNTW351search kbWinNTW351 kbwin2000AdvServ kbwin2000AdvServSearch kbwin2000Serv kbWinNTSsearch kbWinNTS400search kbWinNTS400 kbWinNTS351 kbWinNTS350 kbwin2000ServSearch kbwin2000Search kbwin2000ProSearch kbwin2000Pro kbWinNTS351search kbWinNTS350search kbWinAdvServSearch
	Version           : :2000,3.5,3.51,4.0
	
	=============================================================================
	

{% endraw %}
