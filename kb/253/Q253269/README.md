---
layout: page
title: "Q253269: PRB: Access Denied When You Try to Debug a WebClass Application"
permalink: /kb/253/Q253269/
---

## Q253269: PRB: Access Denied When You Try to Debug a WebClass Application

	Article: Q253269
	Product(s): Microsoft Visual Basic for Windows
	Version(s): 6.0
	Operating System(s): 
	Keyword(s): kberrmsg kbDebug kbVBp600 kbWebClasses kbGrpDSASP kbDSupport
	Last Modified: 25-APR-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual Basic Professional Edition for Windows, version 6.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you develop a WebClass application in Visual Basic 6.0 and click the Start
	button to debug the component, you may receive the following error message in
	the Visual Basic Integrated Development Environment (IDE):
	
	  Access is denied.
	
	CAUSE
	=====
	
	You are not logged on as a local administrator. To debug WebClasses, you must
	have administrator access privileges.
	
	RESOLUTION
	==========
	
	Log on to the local computer with an account that has administrative privileges
	to debug your WebClass applications.
	
	Additional query words:
	
	======================================================================
	Keywords          : kberrmsg kbDebug kbVBp600 kbWebClasses kbGrpDSASP kbDSupport 
	Technology        : kbVBSearch kbAudDeveloper kbZNotKeyword6 kbZNotKeyword2 kbVB600Search kbVB600
	Version           : :6.0
	Issue type        : kbprb
	
	=============================================================================
	
