---
layout: page
title: "Q154492: FIX: List of Fixes in VC++ 4.2 to Bugs in VC++ 4.0/VC++ 4.1"
permalink: /kb/154/Q154492/
---

## Q154492: FIX: List of Fixes in VC++ 4.2 to Bugs in VC++ 4.0/VC++ 4.1

{% raw %}

	Article: Q154492
	Product(s): Microsoft C Compiler
	Version(s): 4.2
	Operating System(s): 
	Keyword(s): kbGenInfo kbVC kbArtTypeINFkbbuglist kbfixlist
	Last Modified: 15-FEB-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual C++, 32-bit Enterprise Edition, version 4.2 
	- Microsoft Visual C++, 32-bit Professional Edition, version 4.2 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	This article lists fixes in Visual C++ version 4.2 to bugs that appeared in the
	Microsoft 32-bit Edition of Visual C++ version 4.0 and 4.1.
	
	
	MORE INFORMATION
	================
	
	Visual C++ version 4.2 fixes several Visual C++ version 4.0 and 4.1 bugs. These
	bugs include Developer Studio debugger problems with breakpoints and long
	directory structure names, and MFC database classes problems with certain ODBC
	drivers producing "Out of memory" errors. Many developers will find the bug
	fixes listed in this article to be of particular interest.
	
	1. In an MFC application that uses the Microsoft database classes, when using
	  certain ODBC drivers, you may get "Out of memory" errors. These errors can
	  occur when mapping a CString to a SQL_LONGVARCHAR, SQL_VARCHAR, or other SQL
	  data type fields if a driver returns a large precision value from
	  SQLDescribeCol() for the column.
	
	  For more information, please see the following article in the Microsoft
	  Knowledge Base:
	
	  Q148787 FIX: Run Out of Memory or Assertion in GetBufferSetLength()
	
	
	2. In the Microsoft Developer Studio, you may not be stopping at breakpoints you
	  have set if your project was built from a directory structure that contained
	  long names. This problem did not exist in Visual C++ 4.0.
	
	  For more information, please see the following article in the Microsoft
	  Knowledge Base:
	
	  Q150936 FIX: VC41 Debugger Fails to Stop on Breakpoints w/ Long Names
	
	
	3. _CRTDBG_MAP_ALLOC does not work as documented. When an object is allocated
	  through use of the new operator and dumped through use of the debugging
	  routines in the C Run-Time Library, the allocation is reported as occurring
	  in the Crtdbg.h file, line 512.
	
	  For more information, please see the following article in the Microsoft
	  Knowledge Base:
	
	  Q140858 FIX: _CRTDBG_MAP_ALLOC Does Not Work as Documented
	
	
	4. Attempting to add a function or variable to a class by using ClassView fails
	  and returns the error message:
	
	  One or more of the files for <class name> are read-only.
	
	  <class name> corresponds to the class that is selected.
	
	  For more information, please see the following article in the Microsoft
	  Knowledge Base:
	
	  Q140270 FIX: ClassView Add Function/Variable Fails If Header File Moved
	
	
	5. When using the CCheckListBox class in MFC and specifying a style of
	  LBS_MULTICOLUMN, the user will be unable to check or uncheck items that are
	  not displayed in the first column.
	
	  For more information, please see the following article in the Microsoft
	  Knowledge Base:
	
	  Q142960 FIX: CCheckListBox Fails with Style LBS_MULTICOLUMN
	
	
	6. If the #include preprocessor directive is used in a template class
	  definition, the compiler generates a C1001 internal compiler error in
	  compiler file msc1.cpp, line 899.
	
	  For more information, please see the following article in the Microsoft
	  Knowledge Base:
	
	  Q146000 FIX: C1001 Including Header File in Template Class Definition
	
	
	7. On Windows NT, when running in debug mode using a dynamically-loaded DLL such
	  as an OLE control with a long file name or an .exe file with a long file
	  name, the debugger may not break at set breakpoints. You may be able to set
	  breakpoints both before starting and while it is running, but the debugger
	  will not break on them.
	
	  For more information, please see the following article in the Microsoft
	  Knowledge Base:
	
	  Q146447 FIX: Breakpoints Not Hit for Long File Name DLL/EXE
	
	
	8. It is possible to use AppWizard to create an OLE Custom Control (.ocx file)
	  that subclasses a standard Windows control. If you choose to subclass an edit
	  control, the control will not exhibit the same behavior as a standard edit
	  control.
	
	  For more information, please see the following article in the Microsoft
	  Knowledge Base:
	
	  Q146617 FIX: SetWindowText(NULL) Doesn't Clear .OCX Edit Control
	
	
	9. Under circumstances similar to the following, ClassWizard may cause an access
	  violation:
	
	  1. Derive a class CRecordSet1 from CRecordSet using ClassWizard.
	
	  2. Derive a class CRecordSet2 from CRecordSet using ClassWizard.
	
	  3. Replace all occurrences of CRecordSet in the .cpp and .h files for
	     CRecordSet2 with CRecordSet1. When ClassWizard is invoked to view
	     CRecordSet2, an access violation may occur. This may also happen with
	     CDaoRecordset class.
	
	  For more information, please see the following article in the Microsoft
	  Knowledge Base:
	
	  Q147735 FIX: ClassWizard Quits If Class Twice Derived from CRecordSet
	
	
	10. Running an application that uses the MFC DAO classes to retrieve CLongBinary
	  data from a database may result in one or more of the following behaviors
	  when performing a recordset move or requery:
	
	  Access violations or "Out of memory" exceptions.
	
	  For more information, please see the following article in the Microsoft
	  Knowledge Base:
	
	  Q147948 FIX: Errors Occurs Using DAO CLongBinary Data from Database
	
	
	11. COleDateTimeSpan returns an incorrect number of days when using dates
	  earlier than midnight December 30, 1899. Also, adding or subtracting
	  COleDateTimeSpan objects from COleDateTime objects will produce incorrect
	  results if the resulting date is before midnight December 30, 1899.
	
	
	12. When installing ODBC drivers from the Visual C++ 4.1 CD-ROM, you may see the
	  following error message:
	
	  Setup could not open the file: "...\MSDEV\REDIST\ORACLE.HLP"
	
	  For more information, please see the following article in the Microsoft
	  Knowledge Base:
	
	  Q148916 FIX: Setup Could Not Open \Msdev\Redist\Oracle.hlp File
	
	
	13. Running an application built using the MFC ODBC classes to retrieve
	  CLongBinary date from a database may result in data truncation. If Visual
	  C++ 4.1 is used, the truncation is only evident in release builds; debug
	  builds work as expected.
	
	  For more information, please see the following article in the Microsoft
	  Knowledge Base:
	
	  Q149137 FIX: ODBC Long Binary Functions Use SQL_NO_TOTAL Incorrectly
	
	
	14. Using /O1 (minimize size) or /O2 (maximize speed) causes a C1001 internal
	  compiler error in a try block. The error is in compiler file
	  \school.tp2\test\c10\src\p2\main.c, line 413. Additionally, C++ exception
	  handling must be enabled (/GX). If the warning level is set to 4 (/W4),
	  C4702 (unreachable code) warnings are issued before C1001.
	
	  For more information, please see the following article in the Microsoft
	  Knowledge Base:
	
	  Q150884 FIX: C1001 Fatal Error in File Main.c, Line 413 for /O1 or /O2
	
	
	15. If the MFC CMultiLock class is used to synchronize on more than eight
	  synchronization objects, a memory leak occurs when using CEvent, CSemaphore,
	  or CMutex as the synchronization objects. The size of the leak equals the
	  number of synchronization objects used multiplied by the memory needed for a
	  BOOL variable.
	
	  For more information, please see the following article in the Microsoft
	  Knowledge Base:
	
	  Q151033 FIX: Using CMultiLock Class Can Cause a Memory Leak
	
	
	16. Using Visual C++ 4.0 or 4.1 C Run-time to asynchronously spawn a child
	  process that is inheriting a pipe handle, the parent process hangs before
	  returning from the spawn call.
	
	  For more information, please see the following article in the Microsoft
	  Knowledge Base:
	
	  Q151071 FIX: Spawn Hangs When Inheriting Pipe Handle
	
	
	17. When using MFC 4.0 or 4.1, an assert can occur in bardock.cpp, line 682 when
	  CFrameWnd::LoadBarState() is called. This behavior occurs if SaveBarState()
	  was previously called and more than one CToolBar was docked at the bottom of
	  the window.
	
	  For more information, please see the following article in the Microsoft
	  Knowledge Base:
	
	  Q151382 FIX: LoadBarState() Causes Assert In Bardock.cpp, Line 682
	
	
	18. With MFC 4.0 or 4.1, the internal state of the ControlBars is corrupted when
	  ControlBars are docked and undocked. The size of the registry key or the
	  .INI file grows when SaveBarState is a result of this corruption.
	
	  For more information, please see the following article in the Microsoft
	  Knowledge Base:
	
	  Q151446 FIX: Internal State of ControlBars Corrupted
	
	
	19. When using the MFC ODBC classes with the Microsoft SQL Server ODBC driver
	  version 2.65.0201 that ships with Microsoft SQL Server 6.5, CDBExceptions
	  can be thrown that contain no information about what led to the exception.
	
	  For more information, please see the following article in the Microsoft
	  Knowledge Base:
	
	  Q151683 FIX: MFC ODBC Exceptions Using the SQL Server 6.5 Driver
	
	
	20. When installing ODBC drivers from the Visual C++ 4.1 CD-ROM by running setup
	  from \msdev\redist, you may see the following error message:
	
	  Setup could not open the file: "...\MSDEV\REDIST\QFEUPD.EXE".
	
	  When this happens, you have to quit the setup program.
	
	  For more information, please see the following article in the Microsoft
	  Knowledge Base:
	
	  Q152317 FIX: Setup Could Not Open \MSDEV\REDIST\QFEUPD.EXE
	
	
	21. When using MFC ISAPI classes to send a POST HTTP request to an MFC ISAPI
	  DLL, an access violation may occur in the debugger, or a message about a
	  failed request from the Web browser may be generated.
	
	  For more information, please see the following article in the Microsoft
	  Knowledge Base:
	
	  Q152365 FIX: Sending a POST HTTP Request May Cause an Access Violation
	
	
	22. Using the ClassWizard to associate a short with a control on a dialog may
	  result in an access violation when UpdateData(TRUE) is called, or in other
	  member variables of the dialog being corrupted after the call
	  toUpdateData(TRUE).
	
	  For more information, please see the following article in the Microsoft
	  Knowledge Base:
	
	  Q152384 FIX: DDX for Short Causes Stack Corruption
	
	
	23. Generating an ISAPI filter using the MFC ISAPI Extension Wizard and
	  selecting the option "Client Authentication Requests," will generate an
	  ISAPI filter DLL with an OnAuthentication() member function that will never
	  be called.
	
	  For more information, please see the following article in the Microsoft
	  Knowledge Base:
	
	  Q152493 FIX: ISAPI Extension Wizard Generates Bad OnAuthentication
	
	
	24. When the POST method is used to send information from an HTML form to an MFC
	  ISAPI DLL, the last parameter in the function handling command may have
	  extra characters that are not part of the actual input. This will happen if
	  the last parameter is a string.
	
	  For more information, please see the following article in the Microsoft
	  Knowledge Base:
	
	  Q152968 FIX: Extra Invalid Characters in String Arguments
	
	
	Additional query words: 4.00 4.10 4.20 kbdsi
	
	======================================================================
	Keywords          : kbGenInfo kbVC kbArtTypeINF kbbuglist kbfixlist
	Technology        : kbVCsearch kbAudDeveloper kbVC420 kbVC32bitSearch
	Version           : :4.2
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	

{% endraw %}
