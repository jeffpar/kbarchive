---
layout: page
title: "Q65173: Macro Recorder and Write Problem with TAB in Windows 3.0, 3.0a"
permalink: kb/065/Q65173/
---

## Q65173: Macro Recorder and Write Problem with TAB in Windows 3.0, 3.0a

	Article: Q65173
	Product(s): Microsoft Windows 95.x Retail Product
	Version(s): WINDOWS:3.0,3.0a
	Operating System(s): 
	Keyword(s): 
	Last Modified: 06-NOV-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows versions 3.0, 3.0a 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you use Microsoft Windows Recorder to create a macro that uses the TAB key,
	you may experience problems when you use Microsoft Windows Write. For example,
	when you use Macro Recorder with Write to make a macro that does the following
	
	  TAB
	  TAB
	  Yours very truly,
	  ENTER
	  ENTER
	  TAB
	  TAB
	  John D. Doe
	
	the first two TABS may not work correctly, and ENTER may display as a page break
	in certain cases.
	
	CAUSE
	=====
	
	This is a known problem with Macro Recorder when you use the macro with Write
	and TABs.
	
	WORKAROUND
	==========
	
	1. Use SHIFT+TAB instead of a TAB.
	
	2. Use SHIFT+ENTER instead of ENTER.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in Windows versions 3.0 and 3.0a.
	This problem does not occur in later versions of Windows.
	
	Additional query words: 3.00 3.00a 3.0 3.0a
	
	======================================================================
	Keywords          :  
	Technology        : kbWin3xSearch kbZNotKeyword3 kbWin300 kbWin300a
	Version           : WINDOWS:3.0,3.0a
	
	=============================================================================
	
