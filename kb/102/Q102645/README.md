---
layout: page
title: "Q102645: PRB: Min/Max Boxes Do Not Work with DS_MODALFRAME"
permalink: kb/102/Q102645/
---

## Q102645: PRB: Min/Max Boxes Do Not Work with DS_MODALFRAME

	Article: Q102645
	Product(s): Microsoft Windows Software Development Kit
	Version(s): WINDOWS:3.1,3.11
	Operating System(s): 
	Keyword(s): kb16bitonly kbDlg kbSDKPlatform kbWndwProp
	Last Modified: 09-JUN-1999
	
	3.00 3.10
	WINDOWS
	kbprg kbprb
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows Software Development Kit (SDK) versions 3.1, 3.11 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When I use the WS_MIMIMIZEBOX or WS_MAXIMIZEBOX styles in a dialog box with a
	DS_MODALFRAME style, the up/down arrows are offset up and to the right when I
	click them with the mouse.
	
	CAUSE
	=====
	
	The WS_MINIMIZEBOX and WS_MAXIMIZEBOX styles cannot be used with the
	DS_MODALFRAME frame style. (Menus are also incompatible with this frame style.
	For more information, please see the following article in the Microsoft
	Knowledge Base:
	
	  ARTICLE-ID: Q71499 TITLE : Menus Supported in Dialog Boxes w/o DS MODALFRAME
	  Style
	
	RESOLUTION
	==========
	
	Use a different frame style, such as WS_BORDER.
	
	Additional query words: 3.10
	
	======================================================================
	Keywords          : kb16bitonly kbDlg kbSDKPlatform kbWndwProp 
	Technology        : kbAudDeveloper kbWin3xSearch kbSDKSearch kbWinSDKSearch kbWinSDK310 kbWinSDK311
	Version           : WINDOWS:3.1,3.11
	Issue type        : kbprb
	
	=============================================================================
	
