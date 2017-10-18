---
layout: page
title: "Q189950: HOWTO: Install the Microsoft Windowless Controls for VB6"
permalink: kb/189/Q189950/
---

## Q189950: HOWTO: Install the Microsoft Windowless Controls for VB6

	Article: Q189950
	Product(s): Microsoft Visual Basic for Windows
	Version(s): WINDOWS:6.0
	Operating System(s): 
	Keyword(s): kbsetup kbCtrl kbRegistry kbVBp kbVBp600 kbVS600 kbGrpDSVB kbDSupport
	Last Modified: 11-JAN-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual Basic Learning Edition for Windows, version 6.0 
	- Microsoft Visual Basic Professional Edition for Windows, version 6.0 
	- Microsoft Visual Basic Enterprise Edition for Windows, version 6.0 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	The Microsoft Windowless Controls must be installed manually. Installation of
	these controls is not an option in the Visual Basic / Visual Studio 6.0 setup
	program.
	
	MORE INFORMATION
	================
	
	The files required for the Windowless Controls are located in the folder
	Common\Tools\VB\Winless on the Visual Basic CD-ROM. This folder is located on
	Disk #3 if you are installing from Visual Studio. The following files are
	present in that folder:
	
	  MSWLESS.dep
	  MSWLESS.reg
	  MSWLESS.ocx
	  LTWTCT98.chi
	  LTWTCT98.chm
	
	Step-by-Step Instructions
	-------------------------
	
	1. Locate the Common\Tools\VB\Winless folder.
	
	2. Copy the two help files, LTWTCT98.*, to the Windows\Help folder, and the
	  remaining three files to the Windows\System folder.
	
	  -or-
	
	  Copy all five files to the Windows\System folder.
	
	3. Register MSWLESS.OCX by either Browsing to it in Visual Basic itself, or
	  manually registering it using RegSvr32.Exe. RegSvr32.EXE can be found in the
	  Common\Tools\VB\Regutils folder. The command line is:
	
	     RegSvr32.Exe C:\Windows\System\MSWLESS.OCX
	
	4. Register the design -ime license for the control. To do this, double-click
	  the MSWLESS.REG file in Windows Explorer. This will merge the file into your
	  registry. Alternatively, you can merge this file into your registry by
	  running RegEdit.Exe. The command line is:
	
	     RegEdit.Exe C:\Windows\System\MSWLESS.REG
	
	REFERENCES
	==========
	
	For additional information, please click the articles number below to view the
	article in the Microsoft Knowledge Base:
	
	  Q184687 INFO: Lightweight Controls in Visual Basic 6.0
	
	  Q259564 INFO: Windowless Controls in the Mswless.ocx File Are Not Supported
	
	Additional query words:
	
	======================================================================
	Keywords          : kbsetup kbCtrl kbRegistry kbVBp kbVBp600 kbVS600 kbGrpDSVB kbDSupport 
	Technology        : kbVBSearch kbAudDeveloper kbZNotKeyword6 kbZNotKeyword2 kbVB600Search kbVBA600 kbVB600
	Version           : WINDOWS:6.0
	Issue type        : kbhowto
	
	=============================================================================
	
