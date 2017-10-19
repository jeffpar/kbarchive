---
layout: page
title: "Q171350: BUG: Analyze Always Updates aaaaaaaa.cnt"
permalink: /kb/171/Q171350/
---

## Q171350: BUG: Analyze Always Updates aaaaaaaa.cnt

	Article: Q171350
	Product(s): Microsoft SourceSafe
	Version(s): 
	Operating System(s): 
	Keyword(s): kbSSafe400bug kbSSafe500bug kbSSafe600bug
	Last Modified: 01-MAY-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual SourceSafe for Windows, versions 4.0a, 5.0, 6.0 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	Analyze will always update the value of the file aaaaaaaa.cnt, even if you run
	it without -f. Visual SourceSafe uses this file to determine the next physical
	file to be created in the database. If a file is accidentally copied into one of
	the database subdirectories and Analyze is run on the database, aaaaaaaa.cnt may
	be set to an abnormally large value. If Analyze returns an "unable to create
	filemapping for database" error, you should check aaaaaaaa.cnt and you may need
	to reset it. You should also check the subdirectories of the data directory for
	a file that does not belong there.
	
	MORE INFORMATION
	================
	
	SourceSafe database files follow an order that allows every log file in the data
	directory to be associated with a number. The number can be derived using the
	following algorithm:
	
	     __int64 PhyToNum(char *szFile)
	     {
	     __int64 lFileNum = 0;   /* Counter for file Number */ 
	     int  i;              /* Loop Variable */ 
	
	     for( i=7; i >= 0; i-- ) /* Start from the right of the filename */ 
	      {
	       lFileNum *= 26;  /* Multiply by the appropriate power of 26 */ 
	       lFileNum += (__int64)(toupper(szFile[i]) - 'A');
	                        /* Convert the value */ 
	      }
	     return (lFileNum);
	     }
	
	Please note that the __int64 is a Microsoft-specific variable type for a 64- bit
	integer. This code snippet may not work with all compilers.
	
	If Analyze detects a filename that was put into one of the subdirectories of the
	data directory by mistake, it can evaluate to a number higher than any other
	file in the database. Analyze allocates memory for every file from the first to
	the highest number it finds, even if some of those files do not physically exist
	in the data directory. This can cause Analyze to ask for more memory than the
	operating system can make available. As a result, the "unable to create
	filemapping" message appears.
	
	If the aaaaaaaa.cnt is set to an incorrectly large value and files and projects
	are then added to SourceSafe, it might be impossible to return the database to a
	usable state without deleting and purging the files that represent the large
	values in their physical names. This can be very difficult if a large number of
	files and projects have been added since the aaaaaaaa.cnt file was set to a
	large value.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in the Microsoft products listed at
	the beginning of this article.
	
	Additional query words:
	
	======================================================================
	Keywords          : kbSSafe400bug kbSSafe500bug kbSSafe600bug 
	Technology        : kbSSafeSearch kbAudDeveloper kbSSafe600 kbSSafe400a kbSSafe500
	Issue type        : kbbug
	
	=============================================================================
	
