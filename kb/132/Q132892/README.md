---
layout: page
title: "Q132892: INFO: SourceSafe Might Modify Some Files"
permalink: /kb/132/Q132892/
---

## Q132892: INFO: SourceSafe Might Modify Some Files

	Article: Q132892
	Product(s): Microsoft SourceSafe
	Version(s): 
	Operating System(s): 
	Keyword(s): kbSSafe400 kbSSafe500 kbSSafe600 kbSSafe310 kbSSafe304
	Last Modified: 01-MAY-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual SourceSafe for Windows, versions 4.0, 5.0, 6.0 
	- Microsoft SourceSafe for Windows, versions 3.04, 3.1 
	- Microsoft SourceSafe for Windows NT, versions 3.04, 3.1 
	- Microsoft SourceSafe for MS-DOS, versions 3.04, 3.1 
	- Microsoft SourceSafe for Macintosh, versions 3.04, 3.1 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	SourceSafe may modify a file you checked out or put in your local working
	directory. This is because SourceSafe is a multi-platform product. For text
	files, the end-of-line character will vary depending on the platform that you
	are using. One of the features of SourceSafe is that it converts these
	characters for you as necessary.
	
	However, if you need the file to remain as is, this feature can produce
	unexpected results, errors, or problems.
	
	The errors that may occur depend on the format of the file and the application
	that is accessing the file. For example, an application may produce a General
	Protection error in Windows, or not recognize the file format as valid.
	
	For additional information, please see the following article in the Microsoft
	Knowledge Base:
	
	  Q170750 INFO: End of Line Character Settings for Visual SourceSafe
	
	
	MORE INFORMATION
	================
	
	SourceSafe detects binary files by looking for the ASCII value '0' (Null). This
	null value is only present in a binary file. Some files may not have this
	character, but need to be treated as binary regardless. For instance, Rich Text
	Format (RTF) files perform better if treated as binary rather than text files.
	
	If a file format you are using seems to be corrupted by SourceSafe after getting
	it to your working directory, check the file type. You can do this in the
	interface by selecting Properties from the Info menu option. If the File type is
	Text change it to Binary.
	
	From the command line, execute:
	
	       ss filetype $/project/filename
	
	This will return the current file type. To change to binary, use the command:
	
	       ss filetype $/project/filename -b
	
	An easy way to make sure all files with a certain extension are treated as binary
	is to use the Binary_Masks setting in the SRCSAFE.INI or SS.INI. For example:
	
	       Binary_Masks = *.rtf
	
	Make sure this setting is placed before any headers (enclosed in '[' ']'
	characters). This will ensure that it applies to all projects.
	
	Additional query words:
	
	======================================================================
	Keywords          : kbSSafe400 kbSSafe500 kbSSafe600 kbSSafe310 kbSSafe304 
	Technology        : kbHWMAC kbOSMAC kbSSafeSearch kbAudDeveloper kbZNotKeyword2 kbZNotKeyword3 kbSSafe304 kbSSafe304DOS kbSSafe310 kbSSafe310DOS kbSSafe304Mac kbSSafe310Mac kbSSafe600 kbSSafe400 kbSSafe500 kbSSafe304NT kbSSafe310NT
	Issue type        : kbinfo
	
	=============================================================================
	
