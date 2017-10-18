---
layout: page
title: "Q193000: PRB: Compiling a VB Project Generates &quot;Fatal Error C1083&quot;"
permalink: kb/193/Q193000/
---

## Q193000: PRB: Compiling a VB Project Generates &quot;Fatal Error C1083&quot;

	Article: Q193000
	Product(s): Microsoft Visual Basic for Windows
	Version(s): WINDOWS:5.0,6.0
	Operating System(s): 
	Keyword(s): kbGrpDSVB
	Last Modified: 11-JAN-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual Basic Learning Edition for Windows, versions 5.0, 6.0 
	- Microsoft Visual Basic Professional Edition for Windows, versions 5.0, 6.0 
	- Microsoft Visual Basic Enterprise Edition for Windows, versions 5.0, 6.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	Attempting to compile a Visual Basic project residing on a network that only
	supports 8.3 filenames may generate the following error:
	
	  "fatal error C1083: Cannot open compiler generated file:
	  '[path to file]\[projectname]1.OBJ': No such file or directory."
	
	CAUSE
	=====
	
	If there are N modules in a project, Visual Basic will create N + 1 object
	files; one for each module and one for the project as a whole. The names are
	derived from either the module name or, for the project, the EXE name. The name
	used is either "<basename>.obj" or "<basename><number>.obj." A
	number is added if the base names of the N + 1 files have naming conflicts (such
	as test.bas and test.frm).
	
	Therefore, even if the project name may be fewer than 8 characters, the Visual
	Basic compiler/linker generates object files with the name
	<projectname>1.OBJ when a conflict is detected, resulting in 9-character
	filenames.
	
	In a network environment that does not support long filenames, such as a Novell
	network, the above error will occur.
	
	RESOLUTION
	==========
	
	Create shorter names for your form, module, and project so that if a name
	conflict occurs, the appended number will not violate the short filename
	requirement of your network environment.
	
	STATUS
	======
	
	This behavior is by design.
	
	REFERENCES
	==========
	
	For additional information, please see the following articles in the Microsoft
	Knowledge Base:
	
	  Q152789 : HOWTO: Install Visual Basic to a Network Using 8.3 File Names
	
	  Q191902 : PRB: Errors Using Setup Wizard on Novell Network
	
	Additional query words: kbdss kbDSupport kbVBp kbCompiler kbVBp600 kbVBp500 kberrmsg
	
	======================================================================
	Keywords          : kbGrpDSVB 
	Technology        : kbVBSearch kbAudDeveloper kbZNotKeyword6 kbZNotKeyword2 kbVB500Search kbVB600Search kbVBA500 kbVBA600 kbVB500 kbVB600
	Version           : WINDOWS:5.0,6.0
	Issue type        : kbprb
	
	=============================================================================
	
