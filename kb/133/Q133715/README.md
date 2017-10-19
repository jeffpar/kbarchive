---
layout: page
title: "Q133715: FIX: Resource Editor Cannot Set LVS_OWNERDRAWFIXED Style"
permalink: /kb/133/Q133715/
---

## Q133715: FIX: Resource Editor Cannot Set LVS_OWNERDRAWFIXED Style

	Article: Q133715
	Product(s): Microsoft C Compiler
	Version(s): 2.10
	Operating System(s): 
	Keyword(s): _IK920 kbVC kbVC210bug kbVC400fix kbVC410fix kbGrpDSToolskbbuglist kbfixlist
	Last Modified: 07-FEB-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- The Resource Editor, included with:
	   - Microsoft Visual C++, 32-bit Editions, version 2.1 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	In the Resource Editor, you can specify styles for a list view control
	(CListCtrl) in a dialog template. Therefore, you should be able to set the owner
	draw fixed (LVS_OWNERDRAWFIXED) style by selecting the corresponding check box.
	However, the LVS_OWNERDRAWFIXED style is not saved in the resource file.
	
	CAUSE
	=====
	
	The problem is caused by the fact that the LVS_OWNERDRAWFIXED and
	LVS_ALIGNBOTTOM styles have the same value, 0x0400. Similar problems may occur
	if you use LVS_ALIGNMASK. Note that LVS_ALIGNBOTTOM is not used or defined in
	later versions of the common control header files.
	
	RESOLUTION
	==========
	
	Add the style manually in the resource file by opening it as a text file and
	adding the hexadecimal value 0x400 (a constant for LVS_OWNERDRAWFIXED as defined
	in the commctrl.h file) to the styles already present. Note that once you add
	the style, it is shown correctly as checked in the Resource Editor, but you are
	not able to remove it by clearing the check box. If you need to remove it, you
	must remove it manually.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a bug in the Microsoft products listed at the
	beginning of this article. This bug was corrected in Visual C++ 4.0 and 4.1.
	
	Additional query words: 2.10 3.10 4.00 4.10
	
	======================================================================
	Keywords          : _IK920 kbVC kbVC210bug kbVC400fix kbVC410fix kbGrpDSTools kbbuglist kbfixlist
	Technology        : kbVCsearch kbAudDeveloper kbVC32bitSearch kbResourceEd
	Version           : 2.10
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	
