---
layout: page
title: "Q138753: PRB: Unable to Compile 32-bit CDK Samples"
permalink: /kb/138/Q138753/
---

## Q138753: PRB: Unable to Compile 32-bit CDK Samples

	Article: Q138753
	Product(s): Microsoft C Compiler
	Version(s): winnt:2.0; :
	Operating System(s): 
	Keyword(s): 
	Last Modified: 30-JUL-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual C++, version 2.0 
	- Microsoft OLE Control Developer's Kit (CDK) 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	Attempting to build the CDK32 samples under Windows 95 from within the Visual
	C++ 2.0 IDE may cause the following error messages to be generated:
	
	  Command line too long (tool does not support response files).
	
	  Error: could not generate command line for the Win32 resource compiler tool.
	
	The messages appear in the output window for Rc.exe.
	
	NOTE: This behavior does not occur under Windows NT or if using Visual C++
	versions 2.1 or 2.2 with Windows 95.
	
	CAUSE
	=====
	
	The macro "$(OUTDIR)" is listed under additional include directories for the
	resource compiler (Rc.exe). The expansion of this macro while building the
	Rc.exe command line exceeds the capacity for the length of the Rc.exe command
	line.
	
	RESOLUTION
	==========
	
	To avoid the problem:
	
	1. Open the CDK32 project you want to build.
	
	2. On the Project menu, click Settings, and then click Resource.
	
	3. In the Additional Include Directories text box, erase the "$(OUTDIR)" text,
	  and click OK.
	
	4. Rebuild the project.
	
	STATUS
	======
	
	This behavior is by design.
	
	REFERENCES
	==========
	
	For information on the resource settings dialog box, please see the Visual C++
	Help file or the User's Guide.
	
	Additional query words: vc
	
	======================================================================
	Keywords          :  
	Technology        : kbVCsearch kbAudDeveloper kbOLESearch kbVC200
	Version           : winnt:2.0; :
	Issue type        : kbprb
	
	=============================================================================
	
