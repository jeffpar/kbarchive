---
layout: page
title: "Q189497: BUG: Visual C++ Does Not Recognize Animated Cursor Types"
permalink: kb/189/Q189497/
---

## Q189497: BUG: Visual C++ Does Not Recognize Animated Cursor Types

	Article: Q189497
	Product(s): Microsoft C Compiler
	Version(s): 
	Operating System(s): 
	Keyword(s): 
	Last Modified: 21-JUL-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual Studio 97 
	- Microsoft Visual C++, 32-bit Professional Edition, version 5.0 
	- Microsoft Visual Basic Enterprise Edition for Windows, version 5.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	Visual Studio does not recognize animated cursors, and displays them as binary
	data.
	
	CAUSE
	=====
	
	Visual Studio does not support animated cursors as a standard resource type.
	Although the resource compiler recognizes animated cursor types and stores them
	properly within resource scripts, Visual Studio treats them as binary data.
	
	RESOLUTION
	==========
	
	Import animated cursors into an existing resource script (.rc file) as a Custom
	resource using the Import Resource command in Visual Studio.
	
	Steps to Resolve the Problem
	----------------------------
	
	1. Create a new workspace in Visual Studio.
	
	2. On the Insert menu, click Resource.
	
	3. Click Import on the Insert Resource dialog box.
	
	4. Import an animated cursor. NOTE: Animated cursors have an .ani file
	  extension.
	
	5. Specify ANICURSORS as the Resource type in the Custom Resource Type dialog
	  box.
	
	6. Click OK.
	
	The animated cursor is opened in the binary editor. If you close the binary
	editor, the cursor is listed as IDR_ANICURSORS1 in the \Resource
	Script\AniCursors folder.
	
	NOTE: The Animated Cursor Editor and Image Editor programs are available from the
	Windows 95 Resource Kit.
	
	For additional information, please see the following article in the Microsoft
	Knowledge Base:
	
	  Q178406 Availability of Animated Cursor Editor and Image Editor Programs
	
	
	STATUS
	======
	
	Microsoft has confirmed this to be a bug in the Microsoft products listed at the
	beginning of this article. We are researching this bug and will post new
	information here in the Microsoft Knowledge Base as it becomes available.
	
	MORE INFORMATION
	================
	
	Import animated cursors into an existing resource script as a Custom resource,
	specifying "ANICURSORS" as the resource type. The animated cursors are stored in
	the resource script properly, and displayed in ResourceView in a folder called
	"ANICURSORS." If you double-click an animated cursor in this view, the cursor is
	displayed as binary data.
	
	IMPORTANT: If you use "ANICURSOR" as the resource type rather than "ANICURSORS,"
	and you save and then reopen the resource script, the "ANICURSOR" folder in the
	resource script is renamed "21", which causes an error in a call to
	::FindResource().
	
	
	Additional query words: kbVC500bug
	
	======================================================================
	Keywords          :  
	Technology        : kbVCsearch kbVSsearch kbVBSearch kbAudDeveloper kbZNotKeyword6 kbZNotKeyword2 kbVB500Search kbVB500 kbVC500 kbVC32bitSearch kbVS97 kbVS97Search kbVC500Search
	Issue type        : kbbug
	Solution Type     : kbpending
	
	=============================================================================
	
