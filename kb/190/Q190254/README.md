---
layout: page
title: "Q190254: BUG: Cannot Insert MFC 4.1-Based Controls in DHTML Page Designer"
permalink: /kb/190/Q190254/
---

## Q190254: BUG: Cannot Insert MFC 4.1-Based Controls in DHTML Page Designer

{% raw %}

	Article: Q190254
	Product(s): Microsoft Visual Basic for Windows
	Version(s): WINDOWS:6.0
	Operating System(s): 
	Keyword(s): kbInternet kbPageDesigner kbVBp kbVBp600
	Last Modified: 11-JAN-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual Basic Professional Edition for Windows, version 6.0 
	- Microsoft Visual Basic Enterprise Edition for Windows, version 6.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you insert an ActiveX control based on Microsoft Foundation Classes (MFC),
	version 4.1 in the DHTML Page Designer, and you open the property page for the
	control and click Cancel, you encounter a general protection fault (GPF) in
	Mfc40.dll.
	
	RESOLUTION
	==========
	
	Controls built with MFC 4.2 that shipped with Visual C++, version 5.0 or later
	work correctly.
	
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
	Keywords          : kbInternet kbPageDesigner kbVBp kbVBp600 
	Technology        : kbVBSearch kbAudDeveloper kbZNotKeyword6 kbZNotKeyword2 kbVB600Search kbVBA600 kbVB600
	Version           : WINDOWS:6.0
	Issue type        : kbbug
	
	=============================================================================
	

{% endraw %}
