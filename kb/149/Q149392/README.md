---
layout: page
title: "Q149392: HOWTO: Using the DAO SDK dbDao Classes with Visual C++ 4.x"
permalink: /kb/149/Q149392/
---

## Q149392: HOWTO: Using the DAO SDK dbDao Classes with Visual C++ 4.x

{% raw %}

	Article: Q149392
	Product(s): Microsoft C Compiler
	Version(s): 4.0,4.1
	Operating System(s): 
	Keyword(s): kbcode kbProgramming kbDAOsearch kbDatabase kbMFC kbVC
	Last Modified: 13-FEB-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- The DAO SDK, included with:
	   - Microsoft Visual C++, 32-bit Editions, versions 4.0, 4.1 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	This article explains how to use dbDao, the class library that wraps the DAO
	API, in a Console-based or MFC-based application. The following items are
	discussed:
	
	- Compile and link settings.
	
	- Using dbDao in your code.
	
	- Information on redistributing dbDao.
	
	- Support platforms.
	
	
	NOTE: The information in this article pertains to Visual C++ version 4.x. Visual
	C++ 5.0 includes a newer DAO SDK with newer dbDAO classes. See the online
	documentation in Visual C++ version 5.0 for information about how to use the
	newer classes.
	
	MORE INFORMATION
	================
	
	Compile and Link Settings
	-------------------------
	
	1. After installing the DAO SDK (found on the Visual C++ 4.x CD-ROM), modify
	  settings in the Visual C++ Developer Studio to use the directories where the
	  DAO SDK is installed. On the Tools menu, click Options. Then add the
	  Daosdk\Include directory to the list of directories for include files. For
	  example, if you used the Visual C++ defaults, you need to add the following
	  directory:
	
	  C:\MSDEV\DAOSDK\INCLUDE
	
	  Failure to do so will generate this error:
	
	  fatal error C1083: Cannot open include file: 'dbdao.h':
	  No such file or directory
	
	  In addition, add the Daosdk\Lib and Daosdk\Lib\Debug entries to the list of
	  directories for library files. The first directory contains ANSI and UNICODE
	  builds of the dbDao library, and the second contains debug versions of each.
	  Failure to add these libraries will generate an error similar to this one:
	
	  LINK : fatal error LNK1104: cannot open file "dbdao3.lib"
	
	2. Copy the debug ANSI and UNICODE versions of the .dll and .pdb files found in
	  the \Msdev\Daosdk\Lib\Debug directory into your \Windows\System directory.
	  This will allow you to step into the dbDao library in debug builds.
	
	3. Add one of the following libraries to the "Object/Library Modules" entry in
	  the Link tab found in the Project Settings dialog invoked by clicking
	  Settings on the Build menu:
	
	  dbdao3.lib - ANSI Release export library
	  dbdao3d.lib - ANSI Debug export library
	  dbdao3u.lib - UNICODE Release export library
	  dbdao3ud.lib - UNICODE Debug export library
	
	4. Link with the MFC Library. On the Build menu, click Settings, and then click
	  the General tab to do this. Failure to do so will cause LNK2001 unresolved
	  external error messages on the CdbDBEngine and CdbOleObject symbols.
	
	  If you are creating a console application, you will still have to link to MFC.
	  MFC wasn't designed, tested, or intended to be used in a true console
	  application. However, dbDao uses only a few, high-level abstract base classes
	  such as CObject, CException, and COleVariant.
	
	  Be certain to select "Use MFC in a shared DLL" when specifying how to link
	  with the MFC Library. If you link in MFC statically, you will observer the
	  following sequence of errors if you use a dbDao function that returns an MFC
	  object (e.g. CDbDatabase.GetConnect() returns a CString). Note: The notation
	  "..." indicates a hex address in the following error messages.
	
	  DEBUG build:
	
	   - A message box displaying: "User breakpoint called from code at 0x..."
	
	   - A trace message stating: "HEAP: Invalid address specified to
	     RtlValidateHeap(...)"
	
	   - An assertion in dbgheap.c
	
	   - An unhandled exception: Access Violation
	
	  RELEASE build:
	
	   - A message box displaying: "The instruction at "0x..." referenced memory at
	     "0x...". The memory could not be "read".
	
	5. For console-based applications, link with the multi-threaded version of the
	  C-Run-time Library. This is done in the project settings dialog box. On the
	  Build menu, click Settings. Then click the C/C++ tab, and in the Code
	  Generation category select "Use run-time library." Failure to do so will
	  generate an unresolved external error on __endthreadex.
	
	Using dbDao in Your Code
	------------------------
	
	For any file using the dbDao classes, use the following three include files:
	
	     #include <afxole.h>
	     #include <dbdao.h>
	     #include <dbdaoerr.h>
	
	Failure to do so will generate the following errors (among others) in Dbdao.h:
	
	  error C2501: 'interface' : missing decl-specifiers
	
	  error C2239: unexpected token 'identifier' following declaration
	  of 'interface'
	
	  error C2061: syntax error : identifier '_DAODBEngine'
	
	When an error is encountered, the dbDao classes will throw an instance of the
	CdbException class. This is really just a flag, the actual error information is
	included in the Errors collection of the CdbDBEngine class. The following code
	demonstrates how to extract this information for each error object in the
	collection. The collection is refreshed each time dbDao encounters an error.
	
	dbDao may also throw either a class derived from MFC's CException or a win32
	exception. The code demonstrates how to catch those as well.
	
	     CdbDBEngine *pEng;
	
	     // Code to instantiate pEng goes here
	
	     try
	     {
	        // Code to use dbDao in a way that generates an error goes here
	     }
	     catch( CdbException e )
	     {
	         for( long l = 0; l < pEng->Errors.GetCount(); l++ )
	         {
	             TRACE( "\t Error #%ld: #%ld -- %s\n",
	                    l,
	                    pEng->Errors[l].GetNumber(),
	                    pEng->Errors[l].GetDescription() );
	         }
	     }
	     catch(CException *e)
	     {
	         TRACE( "MFC Exception\n" );
	         e->Delete();
	     }
	     catch(...)
	     {
	         TRACE( "Win32 Exception\n" );
	     }
	
	Information on Redistributing dbDao
	-----------------------------------
	
	The following sources discuss how to redistribute components required by
	applications using dbDao. These can be found either on your Visual C++ 4.X
	CD-ROM or in the installed files on your hard disk.
	
	- \Msdev\Redist\Dao\Readme.wri (located on the CD-ROM only)
	
	- \Msdev\Daosdk\Daosdk.hlp
	
	- \Daosdk\Setup\Daosetup.rtf
	
	Supported Platforms
	-------------------
	
	The only supported form of DAO for Visual C++ is a 32-bit in-process DLL
	requiring either Windows 95 or Windows NT and Visual C++ 4.0 or later. DAO is
	not available on Win32s. This is documented in the Daosdk.hlp file under the
	"DAO SDK Files" help topic.
	
	
	REFERENCES
	==========
	
	Microsoft Jet Database Engine Programmer's Guide, ISBN #: 1-55615-877-7.
	
	The Daosdk.hlp file that comes with the DAO SDK in Visual C++ 4.x.
	
	Additional query words:
	
	======================================================================
	Keywords          : kbcode kbProgramming kbDAOsearch kbDatabase kbMFC kbVC 
	Technology        : kbAudDeveloper kbDAOsearch kbSDKDAOSearch kbSDKSearch
	Version           : :4.0,4.1
	Issue type        : kbhowto
	
	=============================================================================
	

{% endraw %}
