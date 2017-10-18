---
layout: page
title: "Q195407: INFO: FoxTools Functions That Have Been Incorporated Into VFP 6"
permalink: kb/195/Q195407/
---

## Q195407: INFO: FoxTools Functions That Have Been Incorporated Into VFP 6

	Article: Q195407
	Product(s): Microsoft FoxPro
	Version(s): WINDOWS:6.0
	Operating System(s): 
	Keyword(s): kbvfp600 kbXBase
	Last Modified: 13-AUG-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual FoxPro for Windows, version 6.0 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	The FoxTools library extends FoxPro functionality beyond what is included in the
	native product. The FoxTools Application Programming Interface (API) library
	exposes Windows functions that allow you to set and retrieve file information,
	manipulate paths and file names, use system alerts, and perform many functions.
	The FoxTools library still ships with Visual FoxPro 6.0, but some of the
	functionality is now built into the native FoxPro language.
	
	MORE INFORMATION
	================
	
	The FoxTools functions that built into the FoxPro language are fully explained
	in the FoxPro Online Help files.
	
	The following functions have been added to Visual FoxPro 6.0 from Foxtools; and
	you can now use them without executing a SET LIBRARY TO FOXTOOLS command. Any
	programs, class libraries, labels, or reports created in earlier versions of
	Visual FoxPro that contain any of the following functions may be recompiled:
	
	  Function Name        Description
	  -----------------------------------------------------------------------
	
	  ADDBS( )             This function adds a backslash (if needed) to a
	                       path expression.
	
	  AGETFILEVERSION( )   This function creates an array containing
	                       information about files with Windows version
	                       resources such as .exe, .dll, and .fll files, or
	                       automation servers created in Visual FoxPro. This
	                       function corresponds to the GetFileVersion( )
	                       function in Foxtools.
	
	                       The following example displays Vfp6.exe file
	                       information:
	
	                          AGETFILEVERSION(myArray,SYS(2004)+"VFP6.EXE")
	                          DISPLAY MEMORY LIKE myArray
	
	  DEFAULTEXT( )        This function returns a file name with a new
	                       extension if one does not already exist. This
	                       function does not physically add a new extension to
	                       the file, it merely returns the new virtual
	                       extension if the file has no extension.
	
	                       For example:
	
	                         StrToFile("testtext", "test") && Creates a file
	                                                     && called
	                                                  && test (no extension).
	                        ?DefaultText("test", "txt")  && Returns "test.txt"
	
	  DRIVETYPE( )         This function returns the type of the specified
	                       drive. This value is numeric with the following
	                       descriptions:
	
	                          Number   Drive Type
	                          -------------------------------------------
	
	                          1        No type
	                          2        Floppy disk
	                          3        Hard disk
	                          4        Removable drive or network drive
	                          5        CD-ROM
	                          6        RAM disk
	
	  FORCEEXT( )          This function returns a string with the old file
	                       name extension replaced by a new extension. This
	                       function is similar to DefaultExt.
	
	  FORCEPATH( )         This function returns a file name with a new path
	                       name substituted for the old one.
	
	  JUSTDRIVE( )         This function returns the drive letter from a
	                       complete path.
	
	  JUSTEXT( )           This function returns the three-letter extension
	                       from a complete path.
	
	  JUSTFNAME( )         This function returns the file name portion of a
	                       complete path and file name.
	
	  JUSTPATH( )          This function returns the path portion of a
	                       complete path and file name.
	
	  JUSTSTEM( )          This function returns the stem name (the file name
	                       before the extension) from a complete path and file
	                       name.
	
	                       For example:
	
	                          cFileName = SYS(2004)+"VFP6.EXE"
	                          ?JUSTDRIVE(cFileName)
	                          ?JUSTEXT(cFileName)
	                          ?JUSTFNAME(cFileName)
	                          ?JUSTPATH(cFileName)
	                          ?JUSTSTEM(cFileName)
	
	REFERENCES
	==========
	
	Visual FoxPro Help; search on: "New and Enhanced Language Elements"
	
	Additional query words:
	
	======================================================================
	Keywords          : kbvfp600 kbXBase 
	Technology        : kbVFPsearch kbAudDeveloper kbVFP600
	Version           : WINDOWS:6.0
	Issue type        : kbinfo
	
	=============================================================================
	
