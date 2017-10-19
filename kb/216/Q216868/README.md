---
layout: page
title: "Q216868: FIX: Crash When Class Variable Declared Before Class Declaration"
permalink: /kb/216/Q216868/
---

## Q216868: FIX: Crash When Class Variable Declared Before Class Declaration

	Article: Q216868
	Product(s): Microsoft C Compiler
	Version(s): winnt:6.0
	Operating System(s): 
	Keyword(s): kbservicepack kbEditor kbide kbVC600bug kbVS600sp2 kbVS600SP1 kbVS600sp3fix kbGrpDSTool
	Last Modified: 07-MAY-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual C++, 32-bit Enterprise Edition, version 6.0 
	- Microsoft Visual C++, 32-bit Professional Edition, version 6.0 
	- Microsoft Visual C++, 32-bit Learning Edition, version 6.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	This problem occurs while creating class definitions in the source editor.
	Certain coding sequences cause Visual C++ to close without error or warning.
	
	CAUSE
	=====
	
	There are two possible causes of this problem; both happen when attempting to
	create a derived class:
	
	- An object is coded before the class definition in the same source file.
	
	- The base class is accidentally named the same as the derived class.
	
	RESOLUTION
	==========
	
	Always type the skeleton of a class definition before coding objects of that
	class. Another solution is to always edit the class definition in its own header
	file rather than in the source file where it is used.
	
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
	
	Steps to Reproduce Behavior
	---------------------------
	
	WARNING: The following steps reproduce the behavior described above, terminating
	Visual C++ without an opportunity to save any work.
	
	Coding an object before the class definition:
	
	1. Open any project and any .cpp file in that project.
	
	2. Declare a global variable as follows:
	
	  CCrashTest Test;
	
	3. Move the cursor to the line above that declaration and enter the following
	  line of code:
	
	  class CCrashTest : public CBaseClass
	  {
	  }
	
	Deriving a class from itself:
	
	1. Open any project and any .cpp file in that project.
	
	2. Type the following class definition in. Make sure there is a space at the end
	  of the first line.
	
	  class CCrashTest : public CCrashTest 
	
	Additional query words:
	
	======================================================================
	Keywords          : kbservicepack kbEditor kbide kbVC600bug kbVS600sp2 kbVS600SP1 kbVS600sp3fix kbGrpDSTools 
	Technology        : kbVCsearch kbAudDeveloper kbVC600 kbVC32bitSearch
	Version           : winnt:6.0
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	
