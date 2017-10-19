---
layout: page
title: "Q119247: WFWG: Pause and Resume Events Are Not Logged"
permalink: /kb/119/Q119247/
---

## Q119247: WFWG: Pause and Resume Events Are Not Logged

	Article: Q119247
	Product(s): Microsoft Windows 3.x Retail Product
	Version(s): WINDOWS:3.11
	Operating System(s): 
	Keyword(s): 
	Last Modified: 30-OCT-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows for Workgroups version 3.11 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you print to a shared printer on a machine with Event Log enabled, Pause
	and Resume events for the queue are not logged.
	
	CAUSE
	=====
	
	Windows for Workgroups does not log Pause and Resume events by design. The
	following printing-related events are logged:
	
	- Someone connecting to the print share
	
	- Print job spooled successfully
	
	- Print job completed
	
	- Individual print jobs are paused or resumed
	
	Additional query words: 3.00
	
	======================================================================
	Keywords          :  
	Technology        : kbAudDeveloper kbWFWSearch kbWFW311
	Version           : WINDOWS:3.11
	
	=============================================================================
	
