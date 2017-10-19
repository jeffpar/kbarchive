---
layout: page
title: "Q246685: Err Msg: Limit Reached on Number of Objects of this Type"
permalink: /kb/246/Q246685/
---

## Q246685: Err Msg: Limit Reached on Number of Objects of this Type

	Article: Q246685
	Product(s): Microsoft SNA Server
	Version(s): 3.0 (all SP),4.0,4.0 SP1,4.0 SP2,4.0 SP3
	Operating System(s): 
	Keyword(s): kbDSupport kbsna300sp1 kbsna300sp2 kbsna300sp3 kbsna300sp4 sna4 kbsna400sp1 kbsna400sp2
	Last Modified: 13-JUN-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft SNA Server, versions 3.0 SP1, 3.0 SP2, 3.0 SP3, 3.0 SP4, 4.0, 4.0 SP1, 4.0 SP2, 4.0 SP3 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When adding additional objects (LUs, pools, and so forth) in SNA Manager, and
	the limit to the number of that type of object has been reached, the user will
	receive the following error:
	
	  Limit Reached on Number of Objects of This Type
	
	For example, if a user tries to assign more than 4,000 LUs to a particular user
	or group, he or she will get this error.
	
	CAUSE
	=====
	
	There are limits, set by design, to the number of objects that can be added to
	SNA Manager, depending on the type of object.
	
	MORE INFORMATION
	================
	
	The maximum values for various SNA Server objects are listed below.
	
	Note: A node is one instance of the SNA Server service.
	
	  Maximum number of nodes = 254
	  Maximum number of nodes per server = 4
	  Maximum number of 3270 pools = 10,000
	  Maximum number of LUA pools = 10,000
	  Maximum number of downstream LU pools = 10,000
	  Maximum number of CPIC symbolic destination names = 481
	  Maximum number of links (adapters) = 1,024
	
	  Maximum number of users an LU can be assigned to = 10,000
	  Maximum number of users a pool can be assigned to = 10,000
	  Maximum number of APPC LUs configured per node = 3,000
	  Maximum number of connections configured per node = 250
	  Maximum number of LUs configured per node = 15,000
	  Maximum number of LUs assigned to a user/group = 4,000
	  Maximum number of dependent LUs configured for a connection = 255
	  Maximum number of LUs configured for a pass-through connection = 255
	
	  Maximum number of LUs assigned to a pool = 30,000
	  Maximum number of connections per adapter = 250
	  Maximum number of modes per LU = 64
	  Maximum number of partners per LU = 250
	  Maximum number of LUs per mode = 10,000
	  Maximum number of remote LUs configured for a connection = 10,000
	  Maximum number of nodes per pool = 64
	  Maximum number of link services per server = 64
	
	SNA Server supports up to 65,536 configuration objects in one subdomain. For
	additional information, click the article numbers below to view the articles in
	the Microsoft Knowledge Base:
	
	  Q228924 SNA OLE: The Number of Objects Has Reached the Object Limit
	
	  Q225261 Error Line Number Returned by Snacfg.exe May Be Incorrect, Other
	  Enhancements
	
	For additional information regarding the maximum number of connections per
	adapter using the 802.2 link service, click the article number below to view the
	article in the Microsoft Knowledge Base:
	
	  Q107192 Multiple Connections to the Same Host Over 802.2
	
	Additional query words:
	
	======================================================================
	Keywords          : kbDSupport kbsna300sp1 kbsna300sp2 kbsna300sp3 kbsna300sp4 sna4 kbsna400sp1 kbsna400sp2 kbsna400sp3 
	Technology        : kbAudDeveloper kbSNAServSearch kbSNAServ400 kbSNAServ300SP3 kbSNAServ300SP1 kbSNAServ400SP1 kbSNAServ400SP2 kbSNAServ400SP3 kbSNAServ300SP2 kbSNAServ300SP4
	Version           : :3.0 (all SP),4.0,4.0 SP1,4.0 SP2,4.0 SP3
	Issue type        : kbprb
	
	=============================================================================
	
