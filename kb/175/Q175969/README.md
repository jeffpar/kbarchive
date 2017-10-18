---
layout: page
title: "Q175969: XCLN: NT Client Generates Application Error, Exception"
permalink: kb/175/Q175969/
---

## Q175969: XCLN: NT Client Generates Application Error, Exception

	Article: Q175969
	Product(s): Microsoft Exchange
	Version(s): WinNT:5.0
	Operating System(s): 
	Keyword(s): 
	Last Modified: 13-MAR-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Exchange Windows NT client, version 5.0 
	-------------------------------------------------------------------------------
	
	
	SYMPTOMS
	========
	
	The Microsoft Exchange Windows NT client, version 5.0 may generate an access
	violation when manipulating a message.
	
	CAUSE
	=====
	
	The Windows system can return a NULL pointer to a MENU ID that the client will
	attempt to access. This circumstance is dependant on strict timing and requires
	a number of events to occur in such an order that the MENU ID of the object
	being accessed has since been released by Windows.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in Microsoft Exchange Windows NT
	client, version 5.0.
	
	
	A supported fix is now available, but has not been fully regression-tested and
	should be applied only to systems experiencing this specific problem. Unless you
	are severely impacted by this specific problem, Microsoft recommends that you
	wait for the next Service Pack that contains this fix. Contact Microsoft
	Technical Support for more information.
	
	
	MORE INFORMATION
	================
	
	The problem can be reproduced only on a random basis. The following is an
	example of the commands used to reproduce the problem.
	
	1. User1 sends a message with an Word attachment to User2.
	
	2. User2 opens the message and opens the attachment in Word.
	
	3. User2 closes the attachment.
	
	4. User2 atempts to reply to User1.
	
	5. An application error will occur and if the system has the symbols loaded, the
	  DrWtsn32.log will indicate the last function accessed was NoteWndMenuSelect.
	
	
	
	Additional query words: crash AV watson
	======================================================================
	Keywords          :  
	Technology        : kbExchangeSearch kbExchangeClientSearch kbZNotKeyword2 kbZNotKeyword3 kbExchange500NT
	Version           : WinNT:5.0
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	
