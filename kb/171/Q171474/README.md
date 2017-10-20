---
layout: page
title: "Q171474: FIX: Path Problems Using Project on Network Server"
permalink: /kb/171/Q171474/
---

## Q171474: FIX: Path Problems Using Project on Network Server

{% raw %}

	Article: Q171474
	Product(s): Microsoft Visual Basic for Windows
	Version(s): 5.0
	Operating System(s): 
	Keyword(s): kbVBp500 kbVS97sp2fix kbGrpDSVB kbvbp500sp2fix
	Last Modified: 11-JAN-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual Basic Learning Edition for Windows, version 5.0 
	- Microsoft Visual Basic Professional Edition for Windows, version 5.0 
	- Microsoft Visual Basic Enterprise Edition for Windows, version 5.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	Saving a project to one network share and creating the exe on a different
	network share causes Visual Basic to generate an invalid path to the EXE file.
	
	CAUSE
	=====
	
	This problem is caused when Visual Basic attempts to store the path to the EXE
	relative to the Project files.
	
	RESOLUTION
	==========
	
	Keep EXE and Project on same share or upgrade to Visual Studio 97 Service Pack
	2.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a bug in the Microsoft products listed at the
	beginning of this article. This bug has been fixed in Visual Studio 97 Service
	Pack 2.
	
	For more information on the Visual Studio 97 Service Pack 2, please see the
	following article in the Microsoft Knowledge Base:
	
	  Q170365 INFO: Visual Studio 97 Service Packs - What, Where, and Why
	
	For a list of the Visual Basic 5.0 bugs that were fixed in the Visual Studio 97
	Service Pack 2, please see the following article in the Microsoft Knowledge
	Base:
	
	  Q171554 INFO: Visual Basic 5.0 Fixes in Visual Studio 97 Service Pack 2
	
	MORE INFORMATION
	================
	
	Steps to Reproduce Behavior
	---------------------------
	
	This requires two machines;
	
	1. Create two shares on a system, for example:
	
	     \\MyComputer\Share1
	     \\MyComputer\Share2
	
	2. From a second machine, create a new standard EXE project.
	
	3. Save the project file and Form1 to \\MyComputer\Share1.
	
	4. Build an EXE and save it to \\MyComputer\Share2.
	
	5. Close the project.
	
	6. Re-open the project.
	
	7. Choose Build Exe from the file menu.
	
	Observed Behavior
	-----------------
	
	In the Build EXE dialog window, note that the path to the EXE is incorrect; the
	path appears as:
	
	  \\<Path to Project>\..\<Path to Exe>.Exe
	
	Without changing anything, click OK. You will receive an error:
	
	  "\\<Path to Project>\..\<Path to Exe>.Exe
	  The filename is not valid"
	
	Additional query words:
	
	======================================================================
	Keywords          : kbVBp500 kbVS97sp2fix kbGrpDSVB kbvbp500sp2fix 
	Technology        : kbVBSearch kbAudDeveloper kbZNotKeyword6 kbZNotKeyword2 kbVB500Search kbVBA500 kbVB500
	Version           : 5.0
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	

{% endraw %}
