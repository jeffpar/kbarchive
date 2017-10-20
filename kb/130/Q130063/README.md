---
layout: page
title: "Q130063: How to Find Out If EM_SETPASSWORDCHAR Message DBCS Is Enabled"
permalink: /kb/130/Q130063/
---

## Q130063: How to Find Out If EM_SETPASSWORDCHAR Message DBCS Is Enabled

{% raw %}

	Article: Q130063
	Product(s): Microsoft Windows Software Development Kit
	Version(s): WINDOWS:3.1
	Operating System(s): 
	Keyword(s): 
	Last Modified: 05-NOV-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows Software Development Kit (SDK) 3.1 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	EM_SETPASSWORDCHAR is enabled to use with DBCS characters. It displays two
	PASSWORD characters when one DBCS character is entered. For example, when the
	user enters one DBCS character, it displays two PASSWORD characters; if the user
	enters two DBCS characters, it displays four PASSWORD characters.
	
	This means that one DBCS character needs two WM_CHAR when using EM_PASSWORDCHAR.
	
	However, if the user uses the IME (IME is activated status) for input DBCS
	characters as personal PASSWORD strings, IME's interim-Windows are displayed
	normally. IME is using the interim-Windows to convert HIRAGANA into KANJI for
	the input of DBCS strings. When the IME is in this status, IME is hooking all
	the messages from keyboard drivers (WM_CHAR and WM_SYSKEYxxx).
	
	Additional query words: 3.10 Japanese international kbinf
	
	======================================================================
	Keywords          :  
	Technology        : kbAudDeveloper kbWin3xSearch kbSDKSearch kbWinSDKSearch kbWinSDK310
	Version           : WINDOWS:3.1
	
	=============================================================================
	

{% endraw %}
