---
layout: page
title: "Q153581: HOWTO: Implement the Type Property of a Custom OLE Control"
permalink: /kb/153/Q153581/
---

## Q153581: HOWTO: Implement the Type Property of a Custom OLE Control

{% raw %}

	Article: Q153581
	Product(s): Microsoft Visual Basic for Windows
	Version(s): 
	Operating System(s): 
	Keyword(s): 
	Last Modified: 05-MAY-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual Basic Standard Edition, 32-bit, for Windows, version 4.0 
	- Microsoft Visual Basic Professional Edition, 16-bit, for Windows, version 4.0 
	- Microsoft Visual Basic Professional Edition, 32-bit, for Windows, version 4.0 
	- Microsoft Visual Basic Enterprise Edition, 16-bit, for Windows, version 4.0 
	- Microsoft Visual Basic Enterprise Edition, 32-bit, for Windows, version 4.0 
	- Microsoft Visual C++, 32-bit Enterprise Edition, version 4.x 
	- Microsoft Visual C++, 32-bit Professional Edition, version 4.x 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	The type of an OLE control is the coclass name for the OLE control as defined in
	its ODL file. For example, the type of Textbox control is TextBox, the type of
	the Data Bound Grid control from Apex is DBGrid, and so on. In Visual Basic, the
	type of an OLE Control appears to the right of the control name in the Editbox
	portion of the property browser. This article shows how you can implement a
	custom Type property for a custom OLE control that returns its type.
	
	MORE INFORMATION
	================
	
	Step-by-Step Example
	--------------------
	
	1. Create a rudimentary 32-bit OLE Control using the MFC CDK that ships with
	  Visual C++ 4.x. This article assumes that this custom OCX is called Test
	  (coclass name) and that the control class name is CTestCtrl.
	
	2. Use the Visual C++ MFC ClassWizard to add the following Property to your
	  control class. The external name of this Property is Type. It is implemented
	  as a Get method only (called GetControlType), so it is a read-only property.
	  It takes no parameters and returns the type as a BSTR. The implementation of
	  this Get method calls an internal private member function of the control
	  class called GetCtrlType() that does all the work.
	
	  You will also need to add a protected member variable m_bstrType (to actually
	  hold the type name as a BSTR) and a protected member function GetCtrlType()
	  to the control class in the header file as follows:
	
	        Class CTestControl::COleControl
	           {
	            .
	            .
	            .
	
	            protected:
	            BSTR m_bstrType;
	            BSTR GetCtrlType (void);
	            }
	
	3. Add the following code to the implementation file (.CPP) of the control
	  class:
	
	  ////////////////////////////////////////////////////////////////////// 
	        // CTestCtrl::CTestCtrl - Constructor
	
	        CTestCtrl::CTestCtrl()
	        {
	           InitializeIIDs(&IID_DTest, &IID_DTestEvents);
	
	           // TODO: Initialize your control's instance data here.
	
	           m_bstrType = NULL;
	
	           .
	           .
	           .
	         }
	
	  ////////////////////////////////////////////////////////////////////// 
	        // CTestCtrl::~CTestCtrl - Destructor
	
	        CTestCtrl::~CTestCtrl()
	        {
	           // TODO: Cleanup your control's instance data here.
	
	           if (m_bstrType)
	              SysFreeString(m_bstrType);
	
	           .
	           .
	           .
	         }
	
	         BSTR CTestCtrl::GetCtrlType (void)
	         {
	
	             IProvideClassInfo *pProvideClassInfo;
	             LPTYPEINFO pTypeInfo;
	
	             if(GetIDispatch(FALSE)->QueryInterface(IID_IProvideClassInfo,
	               (LPVOID   *)&pProvideClassInfo) ==  NOERROR)
	            {
	               if (pProvideClassInfo->GetClassInfo(&pTypeInfo) == NOERROR)
	               {
	                  if (m_bstrType)
	                     SysFreeString(m_bstrType);
	
	                  pTypeInfo->GetDocumentation(MEMBERID_NIL, &m_bstrType,
	                                              NULL, NULL, NULL);
	                  pTypeInfo->Release();
	               }
	
	               pProvideClassInfo->Release();
	            }
	
	            return m_bstrType;
	         }
	
	         BSTR CTestCtrl::GetControlType()
	         {
	            CString strResult;
	            // TODO: Add your property handler here
	
	            strResult = GetCtrlType();
	            return strResult.AllocSysString();
	         }
	
	4. Build the Test OLE control from Visual C++ 4.x, which should automatically
	  register the control if everything compiles properly.
	
	5. From Visual Basic 4.0 32-bit, open a new project, and add the Test OLE
	  control to the Visual Basic toolbox by choosing it from the Tools Custom
	  Controls menu.
	
	6. Add an instance of the Test OLE control to Form1. This will be named Test1.
	
	7. Add the following code to the general declarations portion of Form1:
	
	     Private Sub Form_Click()
	        Debug.Print Test1.Type
	     End Sub
	
	8. Run the Visual Basic program, and click the form. You should see Test printed
	  in the Debug window
	
	Additional query words: 4.00 vb4win vb4all vbctrl
	
	======================================================================
	Keywords          :  
	Technology        : kbVCsearch kbVBSearch kbAudDeveloper kbVB400Search kbVB400 kbVB16bitSearch kbVC32bitSearch
	Issue type        : kbhowto
	
	=============================================================================
	

{% endraw %}
