---
layout: page
title: "Q130832: Properties and Methods Used by Converted Forms"
permalink: kb/130/Q130832/
---

## Q130832: Properties and Methods Used by Converted Forms

	Article: Q130832
	Product(s): Microsoft FoxPro
	Version(s): WINDOWS:3.0
	Operating System(s): 
	Keyword(s): 
	Last Modified: 15-FEB-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual FoxPro for Windows, version 3.0 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	CONVERT.APP is a Visual FoxPro application that performs a functional conversion
	of FoxPro version 2.x screens, reports, and projects to Visual FoxPro forms,
	reports, and projects. This article focuses on the functional screen conversion
	process and explores some of the properties exposed in a converted form.
	
	The following descriptions of Visual and Functional conversions are also located
	in the online Help associated with the Conversion Options dialog box:
	
	Functional Conversion
	---------------------
	
	Creates form and control images and copies code to locations in object
	properties, events, and methods. Functional conversion provides immediate FoxPro
	2.6 READ compatibility so you can use forms in Visual FoxPro without making
	extensive manual changes. To gain complete event model functionality, you must
	eliminate pages and page frames, change the form set WindowType property, and
	manually relocate code in methods and events. For details, see Checking
	Converted FoxPro 2.6 Screens.
	
	Visual Conversion
	-----------------
	
	Creates images of forms and all controls, but copies all the code from the
	original FoxPro 2.6 project or screens to a non-compilable .PRG file. Choose
	Visual Conversion if you want to move to full Visual FoxPro functionality
	without having to eliminate pages and page frames, change the form set
	WindowType property, and manually relocate code from object to object. For
	details, see Checking Converted FoxPro 2.6 Screens.
	
	MORE INFORMATION
	================
	
	A functional conversion provides immediate FoxPro version 2.x READ compatibility
	in Visual FoxPro. Because the event model of Visual FoxPro is different from the
	model used by FoxPro versions 2.x, a special case has been implemented with
	Visual FoxPro forms to emulate READ behavior of the older FoxPro versions. This
	includes the use of form sets, forms, page frames, and pages. With every
	functional conversion, a form set is created. Each form set contains a form per
	screen, which in turn contains a page frame.
	
	All of the 2.x objects are placed as controls on a page in a page frame, and
	multiple READs are represented by multiple pages. After you execute a functional
	conversion of your FoxPro versions 2.x screen, you can edit the newly created
	Visual FoxPro form. Notice that some properties and methods are unique to
	converted forms.
	
	WindowType Property
	-------------------
	
	The WindowType property of the form set has a value of 2-Read or 3-Read Modal.
	These values make the form set behave as if it were activated by a READ. A Page
	Frame is required to set the WindowType property to 2 or 3.
	
	READ Properties and Methods
	---------------------------
	
	You can use the following properties and methods in a form set if the WindowType
	property is 2-Read or 3-Read Modal:
	
	  ReadActivate
	  ReadCycle
	  ReadDeactivate
	  ReadLock
	  ReadMouse
	  ReadSave
	  ReadTimeOut
	  ReadValid
	  ReadWhen
	  WindowList
	
	They all relate to READ clauses. For more information, search for the specific
	property or method in the Visual FoxPro Help file.
	
	Hidden Properties
	-----------------
	
	The following properties are used by converted READ-mode forms. They do not
	appear in the property sheet. However, the error "Property Name Already In Use"
	is displayed if you attempt to add a new property with the following names.
	
	- ReleaseErase
	
	  This property is used by controls to indicate that when they are released,
	  their image should remain on the form. Read uses this because after a READ
	  terminates, the images of the objects remain on the form.
	
	- ReleaseWindows
	
	  This property is used by converted forms to support the Release Windows check
	  box that is used in the Generate or Project Manager dialog in FoxPro versions
	  2.x.
	
	- ErasePage
	
	  Nested READs within a form are simulated by using "invisible" form pages. The
	  ErasePage property is set to false to prevent objects from a previous READ
	  level to be erased when READ switches form pages.
	
	Additional query words: VFoxWin
	
	======================================================================
	Keywords          :  
	Technology        : kbVFPsearch kbAudDeveloper kbVFP300
	Version           : WINDOWS:3.0
	
	=============================================================================
	
