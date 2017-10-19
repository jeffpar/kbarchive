---
layout: page
title: "Q216099: BUG: Developer Studio Stops Responding"
permalink: /kb/216/Q216099/
---

## Q216099: BUG: Developer Studio Stops Responding

	Article: Q216099
	Product(s): Microsoft C Compiler
	Version(s): winnt:5.0,6.0
	Operating System(s): 
	Keyword(s): kbide kbVC500 kbVC600 kbDSupport kbGrpDSTools
	Last Modified: 07-MAY-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual C++, 32-bit Enterprise Edition, versions 5.0, 6.0 
	- Microsoft Visual C++, 32-bit Professional Edition, versions 5.0, 6.0 
	- Microsoft Visual C++, 32-bit Learning Edition, version 6.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you open a project on a remote Windows NT 4.0 Workstation, whose source
	files are spread across 64 or more directories, Developer Studio stops
	responding.
	
	RESOLUTION
	==========
	
	Use one of the following two resolutions:
	
	- Place the source code on Windows NT Server 4.0.
	
	  -or-
	
	- Reduce the number of source code directories to less than 64.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a bug in the Microsoft products listed at the
	beginning of this article.
	
	REFERENCES
	==========
	
	For additional information, click the article number below to view the article
	in the Microsoft Knowledge Base:
	
	  Q216098 PRB: Visual C++ IDE Slows When Files Are in Many Directories
	
	Additional query words:
	
	======================================================================
	Keywords          : kbide kbVC500 kbVC600 kbDSupport kbGrpDSTools 
	Technology        : kbVCsearch kbAudDeveloper kbVC500 kbVC600 kbVC32bitSearch kbVC500Search
	Version           : winnt:5.0,6.0
	Issue type        : kbbug
	
	=============================================================================
	
