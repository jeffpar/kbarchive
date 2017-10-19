---
layout: page
title: "Q193017: BUG: Incorrect File Extension Using ActiveX Document Wizard"
permalink: /kb/193/Q193017/
---

## Q193017: BUG: Incorrect File Extension Using ActiveX Document Wizard

	Article: Q193017
	Product(s): Microsoft Visual Basic for Windows
	Version(s): WINDOWS:6.0
	Operating System(s): 
	Keyword(s): kbGrpDSVB
	Last Modified: 11-JAN-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual Basic Professional Edition for Windows, version 6.0 
	- Microsoft Visual Basic Enterprise Edition for Windows, version 6.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When using the ActiveX Document Migration Wizard Add-in on a Standard EXE
	application, using the Make command will, by default, create an EXE, even when
	specifying a DLL with the wizard.
	
	RESOLUTION
	==========
	
	When building the component, set the correct extension for the component. For
	example, if the wizard was used to create an ActiveX DLL, rename the extension
	for the file ".dll" (without the quotes) to work around the issue.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a bug in the Microsoft products listed at the
	beginning of this article.
	
	MORE INFORMATION
	================
	
	Steps to Reproduce Behavior
	---------------------------
	
	1. Start Microsoft Visual Basic and create a new Standard EXE application. Form1
	  is created by default.
	
	2. Add a TextBox to Form1.
	
	3. On the File menu, click Make Project1.exe. Click OK to Make Project1.
	
	4. On the Add-ins menu, click Add-In Manager. Verify that the "VB 6 ActiveX Doc
	  Migration Wizard" is loaded, and then click OK.
	
	5. On the Add-Ins menu, click ActiveX Document Migration Wizard.
	
	6. Click Next on the Introduction dialog, if prompted.
	
	7. Check Form1 in the Form Selection dialog and click Next.
	
	8. In the "Your Project Type is Invalid" area on the Options dialog, click
	  Convert to an ActiveX DLL, and then click Finish.
	
	9. When prompted, save the changes to Form1.
	
	10. Click OK to close the wizard, and then click Close to close the Summary
	  Report dialog.
	
	  When using the Make command from the File menu, the menu choice will default
	  to an EXE extension although the project is now an ActiveX DLL.
	
	Additional query words: kbdss kbDSupport kbVBp kbVBp600bug kbWizard kbAddIn
	
	======================================================================
	Keywords          : kbGrpDSVB 
	Technology        : kbVBSearch kbAudDeveloper kbZNotKeyword6 kbZNotKeyword2 kbVB600Search kbVBA600 kbVB600
	Version           : WINDOWS:6.0
	Issue type        : kbbug
	
	=============================================================================
	
