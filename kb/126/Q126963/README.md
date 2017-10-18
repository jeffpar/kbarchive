---
layout: page
title: "Q126963: Error 5123: The Computer Name You Specified Is Already in Use"
permalink: kb/126/Q126963/
---

## Q126963: Error 5123: The Computer Name You Specified Is Already in Use

	Article: Q126963
	Product(s): Microsoft Windows 3.x Retail Product
	Version(s): WINDOWS:3.11
	Operating System(s): 
	Keyword(s): 
	Last Modified: 25-SEP-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows for Workgroups version 3.11 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you start Microsoft Windows for Workgroups, you receive the following error
	message:
	
	  The following error occurred while loading protocol number 0
	
	  Error 5123: The computer name you specified is already in use on the network.
	  Choose the Network Icon in Control Panel to specify a different name. For
	  more information choose the Help button.
	
	CAUSE
	=====
	
	This error can occur if you have multiple network cards in your computer running
	on a single network segment and you are using the NetBEUI network protocol. The
	NetBEUI protocol tries to register the same computer name on the network once
	for each network card in the computer. When NetBEUI tries to register the second
	card on the network with the same computer name as the first card, the error
	occurs.
	
	RESOLUTION
	==========
	
	Use Network Setup to remove the NetBEUI protocol from all but one of the network
	cards in your computer.
	
	MORE INFORMATION
	================
	
	
	Additional query words: 3.11
	
	======================================================================
	Keywords          :  
	Technology        : kbAudDeveloper kbWFWSearch kbWFW311
	Version           : WINDOWS:3.11
	
	=============================================================================
	
