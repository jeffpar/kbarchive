---
layout: page
title: "Q139298: HOWTO: Include Specific File Revisions in a Project Label"
permalink: /kb/139/Q139298/
---

## Q139298: HOWTO: Include Specific File Revisions in a Project Label

	Article: Q139298
	Product(s): Microsoft SourceSafe
	Version(s): WINDOWS:4.0,5.0,6.0
	Operating System(s): 
	Keyword(s): kbSSafe kbSSafe400 kbSSafe500 kbSSafe600 kbFAQ kbDSupport kbSsafe600FAQ
	Last Modified: 18-JUL-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual SourceSafe for Windows, versions 4.0, 5.0, 6.0 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	By using project labeling, development teams can label a project, work on it,
	and later compile specific revisions of the project that have been labeled.
	However, when a project is labeled, it only includes by default the most recent
	version of the files. You can override this default behavior and include a
	specific file in a project label by using the PIN and the LABEL features.
	
	MORE INFORMATION
	================
	
	You can use the interface and the command line to label and pin specific files.
	PIN is a new command that shares a specific version of a file with the current
	project. This feature provides more flexibility to development teams because
	previous versions of SourceSafe did not allow you to work on files that were
	individually labeled. The following example shows you how to include these
	specific file revisions in a project label.
	
	Step-by-Step Example
	--------------------
	
	1. Once a file is considered completed, label the file with a descriptive label
	  such as Final.
	
	2. As other files reach completion, label them with the same description. You do
	  not have to label files that use the most current revision.
	
	3. When the project is complete, type the following command at the command line
	  for the main project and for each subproject:
	
	        SS PIN <Project Path/Filename> "-vl Final"
	
	4. Once you have called the PIN command for all the necessary files, continue
	  the labeling process for the files.
	
	        SS LABEL <Project Path/Filename>
	
	5. Finish the process by Unpinning the revisions so that the files may be
	  checked out again. Pinned files cannot be checked out from Visual SourceSafe.
	  This operation must also be completed on all subprojects.
	
	        SS UNPIN <Project Path/Filename> *.*
	
	6. As an optional step, remove the Final label from all the files. This step is
	  included so that you may reuse the same label at a later time without
	  accidentally including the incorrect revision. If you want to keep different
	  file labels for each build, you may skip this step.
	
	        SS LABEL <Project Path/Filename> "-vl Final" "-l "
	
	The previous steps use the PIN command to lock a specific file revision in a
	project. When you label the project, the label is associated with the version of
	the files that exists in the project, not the newest version. Once the project
	is labeled, you use the LABEL command to remove the label if necessary. The
	UNPIN command then tells SourceSafe to use the latest copy in the project.
	
	
	Additional query words: 4.00 GET 5.00
	
	======================================================================
	Keywords          : kbSSafe kbSSafe400 kbSSafe500 kbSSafe600 kbFAQ kbDSupport kbSsafe600FAQ 
	Technology        : kbSSafeSearch kbAudDeveloper kbSSafe600 kbSSafe400 kbSSafe500
	Version           : WINDOWS:4.0,5.0,6.0
	Issue type        : kbhowto
	
	=============================================================================
	
