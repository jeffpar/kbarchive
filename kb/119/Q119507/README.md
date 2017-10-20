---
layout: page
title: "Q119507: Problems Accessing Extended Characters When Using KBDUSX.DLL"
permalink: /kb/119/Q119507/
---

## Q119507: Problems Accessing Extended Characters When Using KBDUSX.DLL

{% raw %}

	Article: Q119507
	Product(s): Microsoft Windows 95.x Retail Product
	Version(s): WINDOWS:3.0,3.0a,3.1,3.11
	Operating System(s): 
	Keyword(s): 
	Last Modified: 29-OCT-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows versions 3.0, 3.0a, 3.1, 3.11 
	- Microsoft Windows for Workgroups versions 3.1, 3.11 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you are using the US-International keyboard layout and you press a CTRL+ALT
	combination to produce an extended character, an unexpected action occurs in the
	application you are running. For example, if you are using Microsoft Word 6.0
	for Windows and you press CTRL+ALT+p to produce an o- umlaut, Word switches to
	page layout view instead.
	
	CAUSE
	=====
	
	Many Windows-based applications use CTRL+ALT combinations as shortcuts to
	perform specific functions. Application-based CTRL+ALT sequences override
	CTRL+ALT combinations for producing extended characters.
	
	WORKAROUND
	==========
	
	Rather than using CTRL+ALT sequences to produce extended characters, you can use
	the ALT key and the numeric keypad.
	
	For example, instead of using CTRL+ALT+p to produce an o-umlaut, use ALT+0246.
	Consult the ANSI character set to determine which numeric code corresponds to
	the extended character you need.
	
	NOTE: You must use the numeric keypad.
	
	MORE INFORMATION
	================
	
	Other examples of CTRL+ALT sequences used as shortcuts in applications are
	listed below.
	
	Purpose                Key combination    Workaround
	----------------------------------------------------
	
	Sharp "S" in German    CTRL+ALT+s         ALT+0223
	u-umlaut               CTRL+ALT+y         ALT+0252
	
	NOTE: An umlaut is a character that has two dots above it.
	
	Additional query words: winword powerpoint excel german ANSI character set sequence 3.0 3.00 3.0a 3.10 3.1 3.11
	
	======================================================================
	Keywords          :  
	Technology        : kbAudDeveloper kbWin3xSearch kbWFWSearch kbZNotKeyword3 kbWin300 kbWin300a kbWin310 kbWin311 kbWFW310 kbWFW311
	Version           : WINDOWS:3.0,3.0a,3.1,3.11
	
	=============================================================================
	

{% endraw %}
