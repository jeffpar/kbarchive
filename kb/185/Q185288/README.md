---
layout: page
title: "Q185288: PRB: Cheyenne InocuLAN May Cause ATL Wizard to Crash DevStudio"
permalink: kb/185/Q185288/
---

## Q185288: PRB: Cheyenne InocuLAN May Cause ATL Wizard to Crash DevStudio

	Article: Q185288
	Product(s): Microsoft C Compiler
	Version(s): winnt:5.0,6.0
	Operating System(s): 
	Keyword(s): kb3rdparty kbwizard kbATL kbOSWinNT400 kbVC500 kbVC600 kbDSupport kbGrpDSTools
	Last Modified: 17-JUL-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual C++, 32-bit Professional Edition, versions 5.0, 6.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you add a new ATL Object to your project using the ATL Object Wizard,
	Developer Studio might crash.
	
	CAUSE
	=====
	
	This problem can occur when InocuLAN's Local Realtime Monitor has been
	configured to scan source files that are created, opened, and closed by the ATL
	Object Wizard.
	
	RESOLUTION
	==========
	
	To prevent this problem, configure InocuLAN's Local Realtime Monitor to exclude
	scanning files with the following extensions: .c, .cpp, .cxx, .h, .hpp, .hxx,
	.idl, and .rc. To do so, complete the following steps:
	
	1. Start InocuLAN's Local Realtime Monitor, and select the Files tab.
	
	2. Select Exclude Specified Files from the File Selection box.
	
	3. Click Add in the File Selection group, and add the file extensions listed
	  above.
	
	These are all text files incapable of carrying a virus, so they are safe to
	exclude from virus scanning.
	
	STATUS
	======
	
	This problem occurs on Windows NT 4.0 running InocuLAN 4.0.
	
	The third-party products discussed here are manufactured by vendors independent
	of Microsoft; we make no warranty, implied or otherwise, regarding these
	products' performance or reliability.
	
	MORE INFORMATION
	================
	
	For further information or support on InocuLAN, contact Cheyenne. You can reach
	Cheyenne at (800) 243-9462 or at the following web site:
	
	  http://www.cheyenne.com/Product-Info/windowsnt/inoculan-nt-menu.html
	
	Additional query words: ntutil
	
	======================================================================
	Keywords          : kb3rdparty kbwizard kbATL kbOSWinNT400 kbVC500 kbVC600 kbDSupport kbGrpDSTools 
	Technology        : kbVCsearch kbAudDeveloper kbVC500 kbVC600 kbVC32bitSearch kbVC500Search
	Version           : winnt:5.0,6.0
	Issue type        : kbprb
	
	=============================================================================
	
