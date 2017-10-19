---
layout: page
title: "Q321088: PRB: &quot;Out of Memory&quot; Err Msg When You Archive or Restore 2 GB"
permalink: /kb/321/Q321088/
---

## Q321088: PRB: &quot;Out of Memory&quot; Err Msg When You Archive or Restore 2 GB

	Article: Q321088
	Product(s): Microsoft SourceSafe
	Version(s): 
	Operating System(s): 
	Keyword(s): kbGrpDSSSafe kbdssupport
	Last Modified: 10-MAY-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual SourceSafe 6.0c 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you use the Visual SourceSafe Archive & Restore Wizard to archive
	projects in your database, you may receive the following error message if you
	try to archive files that are greater than 2 gigabytes (GB):
	
	  Out of memory
	
	CAUSE
	=====
	
	By default, Visual SourceSafe archive files cannot be greater than 2 GB.
	
	RESOLUTION
	==========
	
	To resolve this problem, make sure that your archive files are less than 2 GB.
	Microsoft recommends that you archive one project at a time. Additionally, make
	sure that all of the deleted items have been purged.
	
	MORE INFORMATION
	================
	
	To reproduce the behavior, create an archive that is greater than 2 GB. If you
	do not receive the error message when you archive the file, you receive the
	error message when you try to restore the archive.
	
	NOTE: A database that is 2 GB may become smaller than 2 GB when you archive the
	database. Therefore, create an archive that is larger than 2 GB.
	
	Additional query words: ssafe archive restore limit specifications
	
	======================================================================
	Keywords          : kbGrpDSSSafe kbdssupport 
	Technology        : kbSSafeSearch kbAudDeveloper kbSSafe600C
	Version           : :
	Issue type        : kbprb
	
	=============================================================================
	
