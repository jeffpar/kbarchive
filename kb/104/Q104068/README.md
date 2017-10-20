---
layout: page
title: "Q104068: DOC: Determining Message Removal from WH_GETMESSAGE Hook"
permalink: /kb/104/Q104068/
---

## Q104068: DOC: Determining Message Removal from WH_GETMESSAGE Hook

{% raw %}

	Article: Q104068
	Product(s): Microsoft Windows Software Development Kit
	Version(s): WINDOWS:3.1
	Operating System(s): 
	Keyword(s): kbdocfix kb16bitonly kbHook kbSDKPlatform kbSDKWin16
	Last Modified: 22-JUL-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows Software Development Kit (SDK) 3.1 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	A WH_GETMESSAGE hook is called each time PeekMessage or GetMessage is called.
	The wParam parameter of the hook indicates whether the message is being removed
	from the queue or merely being looked at.
	
	If PeekMessage is called with the PM_NOREMOVE flag, the message will not be
	removed from the queue. A WH_GETMESSAGE hook is called each time PeekMessage or
	GetMessage is called, and therefore the hook may be called more than once for
	the same message if PeekMessage is called with PM_NOREMOVE.
	
	The hook can determine whether the message is being removed by using the
	information in the wParam parameter. wParam contains the PM_* flags that were
	used in the PeekMessage call. GetMessage calls PeekMessage with the PM_REMOVE
	flag. The Windows 3.1 SDK does not document the value of wParam. It will be
	documented in future versions.
	
	Note that PM_NOREMOVE is defined as 0x0000, and therefore must be used carefully
	in any Boolean conditional code. Code similar to the following may be used in
	the hook:
	
	     if (wParam & PM_REMOVE)
	
	         Message is being removed;
	     else Message is being looked at but not being removed. The hook
	
	         may be called again for the same message.
	
	Additional query words:
	
	======================================================================
	Keywords          : kbdocfix kb16bitonly kbHook kbSDKPlatform kbSDKWin16 
	Technology        : kbAudDeveloper kbWin3xSearch kbSDKSearch kbWinSDKSearch kbWinSDK310
	Version           : WINDOWS:3.1
	
	=============================================================================
	

{% endraw %}
