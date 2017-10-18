---
layout: page
title: "Q148196: IBM LANStreamer PCI Token Ring Adapter Identified as Ethernet"
permalink: kb/148/Q148196/
---

## Q148196: IBM LANStreamer PCI Token Ring Adapter Identified as Ethernet

	Article: Q148196
	Product(s): Microsoft SNA Server
	Version(s): WINDOWS:2.0,2.1,2.11,2.11 SP1
	Operating System(s): 
	Keyword(s): 
	Last Modified: 13-JUN-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft SNA Server, versions 2.0, 2.1, 2.11, 2.11 SP1, on platform(s):
	   - the operating system: Microsoft Windows NT 
	-------------------------------------------------------------------------------
	
	
	SYMPTOMS
	========
	
	After you install and configure an SNA Server 802.2 DLC link service using an
	IBM LANStreamer PCI Token Ring adapter, the 802.2 connection appears as Ethernet
	in the SNA Server Admin program. However, the LANStreamer adapter functions
	properly in the token ring network.
	
	CAUSE
	=====
	
	This problem occurs if the MediaType registry entry for the IBM LANStreamer PCI
	Token Ring adapter is set to 1 (Ethernet) during the installation of the SNA
	Server 802.2 DLC link service. This value is used by SNA Server Setup and is
	passed to the SNA Admin program.
	
	RESOLUTION
	==========
	
	To work around this problem, please see the following article in the Microsoft
	Knowledge Base:
	
	  Q140149 SNA 802.2 Connection Icon Indicates Incorrect Network Type
	
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in Windows NT version 3.51. We are
	researching this problem and will post new information here in the Microsoft
	Knowledge Base as it becomes available.
	
	Additional query words: prodsna 2.00 2.10 2.11 3.50 3.51
	
	======================================================================
	Keywords          :  
	Technology        : kbAudDeveloper kbSNAServSearch
	Version           : WINDOWS:2.0,2.1,2.11,2.11 SP1
	Issue type        : kbbug
	Solution Type     : kbpending
	
	=============================================================================
	
