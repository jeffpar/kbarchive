---
layout: page
title: "Q37532: Meanings of Resource Compiler Messages"
permalink: /kb/037/Q37532/
---

## Q37532: Meanings of Resource Compiler Messages

	Article: Q37532
	Product(s): Microsoft Windows Software Development Kit
	Version(s): WINDOWS:3.0,3.1
	Operating System(s): 
	Keyword(s): kb16bitonly
	Last Modified: 06-NOV-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows Software Development Kit (SDK) versions 3.0, 3.1 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	The following describes what the RC compiler is telling you in its output when
	it is writing resources
	
	        <id>.<Predefined resource type> <bytes>
	
	where <id> is the #define that you give a resource or the string in
	uppercase; <predefined resource type> is one of the following
	
	     #define CURSOR        1
	     #define BITMAP        2
	     #define ICON          3
	     #define MENU          4
	     #define DIALOG        5
	     #define STRING        6
	     #define FONTDIR       7
	     #define FONT          8
	     #define ACCELERATORS  9
	     #define RCDATA       10
	
	and <bytes> is the size of the resource.
	
	NOTE: In order to have the output described above generated, you must use the -v
	(verbose) switch for the resource compiler when binding a resource to an
	executable.
	
	Additional query words: 3.00 3.10 no32bit
	
	======================================================================
	Keywords          : kb16bitonly 
	Technology        : kbAudDeveloper kbWin3xSearch kbSDKSearch kbWinSDKSearch kbWinSDK300 kbWinSDK310
	Version           : WINDOWS:3.0,3.1
	
	=============================================================================
	
