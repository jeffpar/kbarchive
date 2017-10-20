---
layout: page
title: "Q138862: SNA Server 3270 Emulator Session Drops With Event ID 21"
permalink: /kb/138/Q138862/
---

## Q138862: SNA Server 3270 Emulator Session Drops With Event ID 21

{% raw %}

	Article: Q138862
	Product(s): Microsoft SNA Server
	Version(s): WINDOWS:2.0,2.1,2.11
	Operating System(s): 
	Keyword(s): 
	Last Modified: 13-JUN-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft SNA Server, versions 2.0, 2.1, 2.11, on platform(s):
	   - the operating system: Microsoft Windows NT 
	-------------------------------------------------------------------------------
	
	
	SYMPTOMS
	========
	
	When you use the SNA Server 3270 emulator connected to a host application, the
	3270 emulator session may reset and Event 21 appears in the application event
	log in Event Viewer. This is explained as:
	
	  (1123) Negative Response Sent on Connection <value> (SENSE=081B0000).
	
	NOTE: The 081B0000 sense code explains: "Receiver in transmit mode: A race
	condition exists: a normal-fow request was received while the half-duplex
	contention state was not receive, or while resources (such as buffers) necessary
	for handling normal-flow data were unavailable."
	
	CAUSE
	=====
	
	When the 3270 emulator receives an SNA Status Control (BID) request from the
	host after you start typing, the 3270 applet accepts the BID. However, the 3270
	emulator may later reject the data from the host in the following RU with the
	Begin Bracket Indicator (BBI) flag set. This causes the host to drop the
	session.
	
	RESOLUTION
	==========
	
	To correct this problem, apply the fix mentioned below.
	
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in SNA Server for Windows NT. This
	problem was corrected in the latest SNA Server for Windows NT, 2.11 U.S. Service
	Pack. For information on obtaining the Service Pack, query on the following word
	in the Microsoft Knowledge Base (without the spaces):
	
	  S E R V P A C K
	
	Additional query words: prodsna 2.00 2.10 2.11 win3270
	
	======================================================================
	Keywords          :  
	Technology        : kbAudDeveloper kbSNAServSearch
	Version           : WINDOWS:2.0,2.1,2.11
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	

{% endraw %}
