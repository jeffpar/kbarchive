---
layout: page
title: "Q135266: PRB: Converting 2.x Screen Does Not Allow Adjustable Pageframe"
permalink: /kb/135/Q135266/
---

## Q135266: PRB: Converting 2.x Screen Does Not Allow Adjustable Pageframe

{% raw %}

	Article: Q135266
	Product(s): Microsoft FoxPro
	Version(s): WINDOWS:3.0,3.0b
	Operating System(s): 
	Keyword(s): 
	Last Modified: 15-FEB-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual FoxPro for Windows, versions 3.0, 3.0b 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	If you select the Functional Conversion option when converting a screen from an
	earlier version of FoxPro, and then add a PageFrame control to the converted
	form, you will see two pages and the PageCount property cannot be modified.
	
	CAUSE
	=====
	
	When you convert a screen from an earlier version of FoxPro, the converter
	dialog box appears asking if you would like to convert the screen via a
	Functional Conversion or a Visual Conversion. The Functional Conversion provides
	immediate FoxPro 2.x READ compatibility so you can use forms in Visual FoxPro
	without making a lot of manual changes to the converted screen. The Visual
	Conversion creates images of forms and all controls, but it copies the code from
	the original FoxPro 2.x screen to a .prg file. If you choose the Functional
	Conversion, the newly converted form will not allow the PageCount property of a
	PageFrame control to be modified when a PageFrame is added to the form.
	
	RESOLUTION
	==========
	
	To be able to modify the PageCount, you must set the Windowtype property to
	Modal or Modeless.
	
	STATUS
	======
	
	This behavior is by design.
	
	MORE INFORMATION
	================
	
	Steps to Reproduce Problem Behavior
	-----------------------------------
	
	1. Convert a version 2.x screen, choosing the Functional Conversion option.
	
	2. Add a page frame to the newly converted form.
	
	3. Note that the PageCount property is in italics, which means it cannot be
	  changed.
	
	4. Change the Windowtype property of the form to Modal or Modeless.
	
	5. Note that the PageCount property of the page frame can now be changed.
	
	Additional query words: 3.00 VFoxWin
	
	======================================================================
	Keywords          :  
	Technology        : kbVFPsearch kbAudDeveloper kbVFP300 kbVFP300b
	Version           : WINDOWS:3.0,3.0b
	
	=============================================================================
	

{% endraw %}
