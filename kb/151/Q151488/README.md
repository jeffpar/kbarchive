---
layout: page
title: "Q151488: PRB: DrawText Can Cause Stack Fault"
permalink: /kb/151/Q151488/
---

## Q151488: PRB: DrawText Can Cause Stack Fault

{% raw %}

	Article: Q151488
	Product(s): Microsoft Windows Software Development Kit
	Version(s): WINDOWS:3.1,3.11
	Operating System(s): 
	Keyword(s): _IK kbSDKWin16
	Last Modified: 30-JUN-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows Software Development Kit (SDK) versions 3.1, 3.11 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	In Windows versions 3.1 and 3.11, when a string that contains long, contiguous
	substrings of spaces is passed to DrawText, and the DT_WORDBREAK flag is
	specified, a stack fault may occur.
	
	CAUSE
	=====
	
	The DT_WORDBREAK flag specifies that DrawText break the string between words.
	The method used by DrawText to determine where these breaks occur involves
	recursion. If the stack size is small enough and the number of spaces is large
	enough, the recursion causes a stack fault.
	
	RESOLUTION
	==========
	
	There are two ways to work around this problem. One is to raise the stack size
	of the application. This can be done by adding a STACKSIZE statement to the
	application's .DEF file.
	
	Another solution that drastically speeds up the call to DrawText is to parse the
	string and turn all contiguous strings of spaces into single spaces. The
	resulting string can then be passed to DrawText without the overhead that the
	original string would have demanded.
	
	STATUS
	======
	
	This behavior is by design.
	
	Additional query words: 3.10 3.11 16-bit recurse huge space overflow
	
	======================================================================
	Keywords          : _IK kbSDKWin16 
	Technology        : kbAudDeveloper kbWin3xSearch kbSDKSearch kbWinSDKSearch kbWinSDK310 kbWinSDK311
	Version           : WINDOWS:3.1,3.11
	Issue type        : kbprb
	
	=============================================================================
	

{% endraw %}
