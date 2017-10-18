---
layout: page
title: "Q152609: PRB: Visual Basic Program Does Not Run on Other Computers"
permalink: kb/152/Q152609/
---

## Q152609: PRB: Visual Basic Program Does Not Run on Other Computers

	Article: Q152609
	Product(s): Microsoft Visual Basic for Windows
	Version(s): 4.0
	Operating System(s): 
	Keyword(s): kbsetup kbGrpDSVB
	Last Modified: 22-FEB-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual Basic Standard Edition, 32-bit, for Windows, version 4.0 
	- Microsoft Visual Basic Professional Edition, 16-bit, for Windows, version 4.0 
	- Microsoft Visual Basic Professional Edition, 32-bit, for Windows, version 4.0 
	- Microsoft Visual Basic Enterprise Edition, 16-bit, for Windows, version 4.0 
	- Microsoft Visual Basic Enterprise Edition, 32-bit, for Windows, version 4.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	A Visual Basic program runs properly on the development computer. The executable
	file, along with the associated control (.OCX) and .DLL files, are copied to
	another computer. Attempting to run the program on the other computer results in
	the error 424 with the following message:
	
	  You do not have an appropriate license to use functionality.
	
	CAUSE
	=====
	
	- The controls or DLLs used by the program were not registered in the system
	  registry of the other computer.
	
	- Some controls used by the program require dependency files that need to be
	  installed and registered in the other computer.
	
	- Some files, such as those for JET, are required to be in specific
	  directories.
	
	WORKAROUND
	==========
	
	Use the Setup Wizard in Visual Basic to create an installation program that
	copies all the required files to the correct locations and makes the proper
	registry modifications. To install the program into another computer, use the
	installation program and the compressed files developed using Setup Wizard to
	properly install the program.
	
	STATUS
	======
	
	This behavior is by design.
	
	MORE INFORMATION
	================
	
	Visual Basic version 4.0 uses substantially more OLE components than version
	3.0. These components have dependency files and require system registry
	modifications. Even if another setup program is used, Setup Wizard should be run
	on your application to allow the Wizard to determine all the necessary files
	needed by your program.
	
	To reduce the number of required program files, remove unneeded controls from the
	project in the Custom Controls dialog box by following the steps below:
	
	1. From the Tools menu, click Custom Controls, or press CTRL+T to display the
	  Custom Controls dialog box.
	
	2. In the Custom Controls dialog box, clear the checkboxes of the unneeded
	  controls. Click OK to close this dialog box.
	
	3. From the Tools menu, click References to display the References dialog box.
	  Clear the checkboxes of the unneeded controls. Click OK to close this dialog
	  box.
	
	Additional query words: kbvbp400 kbDSupport kbdss setup Error 424
	
	======================================================================
	Keywords          : kbsetup kbGrpDSVB 
	Technology        : kbVBSearch kbAudDeveloper kbVB400Search kbVB400 kbVB16bitSearch
	Version           : :4.0
	Issue type        : kbprb
	
	=============================================================================
	
