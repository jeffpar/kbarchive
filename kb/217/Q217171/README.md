---
layout: page
title: "Q217171: FIX: /Zl Generates Invalid VXD Or Driver Image"
permalink: /kb/217/Q217171/
---

## Q217171: FIX: /Zl Generates Invalid VXD Or Driver Image

	Article: Q217171
	Product(s): Microsoft C Compiler
	Version(s): winnt:6.0
	Operating System(s): 
	Keyword(s): kbservicepack kbCompiler kbVC600 kbVS600sp2 kbVS600SP1 kbVS600sp3fix
	Last Modified: 07-MAY-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual C++, 32-bit Enterprise Edition, version 6.0 
	- Microsoft Visual C++, 32-bit Professional Edition, version 6.0 
	- Microsoft Visual C++, 32-bit Learning Edition, version 6.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	A Virtual Device Driver (VxD) or driver built with Visual C++ fails to load or
	run.
	
	CAUSE
	=====
	
	The /ZI compiler option (debug info for Edit and Continue) uses the the compiler
	option /GF (constant string pooling) which places strings in .rdata. It is the
	presence of .rdata that causes the VxDs to fail. This option is turned on by
	default when a project is ported from Visual C++ version 5.0 to version 6.0.
	
	RESOLUTION
	==========
	
	Remove the /ZI compiler option or use /Zi instead.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a bug in the Microsoft products listed at the
	beginning of this article.
	
	This bug was corrected in Visual Studio 6.0 Service Pack 3. For more information
	about Visual Studio service packs, please see the following articles in the
	Microsoft Knowledge Base:
	
	  Q194022 INFO: Visual Studio 6.0 Service Packs, What, Where, Why
	
	  Q194295 HOWTO: Tell That Visual Studio 6.0 Service Packs Are Installed
	
	MORE INFORMATION
	================
	
	The Visual C++ 6.0 Service Pack 3 linker generates the following warnings:
	
	  LNK4075: ignoring /EDITANDCONTINUE due to /VXD specification
	  LNK4212: Section "section_name" has an unknown VxD section type; image may not
	  load
	
	Additional query words:
	
	======================================================================
	Keywords          : kbservicepack kbCompiler kbVC600 kbVS600sp2 kbVS600SP1 kbVS600sp3fix 
	Technology        : kbVCsearch kbAudDeveloper kbVC600 kbVC32bitSearch
	Version           : winnt:6.0
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	
