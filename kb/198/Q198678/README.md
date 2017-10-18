---
layout: page
title: "Q198678: Content Expiration Shows Incorrect Date in HTMLA Web Admin"
permalink: kb/198/Q198678/
---

## Q198678: Content Expiration Shows Incorrect Date in HTMLA Web Admin

	Article: Q198678
	Product(s): Internet Information Server
	Version(s): winnt:5.0
	Operating System(s): 
	Keyword(s): 
	Last Modified: 04-FEB-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Internet Information Services version 5.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	The Content Expiration field in the HTMLA Web Administration can be set to a
	date earlier than the today's date; however, you cannot do this in the MMC
	interface.
	
	CAUSE
	=====
	
	The Web Administration forms do not have a any validation for the Content
	Expiration field. You can put in an incorrect date. This does not cause any
	problems as long as you do not want the content to be cached in the user's Web
	browser. If the date is earlier than the present date, it is implied that the
	date is today.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in Microsoft Internet Information
	Services version 5.0.
	
	
	Additional query words: IIS HTMLA Content Expiration Date
	
	======================================================================
	Keywords          :  
	Technology        : kbiisSearch kbiis500
	Version           : winnt:5.0
	Issue type        : kbbug
	Solution Type     : kbpending
	
	=============================================================================
	
