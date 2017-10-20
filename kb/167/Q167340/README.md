---
layout: page
title: "Q167340: FIX: ATL Control Causes Access Violation In Visual Basic 5.0"
permalink: /kb/167/Q167340/
---

## Q167340: FIX: ATL Control Causes Access Violation In Visual Basic 5.0

{% raw %}

	Article: Q167340
	Product(s): Microsoft C Compiler
	Version(s): 2.0,2.1,5.0
	Operating System(s): 
	Keyword(s): kbinterop kbActiveX kbATL200bug kbATL210bug kbCOMt kbContainer kbCtrlCreate kbVBp500 kb
	Last Modified: 26-JUN-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- The Microsoft Active Template Library (ATL), versions 2.0, 2.1 
	- Microsoft Visual Basic Professional Edition for Windows, version 5.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	Insert an ActiveX control created with the Active Template Library(ATL) into
	Visual Basic 5.0. When you try to delete the control or run the Visual Basic
	program, the following error message appears:
	
	  Unhandled exception in Vb5.exe: 0xC0000005: Access Violation.
	
	CAUSE
	=====
	
	The error message is caused by a bug in Visual Basic 5.0. When an ATL control
	implements connection points and IQuickActivate, Visual Basic 5.0 causes an
	access violation if the control doesn't support IPropertyNotifySink.
	
	RESOLUTION
	==========
	
	To get around this problem, you can do one of the following:
	
	- Add the implementation of IPropertyNotifySink by deriving from
	  IPropertyNotifySinkCP and adding it to the connection point map:
	
	        // derive your control class from IPropertyNotifySinkCP
	        class CPolyCtl : public IPropertyNotifySinkCP<CPolyCtl>
	        {
	        ...
	        }
	        // add IPropertyNotifySink to the connection point map
	        BEGIN_CONNECTION_POINT_MAP(CPolyCtl)
	             CONNECTION_POINT_ENTRY(IID_IPropertyNotifySink)
	        END_CONNECTION_POINT_MAP()
	
	  -or-
	
	- Remove the implementation of IQuickActivate by removing it from the control
	  class' derivation list and COM map:
	
	        // delete these two lines
	        public IQuickActivateImpl<CPolyCtl>
	        COM_INTERFACE_ENTRY_IMPL(IQuickActivate)
	
	STATUS
	======
	
	This problem has been corrected in Visual Studio 97 Service Pack 1.
	
	For additional information about the Visual Studio 97 Service Pack 1, please see
	the following article in the Microsoft Knowledge Base:
	
	  Q170365 INFO: Visual Studio 97 Service Packs - What, Where, and Why
	
	REFERENCES
	==========
	
	This issue is also documented in VCREAD.HTM, which comes with Visual C++ version
	5.0.
	
	Additional query words:
	
	======================================================================
	Keywords          : kbinterop kbActiveX kbATL200bug kbATL210bug kbCOMt kbContainer kbCtrlCreate kbVBp500 kbVC500bug kbVS97sp1fix kbVS97sp2fix kbGrpDSMFCATL 
	Technology        : kbVBSearch kbAudDeveloper kbZNotKeyword6 kbATLsearch kbATL200 kbATL210 kbZNotKeyword2 kbVB500Search kbVB500
	Version           : :2.0,2.1,5.0
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	

{% endraw %}
