---
layout: page
title: "Q230671: PRB: AV When Saving Workspace with more than 4096 Source/Header"
permalink: /kb/230/Q230671/
---

## Q230671: PRB: AV When Saving Workspace with more than 4096 Source/Header

	Article: Q230671
	Product(s): Microsoft C Compiler
	Version(s): 6.0
	Operating System(s): 
	Keyword(s): kbide kbVC600bug kbprb kbNoUpdate
	Last Modified: 11-JUN-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual C++, 32-bit Enterprise Edition, version 6.0 
	- Microsoft Visual C++, 32-bit Professional Edition, version 6.0 
	- Microsoft Visual C++, 32-bit Learning Edition, version 6.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When a project is opened or created with more than 4096 files, attempting to
	save the workspace may result in the following message:
	
	  The instruction at "0x519eccb6" referenced memory at "0x00000000". The memory
	  could not be "read".
	
	Viewing a stack trace of this exception shows that the fault occurs in
	DevNcb.pkg. The error can occur when you exit the IDE by clicking Exit from the
	File menu, or when you close the workspace by clicking Close Workspace from the
	File menu.
	
	RESOLUTION
	==========
	
	Following are some possible workarounds:
	
	- If the workspace contains multiple projects, you may be able to work around
	  the problem by breaking projects into separate workspaces.
	
	  -or-
	
	- If the workspace contains a project with many files, you may be able to work
	  around the problem by combining some of your source files into fewer larger
	  files, or separate static libraries.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a bug in the Microsoft products listed at the
	beginning of this article.
	
	This problem was corrected in Microsoft Visual C++ .NET.
	
	Additional query words:
	
	======================================================================
	Keywords          : kbide kbVC600bug kbprb kbNoUpdate 
	Technology        : kbVCsearch kbAudDeveloper kbVC600 kbVC32bitSearch
	Version           : :6.0
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	
