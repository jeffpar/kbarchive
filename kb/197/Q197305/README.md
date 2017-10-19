---
layout: page
title: "Q197305: BUG: Error with Std EXE Converted from ActiveX Control Project"
permalink: /kb/197/Q197305/
---

## Q197305: BUG: Error with Std EXE Converted from ActiveX Control Project

	Article: Q197305
	Product(s): Microsoft Visual Basic for Windows
	Version(s): WINDOWS:5.0
	Operating System(s): 
	Keyword(s): kbActiveX kbCtrl kbCtrlCreate kbDatabase kbVBp500bug kbGrpDSVB
	Last Modified: 11-JAN-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual Basic Learning Edition for Windows, version 5.0 
	- Microsoft Visual Basic Professional Edition for Windows, version 5.0 
	- Microsoft Visual Basic Enterprise Edition for Windows, version 5.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	If you convert an ActiveX control project to a Standard EXE project when the
	RequireLicenseKey flag is set, the following error message appears when you run
	it as a compiled EXE:
	
	  System Error &H80004002: No such interface supported.
	
	CAUSE
	=====
	
	The RequireLicenseKey flag is still present and set.
	
	RESOLUTION
	==========
	
	To work around this problem, do one of the following:
	
	- Turn it back into an ActiveX control project, open the Project Properties
	  dialog box, clear the Require License Key option, and turn the project back
	  into a Standard EXE project.
	
	- Open the .vbp file, and remove the RequireLicenseKey flag.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a bug in the Microsoft products listed at the
	beginning of this article.
	
	MORE INFORMATION
	================
	
	Steps to Reproduce Behavior
	---------------------------
	
	1. Open a New ActiveX control project. UserControl1 is created by default.
	
	2. From the Project Menu, click Project Properties, select the Require License
	  Key option, and click OK.
	
	3. Again, from the Project Menu, click Project Properties and click Standard EXE
	  in the Project Type list box. Notice that the Require License Key option is
	  cleared. Click OK.
	
	4. Click OK on the error message that appears.
	
	5. Close the UserControl designer.
	
	6. From the Project menu, add a new Form to the project and place the
	  UserControl on the Form.
	
	7. From the File Menu, click Make <ProjectName>.EXE to compile the
	  project.
	
	8. Run the .exe.
	
	RESULT: The following error occurs:
	
	  System Error &H80004002: No such interface supported.
	
	Additional query words: requirelicensekey
	
	======================================================================
	Keywords          : kbActiveX kbCtrl kbCtrlCreate kbDatabase kbVBp500bug kbGrpDSVB 
	Technology        : kbVBSearch kbAudDeveloper kbZNotKeyword6 kbZNotKeyword2 kbVB500Search kbVBA500 kbVB500
	Version           : WINDOWS:5.0
	Issue type        : kbbug
	Solution Type     : kbpending
	
	=============================================================================
	
