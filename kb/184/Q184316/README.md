---
layout: page
title: "Q184316: Unable to Return Custom HTML Properties in Result Set"
permalink: /kb/184/Q184316/
---

## Q184316: Unable to Return Custom HTML Properties in Result Set

	Article: Q184316
	Product(s): Internet Information Server
	Version(s): WINNT:1.0,1.1
	Operating System(s): 
	Keyword(s): 
	Last Modified: 06-MAY-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Index Server versions 1.0, 1.1 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you try to return the value of custom HTML properties on the .htx results
	page, no error message appears, but no data is displayed for the property value.
	
	CAUSE
	=====
	
	In order for custom HTML property values to be displayed, these properties must
	be added to the properties cache. This cannot be done with Index Server 1.x.
	
	RESOLUTION
	==========
	
	To resolve this problem, upgrade to the Windows NT Option Pack. This contains
	Index Server 2.0, which allows custom HTML properties to be cached.
	
	MORE INFORMATION
	================
	
	Index Server allows you to create custom properties for META tags within HTML
	documents. You can then query on the contents of these tags but not display the
	contents.
	
	======================================================================
	Keywords          :  
	Technology        : kbIdxServSearch kbAudDeveloper kbIdxServ100 kbIdxServ110
	Version           : WINNT:1.0,1.1
	Issue type        : kbprb
	
	=============================================================================
	
