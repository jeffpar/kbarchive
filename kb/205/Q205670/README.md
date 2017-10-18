---
layout: page
title: "Q205670: HOWTO: Get Access to an ActiveX Control from its Property Page"
permalink: kb/205/Q205670/
---

## Q205670: HOWTO: Get Access to an ActiveX Control from its Property Page

	Article: Q205670
	Product(s): Microsoft C Compiler
	Version(s): 5.0,6.0
	Operating System(s): 
	Keyword(s): kbActiveX kbCOMt kbContainer kbCtrlCreate kbMFC kbPropSheet kbVC500 kbVC600 kbDSupport
	Last Modified: 26-JUL-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- The Microsoft Foundation Classes (MFC), included with:
	   - Microsoft Visual C++, 32-bit Enterprise Edition, versions 5.0, 6.0 
	   - Microsoft Visual C++, 32-bit Professional Edition, versions 5.0, 6.0 
	   - Microsoft Visual C++, 32-bit Learning Edition, version 6.0 
	   - Microsoft Visual C++.NET (2002) 
	-------------------------------------------------------------------------------
	
	
	SUMMARY
	=======
	
	When you use an ActiveX control, you may have to call member functions or gain
	access to member variables of the control class from its associated property
	pages. This article explains to do this and provides a code sample as
	illustration.
	
	MORE INFORMATION
	================
	
	A property sheet in an ActiveX control allows a user to manipulate the
	properties of a control by displaying one or more property pages. The properties
	can belong to one control or to a collection of ActiveX controls of the same
	type. The code sample demonstrates how to access the properties of a control or
	a group of selected controls from the property page of a control. It also
	demonstrates how to get direct access to the control instance.
	
	1. Generate a new MFC ActiveX control and specify the project name as MyTest.
	  Accept all of the defaults for the control when prompted.
	
	2. Add a new member function to the control. Name the function SayHello, with
	  return type void. Add the following code to it:
	
	  void CMyTestCtrl::SayHello()
	  {
	      AfxMessageBox("Hello"); //Add this statement.
	  }
	
	3. Create a property:
	
	In Visual C++ .NET:
	
	  a. Open the Class View window and then open MyTestLib (this is the node that
	     represents the IDL file for the project).
	
	  b. Right-click the subnode for the default dispinterface (_DMyTest), Add, and
	     then click Add Property.
	
	  c. In the Add Property Wizard, set the property type to LONG and the property
	     name to ControlPointer. For Implementation, click to select Get/Set
	     methods.
	
	  d. Click Finish to generate the property.
	
	In earlier versions of Visual C++:
	
	  a. Click the Automation tab in the MFC ClassWizard dialog box, and then add a
	     new property for the control of type LONG.
	
	  b. Set the External name field to ControlPointer, select Get/Set methods for
	     Implementation, and then accept the rest of the settings.
	
	4. Use the following code for the generated ControlPointer property methods:
	
	  long CMyTestCtrl::GetControlPointer() 
	  {
	      return reinterpret_cast<long>(this);
	  }
	
	  void CMyTestCtrl::SetControlPointer(long /*nNewValue*/) 
	  {
	      SetNotSupported();
	  }
	
	5. Build the project to make the type library before proceeding.
	
	6. Generate automation wrappers for the control:
	
	In Visual C++ .NET:
	
	  a. On the Project menu, click Add Class Project.
	
	  b. In the Add Class dialog box, click to select MFC Class from Typelib, and
	     then click OK.
	
	  c. In the Add Class From Typelib Wizard, locate Add class from, and then
	     click to select File.
	
	  d. Find the .tlb file that was generated for the control. The file is located
	     in the Debug directory and is named MyTest.tlb. Use the selection arrows
	     to move only the _DMyTest interface into the Generated classes pane.
	
	NOTE: You must now change the Generated Classes class from the default CDMyTest
	to _DMyTest. This also changes the generated class names for the wrappers. The
	wizard prepends a 'C' to the generated wrapper classes, which may cause problems
	when you use some type libraries. Changing names is necessary for this type
	library to make the code match between Visual C++ .NET and earlier versions.
	
	  e. Click Finish to generate the wrapper header files.
	
	In earlier versions of Visual C++:
	
	  a. Click the Automation tab in the Class Wizard, click Add class, and then
	     click From a type library.
	
	  b. Find the .tlb file that was generated for the control. It is located in
	     the Debug directory and is named MyTest.tlb.
	
	  c. Select only the _DMyTest interface and click OK. The event interface is
	     not needed.
	
	7. Using the resource editor, add a button to the property page. Change the
	  caption to Access all selected controls.
	
	8. Add the control's header file after the other includes in the property page
	  source file:
	
	      #include "MyTestCtl.h"
	
	9. Add a button click handler for the button by using the Class Wizard.
	
	10. Add the following code in the button click handler function:
	
	      void CMyTestPropPage::OnButton1() 
	      {
	          // Add this code:
	          ULONG uNumControls;
	
	          // Get the array of IDispatchs stored in the property page.
	          LPDISPATCH *lpDispatchControls = GetObjectArray(&uNumControls);
	   
	          for (ULONG i = 0; i < uNumControls; i++)
	          {
	            CMyTestCtrl *pMyCtrl = GetControl(lpDispatchControls, i);
	            if (pMyCtrl)
	               pMyCtrl->SayHello();
	          }
	      }
	
	11. Add the following global code method before the button click handler
	  function:
	
	      CMyTestCtrl* GetControl(LPDISPATCH *lpDispatchControls, ULONG iControlIndex)
	      {
	          CMyTestCtrl *pMyCtrl = NULL; 
	
	          // Get the CCmdTarget object associated.
	          pMyCtrl = (CMyTestCtrl*) CCmdTarget::FromIDispatch(lpDispatchControls[iControlIndex]);
	
	          if (!pMyCtrl) // Above failed. Container must have aggregated the control.
	          {
	             long ControlPointer;
	
	             _DMyTest control(lpDispatchControls[iControlIndex]);           
	
	             // GetObjectArray() docs state must not release pointer.
	             control.m_bAutoRelease = FALSE;
	             ControlPointer = control.GetControlPointer();
	
	             pMyCtrl = reinterpret_cast<CMyTestCtrl*>(ControlPointer);
	          }
	
	          return pMyCtrl;
	      }
	
	12. Build the project.
	
	13. Test the project in Visual C++ ActiveX Test Container.
	
	You see the message box when you click the Access all selected controls button on
	the property page.
	
	REFERENCES
	==========
	
	For additional information, click the article number below to view the article
	in the Microsoft Knowledge Base:
	
	  Q143432 HOWTO: Gain Access to an ActiveX Control from its Property Page
	
	Additional query words: property
	
	======================================================================
	Keywords          : kbActiveX kbCOMt kbContainer kbCtrlCreate kbMFC kbPropSheet kbVC500 kbVC600 kbDSupport kbGrpDSMFCATL 
	Technology        : kbAudDeveloper kbMFC
	Version           : :5.0,6.0
	Issue type        : kbhowto
	
	=============================================================================
	
