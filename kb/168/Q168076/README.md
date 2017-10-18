---
layout: page
title: "Q168076: WINS Fails to Converge"
permalink: kb/168/Q168076/
---

## Q168076: WINS Fails to Converge

	Article: Q168076
	Product(s): Microsoft Windows NT
	Version(s): winnt:3.51,4.0
	Operating System(s): 
	Keyword(s): kbnetwork kbWinNT400sp4fix
	Last Modified: 09-AUG-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Server versions 3.51, 4.0 
	- Microsoft Windows NT Server version 4.0, Terminal Server Edition 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	All domain controllers register their domain name with <1c> as the
	sixteenth character of the NetBIOS name. For each domain, a domain
	name<1C> record will exist on a Windows Internet Name Service (WINS)
	server that contains a list of IP addresses of all the domain controllers in
	that domain.
	
	When several domain controllers register the <1C> name with different WINS
	servers, a replication problem prevents the replication partners from having an
	entire list of IP addresses for this record. This may result in client logon
	problems or uneven load on the domain controllers.
	
	NOTE: This problem happens only when different domain controllers, belonging to
	the same domain, register with different WINS servers, and the replication model
	is NOT a hub and spoke model.
	
	CAUSE
	=====
	
	By design, WINS cannot increment the version ID of a replica record (record
	owned by another WINS server). Only the owner of the record is allowed to
	increment the version ID of the record. A stalemate situation can occur where an
	updated replica <1C> record may not be replicated because of the above
	design rules.
	
	MORE INFORMATION
	================
	
	Consider the following scenario:
	
	  WINS1 <--> WINS2 <--> WINS3 <--> WINS4
	
	  Primary Domain Controller (PDC) 1 - x.x.x.221
	  Backup Domain Controller (BDC) 1 - x.x.y.60
	
	1. PDC registers with WINS1;
	
	  WINS1 now has:
	  domain<1c> version id 505,
	  contains ip x.x.x.221,
	  owner is wins1.
	
	2. BDC registers with WINS4
	
	  WINS4 now has:
	  domain<1c> version id 254
	  contains ip x.x.y.60
	  owner is WINS4
	
	3. WINS1 <--replicates with--->WINS2
	
	  both WINS1 and WINS2 now have:
	  domain<1c> version id 505
	  contains ip x.x.x.221
	  owner is WINS1
	
	4. WINS2 <--replicates with --> WINS3
	
	  WINS1 WINS2 and WINS3 now have:
	  domain<1c> version id 505
	  contains ip x.x.x.221
	  owner is WINS1
	
	5. WINS3 <-replicates-> WINS4
	
	  WINS4 now has :
	  domain<1c> newer version id 255 (or more)
	  contains: ip x.x.x.221;ip x.x.y.60;
	  owner WINS4
	
	  WINS3 now has:
	  domain<1c> SAME version id 505
	  contains: ip x.x.x.221;ip x.x.y.60;
	  owner WINS1
	
	NOTE: Version number is not incremented for this record because this is a replica
	record and is owned by WINS1.
	
	6. WINS2<--replicates with-->WINS3
	
	  domain<1c> record on WINS2 is not
	  updated containing only ip x.x.x.221
	
	RESOLUTION
	==========
	
	The resolution is to give ownership to the WINS Server that merges the
	<1c> record. In other words, a replication partner can take ownership for
	a 1C record, if it receives a replica 1C record from a second replication
	partner.
	
	In the above scenario the behavior will be:
	
	(Steps 1-4 are the same)
	
	5. WINS3 <-replicates-> WINS4
	
	  WINS4 now has :
	  domain<1c> version id 255 (wins4's highest id number)
	  contains: ip x.x.x.221;ip x.x.y.60;
	  owner WINS4
	
	  WINS3 now has:
	  domain<1c> version id 2000(wins3's highest number)
	  contains: ip x.x.x.221;ip x.x.y.60;
	  ****owner WINS3 <<<<<<NOTE
	
	6. WINS2<--replicates with-->WINS3
	
	  WINS2 now has:
	  domain<1c> version id 442<<wins2's highest number>
	  contains ip x.x.x.221;ip x.x.y.60;
	  ***owner WINS2 <<<<<<NOTE
	
	7. WINS1<--replicates with-->WIN2
	
	  WINS1 now has:
	  domain<1c> version id 506 <WINS1's highest number at that time>
	  contains ip x.x.x.221;ip x.x.y.60;
	  owner WINS1
	
	To resolve this problem, obtain the latest service pack for Windows NT 4.0 or
	Windows NT Server 4.0, Terminal Server Edition. For additional information,
	please see the following article in the Microsoft Knowledge Base:
	
	  Q152734 How to Obtain the Latest Windows NT 4.0 Service Pack
	
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in Windows NT 4.0 and Windows NT
	Server 4.0, Terminal Server Edition. This problem was first corrected in Windows
	NT 4.0 Service Pack 4.0 and Windows NT Server 4.0, Terminal Server Edition
	Service Pack 4.
	
	
	Microsoft has confirmed this to be a problem in Windows NT version 3.51. A
	supported fix is now available, but has not been fully regression-tested and
	should be applied only to systems experiencing this specific problem. Unless you
	are severely impacted by this specific problem, Microsoft recommends that you
	wait for the next Service Pack that contains this fix. Contact Microsoft
	Technical Support for more information.
	
	
	Additional query words: prodnt fails 1bh groupname
	
	======================================================================
	Keywords          : kbnetwork kbWinNT400sp4fix 
	Technology        : kbWinNTsearch kbWinNT351search kbWinNT400search kbWinNTSsearch kbWinNTS400search kbWinNTS400 kbWinNTS351 kbNTTermServ400 kbNTTermServSearch kbWinNTS351search
	Version           : winnt:3.51,4.0
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	
