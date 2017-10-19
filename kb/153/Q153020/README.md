---
layout: page
title: "Q153020: BUG: Setup Wizard Doesn't Register VB OLE DLLs w/ DLL Install"
permalink: /kb/153/Q153020/
---

## Q153020: BUG: Setup Wizard Doesn't Register VB OLE DLLs w/ DLL Install

	Article: Q153020
	Product(s): Microsoft Visual Basic for Windows
	Version(s): WINDOWS:4.0,5.0
	Operating System(s): 
	Keyword(s): kbsetup kbVBp400bug kbVBp500bug kbGrpDSVB
	Last Modified: 11-JAN-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual Basic Professional Edition for Windows, version 5.0 
	- Microsoft Visual Basic Enterprise Edition for Windows, version 5.0 
	- Microsoft Visual Basic Professional Edition, 32-bit, for Windows, version 4.0 
	- Microsoft Visual Basic Enterprise Edition, 32-bit, for Windows, version 4.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When the Setup Wizard is used to generate a setup program for an OLE DLL, the
	DLL will not be registered correctly when the setup program is used. This
	problem does not occur if the Setup Wizard is used to generate a program for an
	OLE automation client and the OLE server DLL is included in Step 4 of the Setup
	Wizard.
	
	WORKAROUND
	==========
	
	The Setup Wizard generates a SETUP.LST file for each set of installation media
	it generates. This file is used to determine which files to copy, where to copy
	them, and how they can be registered, among other things. The SETUP.LST file can
	be modified to cause the Setup Wizard-generated program to correctly register
	the DLL upon installation.
	
	After generating setup media with the Setup Wizard, open the SETUP.LST file with
	a text editor such as Notepad. The line that refers to the DLL file will look
	something like this (all on one line):
	
	     File2=1,,DS.dl_,DS.dll,$(CommonFiles)\OleSvr,,$(Shared),2/19/1996,10240,
	     1.0.0.0
	
	To cause the DLL to be registered properly when installed, simply add the text
	'$(DLLSelfRegister)' between the correct set of commas, so that the line now
	looks like this:
	
	     File2=1,,DS.dl_,DS.dll,$(CommonFiles)\OleSvr,$(DLLSelfRegister),$(Shared
	     ),2/19/1996,10240,1.0.0.0
	
	The setup program will now know to register the DLL file after it has been copied
	to the hard drive.
	
	STATUS
	======
	
	Microsoft has confirmed this to be an issue in the Microsoft products listed at
	the beginning of this article. Microsoft is researching this problem and will
	post new information here in the Microsoft Knowledge Base as it becomes
	available.
	
	MORE INFORMATION
	================
	
	Steps To Reproduce
	------------------
	
	1. Start Visual Basic, and open the DS sample project
	  (vb\samples\oleserv\ds.vbp). Compile an OLE DLL from the code by selecting
	  'Make OLE DLL File...' from the File menu. Save the changes.
	
	2. Start the Visual Basic Setup Wizard. In step 1, select the project file for
	  the DS sample. This will cause the check box below the text field to change
	  to 'Rebuild the Project's DLL File.'
	
	3. Follow through the steps, ensuring that 'Install as OLE automation shared
	  component' is selected in Step 6. Click Finish to let the Setup Wizard
	  generate the setup files for the DLL.
	
	4. On the same machine that was used to generate the setup disks, unregister the
	  DS.DLL file. This can be done by running REGSVR32 with a -u switch:
	
	  REGSVR32 -u DS.DLL
	
	5. Run the SETUP.EXE generated in step 3 and install the DLL.
	
	6. Start Visual Basic and select References from the Tools menu. Observe that
	  'Demonstration OLE Server' is not listed in the references because it was not
	  registered by the setup program. The problem can be fixed by manually
	  registering the DLL (with REGSVR32) or by modifying the SETUP.LST file as
	  described above and then rerunning the setup program.
	
	Additional query words:
	
	======================================================================
	Keywords          : kbsetup kbVBp400bug kbVBp500bug kbGrpDSVB 
	Technology        : kbVBSearch kbAudDeveloper kbZNotKeyword6 kbZNotKeyword2 kbVB500Search kbVBA500 kbVB500 kbVB400Search kbVB400
	Version           : WINDOWS:4.0,5.0
	Issue type        : kbbug
	
	=============================================================================
	
