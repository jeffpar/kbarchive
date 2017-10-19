---
layout: page
title: "Q161272: HOWTO: Make a Typelib (.TLB) File for ActiveX Components"
permalink: /kb/161/Q161272/
---

## Q161272: HOWTO: Make a Typelib (.TLB) File for ActiveX Components

	Article: Q161272
	Product(s): Microsoft Visual Basic for Windows
	Version(s): 
	Operating System(s): 
	Keyword(s): kbGrpDSVB
	Last Modified: 13-JAN-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual Basic Learning Edition for Windows, version 6.0 
	- Microsoft Visual Basic Professional Edition for Windows, version 6.0 
	- Microsoft Visual Basic Enterprise Edition for Windows, version 6.0 
	- Microsoft Visual Basic Enterprise Edition for Windows, version 5.0 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	When you create an ActiveX component (OLE server) using Visual Basic, a separate
	typelib (.TLB) file is not generated automatically. By default, the type library
	for the ActiveX component is compiled into the .EXE or .DLL file. If you are
	using the Professional or Enterprise editions of Visual Basic 5.0, you can
	create a typelib file for any non-private ActiveX .EXE (out-of-process OLE
	server) and any non-private ActiveX .DLL (in-process OLE server).
	
	MORE INFORMATION
	================
	
	Step-by-Step Example
	--------------------
	
	1. Open your ActiveX EXE or ActiveX DLL project. (If you need to create an
	  ActiveX EXE or ActiveX DLL project for the first time, see the "Component
	  Tools Guide," "Creating ActiveX Components," "Creating an ActiveX DLL," or
	  "Creating an ActiveX EXE Component" for more information.)
	
	2. From the Project menu, click "<ProjectName> Properties..." where
	  <ProjectName> is the name of your project.
	
	3. Click the Component tab. Check (select) the option for Remote Server Files.
	  Note that this option is enabled only if you are creating an accessible
	  ActiveX component (OLE server) with your current project; that is, only if
	  you have at least one Class Module in the project whose Public property has
	  been set to True.
	
	4. Click OK.
	
	5. From the File menu click "Make <ProjectName>.exe..." or "Make
	  <ProjectName.dll...".
	
	When you compile your ActiveX component (OLE server), a .VBR file (which is a
	modified .REG file) and a .TLB file will be created in the same directory as the
	ActiveX component.
	
	Additional query words: kbVBp500 kbVBp600 kbVBp kbdsd kbDSupport kbActiveX
	
	======================================================================
	Keywords          : kbGrpDSVB 
	Technology        : kbVBSearch kbAudDeveloper kbZNotKeyword6 kbZNotKeyword2 kbVB500Search kbVB600Search kbVB500 kbVB600
	Issue type        : kbhowto
	
	=============================================================================
	
