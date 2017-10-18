---
layout: page
title: "Q78119: PRB: Help Compiler Warning &quot;Using Old Key Phrase Table&quot; Cause"
permalink: kb/078/Q78119/
---

## Q78119: PRB: Help Compiler Warning &quot;Using Old Key Phrase Table&quot; Cause

	Article: Q78119
	Product(s): Microsoft Windows Software Development Kit
	Version(s): WINDOWS:3.0,3.1
	Operating System(s): 
	Keyword(s): kb16bitonly
	Last Modified: 05-NOV-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows Software Development Kit (SDK) versions 3.0, 3.1 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When building a help file, the Help Compiler issues the warning "Using Old Key
	Phrase Table."
	
	CAUSE
	=====
	
	A key-phrase file (a .PH file) exists at compile time.
	
	RESOLUTION
	==========
	
	Delete the key-phrase file.
	
	MORE INFORMATION
	================
	
	When the Help Compiler builds a help file and the compression option is
	specified, it creates a phrase table file with the .PH extension as part of the
	compilation process. Because creating the phrase table is a time- consuming
	process, the Help Compiler will issue the "Using Existing Key Phrase Table"
	warning and use an existing .PH file (if a .PH file is available) instead of
	creating a new one. This technique minimizes the compilation time for
	modifications to an existing help file. However, to obtain maximum compression,
	a new phrase table must be created.
	
	Additional query words: 3.00 no32bit 3.10
	
	======================================================================
	Keywords          : kb16bitonly 
	Technology        : kbAudDeveloper kbWin3xSearch kbSDKSearch kbWinSDKSearch kbWinSDK300 kbWinSDK310
	Version           : WINDOWS:3.0,3.1
	
	=============================================================================
	
