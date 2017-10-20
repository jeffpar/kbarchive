---
layout: page
title: "Q153354: BUG: OLE Controls Limited to 20 Property Pages in Visual C++"
permalink: /kb/153/Q153354/
---

## Q153354: BUG: OLE Controls Limited to 20 Property Pages in Visual C++

{% raw %}

	Article: Q153354
	Product(s): Microsoft C Compiler
	Version(s): 4.00 4.10 4.20
	Operating System(s): 
	Keyword(s): kbole kbCtrl _IK920 kbVC
	Last Modified: 31-JUL-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- The Resource Editor, included with:
	   - Microsoft Visual C++, 32-bit Editions, versions 4.0, 4.1 
	   - Microsoft Visual C++, 32-bit Enterprise Edition, version 4.2 
	   - Microsoft Visual C++, 32-bit Professional Edition, version 4.2 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When an ActiveX (OLE) Control that has more than 20 Property Pages is placed on
	a dialog in the Visual C++ resource editor, you may encounter an error in the
	development environment when you switch between its property pages. In
	particular, if you select the tab for a property page numbered greater than 20,
	you will see a message box indicating: "This program has performed an illegal
	operation and will be shut down." Selecting a tab for a page numbered less than
	20 may also cause an error to occur.
	
	CAUSE
	=====
	
	This behavior is caused by a bug in the Visual C++ development environment,
	which allows a maximum of property pages for a given ActiveX Control.
	
	RESOLUTION
	==========
	
	Currently, there are two workarounds for this problem:
	
	- Limit the number of property pages for an OLE Control to 20.
	
	-or-
	
	- Add a button to the property page that when clicked will bring up a Modal
	  dialog box to handle additional properties.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a bug in the Microsoft products listed at the
	beginning of this article. We are researching this bug and will post new
	information here in the Microsoft Knowledge Base as it becomes available.
	
	REFERENCES
	==========
	
	OLE Controls: Adding Another Custom Property Page Programming with MFC:
	Encyclopedia
	
	Additional query words: kbVC400bug 4.00 4.10 4.20 kbole AppStudioIss CDKIss
	
	======================================================================
	Keywords          : kbole kbCtrl _IK920 kbVC 
	Technology        : kbVCsearch kbAudDeveloper kbVC32bitSearch kbResourceEd
	Version           : 4.00 4.10 4.20
	
	=============================================================================
	

{% endraw %}
