---
layout: page
title: "Q151166: FIX: Fixes in VC++ 4.1 to Bugs in VC++ 4.0 32-Bit Edition"
permalink: /kb/151/Q151166/
---

## Q151166: FIX: Fixes in VC++ 4.1 to Bugs in VC++ 4.0 32-Bit Edition

	Article: Q151166
	Product(s): Microsoft C Compiler
	Version(s): 4.1
	Operating System(s): 
	Keyword(s): kbbuglist kbfixlist
	Last Modified: 14-FEB-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual C++, version 4.1 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	This article lists fixes in Visual C++ version 4.1 to bugs that appeared in the
	Microsoft 32-bit edition of Visual C++ version 4.0.
	
	
	MORE INFORMATION
	================
	
	Visual C++ version 4.1 fixes several Visual C++ version 4.0 bugs. These bugs
	include Developer Studio crashing issues and debugger crashing issues. Many
	developers will find the bug fixes listed in this article to be of particular
	interest.
	
	Fixed Wizards Bugs
	------------------
	
	- Typelibs with long member names crashed ClassWizard. ClassWizard had a limit
	  of 1024 characters on typelib member names. This limit has been increased to
	  about 3000 characters.
	
	  For more information, please see the following article in the Microsoft
	  Knowledge Base:
	
	  Q148230 TypeLibs with Large Argument Lists May Crash ClassWizard
	
	
	- You cannot select the alphabetically first table in your .mdb file when
	  setting up a DAO table type recordset via AppWizard. This would result in an
	  error message saying: "You must select on table for this table-type
	  recordset."
	
	  For more information, please see the following article in the Microsoft
	  Knowledge Base:
	
	  Q139490 Can't Select First Table When Creating DAO Table Recordset
	
	
	- AppWizard generated the wrong coclass statement in the ODL file when creating
	  an OLE Automation server. The most important effect of this was that Visual
	  Basic would not recognize a declaration of a type using the automation
	  server. Visual Basic would give an error message: "User- defined type not
	  defined."
	
	
	- ClassWizard did not update the ODL file when you marked an ODL file as
	  read-only and then removed the attribute. After the read-only attribute was
	  removed, ClassWizard would let you do an Add Class, but it would not update
	  the ODL file.
	
	
	- When adding a component to the Component Gallery from the ClassView using a
	  project under source code control, Component Gallery would prompt you to
	  check out more files than necessary. In addition, if you got an error
	  message: "cannot add to Component Gallery", the Component Gallery would not
	  tell the IDE to repaint itself. (IDE repaint is turned off during Component
	  Gallery execution to avoid flicker.) This led to the impression that the IDE
	  was hung.
	
	
	- When creating a custom AppWizard from an existing project that used a
	  component from Component Gallery, AppWizard created incorrect code in the
	  resulting AppWizard template. As a result, projects created with the custom
	  AppWizard could not be built. This problem was caused by Component Gallery
	  inserting "\n" instead of "\r\n" (appropriate for text files) at the end of
	  lines. As a result, custom AppWizard treated the file(s) touched by Component
	  Gallery as binary. The fix in Visual C++ version 4.1 does not apply to
	  applications that were modified by applying a component using Visual C++
	  version 4.0's Component Gallery. However, the fix does affect any project
	  where the component is applied using Visual C++ version 4.1. To fix projects
	  that had components applied to them using the Visual C++ version 4.0
	  Component Gallery, add a carriage return to the end of the file using the
	  text editor.
	
	
	Fixed Resource Editor Bugs
	--------------------------
	
	- When using a display driver with large fonts, you were unable to see the text
	  you were editing in the Version Info editor.
	
	  For more information, please see the following article in the Microsoft
	  Knowledge Base:
	
	  Q142764 Edit Fields Blank When Large Fonts Selected
	
	
	- When running a display in hicolor mode (64K colors), you could not reopen a
	  256-color bitmap after you had opened it.
	
	
	- If you used the Find command to search backward for a string that did not
	  exist in the String Editor, the String Editor would give a GPF.
	
	
	- If you tried to add five or more Anibutton OLE controls with 256-color
	  bitmaps to a dialog, you would get an Access Violation.
	
	
	- If you set the Number property (ES_NUMBER) on a dialog, the dialog editor did
	  not remember that the property was set when the dialog was reopened.
	
	
	- If you tried to add a new resource symbol using View Resource Symbols, New
	  Button when there was no current active window, MSVCSHL.DLL would crash.
	
	
	- If you tried to save the XLINTL32.DLL file installed with Excel in the \msdev
	  folder as a *.res file, Developer Studio caused an invalid page fault in
	  kernel32.dll.
	
	
	Fixed Debugger Bugs
	-------------------
	
	- When you started a second debug session on large applications, the Developer
	  Studio used to crash.
	
	  For more information, please see the following article in the Microsoft
	  Knowledge Base:
	
	  Q140041 PATCH: Visual C++ 4.0 Crash Fixes
	
	
	- When starting to debug huge applications with lots of DLLs, the debugger
	  would hang.
	
	  For more information, please see the following article in the Microsoft
	  Knowledge Base:
	
	  Q149616 Developer Studio May Hang When Debug Session Starts/Ends
	
	
	- Sometimes when starting to debug huge applications with embedded symbols,
	  such as the no .pdb file, the debugger would hang.
	
	  For more information, please see the following article in the Microsoft
	  Knowledge Base:
	
	  Q147836 Debugger Hangs with Huge Executable with Embedded Symbols
	
	
	- The debugger used to crash or hang when expanding objects with very large
	  type/field names.
	
	
	- When editing expressions in the Watch or Variables windows on Windows NT
	  version 3.51 using large fonts in 1024x768 mode, the text being edited could
	  not be seen.
	
	
	- The debugger could not attach to processes on Windows 95 using the hex pid
	  reported by PView.
	
	
	Fixed MFC Bugs
	--------------
	
	- CSingleLock::CSingleLock() has an assert that indicates it cannot be used
	  with CCriticalSection object. This assert is not necessary.
	
	  For more information, please see the following article in the Microsoft
	  Knowledge Base:
	
	  Q140669 CSingleLock: Bogus Assert in CSingleLock::CSingleLock
	
	
	- The CSyncObject::Lock function always returns TRUE for finite values of
	  timeout intervals. This happens even if the synchronization object is in a
	  non-signaled state.
	
	  For more information, please see the following article in the Microsoft
	  Knowledge Base:
	
	  Q141533 CSyncObject::Lock Always returns TRUE for Finite Waits
	
	
	- Additional resources specified in a dialog template of a dialog implemented
	  in a DLL file will be displayed incorrectly or not displayed at all. This can
	  affect icons, bitmaps, and menus that are specified in a dialog template.
	
	  For more information, please see the following article in the Microsoft
	  Knowledge Base:
	
	  Q147384 Icons, Bitmaps, & Menus Not Displayed in an AFXDLL Dialog
	
	
	- If you call CFile::GetFileName(), it will return a CString with the correct
	  file name. However, if you call GetLength() on the CString, it will return
	  zero.
	
	  For more information, please see the following article in the Microsoft
	  Knowledge Base:
	
	  Q143086 CFile::GetFileName() Always Returns CString w/Zero Length
	
	
	- The CDaoDatabase::CreateRelation() method may fail if an application is built
	  as a non-UNICODE application. It is possible that a messagebox will appear
	  that states: "Invalid field name '<some text>' in definition of index
	  or relationship."
	
	  For more information, please see the following article in the Microsoft
	  Knowledge Base:
	
	  Q138767 CreateRelation Method Fails with Non-UNICODE Build
	
	
	- Trying to run a program that contains a call to CDatabase::ExecuteSQL() that
	  has been built for UNICODE results in a CDBException being thrown with an
	  error message from the ODBC driver.
	
	  For more information, please see the following article in the Microsoft
	  Knowledge Base:
	
	  Q139759 CDatabase::ExecuteSQL() Fails with UNICODE Build
	
	
	- In an MFC application, AfxThrowOleDispatchException is used to throw an
	  exception from within an OLE Automation function. When Microsoft Visual Basic
	  is used as the automation client application, it will not be able to
	  correctly interpret the error code passed to AfxThrowOleDispatchException.
	
	  For more information, please see the following article in the Microsoft
	  Knowledge Base:
	
	  Q140590 Error in COleDispatchException Constructor
	
	
	- An access violation may result after using CString::operator+= where the
	  string on the right-hand side of the operator is an empty string. If the
	  debug CRT libraries are installed, an Assertion Failure in Dbgheap.c line
	  1017 will occur.
	
	  For more information, please see the following article in the Microsoft
	  Knowledge Base:
	
	  Q142385 Using CString::operator+= May Cause an Access Violation
	
	
	- When you map a control to a recordset variable by using DDX_FieldCBString or
	  DDX_FieldLBString, the following message may appear in a messagebox when
	  UpdateData() is called: "Please enter no more than 0 characters."
	
	  For more information, please see the following article in the Microsoft
	  Knowledge Base:
	
	  Q143330 Messagebox Shows in DDX_FieldCBString & DDX_FieldLBString
	
	
	Fixed Developer Studio Bugs
	---------------------------
	
	- When the current project has sub-projects and the create browser file option
	  is turned on, the Developer Studio may randomly generate an access violation.
	
	
	- When deleting sub-projects from a main project, the Developer Studio may
	  sometimes crash with an access violation.
	
	
	- If the /Tp or /Tc Compiler option is used in a project built within the
	  Developer Studio, one of the following errors occurs:
	
	  Command line error D2004 : '/Tp' requires an argument
	
	  - OR -
	
	  Command line error D2004 : '/Tc' requires an argument
	
	For more information, please see the following article in the Microsoft Knowledge
	Base:
	
	  Q142421 D2004 Caused by /Tp and /Tc Option in Visual C++ 4.0
	
	
	Additional query words: 4.00 4.10
	
	======================================================================
	Keywords          :  kbbuglist kbfixlist
	Technology        : kbVCsearch kbAudDeveloper kbVC410
	Version           : :4.1
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	
