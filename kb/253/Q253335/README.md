---
layout: page
title: "Q253335: BUG: CE CommonDialog: ShowOpen Displays Only My Documents Files"
permalink: /kb/253/Q253335/
---

## Q253335: BUG: CE CommonDialog: ShowOpen Displays Only My Documents Files

	Article: Q253335
	Product(s): Microsoft Visual Basic for Windows
	Version(s): 1.0,2.11,3.0
	Operating System(s): 
	Keyword(s): kbToolkit kbVBp600bug kbOSWinCEsearch kbGrpDSVB
	Last Modified: 26-FEB-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows CE Toolkit for Visual Basic 6.0, version 1.0, on platform(s):
	   - Microsoft Windows CE version 2.11 for the Palm-size PC 
	- Microsoft eMbedded Visual Basic, version 3.0, on platform(s):
	   - Microsoft Windows CE version 2.11 for the Palm-size PC 
	   - Microsoft Windows CE Platform SDK for Pocket PC 
	   - Microsoft Windows CE Platform SDK for Pocket PC 2002 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	The Open common dialog box displays files from the My Documents folder and its
	sub-folders regardless of how the FileName or InitDir properties of the
	CommonDialog control are set.
	
	RESOLUTION
	==========
	
	To display the contents of a particular folder, use the FileSystem object.
	
	STATUS
	======
	
	This behavior is by design.
	
	MORE INFORMATION
	================
	
	The Windows CE operating system on the devices listed above ignores the FileName
	property and only respects the InitDir property if it is one of the "special"
	folders like Templates, Business, or Personal.
	
	Steps to Reproduce the Problem
	------------------------------
	
	1. Create a new Windows CE Project in Visual Basic. Form1 is created by default.
	
	2. From the Project menu, choose Components, and then add the Microsoft CE
	  CommonDialog Control 6.0 to the project.
	
	3. Add a CommonDialog control to Form1.
	
	4. Paste the following code into the General Declarations section of Form1:
	
	  Private Sub Form_Activate()
	      CommonDialog1.FileName = "\My Documents\Templates\To Do.pwi"
	      CommonDialog1.Filter = "All Files|*.*"
	      CommonDialog1.ShowOpen
	  End Sub
	
	5. Run the application, targeting the remote device.
	
	The result is that the Open dialog box displays all files from the My Documents
	folder and its sub-folders. The expected behavior is for the Open dialog box to
	display files in the Templates directory.
	
	Additional query words: wce vbce vbce6 eVB
	
	======================================================================
	Keywords          : kbToolkit kbVBp600bug kbOSWinCEsearch kbGrpDSVB 
	Technology        : kbVBSearch kbAudDeveloper kbWinCETKVBSearch kbWinCESearch
	Version           : :1.0,2.11,3.0
	Issue type        : kbbug
	Solution Type     : kbpending
	
	=============================================================================
	
