---
layout: page
title: "Q176875: INFO: The Primary Functions of Ssarc.exe and Ssrestor.exe"
permalink: /kb/176/Q176875/
---

## Q176875: INFO: The Primary Functions of Ssarc.exe and Ssrestor.exe

	Article: Q176875
	Product(s): Microsoft SourceSafe
	Version(s): WINDOWS:5.0,6.0
	Operating System(s): 
	Keyword(s): kbSSafe500 kbSSafe600 kbFAQ kbDSupport kbSsafe600FAQ
	Last Modified: 18-JUL-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual SourceSafe for Windows, versions 5.0, 6.0 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	Earlier versions of the Visual SourceSafe did not provide a method for archiving
	parts of Visual SourceSafe databases. The only way to free up space was to
	destroy a file or project. Furthermore, there was no way to move information
	between databases. The archive utilities Ssarc.exe and Ssrestor.exe are separate
	command-line utilities that allow you to do the following:
	
	1. Archive a file or project out of the database into a special compressed file,
	  then restore it later with its history, Share Links, and other information
	  intact.
	
	2. Archive specific versions of a file (for example, all versions prior to 3.1),
	  thus freeing up the space they use in the database, and then restore them to
	  the database later.
	
	3. Archive a file, project or project tree from one database and restore it into
	  a different database.
	
	MORE INFORMATION
	================
	
	The archive utilities Ssarc.exe and Ssrestor.exe are separate command-line
	utilities that allow you to do the following:
	
	1. Archive a file or project out of the database into a special compressed file,
	  then restore it later with its history, Share Links, and other information
	  intact.
	
	  A syntax example of this is:
	
	        C:\>"C:\Program Files\DevStudio\Vss\Win32\SSARC" -d- -i- -sD:\VSSTest
	        Archive.ssa $/ 
	
	  The quotes are only necessary if a space exists in the command line. The -d-
	  option is an instruction not to delete the files being archived from the
	  original database. The -i- option is an instruction for no input (accept all
	  defaults). The -s switch specifies a path to the Srcsafe.ini and the data
	  directory.
	
	2. Archive specific versions of a file (for example, all versions prior to 5),
	  thus freeing up the space they use in the database, and then restore them to
	  the database later.
	
	  For example, if the files in the project are at least version 20 and you want
	  to archive old versions that are no longer needed, the you could use the
	  following syntax to accomplish this:
	
	        C:\>"C:\Program Files\Devstudio\Vss\Win32\SSARC" -v10 -sD:\VSSTest
	        Archive.ssa $/Queries/Test
	
	  Because the -d- and -i- options where not specified, the user will be prompted
	  to answer the questions:
	
	  Delete archived information from database?(Y/N)
	  File C:\archive.ssa already exists. Overwrite?(Y/N)
	
	  NOTE: In general, the archive utility is inclusive. That is, in the above
	  example, the created archive (Archive.ssa) contains version 10 and everything
	  before it. If you are using a label, and the label has a space in it, you
	  must add an end quote to the entire option (for example, "-vThis One").
	
	3. Archive a file, project or project tree from one database and restore it into
	  a different database. You could use the following syntax to restore the
	  Archive.ssa (from example one above) from the VSSTest database to another
	  database called VSSTest2:
	
	       C:\>"C:\Program Files\Devstudio\Vss\Win32\SSRESTOR" -sD:\VSSTest2
	       Archive.ssa $/Queries/Test
	
	  For additional information, please see the following articles in the Microsoft
	  Knowledge Base:
	
	  Q173387 PRB: Restoring an Archive of an Entire Database
	
	  Q172157 PRB: Do Not Use SourceSafe When Running SSARC or SSRESTOR
	
	REFERENCES
	==========
	
	Visual SourceSafe, version 5.0, "Visual SourceSafe User's Guide," pages 217- 220
	
	Additional query words:
	
	======================================================================
	Keywords          : kbSSafe500 kbSSafe600 kbFAQ kbDSupport kbSsafe600FAQ 
	Technology        : kbSSafeSearch kbAudDeveloper kbSSafe600 kbSSafe500
	Version           : WINDOWS:5.0,6.0
	Issue type        : kbinfo
	
	=============================================================================
	
