---
layout: page
title: "Q185720: HOWTO: Provide Type Information From an MFC Automation Server"
permalink: /kb/185/Q185720/
---

## Q185720: HOWTO: Provide Type Information From an MFC Automation Server

{% raw %}

	Article: Q185720
	Product(s): Microsoft C Compiler
	Version(s): winnt:4.0,4.1,4.2,5.0,6.0
	Operating System(s): 
	Keyword(s): kbole kbnokeyword kbActiveX kbAutomation kbCOMt kbMFC kbVC400 kbVC500 kbVC600 kbGrpDSMF
	Last Modified: 17-JUL-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- The Microsoft Foundation Classes (MFC), used with:
	   - Microsoft Visual C++, 32-bit Editions, versions 4.0, 4.1 
	   - Microsoft Visual C++, 32-bit Enterprise Edition, version 4.2 
	   - Microsoft Visual C++, 32-bit Professional Edition, version 4.2 
	   - Microsoft Visual C++, 32-bit Enterprise Edition, version 5.0 
	   - Microsoft Visual C++, 32-bit Professional Edition, version 5.0 
	   - Microsoft Visual C++, 32-bit Enterprise Edition, version 6.0 
	   - Microsoft Visual C++, 32-bit Professional Edition, version 6.0 
	   - Microsoft Visual C++, 32-bit Learning Edition, version 6.0 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	This article shows how to provide access to type information from an MFC
	automation server at run time. MFC automation servers by default return
	E_NOTIMPL for IDispatch::GetTypeInfo().
	
	MORE INFORMATION
	================
	
	The automation object in the following steps refers to a CCmdTarget derived
	object with automation enabled.
	
	Step-by-Step Example
	--------------------
	
	1. Place the DECLARE_OLETYPELIB macro in the automation object's header file
	  within the class definition.
	
	2. Place the IMPLEMENT_OLETYPELIB macro in the automation object's
	  implementation file at global scope.
	
	3. Override CCmdTarget::GetDispatchIID() in your derived class, and then return
	  the IID of the primary dispatch interface.
	
	SAMPLE CODE:
	
	        // In the header file for the automation object, say CmyAutoObject.
	        virtual BOOL GetDispatchIID(IID* pIID);
	
	        // In the implementation file for CmyAutoObject.
	        BOOL CMyAutoObject::GetDispatchIID(IID* pIID)
	        {
	           *pIID = IID_IMyAutoObject;
	           return TRUE;
	        }
	
	4. Call EnableTypeLib(), in the constructor for the automation object.
	
	Make sure that the type library is registered using AfxOleRegisterTypeLib() or
	RegisterTypeLib(), or that the type library is available as a resource in the
	.dll or .exe file. For more information on how to add the type library as a
	resource, please see the following article in the Microsoft Knowledge Base:
	
	  Q122285 HOWTO: Add Type Libraries as Resources to .dll and .exe Files
	
	(c) Microsoft Corporation 1998, All Rights Reserved. Contributions by Jaganathan
	Thangavelu, Microsoft Corporation
	
	
	Additional query words: 0x80004001 [ASCII 150] 2147500033
	
	======================================================================
	Keywords          : kbole kbnokeyword kbActiveX kbAutomation kbCOMt kbMFC kbVC400 kbVC500 kbVC600 kbGrpDSMFCATL 
	Technology        : kbAudDeveloper kbMFC
	Version           : winnt:4.0,4.1,4.2,5.0,6.0
	Issue type        : kbhowto
	
	=============================================================================
	

{% endraw %}
