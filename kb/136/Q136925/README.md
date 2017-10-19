---
layout: page
title: "Q136925: How to Change the Color of an &quot;X&quot; in a Check Box"
permalink: /kb/136/Q136925/
---

## Q136925: How to Change the Color of an &quot;X&quot; in a Check Box

	Article: Q136925
	Product(s): Microsoft FoxPro
	Version(s): WINDOWS:3.0
	Operating System(s): 
	Keyword(s): 
	Last Modified: 15-FEB-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual FoxPro for Windows, version 3.0 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	This article describes how to change the color of the "X" in a check box.
	
	MORE INFORMATION
	================
	
	The color of the actual "X" cannot be changed under program control. However, it
	is possible to simulate this by using two bitmaps. The following steps show how
	to achieve this.
	
	1. Create two .bmp files, one with the check box containing an "X" the way you
	  want it, and one with the check box empty.
	
	2. When creating a check box on a form, change the Style property to 1-Graphical
	  on the Property sheet. This makes the check box appear as a button.
	
	3. For the Picture property, select the not-checked box .bmp file.
	
	4. For the DownPicture property, select the checked box .bmp file.
	
	Additional query words: VFoxWin
	
	======================================================================
	Keywords          :  
	Technology        : kbVFPsearch kbAudDeveloper kbVFP300
	Version           : WINDOWS:3.0
	
	=============================================================================
	
