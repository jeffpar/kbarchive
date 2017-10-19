---
layout: page
title: "Q163734: WD97: Word Solution Migration Information on the Web"
permalink: /kb/163/Q163734/
---

## Q163734: WD97: Word Solution Migration Information on the Web

	Article: Q163734
	Product(s): Word 97 for Windows
	Version(s): 97
	Operating System(s): 
	Keyword(s): kbwordvbakbfaq
	Last Modified: 14-NOV-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Word 97 for Windows 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	Resources for Migrating WordPerfect Macros to Word 97 as well as additional Word
	97 solution migration papers are available on the Office Developer Forum.
	
	Connect to the Office Developer Forum using the following Web address:
	
	  http://msdn.microsoft.com/office
	
	MORE INFORMATION
	================
	
	Solutions migration information for all of the Microsoft Office applications
	available on the Office Developer Forum Migration page can be found at the
	following Web address:
	
	  http://msdn.microsoft.com/office
	
	Converting WordPerfect Macros to Visual Basic for Applications
	--------------------------------------------------------------
	
	This white paper describes the methodology, approach, and requirements for
	converting macros developed for various versions of WordPerfect to Visual Basic
	for Applications in Microsoft Word 97. See the following Web site at:
	
	  http://www.microsoft.com/worddev/articles/wpconv.htm
	
	WordPerfect 5.1 Macro Text Extractor
	------------------------------------
	
	WordPerfect 5.1 for MS-DOS uses a proprietary file format for storing macros.
	This macro-to-text utility converts macros written for WordPerfect 5.1 to
	standard text for viewing and printing.
	
	  http://www.microsoft.com/worddev/articles/cvt1.htm
	
	NOTE: The utility does not translate WordPerfect macro code to Visual Basic for
	Applications.
	
	Additional Word Solution Migration Papers
	-----------------------------------------
	
	The following papers are also available for developers creating solutions in
	Microsoft Word 97:
	
	  WordBasic Migration to Visual Basic for Applications:
	-----------------------------------------------------
	
	In Microsoft Word 97, WordBasic code is automatically migrated to Visual Basic.
	This white paper explains the conversion process, many of the known conversion
	issues, and solutions to resolve conversion issues.
	
	 WordBasic to Visual Basic for Applications Conversion Table:
	------------------------------------------------------------
	
	Excerpted from the online Help file found in Office 97, this conversion table
	provides a quick reference guide for Microsoft Word developers to locate the
	Visual Basic for Applications equivalent of WordBasic commands.
	
	 Microsoft Word Objects:
	-----------------------
	
	This chapter from the Microsoft Office 97/Visual Basic Programmer's Guide talks
	about the objects available in Word 97. The Programmer's Guide is included with
	Microsoft Office 97, Developer Edition.
	
	  Switching from WordBasic:
	-------------------------
	
	This appendix from the Microsoft Office 97/Visual Basic Programmer's Guide talks
	about switching from WordBasic to Visual Basic for Applications. The
	Programmer's Guide is included with Microsoft Office 97, Developer Edition.
	
	 Updating String Functions in WLLs and DLLs for Word 97:
	-------------------------------------------------------
	
	Visual Basic requires external libraries to use BSTR values in string -related
	functions. If you've written 32-bit Word add-in libraries (WLLs) or dynamic-link
	libraries (DLLs) that you need to use or support in Word 97, you need to modify
	any string-related functions in your library and recompile it. This paper
	describes the steps for updating those functions in your source files to avoid
	errors when the functions are called from Visual Basic.
	
	Updated WbODBC.wll
	------------------
	
	Executable file contains: Wbodbc97.dot, Wbodbc.wll, Test.mdb, Readme.txt
	
	If you've written Word 7.0 solutions that use the ODBC functions in WbODBC.wll (a
	Word add-in library available in the Microsoft Word Developer's Kit, 3rd
	edition), you'll need to install this updated version of the WLL to run your
	solution in Word 97. In addition to a new version of the WLL, this download also
	includes new versions of the sample ODBC macros template (WbODBC97.dot) and the
	corresponding test database (Test.mdb). The macros in WbODBC97.dot have been
	updated to use Visual Basic and demonstrate how to use the ODBC add-in functions
	in Word 97. For complete information about this update, see the Readme.txt file
	included in this download. For more information about this file, see the
	following Microsoft Office Developer Web site:
	
	  http://www.microsoft.com/WordDev/Articles/WbOdbcdl.htm
	  (http://www.microsoft.com/WordDev/Articles/WbOdbcdl.htm)
	
	
	Other Web Resources
	-------------------
	
	Developer Resource Central at the following Web address:
	
	  hhttp://msdn.microsoft.com/office/
	
	Visual Basic Online Developer (from Pinnacle Publishing Inc.) at the following
	Web address:
	
	  http://www.pinpub.com/vbd/
	
	
	Additional query words: wordcon 97 word8 word97 8.0 vb vbe vba
	
	======================================================================
	Keywords          : kbwordvba kbfaq
	Technology        : kbWordSearch kbWord97 kbWord97Search kbZNotKeyword2
	Version           : :97
	Issue type        : kbinfo
	
	=============================================================================
	
