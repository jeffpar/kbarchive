---
layout: page
title: "Q105524: MCI: Problems with International Carriers XPC Access to MCI"
permalink: /kb/105/Q105524/
---

## Q105524: MCI: Problems with International Carriers XPC Access to MCI

{% raw %}

	Article: Q105524
	Product(s): Microsoft Mail For PC Networks
	Version(s): 2.1b
	Operating System(s): 
	Keyword(s): 
	Last Modified: 05-NOV-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Mail Gateway to MCI, version 2.1b 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	The Microsoft Mail Gateway to MCI requires the TSR (terminate-and-stay-
	resident) serial driver XPC.EXE, which in turn requires this setup:
	
	- 8 data bits
	
	- none or space parity
	
	- 1 stop bit
	
	The communications capabilities offered by international carriers (such as Tymnet
	and Infonet) are often not compatible with the Microsoft Mail Gateway to MCI.
	Most international carriers use 7 data bits, even parity and 1 stop bit. The MCI
	Gateway requires 8 data bits, none or space parity and 1 stop bit. Other
	carriers try to use the MCI Gateway with the MNP protocol, but it is not
	supported by Microsoft.
	
	Additional query words: 2.10b 2.1b
	
	======================================================================
	Keywords          :  
	Technology        : kbMailSearch kbMailGateSearch kbZNotKeyword3 kbMailGateMCI210b
	Version           : :2.1b
	
	=============================================================================
	

{% endraw %}
