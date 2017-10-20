---
layout: page
title: "Q84848: Typecase's Font Compression Feature May Cause GP Faults"
permalink: /kb/084/Q84848/
---

## Q84848: Typecase's Font Compression Feature May Cause GP Faults

{% raw %}

	Article: Q84848
	Product(s): Microsoft Windows 95.x Retail Product
	Version(s): WINDOWS:3.1,3.11
	Operating System(s): 
	Keyword(s): 
	Last Modified: 31-OCT-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows versions 3.1, 3.11 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	The Font Compression feature included with Typecase, a third-party application
	for Windows, may cause general protection (GP) faults and other system errors
	when used with Microsoft Windows version 3.1.
	
	CAUSE
	=====
	
	Typecase allows users of Windows 3.1 to selectively activate and deactivate
	TrueType fonts. If Typecase is installed, only activated fonts appear as choices
	when you are selecting fonts within applications for Windows.
	
	Typecase also includes an option that conserves disk space by compressing
	deactivated fonts and leaving only activated fonts uncompressed.
	
	However, if a compressed font is used by bypassing Typecase (for example, by
	manually adding font entries to the WIN.INI file), GP faults and other system
	errors may occur.
	
	WORKAROUND
	==========
	
	To remove or disable Typecase, do the following to ensure that no compressed
	fonts remain on the system:
	
	1. Run the Typecase program.
	
	2. Select the [All Fonts] entry from the Typecase drop-down box.
	
	3. Select any font in the left-side font list box.
	
	4. Choose the Select All button.
	
	5. Choose the Activate button. If any fonts are currently compressed, this will
	  decompress them.
	
	6. Exit Typecase.
	
	Typecase is manufactured by a vendor independent of Microsoft; we make no
	warranty, implied or otherwise, regarding this product's performance or
	reliability.
	
	Additional query words: gpf 3.10 3.11 type case true tt ttf Swifte 3rdparty Swfte
	
	======================================================================
	Keywords          :  
	Technology        : kbWin3xSearch kbZNotKeyword3 kbWin310 kbWin311
	Version           : WINDOWS:3.1,3.11
	
	=============================================================================
	

{% endraw %}
