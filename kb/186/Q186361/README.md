---
layout: page
title: "Q186361: INFO: ERR &quot;...Some links may not be restored&quot;"
permalink: kb/186/Q186361/
---

## Q186361: INFO: ERR &quot;...Some links may not be restored&quot;

	Article: Q186361
	Product(s): Microsoft SourceSafe
	Version(s): WINDOWS: 6.0
	Operating System(s): 
	Keyword(s): 
	Last Modified: 01-MAY-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual SourceSafe for Windows, version 6.0 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	When restoring a .ssa file to a different database, from which it was archived,
	the following message may occur:
	
	  Destination database is not the same as the original. Some links may not be
	  restored.
	
	To invoke the wizard in the SourceSafe Admin program, from the Restore Projects
	menu, choose Archive.
	
	MORE INFORMATION
	================
	
	This message refers to the share and branch links to other projects and/or files
	that may have existed before creation of the .ssa file. This message is warning
	the user that the database you are restoring the .ssa file to may not have the
	project/file names that the links were committed to in the database where the
	.ssa file was created.
	
	This message is repeated a second time in the Restore Wizard after step three of
	three is completed in the wizard.
	
	NOTE: This message may appear even if the project/file(s) are not shared or
	branched.
	
	Additional query words: ssdb
	
	======================================================================
	Keywords          :  
	Technology        : kbSSafeSearch kbAudDeveloper kbSSafe600
	Version           : WINDOWS: 6.0
	Issue type        : kbinfo
	
	=============================================================================
	
