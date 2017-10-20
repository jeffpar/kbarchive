---
layout: page
title: "Q191216: DOC: CallByName Documentation Error"
permalink: /kb/191/Q191216/
---

## Q191216: DOC: CallByName Documentation Error

{% raw %}

	Article: Q191216
	Product(s): Microsoft Visual Basic for Windows
	Version(s): WINDOWS:6.0
	Operating System(s): 
	Keyword(s): kbdocerr kbVBp600 kbGrpDSVB
	Last Modified: 11-JAN-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual Basic Learning Edition for Windows, version 6.0 
	- Microsoft Visual Basic Professional Edition for Windows, version 6.0 
	- Microsoft Visual Basic Enterprise Edition for Windows, version 6.0 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	The documentation for the CallByName function states that the first parameter is
	the "name of the object on which the function will be executed." This may be
	misleading when you use it with properties and methods of a Class. If you use
	CallByName with the properties and methods of a Class, the first parameter is
	actually an object variable reference and not the name of the Class. The object
	must be instantiated prior to using CallByName.
	
	Additional query words:
	
	======================================================================
	Keywords          : kbdocerr kbVBp600 kbGrpDSVB 
	Technology        : kbVBSearch kbAudDeveloper kbZNotKeyword6 kbZNotKeyword2 kbVB600Search kbVBA600 kbVB600
	Version           : WINDOWS:6.0
	
	=============================================================================
	

{% endraw %}
