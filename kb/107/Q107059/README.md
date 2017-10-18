---
layout: page
title: "Q107059: RAS Returns Poorly Formatted or Unreadable Error Messages"
permalink: kb/107/Q107059/
---

## Q107059: RAS Returns Poorly Formatted or Unreadable Error Messages

	Article: Q107059
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
	
	When you use Remote Access with an unsupported modem, you may encounter poorly
	formatted or unreadable error messages.
	
	CAUSE
	=====
	
	When modems return errors, they usually return unformatted text (which can vary
	in length). Remote Access simply displays this text. If the modem is not on the
	Windows for Workgroups hardware compatibility list, Microsoft cannot guarantee
	it will return usable error messages. For example, the Dallas FAX modem returns
	error messages that are unreadable when displayed by Remote Access.
	
	Additional query words: 3.11 server
	
	======================================================================
	Keywords          :  
	Technology        : kbAudDeveloper kbWFWSearch kbWFW311
	Version           : WINDOWS:3.11
	
	=============================================================================
	
