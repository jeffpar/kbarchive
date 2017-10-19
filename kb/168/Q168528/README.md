---
layout: page
title: "Q168528: PRB: Add Method/Add Property Adds To All Interfaces"
permalink: /kb/168/Q168528/
---

## Q168528: PRB: Add Method/Add Property Adds To All Interfaces

	Article: Q168528
	Product(s): Microsoft C Compiler
	Version(s): 5.0 6.0
	Operating System(s): 
	Keyword(s): kbtool kbwizard kbMFC kbVC kbVC500 kbVC600 kbGrpDSTools
	Last Modified: 17-JUL-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual C++, 32-bit Enterprise Edition, versions 5.0, 6.0 
	- Microsoft Visual C++, 32-bit Professional Edition, versions 5.0, 6.0 
	- Microsoft Visual C++, 32-bit Learning Edition, version 6.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	In a wizard-generated application that supports Automation, you can use the Add
	Method or Add Property on the popup menu in the ClassView or in the
	ClassWizard's Automation tab dialog box to add a method or a property to a
	dispinterface. The method or the property is added to all of the dispinterfaces
	in the project's .odl file. This is incorrect. It should only be added to one
	interface.
	
	CAUSE
	=====
	
	When a dispinterface is created by either ClassWizard or the New Class from the
	ClassView, the following code skeleton is added to the project's .ODL file:
	
	    [ uuid(0C4A40A4-9B05-11D0-81EF-00AA00B92AB3) ]
	    dispinterface ITesting
	    {
	      properties:
	       // NOTE - ClassWizard will maintain property information here.
	       //    Use extreme caution when editing this section.
	       //{ {AFX_ODL_PROP(CTestingDoc)
	       //} }AFX_ODL_PROP
	
	      methods:
	       // NOTE - ClassWizard will maintain method information here.
	       //    Use extreme caution when editing this section.
	       //{ {AFX_ODL_METHOD(CTestingDoc)
	       //} }AFX_ODL_METHOD
	    };
	
	The AFX_ODL_PROP() and AFX_ODL_METHOD() in the comments are used by the
	ClassWizard to maintain method/property information. They also specify the
	object type of the dispinterface. For example, in the sample code above, the
	dispinterface ITesting is associated with CTestingDoc object. If you created a
	new dispinterface by copying and pasting an existing dispinterface without
	making any changes, ClassWizard would be confused if you tried to add a new
	method or a new property using either the ClassWizard or the popup menu's Add
	Method/Add Property. Hence, the property or the method is added to both
	interfaces.
	
	RESOLUTION
	==========
	
	To work around the problem, you can use any of the following methods:
	
	- Use ClassWizard to add a class as follows:
	
	  1. Launch the ClassWizard and click the Automation tab.
	
	  2. Click "Add Class..." and choose "New...".
	
	  3. In the New Class dialog box, type a class name and make sure its base
	     class is a CCmdTarget class or its derived classes.
	
	  4. In the Automation group, select "Createable by type ID:".
	
	  5. This creates a new class and its disinterface. The interface is appended
	     to the end of the existing .ODL file.
	
	- Use the New Class option on the popup menu in the ClassView to add a class as
	  follows:
	
	  1. In the ClassView popup menu, click "New Class".
	
	  2. Follow steps c, d and e above to create a new class and its dispinterface.
	
	- Remove the comments you copied over from an existing dispinterface. Notice if
	  the ClassWizard-required comments are deleted, you cannot add methods or
	  properties to the interface using the ClassWizard or the popup menu.
	
	STATUS
	======
	
	
	
	MORE INFORMATION
	================
	
	Steps to Reproduce Behavior
	---------------------------
	
	1. Create an AppWizard-generated application with Automation support.
	
	2. Open project's .odl file and copy the existing dispinterface, including the
	  uuid portion.
	
	3. Paste the dispinterface at the end of the .odl file.
	
	4. Change the uuid to a new unique number.
	
	5. Go to the ClassView and right-click the wizard-generated interface. This
	  should bring up the popup menu.
	
	6. Choose Add Method to add a method to the existing interface.
	
	7. Notice that the method was added to both interfaces.
	
	Additional query words: Wizard all kbvc500 kbvc600
	
	======================================================================
	Keywords          : kbtool kbwizard kbMFC kbVC kbVC500 kbVC600 kbGrpDSTools 
	Technology        : kbVCsearch kbAudDeveloper kbVC500 kbVC600 kbVC32bitSearch kbVC500Search
	Version           : 5.0 6.0
	Issue type        : kbprb
	
	=============================================================================
	
