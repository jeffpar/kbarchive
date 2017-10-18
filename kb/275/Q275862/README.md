---
layout: page
title: "Q275862: HOWTO: Add Verbs for ATL ActiveX Controls Embedded Within Office"
permalink: kb/275/Q275862/
---

## Q275862: HOWTO: Add Verbs for ATL ActiveX Controls Embedded Within Office

	Article: Q275862
	Product(s): Microsoft C Compiler
	Version(s): 3.0,6.0
	Operating System(s): 
	Keyword(s): kbATL kbCtrl kbVC600 kbATL300 kbDSupport kbGrpDSMFCATL
	Last Modified: 12-JUN-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- The Microsoft Active Template Library (ATL) 3.0, included with:
	   - Microsoft Visual C++, 32-bit Editions, version 6.0 
	   - Microsoft Visual C++.NET (2002) 
	-------------------------------------------------------------------------------
	
	NOTE: Microsoft Visual C++ NET (2002) supported both the managed code model that is provided by the .NET Framework and the unmanaged native Windows code model. The information in this article applies to unmanaged Visual C++ code only.
	
	SUMMARY
	=======
	
	When embedded in a Microsoft Office application, some ActiveX controls add
	custom menu items (verbs) to the context menu. MFC controls automatically add
	Edit and Properties menu items, for example. An ATL control does not do this.
	This article explains how to add this feature for ATL controls.
	
	MORE INFORMATION
	================
	
	The ATL CIRC sample essentially shows how to do this, but there is a small
	problem. The options are added as verb entries in the .rgs file, and OnDoVerb is
	overridden to take action based on the iVerb parameter, which is actually the
	menu option selected, or to do default processing. Unfortunately, the CIRC
	sample sets up the menu options as "1" and "2", which works fine in Microsoft
	PowerPoint, but not in Microsoft Word. The correct setup for the menu options is
	0-based, so the verb entries in the .rgs file should look like this:
	
	   'verb'
	   {
	       '0' = s '&CircProps,0,2'
	       '1' = s '&Activate,0,2'
	   }
	
	Then, the OnDoVerb override can be written as follows:
	
	  STDMETHOD(DoVerb)(LONG iVerb,LPMSG lpmsg, IOleClientSite *pActiveSite,
	                    LONG lindex, HWND hwndParent, LPCRECT lprcPosRect)
	  {
	      if (iVerb == 0)
	          return IOleObjectImpl<CCircCtl>::DoVerb(OLEIVERB_PROPERTIES,
	                                         lpmsg, pActiveSite, lindex,
	                                         hwndParent, lprcPosRect);
	      if (iVerb == 1)
	          return IOleObjectImpl<CCircCtl>::DoVerb(OLEIVERB_SHOW, lpmsg,
	                                         pActiveSite, lindex,
	                                         hwndParent, lprcPosRect);
	      return IOleObjectImpl<CCircCtl>::DoVerb(iVerb, lpmsg, pActiveSite,
	                              lindex, hwndParent, lprcPosRect);
	  }
	
	REFERENCES
	==========
	
	The ATL Circ sample is located in the ATL samples folder on the MSDN Library
	CD-ROM. A link is provided on the documentation page for the sample, titled
	"CIRC: Demonstrates Using Property Pages". It is also available on the MSDN
	Online Web site:
	
	  http://msdn.microsoft.com/library/devprods/vs6/visualc/vcsample/_sample_atl_circ.htm
	
	For more information on implementing the DoVerb method of IOleObject, see the
	documentation page IOleObject::DoVerb in the Platform SDK Documentation. The
	OLEIVERB_XXX enumerations are explained here (except OLEIVERB_PROPERTIES). All
	other enumerations are defined in ole2.h; OLEIVERB_PROPERTIES is defined
	separately in olectl.h.
	
	Platform SDK Documentation, Verb Registry Entry:
	
	  http://msdn.microsoft.com/library/psdk/com/reg_74rm.htm
	
	Additional query words: OLEIVERB_PROPERTIES DoVerb Circ
	
	======================================================================
	Keywords          : kbATL kbCtrl kbVC600 kbATL300 kbDSupport kbGrpDSMFCATL 
	Technology        : kbVCsearch kbAudDeveloper kbATLsearch kbVCNET
	Version           : :3.0,6.0
	Issue type        : kbhowto
	
	=============================================================================
	
