---
layout: page
title: "Q135399: FIX: Filer:Application Error If Long Filename in VFP Directory"
permalink: /kb/135/Q135399/
---

## Q135399: FIX: Filer:Application Error If Long Filename in VFP Directory

	Article: Q135399
	Product(s): Microsoft FoxPro
	Version(s): WINDOWS:3.0,3.0b
	Operating System(s): 
	Keyword(s): kbvfp kbvfp300bBUG kbvfp500fixkbbuglist kbfixlist
	Last Modified: 24-MAR-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual FoxPro for Windows, versions 3.0, 3.0b 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you try to run the Filer from the Command window you get this error:
	
	  VFP.EXE application error. The instruction at "0x30312035 referenced memory
	  at 0x30312035. The memory could not be "read"
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in the Microsoft products listed at
	the beginning of this article. This problem has been fixed in Visual FoxPro 5.0
	for Windows.
	
	MORE INFORMATION
	================
	
	If you create a file with a name that is longer than 220 characters before the
	extension, the Filer will be unable to use the file. This is true for both
	Windows NT and Windows 95. This does not happen with Windows version 3.x because
	it does not support long file names.
	
	Under Windows NT, the longest file name that Visual FoxPro can create is 239
	characters, even though the Windows NT limit for file names is 255 characters
	
	Under Windows 95, Visual FoxPro can create a file name of 244 characters.
	
	This is an example of a 220-character file name:
	
	aaaaa aaaa aaaa aaaa aaaa aaaa aaaa aaaa aaaa aaaaa aaaaa aaaaa aaaaa aaaaa
	aaaaa aaaaa aaaaa bbbbb bbbbb bbbbb bbbbb bbbbb bbbbb bbbbbb bbbbb bbbbb
	bbbbb bbbbb bbbbbbb bbbbb bbbb bbb bbb ccccc ccccc cccccccccc cccc ccc
	
	This is an example of a 239-character file name:
	
	aaaaa aaaa aaaa aaaa aaaa aaaa aaaa aaaa aaaa aaaaa aaaaa aaaaa aaaaa aaaaa
	aaaaa aaaaa aaaaa bbbbb bbbbb bbbbb bbbbb bbbbb bbbbb bbbbbb bbbbb bbbbb
	bbbbb bbbbb bbbbbbb bbbbb bbbb  bbb bbb ccccc ccccc cccccccccc cccc cccc
	jjjjjjjjjkkkkkkkn
	
	Steps to Reproduce Problem
	--------------------------
	
	Create a file with a LONG filename. Such as this:
	
	aaaaa aaaa aaaa aaaa aaaa aaaa aaaa aaaa aaaa aaaaa aaaaa aaaaa aaaaa aaaaa
	aaaaa aaaaa aaaaa bbbbb bbbbb bbbbb bbbbb bbbbb bbbbb bbbbbb bbbbb bbbbb
	bbbbb bbbbb bbbbbbb bbbbb bbbb  bbb bbb ccccc ccccc cccccccccc cccc
	cccc.DBC
	
	Then attempt to run Filer from the Command window.
	
	Additional query words: 3.00 3.00b blow up explode bomb crash nosedive
	
	======================================================================
	Keywords          : kbvfp kbvfp300bBUG kbvfp500fix kbbuglist kbfixlist
	Technology        : kbVFPsearch kbAudDeveloper kbVFP300 kbVFP300b
	Version           : WINDOWS:3.0,3.0b
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	
