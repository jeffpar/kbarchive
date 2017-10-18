---
layout: page
title: "Q193696: FIX: Set Mark To '.' Causes Invalid Distribution Disks"
permalink: kb/193/Q193696/
---

## Q193696: FIX: Set Mark To '.' Causes Invalid Distribution Disks

	Article: Q193696
	Product(s): Microsoft FoxPro
	Version(s): WINDOWS:6.0
	Operating System(s): 
	Keyword(s): kberrmsg kbwizard kbAppSetup kbvfp600 kbvfp600bug kbVS600sp3fix
	Last Modified: 22-MAY-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual FoxPro for Windows, version 6.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	Running the Setup Wizard with SET MARK TO '.', or with the Date Separator in the
	Regional settings set to '.' causes the following error when you run Setup.exe
	from the distribution disks:
	
	  Setup Error 283: Object 8
	  Your setup files may be damaged. Try restarting the Setup program from
	  where you originally ran it.
	
	RESOLUTION
	==========
	
	Before using the Setup Wizard, run the following command from the command
	window:
	
	  SET MARK TO '-'
	
	-or-
	
	  SET MARK TO '/'
	
	STATUS
	======
	
	Microsoft has confirmed this to be a bug in the Microsoft products listed at the
	beginning of this article.
	
	This bug has been fixed in the updated version of the Setup Wizard Vfp6swiz.exe
	dated 10/08/1998. This bug was corrected in Visual Studio 6.0 Service Pack 3.
	For more information about Visual Studio service packs, please see the following
	articles in the Microsoft Knowledge Base:
	
	Q194022 INFO: Visual Studio 6.0 Service Packs, What, Where, Why
	
	Q194295 HOWTO: Tell That Visual Studio 6.0 Service Packs Are Installed
	
	MORE INFORMATION
	================
	
	Steps to Reproduce Behavior
	---------------------------
	
	1. Create project "P."
	
	2. Add a Main.prg to the project and build P.exe in a clean directory.
	
	3. Run the following code from the Command window:
	
	  SET MARK TO '.'
	
	4. Run the Setup Wizard with the following steps:
	
	  a. Point the File Source to the Project Subdirectory Containing P.EXE.
	
	  b. Do not include any components.
	
	  c. Place the setup files in the \Project\Test2 directory.
	
	  d. Select NetSetup as the only disk images option.
	
	  e. Use the following:
	
	     Title: Test
	     Copyright: Test
	
	  f. Use \Project as the default install directory.
	
	  g. For Program Group, use "Visual FoxPro Applications."
	
	  h. Have only P.exe listed in the files list. Do not have PM-Element or
	     ActiveX element.
	
	  i. Click Finish.
	
	  j. Click Finish again.
	
	5. Run the setup from the \Project\Test2\Netsetup directory.
	
	6. Click the "Install All Files" button.
	
	  RESULTS: The error occurs.
	
	REFERENCES
	==========
	
	For more information on the updated Setup Wizard, please see the following URL:
	
	http://msdn.microsoft.com/vfoxpro/downloads/updates.asp
	
	Additional query words: Localize German Europe
	
	======================================================================
	Keywords          : kberrmsg kbwizard kbAppSetup kbvfp600 kbvfp600bug kbVS600sp3fix 
	Technology        : kbVFPsearch kbAudDeveloper kbVFP600
	Version           : WINDOWS:6.0
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	
