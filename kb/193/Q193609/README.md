---
layout: page
title: "Q193609: Visual Basic 5.0 Run-time DLL Has Read-only Attribute"
permalink: /kb/193/Q193609/
---

## Q193609: Visual Basic 5.0 Run-time DLL Has Read-only Attribute

	Article: Q193609
	Product(s): Internet Information Server
	Version(s): WINNT:4.0
	Operating System(s): 
	Keyword(s): 
	Last Modified: 05-MAY-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Internet Information Server 4.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	Under some conditions, during the installation of the Windows NT 4.0 Option
	Pack, the Visual Basic 5.0 run-time dynamic link library (DLL) Msvbvm50.dll is
	marked with the read-only file attribute. This causes errors when you run any
	setup program created by the Visual Basic Setup Wizard. In some cases, it will
	cause an error with components created by Visual Basic that are downloaded into
	a browser.
	
	CAUSE
	=====
	
	This behavior is by design.
	
	RESOLUTION
	==========
	
	To solve this problem, remove the read-only attribute from the Msvbvm50.dll file
	on the server.
	
	======================================================================
	Keywords          :  
	Technology        : kbiisSearch kbiis400
	Version           : WINNT:4.0
	Issue type        : kbprb
	
	=============================================================================
	
