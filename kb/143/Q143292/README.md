---
layout: page
title: "Q143292: INFO: Redistributing DAO Components with DAO Apps"
permalink: /kb/143/Q143292/
---

## Q143292: INFO: Redistributing DAO Components with DAO Apps

	Article: Q143292
	Product(s): Microsoft C Compiler
	Version(s): 4.0
	Operating System(s): 
	Keyword(s): kbsetup kbDAOsearch kbDatabase kbMFC kbVC
	Last Modified: 03-AUG-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual C++, versions 4.0, 4.1 
	- Microsoft Visual C++, 32-bit Enterprise Edition, versions 4.2, 5.0, 6.0 
	- Microsoft Visual C++, 32-bit Professional Edition, versions 4.2, 5.0, 6.0 
	- Microsoft Visual C++, 32-bit Learning Edition, version 6.0 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	This article provides information regarding the redistribution of the DAO
	components with your DAO-enabled application that was developed using Visual C++
	4.0. The information in this article supersedes all documentation found on or
	installed from the Visual C++ 4.0 CD-ROM.
	
	This article addresses three major topics:
	
	- The setup script located in Msdev\Redist\Dao
	
	- Errors in the DAO SDK documentation regarding DAO setup
	
	- The Microsoft Jet IISAM files
	
	MORE INFORMATION
	================
	
	The Setup Script Located in Msdev\Redist\Dao
	--------------------------------------------
	
	The setup script located in Msdev\Redist\Dao is the script that is used by Visual
	C++ to install the core DAO components, is also the setup script that is
	recommended for redistribution. However, there are certain limitations to this
	setup script that may make it unusable for redistribution with your DAO enabled
	application.
	
	- The setup script won't work across multiple floppy disks, which may mean you
	  won't be able to redistribute on 1.44 Megabyte floppy disks. If you attempt
	  to use multiple disks, you will receive this error:
	
	  General file transfer error. Please check your target location and try
	  again.
	
	  Error Number:-2
	
	  The script is not designed to look for the files it requires to be located on
	  multiple disks.
	
	  If you are redistributing on 1.44 Megabyte floppy disks, one way to work
	  around this issue is to have your setup script copy all setup files to a
	  temporary directory on the target drive and run the provided setup script
	  from that location. Then delete the temporary directory when setup is
	  complete.
	
	- If you use the setup script as instructed in the Readme.wri file, the script
	  won't install the IISAM files that Microsoft Jet requires to work with
	  database file formats such as Paradox, Microsoft Excel, Xbase, or text files.
	  However, the IISAM file required to work with Microsoft Access 2.0/1.x
	  database (.mdb) files is installed.
	
	- For more information on modifying the InstallShield setup script to work
	  around this problem, please refer to the following article in the Microsoft
	  Knowledge Base:
	
	  Q151426 How to Create a DAO Setup That Installs Jet IISAM Files
	
	  Alternatively, to work around this issue, have your setup script copy any
	  required IISAM files to the appropriate system directory and register them
	  per the instructions in the Daosdk\Setup\Daosetup.rtf file (section 3.4
	  'Register the DLLs'). It is not sufficient to copy the IISAMs without
	  registering them. These IISAM files are available in Msdev\Redist:
	
	  IISAM File        Database File Format
	  --------------------------------------
	  MSPX3032.DLL      Paradox
	  MSRD2x32.DLL      Microsoft Access 2.0
	  MSTX3032.DLL      Text
	  MSXB3032.DLL      XBase
	  MSXL3032.DLL      Microsoft Excel
	
	Errors in the DAO SDK Documentation Regarding DAO Setup
	-------------------------------------------------------
	
	The Daosdk.hlp file's "Installing DAO on another machine" section contains
	several errors:
	
	- The NOSDK setup script does not function as the documentation indicates.
	
	  NOTE: This version of setup is identical to the one in Msdev\Redist\Dao -- see
	  the previous section for details.
	
	- The DAOMIN setup script will install the DAO components with no IISAM files
	  as stated in the documentation. However, if the Microsoft Access 2.0/1.x
	  IISAM file is not already present on the target computer, a message box is
	  displayed stating:
	
	  MSRD2X32.DLL not found.
	
	  After this dialog box is dismissed, setup runs to a successful completion.
	
	The Microsoft Jet IISAM Files
	-----------------------------
	
	The IISAM files that are installed by the DAO SDK setup scripts that do install
	IISAM files differ in size from those located in Msdev\Redist. The IISAM files
	located in Msdev\Redist are those installed by the ODBC setup script and are the
	only IISAM files that you are authorized to redistribute.
	
	Comparing the DAO SDK installed IISAM files with the redistributable IISAM files
	reveals that the versions are identical but with the exception of the Microsoft
	Access 2.0 IISAM Msrd2x32.dll, the SDK IISAM files are larger in size and have
	an earlier timestamp. This is because the IISAM files installed by the DAO SDK
	were included in the SDK prior to the removal of extra version information from
	the DLLs.
	
	When redistributing your DAO application, use the IISAM files from Msdev\Redist.
	
	Additional information will be added to this article as it becomes available.
	
	For Visual C++ 4.2 Users
	------------------------
	
	Visual C++ 4.2 includes the new InstallShield Express, and no longer installs the
	InstallShield SDK directly. Instead, you will need to install the InstallShield
	SDK from either the Visual C++ 4.0 or 4.1 CD-ROM. Then follow the instructions
	in \ISHIELD\SDK\README.TXT to update the SDK with the latest files.
	
	COMPILE.EXE, used to re-compile the DAOMIN.RUL file, is not shipped on the Visual
	C++ 4.2 CD-ROM and can only be installed from the InstallShield SDK found on
	either Visual C++ 4.0 or Visual C++ 4.1.
	
	REFERENCES
	==========
	
	Please note that this article supersedes all documentation on the Visual C++ 4.0
	CD-ROM including, but not limited to:
	
	- Msdev\Redist\Dao\Readme.wri (located on the Visual C++ 4.0 CD-ROM only)
	
	- Daosdk\Daosdk.hlp (available only after installing the DAO SDK)
	
	- Daosdk\Setup\Daosetup.rtf (available only after installing the DAO SDK)
	
	Additional query words: install installation distribution
	
	======================================================================
	Keywords          : kbsetup kbDAOsearch kbDatabase kbMFC kbVC 
	Technology        : kbVCsearch kbVC400 kbAudDeveloper kbVC410 kbVC420 kbVC500 kbVC600 kbVC32bitSearch kbVC500Search
	Version           : 4.0
	Issue type        : kbinfo
	
	=============================================================================
	
