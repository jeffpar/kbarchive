---
layout: page
title: "Q28338: INFO: Return Value from ChangeClipboardChain()"
permalink: /kb/028/Q28338/
---

## Q28338: INFO: Return Value from ChangeClipboardChain()

	Article: Q28338
	Product(s): Microsoft Windows Software Development Kit
	Version(s): WINDOWS:3.1
	Operating System(s): 
	Keyword(s): kb16bitonly kbClipboard kbSDKPlatform
	Last Modified: 09-JUN-1999
	
	3.00 3.10
	WINDOWS
	kbprg
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows Software Development Kit (SDK) 3.1 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	The return value for ChangeClipboardChain() is TRUE if hWnd (the value to be
	removed) is the last one on the chain. Otherwise, the value is the return value
	[via SendMessage()] from the final item in the Clipboard chain, which should be
	TRUE. The change can successfully be made, however, even if the final window in
	the chain returns FALSE. This merely indicates that the application with the
	final window in the chain is handling the message incorrectly.
	
	Additional query words: 3.00 3.10
	
	======================================================================
	Keywords          : kb16bitonly kbClipboard kbSDKPlatform 
	Technology        : kbAudDeveloper kbWin3xSearch kbSDKSearch kbWinSDKSearch kbWinSDK310
	Version           : WINDOWS:3.1
	Issue type        : kbinfo
	
	=============================================================================
	
