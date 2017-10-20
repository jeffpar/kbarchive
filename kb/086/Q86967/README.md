---
layout: page
title: "Q86967: X400: Setting Up a Redirector MTA"
permalink: /kb/086/Q86967/
---

## Q86967: X400: Setting Up a Redirector MTA

{% raw %}

	Article: Q86967
	Product(s): Microsoft Mail For PC Networks
	Version(s): MS-DOS:3.0
	Operating System(s): 
	Keyword(s): 
	Last Modified: 05-NOV-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Mail Gateway to X.400, version 3.0 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	This article describes how to set up a redirector message transfer agent (MTA).
	
	Redirector Software
	-------------------
	
	The redirector software allows for multiple MTAs to be placed on one local-area
	network (LAN). All MTAs then send to one Eicon Card for transportation to the
	X.25 network. Transportation across the LAN is provided by NET BIOS.
	
	When a PC is not equipped with an Eicon X.25 card, but is connected to the same
	LAN as the server that does contain the X.25 Eicon card, it can be designated as
	a redirector PC. A redirector workstation can then use the Eicon card of a
	specified server to emulate a gateway.
	
	The necessary component for the operation of the redirector PC is a LAN adapter
	card and the redirector LAN software. They do not require the Eicon card on the
	workstation.
	
	Note: The redirector software and subsequent NET BIOS transportation do not
	affect the LAN operation and designation of the redirector workstation.
	
	The Microsoft Mail Gateway to X.400 can then be installed on the redirector
	workstation to act as another X.400 MTA. The requirements above must still apply
	for the configuration. Also, the setup of the X.400 gateway must still have a
	dedicated gateway postoffice to connect to.
	
	
	Additional query words: pcmail
	
	======================================================================
	Keywords          :  
	Technology        : kbMailSearch kbMailGateSearch kbZNotKeyword3 kbMailGatex400300
	Version           : MS-DOS:3.0
	
	=============================================================================
	

{% endraw %}
