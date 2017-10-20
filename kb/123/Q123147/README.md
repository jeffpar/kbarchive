---
layout: page
title: "Q123147: FIX: MFC MDI Application Crashes Under Japanese Windows 3.1"
permalink: /kb/123/Q123147/
---

## Q123147: FIX: MFC MDI Application Crashes Under Japanese Windows 3.1

{% raw %}

	Article: Q123147
	Product(s): Microsoft Windows Software Development Kit
	Version(s): WINDOWS:3.1,Japanese
	Operating System(s): 
	Keyword(s): kb16bitonly
	Last Modified: 07-NOV-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows Software Development Kit (SDK) versions 3.1, Japanese 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	An application error in USER.EXE occurs under the following conditions:
	
	- An MDI application was created in MFC by using the Japanese version of Visual
	  C++ version 1.0 or the U.S. version of Visual C++ version 1.5.
	
	- The frame of the child window is derived from CMDIChildWnd, and the view is
	  derived from CView.
	
	- The user opens the first child window, then hides the frame of the child
	  window. Then the user opens three more new child windows, and closes two of
	  them.
	
	This only happens under Japanese Windows 3.1, not under U.S. Windows.
	
	STATUS
	======
	
	Microsoft Japan has confirmed this to be a problem in Japanese Windows version
	3.1.
	
	This problem does not exist in Windows 95 Japanese version, nor in Japanese
	Windows NT.
	
	Additional query words: Win3.1J no32bit FESDK
	
	======================================================================
	Keywords          : kb16bitonly 
	Technology        : kbAudDeveloper kbWin3xSearch kbSDKSearch kbWinSDKSearch kbWinSDK310
	Version           : WINDOWS:3.1,Japanese
	Solution Type     : kbfix
	
	=============================================================================
	

{% endraw %}
