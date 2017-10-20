---
layout: page
title: "Q131875: BUG: Form Designer Window Won't Scroll When Selecting Objects"
permalink: /kb/131/Q131875/
---

## Q131875: BUG: Form Designer Window Won't Scroll When Selecting Objects

{% raw %}

	Article: Q131875
	Product(s): Microsoft FoxPro
	Version(s): WINDOWS:3.0,3.0b,5.0,5.0a,6.0
	Operating System(s): 
	Keyword(s): kbtool kbvfp300bBUG kbvfp500aBUG kbvfp500bugkbbuglist
	Last Modified: 15-FEB-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual FoxPro for Windows, versions 3.0, 3.0b, 5.0, 5.0a, 6.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	In the Form Designer window, you can drag your mouse to select objects beyond
	the visible area, but the window doesn't scroll automatically to show you the
	selections.
	
	RESOLUTION
	==========
	
	Use either of the following two solutions:
	
	- Resize the Form Designer window to expose more work area, and then use the
	  mouse to select the objects you want.
	
	-or-
	
	- Hold down the SHIFT key while selecting objects on your form. You can scroll
	  the Form Designer window while holding down the SHIFT key without clearing
	  your currently selected objects.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in the Microsoft products listed at
	the beginning of this article. We are researching this problem and will post new
	information here in the Microsoft Knowledge Base as it becomes available.
	
	MORE INFORMATION
	================
	
	Steps to Reproduce Problem
	--------------------------
	
	1. In the Command window, type:
	
	     CREATE FORM test
	
	2. Place several objects on the form.
	
	3. Reduce the visible working of Form Designer window.
	
	4. Using the mouse, click and drag to select objects on the form, including
	  objects outside the visible area. The objects outside the visible area are
	  selected but the window doesn't scroll to allow you to see them as you select
	  them.
	
	Additional query words: kbvfp300 kbvfp500 kbvfp600
	
	======================================================================
	Keywords          : kbtool kbvfp300bBUG kbvfp500aBUG kbvfp500bug kbbuglist
	Technology        : kbVFPsearch kbAudDeveloper kbVFP300 kbVFP300b kbVFP500 kbVFP600 kbVFP500a
	Version           : WINDOWS:3.0,3.0b,5.0,5.0a,6.0
	Issue type        : kbbug
	
	=============================================================================
	

{% endraw %}
