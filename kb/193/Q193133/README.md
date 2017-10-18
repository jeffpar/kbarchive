---
layout: page
title: "Q193133: HOWTO: Compile VB Programs with Debug Symbols Embedded"
permalink: kb/193/Q193133/
---

## Q193133: HOWTO: Compile VB Programs with Debug Symbols Embedded

	Article: Q193133
	Product(s): Microsoft Visual Basic for Windows
	Version(s): 5.0,6.0
	Operating System(s): 
	Keyword(s): kbCompiler kbDebug kbVBp500 kbVBp600 kbVC kbGrpDSVB kbSymbols
	Last Modified: 28-FEB-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual Basic Enterprise Edition for Windows, versions 5.0, 6.0 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	The "Compile to Native Code" option introduced in Visual Basic versions 5.0 and
	6.0 not only improves performance of Visual Basic programs and components, but
	also makes it possible to debug them with the Visual C++ debugger.
	
	This article shows you how to compile a Visual Basic program or component with
	embedded debug symbols. By doing so, you simplify the debugging process and
	avoid the problems associated with mismatched and improperly placed symbols.
	
	MORE INFORMATION
	================
	
	All it takes to compile a Visual Basic program or component with embedded debug
	symbols is a properly set environment variable, LINK. The key is to set it in
	such a way that Visual Basic inherits the setting when it is launched. To do
	this, follow the steps below:
	
	There are several ways to set the LINK environment variable, each of these
	methods is outlined below:
	
	Windows NT or Windows 95/98/Me
	------------------------------
	
	1. Open an MS-DOS Prompt.
	
	2. Navigate to the folder containing Visual Basic.
	
	3. Execute the following command, "set link=/pdb:none" without quotes.
	
	4. Start Visual Basic from the MS-DOS command prompt.
	
	Windows NT Only
	---------------
	
	1. From the Control Panel, select the System icon.
	
	2. Select the Environment tab.
	
	3. In the Variable entry, enter "link" without quotes.
	
	4. In the Value entry, enter the following:
	
	  /pdb:none
	
	5. Press Set, then Apply.
	
	6. Start Visual Basic from the MS-DOS command prompt.
	
	Windows 95/98/Me Only
	---------------------
	
	1. Make a backup copy of the AutoExec.Bat file.
	
	2. Open the Autoexec.bat file with Notepad.Exe or any text editor.
	
	3. Add the following entry to the AutoExec.Bat file:
	
	  set link=/pdb:none
	
	4. Save the AutoExec.Bat file.
	
	5. Execute the AutoExec.Bat file or reboot the machine.
	
	6. Start Visual Basic.
	
	  Once the LINK environment variable is set, a Visual Basic project can be
	  compiled with embedded debug symbols. The following steps describe how to
	  create a test program and compile it with embedded debug symbols:
	
	Step-by-Step Example
	--------------------
	
	1. Create a new Standard EXE project in Visual Basic. Form1 is created by
	  default.
	
	2. Add a CommandButton (Command1) to Form1.
	
	3. Add the following code to Form1:
	
	        Private Sub Command1_Click()
	           Dim s As String
	           s = App.EXEName
	           Print s
	        End Sub
	
	4. Select Project1 Properties from the Project menu.
	
	5. Select the Compile tab.
	
	6. Select Compile to Native Code, check Create Symbolic Debug Info, and select
	  No Optimization.
	
	7. Save the project and create Project1.EXE. Note that the EXE is created with
	  embedded debug symbols.
	
	REFERENCES
	==========
	
	The article "Set Linker Options" in MSDN.
	
	For additional information, please see the following article in the Microsoft
	Knowledge Base:
	
	  Q166275 : HOWTO: Debug a Native Code Visual Basic Component in VC++
	
	Additional query words: kbdss linker link option debug
	
	======================================================================
	Keywords          : kbCompiler kbDebug kbVBp500 kbVBp600 kbVC kbGrpDSVB kbSymbols 
	Technology        : kbVBSearch kbAudDeveloper kbZNotKeyword6 kbZNotKeyword2 kbVB500Search kbVB600Search kbVB500 kbVB600
	Version           : :5.0,6.0
	Issue type        : kbhowto
	
	=============================================================================
	
