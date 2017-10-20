---
layout: page
title: "Q153580: How to Get the Type of Another OLE Control from a Custom OCX"
permalink: /kb/153/Q153580/
---

## Q153580: How to Get the Type of Another OLE Control from a Custom OCX

{% raw %}

	Article: Q153580
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
	- Microsoft Visual C++, 32-bit Professional Edition, version 4.x 
	- Microsoft Visual C++, 32-bit Enterprise Edition, version 4.x 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	The type of an OLE control is the coclass name for the OLE control as defined in
	its ODL file. For example, the type of Textbox control is TextBox, the type of
	the Data Bound Grid control from Apex is DBGrid, and so on. In Visual Basic, the
	type of an OLE Control appears to the right of the control name in the Editbox
	portion of the property browser. This article shows how the type of an OLE
	custom control can be programmatically obtained.
	
	MORE INFORMATION
	================
	
	Step-by-Step Example
	--------------------
	
	1. Create a rudimentary 32-bit OLE Control using the MFC CDK that ships with
	  Visual C++ 4.x. This article assumes that this custom OCX is called Test
	  (coclass name) and that the control class name is CTestCtrl.
	
	2. Use the Visual C++ MFC ClassWizard to add the following method to your
	  control class. The external and internal name of this method is
	  TypeOfControl. It takes a parameter of type LPDISPATCH, which is a pointer to
	  the primary IDispatch Interface of the OLE control whose Type you want to
	  find, and returns the type as a BSTR:
	
	        BSTR CTestCtrl::TypeOfControl(LPDISPATCH lpDisp)
	        {
	           // TODO: Add your dispatch handler code here
	
	           IProvideClassInfo *pProvideClassInfo;
	           LPTYPEINFO pTypeInfo;
	           BSTR bstrType = NULL;
	
	           if(lpDisp->QueryInterface(IID_IProvideClassInfo, (LPVOID *)
	              &pProvideClassInfo) ==  NOERROR)
	        {
	         if (pProvideClassInfo->GetClassInfo(&pTypeInfo) == NOERROR)
	         {
	            pTypeInfo->GetDocumentation(MEMBERID_NIL, &bstrType, NULL, NULL,
	                                        NULL);
	            pTypeInfo->Release();
	           }
	
	           pProvideClassInfo->Release();
	        }
	
	        return bstrType;
	        }
	
	3. Build the Test OLE control from Visual C++ 4.x. This automatically registers
	  the control if everything compiles properly.
	
	4. From Visual Basic 4.0 32-bit, open a new project, and add the Test OLE
	  control to the Visual Basic toolbox by choosing it from the Tools\Custom
	  Controls menu.
	
	5. Add an instance of the Test OLE control to Form1. This will be named Test1.
	
	6. Add a DBGrid control to Form1. This will be named DBGrid1.
	
	7. Add the following code to the general declarations portion of Form1:
	
	        Private Sub Form_Click()
	           Debug.Print Test1.TypeOfControl(dbgrid1.object)
	        End Sub
	
	8. Run the Visual Basic program, and click the form. You should see DBGrid
	  printed in the Debug window.
	
	Additional query words: 4.00 vb4win vb4all vbctrl
	
	======================================================================
	Keywords          :  
	Technology        : kbVCsearch kbVBSearch kbAudDeveloper kbVB400Search kbVB400 kbVB16bitSearch kbVC32bitSearch
	
	=============================================================================
	

{% endraw %}
