---
layout: page
title: "Q71022: BUG: RC Error RW1008 If NULL Entry in PATH"
permalink: /kb/071/Q71022/
---

## Q71022: BUG: RC Error RW1008 If NULL Entry in PATH

	Article: Q71022
	Product(s): Microsoft Windows Software Development Kit
	Version(s): WINDOWS:3.0,3.1
	Operating System(s): 
	Keyword(s): 
	Last Modified: 06-NOV-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows Software Development Kit (SDK) versions 3.0, 3.1 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	The resource compiler (RC) exits with the message "fatal error RW1008: RCPP.ERR
	not found."
	
	CAUSE
	=====
	
	There is a NULL entry in the MS-DOS PATH environment variable (for example: SET
	PATH=;c:\;...).
	
	STATUS
	======
	
	Microsoft has confirmed this to be a bug in the Microsoft products listed at the
	beginning of this article.We are researching this bug and will post new
	information here in the Microsoft Knowledge Base as it becomes available.
	
	Additional query words: 3.00 3.10
	
	======================================================================
	Keywords          :  
	Technology        : kbAudDeveloper kbWin3xSearch kbSDKSearch kbWinSDKSearch kbWinSDK300 kbWinSDK310
	Version           : WINDOWS:3.0,3.1
	
	=============================================================================
	
