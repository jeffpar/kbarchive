---
layout: page
title: "Q75975: DOC: WM_RENDERFORMAT Documentation Incomplete"
permalink: /kb/075/Q75975/
---

## Q75975: DOC: WM_RENDERFORMAT Documentation Incomplete

{% raw %}

	Article: Q75975
	Product(s): Microsoft Windows Software Development Kit
	Version(s): WINDOWS:3.1
	Operating System(s): 
	Keyword(s): kbdocfix kb16bitonly kbSDKPlatform kbWndw kbWndwMsg
	Last Modified: 10-JUN-1999
	
	3.00 3.10
	WINDOWS
	kbprg kbdocerr
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows Software Development Kit (SDK) 3.1 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	The documentation for the WM_RENDERFORMAT message on page 6-98 of the "Microsoft
	Windows Software Development Kit Reference Volume 1" for version 3.0, and on
	page 188 of the "Microsoft Windows Programmer's Reference Volume 3: Messages,
	Structures, and Macros" manual for version 3.1 is incomplete.
	
	The following information should be added to the documentation for the function
	as a Comments section:
	
	  During the processing of this message, the <B>OpenClipboard</B> and
	  <B>CloseClipboard</B> functions should NOT be called. The                WM_RENDERFORMAT message is sent from within the <B>GetClipboardData</B>    function which an application calls from within a block of code            surrounded by the <B>OpenClipboard</B> and <B>CloseClipboard</B>          functions. While processing the WM_RENDERFORMAT message, the application    should not again call the <B>OpenClipboard</B> and <B>CloseClipboard</B>    functions.
	
	NOTE: The first sentence of the preceding information is already included on page
	188 of the "Microsoft Windows Programmer's Reference Volume 3: Messages,
	Structures, and Macros" manual for version 3.1.
	
	Note that while processing the WM_RENDERALLFORMATS message, the OpenClipboard and
	CloseClipboard functions must be called in order to call the SetClipboardData
	function. For more information, query on the following words:
	
	  prod(winsdk) and WM_RENDERALLFORMATS and OpenClipboard
	
	Additional query words: 3.00 3.10
	
	======================================================================
	Keywords          : kbdocfix kb16bitonly kbSDKPlatform kbWndw kbWndwMsg 
	Technology        : kbAudDeveloper kbWin3xSearch kbSDKSearch kbWinSDKSearch kbWinSDK310
	Version           : WINDOWS:3.1
	
	=============================================================================
	

{% endraw %}
