---
layout: page
title: "Q240811: VBScript Access Violates When Using Nested VBS Classes in ASP"
permalink: /kb/240/Q240811/
---

## Q240811: VBScript Access Violates When Using Nested VBS Classes in ASP

	Article: Q240811
	Product(s): Internet Information Server
	Version(s): winnt:4.0,5.0
	Operating System(s): 
	Keyword(s): 
	Last Modified: 11-FEB-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Internet Information Server 4.0 
	- Microsoft Internet Information Services version 5.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you use VBScript 5.x Classes in an ASP page, you may receive an Access
	Violation error in IIS if you nest classes within other classes on an ASP page.
	
	CAUSE
	=====
	
	This is caused by a problem in the class destruction for VBScript Classes.
	
	RESOLUTION
	==========
	
	Update the Vbscript.dll file to version 5.1 or later. Note that the installation
	of this update requires a restart to take effect.
	
	STATUS
	======
	
	This has been fixed the next version of Vbscript.dll version 5.1.
	
	Additional query words:
	
	======================================================================
	Keywords          :  
	Technology        : kbiisSearch kbiis500 kbiis400
	Version           : winnt:4.0,5.0
	Issue type        : kbbug
	Solution Type     : kbpending
	
	=============================================================================
	
