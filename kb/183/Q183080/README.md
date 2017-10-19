---
layout: page
title: "Q183080: HOWTO: Use ON_EVENT_RANGE Macro"
permalink: /kb/183/Q183080/
---

## Q183080: HOWTO: Use ON_EVENT_RANGE Macro

	Article: Q183080
	Product(s): Microsoft C Compiler
	Version(s): winnt:5.0,6.0
	Operating System(s): 
	Keyword(s): kbole kbActiveX kbCOMt kbCtrl kbMFC kbVC500 kbVC600 kbGrpDSMFCATL
	Last Modified: 17-JUL-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- The Microsoft Foundation Classes (MFC), used with:
	   - Microsoft Visual C++, 32-bit Enterprise Edition, version 5.0 
	   - Microsoft Visual C++, 32-bit Professional Edition, version 5.0 
	   - Microsoft Visual C++, 32-bit Enterprise Edition, version 6.0 
	   - Microsoft Visual C++, 32-bit Professional Edition, version 6.0 
	   - Microsoft Visual C++, 32-bit Learning Edition, version 6.0 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	The following is copied from the Visual C++ online documentation regarding the
	usage of the ON_EVENT_RANGE macro:
	
	  PfnHandler Pointer to a member function that handles the event. This function
	  should have a BOOL return type, a first parameter of type UINT (for the
	  control ID), and additional parameter types that match the event's parameters
	  (see vtsParams). The function should return TRUE to indicate the event was
	  handled; otherwise FALSE.
	
	  VtsParams A sequence of VTS_ constants that specifies the types of the
	  parameters for the event. The first constant should be of type VTS_I4, for
	  the control ID. These are the same constants that are used in dispatch map
	  entries such as DISP_FUNCTION.
	
	  The vtsParams argument is a space-separated list of values from the VTS_
	  constants. One or more of these values separated by spaces (not commas)
	  specifies the function's parameter list. For example:
	
	  VTS_I2 VTS_BOOL specifies a list containing a short integer followed by a
	  BOOL.
	
	According to this specification, the pfnHandler should have at least one
	parameter. In addition, the first parameter must be a UINT data type for the
	control ID. Therefore, the first VTS_ constant for vtsParams must be VTS_I4
	(UINT data type).
	
	If pfnHandler has some additional parameters besides the UINT of the control ID,
	then each VTS_ constant for vtsParams after VTS_I4 must match the data types of
	these additional parameters of pfnHandler.
	
	To better illustrate the usage of the ON_EVENT_RANGE macro, a simple sample is
	shown below.
	
	MORE INFORMATION
	================
	
	The sample code below illustrates the use of the ON_EVENT_RANGE() macro in an
	MFC dialog-based application. CTestDlg is a CDialog-derived class. In the sample
	code below, TestOnProblem is the pfnHandler and it has two parameters: a control
	ID of type UINT and an additional parameter of type short. Thus, vtsParams
	should be:
	
	     VTS_I4 VTS_I2
	
	VTS_I4 and VTS_I2 match the data type of the first and second parameters of
	TestOnProblem(), respectively.
	
	For instance, the function prototype for pfnHandler is below:
	
	     BOOL CTestDlg::TestOnProblem(UINT CtrlID, short Param)
	     {
	        TRACE("control id = %u, Second parameter = %d\n", CtrlID, Param);
	        return TRUE;  // returns TRUE to indicate the event was handled;
	     }
	
	Then, the event map should look similar to the following:
	
	     BEGIN_EVENTSINK_MAP(CTestDlg, CDialog)
	         //{ {AFX_EVENTSINK_MAP(CTestDlg)
	         //} }AFX_EVENTSINK_MAP
	         ON_EVENT_RANGE(
	             CTestDlg,      // Class to which this event sink map belongs.
	             IDC_FIRSTCTRL, // ID of the first control in the range.
	             IDC_LASTCTRL,  // ID of the last control in the range.
	             1,             // Dispatch ID of event fired by the control.
	             TestOnProblem, // Function for handling events.
	             VTS_I4 VTS_I2) // VTS_I4 and VTS_I2 are the first and second
	                            // parameters of TestOnProblem() function.
	     END_EVENTSINK_MAP()
	
	It is important to note that ON_EVENT_RANGE must be added outside of
	ClassWizard's comment ("//") lines. Otherwise, ClassWizard will give you an
	error message box whenever you open the dialog box resource template. This is
	because ClassWizard doesn't recognize the syntax of the ON_EVENT_RANGE macro.
	
	Also, make sure the controls whose events are being handled have IDs within the
	contiguous range of IDs listed in ON_EVENT_RANGE. Check the Ids by clicking View
	on the Resource Symbols toolbar in Visual C++ 5.0. Note that the IDs of the
	controls may be different than expected, depending on the order in which they
	were created on the dialog box template.
	
	Although one can't create an ON_EVENT_RANGE handler using ClassWizard, it is
	possible to create an ON_EVENT handler using ClassWizard. Please be aware that
	in creating an ON_EVENT handler using ClassWizard, the return type of the
	handler created may be void. This is a bug in ClassWizard. The documentation for
	both ON_EVENT and ON_EVENT_RANGE is still correct when it says "This function
	should have a BOOL return type." Returning void usually works correctly,
	however, so this is not a big problem.
	
	(c) Microsoft Corporation 1998, All Rights Reserved. Contributions by Yeong- Kah
	Tam, Microsoft Corporation.
	
	
	Additional query words: event sink ocx map
	
	======================================================================
	Keywords          : kbole kbActiveX kbCOMt kbCtrl kbMFC kbVC500 kbVC600 kbGrpDSMFCATL 
	Technology        : kbAudDeveloper kbMFC
	Version           : winnt:5.0,6.0
	Issue type        : kbhowto
	
	=============================================================================
	
