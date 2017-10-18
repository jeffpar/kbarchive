---
layout: page
title: "Q99482: Use Status Requests to Identify Workstation Adapter"
permalink: kb/099/Q99482/
---

## Q99482: Use Status Requests to Identify Workstation Adapter

	Article: Q99482
	Product(s): Microsoft LAN Manager
	Version(s): 
	Operating System(s): 
	Keyword(s): 
	Last Modified: 30-JUL-2001
	
	SUMMARY
	=======
	
	To get the identification numbers for adapters in a workstation, start at LANA 0
	and submit adapter status requests until you receive a 0x23 (invalid number in
	NcbLanaNum). This should generate a complete list.
	
	Additional query words: 2.00 2.0 2.10 2.1 2.10a 2.1a 2.20 2.2
	
	======================================================================
	Keywords          :  
	
	=============================================================================
	
