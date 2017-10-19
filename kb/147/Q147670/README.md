---
layout: page
title: "Q147670: HOWTO: Add and Register Custom OCXs with Setup Wizard"
permalink: /kb/147/Q147670/
---

## Q147670: HOWTO: Add and Register Custom OCXs with Setup Wizard

	Article: Q147670
	Product(s): Microsoft Visual Basic for Windows
	Version(s): WINDOWS:4.0
	Operating System(s): 
	Keyword(s): kbGrpDSVB
	Last Modified: 11-JAN-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual Basic Standard Edition, 32-bit, for Windows, version 4.0 
	- Microsoft Visual Basic Professional Edition, 16-bit, for Windows, version 4.0 
	- Microsoft Visual Basic Professional Edition, 32-bit, for Windows, version 4.0 
	- Microsoft Visual Basic Enterprise Edition, 16-bit, for Windows, version 4.0 
	- Microsoft Visual Basic Enterprise Edition, 32-bit, for Windows, version 4.0 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	The Setup Wizard can be used to easily generate setup programs for Visual Basic
	applications. This article explains how to modify a data file that the Setup
	Wizard uses so that the Setup Wizard will treat any custom or third-party OCXs
	in the same manner it treats the controls that ship with Visual Basic 4.0.
	
	MORE INFORMATION
	================
	
	The Setup Wizard utilizes a file called SWDEPEND.INI to determine what, if any,
	additional action is necessary upon installation of each file. It is also used
	to determine the dependent files that each included file may need to run
	properly. The SWDEPEND.INI file is generated the first time the Setup Wizard is
	run and is located in the Windows directory. All OCXs that ship with Visual
	Basic have an entry in the SWDEPEND.INI file that specifies what sort of
	registration should take place after the control is installed and what, if any,
	additional files that should be installed with the control. For example, the
	following entry exists for the 32-bit DBGrid control:
	
	     [DBGRID32.OCX]
	     Register=$(DLLSelfRegister)
	     Dest=$(WinSysPath)
	     Uses1=OCX Runtime Support
	     Uses2=GRDKRN32.DLL
	     Uses3=
	
	The Register line specifies that the file is auto-registering by means of an
	exported DLLSelfRegister function. Setup Wizard will call this function to
	register the control after the file has been copied. The Dest line supplies the
	location that the file should be copied to, in this case to the Windows system
	directory. All remaining UsesX lines list the additional files that should be
	copied to the target system where the program is installed.
	
	To automatically enable the Setup Wizard to support a custom OCX, all that is
	necessary is to add a section for the given OCX to the SWDEPEND.INI file.
	Following the above example, this section would look something like:
	
	     [MYBIGOCX.OCX]
	     Register=$(DLLSelfRegister)
	     Dest=$(WinSysPath)
	     Uses1=OCX Runtime Support
	     Uses2=
	
	After this addition, the Setup Wizard should generate a setup program that will
	automatically register the custom OCX after installation.
	
	Note that the 'OCX Runtime Support' entry includes MFC40.DLL. It does not,
	however, include either MFC30.DLL or OC30.DLL. If the OCX was built with MFC
	3.0, both of these files should be specified in UsesX lines in the entry for the
	OCX.
	
	Additional query words: kbDSupport kbvbp400 kbAppSetup kbdss kbdsstools
	
	======================================================================
	Keywords          : kbGrpDSVB 
	Technology        : kbVBSearch kbAudDeveloper kbVB400Search kbVB400 kbVB16bitSearch
	Version           : WINDOWS:4.0
	Issue type        : kbhowto
	
	=============================================================================
	
