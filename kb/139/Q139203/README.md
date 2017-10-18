---
layout: page
title: "Q139203: X400: Errors with Invalid X.400 Address Attributes"
permalink: kb/139/Q139203/
---

## Q139203: X400: Errors with Invalid X.400 Address Attributes

	Article: Q139203
	Product(s): Microsoft Mail For PC Networks
	Version(s): MS-DOS:3.2
	Operating System(s): 
	Keyword(s): 
	Last Modified: 08-NOV-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Mail Gateway to X.400, version 3.2 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	The Mail Gateway to X.400 cannot process outbound messages with invalid X.400
	address attributes. As a result, it will produce the following error(s):
	
	  09:31:55 Extracting message from local message store: 00005726
	  09:31:55 DEBUG (converting PC mail message to X.400): Translating to X400
	  09:31:56 ERROR 3 (creating P1 recipient address): Malformed address:
	  type<16>/c=US/a=ATTMail/p=GOV/o=hq/ou=WP4/dt=WPMail/dv=USER.BOB
	  09:31:56 ERROR 3 (creating X.400 message envelope (P1)): No Recipients Found
	
	  09:31:56 ERROR 3 (converting PC mail message to X.400): Creating P1
	  09:31:56 ERROR 3 (converting PC mail message to X.400): local form to X400
	
	In the above example, dt= and dv= are invalid attributes for dda.type= and
	dda.value=.
	
	CAUSE
	=====
	
	Often addresses that have invalid attributes are placed in the X.400 gateway
	address list by importing an address list (text file) file from a foreign mail
	system.
	
	In the above example, Novell's Groupwise was the foreign mail system that
	provided the text file with dt= and dv= for dda.type= and dda.value=.
	
	RESOLUTION
	==========
	
	Use a text editor and search for invalid addresses attributes and replace them
	with the corrected attributes. Then remove the invalid addresses from the
	gateway X.400 address list and import the corrected text file.
	
	MORE INFORMATION
	================
	
	For more information on using Import to populate a gateway address list, please
	see Appendix A in the Microsoft Mail 3.x "Administrators Guide."
	
	The Novell Groupwise products included here are manufactured by a vendor
	independent of Microsoft; we make no warranty, implied or otherwise, regarding
	these products' performance or reliability.
	
	Additional query words: 3.20 3.x
	
	======================================================================
	Keywords          :  
	Technology        : kbMailSearch kbMailGateSearch kbZNotKeyword3 kbMailGatex400320
	Version           : MS-DOS:3.2
	
	=============================================================================
	
