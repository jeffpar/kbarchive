---
layout: page
title: "Q168419: BUG: Browse Info Flag Not Saved for Subproject After Conversion"
permalink: /kb/168/Q168419/
---

## Q168419: BUG: Browse Info Flag Not Saved for Subproject After Conversion

	Article: Q168419
	Product(s): Microsoft C Compiler
	Version(s): 5.0,6.0
	Operating System(s): 
	Keyword(s): kbide kbVC kbVC500bug kbVC600bug kbGrpDSTools kbNoUpdatekbbuglist
	Last Modified: 13-FEB-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual C++, 32-bit Enterprise Edition, versions 5.0, 6.0 
	- Microsoft Visual C++, 32-bit Professional Edition, versions 5.0, 6.0 
	- Microsoft Visual C++, 32-bit Learning Edition, version 6.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	The state of the Build browse info file check box under the Browse Info tab in
	project settings is not preserved for subprojects when the project is converted
	from Visual C++ 4.x to Visual C++ 5.0 or from Visual C++ 5.0 to Visual C++ 6.0.
	In all cases, the browse file will not be built for subprojects.
	
	The state of the checkbox is preserved for top-level projects.
	
	RESOLUTION
	==========
	
	Set the Build browse info file check box after the conversion to 5.0.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a bug in the Microsoft products listed at the
	beginning of this article.
	
	Additional query words: BSC BSCMAKE
	
	======================================================================
	Keywords          : kbide kbVC kbVC500bug kbVC600bug kbGrpDSTools kbNoUpdate kbbuglist
	Technology        : kbVCsearch kbAudDeveloper kbVC500 kbVC600 kbVC32bitSearch kbVC500Search
	Version           : :5.0,6.0
	Issue type        : kbbug
	Solution Type     : kbpending
	
	=============================================================================
	
