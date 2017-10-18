---
layout: page
title: "Q145723: HOWTO: Modify SWDEPEND.INI for Your OLE Custom Control"
permalink: kb/145/Q145723/
---

## Q145723: HOWTO: Modify SWDEPEND.INI for Your OLE Custom Control

	Article: Q145723
	Product(s): Microsoft Visual Basic for Windows
	Version(s): 
	Operating System(s): 
	Keyword(s): kbVBp400 kbGrpDSVB
	Last Modified: 11-JAN-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual Basic Standard Edition, 32-bit, for Windows, version 4.0 
	- Microsoft Visual Basic Professional Edition, 32-bit, for Windows, version 4.0 
	- Microsoft Visual Basic Enterprise Edition, 32-bit, for Windows, version 4.0 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	This article gives you the information you will need to modify the SWDEPEND.INI
	file so that Visual Basic's Setup Wizard generates a Setup program that
	correctly installs your control.
	
	MORE INFORMATION
	================
	
	Create a section in the SWDEPEND.INI file. The section's name should be the
	filename of your control, including the OCX extension. For example, for OLE
	controls created using Microsoft Foundation Classes version 3.0, the new section
	would look like this:
	
	     [MYCTRL.OCX]
	     Register=$(DLLSelfRegister)
	     Dest=$(WinSysPath)
	     Uses1=MFC30.DLL
	     Uses2=OC30.DLL
	     ...
	
	The complete list of files that you need to list as dependencies will depend on
	the options you used to build the control. Second example: For OLE Controls
	created using Microsoft Foundation Classes version 4.0, the new section would
	look like this:
	
	     [MYCTRL.OCX]
	     Register=$(DLLSelfRegister)
	     Dest=$(WinSysPath)
	     Uses1=OCX Runtime Support
	
	REFERENCES
	==========
	
	Complete information on the syntax of the SWDEPEND.INI file can be found in the
	Visual Basic online help file. From the Contents tab of the help file, Click
	"Read Me," then "Setup Toolkit and SetupWizard," then "SetupWizard Dependency
	File Notes for Microsoft Visual Basic."
	
	Additional query words:
	
	======================================================================
	Keywords          : kbVBp400 kbGrpDSVB 
	Technology        : kbVBSearch kbAudDeveloper kbVB400Search kbVB400
	Issue type        : kbhowto
	
	=============================================================================
	
