---
layout: page
title: "Q86006: DOCERR: DdeUnaccessData Function Documented Incorrectly"
permalink: /kb/086/Q86006/
---

## Q86006: DOCERR: DdeUnaccessData Function Documented Incorrectly

	Article: Q86006
	Product(s): Microsoft Windows Software Development Kit
	Version(s): WINDOWS:3.1
	Operating System(s): 
	Keyword(s): kb16bitonly
	Last Modified: 06-NOV-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows Software Development Kit (SDK) 3.1 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	The DdeUnaccessData function is incorrectly documented on page 196 of the
	"Microsoft Windows Software Development Kit: Programmer's Reference, Volume 2:
	Functions" manual, as follows:
	
	  The DdeUnaccessData function frees a global memory object.
	
	The DdeUnaccessData function "unaccesses" a global memory object accessed by
	DdeAccessData. These functions are similar to GlobalUnlock and GlobalLock,
	respectively.
	
	Additional query words: 3.10 no32bit
	
	======================================================================
	Keywords          : kb16bitonly 
	Technology        : kbAudDeveloper kbWin3xSearch kbSDKSearch kbWinSDKSearch kbWinSDK310
	Version           : WINDOWS:3.1
	
	=============================================================================
	
