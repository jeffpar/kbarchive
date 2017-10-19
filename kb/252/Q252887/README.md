---
layout: page
title: "Q252887: BUG: Truncated File Listing with Visual SourceSafe"
permalink: /kb/252/Q252887/
---

## Q252887: BUG: Truncated File Listing with Visual SourceSafe

	Article: Q252887
	Product(s): Microsoft SourceSafe
	Version(s): 5.0,6.0
	Operating System(s): 
	Keyword(s): _IK kbSSafe500bug kbSSafe600bug kbSSExplorer _IK kbGrpDSSSafe
	Last Modified: 01-MAY-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual SourceSafe for Windows, versions 5.0, 6.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	Generating a report on file differences truncates the lines of the files.
	
	CAUSE
	=====
	
	The display limits the entire line to 80 characters, which truncates lines at 36
	characters per file.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a bug in the Microsoft products listed at the
	beginning of this article.
	
	MORE INFORMATION
	================
	
	There are two ways to work around this problem:
	
	Command line:
	
	Execute the difference from the command line by using the -D switch and
	specifying how many characters wide to make the output.
	
	External program:
	
	Gather the files from SourceSafe on which you want to perform the difference and
	use another file difference utility to compare the two files.
	
	REFERENCES
	==========
	
	Additional information can be found in the Visual SourceSafe product
	documentation by searching for:
	
	- Difference (File) (Command Line)
	
	Additional query words:
	
	======================================================================
	Keywords          : _IK kbSSafe500bug kbSSafe600bug kbSSExplorer _IK kbGrpDSSSafe 
	Technology        : kbSSafeSearch kbAudDeveloper kbSSafe600 kbSSafe500
	Version           : :5.0,6.0
	Issue type        : kbbug
	Solution Type     : kbnofix
	
	=============================================================================
	
