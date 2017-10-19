---
layout: page
title: "Q305181: Unable to Complete MSN Broadband DSL Setup--Err Msg:  &quot;Our serve"
permalink: /kb/305/Q305181/
---

## Q305181: Unable to Complete MSN Broadband DSL Setup--Err Msg:  &quot;Our serve

	Article: Q305181
	Product(s): The Microsoft Network
	Version(s): 6.1
	Operating System(s): 
	Keyword(s): 
	Last Modified: 16-AUG-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- The Microsoft Network version 6.1 
	- MSN DSL, version 2.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	You completed the Customer Premises Equipment (CPE) or Digital Subscriber Line
	(DSL) modem Setup for MSN Broadband DSL installation. User received the
	following error:
	
	"Our servers are very busy right now and having trouble processing your account.
	Would you like to try again?"
	
	No further options are available and you cannot proceed.
	
	CAUSE
	=====
	
	The CPE has not yet been assigned an external Internet Protocol (IP) address on
	the Asynchronous Transfer Mode (ATM) network. Because you do not have an IP
	address, you cannot connect to the MSN Setup Servers which are located behind
	the ATM Network. If two minutes has passed, MSN Explorer will not be able to
	detect the IP, even if the IP has been assigned. This can also be cause by
	issues with the server.
	
	RESOLUTION
	==========
	
	The MSN Broadband DSL setup application has been modified to allow up to 2
	minutes for the CPE to acquire an external IP address. However, this time
	allotment may not be sufficient for the CPE to acquire an IP lease.
	
	To resolve this issue
	
	1. Quit the MSN Explorer Setup Wizard, restart your CPE and PC, and then
	  double-click on the MSN Explorer icon on your desktop.
	  Note: Allow up to 2 minutes for CPE to acquire an IP lease. Watch for LNK LED
	  to turn amber in color. This indicates a complete connection with the DSLAM.
	  After double-clicking the MSN Explorer icon, your will receive this message:
	  "Currently, there are no users specified. Click Add a New User."
	
	2. Click Add a New User, and then entering your member ID and password.
	
	MORE INFORMATION
	================
	
	
	Additional query words: kbimu; MSN DSL
	
	======================================================================
	Keywords          :  
	Technology        : kbMSNSearch kbMSN610 kbMSNDSL200
	Version           : :6.1
	Issue type        : kbprb
	
	=============================================================================
	
