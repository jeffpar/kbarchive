---
layout: page
title: "Q216853: FIX: Application Error When Calling Documents.Open"
permalink: /kb/216/Q216853/
---

## Q216853: FIX: Application Error When Calling Documents.Open

	Article: Q216853
	Product(s): Microsoft C Compiler
	Version(s): winnt:5.0,6.0
	Operating System(s): 
	Keyword(s): kbservicepack kbAutomation kbVC500bug kbVC600bug kbVCObj kbVS600sp2 kbVS600SP1 kbVS600s
	Last Modified: 07-MAY-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual C++, 32-bit Enterprise Edition, versions 5.0, 6.0 
	- Microsoft Visual C++, 32-bit Professional Edition, versions 5.0, 6.0 
	- Microsoft Visual C++, 32-bit Learning Edition, version 6.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	A VBScript macro causes an application error in Msdev.exe when calling the
	Documents.Open method on a file that does not exist. This problem may occur, for
	example, if the file is managed by a source management system such as
	SourceSafe.
	
	CAUSE
	=====
	
	The file specified in the first Documents.Open parameter does not exist. The
	file may have been deleted or renamed on the local drive.
	
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
	
	The Documents.Open method takes three parameters:
	
	- The path of the file to open.
	
	- The editor to use for the file.
	
	- A flag to open the file in read-only instead of read-write mode.
	
	If the latter two parameters are unspecified, the method opens the file with the
	default editor in read-write mode.
	
	If the file to be opened does not exist, VBScript throws a run-time exception
	error. The exception is normal and expected under this condition; however,
	Developer Studio does not handle it properly and faults internally.
	
	Steps to Reproduce Behavior
	---------------------------
	
	1. Create a new macro containing these lines:
	
	  Sub DelAFile()
	     Documents.Open "MyFile.cpp",,False
	  End Sub
	
	  In this example, the macro is named "DelAFile".
	
	2. Create a new empty project.
	
	3. Run the "DelAFile" macro repeatedly until an application error occurs.
	
	REFERENCES
	==========
	
	For additional information about macros crashing Developer Studio, please see
	the following article in the Microsoft Knowledge Base:
	
	  Q193478 Run-time Macro Errors Cause Developer Studio to Crash
	
	Additional query words:
	
	======================================================================
	Keywords          : kbservicepack kbAutomation kbVC500bug kbVC600bug kbVCObj kbVS600sp2 kbVS600SP1 kbVS600sp3fix 
	Technology        : kbVCsearch kbAudDeveloper kbVC500 kbVC600 kbVC32bitSearch kbVC500Search
	Version           : winnt:5.0,6.0
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	
