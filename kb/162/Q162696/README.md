---
layout: page
title: "Q162696: PowerPC WINS Server Shows the Domain"
permalink: kb/162/Q162696/
---

## Q162696: PowerPC WINS Server Shows the Domain

	Article: Q162696
	Product(s): Microsoft Windows NT
	Version(s): winnt:3.51,4.0
	Operating System(s): 
	Keyword(s): kbnetwork
	Last Modified: 09-AUG-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Server versions 3.51, 4.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	A network client is unable to browse computers that reside on the primary domain
	controller's (PDC's) own segment by means of File Manager or Network
	Neighborhood. All other segments are visible and can be browsed. However, the
	client is able to connect to any computer on the PDCs segment, as long as the
	server name is known.
	
	CAUSE
	=====
	
	The PDC for the domain is also running Windows Internet Name Service (WINS), and
	that server is on the PowerPC, MIPS, or Alpha platforms. If nbtstat -n is run
	from the PDC, it will show that the domainname<1D> is in conflict. This
	happens when a segment master browser for the domain (on a different segment
	than the PDC) releases its names during a shutdown. When that computer releases
	the domainname<1D>, the WINS server/PDC logs a duplicate name error, and
	shows its own <1D> entry to be in conflict. If the domainname<1D>
	name is not registered in the WINS database, the WINS server will always discard
	that entry. But, it is necessary for the name to be registered by means of NetBT
	(the NetBIOS interface on TCP/IP), as that is the name that the server listens
	to and mailslot browser broadcasts on.
	
	For additional information, please see the following articles in the Microsoft
	Knowledge Base:
	
	  ARTICLE-ID: Q119493
	  TITLE : NetBIOS over TCP/IP Name Resolution and WINS
	
	
	  ARTICLE-ID: Q119495
	  TITLE : List of Names Registered with WINS Service
	
	  ARTICLE-ID: Q120151
	  TITLE : Browsing a Wide Area Network with WINS
	
	RESOLUTION
	==========
	
	To resolve this issue, perform one of the following:
	
	- Move the WINS service off of the PDC to another server.
	
	  -or-
	
	- Run your PDC/WINS server on a different platform, for example, Intel.
	
	  -or-
	
	- For Windows NT 4.0, obtain the latest service pack, but for Windows NT 3.51
	  obtain the hotfix mentioned below.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in Windows NT versions 3.51 and
	4.0. This problem was corrected in the latest Microsoft Windows NT 4.0 U.S.
	Service Pack. For information on obtaining the service pack, query on the
	following word in the Microsoft Knowledge Base (without the spaces):
	
	  S E R V P A C K
	
	
	
	Additional query words:
	
	======================================================================
	Keywords          : kbnetwork 
	Technology        : kbWinNTsearch kbWinNT351search kbWinNT400search kbWinNTSsearch kbWinNTS400search kbWinNTS400 kbWinNTS351 kbWinNTS351search
	Version           : winnt:3.51,4.0
	
	=============================================================================
	
