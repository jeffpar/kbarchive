---
layout: page
title: "Q80996: AHA-154x BID Doesn't Support I/O Addresses of 134/130"
permalink: /kb/080/Q80996/
---

## Q80996: AHA-154x BID Doesn't Support I/O Addresses of 134/130

	Article: Q80996
	Product(s): Microsoft LAN Manager
	Version(s): 
	Operating System(s): 
	Keyword(s): 
	Last Modified: 30-JUL-2001
	
	SUMMARY
	=======
	
	The Adaptec 1540B/1542B BID that shipped with OS/2 version 1.3 for servers does
	not support I/O addresses of 134/130. Instead, supported addresses are 334/330
	and 234/230. If an address of 134/130 is used, the installation disk will be
	unable to recognize the existence of the controller, and therefore, will not
	install OS/2 on the machine.
	
	MORE INFORMATION
	================
	
	Because these I/O addresses are not supported, the jumper block labeled J7 on
	the controller must not have pin 4 jumpered (I/O address of 134) or pins 2 and 4
	jumpered (I/O address 130).
	
	The following is the jumper block and a table of possible address selections:
	
	       1 oo
	       2 oo  ]
	       3 oo  ]  I/O Address selection jumpers
	       4 oo  ]
	       5 oo
	       6 oo
	       7 oo
	       8 oo
	         J7
	
	       Address                 Pins to Jumper
	       -------                 --------------
	
	         334                        none
	         330                         2
	         234                         3
	         230                         2,3
	         134*                        4
	         130*                        2,4
	
	  * - Unsupported under current AHA-154x BID
	
	The above information is subject to change without notification. For the latest
	information on the AHA-154x BID, contact Adaptec.
	
	Additional query words: 2.10 2.10a 2.20
	
	======================================================================
	Keywords          :  
	
	=============================================================================
	
