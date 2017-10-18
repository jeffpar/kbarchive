---
layout: page
title: "Q191496: BUG: VC5: Project Conversion from Version 4.x May Crash VS97"
permalink: kb/191/Q191496/
---

## Q191496: BUG: VC5: Project Conversion from Version 4.x May Crash VS97

	Article: Q191496
	Product(s): Microsoft C Compiler
	Version(s): WINNT:5.0,5.0sp1,5.0sp2,5.0sp3
	Operating System(s): 
	Keyword(s): kbnokeyword
	Last Modified: 21-JUL-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual C++, 32-bit Enterprise Edition, versions 5.0, 5.0sp1, 5.0sp2, 5.0sp3 
	- Microsoft Visual C++, 32-bit Professional Edition, versions 5.0, 5.0sp1, 5.0sp2, 5.0sp3 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	Visual Studio 97 may terminate while updating Visual C++ 4.x projects to version
	5.0. The crash occurs during the conversion of the project's .ncb file to the
	new format.
	
	RESOLUTION
	==========
	
	The workaround for Visual C++ version 5.0 is to delete the project's .ncb file
	prior to conversion.
	
	NOTE: During conversion, pay close attention to the information dialog box that
	describes the steps necessary to get ClassView and other features to work
	correctly.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a bug in the Microsoft products listed at the
	beginning of this article.
	
	MORE INFORMATION
	================
	
	Steps to Reproduce Behavior
	---------------------------
	
	1. From Visual C++ 5.0, open a project created using a version of Visual C++ 4.
	
	2. Click OK to each of the project conversion dialog boxes.
	
	3. The crash appears as an Application Error message.
	
	4. Verify the workaround by deleting the .ncb file prior to project conversion.
	
	  IMPORTANT: After the conversion, remember to follow instructions provided in
	  the information dialog box during conversion that described the steps
	  necessary to get ClassView and other features to work correctly.
	
	Additional query words:
	
	======================================================================
	Keywords          : kbnokeyword 
	Technology        : kbVCsearch kbAudDeveloper kbVC500 kbVC32bitSearch kbVC500SP1 kbVC500SP2 kbVC500SP3 kbVC500Search
	Version           : WINNT:5.0,5.0sp1,5.0sp2,5.0sp3
	Issue type        : kbbug
	Solution Type     : kbnofix
	
	=============================================================================
	
