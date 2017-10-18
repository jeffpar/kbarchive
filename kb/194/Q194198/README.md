---
layout: page
title: "Q194198: FIX: Setup Wizard Does Not Print All Reports"
permalink: kb/194/Q194198/
---

## Q194198: FIX: Setup Wizard Does Not Print All Reports

	Article: Q194198
	Product(s): Microsoft FoxPro
	Version(s): WINDOWS:6.0
	Operating System(s): 
	Keyword(s): kbservicepack kbwizard kbAppSetup kbvfp600 kbvfp600bug kbVS600sp2 kbVS600SP1 kbVS600sp3
	Last Modified: 16-JUN-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual FoxPro for Windows, version 6.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	The Visual FoxPro Setup Wizard displays a Disk Statistics dialog box that
	summarizes the results of the wizard. There is an option in this dialog box to
	"Print All Reports."
	
	Choosing this option only prints the Websetup and 1.44 Disks reports. The
	Netsetup report does not print.
	
	RESOLUTION
	==========
	
	To print the Netsetup report, select the Netsetup tab in the Disk Statistics
	dialog box, and select the Preview Report button. Next, click the print button
	on the Print Preview toolbar.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in the Microsoft products that are
	listed at the beginning of this article.
	
	This bug has been corrected in the updated Setup Wizard, Vfp6swiz.exe, dated
	10/08/1998. This bug was corrected in Visual Studio 6.0 Service Pack 3. For more
	information about Visual Studio service packs, please see the following articles
	in the Microsoft Knowledge Base:
	
	Q194022 INFO: Visual Studio 6.0 Service Packs, What, Where, Why
	
	Q194295 HOWTO: Tell That Visual Studio 6.0 Service Packs Are Installed
	
	MORE INFORMATION
	================
	
	Steps to Reproduce Behavior
	---------------------------
	
	1. Run the Setup Wizard.
	
	2. Select a directory in step 1.
	
	3. Select a Disk Images directory and then select all three image types in step
	  3.
	
	4. Click Finish.
	
	5. When the Setup Wizard completes, click the "Print All Reports" button in the
	  Disk Statistics dialog box. Note that only the Websetup and 1.44 Disks
	  reports print.
	
	REFERENCES
	==========
	
	For more information on the updated Setup Wizard, please see the following URL:
	
	http://msdn.microsoft.com/vfoxpro/downloads/updates.asp
	
	Additional query words: kbdse
	
	======================================================================
	Keywords          : kbservicepack kbwizard kbAppSetup kbvfp600 kbvfp600bug kbVS600sp2 kbVS600SP1 kbVS600sp3fix 
	Technology        : kbVFPsearch kbAudDeveloper kbVFP600
	Version           : WINDOWS:6.0
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	
