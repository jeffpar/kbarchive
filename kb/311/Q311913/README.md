---
layout: page
title: "Q311913: PRB: Problem When Send Notification Contains Less Than (&lt;) Chara"
permalink: /kb/311/Q311913/
---

## Q311913: PRB: Problem When Send Notification Contains Less Than (&lt;) Chara

	Article: Q311913
	Product(s): Microsoft Developer Network
	Version(s): 
	Operating System(s): 
	Keyword(s): 
	Last Modified: 30-JUL-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft.NET Alerts 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you try to send notifications which contain the less than (<) character,
	the section within the less than (<) and greater than (>) characters is
	blank.
	
	CAUSE
	=====
	
	When you do not encode the less than (<) and greater than (>) characters,
	the less than (<) character throws off the XML, and the error occurs.
	
	RESOLUTION
	==========
	
	Encode the less than (<) and greater than (>) characters before they reach
	the nrouter.
	
	Additional query words:
	
	======================================================================
	Keywords          :  
	Technology        : kbNETAlerts
	Version           : :
	Issue type        : kbprb
	
	=============================================================================
	
