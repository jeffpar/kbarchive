---
layout: page
title: "Q80861: Tandy Ethernet Adapters from Western Digital"
permalink: /kb/080/Q80861/
---

## Q80861: Tandy Ethernet Adapters from Western Digital

{% raw %}

	Article: Q80861
	Product(s): Microsoft LAN Manager
	Version(s): 
	Operating System(s): 
	Keyword(s): 
	Last Modified: 30-JUL-2001
	
	SUMMARY
	=======
	
	Tandy Corporation offers the following three Ethernet adapters:
	
	  Tandy Ethernet Plus
	  Tandy Ethernet Plus 16
	  Tandy Ethernet Plus 16 TP
	
	These adapters are actually manufactured by Western Digital Corporation and
	correspond to the following cards:
	
	  WD EtherCard Plus WD8003E
	  WD EtherCard Plus 16 WD8013E
	  WD EtherCard Plus 16 WD8013E TP
	
	The MACWD driver included with LAN Manager should work correctly with these Tandy
	cards. Choose Western Digital's Ethercard+WD8003E as your network adapter in LAN
	Manager Setup. Non-default settings for interrupt and I/O base address must be
	made to the PROTOCOL.INI file (as you would make for the Western Digital
	cards).
	
	Note: The WD EtherCard Plus 16 and the WD EtherCard Plus 16 TP are not currently
	certified network cards for LAN Manager; therefore, the Tandy Ethernet Plus 16
	and the Tandy Ethernet Plus 16 TP cannot be considered certified. If the 16-bit
	Western Digital cards become certified in the future, the same drivers should
	work correctly with the corresponding Tandy 16-bit cards.
	
	Additional query words: 2.0 2.00 2.1 2.10 Radio Shack
	
	======================================================================
	Keywords          :  
	
	=============================================================================
	

{% endraw %}
