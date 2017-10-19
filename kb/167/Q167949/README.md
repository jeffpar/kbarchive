---
layout: page
title: "Q167949: FIX: OnWindowMessage Returns BOOL for HRESULT"
permalink: /kb/167/Q167949/
---

## Q167949: FIX: OnWindowMessage Returns BOOL for HRESULT

	Article: Q167949
	Product(s): Microsoft C Compiler
	Version(s): 2.0,2.1,3.0
	Operating System(s): 
	Keyword(s): kbATL200bug kbATL210bug kbATLWC kbLocalSvr kbVC500bug kbVS97sp1fix kbGrpDSMFCATL
	Last Modified: 26-JUN-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- The Microsoft Active Template Library (ATL), versions 2.0, 2.1, 3.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	ATL[ASCII 146]s IOleInPlaceObjectWindowless::OnWindowMessage implementation
	mistakenly returns a BOOL instead of an HRESULT indicating failure when it has
	actually succeeded.
	
	CAUSE
	=====
	
	IOleInPlaceObjectWindowless::OnWindowMessage should return S_OK if processed,
	otherwise S_FALSE.
	
	ATL passes on the return from value pT->ProcessWindowMessage, which returns
	TRUE if processed, otherwise FALSE.
	
	RESOLUTION
	==========
	
	Change the following line of source code in AtlCtl.h line 1829:
	
	     return pT->ProcessWindowMessage(pT->m_hWnd, msg, wParam,
	           lParam, *plResult);
	
	to:
	
	     if (pT->ProcessWindowMessage(pT->m_hWnd, msg, wParam,
	           lParam, *plResult))
	        return S_OK;
	     else
	        return S_FALSE;
	
	STATUS
	======
	
	Microsoft has confirmed this to be a bug in the Microsoft products listed at the
	beginning of this article. This bug has been corrected in Visual Studio 97
	Service Pack 1.
	
	For additional information about the Visual Studio 97 Service Pack 1, please see
	the following article in the Microsoft Knowledge Base:
	
	  Q170365 INFO: Visual Studio 97 Service Packs - What, Where, and Why
	
	(c) Microsoft Corporation 1997, All Rights Reserved. Contributions by Chuck Bell,
	Microsoft Corporation
	
	
	Additional query words: BOOL HRESULT OnWindowMessage
	
	======================================================================
	Keywords          : kbATL200bug kbATL210bug kbATLWC kbLocalSvr kbVC500bug kbVS97sp1fix kbGrpDSMFCATL 
	Technology        : kbAudDeveloper kbATLsearch kbATL200 kbATL300 kbATL210
	Version           : :2.0,2.1,3.0
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	
