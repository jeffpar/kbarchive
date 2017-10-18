---
layout: page
title: "Q198929: Error 'ASP 0115' Unexpected Error. A Trappable Error Occurred"
permalink: kb/198/Q198929/
---

## Q198929: Error 'ASP 0115' Unexpected Error. A Trappable Error Occurred

	Article: Q198929
	Product(s): Internet Information Server
	Version(s): winnt:4.0
	Operating System(s): 
	Keyword(s): 
	Last Modified: 13-MAY-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Internet Information Server 4.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you use the Web Administration tool to create an expiration policy, you may
	receive the following error saving the change:
	
	  error 'ASP 0115'
	  Unexpected error
	  <path to asp file>
	  A trappable error occurred in an external object. The script cannot continue
	  running.
	
	In some cases, the browser may stop responding or one or more frames may become
	disabled (grayed out).
	
	NOTE: This ONLY occurs on the addition of the FIRST expiration policy. If the
	computer is rebooted, the expiration policy is in place, and the Web
	Administration tool will allow subsequent policies to be added.
	
	WORKAROUND
	==========
	
	Create the first expiration policy using the Microsoft Management Console.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in Microsoft Internet Information
	Server version 4.0.
	
	
	Additional query words: locked hung freeze mmc
	
	======================================================================
	Keywords          :  
	Technology        : kbiisSearch kbiis400
	Version           : winnt:4.0
	Issue type        : kbbug
	Solution Type     : kbnofix
	
	=============================================================================
	
