---
layout: page
title: "Q111586: BUG: GetRasterizerCaps Returns Zero When TrueType Is Disabled"
permalink: kb/111/Q111586/
---

## Q111586: BUG: GetRasterizerCaps Returns Zero When TrueType Is Disabled

	Article: Q111586
	Product(s): Microsoft Windows Software Development Kit
	Version(s): WINDOWS:3.1
	Operating System(s): 
	Keyword(s): kbOSWin310bug kbSDKWin16
	Last Modified: 24-JUN-1999
	
	3.10
	WINDOWS
	kbprg kbbuglist
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows Software Development Kit (SDK) 3.1 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When TrueType is disabled from the Control Panel, GetRasterizerCaps() returns
	zero (failure) instead of clearing the TT_ENABLED flag in the RASTERIZER_STATUS
	structure.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a bug in Windows version 3.1.
	
	Additional query words: buglist3.10 3.10
	
	======================================================================
	Keywords          : kbOSWin310bug kbSDKWin16 
	Technology        : kbAudDeveloper kbWin3xSearch kbSDKSearch kbWinSDKSearch kbWinSDK310
	Version           : WINDOWS:3.1
	Issue type        : kbbug
	Solution Type     : kbpending
	
	=============================================================================
	
