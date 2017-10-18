---
layout: page
title: "Q192354: PRB: Error Saving a Form With ATL Control"
permalink: kb/192/Q192354/
---

## Q192354: PRB: Error Saving a Form With ATL Control

	Article: Q192354
	Product(s): Microsoft Visual Basic for Windows
	Version(s): WINDOWS:5.0,6.0; winnt:5.0,6.0
	Operating System(s): 
	Keyword(s): kberrmsg kbActiveX kbATL kbCOMt kbVBp500 kbVBp600 kbVC500 kbVC600 kbGrpDSVB
	Last Modified: 07-MAY-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual Basic Learning Edition for Windows, versions 5.0, 6.0 
	- Microsoft Visual Basic Professional Edition for Windows, versions 5.0, 6.0 
	- Microsoft Visual Basic Enterprise Edition for Windows, versions 5.0, 6.0 
	- Microsoft Visual C++, 32-bit Enterprise Edition, versions 5.0, 6.0 
	- Microsoft Visual C++, 32-bit Professional Edition, versions 5.0, 6.0 
	- Microsoft Visual C++, 32-bit Learning Edition, version 6.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	A control created with the Microsoft Active Template Library (ATL) using the ATL
	COM AppWizard works properly in Visual C++. It also functions in Visual Basic,
	except when you try to save the Visual Basic project, you might get the
	following error message:
	
	  System Error &H80070057 (-2147024809): The parameter is incorrect.
	
	CAUSE
	=====
	
	When Visual Basic saves a form, it saves the persistent properties of all the
	controls on the form using a PropertyBag. The error message mentioned above
	means that Visual Basic detects an incorrect property name specified by the
	control.
	
	RESOLUTION
	==========
	
	Use correct property names in the PROP_ENTRY macro of your ATL control. Visual
	Basic does not support blank spaces in the string names of properties, so your
	property names should avoid embedded spaces.
	
	STATUS
	======
	
	This behavior is by design.
	
	MORE INFORMATION
	================
	
	Steps to Reproduce Behavior
	---------------------------
	
	1. Use the ATLBUTTON sample that ships with Visual Studio to reproduce the
	  error. Go to your Visual Studio CD-ROM and copy the sample files from the
	  \DEVSTUDIO\VC\Sample\Atl\ATLBUTTON directory to your hard drive.
	
	2. Build the sample with Visual C++. The control is automatically registered.
	
	3. Now start Visual Basic and create a Standard EXE project. Form1 is created by
	  default.
	
	4. Choose Components from the Project menu and add the ATLBUTTON control to the
	  control ToolBox by selecting ATLBUTTON and clicking OK.
	
	5. Add an instance of the control to Form1.
	
	6. Save the project. You should get an error message.
	
	Steps to Solve the problem
	--------------------------
	
	1. Open the file AtlButton.h and change the following section:
	
	        BEGIN_PROPERTY_MAP(CAtlButton)
	           PROP_ENTRY("Static Image", 0, CLSID_NULL)
	           PROP_ENTRY("Hover Image", 1, CLSID_NULL)
	           PROP_ENTRY("Push Image", 2, CLSID_NULL)
	        END_PROPERTY_MAP()
	
	  to:
	
	        BEGIN_PROPERTY_MAP(CAtlButton)
	           PROP_ENTRY("StaticImage", 0, CLSID_NULL)
	           PROP_ENTRY("HoverImage", 1, CLSID_NULL)
	           PROP_ENTRY("PushImage", 2, CLSID_NULL)
	        END_PROPERTY_MAP()
	
	  That is, delete all spaces in the property names.
	
	2. Rebuild the ATL project and repeat steps 3 - 6 above. This time it works
	  correctly.
	
	Additional query words:
	
	======================================================================
	Keywords          : kberrmsg kbActiveX kbATL kbCOMt kbVBp500 kbVBp600 kbVC500 kbVC600 kbGrpDSVB 
	Technology        : kbVCsearch kbVBSearch kbAudDeveloper kbZNotKeyword6 kbZNotKeyword2 kbVB500Search kbVB600Search kbVB500 kbVB600 kbVC500 kbVC600 kbVC32bitSearch kbVC500Search
	Version           : WINDOWS:5.0,6.0; winnt:5.0,6.0
	Issue type        : kbprb
	
	=============================================================================
	
