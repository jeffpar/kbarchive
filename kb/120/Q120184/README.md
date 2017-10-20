---
layout: page
title: "Q120184: FIX: Error Message with SAVE SCREEN Command"
permalink: /kb/120/Q120184/
---

## Q120184: FIX: Error Message with SAVE SCREEN Command

{% raw %}

	Article: Q120184
	Product(s): Microsoft FoxPro
	Version(s): 2.5,2.6,3.0,5.0
	Operating System(s): 
	Keyword(s): kb3rdparty kberrmsg
	Last Modified: 01-NOV-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual FoxPro for Windows, versions 3.0, 5.0 
	- Microsoft FoxPro for Windows, versions 2.5, 2.6 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When using the SAVE SCREEN TO <memvar> command, one of the following error
	messages appears:
	
	  FoxPro 2.x: Insufficient Memory
	
	  -or-
	
	  Visual FoxPro: There is not enough memory to complete this operation.
	
	CAUSE
	=====
	
	You are using a higher-resolution video driver with 256 colors.
	
	The SAVE SCREEN TO <memvar> command saves an image of either the main
	FoxPro window or the active window to a memory variable. This error message may
	occur when you are both saving a screen to a memory variable and using
	higher-resolution video drivers with 256 colors.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in the Microsoft products listed at
	the beginning of this article. This problem was corrected in Visual FoxPro 3.0b
	for Windows.
	
	Additional query words: VFoxWin FoxWin 2.50 2.50a 2.50b 2.60 2.60a 3.00 buglist2.50 buglist2.50a buglist2.50b buglist2.60 buglist2.60a fixlist3.00b buglist3.00
	
	======================================================================
	Keywords          : kb3rdparty kberrmsg 
	Technology        : kbVFPsearch kbAudDeveloper kbFoxproSearch kbFoxPro260 kbFoxPro250 kbVFP300 kbVFP500
	Version           : :2.5,2.6,3.0,5.0
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	

{% endraw %}
