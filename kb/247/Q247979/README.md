---
layout: page
title: "Q247979: PRB: Error 429 Using MSDN File System Object Programming Example"
permalink: kb/247/Q247979/
---

## Q247979: PRB: Error 429 Using MSDN File System Object Programming Example

	Article: Q247979
	Product(s): Microsoft Visual Basic for Windows
	Version(s): WINDOWS:5.0,6.0
	Operating System(s): 
	Keyword(s): kbsetup kbwizard kbActiveX kbAppSetup kbDeployment kbVBp kbVBp500 kbVBp600 kbGrpDSVB kb
	Last Modified: 11-JAN-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual Basic Professional Edition for Windows, versions 5.0, 6.0 
	- Microsoft Visual Basic Enterprise Edition for Windows, versions 5.0, 6.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	You are distributing an application that uses one of the MSDN programming
	examples for the File System Object (FSO) when you are running an application
	after installation the following error appears:
	
	  Runtime Error '429' : ActiveX Component Can't Create Object
	
	CAUSE
	=====
	
	This error occurs because many of the MSDN code examples use late binding to the
	Microsoft Scripting Runtime (the component that contains the FS0.) Because late
	binding is used, a reference to the component (Scrrun.dll) is not required. When
	you use the Setup Wizard or Package and Deployment Wizard to package your
	application, the Wizards look at the references in the project to see which
	components need to be included in the package. Because there is no reference for
	this component, the component is not included, and the end result is an error
	when you attempt to create an FSO.
	
	This problem is not specific to the FSO or the Scripting Runtime. The error can
	occur with any component when you use late binding. If you are using late
	binding, make certain that the component you are late binding to is either
	included with your application package or is already present on the target
	computer.
	
	RESOLUTION
	==========
	
	Add a reference to SCRRUN.dll in your project and rebuild the setup package. The
	scripting runtime is listed in the References dialog box as "Microsoft Scripting
	Runtime."
	
	- OR -
	
	Rerun the PDW or Setup Wizard and manually include SCRRUN.dll.
	
	STATUS
	======
	
	This behavior is by design.
	
	MORE INFORMATION
	================
	
	Steps to Reproduce Behavior
	---------------------------
	
	1. Verify that the scripting runtime (Scrrun.dll) is present on your computer.
	
	2. Start a new Standard EXE project in Visual Basic. Form1 is created by
	  default.
	
	3. Add the following code to Form1. (This code is from a MSDN example.)
	
	  Private Sub Form_Click()
	  Set fs = CreateObject("Scripting.FileSystemObject")
	  Set a = fs.CreateTextFile("c:\testfile.txt", True)
	  a.WriteLine ("This is a test.")
	  a.Close
	  End Sub
	
	4. From the File Menu, save the project then chose Make Project1.exe.
	
	5. To verify that this works, run the EXE and click on the form. You will find a
	  file named Testfile.txt in you root (C:\) directory that contains the text,
	  "This is a test."
	
	6. Start the Package and Deployment Wizard, and build a setup package for
	  Project1.
	
	7. Install the application on a computer that does not have the scripting
	  runtime installed.
	
	8. Run the application, and click on Form1.
	
	9. You should receive Error 429.
	
	REFERENCES
	==========
	
	For additional information, click the article number below to view the article
	in the Microsoft Knowledge Base:
	
	  Q254166 BUG: Distribution of Microsoft Scripting Runtime Library Fails
	
	Additional query words:
	
	======================================================================
	Keywords          : kbsetup kbwizard kbActiveX kbAppSetup kbDeployment kbVBp kbVBp500 kbVBp600 kbGrpDSVB kbDSupport 
	Technology        : kbVBSearch kbAudDeveloper kbZNotKeyword6 kbZNotKeyword2 kbVB500Search kbVB600Search kbVBA500 kbVBA600 kbVB500 kbVB600
	Version           : WINDOWS:5.0,6.0
	Issue type        : kbprb
	
	=============================================================================
	
