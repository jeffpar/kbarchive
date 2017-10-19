---
layout: page
title: "Q202014: Placing HTTPEXT.DLL in the &#42; Scriptmaps Causes 500 Error"
permalink: /kb/202/Q202014/
---

## Q202014: Placing HTTPEXT.DLL in the &#42; Scriptmaps Causes 500 Error

	Article: Q202014
	Product(s): Internet Information Server
	Version(s): winnt:4.0
	Operating System(s): 
	Keyword(s): 
	Last Modified: 16-JAN-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Internet Information Server 4.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you add an application mapping to a virtual directory that contains
	HTTPEXT.DLL mapped to ".*" (without the quotation marks), the Web server may
	return a 500 internal server error.
	
	RESOLUTION
	==========
	
	You must make a mapping for each extension you want to address. You cannot use a
	wildcard character in this way.
	
	
	Additional query words:
	
	======================================================================
	Keywords          :  
	Technology        : kbiisSearch kbiis400
	Version           : winnt:4.0
	
	=============================================================================
	
