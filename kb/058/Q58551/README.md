---
layout: page
title: "Q58551: Mac DOS: Running Mail with the 3Com EtherLink II Card"
permalink: /kb/058/Q58551/
---

## Q58551: Mac DOS: Running Mail with the 3Com EtherLink II Card

{% raw %}

	Article: Q58551
	Product(s): Microsoft Mail For Appletalk Networks
	Version(s): 2.0,3.0
	Operating System(s): 
	Keyword(s): 
	Last Modified: 09-NOV-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Mail for AppleTalk Networks, MS-DOS workstation, versions 2.0, 3.0 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	To run Microsoft Mail version 2.0 or 3.0 (PC Client) on a computer that has a
	3Com EtherLink II Card and AppleShare PC version 2.00 software, you must load
	the following software modules:
	
	Module                          Description
	------                         -----------
	
	LSL.COM                        Link support layer driver
	
	ENET3CII.COM                   Link interface driver for 3Com
	                              EtherLink II card
	
	AARP.COM                       Apple address resolution protocol
	
	ATALK.COM                      AppleTalk protocol stack
	
	PAP_WS.COM                     Printer access protocol for workstation
	
	COMPAT.COM                     Provides compatibility for AppleShare
	                              versions 1.x applications
	
	The total amount of memory (RAM) used by these modules is 68K.
	
	Additional query words: 2.00 3.00
	
	======================================================================
	Keywords          :  
	Technology        : kbZNotKeyword2 kbMailSearch kbZNotKeyword3 kbMailATN200DOS kbMailATN300DOS
	Version           : :2.0,3.0
	
	=============================================================================
	

{% endraw %}
