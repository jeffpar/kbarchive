---
layout: page
title: "Q140317: DOC: Visual SourceSafe Treats Binary Files Differently"
permalink: kb/140/Q140317/
---

## Q140317: DOC: Visual SourceSafe Treats Binary Files Differently

	Article: Q140317
	Product(s): Microsoft SourceSafe
	Version(s): 
	Operating System(s): 
	Keyword(s): kbdocerr kbSSafe400 kbSSafe500
	Last Modified: 07-DEC-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual SourceSafe for Windows, versions 4.0, 5.0 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	There are four differences regarding how Visual SourceSafe treats binary files.
	The Help file gives only three of them, but the "User's Guide" gives all four.
	
	MORE INFORMATION
	================
	
	How Visual SourceSafe Treats Binary Files
	-----------------------------------------
	
	There are three differences regarding how Visual SourceSafe treats binary files
	that are significant.
	
	The Help file describes only three differences for how Visual SourceSafe treats
	binary files as follows:
	
	- Internally, Visual SourceSafe's mechanisms for storing changes differs for
	  text files (which have distinct lines as units of comparison) and binary
	  files (which have no obvious line delimiter). That's why it is important for
	  Visual SourceSafe to correctly identify the type of a file. The wrong type
	  does not result in errors, but it makes Visual SourceSafe's algorithms much
	  less efficient.
	
	- Another area of difference is with respect to the Show Differences command.
	  With a binary file, Visual SourceSafe stores each change as a small record of
	  which bytes moved where: useful for reconstructing earlier versions, but not
	  for display. Therefore, when you use the Show Differences command on a binary
	  file, Visual SourceSafe can tell you if the file has changed; but it cannot
	  display how the file has changed.
	
	- The third difference occurs with end-of-line characters. With a text file,
	  Visual SourceSafe automatically translates end-of-line characters between
	  different operating systems; with a binary file, Visual SourceSafe never
	  alters the contents of the file in any way (except for keyword expansion).
	
	The "User's Guide," however, mentions an additional difference:
	
	- Another difference in Visual SourceSafe's treatment of binary files compared
	  with text files is that binary files cannot be merged. Therefore, multiple
	  checkouts cannot be done with binary files.
	
	REFERENCES
	==========
	
	Visual SourceSafe 4.0 Help file, "Setting the File Type: Text and Binary
	Files."
	
	Visual SourceSafe 4.0, "User's Guide," Chapter 4, Project and File Basics,
	"Distinguishing Text and Binary Files" Section, "How Visual SourceSafe Treats
	Binary Files" topic.
	
	Additional query words:
	
	======================================================================
	Keywords          : kbdocerr kbSSafe400 kbSSafe500 
	Technology        : kbSSafeSearch kbAudDeveloper kbSSafe400 kbSSafe500
	
	=============================================================================
	
