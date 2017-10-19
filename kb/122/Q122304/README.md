---
layout: page
title: "Q122304: FIX: /YX and /Yc Incorrectly Allowed in Project Settings"
permalink: /kb/122/Q122304/
---

## Q122304: FIX: /YX and /Yc Incorrectly Allowed in Project Settings

	Article: Q122304
	Product(s): Microsoft C Compiler
	Version(s): 2.0,2.1,4.0,4.1,4.2,5.0
	Operating System(s): 
	Keyword(s): kbide kbVC kbVC500bug kbVC600fix kbGrpDSTools
	Last Modified: 11-FEB-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual C++, versions 2.0, 2.1, 4.0, 4.1 
	- Microsoft Visual C++, 32-bit Enterprise Edition, versions 4.2, 5.0 
	- Microsoft Visual C++, 32-bit Professional Edition, versions 4.2, 5.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	Combining compiler switches /Yc and /Yu with the /YX option causes the following
	error:
	
	  
	
	  fatal error C1852: <PCH_file_name> is not a valid precompiled
	     header file
	  Error executing cl.exe.
	
	CAUSE
	=====
	
	In the example given in the More Information section, the /YX switch forces a
	new PCH file to be generated for the newly added source file. The project files
	that use the /Yu switch are dependent on the file built using the /Yc compiler
	switch. They will be recompiled because the precompiled header is newer than
	their OBJ files. The error is generated because the requirements for the PCH
	files are not met.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a bug in the products listed at the beginning
	of this article. This problem was corrected in Microsoft Visual C++, version
	6.0.
	
	MORE INFORMATION
	================
	
	Steps to Reproduce Problem
	--------------------------
	
	This problem can be demonstrated using the SCRIBBLE, step 7, project; it uses the
	/Yc and /Yu switches.
	
	1. Add a new C++ (.cpp) source file to the project.
	
	2. In the Project Settings dialog box for the new file, select the C/C++ tab and
	  the Precompiled Headers category.
	
	3. Click the Automatic Use of Precompiled Headers box.
	
	4. Choose the OK button at the bottom of the Project Settings dialog box.
	
	When the build engine processes the newly added source file, it will rebuild the
	default PCH file. Compilation of the next source file that depends on the
	default PCH file will fail because the default PCH file no longer matches up to
	the original sources. The C1852 error listed in the SYMPTOMS section above will
	be generated.
	
	NOTE: If the source file added to the SCRIBBLE project is a C source file, not a
	C++ source, the error build error generated will be as follows:
	
	  
	
	  fatal error C1853: <PCH_file_name> is not a precompiled header file
	     created with this compiler
	  Error executing cl.exe.
	
	Additional query words: kbVC400bug
	
	======================================================================
	Keywords          : kbide kbVC kbVC500bug kbVC600fix kbGrpDSTools 
	Technology        : kbVCsearch kbVC400 kbAudDeveloper kbVC410 kbVC420 kbVC500 kbVC200 kbVC210 kbVC32bitSearch kbVC500Search
	Version           : :2.0,2.1,4.0,4.1,4.2,5.0
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	
