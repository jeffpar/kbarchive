---
layout: page
title: "Q190165: BUG: Compile Errors When You Use Command Line Argument /MAKE"
permalink: kb/190/Q190165/
---

## Q190165: BUG: Compile Errors When You Use Command Line Argument /MAKE

	Article: Q190165
	Product(s): Microsoft Visual Basic for Windows
	Version(s): 6.0
	Operating System(s): 
	Keyword(s): kbVBp kbVBp600bug kbWebClasses kbGrpDSASP kbGrpDSVB kbDSupport
	Last Modified: 03-AUG-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual Basic Professional Edition for Windows, version 6.0 
	- Microsoft Visual Basic Enterprise Edition for Windows, version 6.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you use command line arguments to compile a Microsoft Visual Basic project
	that contains WebClass designers, you may encounter errors.
	
	
	CAUSE
	=====
	
	When you use the command line argument /MAKE to compile the application, if the
	associated .DCA files for the Designers (.DSR) are not in the same directory as
	the .DSR files, you may encounter errors during the compiling. The .DCA files
	contain type library information that is necessary to compile the project.
	
	RESOLUTION
	==========
	
	Use one of the following workarounds to compile the project without errors:
	
	- Open the project in Visual Basic, and make a change in the project. Any
	  change, such as entering a space and then deleting the space in the project,
	  will suffice. Close Visual Basic, and save the changes. This rebuilds the
	  .DCA files for the application in the same directory where the .DSR files are
	  located.
	
	- Compile the application inside of the Visual Basic Integrated Development
	  Environment (IDE). This also rebuilds the .DCA files for the application.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a bug in the Microsoft products listed at the
	beginning of this article.
	
	MORE INFORMATION
	================
	
	Steps to Reproduce Behavior
	---------------------------
	
	1. Create a new IIS application in Microsoft Visual Basic.
	
	2. Double-click Designers in the Project Explorer windows
	
	3. Double-click WebClass1 in the Project Explorer window.
	
	4. Right-click Custom WebItems in the Project1 - WebClass1 window, and then
	  select Custom WebItem.
	
	5. Double-click WebItem1 in the Project1 - WebClass1 window.
	
	6. In the WebItem1_Respond event, enter the following code:
	
	        WebItem1.Properties("String") = "Test"
	
	7. Save the project, and exit Microsoft Visual Basic.
	
	8. From a command line, type the following command:
	
	  " c:\program files\devstudio\vb98\vb6.exe" /MAKE "c:\temp\project1.vbp "
	  (without the quotation marks)
	
	  NOTE: Modify the path information to correspond to the directories for both
	  the installation of Microsoft Visual Basic and the saved project. Quotes
	  should be used if the path contains long filenames.
	
	REFERENCES
	==========
	
	For additional information, click the article number below to view the article
	in the Microsoft Knowledge Base:
	
	  Q190924 BUG: Command Line Argument /MAKE Truncates User Documents
	
	Additional query words: DCA
	
	======================================================================
	Keywords          : kbVBp kbVBp600bug kbWebClasses kbGrpDSASP kbGrpDSVB kbDSupport 
	Technology        : kbVBSearch kbAudDeveloper kbZNotKeyword6 kbZNotKeyword2 kbVB600Search kbVB600
	Version           : :6.0
	Issue type        : kbbug
	Solution Type     : kbpending
	
	=============================================================================
	
