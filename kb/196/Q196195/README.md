---
layout: page
title: "Q196195: PRB: VSSVer.scc Added to FrontPage Web"
permalink: kb/196/Q196195/
---

## Q196195: PRB: VSSVer.scc Added to FrontPage Web

	Article: Q196195
	Product(s): Microsoft SourceSafe
	Version(s): WINDOWS:6.0,97,98
	Operating System(s): 
	Keyword(s): kbinterop kbFrontPage kbSSafe600 kbInetDev kbFrontPage97 kbFrontPage98
	Last Modified: 01-MAY-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual SourceSafe for Windows, version 6.0 
	- Microsoft FrontPage 97 for Windows 
	- Microsoft FrontPage 98 for Windows 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you add a FrontPage Web to source control or recalculate hyperlinks on an
	existing source controlled Web, the file VSSVer.scc is added to the Web. If the
	Web has subfolders, the file also exists in the subfolders.
	
	CAUSE
	=====
	
	Visual SourceSafe version 6.0 creates the VSSVer.scc file in a project's working
	folder every time you perform a Get or Check Out operation. When you add a new
	Web to Visual SourceSafe or recalculate hyperlinks on an existing Web, Visual
	SourceSafe performs a Get on the files in the Web. The working folder for the
	Visual SourceSafe project is the location of the files on the Web server, so the
	VSSVer.scc file is created in that folder. FrontPage looks at all the files in
	that working folder, assumes that they belong to the Web, and adds them to
	FrontPage Explorer.
	
	RESOLUTION
	==========
	
	The purpose of the VSSVer.scc file is to improve the performance of Visual
	SourceSafe operations. Its presence does not impact the FrontPage Web, so you
	can leave the file as is. You can delete the file from the Web, but it will be
	recreated every time you recalculate hyperlinks.
	
	STATUS
	======
	
	This behavior is by design.
	
	REFERENCES
	==========
	
	Visual SourceSafe Help, version 6.0; search on: Using VSS, Get and View Files
	and Projects
	
	Additional query words:
	
	======================================================================
	Keywords          : kbinterop kbFrontPage kbSSafe600 kbInetDev kbFrontPage97 kbFrontPage98 
	Technology        : kbSSafeSearch kbFrontPageSearch kbAudDeveloper kbFrontPage97 kbZNotKeyword4 kbZNotKeyword2 kbFrontPage97Search kbFrontPage98Search kbZNotKeyword3 kbSSafe600
	Version           : WINDOWS:6.0,97,98
	Issue type        : kbprb
	
	=============================================================================
	
