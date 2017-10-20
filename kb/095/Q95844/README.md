---
layout: page
title: "Q95844: DOC: WINDOWPOS Structure Documented Incorrectly"
permalink: /kb/095/Q95844/
---

## Q95844: DOC: WINDOWPOS Structure Documented Incorrectly

{% raw %}

	Article: Q95844
	Product(s): Microsoft Windows Software Development Kit
	Version(s): WINDOWS:3.1
	Operating System(s): 
	Keyword(s): kbdocfix kb16bitonly kbSDKPlatform kbGrpDSUser kbWndw kbWndwProp
	Last Modified: 12-JUN-1999
	
	3.10
	WINDOWS
	kbprg kbdocerr
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows Software Development Kit (SDK) 3.1 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	The y member of the WINDOWPOS structure is documented incorrectly on page 424 of
	the Microsoft Windows version 3.1 Software Development Kit (SDK) "Programmer's
	Reference, Volume 3: Messages, Structures, and Macros" manual. It is also
	documented incorrectly in the online help files.
	
	The y member specifies the position of the top edge of the window, not the right
	edge. The "Members" portion of the documentation should state the following for
	the y parameter:
	
	  y
	    Specifies the position of the top edge of the window.
	
	MORE INFORMATION
	================
	
	Additional query words: 3.10 WM_WINDOWPOSCHANGING WM_WINDOWPOSCHANGE
	
	======================================================================
	Keywords          : kbdocfix kb16bitonly kbSDKPlatform kbGrpDSUser kbWndw kbWndwProp 
	Technology        : kbAudDeveloper kbWin3xSearch kbSDKSearch kbWinSDKSearch kbWinSDK310
	Version           : WINDOWS:3.1
	
	=============================================================================
	

{% endraw %}
