---
layout: page
title: "Q147585: INFO: The Mssccprj.scc File and How Is It Used"
permalink: kb/147/Q147585/
---

## Q147585: INFO: The Mssccprj.scc File and How Is It Used

	Article: Q147585
	Product(s): Microsoft SourceSafe
	Version(s): 
	Operating System(s): 
	Keyword(s): kbSSafe400 kbSSafe500 kbSSafe600 kbVBp400
	Last Modified: 07-DEC-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual SourceSafe for Windows, versions 4.0, 5.0, 6.0 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	When you work with a Visual Basic project in Visual SourceSafe, a special file
	is created in your working directory called Mssccprj.scc. This file can never be
	added to Visual SourceSafe. It stays in your working directory and stores
	important information used by the SourceSafe integration in Visual Basic.
	
	MORE INFORMATION
	================
	
	The File Types Options tab in Visual SourceSafe sets options relating to the
	types of files you store in Visual SourceSafe. To get to the File Types tab,
	click Options on the Visual SourceSafe Explorer Tools menu, and then click File
	Types.
	
	This tab has an option for Create SCC File. Create SCC File dictates when
	SourceSafe creates this file. Its default setting (*.vbp, *.mak) means that
	whenever you get or add a file with an extension of .vbp (Visual Basic 4.0
	project file) or .mak (used by older versions of Visual Basic), SourceSafe
	creates the Mssccprj.scc file. This file is very important because without it,
	SourceSafe integration inside Visual Basic will not function properly.
	
	If you are having problems with Visual Basic integration with Visual SourceSafe,
	Make sure the Create SCC File option is set. Also, to rebuild the Mssccprj.scc
	file, delete the old copy, and then regain access to the Visual Basic project.
	It will allow you to point to the existing SourceSafe project and will display
	this message:
	
	  The source code control project already has a make file with the same name as
	  the one you are adding. Is this the same file?
	
	If you answer Yes, the Mssccprj.scc file will be rebuilt.
	
	The Mssccprj.scc file is a text file. It contains information like that shown
	below. There is no reason for anyone to go in and manually make changes to this
	file.
	
	  SCC=This is a Source Code Control file
	
	  [PROJECT1.VBP]
	  SCC_Project_Name="$/Project1", BAAAAAAA
	  SCC_Aux_Path=C:\VSS1CLI,
	
	If a Visual Basic project is removed and destroyed in Visual SourceSafe,
	SourceSafe does not automatically delete the Mssccprj.scc file from the local
	working directory. This will cause some strange errors to appear.
	
	The Mssccprj.scc file is only used by Visual Basic. Visual C++ and other
	development environments do not use this file at all. You may not want this file
	appearing in your Visual C++ directory. To prevent the appearance of the
	Mssccprj.scc file in your Visual C++ directory, remove the *.mak from this
	field. (This change should only be made if you do not use Visual Basic 3.0 .mak
	files.)
	
	Additional query words:
	
	======================================================================
	Keywords          : kbSSafe400 kbSSafe500 kbSSafe600 kbVBp400 
	Technology        : kbSSafeSearch kbAudDeveloper kbSSafe600 kbSSafe400 kbSSafe500
	Issue type        : kbinfo
	
	=============================================================================
	
