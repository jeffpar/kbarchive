---
layout: page
title: "Q129659: Wrong Port for PCMCIA Modem Shown in Modem Properties"
permalink: /kb/129/Q129659/
---

## Q129659: Wrong Port for PCMCIA Modem Shown in Modem Properties

{% raw %}

	Article: Q129659
	Product(s): Microsoft Windows 95.x Retail Product
	Version(s): 95
	Operating System(s): 
	Keyword(s): win95
	Last Modified: 17-DEC-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows 95 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	The properties for the PCMCIA modem in your computer show the wrong port name.
	However, the modem functions correctly.
	
	CAUSE
	=====
	
	There is a table that maps ports to "port friendly names." If two PCMCIA devices
	each have a "PortName=COMx" setting in the registry, the friendly name for the
	original device is used for both devices.
	
	For example, if you install a GPS PCMCIA card, then remove the card and install a
	PCMCIA modem, the Port field for the modem displays the friendly name for the
	GPS card.
	
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in Microsoft Windows 95. We are
	researching this problem and will post new information here in the Microsoft
	Knowledge Base as it becomes available.
	
	
	======================================================================
	Keywords          : win95 
	Technology        : kbWin95search kbZNotKeyword3
	Version           : 95
	
	=============================================================================
	

{% endraw %}
