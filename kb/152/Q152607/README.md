---
layout: page
title: "Q152607: PRB: 16-bit Program Copied from a Server Does Not Run"
permalink: /kb/152/Q152607/
---

## Q152607: PRB: 16-bit Program Copied from a Server Does Not Run

	Article: Q152607
	Product(s): Microsoft Visual Basic for Windows
	Version(s): 4.0
	Operating System(s): 
	Keyword(s): kbsetup kbDSSTools kbVBp kbVBp400 kbGrpDSVB kbDSupport
	Last Modified: 27-JAN-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual Basic Standard Edition for Windows, version 4.0 
	- Microsoft Visual Basic Professional Edition for Windows, version 4.0 
	- Microsoft Visual Basic Enterprise Edition for Windows, version 4.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	The files for a 16-bit Visual Basic program created under Windows 95, Windows
	98, or Windows Me are copied to a Windows NT or Windows 2000 server so that
	other users can have access to the files. A user running Windows for Workgroups
	connects to the NT server and copies all the files from the server. Running the
	application results in an error message stating that the program requires a
	different operating system.
	
	CAUSE
	=====
	
	The files required to run the program were not registered or installed in the
	proper directories.
	
	RESOLUTION
	==========
	
	Use Setup Wizard to create a setup program. Copy that setup program and
	compressed files to the server. Have the user run the installation program from
	the server to install the files in the correct directory and properly register
	them.
	
	STATUS
	======
	
	This behavior is by design.
	
	MORE INFORMATION
	================
	
	A Visual Basic program copied to a new directory will not run for the following
	reasons:
	
	1. All Visual Basic 16-bit programs require OLE version 2.03 or later
	  components. These components must be registered in the registry of the local
	  system using the Visual Basic program.
	
	2. Additional files, such as OCX custom controls and DLL files, must be
	  registered in the registry of the local system.
	
	3. Shared components, such as those required by JET, must be installed in
	  particular directories. If these components are installed in other
	  directories, the components will not run properly.
	
	The Setup Wizard shipping with Visual Basic creates a setup program and
	compresses the necessary files to run the program. The setup program expands
	those files on the local machine and registers those files.
	
	Additional query words:
	
	======================================================================
	Keywords          : kbsetup kbDSSTools kbVBp kbVBp400 kbGrpDSVB kbDSupport 
	Technology        : kbVBSearch kbAudDeveloper kbZNotKeyword6 kbZNotKeyword2 kbVB400Search kbVB400
	Version           : :4.0
	Issue type        : kbprb
	
	=============================================================================
	
