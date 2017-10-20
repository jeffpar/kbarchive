---
layout: page
title: "Q164868: FIX: Maximizing and Restoring Print Preview Disables Menu Bars"
permalink: /kb/164/Q164868/
---

## Q164868: FIX: Maximizing and Restoring Print Preview Disables Menu Bars

{% raw %}

	Article: Q164868
	Product(s): Microsoft FoxPro
	Version(s): 5.0 5.0a
	Operating System(s): 
	Keyword(s): kbprint kbvfp kbvfp500aBUG kbvfp500bugkbbuglist
	Last Modified: 07-SEP-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual FoxPro for Windows, versions 5.0, 5.0a 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	In the Report Preview Window in Visual FoxPro 5, if you are trying to Maximize,
	Restore, and then Close the preview window, some of the menu bars (such as Help,
	Window, and Tools) no longer work.
	
	RESOLUTION
	==========
	
	Here are two possible methods to correct this behavior:
	
	- SET SYSMENU TO DEFAULT.
	
	-or-
	
	- If you are using a custom menu, you can copy and run the DEFINE MENU code for
	  the specific pads and bars from a generated quick menu again.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a bug in the Microsoft products listed at the
	beginning of this article. This has been corrected in Visual FoxPro 6.0.
	
	
	MORE INFORMATION
	================
	
	Steps to Reproduce Behavior
	---------------------------
	
	1. Create a quick report out of any of the sample tables, such as Test.frx
	
	2. Issue the following command:
	
	        REPORT FORM test PREVIEW
	
	3. Click the maximize button to maximize the preview window.
	
	4. Click the restore button to restore the preview window.
	
	5. Close the preview window.
	
	Notice that when you select "Microsoft Visual FoxPro Help" from the Help menu, it
	does not bring up Microsoft Visual FoxPro Help.
	
	Additional query words: kbvfp600fix
	
	======================================================================
	Keywords          : kbprint kbvfp kbvfp500aBUG kbvfp500bug kbbuglist
	Technology        : kbVFPsearch kbAudDeveloper kbVFP500 kbVFP500a
	Version           : 5.0 5.0a
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	

{% endraw %}
