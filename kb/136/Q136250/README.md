---
layout: page
title: "Q136250: HOWTO: Determine Visual Basic Trappable Errors"
permalink: /kb/136/Q136250/
---

## Q136250: HOWTO: Determine Visual Basic Trappable Errors

{% raw %}

	Article: Q136250
	Product(s): Microsoft Visual Basic for Windows
	Version(s): 4.0,5.0,6.0
	Operating System(s): 
	Keyword(s): kbref kbDocs kbVBp400 kbVBp500 kbVBp600 kbGrpDSVB
	Last Modified: 11-JAN-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual Basic Standard Edition, 32-bit, for Windows, version 4.0 
	- Microsoft Visual Basic Professional Edition, 16-bit, for Windows, version 4.0 
	- Microsoft Visual Basic Professional Edition, 32-bit, for Windows, version 4.0 
	- Microsoft Visual Basic Enterprise Edition, 16-bit, for Windows, version 4.0 
	- Microsoft Visual Basic Enterprise Edition, 32-bit, for Windows, version 4.0 
	- Microsoft Visual Basic Learning Edition for Windows, versions 5.0, 6.0 
	- Microsoft Visual Basic Professional Edition for Windows, versions 5.0, 6.0 
	- Microsoft Visual Basic Enterprise Edition for Windows, versions 5.0, 6.0 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	This article demonstrates how you can determine if an error you are receiving
	from a Visual Basic program is a Visual Basic trappable error or if it coming
	from another source.
	
	MORE INFORMATION
	================
	
	When you run Visual Basic, follow these steps to get more information on a
	specific error:
	
	1. Stop your program if it is currently running.
	
	2. Press the F8 key to go from design mode to break mode.
	
	3. Press CTRL+G to activate the debug window.
	
	4. Enter the following statement and wait for the error message to appear:
	
	  "Error <error-number>" (without the quotation marks)
	
	For example, type "Error 70" (without the quotation marks) and the following
	error message appears:
	
	  Run-time error '70':
	  Permission denied
	
	5. Press the F1 key to get information from online Help on that specific error.
	
	  For example, in Visual Basic 4.0, pressing F1 on "Error 70" (without the
	  quotation marks) displays the Permission denied (Error 70) page from Visual
	  Basic Help.
	
	  In Visual Basic 6.0, pressing F1 on "Error 70" (without the quotation marks)
	  displays the Permission denied (Error 70) page from the Visual Basic for
	  Applications Reference.
	
	If the error description is: Application-defined or object-defined error, then
	the error number does not correspond to an error defined by Visual Basic for
	Applications (VBA). Such errors may be defined by the host application (for
	example, Microsoft Excel or Visual Basic), but if you want to generate them from
	code, you must use the Raise method, and fill in all relevant arguments.
	
	
	REFERENCES
	==========
	
	The Visual Basic 6.0 Reference Documentation has a section on Trappable Errors.
	This section includes documentation on the core Visual Basic language errors,
	miscellaneous Visual Basic errors, OLE Container Control errors, RDO errors, and
	ActiveX Control errors.
	
	For additional information on trappable errors for Visual Basic 3.0, click the
	article number below to view the article in the Microsoft Knowledge Base:
	
	  Q108340 HOWTO: Determine Visual Basic 3.0 Trappable Errors
	
	Additional query words: 70
	
	======================================================================
	Keywords          : kbref kbDocs kbVBp400 kbVBp500 kbVBp600 kbGrpDSVB 
	Technology        : kbVBSearch kbAudDeveloper kbZNotKeyword6 kbZNotKeyword2 kbVB500Search kbVB600Search kbVBA500 kbVBA600 kbVB500 kbVB600 kbVB400Search kbVB400 kbVB16bitSearch
	Version           : :4.0,5.0,6.0
	Issue type        : kbhowto
	
	=============================================================================
	

{% endraw %}
