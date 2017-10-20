---
layout: page
title: "Q145746: DOC: Technical Note 38: MFC/OLE IUnknown Implementation"
permalink: /kb/145/Q145746/
---

## Q145746: DOC: Technical Note 38: MFC/OLE IUnknown Implementation

{% raw %}

	Article: Q145746
	Product(s): Microsoft C Compiler
	Version(s): winnt:4.0
	Operating System(s): 
	Keyword(s): kbole kbdocfix kbdocerr kbActiveX kbAutomation kbCOMt kbInprocSvr kbMFC kbVC400bug kbVC
	Last Modified: 06-MAY-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- The Microsoft Foundation Classes (MFC), used with:
	   - Microsoft Visual C++, 32-bit Editions, version 4.0 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	Technical Note 38 "TN038: MFC/OLE IUnknown Implementation" contains two errors.
	First, it describes how to implement standard and custom interface functions for
	an OLE COM object using the MFC Interface Map macros, but the code is incorrect.
	Additionally, the article explains how to aggregate an object, but the code in
	the interface map is also incorrect.
	
	The problems were corrected in Visual C++ 4.1.
	
	MORE INFORMATION
	================
	
	First Code Problem
	------------------
	
	For the implementation of the interface functions, two sets of sample code are
	included, the first set is correct. The code immediately following the
	discussion of the Interface Map macros is the code in error. The code
	illustrates the implementation of the IUnknown functions and custom interface
	functions for the interface being created using the MFC Interface Maps. The
	sample code in error is as follows:
	
	     ULONG FAR EXPORT CEditPrintObj::CEditObj::AddRef()
	     {
	         METHOD_PROLOGUE(CEditPrintObj, EditObj)
	         return pThis->ExternalAddRef();
	     }
	
	     ULONG FAR EXPORT CEditPrintObj::CEditObj::Release()
	     {
	         METHOD_PROLOGUE(CEditPrintObj, EditObj)
	         return pThis->ExternalRelease();
	     }
	
	     HRESULT FAR EXPORT CEditPrintObj::CEditObj::QueryInterface(
	         REFIID iid, void FAR* FAR* ppvObj)
	     {
	         METHOD_PROLOGUE(CEditPrintObj, EditObj)
	         return (HRESULT)pThis->ExternalQueryInterface(&iid,
	                       ppvObj);
	     }
	
	     void FAR EXPORT CEditPrintObj::CEditObj::EditObject()
	     {
	         METHOD_PROLOGUE(CEditPrintObj, EditObj)
	         // code to "Edit" the object, whatever that     // means...
	     }
	
	All of the function signatures are incorrect. CEditObj should actually be
	XEditObj. The BEGIN_INTERFACE_PART and END_INTERFACE_PART macros create a nested
	class inside the object class definition, and assign a name to the nested class.
	The name of the nested class is created by prepending an X to the first argument
	of the BEGIN_INTERFACE_PART macro, which should be the name of your custom
	interface. Therefore, if you are going to implement the functions in the nested
	classes that were created for you by the BEGIN_INTERFACE_PART and
	END_INTERFACE_PART macros, the nested classes name would always begin with an X.
	This is to distinguish the nested class from global classes (which typically
	start with C) and interface classes (which typically start with I).
	
	To implement a member of the above described nested class correctly, you need to
	implement the AddRef shown above as:
	
	     ULONG FAR EXPORT CEditPrintObj::XEditObj::AddRef()
	     {
	        METHOD_PROLOGUE(CEditPrintObj, EditObj)
	        return pThis->ExternalAddRef();
	     }
	
	Second Code Problem
	-------------------
	
	The second problem is in the discussion of aggregation. In the second step, the
	instructions say, "Include an INTERFACE_AGGREGATE macro in your interface map,
	which refers to the member variable by name." However, the code doesn't do that.
	Here is the incorrect code:
	
	     BEGIN_INTERFACE_MAP(CAggrExample, CCmdTarget)
	        // native "INTERFACE_PART" entries go here
	        INTERFACE_AGGREGATE(CAggrExample, m_lpTypeInfo)
	     END_INTERFACE_MAP()
	
	The variable m_lpTypeInfo should be m_lpAggrInner. The code should look like
	this:
	
	     BEGIN_INTERFACE_MAP(CAggrExample, CCmdTarget)
	        // native "INTERFACE_PART" entries go here
	        INTERFACE_AGGREGATE(CAggrExample, m_lpAggrInner)
	     END_INTERFACE_MAP()
	
	Additional query words:
	
	======================================================================
	Keywords          : kbole kbdocfix kbdocerr kbActiveX kbAutomation kbCOMt kbInprocSvr kbMFC kbVC400bug kbVC410fix kbGrpDSMFCATL 
	Technology        : kbAudDeveloper kbMFC
	Version           : winnt:4.0
	Solution Type     : kbfix
	
	=============================================================================
	

{% endraw %}
