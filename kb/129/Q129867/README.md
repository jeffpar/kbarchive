---
layout: page
title: "Q129867: How to Debug Typelib Shadowing"
permalink: /kb/129/Q129867/
---

## Q129867: How to Debug Typelib Shadowing

	Article: Q129867
	Product(s): Microsoft Visual Basic for Windows
	Version(s): 
	Operating System(s): 
	Keyword(s): 
	Last Modified: 11-JAN-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual Basic Standard Edition, 32-bit, for Windows, version 4.0 
	- Microsoft Visual Basic Professional Edition, 16-bit, for Windows, version 4.0 
	- Microsoft Visual Basic Professional Edition, 32-bit, for Windows, version 4.0 
	- Microsoft Visual Basic Enterprise Edition, 16-bit, for Windows, version 4.0 
	- Microsoft Visual Basic Enterprise Edition, 32-bit, for Windows, version 4.0 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	If an object is defined by the same name in more than one type library or object
	library, and a reference to both of them is chosen, Visual Basic uses the
	definition provided by the application listed higher in the Available References
	Box of the References Dialog.
	
	This article explains how to deal with these libraries and this behavior.
	
	MORE INFORMATION
	================
	
	What Is an Object Library?
	--------------------------
	
	An Object Library is a file with an .OLB extension that provides information to
	OLE Automation controllers (like Visual Basic) about available OLE Automation
	objects. The Object Browser can be used to examine the contents of an object
	library to get information about the objects provided.
	
	What is a Type Library?
	-----------------------
	
	A Type Library is a file or component within the object library that contains the
	OLE Automation standard descriptions of exposed objects, properties, and
	methods.
	
	How to Make Another Application's Objects Available to Your Application
	-----------------------------------------------------------------------
	
	Another application's objects can be made available in your code by setting a
	reference to that application's object library. This can be done by choosing
	References from the Tools menu to bring up the References dialog box. Then you
	can select from a list of references displayed in the Available References box.
	To view these objects, choose Object Browser from the View menu.
	
	When you refer to an object in code, Visual Basic searches each application
	selected in the References dialog box in the order the applications are
	displayed. If two applications use the same name for an object, Visual Basic
	uses the definition provided by the application listed higher in the Available
	References box.
	
	What to Do If the Object You Want Lies Further Down in the List
	---------------------------------------------------------------
	
	If the object you actually want is defined in an object library futher down in
	the reference list, you can:
	
	- Use the Priority Buttons of the references dialog box to move the reference
	  that you want higher up in the list. Then deselect and reselect the reference
	  that has now become lower in priority.
	
	-or-
	
	- Determine the correct name of the reference that you want from the Object
	  Brower, and qualify the object type with this complete name.
	
	-or-
	
	- Dimension the referered object as the generic type Object.
	
	-or-
	
	- Get rid of the one of the references if it is not used.
	
	Example
	-------
	
	For example, say you have the following code in an add-in:
	
	     Dim ft As Object
	     Dim ct As ControlTemplate
	     Dim oprop As Property
	
	     ' VBInstance is instance passed to add-in
	     Set ft = VBInstance.Application.ActiveProject.ActiveForm
	
	     ' Select first control on the form:
	     Set ct = ft.ControlTemplates.Item(0)
	
	     ' Generates Type Mismatch error when oprop is of type Property.
	     For Each oprop In ct.Properties
	        Debug.print oprop.Name
	     Next
	
	The Property object is defined both in the DAO and the VBIDE object libraries. If
	DAO appears ahead of VBIDE in the reference list, a "Type Mismatch" error is
	generated at the For statement. This occurs because VBIDE's Property object that
	is actually being used is shadowed by DAO's Property object.
	
	Choose one of the following solutions as a remedy:
	
	- Use the priority buttons of the references dialog box to move the reference
	  to VBIDE higher up than the reference to DAO. Then deselect DAO. Click the
	  dialog's OK button. Bring up the references dialog again. Reselect DAO, and
	  click the OK button again.
	
	-or-
	
	- Declare oprop as: Dim oprop As VBIDE.Property.
	
	-or-
	
	- Declare oprop as: Dim oprop As Object.
	
	-or-
	
	- Get rid of the reference to the DAO object (if it is not being used).
	
	Additional query words: 4.00 vb4win vb4all
	
	======================================================================
	Keywords          :  
	Technology        : kbVBSearch kbAudDeveloper kbVB400Search kbVB400 kbVB16bitSearch
	
	=============================================================================
	
