---
layout: page
title: "Q167523: HOWTO: Redistributing DAO with Your Visual C++ 5.0 Application"
permalink: /kb/167/Q167523/
---

## Q167523: HOWTO: Redistributing DAO with Your Visual C++ 5.0 Application

	Article: Q167523
	Product(s): Microsoft C Compiler
	Version(s): 5.0
	Operating System(s): 
	Keyword(s): kbProgramming kbDAOsearch kbDatabase kbMFC kbVC kbVC500
	Last Modified: 13-MAY-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual C++, 32-bit Enterprise Edition, version 5.0 
	- Microsoft Visual C++, 32-bit Professional Edition, version 5.0 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	There are 2 approaches to redistributing DAO 3.5 with your Visual C++ 5.0
	application:
	
	- You can redistribute the DAO Setup located in the VC\REDIST\DAO directory.
	
	  -or-
	
	- You can follow the steps in the Daosetup.rtf installed with the DAO SDK.
	
	Note that the information in the "Installing DAO on Another Machine" topic for
	the DAO SDK is incorrect and the information should be ignored.
	
	
	MORE INFORMATION
	================
	
	Redistributing the DAO Setup
	----------------------------
	
	On the Visual C++ 5.0 CD, under \DEVSTUDIO\VC\REDIST\DAO\DISK1\, there is a DAO
	Setup program that can be redistributed. This setup program prompts the user for
	information about which components to install. You can run the setup program
	with a '-s' option that silently runs the DAO Setup without putting information
	on the screen.
	
	Here are a few important notes:
	
	- If you run the program with the -s option, all of the DAO components will be
	  installed (DAO core components, ODBC Direct, and ISAMs).
	
	- If ODBCDirect is selected or you chose the '-s' option, you must have ODBC
	  3.0 currently installed on the system.
	
	- To register DAO and use DAO, you must have Oleaut32.dll version 2.20.4049 or
	  later as well as Stdole2.tlb installed into your System directory. If you try
	  to run the setup program with the "-s" option and you do not have version
	  2.20.4049 or later, the setup program fails. To get these newer versions of
	  the files, please see the following article in the Microsoft Knowledge Base:
	
	  Q180071 FILE: Msvbvm50.exe Installs Visual Basic 5.0 Run-Time Files
	
	Installing the DAO components with Your Own Setup Program
	---------------------------------------------------------
	
	Below is the information from the Daosetup.rtf file installed into the DAO SDK
	directory.
	
	NOTE: The documentation fails to mention that you must copy the Oleaut32.dll and
	Stdole2.tlb files from the \devstudio\vc\redist directory on the Visual C++ 5.0
	CD into the Windows system directory. You must register Oleaut32.dll.
	
	This document describes the steps required to create a setup program that
	successfully installs DAO and its related files. It is recommended that you use
	InstallShield Express that ships with Visual C++ 5.0 along with the information
	in this document to create your setup.
	
	Proper setup of DAO is very important. Because DAO is a shared component that
	only exists in one location on a machine, all applications using DAO may stop
	working if DAO setup is not done correctly.
	
	1. Introduction
	
	  To distribute an application that uses DAO, you must install the
	  redistributable portions of DAO. Depending on whether your application uses
	  the Microsoft Jet Engine or ODBCDirect workspaces, you must also install
	  either the redistributable portions of the Microsoft Jet Database Engine, the
	  redistributable portions of the Remote Database Objects (RDO), or both.
	
	  DAO, Microsoft Jet, and RDO require a more complex installation procedure than
	  simply copying files into a directory. An application cannot have its own
	  "private" copy of an OLE Automation server (such as DAO) in an application
	  directory. The server is registered by OLE, and all users use the same DLL.
	
	2. Files
	
	  DAO and DAO's ODBCDirect each require a core set of files. Microsoft Jet also
	  has a core and a second optional set that provides the ability to access
	  other data formats.
	
	  Whether your application uses ODBCDirect or the Microsoft Jet Engine to access
	  data determines whether you should install the Microsoft Jet Engine or
	  ODBCDirect files.
	
	  Only the files described in this section can be distributed with your
	  application to other users. You cannot distribute other files, such as .hlp
	  files or DAO header (.h) files.
	
	  NOTE: The DAO directory and System32 directory are explained in section 3.2.
	
	  a. DAO
	
	     DAO is comprised of the following core files (these files must be installed
	     for DAO to function):
	
	     File         Description          Installed   Registered  Directory
	     -------------------------------------------------------------------
	     
	     DAO350.DLL    DAO version 3.5      Shared        Yes       DAO
	     DAO2535.TLB   Type Library         Companion     No        DAO
	                                        to DAO350.DLL
	     MSJTER35.DLL  Microsoft Jet        System        No        System32
	                   (and DAO) error
	                   message DLL
	     MSJINT35.DLL  Localized Microsoft  System        No        System32
	                   Jet (and DAO) error
	                   strings
	     MSVCRT40.DLL  C Runtime DLL        System        No        System32
	   
	
	  b. Microsoft Jet Engine
	
	     1. Core Jet files
	        Microsoft Jet is comprised of the following core files. These files are
	        sufficient to access version 3.0 .MDB databases and ODBC data sources
	        (in conjunction with an installed ODBC driver) when installed with
	        DAO.
	
	     File         Description          Installed   Registered  Directory
	     -------------------------------------------------------------------
	     
	     MSJET35.DLL  Microsoft Jet engine  System         Yes     System32
	                  (version 3.5)
	     MSRD2X35.DLL MDB files from       Companion       Yes     System32
	                  Microsoft Access     to MSJET35.DLL
	                  2.0, Visual Basic
	                  3.0 or earlier
	     MSJTER35.DLL Microsoft Jet (and   System          No      System32
	                  DAO) error message
	                  DLL
	     MSJINT35.DLL Localized Microsoft  System          No      System32
	                  Jet (and DAO) error
	                  strings
	     VBAJET32.DLL VBA-Microsoft Jet    System          No      System32
	                  Expression service
	     VBAR332.DLL  VBA Runtime          System          No      System32
	   
	
	     2. Optional files
	        The following optional files provide access to other data formats.
	        Install the DLLs that correspond to the file format you need to
	        support, or if you need replication support.
	
	     Module        Description         Installed   Registered  Directory
	     -------------------------------------------------------------------
	     
	     MSREPL35.DLL  Microsoft Jet       System      No          System32
	                   Replication
	     MSXBSE35.DLL  Xbase formats       System      Yes         System32
	     MSPDOX35.DLL  Paradox formats     System      Yes         System32
	     MSTEXT35.DLL  Text files          System      Yes         System32
	     MSEXCL35.DLL  Spreadsheet files   System      Yes         System32
	     MSLTUS35.DLL  Lotus formats       System      Yes         System32
	     MSEXCH35.DLL  Exchange formats    System      Yes         System32
	      
	
	  c. ODBCDirect
	
	     Install the following files for supporting ODBCDirect functionality. DAO
	     uses RDO to handle it's ODBCDirect functionality. For this reason you may
	     recognize these files as the core RDO files.
	
	     File          Description          Installed   Registered  Directory
	     -------------------------------------------------------------------
	     
	     MSRDO20.dll  Remote Database       Shared          Yes     System32
	                  Objects 2.0
	     RDOCURS.dll  Batch Client Cursor   Companion       No*     System32
	                  Library               to MSRDO20.DLL
	   
	
	  * Rdocurs.dll is not a COM server (it doesn't export DllRegisterServer) so it
	  is not registered. The Daosetup.rtf is incorrect and Regsrv32.exe should not
	  be run against Rdocurs.dll.
	
	3. Installation
	  The following sections provide information on using the installation
	  procedure.
	
	  a. Check if files are in use.
	     The first step in the installation procedure is to see if programs that are
	     using any files you may be installing are running. If they are you may
	     need to abort the installation and request the user to close other
	     applications before installing DAO.
	
	  b. Copy the files.
	     Copy all files listed as DAO files (except the Dao350.dll and Dao2535.tlb),
	     and all Microsoft Jet Engine core files (and application specific optional
	     files) or ODBCDirect files (depending upon the needs of your application)
	     to the system (system32 for Windows NT) directory (referred to in the
	     charts above as the System32 directory). Per usual DLL standards, you need
	     to copy with version checking to make sure a newer version of the file is
	     not overwritten by your installation. All the DAO files contain
	     appropriate version resources.
	
	     Use the following procedure to copy Dao350.dll and Dao2535.tlb:
	
	     1. For Windows NT (earlier version than 4.0), the DAO files always go into
	        <windows>\MSAPPS\DAO. For example, c:\winnt35\msapps\DAO. For
	        Windows 95 or Windows NT 4.0, the DAO directory is approximately
	        c:\Program Files\Common Files\Microsoft Shared\DAO. The exact location
	        varies if the user has a non-English version of Windows 95, which must
	        read the location from the registry. Locate the following node in the
	        registry:
	
	           HKEY_LOCAL_MACHINE\Software\Microsoft\Windows\CurrentVersion
	      
	
	        and retrieve the value of the key named CommonFilesDir.
	
	     2. If this registry key does not exist, then create it and set the value
	        to:
	
	           \Program Files\Common Files
	      
	
	        Make sure to use the correct drive letter.
	
	     3. After you have the value of the key, which will typically be:
	
	           c:\Program Files\Common Files
	      
	
	        then append "\Microsoft Shared\DAO" and use that as the destination
	        location for the Dao350.dll and Dao2535.tlb.
	
	     4. Copy Dao350.dll and Dao2535.tlb to this directory using version
	        checking. This is the Directory referred to in the charts above as the
	        DAO directory.
	
	  c. Register the DLLs.
	     After you copy all of the DLLs, you need to register them. You do this by
	     calling the DLLRegisterServer entry point on each DLL if it exists. Note
	     that because DAO requires Microsoft Jet before it can successfully
	     register, the order of copying files given previously is important.
	
	     Your setup program should use Regsvr32.exe or an equivalent call to execute
	     the DLLRegisterServer within the following dlls (if they have been
	     installed by step 3b): Dao350.dll, Msjet35.dll, Msrd2x35.dll,
	     Msexcl35.dll, Mspdox35.dll, Msxbse35.dll, Msltus35.dll, Mstext35.dll,
	     Msexch35.dll, Msrdo20.dll.
	
	     Following are some special considerations you should keep in mind:
	
	      - Dao350.dll needs to have Msvcrt40.dll and other required files on the
	        computer before it can register. If DAO fails to register, check the
	        version of MSVCRT40.DLL. Problems are typically seen under Windows 95
	        where the version should be 4.10.6038 (about 319K file).
	
	      - Msrdo20.dll needs to have ODBC installed before it will register. Use
	        the ODBC Installation program to install ODBC.
	
	      - Msexch35.dll needs to have MAPI installed on your system before it can
	        register.
	
	  d. Update the file reference counts.
	     Because DAO is shared by many programs, a count is kept of how many times
	     the DLL has been installed. This allows uninstall programs to remove the
	     file only when no other program needs it. This is the same for the
	     Msrdo20.dll. The other files are never removed from the system.
	
	     1. Under the following location, search for a key with the same name as
	        the file you've installed:
	
	   HKEY_LOCAL_MACHINE\SOFTWARE\Microsoft\Windows\CurrentVersion\SharedDlls\ 
	      
	
	     2. If the key exists, increment its value by one (it is a dword). If the
	        key does not exist, you need to create a key that is the name of the
	        file (including path) of type dword and give it a value of 1. A typical
	        entry would be:
	
	        \\Program Files\\Common Files\\Microsoft Shared\\DAO
	           \\DAO350.DLL"=dword:00000001
	      
	
	        (This example is in the export format used by regedit; you would only
	        use single backslashes when creating the key.)
	
	        Make sure you reference count both the Msrdo20.dll and the Dao350.dll.
	
	4. Uninstall
	  To conform with Windows 95 guidelines, programs must be able to uninstall
	  themselves and remove any files and registry entries they create. Many setup
	  toolkits, such as the provided InstallShield toolkit, provide this as
	  "built-in" functionality. It is beyond the scope of this document to provide
	  all the details of Windows 95 installation requirements, but here are the
	  basic steps required to uninstall DAO. Note that only the shared components
	  and their companion files will be removed. The installed system files will
	  never be removed.
	
	  The Dao350.dll and Dao2535.tlb will be removed only if the value of
	  Dao350.dll's reference count key is 1. Otherwise the count is decremented and
	  the file left in place. For example:
	
	  HKEY_LOCAL_MACHINE\SOFTWARE\Microsoft\Windows\CurrentVersion\SharedDlls\
	  "C:\Program Files\Common Files\Microsoft Shared\DAO\DAO350.DLL"
	
	  Before removing Dao350.dll, you need to call its entry point
	  DLLUnregisterServer so that it can remove its entries from the registry. You
	  can do this by using Regsvr32.exe with the -u option.
	
	  The same rules apply for the Msrdo20.dll and it's companion file of
	  Rdocurs.dll.
	
	Additional query words:
	
	======================================================================
	Keywords          : kbProgramming kbDAOsearch kbDatabase kbMFC kbVC kbVC500 
	Technology        : kbVCsearch kbAudDeveloper kbVC500 kbVC32bitSearch kbVC500Search
	Version           : :5.0
	Issue type        : kbhowto
	
	=============================================================================
	
