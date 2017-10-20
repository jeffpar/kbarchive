---
layout: page
title: "Q129895: PRB: OPTION PRIVATE Statement Has No Effect in Visual Basic"
permalink: /kb/129/Q129895/
---

## Q129895: PRB: OPTION PRIVATE Statement Has No Effect in Visual Basic

{% raw %}

	Article: Q129895
	Product(s): Microsoft Visual Basic for Windows
	Version(s): WINDOWS:4.0
	Operating System(s): 
	Keyword(s): kbprogramming kbVBp400
	Last Modified: 11-JAN-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual Basic Standard Edition for Windows, version 4.0 
	- Microsoft Visual Basic Professional Edition for Windows, version 4.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	Using the statement Option Private when declaring a module does not affect the
	behavior of a Visual Basic version 4.0 application in any way.
	
	CAUSE
	=====
	
	The Option Private statement is not implemented in Visual Basic version 4.0. It
	is useful only in applications that support multiple projects loaded
	simultaneously and allow references between the loaded projects, as Microsoft
	Excel version 5.0 does for example. The statement makes it impossible to access
	members of the module from a referencing project even if the member is declared
	public.
	
	STATUS
	======
	
	This behavior is by design. Because Visual Basic version 4.0 doesn't support
	multiple loaded projects, this statement has no use.
	
	Additional query words:
	
	======================================================================
	Keywords          : kbprogramming kbVBp400 
	Technology        : kbVBSearch kbAudDeveloper kbZNotKeyword6 kbZNotKeyword2 kbVB400Search kbVB400
	Version           : WINDOWS:4.0
	Issue type        : kbprb
	
	=============================================================================
	

{% endraw %}
