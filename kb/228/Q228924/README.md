---
layout: page
title: "Q228924: SNA OLE: The Number of Objects Has Reached the Object Limit"
permalink: kb/228/Q228924/
---

## Q228924: SNA OLE: The Number of Objects Has Reached the Object Limit

	Article: Q228924
	Product(s): Microsoft SNA Server
	Version(s): WINDOWS:3.0,3.0SP1,3.0SP2,3.0SP3,4.0,4.0SP1,4.0SP2
	Operating System(s): 
	Keyword(s): kbfaq
	Last Modified: 22-OCT-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft SNA Server, versions 3.0, 3.0SP1, 3.0SP2, 3.0SP3, 4.0, 4.0SP1, 4.0SP2 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you attempt to insert a resource object within SNA Manager (an LU, user, or
	IP address, for instance), you get the following error message:
	
	  SNA OLE the number of objects has reached their limit.
	
	SNA Server Manager abruptly closes, and a Dr. Watson in Snaexp.exe may occur
	closing SNA Server Manager.
	
	CAUSE
	=====
	
	The reason for these errors is that SNA Server's Com.cfg file has reached the
	object limit of 65,535 objects. No more objects can be inserted until the
	existing number of objects has been decreased. This is an architectural limit
	that cannot be subverted. The following information is from the SNA Server 4.0
	Service Pack 1 Readme:
	
	  This release of SNA Server supports a maximum of 65,536 configuration objects
	  in one SNA Server subdomain. Configuration objects represent configurable
	  components of SNA Server, such as link services, connections, or logical
	  units. If you attempt to go over the limit, SNA Server warns you with a
	  beep.
	
	  If you need to define more than 65,536 objects, it is recommended that you
	  create an additional SNA Server subdomain or delete any unnecessary
	  configuration information.
	
	RESOLUTION
	==========
	
	Another SNA Server in a new subdomain must be created to offload the number of
	objects. The 65,535 limit is for the subdomain (Com.cfg), and adding one more
	SNA Server within the existing subdomain will not be possible.
	
	Additional query words:
	
	======================================================================
	Keywords          :  kbfaq
	Component         : Admin
	Technology        : kbAudDeveloper kbSNAServSearch kbSNAServ300 kbSNAServ400
	Version           : WINDOWS:3.0,3.0SP1,3.0SP2,3.0SP3,4.0,4.0SP1,4.0SP2
	Issue type        : kbinfo
	
	=============================================================================
	
