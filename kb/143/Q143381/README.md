---
layout: page
title: "Q143381: XCLN: New Mail Notification Not Visible with Screen Saver"
permalink: kb/143/Q143381/
---

## Q143381: XCLN: New Mail Notification Not Visible with Screen Saver

	Article: Q143381
	Product(s): Microsoft Exchange
	Version(s): 4.00
	Operating System(s): 
	Keyword(s): 
	Last Modified: 13-MAR-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Exchange Windows NT client, version 4.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you receive new mail on a Windows NT computer that has an active screen
	saver, the New Mail notification box will not have the focus. When the screen
	saver is disabled, the New Mail notification box is not visible and Microsoft
	Exchange appears to be hung.
	
	CAUSE
	=====
	
	This is by product design. When new mail arrives, the Display a Notification
	Message option displays a dialog box stating that new mail has been delivered
	and asks if you want to read the new mail now. If the Exchange client is in the
	foreground, and new mail is received when the screen saver is active, disabling
	the screen saver and clicking anywhere in the Exchange client results in an
	error. This is due to the modal nature of the Windows NT Exchange client.
	
	If another application is in the foreground or Microsoft Exchange is minimized
	and new mail is delivered when the screen saver is active, press ALT+TAB to get
	back to Microsoft Exchange. This will bring the new mail notification to the
	foreground.
	
	Additional query words: 4.00
	
	======================================================================
	Keywords          :  
	Technology        : kbExchangeSearch kbExchangeClientSearch kbZNotKeyword2 kbZNotKeyword3 kbExchange400NT
	Version           : 4.00
	
	=============================================================================
	
