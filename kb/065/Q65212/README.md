---
layout: page
title: "Q65212: Mac Form: Form Icon Appears Garbled When Form Is Compiled"
permalink: kb/065/Q65212/
---

## Q65212: Mac Form: Form Icon Appears Garbled When Form Is Compiled

	Article: Q65212
	Product(s): Microsoft Mail For Appletalk Networks
	Version(s): WINDOWS:2.0,2.0a,2.0b,3.0
	Operating System(s): 
	Keyword(s): 
	Last Modified: 09-NOV-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Mail for AppleTalk Networks, versions 2.0, 2.0a, 2.0b, 3.0 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	One of the aspects of designing a Microsoft Mail form using the Form Designer is
	creating an icon for the form.
	
	When compiling a Mail form, the Form Designer reads the screen bitmap directly
	from the corresponding screen coordinates. If the tool palette, for example,
	overlaps a portion of the icon, that portion of the icon will contain the bitmap
	for the tool palette. This results in a garbled icon.
	
	To prevent this problem from occurring, do not superimpose other screen objects
	on the icon when compiling a form.
	
	Additional query words: 2.00 2.00a 2.00b 3.00
	
	======================================================================
	Keywords          :  
	Technology        : kbMailSearch kbZNotKeyword3 kbMailATN300 kbMailATN200 kbMailATN200a kbMailATN200b
	Version           : WINDOWS:2.0,2.0a,2.0b,3.0
	
	=============================================================================
	
