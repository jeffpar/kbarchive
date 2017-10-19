---
layout: page
title: "Q115444: X400: Admin Program Generates Error with TP4/CLNP Connection"
permalink: /kb/115/Q115444/
---

## Q115444: X400: Admin Program Generates Error with TP4/CLNP Connection

	Article: Q115444
	Product(s): Microsoft Mail For PC Networks
	Version(s): MS-DOS:3.2
	Operating System(s): 
	Keyword(s): 
	Last Modified: 12-NOV-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Mail Gateway to X.400, version 3.2 
	-------------------------------------------------------------------------------
	
	If you are using the X.400 gateway with TP4/CLNP connection type, running
	the Admin program (X400ADM.EXE) can generate an error. (The exact sequence
	is given at the end of this article.)
	
	CAUSE
	=====
	
	This is by design. Any activation of a menu in ADMIN\GATEWAY\X400\SETUP causes
	this to happen.
	
	RESOLUTION
	==========
	
	Use X400ADM.EXE for all configuration tasks except updating the address list.
	
	STEPS TO REPRODUCE BEHAVIOR
	---------------------------
	
	1. Run X400ADM.EXE.
	
	2. Select Local MTA.
	
	3. Change connection type to TP4/CLNP.
	
	4. Run MSMail ADMIN.EXE.
	
	5. Select Gateway, then X400.
	
	6. From the X400 menu, select Setup.
	
	7. Select Conversion.
	
	8. Press enter.
	
	9. Press Yes for update.
	
	10. Run X400ADM.EXE again.
	
	11. Select Local MTA.
	
	Notice that Connection Type has changed from TP4/CLNP only to both TP4 and X.25.
	This produces an error when you run the gateway, because there is no X.25 card
	loaded.
	
	
	Additional query words: 3.20
	
	======================================================================
	Keywords          :  
	Technology        : kbMailSearch kbMailGateSearch kbZNotKeyword3 kbMailGatex400320
	Version           : MS-DOS:3.2
	
	=============================================================================
	
