---
layout: page
title: "Q160554: Updated DAO Redistributable Components"
permalink: kb/160/Q160554/
---

## Q160554: Updated DAO Redistributable Components

	Article: Q160554
	Product(s): Microsoft C Compiler
	Version(s): WINDOWS:4.2; winnt:4.0,4.1,4.2
	Operating System(s): 
	Keyword(s): kbfile kbProgramming kbDAOsearch kbDatabase kbMFC kbVC
	Last Modified: 07-MAY-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual C++, versions 4.0, 4.1 
	- Microsoft Visual C++, 32-bit Enterprise Edition, version 4.2 
	- Microsoft Visual C++, 32-bit Professional Edition, version 4.2 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	The incorrect DAO redistributable components were shipped with Visual C++4.X.
	
	The following files are available for download from the Microsoft Download
	Center:
	
	Daoredis.exe
	
	For additional information about how to download Microsoft Support files, click
	the article number below to view the article in the Microsoft Knowledge Base:
	
	  Q119591 How to Obtain Microsoft Support Files from Online Services
	
	Microsoft used the most current virus detection software available on the date of
	posting to scan this file for viruses. Once posted, the file is housed on secure
	servers that prevent any unauthorized changes to the file.
	
	
	NOTE: Use the -d option when running Daoredis.exe to decompress the file and
	recreate the proper directory structure.
	
	MORE INFORMATION
	================
	
	The DAO redistributable components provided with the Visual C++ CD-ROM are an
	incomplete version of the full DAO SDK. To redistribute DAO, you do not need the
	DAO SDK. This patch provides the correct setup script for redistributing just
	the DAO components.
	
	Use the redistributable components provided with this patch in place of those in
	\MSDEV\REDIST\DAO directory on the Visual C++ 4.X CD-ROM.
	
	DAOMIN.RUL and InstallShield
	----------------------------
	
	You can still use the DAOMIN.RUL file that ships with Visual C++ 4.X/DAO SDK to
	modify the setup process of the DAO components. The DAOMIN.RUL file can be found
	after a typical installation in the C:\MSDEV\DAOSDK\SETUP directory.
	
	You will need the InstallShield SDK, which is installed from the master- setup
	from both Visual C++ 4.0 and 4.1. However, with the release of Visual C++ 4.2,
	the master setup only installs the InstallShield Express. InstallShield Express
	will not work with DAOMIN.RUL and cannot be used to modify or compile it.
	
	InstallShield and Visual C++ 4.2
	--------------------------------
	
	Visual C++ 4.2 users will need to follow these steps to modify and compile the
	DAOMIN.RUL file.
	
	1. Install the InstallShield SDK from Visual C++ 4.1 (or 4.0) from the main
	  setup program.
	
	2. From the Visual C++ 4.2 CD-ROM, run the update/patch to the InstallShield SDK
	  from: \IShield\SDK\SetupEx.exe.
	
	Silent Install and Log File
	---------------------------
	
	On a silent install of the DAO 3.0 components, -12 will be incorrectly reported
	in the setup log file. This code indicates an error occurred, but in fact is
	incorrect.
	
	You can run a silent install using the -s switch. You can specify the creation of
	a log file using -F2<file path>. Normally, the log file would be stored in
	the same path as SETUP.EXE. However, on a CD-ROM, this means that no log file
	would be created.
	
	REFERENCES
	==========
	
	  Q143292 Information on Redistributing DAO Components with DAO Apps
	
	  Q151426 How to Create a DAO Setup that Installs Jet IISAM Files
	
	Additional query words:
	
	======================================================================
	Keywords          : kbfile kbProgramming kbDAOsearch kbDatabase kbMFC kbVC 
	Technology        : kbVCsearch kbVC400 kbAudDeveloper kbVC410 kbVC420 kbVC32bitSearch
	Version           : WINDOWS:4.2; winnt:4.0,4.1,4.2
	
	=============================================================================
	
