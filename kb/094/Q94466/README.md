---
layout: page
title: "Q94466: 3COM: Microsoft Mail Gateway to 3Com Shuts Down Randomly"
permalink: /kb/094/Q94466/
---

## Q94466: 3COM: Microsoft Mail Gateway to 3Com Shuts Down Randomly

{% raw %}

	Article: Q94466
	Product(s): Microsoft Mail For PC Networks
	Version(s): 1.0
	Operating System(s): 
	Keyword(s): 
	Last Modified: 08-NOV-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Mail Gateway to 3Com 3+Mail, version 1.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When using the Microsoft Mail for PC Networks Gateway to 3Com 3+Mail, version
	1.00, the gateway shuts off for no apparent reason after about 15 minutes or
	some other regular interval.
	
	Or when you install the gateway, the computer hangs (stops responding) when you
	are entering the three-part names of XNS-based servers such as the name of the
	3+Mail server.
	
	CAUSE
	=====
	
	The computer running the gateway may be timing out because of excess net traffic
	-- not necessarily mail traffic.
	
	RESOLUTION
	==========
	
	Try running the GATEWAY.EXE on a computer that can provide higher throughput on
	and off the network such as a 386/25 with a 16-bit network adapter card. Ensure
	that the computer has a significant on-card buffer RAM such as the 3Com
	EtherLink 16 or 3Com EtherLink III NIC.
	
	Other options include finding a network segment with less traffic or scheduling
	to run the gateway under lighter network traffic by using the FIRETIME option in
	the GATEWAY.INI file.
	
	Additional query words: 1.00 gateway 3Com hang hung
	
	======================================================================
	Keywords          :  
	Technology        : kbMailSearch kbMailGateSearch kbZNotKeyword3 kbMailGate3COM3Plus100
	Version           : :1.0
	
	=============================================================================
	

{% endraw %}
