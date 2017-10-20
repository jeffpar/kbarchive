---
layout: page
title: "Q103951: OSI Model: Vertical Interface Terminology"
permalink: /kb/103/Q103951/
---

## Q103951: OSI Model: Vertical Interface Terminology

{% raw %}

	Article: Q103951
	Product(s): Windows for Workgroups and Windows NT Networking Issues
	Version(s): 
	Operating System(s): 
	Keyword(s): 
	Last Modified: 30-JUL-2001
	
	VERTICAL INTERFACE TERMINOLOGY
	
	The active elements in each network layer are called entities, and are
	typically implemented by means of a software process. Entities in the
	corresponding layers on different machines are called peer entities.
	
	The layer N-1 entities implement the services used by layer N. These
	services are exposed by means of "well-known" service access points
	(SAPs). A SAP is actually just a mechanism, such as an API, MS-DOS
	interrupt, or a direct entry point address, by which the layer above
	can programmatically access a particular function (service)
	implemented by the layer below.
	
	For data transfer services, OSI defines a standard set of rules that
	govern the interface between layers:
	
	- The layer N entity passes an interface data unit (IDU) to the layer N-1
	  entity by means of the appropriate service access point (SAP).
	
	  1. The IDU consists of a protocol data unit (PDU) and some interface control
	     information (ICI).
	
	  2. The PDU is the data that the layer N entity wishes to pass across the
	     network to its peer entity, it consists of the layer N header and the data
	     that layer N received from the layer above (N+1).
	
	  3. The layer N PDU becomes the layer N-1 service data unit (SDU)--the data
	     unit that will be "serviced by" layer N-1.
	
	  4. The ICI is control information, such as the length of the SDU, that the
	     layer below needs to do its job.
	
	- When layer N-1 receives the layer N IDU, it "strips off" and "considers" the
	  ICI, adds its header information (for its peer entity across the network),
	  adds ICI for the layer below, and passes the resulting IDU to the layer N-2
	  entity by means of the appropriate SAP.
	
	Additional query words:
	
	======================================================================
	Keywords          :  
	
	=============================================================================
	

{% endraw %}
