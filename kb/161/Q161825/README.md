---
layout: page
title: "Q161825: How Visual Basic 4.0 Calls C and Fortran DLLs"
permalink: /kb/161/Q161825/
---

## Q161825: How Visual Basic 4.0 Calls C and Fortran DLLs

	Article: Q161825
	Product(s): Microsoft Visual Basic for Windows
	Version(s): WINDOWS:4.0; winnt:2.0,2.1,2.2,4.0,4.1,4.2,6.0; :
	Operating System(s): 
	Keyword(s): kbfile kbSample kbCompiler kbFL32 kbFortranPS kbLangFortran
	Last Modified: 07-MAY-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual Basic Standard Edition for Windows, version 4.0 
	- Microsoft Visual Basic Professional Edition for Windows, version 4.0 
	- Microsoft Visual Basic Enterprise Edition for Windows, version 4.0 
	- Microsoft Visual C++, versions 2.0, 2.1, 2.2, 4.0, 4.1 
	- Microsoft Visual C++, 32-bit Enterprise Edition, versions 4.2, 6.0 
	- Microsoft Visual C++, 32-bit Professional Edition, versions 4.2, 6.0 
	- Microsoft Visual C++, 32-bit Learning Edition, version 6.0 
	- Microsoft Fortran Powerstation 32 for Windows NT 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	
	This sample demonstrates how a Visual Basic 4.0 application calls Fortran and
	Visual C DLL's. Specifically, it shows how to pass fixed length strings to and
	from those DLL's.
	
	MORE INFORMATION
	================
	
	The following file is available for download from the Microsoft Download
	Center:
	
	  Vbstring.exe
	  (http://download.microsoft.com/download/vb40ent/Sample40/1/W9XNT4/EN-US/Vbstring.exe)
	
	Release Date: Jan-01=1997
	
	For additional information about how to download Microsoft Support files, click
	the article number below to view the article in the Microsoft Knowledge Base:
	
	  Q119591 How to Obtain Microsoft Support Files from Online Services
	
	Microsoft used the most current virus detection software available on the date of
	posting to scan this file for viruses. Once posted, the file is housed on secure
	servers that prevent any unauthorized changes to the file.
	
	Visual Basic 4.0 replaced the string management system used by previous versions
	of Visual Basic with a more robust string management system. Visual Basic 4.0
	relies on the OLE automation data types, such as BSTR and safe arrays, to manage
	string usage. However, passing arrays of numeric types, integers, or reals were
	not changed. For instance, before passing an array of strings to a DLL, the
	strings must be converted to an array of bytes, and then converted back to
	strings on return from the DLL. Please, refer to VB4DLL.TXT that ships with
	Visual Basic 4.0 for more information.
	
	All new C DLL's should use the syntax described in the VB4DLL.TXT file because
	the API calls that are employed allow for improved error handling. The
	programmer can do something in the event of an error, such as display a message
	box and abort the operation.
	
	Please note that the new Fortran DLL's cannot use the syntax described in
	VB4DLL.TXT because they have no direct access to the correct API functions.
	
	The sample also demonstrates different methods you can use to resolve the
	function symbol within the DLL. A mismatch in the function symbol results in a
	Visual Basic runtime error, "Specified DLL function not found (Error 453)." The
	sample includes two methods to resolve C function symbols and three methods to
	resolve Fortran function symbols.
	
	Each source file contains more information pertinent to that language.
	
	This sample also enables you to choose whether the data is passed to either the C
	or Fortran DLL.
	
	This sample shows how to pass the following:
	
	- Two dimensional array of 4-byte integers.
	- Two dimensional array of 8-byte floating point numbers.
	- String.
	- One dimensional array of strings.
	- Two dimensional array of strings.
	- One dimensional array of 4-byte integers, a one dimensional array of 8-byte
	  floating point numbers, and a one dimensional array of strings.
	
	Sample Files
	------------
	
	   FileName             Description
	   -------------------------------------------------------
	
	   cdll.c               C source file to build 32-bit DLL
	   fordll.for           Fortran source file for FPS NT 1.0 reference
	   fordll32.f90         Fortran source file for the 32-bit DLL
	   vbstring.vbp         Visual Basic 4.0 project file
	   vbstring.frm         Visual Basic form including event handlers
	
	Building DLLs
	-------------
	
	This sample assumes you are using the following development environments:
	
	- Microsoft Visual C++, version 4.0
	- Microsoft FORTRAN PowerStation for Windows 95 and Windows NT, version 4.0
	
	You will need to setup the environment before running BUILDDLL.BAT.
	
	1. At an MS-DOS command-line prompt type:
	
	   C:\MSDEV\BIN\VCVARS32.BAT
	
	2. Build the C DLL. At the command-line prompt type:
	
	   BUILDDLL C
	
	3. Build the Fortran DLL. At the same prompt type:
	
	   BUILDDLL Fortran
	
	4. Start Visual Basic 4.0 and open the project file VBSTRING.VBP.
	
	5. Run the Visual Basic application by creating an executable file (.exe)or
	  running the program from within Visual Basic.
	
	IMPORTANT: The DLLs must be in the \WINDOWS\SYSTEM directory, the directory
	containing the Visual Basic executable file, or one of the environment file
	paths.
	
	Notes on Arrays in Different Languages
	--------------------------------------
	
	Given an upper bound of n, note that in Visual Basic all of the array ranges are
	specified as "1 to n". When a lower bound is not specified, Visual Basic, by
	default, assumes 0<=index<=n where "n" is inclusive. C array subscripts
	are assumed to be in the range 0<=index<=n-1. Fortran array ranges are
	1<=index<=n. You need to be careful when you assign the index ranges, and
	make sure that they match. If you exceed them, you will probably get an Access
	Violation, an Unhandled Exception, or a random run-time error in your Visual
	Basic Application.
	
	Language     Declaration                Range         # Items in Array
	--------     -----------                -----         ----------------
	
	Basic        Dim X(10) As Integer       0<=index<=10         11
	Basic*       Dim X(1 to 10) As Integer  1<=index<=10         10
	C            int X[10];                 0<=index<=9          10
	Fortran      integer X(10)              1<=index<=10         10
	Fortran*     integer X(0:9)             0<=index<=9          10
	
	* With lower bound specified. C is always zero-based.
	
	REFERENCES
	==========
	
	For information on passing Strings from Visual Basic 5.0 or Visual Basic 6.0 to
	C DLLs, please see the following article in the Microsoft Knowledge Base:
	
	  Q187912 HOWTO: Pass a String Between Visual Basic and Your C DLL
	
	Additional query words: kbstream
	
	======================================================================
	Keywords          : kbfile kbSample kbCompiler kbFL32 kbFortranPS kbLangFortran 
	Technology        : kbVCsearch kbVC400 kbVBSearch kbAudDeveloper kbZNotKeyword6 kbFortranSearch kbZNotKeyword2 kbVB400Search kbVB400 kbVC220 kbVC410 kbVC420 kbVC600 kbVC200 kbVC210 kbVC32bitSearch
	Version           : WINDOWS:4.0; winnt:2.0,2.1,2.2,4.0,4.1,4.2,6.0; :
	Issue type        : kbhowto
	
	=============================================================================
	
