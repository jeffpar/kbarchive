---
layout: page
title: "Q245754: BUG: Windows 2000 RichEdit Control Generates WM_CONTEXTMENU Mess"
permalink: /kb/245/Q245754/
---

## Q245754: BUG: Windows 2000 RichEdit Control Generates WM_CONTEXTMENU Mess

	Article: Q245754
	Product(s): Microsoft Windows NT
	Version(s): WINDOWS:
	Operating System(s): 
	Keyword(s): kbCtrl kbOSWin2000 kbRichEdit kbSDKPlatform kbSDKWin32 kbGrpDSUser kbDSupport
	Last Modified: 24-OCT-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows 2000 Advanced Server 
	- Microsoft Windows 2000 Server 
	- Microsoft Windows 2000 Professional 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	On Windows 2000, version 1.0 of the RichEdit control (Riched32.dll) causes a
	WM_CONTEXTMENU message to be generated when the user right-clicks in the
	control. The same version of the RichEdit control on Microsoft Windows 95,
	Microsoft Windows 98, and Microsoft Windows NT 4.0 does not cause the
	WM_CONTEXTMENU message to be generated.
	
	CAUSE
	=====
	
	The earlier version of the control does not pass the WM_RBUTTONUP and
	WM_RBUTTONDOWN messages to the DefWindowProc function. On Windows 2000, the
	RichEdit control forwards the WM_RBUTTONUP and WM_RBUTTONDOWN messages to
	DefWindowProc. DefWindowProc creates the WM_CONTEXTMENU message.
	
	RESOLUTION
	==========
	
	There is no way to prevent the WM_CONTEXTMENU message from being generated. You
	must make sure that your application can handle the WM_CONTEXTMENU message
	without problems if this message is not expected.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a bug in the Microsoft products listed at the
	beginning of this article.
	
	Additional query words: KbGrpUser kbRiched
	
	======================================================================
	Keywords          : kbCtrl kbOSWin2000 kbRichEdit kbSDKPlatform kbSDKWin32 kbGrpDSUser kbDSupport 
	Technology        : kbwin2000AdvServ kbwin2000AdvServSearch kbwin2000Serv kbwin2000ServSearch kbwin2000Search kbwin2000ProSearch kbwin2000Pro kbWinAdvServSearch
	Version           : WINDOWS:
	Issue type        : kbbug
	Solution Type     : kbnofix
	
	=============================================================================
	
