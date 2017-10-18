---
layout: page
title: "Q110742: Faxes from Server Are Sent Before Faxes from Other Machines"
permalink: kb/110/Q110742/
---

## Q110742: Faxes from Server Are Sent Before Faxes from Other Machines

	Article: Q110742
	Product(s): Microsoft Windows 3.x Retail Product
	Version(s): WINDOWS:3.11
	Operating System(s): 
	Keyword(s): 
	Last Modified: 30-OCT-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows for Workgroups version 3.11 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	If several items that have been sent from other machines on the network are in
	the Microsoft At Work PC Fax queue, and a fax is sent from the server, the
	server blocks all faxes in the queue (regardless of priority) and sends the
	local fax job. The faxes in the queue are sent after the local job is finished.
	
	CAUSE
	=====
	
	The design of Microsoft At Work PC Fax does not balance the priority of faxes
	sent from other machines on the network with faxes sent from the fax server.
	Faxes sent from a fax server always have higher priority than faxes sent to the
	server from other machines on the network.
	
	Additional query words: 3.11 priority
	
	======================================================================
	Keywords          :  
	Technology        : kbAudDeveloper kbWFWSearch kbWFW311
	Version           : WINDOWS:3.11
	
	=============================================================================
	
