---
layout: page
title: "Q198017: BUG: Unexpected Error Using ATL Interface Wizard to Add Methods"
permalink: /kb/198/Q198017/
---

## Q198017: BUG: Unexpected Error Using ATL Interface Wizard to Add Methods

{% raw %}

	Article: Q198017
	Product(s): Microsoft C Compiler
	Version(s): 3.0,6.0
	Operating System(s): 
	Keyword(s): kbwizard kbAutomation kbVC600bug kbATL300bug kbGrpDSMFCATL kbCollectionClass
	Last Modified: 13-FEB-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- The Microsoft Active Template Library (ATL) 3.0, used with:
	   - Microsoft Visual C++, 32-bit Enterprise Edition, version 6.0 
	   - Microsoft Visual C++, 32-bit Professional Edition, version 6.0 
	   - Microsoft Visual C++, 32-bit Learning Edition, version 6.0 
	   - Microsoft Visual C++.NET (2002) 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	The ATL Interface Wizard with Visual C++ 6.0 displays the following error
	message:
	
	  "Unable to create the function because the header or the
	  implementation file could not be found."
	
	when adding a method that has either SAFEARRAY(oleautomationtype)" or
	"SAFEARRAY(oleautomationtype)*" as the variable type. oleautomationtype is an
	OLE automation-compatible data type.
	
	CAUSE
	=====
	
	This is due to a bug in the ATL Interface Wizard.
	
	RESOLUTION
	==========
	
	Add these methods by manually editing the .idl, .h, and .cpp files.
	
	The following shows the changes when adding two methods (called Test and Test2
	that have SAFEARRAY(BSTR)* and SAFEARRAY(BSTR), respectively) to an interface
	called IATLObj. IATLObj is implemented by an ATL class called CATLObj.
	
	1. Add this code for the new methods in the .IDL file:
	
	        interface IATLObj : IDispatch
	        {
	           [id(1)] HRESULT Test([out] SAFEARRAY(BSTR) *ppArrayBstr);
	           [id(2)] HRESULT Test2([in] SAFEARRAY(BSTR) pArrayBstr);
	        };
	
	2. Add this code to the .H file for the ATL COM object:
	
	        STDMETHOD(Test)(SAFEARRAY **ppArrayBstr);
	        STDMETHOD(Test2)(SAFEARRAY *pArrayBstr);
	
	3. And add this code to the .CPP file for the ATL COM object:
	
	        STDMETHODIMP CATLObj::Test(SAFEARRAY **ppArrayBstr)
	        {
	           return S_OK;
	        }
	
	        STDMETHODIMP CATLObj::Test2(SAFEARRAY *pArrayBstr)
	        {
	           return S_OK;
	        }
	
	STATUS
	======
	
	Microsoft has confirmed this to be a bug in the Microsoft products listed at the
	beginning of this article.
	
	MORE INFORMATION
	================
	
	Steps to Reproduce Behavior
	---------------------------
	
	1. Create a new ATL/COM Application Wizard Project.
	
	2. Insert a new ATL COM Object with the default settings.
	
	3. Add a new method with the ATL COM Object Wizard by right-clicking the
	  interface to add the method and by selecting "Add Method."
	
	4. Give the method a name.
	
	5. Add one parameter with SAFEARRAY(BSTR)* as the type For example: [out]
	  SAFEARRAY(BSTR) *pArrayBSTR. Note that when you click OK on the "Add Method
	  to Interface" dialog box, a message box appears with the error mentioned
	  above.
	
	REFERENCES
	==========
	
	For additional information, please see the following article in the Microsoft
	Knowledge Base:
	
	  Q196837 Compile Errors Result for Certain ATL Method Parameters
	
	Additional query words:
	
	======================================================================
	Keywords          : kbwizard kbAutomation kbVC600bug kbATL300bug kbGrpDSMFCATL kbCollectionClass 
	Technology        : kbVCsearch kbAudDeveloper kbATLsearch
	Version           : :3.0,6.0
	Issue type        : kbbug
	Solution Type     : kbpending
	
	=============================================================================
	

{% endraw %}
