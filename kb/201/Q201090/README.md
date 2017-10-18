---
layout: page
title: "Q201090: BUG: Multi-Byte Character Strings Cause ISAPI Wizard to Fail"
permalink: kb/201/Q201090/
---

## Q201090: BUG: Multi-Byte Character Strings Cause ISAPI Wizard to Fail

	Article: Q201090
	Product(s): Microsoft C Compiler
	Version(s): 5.0,6.0
	Operating System(s): 
	Keyword(s): kbide kbISAPI kbVC500bug kbVC600bug kbDevStudio kbAppWizard kbDSupport kbGrpDSTools kbN
	Last Modified: 12-FEB-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual C++, 32-bit Enterprise Edition, versions 5.0, 6.0 
	- Microsoft Visual C++, 32-bit Professional Edition, versions 5.0, 6.0 
	- Microsoft Visual C++, 32-bit Learning Edition, version 6.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	Using MBCS strings with the ISAPI Wizard causes build errors.
	
	CAUSE
	=====
	
	The ISAPI Wizard does not reject "high-ASCII" characters (characters with binary
	values of 128 or higher). This allows MBCS characters to be added to the class
	names, which fail during build.
	
	RESOLUTION
	==========
	
	Do not type MBCS characters in the ISAPI Wizard dialog box.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in the Microsoft products that are
	listed at the beginning of this article.
	
	MORE INFORMATION
	================
	
	Steps to Reproduce Behavior
	---------------------------
	
	1. Create an ISAPI Wizard project.
	
	2. On step 1 of 1, enter a MBCS string into the Filter Class Name and Extension
	  Class Name edit boxes.
	
	3. click Finish and build the project.
	
	These steps cause the build to fail with errors because the edit boxes create the
	class names using the MBCS characters, and MBCS characters will not compile.
	
	This is not a localization issue; the problem also occurs in the US version.
	
	Additional query words:
	
	======================================================================
	Keywords          : kbide kbISAPI kbVC500bug kbVC600bug kbDevStudio kbAppWizard kbDSupport kbGrpDSTools kbNoUpdate 
	Technology        : kbVCsearch kbAudDeveloper kbVC500 kbVC600 kbVC32bitSearch kbVC500Search
	Version           : :5.0,6.0
	Issue type        : kbbug
	
	=============================================================================
	
