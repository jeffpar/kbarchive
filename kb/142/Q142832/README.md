---
layout: page
title: "Q142832: INFO: Effect of Priority Setting in the References Dialog"
permalink: kb/142/Q142832/
---

## Q142832: INFO: Effect of Priority Setting in the References Dialog

	Article: Q142832
	Product(s): Microsoft Visual Basic for Windows
	Version(s): WINDOWS:4.0,5.0,6.0
	Operating System(s): 
	Keyword(s): kbGrpDSVB
	Last Modified: 11-JAN-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual Basic Learning Edition for Windows, versions 5.0, 6.0 
	- Microsoft Visual Basic Professional Edition for Windows, versions 5.0, 6.0 
	- Microsoft Visual Basic Enterprise Edition for Windows, versions 5.0, 6.0 
	- Microsoft Visual Basic Standard Edition, 32-bit, for Windows, version 4.0 
	- Microsoft Visual Basic Professional Edition, 16-bit, for Windows, version 4.0 
	- Microsoft Visual Basic Professional Edition, 32-bit, for Windows, version 4.0 
	- Microsoft Visual Basic Enterprise Edition, 16-bit, for Windows, version 4.0 
	- Microsoft Visual Basic Enterprise Edition, 32-bit, for Windows, version 4.0 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	This article illustrates the effects of changing the priority of references in
	the References dialog box.
	
	MORE INFORMATION
	================
	
	Note: Changing the order of references in an existing project may break code.
	For example, given a project that has a reference only to OLE server A (which
	defines the only "Window" object) and code in 20 different modules that simply
	uses the syntax "Window". In this program all references to "Window" will
	resolve to "A.Window". Now suppose the need arises in a single module for a
	"Window" object provided by server B. While writing code in this module, a
	programmer switches the priority of server A and B so that the need to use
	"B.Window" is removed. This causes the code in the 20 other modules to break.
	Where "Window" used to resolve to "A.Window", it now resolves to "B.Window"
	because server B is listed before server A in the list of available references.
	In this case the references should be left in the original order and all calls
	to "Window" in the single module should be explicitly qualified (for example:
	"B.Window").
	
	REFERENCES
	==========
	
	For more information on this subject, including other methods to manipulate the
	way Visual Basic chooses what object to use, please see the following article(s)
	in the Microsoft Knowledge Base:
	
	  Q129867 How to Debug Typelib Shadowing
	
	Additional query words: kbVBp400 kbVBp500 kbVBp600 kbVBp kbdsd kbDSupport kbCompiler
	
	======================================================================
	Keywords          : kbGrpDSVB 
	Technology        : kbVBSearch kbAudDeveloper kbZNotKeyword6 kbZNotKeyword2 kbVB500Search kbVB600Search kbVBA500 kbVBA600 kbVB500 kbVB600 kbVB400Search kbVB400 kbVB16bitSearch
	Version           : WINDOWS:4.0,5.0,6.0
	Issue type        : kbinfo
	
	=============================================================================
	
