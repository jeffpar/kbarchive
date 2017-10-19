---
layout: page
title: "Q131197: PRB: Can't Edit/Select Converted Screen Objects by Clicking"
permalink: /kb/131/Q131197/
---

## Q131197: PRB: Can't Edit/Select Converted Screen Objects by Clicking

	Article: Q131197
	Product(s): Microsoft FoxPro
	Version(s): WINDOWS:3.0
	Operating System(s): 
	Keyword(s): 
	Last Modified: 15-FEB-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual FoxPro for Windows, version 3.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When, after doing a functional conversion of a FoxPro screen in Visual FoxPro
	version 3.0, the objects in that screen cannot be selected by clicking them in
	the Visual FoxPro form.
	
	CAUSE
	=====
	
	Doing a functional conversion causes Visual FoxPro to add a Page frame to the
	form. All of the objects in the form are put into the page frame instead of
	directly onto the form.
	
	By clicking the form, you are selecting the page frame object instead of each
	individual object.
	
	WORKAROUND
	==========
	
	To be able to edit an individual object, click the page frame using the
	secondary (right) mouse button. Then select Edit from the control menu. Or you
	can select page1 from the object menu in the property box for the form. Then you
	can click any item to change or view its properties and methods.
	
	STATUS
	======
	
	This Behavior is by design.
	
	MORE INFORMATION
	================
	
	When creating a new form in Visual FoxPro version 3.0, you can click the object
	to view or change its properties and methods. In FoxPro version 2.x, you can
	edit an object by double-clicking it.
	
	When you convert a screen from FoxPro version 2.x to Visual FoxPro version 3.0,
	Visual FoxPro adds a page frame to the form. The addition of a page frame was
	necessary to emulate the FoxPro version 2.x READ model; the page frame is a
	container that holds the converted objects. Clicking an object in the form lists
	the properties and methods of the page frame instead of the converted object.
	
	NOTE: Performing a visual conversion instead of the functional conversion
	prevents the page frame from being added to the form. The converted objects are
	placed directly on the form. However, the properties and methods of the objects
	must be manually added to the form.
	
	Steps to Reproduce Behavior
	---------------------------
	
	1. Open a FoxPro version 2.x screen by choosing Open from the File menu or by
	  using the MODIFY FORM command in the Command Window.
	
	2. When the Visual FoxPro Converter dialog box appears, choose Functional
	  Conversion, and click Continue.
	
	3. When the form designer window appears, notice that the properties sheet has
	  Formset as the default object.
	
	4. Click any object on the form to list the properties and methods for the page
	  frame. Double-Click to bring up the PageFrame.AddObject edit window.
	
	Additional query words: VFoxWin
	
	======================================================================
	Keywords          :  
	Technology        : kbVFPsearch kbAudDeveloper kbVFP300
	Version           : WINDOWS:3.0
	
	=============================================================================
	
