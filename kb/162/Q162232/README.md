---
layout: page
title: "Q162232: FP: Server Error: Visual SourceSafe Failure"
permalink: /kb/162/Q162232/
---

## Q162232: FP: Server Error: Visual SourceSafe Failure

	Article: Q162232
	Product(s): Word Front Page
	Version(s): 
	Operating System(s): 
	Keyword(s): kbinterop kbdta
	Last Modified: 26-SEP-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft FrontPage 97 for Windows 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you attempt to check out a file from a Visual SourceSafe (VSS) enabled web,
	you receive the following error message:
	
	  Server error: Visual Source Safe Failure.
	  Verify that you have write access to the Visual Source Safe repository.
	  A "You do not have access rights to $/<webproject name>" error occurred
	  while operating on file "$/<webproject name>/<filename>"
	
	CAUSE
	=====
	
	This error message occurs in the following situations:
	
	Case 1: You have write permission to the file that you are attempting to check
	out.
	
	When you checkout a file from a VSS enabled web using FrontPage Explorer, you are
	granted write permission to the file. If you already have write permission to
	the file, FrontPage assumes you have made modifications to the file and that you
	do not want to overwrite these changes. You receive the error message when you
	attempt to check out the file.
	
	Case 2: You do not have read/write permission on the VSS database.
	
	RESOLUTION
	==========
	
	Case 1: To prevent this error, set the proper permissions on all the files in
	the web and recalculate the links. In FrontPage Explorer, click Recalculate
	Hyperlinks on the Tools menu.
	
	Case 2: Confirm that your user account is set up with read/write permissions in
	the Visual SourceSafe Administrator. If the Visual SourceSafe database is stored
	on an NTFS partition, verify that the user account is set to file access
	permissions.
	
	MORE INFORMATION
	================
	
	For additional information, click the article number below to view the article
	in the Microsoft Knowledge Base:
	
	  Q160766 VSS Source Control Project Box Does Not Appear in FrontPage
	
	Additional query words: sourcesafe make sure front page
	
	======================================================================
	Keywords          : kbinterop kbdta 
	Technology        : kbFrontPageSearch kbFrontPage97 kbZNotKeyword2 kbFrontPage97Search
	Version           : :
	Issue type        : kbprb
	
	=============================================================================
	
