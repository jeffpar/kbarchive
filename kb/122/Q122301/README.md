---
layout: page
title: "Q122301: FIX: Correct Icons Are Not Displayed After CD-ROM Setup"
permalink: /kb/122/Q122301/
---

## Q122301: FIX: Correct Icons Are Not Displayed After CD-ROM Setup

{% raw %}

	Article: Q122301
	Product(s): Microsoft C Compiler
	Version(s): 2.0
	Operating System(s): 
	Keyword(s): kbsetup
	Last Modified: 29-JUL-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual C++, version 2.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	After installation is finished, the icons for MFC Tracer, PView, and WinDiff are
	displayed with the default white icons instead of with their own icons. Note
	that the path to run the tools is correct.
	
	CAUSE
	=====
	
	The setup program sets the properties, in Program Manager, for the three icons
	for these three tools to point to the hard disk installation directories. For
	the CD-ROM installation option in setup, these tools are used from the CD-ROM
	and not copied to the hard disk, so the location for the icons is incorrect.
	
	RESOLUTION
	==========
	
	From the Program Manager menu, choose File.Property for the MFC Tracer in the
	'Visual C++ 2.0' group. Click the Change Icon ... button. Change the path for
	the icon to point to the \MSVC20\BIN\TRACER.EXE on CD-ROM. Repeat the procedure
	for PView and WinDiff.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a bug in the Microsoft products listed at the
	beginning of this article. This problem was fixed in Microsoft Visual C++,
	32-bit Edition, version 4.0.
	
	Additional query words: 2.00 buglist2.00
	
	======================================================================
	Keywords          : kbsetup 
	Technology        : kbVCsearch kbAudDeveloper kbVC200
	Version           : :2.0
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	

{% endraw %}
