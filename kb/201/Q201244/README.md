---
layout: page
title: "Q201244: XWEB: Browser Shuts Down Trying to Open a Link to a Deleted Item"
permalink: /kb/201/Q201244/
---

## Q201244: XWEB: Browser Shuts Down Trying to Open a Link to a Deleted Item

	Article: Q201244
	Product(s): Microsoft Exchange
	Version(s): WINDOWS:5.0,5.5
	Operating System(s): 
	Keyword(s): 
	Last Modified: 12-FEB-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Exchange Active Server Components, version 5.0 
	- Microsoft Outlook Web Access, version 5.5 
	- Microsoft Outlook Web Access, version 5.5 Service Pack 1 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you attempt to open a deleted e-mail message through the e-mail URL in
	Outlook Web Access (OWA) using Microsoft Internet Explorer, you receive the
	following error message:
	
	  "Your message does not exist in this folder. It may have been deleted."
	
	The following dialog box will then appear:
	
	  "The Web page you are viewing is trying to close the window.
	  Do you wish to continue?"
	
	Clicking on "Yes" will end that browser session.
	
	CAUSE
	=====
	
	When you open a message window in OWA by composing or opening a message, you are
	spawning a new Internet Explorer browser window. Closing the message closes that
	window, making it appear to send you back to the Inbox window when you have
	really just closed the second window.
	By opening a message using its URL, you are making the browser display only that
	window, so closing it shuts down the only browser session.
	If the message the URL points to has been deleted, you only see the errors above
	and then the browser closes.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in the Microsoft products listed at
	the beginning of this article.
	
	MORE INFORMATION
	================
	
	
	Additional query words:
	
	======================================================================
	Keywords          :  
	Technology        : kbOutlookSearch kbZNotKeyword6 kbExchangeSearch kbZNotKeyword2 kbOWASearch kbOWA550 kbOWA550SP1 kbExchangeActiveServComp500
	Version           : WINDOWS:5.0,5.5
	Issue type        : kbprb
	
	=============================================================================
	
