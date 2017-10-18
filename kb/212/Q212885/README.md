---
layout: page
title: "Q212885: INFO: VBCE: Samples Included with the Windows CE Toolkit for VB6"
permalink: kb/212/Q212885/
---

## Q212885: INFO: VBCE: Samples Included with the Windows CE Toolkit for VB6

	Article: Q212885
	Product(s): Microsoft Visual Basic for Windows
	Version(s): 1.0
	Operating System(s): 
	Keyword(s): kbToolkit kbVBp600 kbOSWinCEsearch kbGrpDSVB
	Last Modified: 24-FEB-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows CE Toolkit for Visual Basic 6.0, version 1.0 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	This article describes each of the samples shipped with the Windows CE Toolkit
	for Visual Basic 6.0 (VBCE6), as well as their location on the CD-ROM.
	
	MORE INFORMATION
	================
	
	About the Code Samples Included On the CD
	-----------------------------------------
	
	The Microsoft Windows CE Toolkit for Visual Basic 6.0 includes the following nine
	sample projects, which demonstrate how to use properties and methods of some of
	the Microsoft ActiveX controls included with the toolkit:
	
	- 
	
	  CEPAD
	
	  A CE version of the Notepad application. The sample illustrates the use of
	  graphics, resource file, Common Dialog, File, and CommandBar controls.
	
	- 
	
	  DICE
	
	  This sample was adapted from the Webzee sample for VBScript for use with VBCE,
	  and illustrates the use of graphics and sound files.
	
	- 
	
	  LOANCALC
	
	  The LoanCalc sample demonstrates how to use the Microsoft CE Financial
	  Functions object. These functions are contained in a COM object that you must
	  create at run time using the CreateObject function. Specifically, the
	  LoanCalc sample demonstrates the following:
	
	   - Creating a Windows CE Financial Functions Object.
	   - Calling a function in the object.
	   - Using References to cause a COM object to automatically download.
	
	- 
	
	  MSCECOMM
	
	  The goal of this sample is to illustrate the basics of the Microsoft CE Comm
	  control including opening and closing a communications port and sending and
	  receiving data.
	
	- 
	
	  NWIND
	
	  The NWindCE sample demonstrates how to use the Microsoft CE ADOCE object.
	  These functions are contained in a COM object that you must create at run
	  time using the CreateObject function. Specifically, the NWindCE sample
	  demonstrates the following:
	
	   - Creating a Windows CE ADOCERecordset Object.
	   - Calling methods and properties of the ADOCERecordset object.
	
	- 
	
	  SCRIBBLE
	
	  This sample demonstrates the following:
	
	   - How to auto-download related files.
	   - How to program and manipulate shapes, pictures, points, and lines in the
	     Microsoft CE Picturebox control.
	   - How to program CommandBar buttons with pictures and menus.
	
	- 
	
	  SETUP1
	
	  The Setup1 sample is the source used to create the setup1.exe that the
	  Application Install Wizard uses when it creates setup programs for your
	  Visual Basic for Windows CE Applications.
	
	  NOTE: This is not a Windows CE Project, but rather a Standard EXE project for
	  Visual Basic 6.0. It is provided here for your use if you want to customize
	  your setup programs.
	
	  In order to customize your setup, you must make a new setup1.exe, and place
	  the new setup1.exe in the "CESetup.cab" file located in your "VBCE"
	  directory.
	
	  Use "MakeCab.exe" to make a new .cab file. It is important that all the files
	  originally in CESetup.cab are in your custom CESetup.cab.
	
	  Here are the original files that must be in CESetup.cab:
	
	   - ASYCFILT.DLL
	   - COMCAT.DLL
	   - MSVBVM60.DLL
	   - OLEAUT32.DLL
	   - OLEPRO32.DLL
	   - ST6UNST.EXE
	   - STDOLE2.TLB
	   - Setup1.exe
	
	- 
	
	  TreeView
	  --------
	
	  This is an application that demonstrates the TreeView control. Use of the
	  TreeView control with an ImageList control is shown. Adding, modifying, and
	  trapping events from TreeView nodes is demonstrated.
	
	- 
	
	  WSOCK
	
	  The WSock sample demonstrates how to use the Microsoft CE Winsock control.
	
	  Specifically the WSock sample demonstrates the following:
	
	   - A sample application for running on your Desktop. This communicates with
	     the CE Sample.
	   - The VBCE version of the WSock sample. Run this on your CE Device to
	     communicate with the Desktop version of the sample.
	
	NOTE: By default, all the above samples are installed under c:\Program
	Files\Microsoft Visual Studio\VB98\VBCE\Samples directory.
	
	REFERENCES
	==========
	
	The Help file ("About the Code Samples Included on the CD") topic included with
	the Windows CE Toolkit for Visual Basic 6.0 contains information regarding the
	samples that shipped with the Windows CE Toolkit for Visual Basic 5.0.
	
	Additional query words:
	
	======================================================================
	Keywords          : kbToolkit kbVBp600 kbOSWinCEsearch kbGrpDSVB 
	Technology        : kbVBSearch kbAudDeveloper kbWinCETKVBSearch kbWinCESearch kbWinCETK100VB600
	Version           : :1.0
	Issue type        : kbinfo
	
	=============================================================================
	
