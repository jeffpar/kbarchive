---
layout: page
title: "Q115352: X400: Invalid Routing Entry Syntax Causes PANIC Error, Exit"
permalink: kb/115/Q115352/
---

## Q115352: X400: Invalid Routing Entry Syntax Causes PANIC Error, Exit

	Article: Q115352
	Product(s): Microsoft Mail For PC Networks
	Version(s): MS-DOS:3.2
	Operating System(s): 
	Keyword(s): 
	Last Modified: 11-NOV-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Mail Gateway to X.400, version 3.2 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	If you make an entry with invalid syntax in the Routing screen, and exit by
	using the OK button, you cannot re-enter the screen to change or modify any
	entries, and an assertion message with heading PANIC and the message "Token is
	1" is displayed in a box. Pressing OK on this box or using the pull down menu
	(Close) exits the program.
	
	Since you should use the Config utility to enter all data (that is, you should
	not edit ROUTE.CFG files manually) this prevents you from modifying or adding to
	the routing.
	
	CAUSE
	=====
	
	Error detection capabilities needed to be extended to deal with this
	circumstance.
	
	RESOLUTION
	==========
	
	Instead of being dropped out to an MS-DOS box after acknowledging the error
	message, you are allowed to continue with other configuration functions. These
	routing entries are accepted when there should be destination MTAs for the last
	two expressions:
	
	  a=telecom.canada
	
	  p=prmd <MTA1>
	  x121=123
	  ua-id=xxx
	
	Detected errors are not corrected.
	
	
	Additional query words: 3.20
	
	======================================================================
	Keywords          :  
	Technology        : kbMailSearch kbMailGateSearch kbZNotKeyword3 kbMailGatex400320
	Version           : MS-DOS:3.2
	
	=============================================================================
	
