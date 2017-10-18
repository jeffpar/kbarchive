---
layout: page
title: "Q111503: PRB: Error: CVW1.386 Is Not Loaded In SYSTEM.INI"
permalink: kb/111/Q111503/
---

## Q111503: PRB: Error: CVW1.386 Is Not Loaded In SYSTEM.INI

	Article: Q111503
	Product(s): Microsoft Programming Utilities
	Version(s): 4.0,4.01,4.1
	Operating System(s): 
	Keyword(s): kbCodeView kbDebug kbVC kbprb
	Last Modified: 26-JUN-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft CodeView for Windows, versions 4.0, 4.01, 4.1 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	If you attempt to start Codeview for Windows (CVW) under Windows NT, you will
	receive the following message:
	
	  CVW1.386 is not loaded in SYSTEM.INI.
	  Please reinstall CVW.
	
	This occurs even though CVW1.386 is included in the SYSTEM.INI file.
	
	CAUSE
	=====
	
	The problem is that Windows virtual device drivers (such as CVW1.386) cannot be
	loaded by Windows NT. Therefore, CodeView for Windows cannot be run under
	Windows NT.
	
	Also, Windows NT does not use the SYSTEM.INI file to load device drivers.
	Configuration information, including which drivers to load, is stored in the
	registry - a collection of binary files in the \SYSTEM32\CONFIG directory.
	
	RESOLUTION
	==========
	
	To debug 16-bit Windows applications under Windows NT, use the Visual C++ 1.5
	integrated (VWB) debugger. For debugging in the Windows or Windows for
	Workgroups (WFW) environment, you can use either the VWB debugger or CVW version
	4.1.
	
	MORE INFORMATION
	================
	
	The version of CodeView for Windows that comes with Visual C++ 1.5 (version 4.1)
	cannot be used to debug Win32s applications running on Windows or WFW 3.1. A
	special version of CVW (version 4.25) is included with the Visual C++ 32-bit
	edition 1.0 for this purpose. Note that this is not a Windows NT version of CVW
	and also cannot be run under Windows NT; it is used for debugging Win32s
	applications on Windows or WFW. Later versions of Visual C++ 32-bit edition do
	not include this CVW32s. However, you can debug 32-bit applications on Win32s
	remotely, via WinDbgRm (included with the Win32 SDK).
	
	Additional query words: 4.00 4.10
	
	======================================================================
	Keywords          : kbCodeView kbDebug kbVC kbprb 
	Technology        : kbAudDeveloper kbCodeView kbCodeView400 kbCodeView401 kbCodeView410
	Version           : :4.0,4.01,4.1
	Issue type        : kbprb
	
	=============================================================================
	
