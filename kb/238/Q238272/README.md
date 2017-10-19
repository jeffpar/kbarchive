---
layout: page
title: "Q238272: BUG: Show Difference Causes VSS to Hang on Large Text Files"
permalink: /kb/238/Q238272/
---

## Q238272: BUG: Show Difference Causes VSS to Hang on Large Text Files

	Article: Q238272
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
	
	Performing a Show Differences between the Microsoft Visual SourceSafe copy of a
	5MB or larger text file that contains either Carriage Returns or Line Feeds, and
	the Working Folder copy of the same file, causes Visual SourceSafe to either
	hang or take an excessive amount of time to complete the request.
	
	RESOLUTION
	==========
	
	Keep text files to less than 5 MB in size. Performing the "Show Differences"
	operation on files that contain Carriage Returns or Line Feeds at the end of
	each line, but are only 3 - 4 MB in size, results in no error.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a bug in the Microsoft products listed at the
	beginning of this article.
	
	MORE INFORMATION
	================
	
	Steps to Reproduce Behavior
	---------------------------
	
	1. Create a 5 MB or larger text file with carriage returns or line feeds at the
	  end of each line.
	2. Add the file to Visual SourceSafe (VSS) by dragging it into the VSS Explorer
	  over the root project "$/".
	3. Right-click on parent project to select it and choose "Set Working
	  Folder...", accept the default settings and click OK.
	4. Right-click on the file and choose CHECK OUT.
	5. At the next dialog box, click OK.
	
	6. Modify a line of text near the top of your document. For example, on the 5th
	  line of your sample file, change the a word to xxxxxxxx.
	7. Modify a line of text near the bottom of your document. For example, on the
	  5th line from the bottom, change a word to xxxxxxxx.
	8. Save the file.
	9. In the Visual SourceSafe Explorer, right-click on your sample text document
	  and choose Show Differences.
	
	Results:
	
	The Show Differences command will either take a very long time to complete, more
	than ten minutes, or it appears to hang.
	
	Expected Results:
	
	The Show Differences command should take a reasonable amount of time to complete.
	
	REFERENCES
	==========
	
	For more information about using the Show Differences feature of Visual
	SourceSafe 6.0, please refer to the following Microsoft Knowledge Base
	articles:
	
	  Q154968 HOWTO: Customize the Difference Window
	
	  Q148512 INFO: Description of the Properties/About Command Line Commands
	
	Additional query words: diff vis get
	
	======================================================================
	Keywords          : kbSSafe500bug kbSSafe600bug kbSSExplorer _IK kbGrpDSSSafe 
	Technology        : kbSSafeSearch kbAudDeveloper kbSSafe600 kbSSafe500
	Version           : WINDOWS:5.0,6.0
	Issue type        : kbbug
	Solution Type     : kbnofix
	
	=============================================================================
	
