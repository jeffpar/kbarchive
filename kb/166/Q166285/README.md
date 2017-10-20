---
layout: page
title: "Q166285: FIX: MSDEV Crashes When Converting VC++ 4.0 Projects"
permalink: /kb/166/Q166285/
---

## Q166285: FIX: MSDEV Crashes When Converting VC++ 4.0 Projects

{% raw %}

	Article: Q166285
	Product(s): Microsoft C Compiler
	Version(s): winnt:5.0
	Operating System(s): 
	Keyword(s): kbtool kbide kbVC kbVC500bug kbVS97sp1fix kbVS97sp2fix kbGrpDSTools
	Last Modified: 04-AUG-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual C++, 32-bit Enterprise Edition, version 5.0 
	- Microsoft Visual C++, 32-bit Professional Edition, version 5.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you convert a Visual C++ 4.x project, the following error messages may
	appear:
	
	On Windows NT 4.0:
	
	  
	
	   MSDEV.EXE - Application Error
	   The instruction at :0x00000004" referenced memory at "0x00000004". The
	   memory could not be read.
	
	After selecting OK you may get the following error:
	
	  
	
	   MSDEV.EXE - Application Error
	   The instruction at :0x5f402181" referenced memory at "0x00000004". The
	   memory could not be read.
	
	On Windows 95:
	
	  
	
	   This program has performed an illegal operation and will be shut down.
	   Details shows:
	     MSDEV caused an invalid page fault in module <unknown> at
	     00de:00000009
	
	After selecting OK you get the following error:
	
	  
	
	   This program has performed an illegal operation and will be shut down.
	   Details shows:
	     MSDEV caused an invalid page fault in module <unknown> at
	     0137:5f402181
	
	  -or-
	
	  
	
	  This program has performed an illegal operation and will be shut down.
	  Details shows:
	
	    MSDEV caused an invalid page fault in module SSSCC.DLL at
	    0137:48248c18.
	
	Note that in both cases the address in the first message may vary, but the second
	one will be consistent.
	
	CAUSE
	=====
	
	There are two cases that will reproduce this problem:
	
	Case 1
	------
	
	Projects that are missing a top-level project in the directory where the .MDP and
	.MAK files are located crash.
	
	Case 2
	------
	
	Projects for which the .MDP and .MAK files have been renamed and have a
	subdirectory with the same name as the upper-level original project.
	
	RESOLUTION
	==========
	
	Steps to Reproduce Case 1
	-------------------------
	
	1. In Visual C++ 4.0, create a workspace called Test of the Application type.
	
	2. Insert a top-level project called Top of any type.
	
	3. Using the Build|Configurations menu, remove the Test project and then close
	  the project.
	
	4. In Visual C++ 5.0, open the Test workspace's Test.mdp file. Visual C++ 5.0
	  converts the project. MSDEV crashes and the error messages noted above
	  appear.
	
	Resolution for Case 1
	---------------------
	
	1. Under the Test directory which was created for the Test workspace there is a
	  "Top" subdirectory. Rename this the "Top" subdirectory to "x" (any name is
	  acceptable).
	
	2. In Visual C++ 5.0, open the Test workspace's Test.mdp file. Visual C++ 5.0
	  converts the project.
	
	3. Rename the "x" subdirectory to the original name and the project will work as
	  expected.
	
	In the general case, you may have several projects. Renaming any one of the
	subdirectories as shown above will work around this bug.
	
	Steps to Reproduce Case 2
	-------------------------
	
	1. In Visual C++ 4.0, create a workspace called Test of the Application type. It
	  should be located in the Test directory.
	
	2. Insert a subproject of any type called Sub.
	
	3. Close the workspace.
	
	4. In the Test directory, rename Test.m?? to MyFile.*
	
	5. Create a subdirectory called Test\Test.
	
	6. In Visual C++ 5.0 open MyFile.mdp. MSDEV crashes and the error messages noted
	  above appear.
	
	Resolution of Case 2
	--------------------
	
	1. Rename the Test\Test subdirectory to Test\[anything].
	
	2. Convert the project using Visual C++ 5.0. Now you can restore the
	  subdirectory name to Test\Test.
	
	Please note that for case 2 the upper-level directory name is of no consequence.
	What is important is that there is a subdirectory with the same name as the
	original project name.
	
	These scenarios apply to all versions of Visual C++ 4.x.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a bug in the Microsoft products listed at the
	beginning of this article. This bug has been corrected in Visual Studio 97
	Service Pack 1.
	
	For additional information about the Visual Studio 97 Service Pack 1, please see
	the following article in the Microsoft Knowledge Base:
	
	  Q170365 INFO: Visual Studio 97 Service Packs - What, Where, and Why
	
	Additional query words: gpf ipf av
	
	======================================================================
	Keywords          : kbtool kbide kbVC kbVC500bug kbVS97sp1fix kbVS97sp2fix kbGrpDSTools 
	Technology        : kbVCsearch kbAudDeveloper kbVC500 kbVC32bitSearch kbVC500Search
	Version           : winnt:5.0
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	

{% endraw %}
