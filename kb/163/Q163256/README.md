---
layout: page
title: "Q163256: WD97: Updated WBODBC Files Available"
permalink: /kb/163/Q163256/
---

## Q163256: WD97: Updated WBODBC Files Available

	Article: Q163256
	Product(s): Word 97 for Windows
	Version(s): WINDOWS:97
	Operating System(s): 
	Keyword(s): kbwordvba
	Last Modified: 14-NOV-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Word 97 for Windows 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	Microsoft Visual Basic for Applications requires external libraries to use BSTR
	values in string-related functions. Therefore, 32-bit Word add-in libraries
	(WLLs) or dynamic-link libraries (DLLs) that use LPSTR values in string-related
	functions need to be modified and recompiled to work in Microsoft Word 97.
	
	The string functions in the ODBC add-in (Wbodbc.wll) have been updated so that
	the new version of the add-in contains string-related functions that do not
	cause errors when the functions are called from Visual Basic. There have been no
	other changes or additions to the functionality of the ODBC add-in. However, if
	you've written Word 7.0 solutions that use the ODBC functions in Wbodbc.wll, you
	must install the updated version of the WLL to run your solution in Word 97.
	
	The template of sample macros that use Wbodbc.wll (WbODBC97.dot) is a Word 97
	template. All the macros in this template have been updated to Visual Basic. You
	can refer to the sample macros (all of which use data in the Test.mdb database)
	as examples for using the functions in Wbodbc.wll.
	
	For complete information about using the functions in this add-in, running the
	macros in the sample template, and handling ODBC data sources in general, see
	Appendix B in the Microsoft Word Developer's Kit (ISBN 1-55615-880-7). Note that
	this WLL is an update to the 32-bit version of the ODBC add-in only; the updated
	WLL cannot be used by 16-bit Word solutions.
	
	If you're writing a new Word 97 solution that needs to programmatically access
	data in a database, you can use Microsoft(R) Data Access Objects (DAO) instead
	of the Wbodbc.wll functions. DAO 3.5, which is included with Microsoft Office
	97, is the newest version of DAO. There are two paths to data within one DAO
	interface: ODBCDirect and Microsoft Jet. One of the two paths will be more
	appropriate, depending on what the solution is doing.
	
	For example, if your solution is accessing a Microsoft Jet .mdb file or any other
	file share database, you should use the Microsoft Jet path. ODBCDirect was
	created specifically for accessing remote data. For more information about
	ODBCDirect, see to "Data Access Objects (DAO) 3.5 and ODBCDirect," a paper on
	the Microsoft Access Developer Forum (http://www.microsoft.com/accessdev/). For
	more information about accessing the Microsoft Jet database engine, see "Using
	DAO from Microsoft Word" in Microsoft Word Visual Basic Help (Vbawrd8.hlp).
	
	The updated Wbodbc.wll and Wbodbc97.dot files can only be obtained from the
	Microsoft Internet site:
	
	  http://www.microsoft.com/WordDev/Articles/WbOdbcdl.htm
	
	NOTE: Because the Microsoft Web site is constantly updated, the site address may
	change without notice. If this occurs, link to the Microsoft home page at the
	following address:
	
	  http://www.microsoft.com/
	
	NOTE: WBODBC is not supported by Microsoft Technical Support and is provided "as
	is."
	
	For additional information, please click the article number(s) below to view the
	article(s) in the Microsoft Knowledge Base:
	
	  Q145749 CAPI and WLL Support Policy
	
	Additional query words: wordcon 97 8.0 word8 word97
	
	======================================================================
	Keywords          : kbwordvba 
	Technology        : kbWordSearch kbWord97 kbWord97Search kbZNotKeyword2
	Version           : WINDOWS:97
	Issue type        : kbinfo
	
	=============================================================================
	
