---
layout: page
title: "Q191872: PRB: Enum HelpStrings Not Displayed in Properties Window"
permalink: /kb/191/Q191872/
---

## Q191872: PRB: Enum HelpStrings Not Displayed in Properties Window

	Article: Q191872
	Product(s): Microsoft Visual Basic for Windows
	Version(s): 
	Operating System(s): 
	Keyword(s): kbGrpDSVB
	Last Modified: 11-JAN-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual Basic Learning Edition for Windows, versions 5.0, 6.0 
	- Microsoft Visual Basic Professional Edition for Windows, versions 5.0, 6.0 
	- Microsoft Visual Basic Enterprise Edition for Windows, versions 5.0, 6.0 
	- Microsoft Visual Basic Standard Edition for Windows, version 4.0 
	- Microsoft Visual Basic Professional Edition for Windows, version 4.0 
	- Microsoft Visual Basic Enterprise Edition for Windows, version 4.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	HelpStrings of Enum types in an ActiveX control developed in Visual C++ are not
	displayed in the Properties Window of Visual Basic 5.0 and 6.0. This behavior
	differs from previous versions of Visual Basic.
	
	CAUSE
	=====
	
	When an ActiveX control is developed in Visual C++, Enum types can be declared
	in the control's ODL file, and subsequently used by the control's properties.
	HelpStrings can also be associated with the members of the Enum to help define
	the property.
	
	Here is a segment of an ODL file for an ActiveX control built in MFC:
	
	     typedef enum tagLineStyleConstants
	       {
	         [helpstring("Solid")]        lsSolid      = 0,
	         [helpstring("Dash")]         lsDash       = 1,
	         [helpstring("Dot")]          lsDot        = 2,
	         [helpstring("Dash-Dot")]     lsDashDot    = 3,
	         [helpstring("Dash-Dot-Dot")] lsDashDotDot = 4,
	       } LineStyleConstants;
	     
	       ....
	     
	       properties:
	       // NOTE - ClassWizard will maintain property information here.
	       //    Use extreme caution when editing this section.
	       //{ {AFX_ODL_PROP(CEnumCtrl)
	         [id(1)] LineStyleConstants LineStyle;
	       //} }AFX_ODL_PROP
	
	When the ActiveX control has been sited on a form in Visual Basic 4.0, you can
	see that the value of the LineStyle property, when viewed from the Properties
	Window, is composed of all the HelpStrings of the Enum type. It looks similar to
	the following:
	
	  0 - Solid
	  1 - Dash
	  2 - Dot
	  3 - Dash-Dot
	  4 - Dash-Dot-Dot
	
	However, when this ActiveX control is sited on a form in Visual Basic 5.0 or 6.0,
	you can see that the value of the LineStyle property is composed of all the
	members of the Enum type rather than the HelpStrings. It looks similar to the
	following:
	
	  0 - lsSolid
	  1 - lsDash
	  2 - lsDot
	  3 - lsDashDot
	  4 - lsDashDotDot
	
	Visual Basic 5.0 or 6.0 reserve the HelpStrings for descriptive explanations of
	each Enum member when viewed in the Object Browser.
	
	RESOLUTION
	==========
	
	There are several solutions for this issue:
	
	1. Make the name of each element in your Enum types as meaningful as possible so
	  users of your control could figure out its meaning from the name.
	
	2. Implement the members of the IPerPropertyBrowsing interface, which allow
	  clients to query your control for descriptive strings for properties viewed
	  from a Property Page and Visual Basic's Properties Window.
	
	3. Create property pages for your properties. The Enum HelpStrings will be used
	  in property pages.
	
	  For additional information regarding solution 2 or 3 above, please refer to
	  the following article in the Microsoft Knowledge Base:
	
	  Q141488 SAMPLE: Using Enumerated Properties in an OLE Control
	
	STATUS
	======
	
	This behavior is by design.
	
	MORE INFORMATION
	================
	
	Steps to Build an ActiveX Control in MFC
	----------------------------------------
	
	1. Start Visual C++ 5.0 and create a new control project using the MFC ActiveX
	  ControlWizard. Name the project EnumTest, and click OK. When the wizard comes
	  up, press Finish to accept the default settings.
	
	2. From the ClassView tab, right-click on _DEnumTest and select "Add Property"
	  from the context menu. Add the name LineStyle to the dialog's External Name
	  text box, and choose long as the data type. Accept the default variable name
	  and function by click OK.
	
	3. From the Files tab, open the EnumTest.odl file and add the following inside
	  your type library, just under the importlib(STDTYPE_TLB) statement:
	
	        typedef enum tagLineStyleConstants
	         {
	           [helpstring("Solid")]        lsSolid      = 0,
	           [helpstring("Dash")]         lsDash       = 1,
	           [helpstring("Dot")]          lsDot        = 2,
	           [helpstring("Dash-Dot")]     lsDashDot    = 3,
	           [helpstring("Dash-Dot-Dot")] lsDashDotDot = 4,
	         } LineStyleConstants;
	
	4. Continue down and change the data type for the newly-added property from a
	  long to the enum type LineStyleConstants:
	
	        // NOTE - ClassWizard will maintain property information here.
	        // Use extreme caution when editing this section.
	        //{ {AFX_ODL_PROP(CEnumTestCtrl)
	           [id(1)] LineStyleConstants LineStyle;
	        //} }AFX_ODL_PROP
	
	5. Compile your control. MFC will register the control for you.
	
	Steps to Test the Control in Visual Basic
	-----------------------------------------
	
	1. Open Visual Basic and create a new Standard EXE project. Form1 is created by
	  default.
	
	2. From the Project|Components menu, add the control EnumTest.ocx to the Visual
	  Basic Toolbox.
	
	3. Add an instance of the EnumTest.ocx control to Form1.
	
	4. From the Properties window, look for the LineStyle property. You can change
	  the value of the LineStyle property from the dropdown combobox. On Visual
	  Basic 4.0, these items will be composed of the Enum type HelpStrings. On
	  Visual Basic 5.0 and Visual Basic 6.0, the member names themselves will
	  appear.
	
	Additional query words: kbDSupport kbDSD kbVBp kbVBp400 kbVBp500 kbVBp600 kbCtrlCreate kbVC500 kbWizard
	
	======================================================================
	Keywords          : kbGrpDSVB 
	Technology        : kbVBSearch kbAudDeveloper kbZNotKeyword6 kbZNotKeyword2 kbVB500Search kbVB600Search kbVBA500 kbVBA600 kbVB500 kbVB600 kbVB400Search kbVB400
	Issue type        : kbprb
	
	=============================================================================
	
