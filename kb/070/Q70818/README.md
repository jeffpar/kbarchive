---
layout: page
title: "Q70818: BUG: No WM_SETFONT to Custom Controls"
permalink: kb/070/Q70818/
---

## Q70818: BUG: No WM_SETFONT to Custom Controls

	Article: Q70818
	Product(s): Microsoft Windows Software Development Kit
	Version(s): WINDOWS:3.0
	Operating System(s): 
	Keyword(s): 
	Last Modified: 06-NOV-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows Software Development Kit (SDK) 3.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	In the Dialog Editor, when the font of the dialog box is changed, the text of
	custom controls that process WM_SETFONT messages does not change.
	
	CAUSE
	=====
	
	The Dialog Editor does not send WM_SETFONT messages to custom controls.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a bug in the Windows SDK version 3.0. We are
	researching this problem and will post new information here in the Microsoft
	Knowledge Base as it becomes available.
	
	Additional query words: buglist3.00 3.00
	
	======================================================================
	Keywords          :  
	Technology        : kbAudDeveloper kbWin3xSearch kbSDKSearch kbWinSDKSearch kbWinSDK300
	Version           : WINDOWS:3.0
	
	=============================================================================
	
