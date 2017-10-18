---
layout: page
title: "Q147740: HOWTO: Handling Events for ActiveX Controls in a CWnd"
permalink: kb/147/Q147740/
---

## Q147740: HOWTO: Handling Events for ActiveX Controls in a CWnd

	Article: Q147740
	Product(s): Microsoft C Compiler
	Version(s): 4.0,5.0,6.0
	Operating System(s): 
	Keyword(s): kbcode kbole kbActiveX kbCOMt kbContainer kbCtrl kbMFC kbVC400 kbVC500 kbVC600 kbGrpDSM
	Last Modified: 26-JUL-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual C++, version 4.0 
	- Microsoft Visual C++, 32-bit Enterprise Edition, versions 5.0, 6.0 
	- Microsoft Visual C++, 32-bit Professional Edition, versions 5.0, 6.0 
	- Microsoft Visual C++, 32-bit Learning Edition, version 6.0 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	ActiveX controls are most often used in MFC CDialog or CFormView derived
	classes. There are occasions that call for an ActiveX control to be a child of a
	window that is not associated with a dialog template, such as a CWnd. Adding
	event handlers for a control created as a child of a CWnd requires a slightly
	different approach than adding the same handlers for the control when placed on
	a dialog box. This article provides step-by-step instructions for adding event
	handlers to the CWnd derived class that parents the control.
	
	MORE INFORMATION
	================
	
	Step-by-Step Example
	--------------------
	
	Use the following steps to create an ActiveX control dynamically in a CWnd
	derived window. The control used here is the Circ3 control from the Circle
	Tutorial, but the approach is valid for any OLE control. After creating the
	control, handlers are created for the ClickIn and ClickOut events of Circ3.
	
	1. Create the MFC application that is to contain the ActiveX control. This
	  application must include support for ActiveX controls. The default MFC
	  Application Template project is sufficient for this article.
	
	2. Insert a new class that wraps the ActiveX control that you want to use:
	
	  a. On the Project menu, click Add Class.
	
	  b. In the Add Class dialog box, select the MFC subcategory in the left view
	     pane and then select the MFC Class From ActiveX Control template in the
	     right view pane. Click Open.
	
	  c. In the Add Class From ActiveX Control Wizard that appears next, click to
	     select the Circ3 control from the Available ActiveX controls drop-down
	     list. Alternatively, you can click to select File and then search for the
	     Circ3 .ocx file if you know its location in the file system.
	
	  d. After you have found and selected the Circ3 control, select all available
	     interfaces and then click Finish to generate the MFC ActiveX wrapper
	     classes.
	
	3. Add a new dialog resource to your project:
	
	  a. On the Project menu, click Add Resource.
	
	  b. In the Add Resource dialog box, click to select Dialog Resource, and then
	     click New.
	
	  c. In the dialog box designer editor window that appears with your new dialog
	     resource, right-click the new dialog, and then click Insert ActiveX
	     Control.
	
	  d. In the Insert ActiveX Control dialog box that appears, select the Circ3
	     control, and then click OK.
	
	4. With the dialog box open in the editor, right-click the Circ3 control that
	  was just added, and then click Add Class. In the MFC Class Wizard, type a
	  class name for your new class, and then click to select CDialog in the Base
	  class drop-down box. Click Finish.
	
	5. Go back to the dialog editor, right-click the Circ3 class that was inserted
	  earlier, and then click Add Event Handler. In the Event Handler Wizard, you
	  see the ClickIn and ClickOut message types. Click to select the ClickIn
	  message type. In the Class list, click to select the class in which you want
	  the message handler to be generated. Use the CWnd or CWnd derived class that
	  you identified earlier. After you have selected the message type and class,
	  click Add and Edit to generate the message handling code. Repeat this step
	  for each event or message you are interested in handling for this control.
	
	6. Add a CCirc3 member variable named m_circ to the CWnd derived class
	  declaration, as follows. You must include the header file of the CCirc3
	  wrapper class for this declaration:
	
	  CCirc3 m_circ;
	
	To do this in the Class View window, right-click the CWnd derived class in the
	Class View, point to Add, and then click Add Variable. In the Add Variable
	Wizard, type "CCirc3" (without the quotation marks) (or whatever class name was
	generated in step 2 by the Add ActiveX Control Wizard) as the Variable type and
	"m_circ" (without the quotation marks) as the Variable name. Type a comment if
	you want to, and then click Finish to add the member variable to your class.
	
	7. Override the Create() virtual function for the CWnd derived class. To do
	  this, click to select the CWnd derived class in the Class View window. With
	  the class selected in the Class View, click Overrides in the Properties
	  window to display the overrideable base class methods. Find the Create
	  override and then select the right-most column in the Properties window to
	  the right of and in the same row as the Create override. Click the drop-down
	  button in the rightmost column, and you have an option to add a Create
	  handler, or to jump to the Create method in the code editor if your class
	  already contains a Create override. In the handler, call the Create() method
	  of your ActiveX control wrapper class to create the Circ3 child control, as
	  follows:
	
	NOTE: If you are creating the ActiveX control in a view, you may override
	OnInitialUpdate() instead of Create().
	
	        BOOL MyCWnd::Create(LPCTSTR lpszClassName, LPCTSTR lpszWindowName,
	          DWORD dwStyle, const RECT& rect, CWnd* pParentWnd, UINT nID,
	          CCreateContext* pContext)
	        {
	        BOOL result = CWnd::Create(lpszClassName, lpszWindowName, dwStyle,
	          rect, pParentWnd, nID, pContext);
	
	        if(result != 0)   //Create the Circ3 ActiveX control.
	          result = m_circ.Create("Test", WS_VISIBLE, CRect(1,1,130, 120),
	             this, IDC_CIRC3CTRL1);
	
	        return result;
	        }
	
	IMPORTANT: Parameter 5 is the ID for the control. This ID must match the ID that
	is used in the ON_EVENT macro that is created in step 5. This is the ID of the
	Circ3 control that is created in step 3.
	
	8. After you add the necessary event handlers, you may delete the temporary
	  dialog resource from the project. After you delete the dialog resource, you
	  must add the m_circ member variable and a #define for IDC_CIRC3CTRL1, the ID
	  of the Circ3 control. You may also delete the class that you created in step
	  4, unless you used this class as the class to which you added event method
	  handlers in step 5.
	
	Optional: Another approach that is often used to add event handlers to CWnd
	derived classes is to add controls and event handlers to a dialog class, and
	then cut and paste the appropriate code into the View.h and View.cpp files,
	making modifications as necessary. Note, however, that the previous method is
	less prone to errors.
	
	REFERENCES
	==========
	
	"MFC 4.0 Helps You Contain Your OLE Controls," MSDN Nov/Dec 1995.
	
	OLE Control Containers: Using AppWizard to Create a Container Application
	
	OLE Control Containers: Programming OLE Controls in an OLE Control Container -
	Visual C++ Books Online, MFC Encyclopedia
	
	Additional query words:
	
	======================================================================
	Keywords          : kbcode kbole kbActiveX kbCOMt kbContainer kbCtrl kbMFC kbVC400 kbVC500 kbVC600 kbGrpDSMFCATL 
	Technology        : kbVCsearch kbVC400 kbAudDeveloper kbVC500 kbVC600 kbVC32bitSearch kbVC500Search
	Version           : :4.0,5.0,6.0
	Issue type        : kbhowto
	
	=============================================================================
	
