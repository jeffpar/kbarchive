---
layout: page
title: "Q195019: FIX: Checking Out a .frm File Without a .vbp File Causes GPF"
permalink: /kb/195/Q195019/
---

## Q195019: FIX: Checking Out a .frm File Without a .vbp File Causes GPF

	Article: Q195019
	Product(s): Microsoft SourceSafe
	Version(s): WINDOWS:5.0,6.0
	Operating System(s): 
	Keyword(s): kbinterop kbSSafe600fix kbVBp500bug kbVBp600bug kbVS600sp3fix
	Last Modified: 01-MAY-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual SourceSafe for Windows, versions 5.0, 6.0 
	- Microsoft Visual Basic Professional Edition for Windows, versions 5.0, 6.0 
	- Microsoft Visual Basic Enterprise Edition for Windows, versions 5.0, 6.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	After you add a Visual Basic project to Visual SourceSafe and check out a Visual
	Basic form without checking out the project file (which has reference to a
	component), a general protection fault might occur.
	
	RESOLUTION
	==========
	
	In a development environment, users often need to check out the forms without
	checking out the project file (.vbp). To work around this problem, after you
	modify the forms, check in the forms and go to the Tools menu, click SourceSafe,
	and then click Refresh File Status. In some circumstances you can remove the
	read-only attribute of the .vbp, but this resolution should be used with care.
	
	Otherwise, close the project and open it again. By doing this, the project is
	re-loaded and the forms will be synchronized. Whenever you get the following
	warning, close the project and open it again:
	
	  Failed to reload the project. Please close this project from file menu and
	  re-open it to get correct version of all files loaded into memory.
	
	If you continue working on the project without re-loading, you will get
	unexpected errors discussed in the MORE INFORMATION section.
	
	
	
	STATUS
	======
	
	Microsoft has confirmed this to be a bug in the Microsoft products listed at the
	beginning of this article.This bug was corrected in Visual Studio 6.0 Service
	Pack 3.
	
	MORE INFORMATION
	================
	
	In Visual Basic you can add reference to components in a form by selecting the
	Components from the Project menu. If you checkout a .frm file that contains a
	ActiveX control without checking out the .vbp file, it will result in unexpected
	errors depending on inputs you give. Before looking into a scenario, you have to
	perform the following general steps:
	
	1. Create a new Standard EXE project in Visual Basic, named 'Project1'.
	
	2. Add a form named, Form1 to the project.
	
	3. Under the Project menu, click Components and select the Microsoft Windows
	  Common Controls 5.0 check box.
	
	4. Click OK.
	
	5. Add a ProgressBar to the form Form1.
	
	6. Save the project and the form under C:\MyProjects.
	
	7. Add this project to Visual SourceSafe under $/MyProjects.
	
	Problem I
	---------
	
	1. Check in Form1.frm and Project1.vbp (if necessary).
	
	2. Right-Click Form1.frm, and click "Check out..."
	
	3. In your working directory you will find a Log file named Form1.log that
	  contains the following:
	
	  Line 2: Could not create reference: '{6B7E6392-850A-101B-AFC0-
	  4210102A8DA7}#1.2#0'.
	
	4. Right-click Form1.frm, and click Check In or Undo Checkout.
	
	5. Right-click Project1.vbp, and click Check Out.
	
	RESULT: the following error message appears:
	
	  Failed to reload the project. Please close this project from file menu and
	  re-open it to get correct version of all files loaded into memory.
	
	Now if you check out Form1.frm by selecting going to the Tools menu, clicking
	SourceSafe, and then clicking "Check out...", the following error message
	appears:
	
	  File Form1.frm could not be mapped to the SourceSafe project $/MyProjects
	  Copy the file to 'C:\MyProjects
	
	Following are two scenarios depending on the input you give for this dialog box.
	
	Scenario 1
	----------
	
	If you click Yes or Yes to All in the dialog box of the error message, the
	following prompt appears:
	
	  File C:\MyProjects\Form1.frm Already exists. Overwrite?
	
	Yes or Yes to All:
	
	If you click Yes or Yes to All, another message appears:
	
	  C:\MyProjects\Form1.frm not found. Click OK
	
	  Failed to reload the project. Please close this project from file menu and
	  re-open it to get correct version of all files loaded into memory.
	
	Visual Basic commits a general protection fault and deletes the file, Form1.frm,
	from C:\MyProjects and from the project, Project1.
	
	To resolve this problem:
	
	1. Open Visual Basic,
	
	2. Open the Visual Basic project C:\MyProjects\Project1.vbp. The following error
	  message appears:
	
	  File not found 'C:\MyProjects\Form1.frm'--Continue Loading Project?
	
	3. Click Yes.
	
	4. Since Form1.frm has been removed from Project1, You can see only Project1 in
	  the Project Window. Go to the Tools menu, click SourceSafe, and then click
	  GET latest version.
	
	5. Click Select All, and then click Advanced.
	
	6. Click Replace in the Replace Writable box.
	
	7. Select the Make Writable check box (if it is not already selected).
	
	8. Click OK, and then click OK again.
	
	NOTE: If you had set the "Get Latest Checked-in version of the file when opening
	a VB project" to Yes (under the Tools menu, click SourceSafe, and then click
	Options to see the Options dialog box), Visual Basic will automatically get the
	latest version when opening the project.
	
	NO or No to All:
	
	If you click NO or No to All, the following error message appears:
	
	  Failed to reload the project. Please close this project from file menu and
	  re-open it to get correct version of all files loaded into memory.
	
	Visual Basic commits a general protection fault, but it does not delete the
	File.frm from the local directory or from the project Project1.
	
	Steps to resolve this problem:
	
	1. Open Visual Basic.
	
	2. Open the Visual Basic project from this location:
	
	  C:\MyProjects\Project1.vbp
	
	3. You might see one of the following message boxes, depending on what you have
	  set under the Replace writable files (under the Tools menu, click SourceSafe,
	  click Options, click Advanced, and then click Local files to see what you
	  have set for Replace writable files):
	
	  File C:\MyProjects\Form1.frm has been checked out, replace?
	
	  File C:\MyProjects\Project1.vbp has been checked out, replace?
	
	4. Click Replace in both dialog boxes.
	
	NOTE: If you are using Visual Basic 6.0, there is no need for any resolution
	because it will not corrupt your project.
	
	Scenario 2
	----------
	
	NO or No to All:
	
	If you click NO or No to All, the following error message appears:
	
	  File Form1.frm could not be mapped to the SourceSafe project $/MyProjects
	
	  Copy the file to 'C:\MyProjects
	
	It will prompt the following error message:
	
	  Failed to reload the project. Please close this project from file menu and
	  re-open it to get correct version of all files loaded into memory.
	
	Steps to resolve this problem:
	
	1. Open Visual Basic.
	
	2. Open the Visual Basic project from this location:
	
	  C:\MyProjects\Project1.vbp
	
	3. You might see one of the following message boxes, depending on what you have
	  set under the Replace writable files (under the Tools menu, click SourceSafe,
	  click Options, click Advanced, and then click Local files to see what you
	  have set for Replace writable files):
	
	  File C:\MyProjects\Form1.frm has been checked out, replace?
	
	  File C:\MyProjects\Project1.vbp has been checked out, replace?
	
	4. Click Replace in both dialog boxes.
	
	NOTE: If you are using Visual Basic 6.0, there is no need for any resolution
	because it will not corrupt your project.
	
	Problem II
	----------
	
	1. Check in Form1.frm and Project1.vbp (if necessary).
	
	2. Right-click Form1.frm and click "Check Out..."
	
	3. In your working directory, find a .log file named Form1.log that contains the
	  following:
	
	  Line 2: Could not create reference: '{6B7E6392-850A-101B-AFC0-
	  4210102A8DA7}#1.2#0'.
	
	4. Right-click Form1.frm, and click Check In or Undo Checkout.
	
	5. Right-click Project1.vbp, and click Check Out.
	
	6. Click Select All, and then click OK.
	
	RESULT: The following error message appears:
	
	  File Form1.frm could not be mapped to the SourceSafe project $/MyProject Copy
	  the file to 'C:\MyProjects
	
	The following two scenarios might occur depending on the input you give.
	
	Scenario 1
	----------
	
	If you click Yes or Yes to All in the dialog box of the error message, a dialog
	box with the following message appears:
	
	  File C:\MyProjects\Form1.frm Already exists. Overwrite?
	
	Yes or Yes to All:
	
	If you click Yes or Yes to All, another message appears:
	
	  File 'C:\MyProjects\Form1.frm not found.' Click 'Ok'.
	
	Visual Basic deletes the file, Form1.frm, from C:\MyProjects and from the
	project, Project1.
	
	Steps to resolve this problem:
	
	1. In Visual SourceSafe, go to the Tools menu, click SourceSafe, and then click
	  Get Latest Version.
	
	2. Click Select All, and then click Advanced.
	
	3. Click Replace in the Replace Writables box.
	
	4. Select the Make Writable check box (if necessary).
	
	If you click NO or No to All, you have made the right choice because you will not
	give any error and the project will be synchronized.
	
	NOTE: These problems occur only with forms that have an ActiveX control in them.
	If you check out a form that does not have an ActiveX control, even though the
	project has a reference to an ActiveX Component, it will not produce any
	problems.
	
	Steps to Reproduce Behavior
	---------------------------
	
	1. Create a new Standard EXE project in Visual Basic, named Project1.
	
	2. Add a form named, Form1 to the project.
	
	3. Under the Project menu, click Components and select the Microsoft Windows
	  Common Controls 5.0 check box.
	
	4. Click OK.
	
	5. Save the project and the form under C:\MyProjects.
	
	6. Add this project to Visual SourceSafe under $/MyProjects.
	
	7. Right-click Form1.frm, and click Check Out.
	
	RESULT: Log files are not created in C:\MyProjects and no errors occur.
	
	Additional query words:
	
	======================================================================
	Keywords          : kbinterop kbSSafe600fix kbVBp500bug kbVBp600bug kbVS600sp3fix 
	Technology        : kbVBSearch kbSSafeSearch kbAudDeveloper kbZNotKeyword6 kbZNotKeyword2 kbVB500Search kbVB600Search kbVB500 kbVB600 kbSSafe600 kbSSafe500
	Version           : WINDOWS:5.0,6.0
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	
