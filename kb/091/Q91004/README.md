---
layout: page
title: "Q91004: Cannot Install More than One Network Adapter of Same Type"
permalink: /kb/091/Q91004/
---

## Q91004: Cannot Install More than One Network Adapter of Same Type

	Article: Q91004
	Product(s): Microsoft Windows 3.x Retail Product
	Version(s): WINDOWS:3.1
	Operating System(s): 
	Keyword(s): 
	Last Modified: 02-OCT-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows for Workgroups version 3.1 
	-------------------------------------------------------------------------------
	
	Some network adapters do not allow you to use more than one per
	machine under Windows for Workgroups version 3.1. This is not due to
	any problems in the adapters, but to their driver names. The following
	adapters exhibit this behavior:
	
	- SMC ArcNET Cards (and compatibles) [SMC_ARC.DOS]
	
	- SMC 3000 Series Cards [SMC_ETH.DOS]
	
	- Proteon 1390 Series Cards [NDIS39XR.DOS]
	
	- Cabletron E2000 Series Cards [E20NDIS.DOS]
	
	- Cabletron E2100 Series Cards [E21NDIS.DOS]
	
	- Cabletron E3000 Series Cards [E30NDIS.DOS]
	
	- Cabletron E3100 Series Cards [E31NDIS.DOS]
	
	- Cabletron T2000 Series Cards [T20NDIS.DOS]
	
	- Cabletron T3000 Series Cards [T30NDIS.DOS]
	
	
	All network device drivers must have a unique, eight character name
	including a trailing dollar sign ($). If there are multiple adapters
	of the same type, each driver instance receives a numerical suffix.
	For example:
	
	  EE16$ - first adapter driver
	  EE162$ - second adapter driver
	
	When the driver name contains seven or more characters, the indexing
	process does not work, keeping you from configuring more than one
	network adapter.
	
	Additional query words: 3.10
	
	======================================================================
	Keywords          :  
	Technology        : kbAudDeveloper kbWFWSearch kbWFW310
	Version           : WINDOWS:3.1
	
	=============================================================================
	
