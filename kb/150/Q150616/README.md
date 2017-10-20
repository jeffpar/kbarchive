---
layout: page
title: "Q150616: BUG: Nmake Does Not Build Subproject of Type Makefile"
permalink: /kb/150/Q150616/
---

## Q150616: BUG: Nmake Does Not Build Subproject of Type Makefile

{% raw %}

	Article: Q150616
	Product(s): Microsoft C Compiler
	Version(s): 4.00 4.10 4.20
	Operating System(s): 
	Keyword(s): kbide kbVC
	Last Modified: 04-AUG-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual C++, 32-bit Editions, versions 4.0, 4.1 
	- Microsoft Visual C++, 32-bit Enterprise Edition, version 4.2 
	- Microsoft Visual C++, 32-bit Professional Edition, version 4.2 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you use the nmake utility to build a project containing a subproject of
	type makefile that does not use nmake as its command, the subproject is not
	built. However, the subproject can be built from Developer Studio.
	
	RESOLUTION
	==========
	
	There are two ways to resolve the problem:
	
	- Build the project and sub-project separately. This requires either typing in
	  a batch file or makefile that calls nmake once for each configuration.
	
	-or-
	
	- When you insert a project of type makefile, rather than changing the Command
	  line to execute something other than nmake, specify a makefile which you
	  create. Then create a makefile that executes the command you would use
	  instead of nmake.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a bug in the Microsoft products listed at the
	beginning of this article. We are researching this problem and will post new
	information here in the Microsoft Knowledge Base as it becomes available.
	
	MORE INFORMATION
	================
	
	Steps to Reproduce Problem
	--------------------------
	
	Method 1:
	
	1. Open the MFC sample DLLHusk.
	
	2. From Insert menu, choose Project.
	
	3. Select type Makefile, give it a generic name, and select it as a subproject
	  of DLLHusk.
	
	4. Click the Create button. Remove the line "NMAKE /f" from the general tab of
	  subproject generic, and type:
	
	     c:\msdev\samples\mfc\advanced\dllhusk\generic\generic.bat
	
	  The batch file generic.bat is executed for the inserted subproject build.
	
	Method 2:
	
	1. Create a batch file named Generic.bat in the subproject directory generic.
	
	2. Add some REM lines in the batch file to verify that this file is being used
	  in the build process, or you can add commands to build one of your other
	  projects by using NMAKE.
	
	Method 3:
	
	From the Build menu of Developer Studio, build or rebuild your toplevel project
	DLLHusk. Note that the subprojects TestDll1 and TesDll2 are built, the generic
	project is built, and then the toplevel project DLLHusk is built.
	
	Method 4:
	
	1. Go to a Command prompt.
	
	2. Run Vcvars32.bat from the Msdev\Bin directory.
	
	3. Move to the DLLHusk project directory, and run this command:
	
	     NMAKE /A /F  DLLHusk.mak CFG="DLLHusk - Win32 Debug"
	
	  NOTE: The subprojects TestDll1 and TesDll2 are built, and the toplevel project
	  DLLHusk is also built. However, the generic project is not built.
	
	Example Resolution
	------------------
	
	To implement the first resolution from the Resolution section of this article,
	follow these steps:
	
	1. Create a batch file in the toplevel project directory. In this example, the
	  toplevel project directory is the Dllhusk directory.
	
	2. Add the following lines to the batch file, and name it Dllhusk.bat assuming
	  C: as the root directory:
	
	     call generic\generic.bat
	     REM If current directory and environment variables got changed
	     call c:\msdev\bin\vcvars32.bat
	     cd c:\msdev\samples\mfc\advanced\dllhusk
	     nmake %1 /D /F dllhusk.mak CFG=%2
	
	3. From the Dllhusk directory, run the following command from the Command line:
	
	     dllhusk /A "DLLHusk - Win32 Debug"
	
	This command builds all the subprojects and the toplevel project.
	
	REFERENCES
	==========
	
	For additional information, please see the following article in the Microsoft
	Knowledge Base:
	
	  Q145936 How to Insert Existing Projects as Sub-Projects
	
	Also see "Creating an External Project" from the Visual C++ online documentation.
	
	Additional query words: kbVC400bug 4.00 4.10 4.20 VWBIss
	
	======================================================================
	Keywords          : kbide kbVC 
	Technology        : kbVCsearch kbVC400 kbAudDeveloper kbVC410 kbVC420 kbVC32bitSearch
	Version           : 4.00 4.10 4.20
	
	=============================================================================
	

{% endraw %}
