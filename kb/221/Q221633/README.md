---
layout: page
title: "Q221633: FIX: Visual FoxPro Hangs After Rebuilding an Application"
permalink: kb/221/Q221633/
---

## Q221633: FIX: Visual FoxPro Hangs After Rebuilding an Application

	Article: Q221633
	Product(s): Microsoft FoxPro
	Version(s): WINDOWS:6.0
	Operating System(s): 
	Keyword(s): kbBuilder kbProjManager kbvfp600 kbvfp600bug kbVS600sp3fix kbGrpDSFox kbDSupport
	Last Modified: 25-JUN-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual FoxPro for Windows, version 6.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	Under a specific set of circumstances, when you rebuild an application using the
	Project Manager, Visual FoxPro may hang. This can occur when the project has
	been created using the Application Wizard, and a form is added that uses a class
	from the FoxPro Foundation Classes. The form containing the class must be open
	when the project is built.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a bug in the Microsoft products listed at the
	beginning of this article.
	
	This bug has been fixed in Visual Studio 6.0 Service Pack 3.
	
	For more information about Visual Studio service packs, please see the following
	articles in the Microsoft Knowledge Base:
	
	  Q194022 INFO: Visual Studio 6.0 Service Packs, What, Where, Why
	
	  Q194295 HOWTO: Tell That Visual Studio 6.0 Service Packs Are Installed
	
	MORE INFORMATION
	================
	
	Following is a specific list of steps to reproduce the behavior. There may be
	other circumstances that also cause the hang to occur.
	
	Steps to Reproduce Behavior
	---------------------------
	
	1. Click the New button on the Standard toolbar and then click the Wizard
	  button.
	
	2. In the Application Wizard dialog box, type " junk " (without the quotation
	  marks) in as the Project Name and click the OK button.
	
	3. After the Application Wizard completes, the HTML Help Viewer will appear.
	  Close the Help Viewer.
	
	4. Click the OK button in the Application Builder to close it.
	
	5. In the Project Manager, click the Build button. In the Build dialog box, make
	  sure the Build Application option is selected, that the Recompile All Files
	  and Run After Build checkboxes are selected, and click the OK button.
	
	6. Click the Save button in the Save As dialog box to save the application.
	  Select Yes when it asks if you wish to replace the existing file.
	
	7. After the application runs, click Cancel in the Open dialog box and quit the
	  application by selecting Exit from the File menu.
	
	8. In the Project Manager, select the Documents tab and then click the New
	  button.
	
	9. Click the New Form button in the New Form dialog box.
	
	10. Start the Component Gallery by selecting Component Gallery from the Tools
	  menu.
	
	11. Expand the Foundation Classes catalog in the Component Gallery treeview and
	  select the Data Navigation node to highlight it.
	
	12. Drag the Data Navigation Buttons class from the list pane on the right of
	  the Component Gallery and drop it on the form that was opened in the Form
	  Designer in step 9 above. This will add an instance of the buttons to the
	  form.
	
	13. Highlight the Component Gallery window by clicking on its title bar, and
	  close the Component Gallery by clicking the close box.
	
	14. Highlight the Form Designer window and click the Run button [!] in the
	  Standard toolbar. When prompted, save the form as Form1.scx.
	
	15. After the form displays, click the form's close box.
	
	16. Highlight the Application Builder dialog box, and click the OK button.
	
	17. Highlight the Project Manager window, then repeat steps 5 and 6 above.
	
	18. Visual FoxPro will hang.
	
	NOTE: In the Visual Studio Service Pack 3 version of Visual FoxPro 6, the hang
	does not occur. A "File in use" error will occur instead. Closing the Form
	Designer before building the application will eliminate the "File in use"
	error.
	
	(c) Microsoft Corporation 1999, All Rights Reserved.
	Contributions by Jim Saunders, Microsoft Corporation
	
	
	Additional query words:
	
	======================================================================
	Keywords          : kbBuilder kbProjManager kbvfp600 kbvfp600bug kbVS600sp3fix kbGrpDSFox kbDSupport 
	Technology        : kbVFPsearch kbAudDeveloper kbVFP600
	Version           : WINDOWS:6.0
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	
