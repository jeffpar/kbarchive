---
layout: page
title: "Q294217: Cannot Retrieve Custom HTTP Variables That Contain an Underscore"
permalink: /kb/294/Q294217/
---

## Q294217: Cannot Retrieve Custom HTTP Variables That Contain an Underscore

	Article: Q294217
	Product(s): Internet Information Server
	Version(s): 3.0,4.0,5.0
	Operating System(s): 
	Keyword(s): 
	Last Modified: 08-MAY-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Internet Information Server versions 3.0, 4.0 
	- Microsoft Internet Information Services version 5.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	IIS cannot retrieve custom HTTP header variables that contain an underscore
	following "HTTP_" (for example, "HTTP_SM_TESTVARIABLE"). The value returned for
	the header variable is NULL.
	
	CAUSE
	=====
	
	Any underscore ( _ ) that follows "HTTP_" is incorrectly converted to a dash
	when IIS attempts to retrieve the custom header value for the variable, and
	therefore, the variable is not found.
	
	WORKAROUND
	==========
	
	Do not use an underscore in the custom HTTP header variable name.
	
	-OR-
	
	Retrieve and parse the HTTP_ALL header variable for the custom HTTP header
	variable.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in the Microsoft products that are
	listed at the beginning of this article.
	
	Additional query words:
	
	======================================================================
	Keywords          :  
	Technology        : kbiisSearch kbiis500 kbiis400 kbiis300
	Version           : :3.0,4.0,5.0
	Hardware          : ALPHA x86
	Issue type        : kbbug
	Solution Type     : kbpending
	
	=============================================================================
	
