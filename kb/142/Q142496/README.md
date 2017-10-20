---
layout: page
title: "Q142496: Send Command from 32-Bit Program Starts Only MS Exchange"
permalink: /kb/142/Q142496/
---

## Q142496: Send Command from 32-Bit Program Starts Only MS Exchange

{% raw %}

	Article: Q142496
	Product(s): Microsoft Windows 95.x Retail Product
	Version(s): 95
	Operating System(s): 
	Keyword(s): win95
	Last Modified: 17-DEC-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows 95 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	When you use the Send command in a 32-bit program such as WordPad, one of the
	following behaviors may occur:
	
	- If Microsoft Exchange is installed and configured, Microsoft Exchange starts
	  instead of any installed 16-bit mail program.
	
	- If Microsoft Exchange is not installed, the 16-bit mail program stops
	  responding (hangs).
	
	- If Microsoft Exchange is installed but not configured, the Microsoft Exchange
	  Setup Wizard starts.
	
	MORE INFORMATION
	================
	
	The Send command is a function of Simple MAPI. All 32-bit programs call
	Mapi32.dll to use Simple MAPI. Mapi32.dll is a Windows 95 system file that is
	installed even if Microsoft Exchange is not installed. Because Mapi32.dll calls
	only a 32-bit mail program, Microsoft Exchange is started. It is not currently
	possible for a 32-bit program to perform a Send function to a 16-bit mail
	program.
	
	======================================================================
	Keywords          : win95 
	Technology        : kbWin95search kbZNotKeyword3
	Version           : 95
	
	=============================================================================
	

{% endraw %}
