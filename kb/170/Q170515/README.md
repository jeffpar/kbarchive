---
layout: page
title: "Q170515: FIX: RTTI and Incremental Link Options Incorrectly Disabled"
permalink: /kb/170/Q170515/
---

## Q170515: FIX: RTTI and Incremental Link Options Incorrectly Disabled

	Article: Q170515
	Product(s): Microsoft C Compiler
	Version(s): 5.0
	Operating System(s): 
	Keyword(s): kbtool kbide kbVC kbVC500bug kbVC600fix kbDSupport kbGrpDSTools
	Last Modified: 07-MAY-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual C++, 32-bit Professional Edition, version 5.0, on platform(s):
	   - the hardware: DEC Alpha 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	The following project-setting check boxes are incorrectly disabled in Developer
	Studio and prevent the respective build options from being specified to the
	compiler and linker:
	
	 Project|Settings|C++|Category:C++ Language|Enable Run-Time Type
	 Information
	 Project|Settings|Link|Category:General|Link Incrementally
	
	In addition, you can not enter the options manually in the Project Options edit
	box at the bottom of the Settings dialog box.
	
	RESOLUTION
	==========
	
	To work around this problem, manually specify the switches in the Project
	Options window immediately followed by a pair of empty quotation marks. For
	example:
	
	  /GR""
	  /INCREMENTAL:YES""
	
	STATUS
	======
	
	Microsoft has confirmed this to be a bug in the Microsoft products listed at the
	beginning of this article. This problem was corrected in Microsoft Visual C++,
	version 6.0.
	
	Additional query words:
	
	======================================================================
	Keywords          : kbtool kbide kbVC kbVC500bug kbVC600fix kbDSupport kbGrpDSTools 
	Technology        : kbVCsearch kbAudDeveloper kbVC32bitSearch
	Version           : :5.0
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	
