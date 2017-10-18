---
layout: page
title: "Q193581: HOWTO: Use Archive Wizard to Archive with a Specific Version"
permalink: kb/193/Q193581/
---

## Q193581: HOWTO: Use Archive Wizard to Archive with a Specific Version

	Article: Q193581
	Product(s): Microsoft SourceSafe
	Version(s): 
	Operating System(s): 
	Keyword(s): kbSSafe600 kbSSExplorer
	Last Modified: 01-MAY-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual SourceSafe for Windows, version 6.0 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	This article talks about the different ways to archive a project with a specific
	date, label, or version number using the wizard. This is the equivalent of using
	the -v switch at the command line.
	
	MORE INFORMATION
	================
	
	Step-by-Step Procedures
	-----------------------
	
	1. In Visual SourceSafe create a project and label it as "first label". Add some
	  more files to the project and re-label it as "second label".
	
	2. Create some versions for the file.
	
	3. In the Archive menu of the Visual SourceSafe Administrator, click Archive
	  Projects.
	
	4. Choose the Project that you labeled from the "Choose project to Archive"
	  wizard, and click OK. This adds the project name in the "Archive wizard step
	  1 of 3".
	
	5. Continue to the next step, and choose the location of the archive file.
	
	6. In the wizard "Step 3 of 3", choose "Archive this version or older" from the
	  Version range option.
	
	  For example, to archive by date:
	
	  To archive at a date 09/10/98, in the version box write "D 09/10/98".
	
	  For example, to archive by label:
	
	  To archive by label "first label", in the version box write "L first label"
	  and click finish.
	
	  For example, to archive by version number:
	
	  If you wish to archive the project at version 3, in the version box write 3.
	
	7. Click Finish.
	
	REFERENCES
	==========
	
	Visual SourceSafe 6.0 Books Online: Archive Databases; Restore Databases
	
	Additional query words: kbssutilities
	
	======================================================================
	Keywords          : kbSSafe600 kbSSExplorer 
	Technology        : kbSSafeSearch kbAudDeveloper kbSSafe600
	Issue type        : kbhowto
	
	=============================================================================
	
