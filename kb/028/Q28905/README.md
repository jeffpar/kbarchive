---
layout: page
title: "Q28905: Format for Strings and Longs in RCDATA in RC"
permalink: kb/028/Q28905/
---

## Q28905: Format for Strings and Longs in RCDATA in RC

	Article: Q28905
	Product(s): Microsoft Windows Software Development Kit
	Version(s): WINDOWS:3.0,3.1
	Operating System(s): 
	Keyword(s): kb16bitonly
	Last Modified: 05-NOV-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows Software Development Kit (SDK) versions 3.0, 3.1 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	Numbers in the RCDATA section are formatted as documented, with the additional
	ability to specify long numbers with an "L" suffix. Strings are enclosed in
	double quotation marks ("), and are not null terminated. The following special
	mappings are performed:
	
	  Characters  Result      Example
	  ------------------------------------------------------------------
	  ""          "          """Hello "" there"""  ==> "Hello " there"
	
	  "'"         '
	
	  "\\"        \ 
	
	  "\t"        TAB
	
	  \011        TAB
	
	  ^I          TAB
	
	  "\a"        Backspace
	
	  \010        Backspace
	
	  ^H          Backspace
	
	  "\x12"      HEX byte 0x12
	
	  "\123"      OCTAL byte 0123
	
	  "\123"      HEX byte 0x53
	
	NOTE: \" is not allowed. Single backslashes ("\") before any other character are
	ignored. Nulls are not allowed anywhere in strings. Rather than using:
	
	  "A string.\0"
	
	use the following:
	
	  "A string.",0
	
	Longs and ints cannot be directly represented inside a string. They must be built
	up one byte at a time, or outside any strings.
	
	Additional query words: 3.00 3.10
	
	======================================================================
	Keywords          : kb16bitonly 
	Technology        : kbAudDeveloper kbWin3xSearch kbSDKSearch kbWinSDKSearch kbWinSDK300 kbWinSDK310
	Version           : WINDOWS:3.0,3.1
	
	=============================================================================
	
