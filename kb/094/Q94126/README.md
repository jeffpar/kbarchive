---
layout: page
title: "Q94126: Using Etherlink II TP Network Card with Synoptics Hubs"
permalink: /kb/094/Q94126/
---

## Q94126: Using Etherlink II TP Network Card with Synoptics Hubs

{% raw %}

	Article: Q94126
	Product(s): Microsoft LAN Manager
	Version(s): 
	Operating System(s): 
	Keyword(s): 
	Last Modified: 30-JUL-2001
	
	SUMMARY
	=======
	
	When using Synoptics Hubs with 10-Base-T network cards such as the Etherlink II
	TP, the switch settings on the card need to be modified from their factory
	default settings to enable the card to work properly.
	
	MORE INFORMATION
	================
	
	Synoptics Hubs such as LattisNet models 3030 and 3305, the 2500 family of
	Workgroup Concentrators (models 2500, 2510, and 2530) date back to the pre-
	10-Base-T standard days. However, they are found in many Ethernet installations
	and thus need to be integrated into a 10-Base-T LAN.
	
	If you are using one of these hubs with an Etherlink II TP card, modify the
	following jumpers from their factory defaults to the setting indicated:
	
	                  Jumper    Factory      Synoptics
	Jumper            area      setting      setting
	---------------------------------------------------
	
	DC SIG           J4         OFF          ON
	
	LINK BEAT        J1         ON           OFF
	
	RX TH            J2         NORM         LOW
	
	XMIT             J3         NORM         LOW
	
	This will enable the TP card to transmit successfully using the Synoptics Hubs.
	
	Reference(s):
	
	"3COM Etherlink II TP Adapter Guide"
	
	Additional query words: 2.10 Synoptics Hubs link Guide
	
	======================================================================
	Keywords          :  
	
	=============================================================================
	

{% endraw %}
