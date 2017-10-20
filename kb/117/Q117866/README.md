---
layout: page
title: "Q117866: DOC: Adding Icon and Cursor Devices Documented Incorrectly"
permalink: /kb/117/Q117866/
---

## Q117866: DOC: Adding Icon and Cursor Devices Documented Incorrectly

{% raw %}

	Article: Q117866
	Product(s): Microsoft C Compiler
	Version(s): 
	Operating System(s): 
	Keyword(s): kbResourceEd kbVC kbGrpDSTools
	Last Modified: 25-JUL-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- The App Studio, used with:
	   - *EDITOR Please do not choose this product*Microsoft Visual C++ for Windows* use 1699 
	   - *EDITOR Please do not choose this product*Microsoft Visual C++ 32-bit Edition* use 241, 265, 225 
	-------------------------------------------------------------------------------
	
	The "App Studio User's Guide" describes adding new device descriptions to
	an APSTUDIO.INI file in the section "Editing Device Descriptions." In the
	second step of this section, the manual tells the user to enter a new
	section label of [IconDevices] or [CursorDevices]. The way the labels are
	listed is incorrect.
	
	The labels should both have a space between the two words. In other words,
	[IconDevices] should be [Icon Devices] and [CursorDevices] should be
	[Cursor Devices].
	
	In addition, when App Studio is restarted, you must choose New Device
	Description from the Resource menu, specifying an instance of the
	appropriate resource (Icon or Cursor), before the new device description
	shows up in the Device list.
	
	Additional query words: 1.00 1.10 1.50
	
	======================================================================
	Keywords          : kbResourceEd kbVC kbGrpDSTools 
	Technology        : kbVCsearch kbAudDeveloper
	
	=============================================================================
	

{% endraw %}
