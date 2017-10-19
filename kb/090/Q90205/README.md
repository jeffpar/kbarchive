---
layout: page
title: "Q90205: WFWG with NetBEUI Runs Slowly on Large Networks"
permalink: /kb/090/Q90205/
---

## Q90205: WFWG with NetBEUI Runs Slowly on Large Networks

	Article: Q90205
	Product(s): Microsoft Windows 3.x Retail Product
	Version(s): WINDOWS:3.1; :1.0
	Operating System(s): 
	Keyword(s): 
	Last Modified: 01-OCT-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows for Workgroups version 3.1 
	- Microsoft Workgroup Connections, version 1.0 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	You may notice that Windows for Workgroups or Workgroup Connections operates
	slowly for no apparent reason when connected to a large network even if you do
	not have any network sessions running. This is due to the amount of network
	traffic on a large network and the protocol NetBEUI.
	
	MORE INFORMATION
	================
	
	Under NetBEUI, if one computer wants to communicate with another, it transmits a
	broadcast packet to determine where the other computer is. Each computer on the
	network must examine this packet. On a large network, this equates to almost
	constant packet examination by all members of the network.
	
	There is no solution to this inconvenience. Disabling the network adapter
	connection stops the speed degradation, but does not allow you to access the
	network.
	
	Additional query words: 3.10 1.00 wc
	
	======================================================================
	Keywords          :  
	Technology        : kbAudDeveloper kbWFWSearch kbWFW310
	Version           : WINDOWS:3.1; :1.0
	
	=============================================================================
	
