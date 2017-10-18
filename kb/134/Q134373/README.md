---
layout: page
title: "Q134373: FIX: Win32(80x86) Release Target Not Displayed in Windows 95"
permalink: kb/134/Q134373/
---

## Q134373: FIX: Win32(80x86) Release Target Not Displayed in Windows 95

	Article: Q134373
	Product(s): Microsoft C Compiler
	Version(s): winnt:
	Operating System(s): 
	Keyword(s): kbGenInfo kbide kbVC kbArtTypeINFkbbuglist kbfixlist
	Last Modified: 28-JUL-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual C++, 32-bit Enterprise Edition, versions 2.0, 2.1, 2.2 
	- Microsoft Visual C++, 32-bit Professional Edition, versions 2.0, 2.1, 2.2 
	- Microsoft Visual C++, 32-bit Learning Edition, versions 2.0, 2.1, 2.2 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	In the drop-down target list of the Visual Workbench, the Win32(80x86) Release
	target is not displayed for selection under Windows 95. This problem does not
	occur when running under Windows NT.
	
	CAUSE
	=====
	
	The number of items displayed in the target drop-down list box is one less than
	the total number of targets available. The one missing is usually the top most
	target. If you select the top most target as the default, the bottom most target
	disappears.
	
	RESOLUTION
	==========
	
	When the target drop-down list box is in focus, press the UP ARROR or DOWN ARROW
	key to move up or down in the list. The missing target will become visible, so
	you can select the target for the build.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a bug in the Microsoft products listed at the
	beginning of this article. This bug was corrected in Microsoft Visual C++,
	32-bit Edition, version 4.0.
	
	MORE INFORMATION
	================
	
	Steps to Reproduce Problem
	--------------------------
	
	1. Open the MFC HELLO sample makefile.
	
	2. In the Make Window, the project tree for Win32(80x86) Debug is displayed.
	
	3. Open the Target drop-down list box.
	
	4. All the targets are shown except Win32(80x86) Release target.
	
	Additional query words: 2.00 2.10 2.20 4.00 missing Windows 95
	
	======================================================================
	Keywords          : kbGenInfo kbide kbVC kbArtTypeINF kbbuglist kbfixlist
	Technology        : kbVCsearch kbAudDeveloper kbVC220 kbVC200 kbVC210 kbVC32bitSearch
	Version           : winnt:
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	
