---
layout: page
title: "Q166470: PRB: LINK Fatal Error LNK1104 Cannot Open File"
permalink: kb/166/Q166470/
---

## Q166470: PRB: LINK Fatal Error LNK1104 Cannot Open File

	Article: Q166470
	Product(s): Microsoft Visual Basic for Windows
	Version(s): WINDOWS:5.0;
	Operating System(s): 
	Keyword(s): kbVBp500 kbGrpDSVB
	Last Modified: 11-JAN-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual Basic Professional Edition for Windows, version 5.0 
	- Microsoft Visual Basic Enterprise Edition for Windows, version 5.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When compiling an ActiveX component with binary compatibility set to the same
	file the compile is attempting to overwrite, the following error occurs:
	
	  LINK fatal error LNK1104 cannot open file.
	
	RESOLUTION
	==========
	
	To work around this problem, copy the ActiveX executable or DLL to a separate
	directory. Set binary compatibility to the copied file, and compile to the
	original directory. This procedure is described in Microsoft Visual Basic Books
	Online.
	
	STATUS
	======
	
	Microsoft is researching this problem and will post new information here in the
	Microsoft Knowledge Base as it becomes available.
	
	MORE INFORMATION
	================
	
	While this behavior is not always encountered when compiling, you should follow
	the procedures in the RESOLUTION section above in all projects where you set
	binary compatibility.
	
	Steps to Reproduce Behavior
	---------------------------
	
	1. Start Visual Basic 5.0 and open the
	  \samples\CompTool\ActvComp\coffee\xtimers.vbp sample.
	
	2. Select "Make XTimer.dll" from the File menu to compile the project.
	
	3. Select "Open Project" from the File menu.
	
	4. Save the changes to the XTimer project if prompted.
	
	5. Open the \samples\CompTool\ActvComp\coffee\coffee2.vbp sample.
	
	6. Bring up the Project\References dialog box and make sure that the XTimer
	  server compiled previously is referenced.
	
	7. Select "Make Coffe2.exe" from the file menu to compile the project.
	
	8. Bring up the "Coffee2 Properties" dialog box from the Project menu.
	
	9. On the Compile tab, make sure "Native Code" is selected.
	
	10. On the Component tab, make sure "Binary Compatibility" is set and the
	  compatible server is pointing at the previously compiled version of
	  Coffe2.EXE.
	
	11. Save the changes to the project.
	
	12. Select "Make Coffe2.exe" from the file menu to compile the project.
	
	You receive a dialog box with the following message:
	
	  Microsoft Visual Basic: Unexpected error occurred in code generator or
	  linker. -View error messages?
	
	If you click "Yes," the following error message appears:
	
	  LINK fatal error LNK1104 cannot open file.
	
	To fix this problem:
	
	1. Copy the executable to another directory. If you make ActiveX components
	  frequently, you may want to create a directory just for compatible files.
	
	2. Re-set binary compatibility to the file you just pasted into the
	  "Compatibility" directory.
	
	3. Recompile the executable into the project directory.
	
	
	REFERENCES
	==========
	
	Microsoft Visual Basic Books Online, Component Tools Guide, Using Binary Version
	Compatibility.
	
	Additional query words:
	
	======================================================================
	Keywords          : kbVBp500 kbGrpDSVB 
	Technology        : kbVBSearch kbAudDeveloper kbZNotKeyword6 kbZNotKeyword2 kbVB500Search kbVBA500 kbVB500
	Version           : WINDOWS:5.0;
	Issue type        : kbprb
	
	=============================================================================
	
