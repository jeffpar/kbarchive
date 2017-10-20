---
layout: page
title: "Q58545: Mac DOS: Phase 2 Drivers Required for LocalTalk PC Card"
permalink: /kb/058/Q58545/
---

## Q58545: Mac DOS: Phase 2 Drivers Required for LocalTalk PC Card

{% raw %}

	Article: Q58545
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
	
	To run Microsoft Mail (PC Client) version 2.0 or 3.0 on a computer using the
	LocalTalk PC Card from Apple Computer, Inc., and AppleTalk Phase 2 drivers
	provided with AppleShare PC version 2.00, you must load the following modules
	into memory:
	
	
	Module                         Description
	------                         -----------
	
	LSL.COM                        Link support layer driver
	
	ATALK.COM                      AppleTalk protocol stack
	
	LTALK.COM or LTALKP.COM        Link interface driver for LocalTalk PC
	                              card
	
	PAP_WS.COM                     Printer access protocol for workstation
	
	COMPAT.COM                     Provides compatibility for AppleShare
	                              versions 1.x applications
	
	Whether or not the LTALK.COM or LTALKP.COM module should be loaded depends on the
	driver type selected from the AppleShare PC Install program (polled driver or
	interrupt driven driver). The total amount of memory (RAM) that will be used by
	these modules is 61K.
	
	Additional query words: 2.00 3.00
	
	======================================================================
	Keywords          :  
	Technology        : kbZNotKeyword2 kbMailSearch kbZNotKeyword3 kbMailATN200DOS kbMailATN300DOS
	Version           : :2.0,3.0
	
	=============================================================================
	

{% endraw %}
