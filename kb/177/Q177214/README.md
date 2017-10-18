---
layout: page
title: "Q177214: PRB: Setup Wizard Does Not Use Updated Run Time Files"
permalink: kb/177/Q177214/
---

## Q177214: PRB: Setup Wizard Does Not Use Updated Run Time Files

	Article: Q177214
	Product(s): Microsoft FoxPro
	Version(s): WINDOWS:5.0,5.0a,97sp2
	Operating System(s): 
	Keyword(s): kbvfp
	Last Modified: 18-JUN-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual FoxPro for Windows, versions 5.0, 5.0a 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you install a newer version of Visual FoxPro 5.0 (for example, 5.0a or a
	Service Pack) over an older version and you rerun the Setup Wizard to recreate
	an application for distribution, the newer version of the run time files are not
	automatically used. Although you have installed the update to address a specific
	bug or issue, unexpected results occur when you re- create and redistribute your
	application. The installation of the updated application does not resolve the
	problem.
	
	CAUSE
	=====
	
	The older version of the run time is compressed in the Visual FoxPro \Distrib
	folder and is being used by the Setup Wizard.
	
	RESOLUTION
	==========
	
	After you install the updated Visual FoxPro version or Service Pack, delete the
	Visual FoxPro\Distrib folder. The Distrib folder is re-created when you run the
	Setup Wizard and the updated run time files will be used.
	
	STATUS
	======
	
	This behavior is by design.
	
	MORE INFORMATION
	================
	
	Steps to Reproduce Behavior
	---------------------------
	
	1. Install Visual FoxPro version 5.0 or 5.0a on the development computer.
	
	2. Check the version of the Vfp500.dll file on the development computer
	  Right-click the Vfp500.dll file located in the Windows\System folder (Windows
	  95) or Winnt\System32 folder (Windows NT). In Explorer, click version.
	
	  The version of Vfp500.dll will be as follows:
	
	        Visual FoxPro 5.0         5.0
	        Visual FoxPro 5.0a        5.0a (Build 402)
	
	3. Run the Setup Wizard to create an application for distribution. Select the
	  Visual FoxPro run time check box in Step 2 of the Setup Wizard.
	
	4. Install the application on a computer that does not have Visual FoxPro
	  installed.
	
	5. On the destination computer, check the version of the file Vfp500.dll in the
	  Windows\System folder (Windows 95) or Winnt\System32 folder (Windows NT).
	  This will be the same as the version installed on the development computer,
	  as determined in Step 2.
	
	6. Install the Visual Studio Service Pack 2 on the development computer.
	
	7. On the development computer, check the version of the Vfp500.dll file in the
	  Windows\System folder (Windows 95) or Winnt\System32 folder (Windows NT). The
	  version of Vfp500.dll will Be 5.0a (Build 412).
	
	8. Repeat Steps 3 through 5. The version of Vfp500.dll on the destination
	  computer will be the same as the version in Step 2, rather than Step 7.
	
	To Demonstrate Resolution:
	--------------------------
	
	1. Delete the Visual FoxPro\Distrib folder on the development computer.
	
	2. Repeat Steps 3 through 5 above. The version of Vfp500.dll on the destination
	  computer will now be the same as the version installed on the development
	  computer, as determined in Step 7.
	
	Additional query words: setup wizard
	
	======================================================================
	Keywords          : kbvfp 
	Technology        : kbVFPsearch kbAudDeveloper kbVFP500 kbVFP500a
	Version           : WINDOWS:5.0,5.0a,97sp2
	Issue type        : kbprb
	
	=============================================================================
	
