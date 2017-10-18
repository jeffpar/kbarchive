---
layout: page
title: "Q111013: FIX: DDE Warning Message: Invalid Value: -32767"
permalink: kb/111/Q111013/
---

## Q111013: FIX: DDE Warning Message: Invalid Value: -32767

	Article: Q111013
	Product(s): Microsoft Windows Software Development Kit
	Version(s): WINDOWS:3.1
	Operating System(s): 
	Keyword(s): 
	Last Modified: 06-NOV-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows Software Development Kit (SDK) 3.1 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When executing a call to DdeClientTransaction() from a Microsoft Foundation
	Class (MFC) Library application in the debug version of Windows 3.1, the
	following warning message is displayed in the debug monitor:
	
	  wn CLIENTAPP CallNextHookEx + 2C: Invalid value: -32767"
	
	CAUSE
	=====
	
	This error message is caused by the _AfxMsgFilterHook hook procedure installed
	by MFC. This hook procedure, found in line 408 of the file APPCORE.CPP of the
	MFC source, incorrectly passes internal DDEML messages to the CallNextHookEx()
	function. When the hook procedure receives a MSGF_DDEMGR message, it should
	return FALSE instead.
	
	For additional information, please see the following article(s) in the Microsoft
	Knowledge Base:
	
	  Q89828 Do Not Forward DDEML Messages from a Hook Procedure
	
	RESOLUTION
	==========
	
	Although this warning message is generally harmless, one way to prevent this
	message is to modify the _AfxMsgFilterHook function in the APPCORE.CPP file
	(found in \MSVC\MFC\SRC directory for Microsoft Visual C++ version 1.0) to
	return FALSE if (code == MSGF_DDEMGR), as the KB article above recommends, and
	then rebuild the library.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a bug in Microsoft Foundation Classes (MFC)
	versions 1.0, 2.0, 2.5, 2.51, and 2.52. This problem was corrected in MFC
	version 2.53, which was included with Visual C++ for Windows version 1.53.
	
	Additional query words: 1.00 2.00 2.50 3.10
	
	======================================================================
	Keywords          :  
	Technology        : kbAudDeveloper kbWin3xSearch kbSDKSearch kbWinSDKSearch kbWinSDK310
	Version           : WINDOWS:3.1
	Solution Type     : kbfix
	
	=============================================================================
	
