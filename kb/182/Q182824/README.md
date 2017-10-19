---
layout: page
title: "Q182824: Server-side Script Debugging Causes TypeLibrary Call To Fail"
permalink: /kb/182/Q182824/
---

## Q182824: Server-side Script Debugging Causes TypeLibrary Call To Fail

	Article: Q182824
	Product(s): Internet Information Server
	Version(s): WINNT:4.0
	Operating System(s): 
	Keyword(s): 
	Last Modified: 02-JUL-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Internet Information Server 4.0 
	-------------------------------------------------------------------------------
	
	
	SYMPTOMS
	========
	
	When server-side script debugging is turned on, calls to a TypeLibrary feature
	will cause the following error message:
	
	  OBJECT REQUIRED
	
	WORKAROUND
	==========
	
	Turn off server-side script debugging.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in Microsoft Internet Information
	Server, version 4.0.
	
	
	A supported fix is now available, but it has not been fully regression- tested
	and should be applied only to systems experiencing this specific problem. Unless
	you are severely impacted by this specific problem, Microsoft recommends that
	you wait for the next Service Pack that contains this fix. Contact Microsoft
	Technical Support for more information.
	
	
	
	
	======================================================================
	Keywords          :  
	Technology        : kbiisSearch kbiis400
	Version           : WINNT:4.0
	Hardware          : ALPHA PPC x86
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	
