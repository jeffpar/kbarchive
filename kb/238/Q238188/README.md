---
layout: page
title: "Q238188: BUG: Branching a file gives &quot;A more recent version is checked ou"
permalink: kb/238/Q238188/
---

## Q238188: BUG: Branching a file gives &quot;A more recent version is checked ou

	Article: Q238188
	Product(s): Microsoft SourceSafe
	Version(s): WINDOWS:5.0,6.0
	Operating System(s): 
	Keyword(s): kbSSafe500bug kbSSafe600bug kbSSExplorer _IK kbGrpDSSSafe
	Last Modified: 01-MAY-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual SourceSafe for Windows, versions 5.0, 6.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	If you try to branch a shared file you get the following error message:
	
	  A more recent version is checked out.
	
	CAUSE
	=====
	
	This error is seen when both of the following conditions are true:
	
	- The file you are trying to branch is pinned at a previous version.
	- The file it is shared with is currently checked out.
	
	SourceSafe doesn't let you branch the file at a previous version while a more
	recent version is checked out.
	
	RESOLUTION
	==========
	
	To resolve this problem, see the following:
	
	- Check the shared file back in.
	- Perform the branch from the command line.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a bug in the Microsoft products listed at the
	beginning of this article.
	
	MORE INFORMATION
	================
	
	Steps to Reproduce Behavior
	---------------------------
	
	1. Share "$/Project1/file1" in SourceSafe to a new location, "$/Project2/file1".
	
	2. Pin "$/Project2/file1" at current version.
	
	3. Check out "$/Project1/file1" and make a change.
	
	4. Check "$/Project1/file1" back in.
	
	5. Check "$/Project1/file1" back out again.
	
	6. Branch "$/Project2/file1".
	
	REFERENCES
	==========
	
	Additional information can be found in the Visual SourceSafe product
	documentation by searching for these titles:
	
	- Branch shared files, how to
	- Command line, branch
	
	Additional query words: pin share
	
	======================================================================
	Keywords          : kbSSafe500bug kbSSafe600bug kbSSExplorer _IK kbGrpDSSSafe 
	Technology        : kbSSafeSearch kbAudDeveloper kbSSafe600 kbSSafe500
	Version           : WINDOWS:5.0,6.0
	Issue type        : kbbug
	Solution Type     : kbpending
	
	=============================================================================
	
