---
layout: page
title: "Q154430: BUG: Visual C++ 4.2 DAO Breaks Certain Access95B Functions"
permalink: kb/154/Q154430/
---

## Q154430: BUG: Visual C++ 4.2 DAO Breaks Certain Access95B Functions

	Article: Q154430
	Product(s): Microsoft C Compiler
	Version(s): 4.2
	Operating System(s): 
	Keyword(s): 
	Last Modified: 31-JUL-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual C++, 32-bit Enterprise Edition, version 4.2 
	- Microsoft Visual C++, 32-bit Professional Edition, version 4.2 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When installing the DAO Components of Visual C++ 4.2 followed by an install of
	Access95, some of the functionality of Access95 may fail. Specifically, two
	instances have been reported:
	
	- The Table Wizard within Microsoft Access95 version 7.0b will fail with the
	  following message:
	
	  
	
	     This feature isn't installed.
	
	     Solution:
	     To install this feature, re-run the Microsoft Access Setup
	     program to reinstall Microsoft Access, or if you're using
	     a 3rd-party add-in, reinstall the add-in.
	
	- .MDB files created with previous versions of Access, via DAO, or via ODBC can
	  be opened in Access95 once, but subsequent attempts to open these files
	  results in the following message:
	
	  OLE Automation error
	
	
	CAUSE
	=====
	
	The problem occurs when a user has only installed DAO3032.DLL and not
	DAO2532.TLB. Visual C++ is the only Microsoft product that doesn't install both
	files. Both files are typically installed in \PROGRAM FILES\COMMON
	FILES\MICROSOFT SHARED\DAO.
	
	
	If a user's machine has DAO3032.DLL and not DAO2532.TLB, and the user then
	installs Access95B, the DAO2532.TLB will exist, but objects in that file will
	not be registered. The Access95B Table Wizard relies on these objects so it
	fails with one of the messages given above.
	
	No problem will be encountered if the user first installs Access95B (or any other
	application that installs DAO3032.DLL and DAO2532.TLB), and then later installs
	the DAO SDK. This is because Access95B will register DAO3032.DLL, thereby
	registering objects in both files. When the DAO SDK registers DAO3032.DLL, it
	again registers DAO2532.TLB's objects as well, because the file already exists.
	
	RESOLUTION
	==========
	
	To properly register DAO3032.DLL, enter the following command at the
	MS-DOS-PROMPT:
	
	     regsvr32 dao3032.dll
	
	This will register DAO3032.DLL correctly and the Access 7.0b Table Wizard should
	now work.
	
	REGSVR32.EXE is installed by Visual C++ 4.2 in the MSDev\Bin directory.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a bug in the Microsoft products listed at the
	beginning of this article. We are researching this bug and will post new
	information here in the Microsoft Knowledge Base as it becomes available.
	
	MORE INFORMATION
	================
	
	Steps to Reproduce Behavior
	---------------------------
	
	1. On a Windows 95 machine, install a typical Visual C++ version 4.2.
	
	2. Install Office 95(b) Professional, which installs Access version 7.0b.
	
	3. Open an existing database, and try to insert a new table using the Table
	  Wizard.
	
	-or-
	
	4. Open an .MDB file created by Access 2.0, DAO (for instance the DAOTable
	  sample) or ODBC. Close the file and reopen it.
	
	NOTE: It appears that at least in some cases Access95 will actually corrupt the
	.MDB file so that it can no longer be used by Access95. Even performing a repair
	on the .MDB does not appear to correct the problem. It may be possible to
	retrieve data from such .MDBs via a DAO or ODBC application.
	
	Additional query words: kbVC420bug kbmfc kbdao kbdatabase kbinterop
	
	======================================================================
	Keywords          :  
	Technology        : kbVCsearch kbAudDeveloper kbVC420 kbVC32bitSearch
	Version           : 4.2
	Issue type        : kbbug
	
	=============================================================================
	
