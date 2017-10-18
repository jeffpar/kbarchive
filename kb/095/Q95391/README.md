---
layout: page
title: "Q95391: BUG: Superclassed Scroll Bar's Parent Not Sent WM_CTLCOLOR Msg"
permalink: kb/095/Q95391/
---

## Q95391: BUG: Superclassed Scroll Bar's Parent Not Sent WM_CTLCOLOR Msg

	Article: Q95391
	Product(s): Microsoft Windows Software Development Kit
	Version(s): WINDOWS:3.0,3.1
	Operating System(s): 
	Keyword(s): kb16bitonly kbCtrl kbScrollBar kbGrpDSUser kbOSWin310 kbOSWin300
	Last Modified: 12-DEC-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows Software Development Kit (SDK) versions 3.0, 3.1 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	Controls normally send WM_CTLCOLOR messages to their parents so applications can
	modify the control background color. However, under Windows 3.0 and 3.1, when a
	scroll bar is superclassed, its parent is not sent WM_CTLCOLOR messages.
	
	RESOLUTION
	==========
	
	Applications that want to receive the WM_CTLCOLOR message must subclass the
	scroll bar rather than superclassing its window class.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a bug in Windows versions 3.0 and 3.1.
	
	Additional query words: scrollbar
	
	======================================================================
	Keywords          : kb16bitonly kbCtrl kbScrollBar kbGrpDSUser kbOSWin310 kbOSWin300 
	Technology        : kbAudDeveloper kbWin3xSearch kbSDKSearch kbWinSDKSearch kbWinSDK300 kbWinSDK310
	Version           : WINDOWS:3.0,3.1
	Issue type        : kbbug
	
	=============================================================================
	
