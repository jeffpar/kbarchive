---
layout: page
title: "Q139456: FIX: LNK1201 Error Writing to .PDB File After Line Profile"
permalink: /kb/139/Q139456/
---

## Q139456: FIX: LNK1201 Error Writing to .PDB File After Line Profile

{% raw %}

	Article: Q139456
	Product(s): Microsoft C Compiler
	Version(s): 6.0
	Operating System(s): 
	Keyword(s): kbide kbVC kbVC400bug kbVC410fix kbGrpDSTools
	Last Modified: 03-AUG-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual C++, 32-bit Enterprise Edition, version 6.0 
	- Microsoft Visual C++, 32-bit Professional Edition, version 6.0 
	- Microsoft Visual C++, 32-bit Learning Edition, version 6.0 
	-------------------------------------------------------------------------------
	
	The information in this article is included in the documentation starting
	with Visual C++ 5.0. Look there for future revisions.
	
	SYMPTOMS
	========
	
	Attempting to build or rebuild a project after performing a line coverage
	profile by clicking Profile on the Tools menu results in this error message:
	
	  LNK1201: error writing to program database
	  "c:\MSDEV\Projects\yourapp\Debug\yourapp.pdb"; check for insufficient disk
	  space
	
	CAUSE
	=====
	
	Developer Studio does not close the project's program database file (.pdb file)
	after doing a line profile. Upon attempting to rebuild the project, the linker
	cannot write to the project's .pdb file, which causes the LNK1201 error.
	
	RESOLUTION
	==========
	
	To work around this problem:
	
	- Exit Developer Studio. Then restart Developer Studio, and reload your
	  project.
	
	-or-
	
	- Use a batch file to line profile your application. Specifying the Lcover.bat
	  file in the Custom Settings of the Profile dialog box will perform the same
	  profile as specifying line coverage. Any profiling batch file may be called
	  in this way, allowing Lcover.bat to be customized to fit your particular
	  needs. For more information on using a batch file to profile your
	  application, please see the following topics in the Help file:
	
	  Visual C++ Books\Visual C++ User's Guide\Profiling Code\Other Profiler
	  Features\Running a Custom Batch File
	
	  Visual C++ Books\Visual C++ User's Guide\Profiler Reference\ Profiler Batch
	  Processing
	
	STATUS
	======
	
	Microsoft has confirmed this to be a bug in the Microsoft products listed at the
	beginning of this article. This bug was corrected in Visual C++ 4.1.
	
	Additional query words:
	
	======================================================================
	Keywords          : kbide kbVC kbVC400bug kbVC410fix kbGrpDSTools 
	Technology        : kbVCsearch kbAudDeveloper kbVC600 kbVC32bitSearch
	Version           : :6.0
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	

{% endraw %}
