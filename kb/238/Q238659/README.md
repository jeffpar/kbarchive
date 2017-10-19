---
layout: page
title: "Q238659: PRB: Modifying Class Library Causes Error Message in VFP 6.0"
permalink: /kb/238/Q238659/
---

## Q238659: PRB: Modifying Class Library Causes Error Message in VFP 6.0

	Article: Q238659
	Product(s): Microsoft FoxPro
	Version(s): WINDOWS:6.0
	Operating System(s): 
	Keyword(s): kbDesigner kbProjManager kbMiscTools kbvfp600 kbGrpDSFox kbDSupport
	Last Modified: 23-MAY-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual FoxPro for Windows, version 6.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	Modifying a visual class library (.vcx) file by using the Class Designer causes
	an error in Visual FoxPro 6.0 that forces the program to terminate abnormally.
	The error may also occur when opening the visual class library file in the
	Project Manager, Class Browser, or Component Gallery.
	
	CAUSE
	=====
	
	The Reserved5 field, which holds information about icons, contains high ASCII
	characters.
	
	RESOLUTION
	==========
	
	Use the visual class library file as a table, delete the ASCII characters from
	the Reserved5 field, and recompile the visual class library file.
	
	Step-by-Step Example:
	
	1. Use the visual class library as a table. For example, if the class library is
	  named Ztest, issue the following in the Command window:
	
	  USE ZTest.vcx
	  Browse
	
	2. Go to the Reserved5 field and open up the field manually. Because the
	  Reserved 5 field contains the path and file name for the image that is used
	  to display the class in the project manager, and so forth, you want to remove
	  the high ASCII characters by deleting them.
	
	3. Issue these commands in the Command window to recompile the class code:
	
	  USE
	  COMPILE CLASS Ztest
	
	4. Re-open the class library in the normal fashion.
	
	MORE INFORMATION
	================
	
	
	Steps to Reproduce Behavior
	---------------------------
	
	Some third-party products have icons associated with visual class libraries. This
	information is contained in the Reserved5 field of the .vcx file.
	
	1. Obtain a visual class library that has the characters described in the
	  "Symptoms" section in the Reserved5 field.
	
	2. On the visual class library File menu, select Open, or use the MODIFY CLASS
	  command. Note that an error similar to one described in the "Symptoms"
	  section appears.
	
	REFERENCES
	==========
	
	c0000005 GPF page fault hang crash application error
	
	Additional query words:
	
	======================================================================
	Keywords          : kbDesigner kbProjManager kbMiscTools kbvfp600 kbGrpDSFox kbDSupport 
	Technology        : kbVFPsearch kbAudDeveloper kbVFP600
	Version           : WINDOWS:6.0
	Issue type        : kbprb
	Solution Type     : kbnofix
	
	=============================================================================
	
