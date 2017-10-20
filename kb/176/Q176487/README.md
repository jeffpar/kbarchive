---
layout: page
title: "Q176487: PRB: C2065 Error Occurs on GetWrapperWindow or Other Symbols"
permalink: /kb/176/Q176487/
---

## Q176487: PRB: C2065 Error Occurs on GetWrapperWindow or Other Symbols

{% raw %}

	Article: Q176487
	Product(s): Microsoft C Compiler
	Version(s): MACINTOSH:4.0,4.0b
	Operating System(s): 
	Keyword(s): kberrmsg kbHWMAC kbMFC kbVC kbGrpDSMFCATL
	Last Modified: 17-JUL-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual C++, Macintosh Cross-Development Addon, versions 4.0, 4.0b 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When using a function or a symbol dependent upon the Macintosh Operating System
	headers, the following error message may appear:
	
	  error C2065: 'GetWrapperWindow' : undeclared identifier
	
	CAUSE
	=====
	
	The native Macintosh header, MACOS\WINDOWS.H (or others), was not included
	before the Winwlm.h file.
	
	RESOLUTION
	==========
	
	Include the required header (macos/windows.h for GetWrapperWindow) before
	including Winwlm.h for MFC applications. Winwlm.h is included in the Afxwin.h
	file. For example:
	
	    #include <macname1.h>
	    #include <macos/windows.h>
	    #include <macname2.h>
	
	    #include <afxwin.h>
	
	STATUS
	======
	
	This behavior is by design.
	
	MORE INFORMATION
	================
	
	When targeting applications for the Macintosh platform, the Winwlm.h header file
	is pulled in the default WLM libraries and declares many symbols needed to use
	Macintosh specific objects from a Windows application. For example,
	GetWrapperWindow returns the Macintosh window data structure WindowRef
	underlying the given the Windows HWND.
	
	This header file may be included in applications manually or automatically pulled
	in when building MFC applications through the Afxwin.h header file. For
	example:
	
	    afxwin.h
	      afx.h
	        afxver_.h
	          afxv_w32.h
	            windows.h // for Macintosh targets this is mac/include/windows.h
	              winwlm.h // where GetWrapperWindow, and so on, are prototyped
	                macname2.h // 
	
	However, the Winwlm.h file excludes many symbols if certain native Macintosh
	header files are not previously included. For example, GetWrapperWindow is
	defined if MACOS\Windows.h is included beforehand. This behavior occurs because
	GetWrapperWindow, along with other symbols, is in a section dependent upon
	__WINDOWS__ being defined. MACOS\Windows.h defines __WINDOWS__ .
	
	Below is a list of some of the more commonly-used symbols and the required header
	file. The header file must be included before Winwlm.h or Afxwin.h and
	surrounded by the inclusion Macname1.h and Macname2.h. For example:
	
	Symbol                       Include
	------                       ----------------
	CFragConnectionID            macos/codefrag.h //__CODEFRAGMENTS__
	CFragInitBlockPtr
	WlmInit
	WlmTerm
	WrapInstance
	UnwrapInstance
	GetMacInstanceInformation
	MenuRef                      macos/menus.h //__MENUS__
	WlmInitEx
	CheckoutMenu
	WrapMenu
	UnwrapMenu
	UpdateMenuBar
	WindowRef                    macos/windows.h //__WINDOWS__
	ActivateForeignWindow
	GetWindowWrapper
	GetWrapperWindow
	GetWrapperContainerWindow
	WrapWindow
	WrapWindowMinimal
	UnwrapWindow
	DialogRef                    macos/dialogs.h //__DIALOGS__
	AfxGetNextEvent              macos/events.h //__EVENTS__
	AfxWaitNextEvent
	AfxEventAvail
	AfxGetOSEvent
	AfxOSEventAvail
	GrafPortToClient             macos/types.h //__TYPES__
	
	If these header files are not included, the following error messages are
	generated:
	
	  error C2065: 'GetWrapperWindow' : undeclared identifier
	  error C2064: term does not evaluate to a function
	
	If the following errors occur after including these headers
	
	  warning C4003: not enough actual parameters for macro 'GetItem'
	  error C2059: syntax error : ','
	  warning C4003: not enough actual parameters for macro 'SetItem'
	  error C2059: syntax error : ','
	  ...
	
	it is because the Afxcmn.h header file was included later. The Afxcmn.h header
	file contains GetItem and SetItem member functions of several MFC classes that
	conflict with the ones defined in MACOS\Menus.h. For example:
	
	     // macos/Menus.h
	     #if OLDROUTINENAMES
	     ...
	     #define SetItem(theMenu, item, itemString) SetMenuItemText(theMenu,
	     item, itemString)
	     #define GetItem(theMenu, item, itemString) GetMenuItemText(theMenu,
	     item, itemString)
	     ...
	     #endif // OLDROUTINENAMES
	
	The workaround is to define OLDROUTINENAMES as 0. Below is an example of a
	typical MFC project's Stdafx.h file. This project uses the common controls. For
	example:
	
	     #define VC_EXTRALEAN   // Exclude rarely-used stuff from Windows headers
	
	     #include <macname1.h>
	     #define OLDROUTINENAMES 0
	     #include <macos/windows.h>
	     #include <macname2.h>
	
	     #include <afxwin.h>  // includes Winwlm.h
	     #include <afxext.h>
	     #include <afxcmn.h>
	
	REFERENCES
	==========
	
	Books Online
	
	(c) Microsoft Corporation 1997, All Rights Reserved. Contributions by Adam Kim,
	Microsoft Corporation
	
	
	Additional query words:
	
	======================================================================
	Keywords          : kberrmsg kbHWMAC kbMFC kbVC kbGrpDSMFCATL 
	Technology        : kbVCsearch kbHWMAC kbOSMAC kbAudDeveloper kbVCXDev400Mac kbVCXDev400bMac
	Version           : MACINTOSH:4.0,4.0b
	Issue type        : kbprb
	
	=============================================================================
	

{% endraw %}
