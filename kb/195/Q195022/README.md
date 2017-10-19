---
layout: page
title: "Q195022: PRB: VB: &quot;File could not be mapped to the SourceSafe Project&quot;"
permalink: /kb/195/Q195022/
---

## Q195022: PRB: VB: &quot;File could not be mapped to the SourceSafe Project&quot;

	Article: Q195022
	Product(s): Microsoft SourceSafe
	Version(s): 
	Operating System(s): 
	Keyword(s): kbinterop kbSSafe600 kbVBp400
	Last Modified: 18-JUN-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual SourceSafe for Windows, version 6.0 
	- Microsoft Visual Basic Professional Edition, 32-bit, for Windows, version 4.0 
	- Microsoft Visual Basic Enterprise Edition, 32-bit, for Windows, version 4.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you add a project to Visual SourceSafe in the Visual Basic integrated
	development environment you receive the message:
	
	  File <filename> could not be mapped to the SourceSafe project
	  <project name>
	
	  Copy the file to <home directory>?
	
	CAUSE
	=====
	
	The project (.vbp) contains a file that is not in the home directory (the one
	that contains the .vbp file) or a subdirectory underneath it.
	
	NOTE: This article uses the term "vbp" to refer to the Visual Basic project, and
	"project" to refer to a Visual SourceSafe project.
	
	For additional information, please see the following article in the Microsoft
	Knowledge Base:
	
	  Q164684 "File or Project not Found" Adding Files via Integration
	
	RESOLUTION
	==========
	
	Place all the .vbp files in either the home directory or in a subdirectory
	underneath it. Alternatively, you can create a project structure in Visual
	SourceSafe that mirrors the directory structure on your hard drive before adding
	the .vbp to Visual SourceSafe.
	
	STATUS
	======
	
	This behavior is by design.
	
	MORE INFORMATION
	================
	
	You only have the option of copying the file to the home directory, which might
	not be the desired location if the .vbp has a subdirectory structure with
	different subdirectories for modules, forms, and so forth. In this case, you
	should copy or move the files into the appropriate directories using the Windows
	Explorer and add them to the .vbp.
	
	Steps to Reproduce Behavior
	---------------------------
	
	1. On your local drive create a directory structure similar to the following:
	
	     C:\ 
	         projects\ 
	                   vbphome\ 
	                   vbpother\ 
	
	2. Start Visual Basic, create a new Standard .exe project, and save it in the
	  vbphome subdirectory.
	
	3. Right-click the project name in the Project Explorer and add a new module,
	  save it as Module1.bas in the vbpother subdirectory.
	
	4. Add the .vbp to Visual SourceSafe, creating a new Visual SourceSafe project
	  to store the .vbp.
	
	RESULT: You will receive the message.
	
	If you view the .vbp file in a text editor, you will see the following line:
	
	  Module = Module1; ..\vbpother\module1.bas.
	
	The Visual SourceSafe integration returns the error when it cannot resolve this
	relative path to the .vbp file in its database.
	
	Additional query words: kbDSupport
	
	======================================================================
	Keywords          : kbinterop kbSSafe600 kbVBp400 
	Technology        : kbVBSearch kbSSafeSearch kbAudDeveloper kbVB400Search kbVB400 kbSSafe600
	Issue type        : kbprb
	
	=============================================================================
	
