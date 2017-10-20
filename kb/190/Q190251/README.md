---
layout: page
title: "Q190251: BUG: Option Explicit Statement is Not Added by a DHTML Page"
permalink: /kb/190/Q190251/
---

## Q190251: BUG: Option Explicit Statement is Not Added by a DHTML Page

{% raw %}

	Article: Q190251
	Product(s): Microsoft Visual Basic for Windows
	Version(s): WINDOWS:6.0
	Operating System(s): 
	Keyword(s): kbInternet kbPageDesigner kbVBp600bug
	Last Modified: 11-JAN-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual Basic Professional Edition for Windows, version 6.0 
	- Microsoft Visual Basic Enterprise Edition for Windows, version 6.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	The DHTML Page Designer does not add an Option Explicit statement to code by
	default. With this statement, Visual Basic requires you to declare variables
	before you use them.
	
	RESOLUTION
	==========
	
	To add Option Explicit to your DHTML Page Designer pages:
	
	1. Right-click on DHTML page in the Visual Basic Project window.
	
	2. Select View Code from the pop-up menu.
	
	3. Insert the text "Option Explicit" as the very first line.
	
	4. Repeat this process for all DHTML pages in the project and every time you
	  create a new DHTML page.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a bug in the Microsoft products listed at the
	beginning of this article.
	
	REFERENCES
	==========
	
	Please see the following Microsoft Knowledge Base article for more information
	on the DHTML Page Designer:
	
	  Q190249 INFO: VB 6.0 Readme Part 9: DHTML Page Designer Issues
	
	Additional query words:
	
	======================================================================
	Keywords          : kbInternet kbPageDesigner kbVBp600bug 
	Technology        : kbVBSearch kbAudDeveloper kbZNotKeyword6 kbZNotKeyword2 kbVB600Search kbVBA600 kbVB600
	Version           : WINDOWS:6.0
	Issue type        : kbbug
	
	=============================================================================
	

{% endraw %}
