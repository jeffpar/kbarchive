---
layout: page
title: "Q74419: Norton's Erase Protect Program Doesn't Work with Windows 3.0"
permalink: /kb/074/Q74419/
---

## Q74419: Norton's Erase Protect Program Doesn't Work with Windows 3.0

{% raw %}

	Article: Q74419
	Product(s): Microsoft Windows 95.x Retail Product
	Version(s): WINDOWS:3.0,3.0a
	Operating System(s): 
	Keyword(s): 
	Last Modified: 05-NOV-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows versions 3.0, 3.0a 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you run Norton's Erase Protect program (EP.EXE) from Norton Utilities
	version 6.0, Microsoft Windows cannot start in protected mode.
	
	One of the following error messages will occur if you use this program with
	Windows version 3.0:
	
	- In 386 Enhanced Mode
	
	  The conventional memory in your system is fragmented and Windows cannot run
	  in 386 enhanced mode. Please reboot your computer and try again or else run
	  Windows in real mode by typing win /r.
	
	- In Standard Mode
	
	  Cannot run Windows in standard mode. Check to ensure you are not running
	  other protected mode software, or run in real mode.
	
	
	WORKAROUND
	==========
	
	Do not to use the Erase Protect utility when running Windows 3.0 in standard or
	386 enhanced mode. You can find out how to disable this program by referring to
	"The Norton Utilities User's Guide" on page 9-3.
	
	-or-
	
	Upgrade to Norton Utilities version 6.01. Erase Protect was revised in version
	6.01 and Norton Desktop version 1.0 to function properly with Windows 3.0.
	
	MORE INFORMATION
	================
	
	The Erase Protect program is a terminate-and-stay-resident program (TSR) that
	moves deleted files to another, less-used part of your disk to protect them from
	being overwritten. The deleted files are renamed and copied into hidden
	directory called TRASHCAN.
	
	For more information, contact Norton.
	
	The product included here is manufactured by a vendor independent of Microsoft;
	we make no warranty, implied or otherwise, regarding this product's performance
	or reliability.
	
	REFERENCES
	==========
	
	"The Norton Utilities User's Guide," page 9-3.
	
	KBCategory: kb3rdparty
	KBSubcategory: win30
	
	Additional query words: ndw 3.00 3.0 3.0a 3.00a 3rdparty win30
	
	======================================================================
	Keywords          :  
	Technology        : kbWin3xSearch kbZNotKeyword3 kbWin300 kbWin300a
	Version           : WINDOWS:3.0,3.0a
	
	=============================================================================
	

{% endraw %}
