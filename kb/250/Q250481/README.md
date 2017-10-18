---
layout: page
title: "Q250481: How to Set Up a Referral in Microsoft Metadirectory Services"
permalink: kb/250/Q250481/
---

## Q250481: How to Set Up a Referral in Microsoft Metadirectory Services

	Article: Q250481
	Product(s): Microsoft Windows NT
	Version(s): 2.1
	Operating System(s): 
	Keyword(s): kbnetwork kbtool
	Last Modified: 16-JAN-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Metadirectory Services, version 2.1 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	This article describes how to set up referrals in Microsoft Metadirectory
	Services (MMS).
	
	MORE INFORMATION
	================
	
	Referrals are used to create a pointer on one server that refers a client
	program to information stored on other server. For example, when a user issues a
	data base query, the client program retrieves the results from the connected
	server, and then retrieves any appropriate data from the referred server.
	
	To set up a referral:
	
	1. Using Compass, click The Known Universe.
	
	2. Select the directory entry for your context prefix.
	
	3. Right-click the entry and then click Insert.
	
	4. In the "Relative name" box, type the name of the primary organizational unit
	  (OU) of the other MMS servers.
	
	5. Click the appropriate OU.
	
	6. Click Insert, click OK, and then click Cancel
	
	7. Click > to close the "Insert object" dialog box.
	
	8. Click the newly created entry.
	
	9. In the action panel, click Action, and then click Administration.
	
	10. On the Entry Administration dialog box, click the References tab.
	
	11. In the "Referral LDAP and HTTP Server URLs" box, type the Domain Name
	  Service (DNS) name and Lightweight Directory Access Protocol (LDAP) port
	  number of your secondary directory server.
	
	12. Under Chasing Referrals, click "Always chase", and then click OK.
	
	NOTE: The default setting for chasing referrals is to not chase referrals.
	Changing this setting may cause increased network traffic. It is important to
	make sure that using a referral is appropriate for your server situation,
	because there can be network performance and other related issues when you are
	using referrals. The primary concern to administrators is that using referrals
	requires user programs to make network connections to two or more servers, and
	the resulting network traffic can have a negative impact on overall network
	performance. An alternative to setting up a referral is to set up a replication
	agreement. For additional information about setting up a replication agreement,
	click the article number below to view the article in the Microsoft Knowledge
	Base:
	
	  Q250482 Setting up a Replication agreement between two MMS servers
	
	Additional query words:
	
	======================================================================
	Keywords          : kbnetwork kbtool 
	Technology        : kbMMSSearch kbMMS210
	Version           : :2.1
	Issue type        : kbinfo
	
	=============================================================================
	
