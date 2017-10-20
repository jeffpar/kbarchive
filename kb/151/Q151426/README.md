---
layout: page
title: "Q151426: HOWTO: Create a DAO Setup that Installs Jet IISAM Files"
permalink: /kb/151/Q151426/
---

## Q151426: HOWTO: Create a DAO Setup that Installs Jet IISAM Files

{% raw %}

	Article: Q151426
	Product(s): Microsoft C Compiler
	Version(s): 4.00 4.10
	Operating System(s): 
	Keyword(s): kbsetup kbDAOsearch kbDatabase kbMFC kbODBC kbVC
	Last Modified: 30-JUL-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- The Microsoft Foundation Classes (MFC), included with:
	   - Microsoft Visual C++, 32-bit Editions, versions 4.0, 4.1 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	The DAO setup included on the Visual C++ 4.0 or 4.1 CD-ROM in the
	\MSDEV\REDIST\DAO directory does not install the Microsoft Jet IISAM files that
	are used by DAO for accessing databases such as Microsoft Excel and dBase.
	However, you can modify the DAOMIN.RUL InstallShield file included in the DAO
	SDK to create a new SETUP.INS file for the DAO Setup. By using the new .INS file
	with the existing DAO Setup, you can create a new DAO Setup that installs all of
	the IISAM files.
	
	Because a modification is needed to an InstallShield .RUL file, you need to
	install InstallShield from the Visual C++ 4.0 or 4.1 CD-ROM.
	
	MORE INFORMATION
	================
	
	Once you have the DAO SDK and InstallShield installed on your development
	machine, follow the steps below to have your setup program install IISAMs in a
	silent fashion without prompting the user:
	
	1. Open the DAOMIN.RUL file located in the Daosdk\Setup directory using Notepad.
	  Scroll to line 138, and see the following:
	
	  SAMPLE CODE -- from DAOMIN.RUL line 138, BEFORE editing
	
	        /////////////////////////////////////////////////////////////////// 
	        bIncludeISAMS = FALSE;
	
	        if (bIncludeISAMS) then
	          //Ask the user which ISAM drivers to install
	          fnDetermineUserSelectionDAO();
	        endif;
	
	        END OF SAMPLE CODE
	        /////////////////////////////////////////////////////////////////// 
	
	2. Comment out the bIncludeISAMS = FALSE and comment out the call to
	  fnDetermineUserSelectionDAO() as follows:
	
	  SAMPLE CODE -- from DAOMIN.RUL line 138, AFTER editing
	
	        /////////////////////////////////////////////////////////////////// 
	        //bIncludeISAMS = FALSE;
	
	        //if (bIncludeISAMS) then
	          //Ask the user which ISAM drivers to install
	        //  fnDetermineUserSelectionDAO();
	        //endif;
	
	        END OF SAMPLE CODE
	        /////////////////////////////////////////////////////////////////// 
	
	3. Save the file, and run the InstallSheild Command Line utility COMPILE.EXE,
	  targeting the freshly edited DAOMIN.RUL file:
	
	     [PATH]COMPILE [PATH]DAOMIN.RUL
	
	4. When the COMPILE.EXE utility completes its task, an intermediate file called
	  DAOMIN.INS is created. Rename this file to SETUP.INS and replace the
	  SETUP.INS located in the REDIST\DAO directory with the newly-created version.
	
	5. Open the SETUP.BAT file using Notepad. Change SETUP NOSDK to:
	
	        SETUP -S NOSDK
	
	6. Run SETUP.BAT. SETUP.EXE uses the new SETUP.INS and installs IISAMs in a
	  silent fashion without prompting the user.
	
	For Visual C++ 4.2 Users
	------------------------
	
	Visual C++ 4.2 includes the new InstallShield Express, and no longer installs the
	InstallShield SDK directly. Instead, you will need to install the InstallShield
	SDK from either Visual C++ 4.0 or 4.1 CD-ROM. Then follow the instructions in
	\ISHIELD\SDK\README.TXT to update the SDK with the latest files.
	
	COMPILE.EXE, used to re-compile the DAOMIN.RUL file, is not shipped on the Visual
	C++ 4.2 CD-ROM and can only be installed from the InstallShield SDK found on
	either Visual C++ 4.0 or Visual C++ 4.1.
	
	======================================================================
	Keywords          : kbsetup kbDAOsearch kbDatabase kbMFC kbODBC kbVC 
	Technology        : kbAudDeveloper kbMFC
	Version           : 4.00 4.10
	Issue type        : kbhowto
	
	=============================================================================
	

{% endraw %}
