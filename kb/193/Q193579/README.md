---
layout: page
title: "Q193579: FIX: SSAPI: Mssccprj.scc File Does Not Have SCC_Aux_Path Info"
permalink: /kb/193/Q193579/
---

## Q193579: FIX: SSAPI: Mssccprj.scc File Does Not Have SCC_Aux_Path Info

	Article: Q193579
	Product(s): Microsoft SourceSafe
	Version(s): 
	Operating System(s): 
	Keyword(s): kbinterop kbSSafe500bug kbSSafe600fix kbVBp
	Last Modified: 01-MAY-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual SourceSafe for Windows, version 5.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you Get a source-controlled Visual Basic project from Visual SourceSafe
	Explorer, the Mssccprj.scc file does not contain SCC_Aux_Path information.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in the Microsoft products listed at
	the beginning of this article. This problem has been corrected in Visual
	SourceSafe 6.0.
	
	MORE INFORMATION
	================
	
	If you add a Visual Basic project to Visual Sourcesafe, Visual SourceSafe
	creates a Mssccprj.scc file in the project folder. The .scc file will have the
	following information:
	
	     SCC=This is a Source Code Control file
	
	     [Project1.vbp]
	     SCC_Project_Name = "$/KB/KB5", TJAAAAAA
	     SCC_Aux_Path=C:\VSS,
	
	SCC_Project_Name is the path to the Visual SourceSafe project the Visual Basic
	project is associated with and TJAAAAAA is its physical file name.
	
	SCC_Aux_Path is the path to the Visual SourceSafe database the Visual Basic
	project associated with.
	
	However, if you perform a Get Latest Version on the Visual Basic project from the
	Visual SourceSafe Explorer, SCC_Aux_Path information is not written in the
	Mssccprj.scc file.
	
	Steps to Reproduce Behavior
	---------------------------
	
	1. Open Visual Basic.
	
	2. Create a standard .exe project, and save the project under C:\proj1.
	
	3. Add the project to SourceSafe under $/proj1.
	
	4. Close Visual Basic.
	
	5. Open Windows Explorer, and go to C:\proj1.
	
	6. Open Mssccprj.scc file in Notepad.exe. The following information is in the
	  file:
	
	        SCC=This is a Source Code Control file
	
	        [Project1.vbp]
	        SCC_Project_Name = "$/Proj1", TJAAAAAA
	        SCC_Aux_Path=C:\VSS,
	
	7. Close Mssccprj.scc file.
	
	8. Delete all the files under C:\Proj1.
	
	9. Open Visual Sourcesafe Explorer, right-click the Project $/Proj1, and click
	  Get Latest Version.
	
	10. If it is not already there, type "C:\proj1" in the "To" edit box.
	
	11. Repeat steps 6-8, and you will find the following information in the
	  Mssccprj.scc file:
	
	        SCC=This is a Source Code Control file
	
	        [Project1.vbp]
	        SCC_Project_Name = "$/Proj1", TJAAAAAA
	
	REFERENCES
	==========
	
	For additional information, please see the following article in the Microsoft
	Knowledge Base:
	
	  Q147585 INFO: The Mssccprj.scc File and How Is It Used
	
	Additional query words:
	
	======================================================================
	Keywords          : kbinterop kbSSafe500bug kbSSafe600fix kbVBp 
	Technology        : kbSSafeSearch kbAudDeveloper kbSSafe500
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	
