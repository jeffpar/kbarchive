---
layout: page
title: "Q146120: HOWTO: Use an OLE Control as an Automation Server"
permalink: /kb/146/Q146120/
---

## Q146120: HOWTO: Use an OLE Control as an Automation Server

{% raw %}

	Article: Q146120
	Product(s): Microsoft C Compiler
	Version(s): 4.0,4.1,4.2,5.0,6.0
	Operating System(s): 
	Keyword(s): kbcode kbActiveX kbAutomation kbCOMt kbCtrlCreate kbInprocSvr kbMFC kbVC400 kbVC500 kbV
	Last Modified: 12-JUN-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- The Microsoft Foundation Classes (MFC), used with:
	   - Microsoft Visual C++, 32-bit Editions, versions 4.0, 4.1 
	   - Microsoft Visual C++, 32-bit Enterprise Edition, versions 4.2, 5.0, 6.0 
	   - Microsoft Visual C++, 32-bit Professional Edition, versions 4.2, 5.0, 6.0 
	   - Microsoft Visual C++, 32-bit Learning Edition, version 6.0 
	   - Microsoft Visual C++.NET (2002) 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	In situations where an OLE container doesn't support control containment, you
	may want to use an OLE control as an automation server to gain access to its
	properties and methods. This article explains the necessary modifications you
	need to make in order for an OLE control to function as a normal automation
	server.
	
	MORE INFORMATION
	================
	
	Prior to Visual C++ 4.0, an OLE Control could be used as an automation server
	without any modification. However, in MFC 4.0, the framework's implementation of
	IDispatch::Invoke calls the virtual function IsInvokeAllowed to determine if an
	automation server is in the appropriate state to handle automation calls. The
	default implementation in CCmdTarget::IsInvokeAllowed returns TRUE, implying
	that a server can handle automation calls.
	
	In the case of an OLE control, COleControl::IsInvokeAllowed checks to see if the
	control has been either initialized or loaded properly through the persistent
	storage interfaces. If the control has the appropriate state information, then
	this function returns TRUE. When an OLE control is created as a normal
	automation server, it is not created as an embedding in the client. Hence, none
	of the persistent state initialization will take place, which thereby causes
	IsInvokeAllowed to return FALSE. The effect of this is that a call to an
	automation object method generates a run-time error of (8000ffff) :
	"Catastrophic failure".
	
	In order to use an OLE control only as an automation server, you need to override
	COleControl::IsInvokeAllowed() and return TRUE. If any of the control's
	properties and methods should not be accessed when invoked as a normal
	automation server, then that automation function could be bypassed and/or an
	error code can be returned when COleControl::m_bInitialized is FALSE.
	
	Sample Code
	-----------
	
	     BOOL CMyOleControl::IsInvokeAllowed (DISPID)
	     {
	        // You can check to see if COleControl::m_bInitialized is FALSE
	       // in your automation functions to limit access.
	       return TRUE;
	     }
	
	Additional query words: ocx OLE Automation error
	
	======================================================================
	Keywords          : kbcode kbActiveX kbAutomation kbCOMt kbCtrlCreate kbInprocSvr kbMFC kbVC400 kbVC500 kbVC600 kbGrpDSMFCATL 
	Technology        : kbAudDeveloper kbMFC kbVCNET
	Version           : :4.0,4.1,4.2,5.0,6.0
	Issue type        : kbhowto
	
	=============================================================================
	

{% endraw %}
