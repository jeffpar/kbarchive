---
layout: page
title: "Q193416: PRB: Cannot Set the ReadOnly Property of a File"
permalink: /kb/193/Q193416/
---

## Q193416: PRB: Cannot Set the ReadOnly Property of a File

	Article: Q193416
	Product(s): Microsoft FoxPro
	Version(s): WINDOWS:6.0
	Operating System(s): 
	Keyword(s): 
	Last Modified: 11-DEC-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual FoxPro for Windows, version 6.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	Attempting to set the ReadOnly property of a file results in the following
	error:
	
	  OLE IDispatch exception code 533 from Visual FoxPro for Windows: This
	  property is read-only.
	
	CAUSE
	=====
	
	Visual FoxPro does not allow the ReadOnly property of a file to be modified
	through the FILE object of a project object.
	
	STATUS
	======
	
	This behavior is by design.
	
	MORE INFORMATION
	================
	
	Steps to Reproduce Behavior
	---------------------------
	
	Run the following code in a program file:
	
	     STRTOFILE("*test", "mytest.prg")
	     CREATE PROJ test NOSHOW NOWAIT
	     oproj=_VFP.ACTIVEPROJECT
	     oproj.FILES.ADD("mytest.prg")
	     ?oproj.FILES[1].READONLY
	     oproj.FILES[1].READONLY=.T.
	
	REFERENCES
	==========
	
	Visual FoxPro Help, search on: "FILE OBJECT"
	
	Additional query words: kbVFp600 kbProjManager
	
	======================================================================
	Keywords          :  
	Technology        : kbVFPsearch kbAudDeveloper kbVFP600
	Version           : WINDOWS:6.0
	Issue type        : kbprb
	
	=============================================================================
	
