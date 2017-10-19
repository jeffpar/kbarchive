---
layout: page
title: "Q247273: BUG: IOleObjectImpl&lt;&gt;::DoVerb Does Not Process Positive Verbs"
permalink: /kb/247/Q247273/
---

## Q247273: BUG: IOleObjectImpl&lt;&gt;::DoVerb Does Not Process Positive Verbs

	Article: Q247273
	Product(s): Microsoft C Compiler
	Version(s): WINDOWS:2.0,2.1,3.0
	Operating System(s): 
	Keyword(s): kbActiveX kbCOMt kbCtrlCreate kbVC500bug kbVC600bug kbATL300bug kbDSupport kbGrpDSMFCAT
	Last Modified: 26-JUN-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- The Microsoft Active Template Library (ATL), versions 2.0, 2.1, 3.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	According to documentation for IOleObject::DoVerb, unknown positive verbs should
	be treated as the primary verb and OLEOBJ_S_INVALIDVERB should be returned.
	ATL's implementation of IOleObject::DoVerb does nothing for positive verbs and
	returns E_NOTIMPL.
	
	CAUSE
	=====
	
	This is a bug in the ATL implementation of IOleObject::DoVerb.
	
	RESOLUTION
	==========
	
	To correct this behavior, you can override the ATL function
	IOleObjectImpl::DoVerb. You need to override the IOleObjectImpl::DoVerb function
	for every ATL object that needs to have the correct processing for
	IOleObject::DoVerb. Because this may need to be done for more than one ATL COM
	object in your project, it is recommended that you create a new template class
	derived from IOleObjectImpl. You can use the following steps to accomplish
	this:
	
	1. Create a new header file and insert it into your ATL project. Give the header
	  file the name MyIOleObjectImpl.h.
	
	2. Open MyIOleObjectImpl.h created in step 1 and copy the following code into
	  the file:
	
	  #ifndef MYIOLEOBJECTIMPL_H
	  #define MYIOLEOBJECTIMPL_H
	
	  #include <atlctl.h>
	
	  template <class T>
	  class IMyOleObjectImpl : public IOleObjectImpl<T>
	  {
	  public:
	    STDMETHODIMP DoVerb(LONG iVerb, LPMSG pMsg, IOleClientSite* pActiveSite, LONG lindex, HWND hwndParent, LPCRECT lprcPosRect )
	    {
	       if (iVerb > 0)
	       {
	          iVerb = OLEIVERB_PRIMARY;
	          IOleObjectImpl<T>::DoVerb(iVerb, pMsg, pActiveSite,  lindex, hwndParent, lprcPosRect);
	          return  OLEOBJ_S_INVALIDVERB; 
	       }
	
	       return IOleObjectImpl<T>::DoVerb(iVerb, pMsg, pActiveSite,  lindex, hwndParent, lprcPosRect);
	    }
	  };
	
	  #endif
	
	3. Save and close MyIOleObjectImpl.h.
	
	4. Open your ATL COM object header file and add the following code before the
	  class declaration:
	
	  #include "MyIOleObjectImpl.h"
	
	5. Inside of your ATL COM object class derivation, change the existing
	  derivation from IOleObjectImpl to IMyOleObjectImpl. The code should appear
	  similar to the following:
	
	  class ATL_NO_VTABLE CATLCONTROLObj1 : 
	  // Rest of classes omitted for brevity.
	  //	public IOleObjectImpl<CATLCONTROLObj1>,
	  	public IMyOleObjectImpl<CATLCONTROLObj1>,
	  	public CComCoClass<CATLCONTROLObj1, &CLSID_ATLCONTROLObj1>
	  {
	  // Rest of code omitted for brevity.
	  };
	
	6. Save your ATL COM object header file and rebuild the project.
	
	After performing these steps, you should notice that IOleObject::DoVerb is
	implemented correctly when a positive verb is passed.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a bug in the Microsoft products listed at the
	beginning of this article.
	
	REFERENCES
	==========
	
	Please see the IOleObject::DoVerb documentation in MSDN.
	
	Additional query words:
	
	======================================================================
	Keywords          : kbActiveX kbCOMt kbCtrlCreate kbVC500bug kbVC600bug kbATL300bug kbDSupport kbGrpDSMFCATL 
	Technology        : kbAudDeveloper kbATLsearch kbATL200 kbATL300 kbATL210
	Version           : WINDOWS:2.0,2.1,3.0
	Issue type        : kbbug
	
	=============================================================================
	
