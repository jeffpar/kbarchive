---
layout: page
title: "Q168381: BUG: Exported Make Files with Browse Info Are Rebuilt Twice"
permalink: /kb/168/Q168381/
---

## Q168381: BUG: Exported Make Files with Browse Info Are Rebuilt Twice

	Article: Q168381
	Product(s): Microsoft Programming Utilities
	Version(s): 5.0,6.0
	Operating System(s): 
	Keyword(s): kbtool kbide kbVC kbVC500bug kbVC600bug kbGrpDSTools kbNoUpdatekbbuglist
	Last Modified: 12-FEB-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- The Program Maintenance Utility (NMAKE.EXE), used with:
	   - Microsoft Visual C++, 32-bit Enterprise Edition, versions 5.0, 6.0 
	   - Microsoft Visual C++, 32-bit Professional Edition, versions 5.0, 6.0 
	   - Microsoft Visual C++, 32-bit Learning Edition, version 6.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	Visual C++ 5.0 or 6.0 can create .mak files for a project through the Export
	Makefile command from the Project menu. When you use the rebuild option (/A) in
	Nmake.exe version 1.62, projects exported from Visual C++ 5.0 or 6.0 that
	contain source browser information will attempt to rebuild the project twice.
	
	RESOLUTION
	==========
	
	The main side effect of this problem is that it takes longer to build an
	application using NMAKE. Use one of the following three suggested workarounds:
	
	- Build the project from Developer Studio.
	
	- Turn off browser information, export the .mak file, and rebuild from the
	  command line using NMAKE. A .bsc file containing browser information is not
	  created.
	
	- Build using NMAKE /f project.mak CLEAN=1. The effect of the CLEAN=1 parameter
	  is the same as using the /a switch, but this method works around the bug and
	  causes the targets to be built only once.
	
	
	STATUS
	======
	
	Microsoft has confirmed this to be a bug in the Microsoft products listed at the
	beginning of this article.
	
	MORE INFORMATION
	================
	
	Steps to Reproduce Behavior
	---------------------------
	
	1. From the File menu in Developer Studio, click New and create an
	  Appwizard.exe.
	
	2. From the Project menu, click Settings and click the C/C++ tab. From the
	  General category, select the check box Generate Browse Info. Click OK to
	  clear the dialog box.
	
	3. From the Project menu, click Export Makefile.
	
	4. Bring up an MS-DOS prompt. If you are not already set up to run Visual C++
	  tools from the command line, run Vcvars32.bat from the Devstudio\Vc\Bin
	  directory.
	
	5. Execute the following command line:
	
	  nmake /f"project.mak" /a
	
	  where "project.mak" (without the quotation marks) is the name of the project
	  you created.
	
	Additional query words:
	
	======================================================================
	Keywords          : kbtool kbide kbVC kbVC500bug kbVC600bug kbGrpDSTools kbNoUpdate kbbuglist
	Technology        : kbAudDeveloper kbNMAKESearch
	Version           : :5.0,6.0
	Issue type        : kbbug
	
	=============================================================================
	
