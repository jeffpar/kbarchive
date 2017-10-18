---
layout: page
title: "Q306001: BUG 14373: Inline Sign-In Page Does Not Render w/ Netscape"
permalink: kb/306/Q306001/
---

## Q306001: BUG 14373: Inline Sign-In Page Does Not Render w/ Netscape

	Article: Q306001
	Product(s): Microsoft Developer Network
	Version(s): 2.0
	Operating System(s): 
	Keyword(s): 
	Last Modified: 21-AUG-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Passport, version 2.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	Users of Netscape Navigator 4.7 may not be able to see the inline sign-in
	feature of Passport 2.0.
	
	CAUSE
	=====
	
	The settings on the partner site that is displaying the page cause this problem.
	If the partner site uses buffering, the inline sign-in page does not render with
	Netscape Navigator 4.7.
	
	RESOLUTION
	==========
	
	Add "Response.Buffer=false" (without the quotation marks) to the top of the
	partner inline sign-in page.
	
	Additional query words:
	
	======================================================================
	Keywords          :  
	Technology        : kbMSNSearch kbPassport200 kbPassportSearch
	Version           : :2.0
	Issue type        : kbprb
	
	=============================================================================
	
