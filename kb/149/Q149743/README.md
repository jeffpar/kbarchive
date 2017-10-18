---
layout: page
title: "Q149743: BUG: Error When Data Control Is Set to a Wrong Text Database"
permalink: kb/149/Q149743/
---

## Q149743: BUG: Error When Data Control Is Set to a Wrong Text Database

	Article: Q149743
	Product(s): Microsoft Visual Basic for Windows
	Version(s): WINDOWS:4.0
	Operating System(s): 
	Keyword(s): kbVBp400 kbGrpDSVBDBkbbuglist
	Last Modified: 11-JAN-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual Basic Standard Edition, 32-bit, for Windows, version 4.0 
	- Microsoft Visual Basic Professional Edition, 16-bit, for Windows, version 4.0 
	- Microsoft Visual Basic Professional Edition, 32-bit, for Windows, version 4.0 
	- Microsoft Visual Basic Enterprise Edition, 16-bit, for Windows, version 4.0 
	- Microsoft Visual Basic Enterprise Edition, 32-bit, for Windows, version 4.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	A 16-bit Visual Basic for Windows version 4.0 program containing a Data control
	with a Connect property set to Text and the DatabaseName property set to a
	non-text database generates an application error when run. The application error
	displays the message - VB caused a General Protection Fault in module VB.EXE at
	003F:2106. Choose close. VB will close.
	
	A 32-bit Visual Basic for Windows version 4.0 program with the same control set
	to the same property displays the error message - Couldn't find object.
	
	STATUS
	======
	
	Microsoft has confirmed this to be an issue in the Microsoft products listed at
	the beginning of this article. Microsoft is researching this issue and will post
	new information here in the Microsoft Knowledge Base as it becomes available.
	
	MORE INFORMATION
	================
	
	Steps to Reproduce Behavior
	---------------------------
	
	The following instructions reproduce the behavior in the 16-bit version of Visual
	Basic:
	
	1. Start 16-bit Visual Basic 4.0. If it is already running, on the File menu,
	  click New Project.
	
	2. Add a data control to the Form1 form and set the Connect property to Text.
	  Set the DatabaseName property to a non-text database, such as an Access or
	  DBaseIV database.
	
	3. On the Run menu, click Start, or press F5. An application error occurs
	  displaying the error message - VB caused a General Protection Fault in module
	  VB.EXE at 003F:2106. Choose close. VB will close.
	
	Additional query words: 4.00 vb4win vb4all
	
	======================================================================
	Keywords          : kbVBp400 kbGrpDSVBDB kbbuglist
	Technology        : kbVBSearch kbAudDeveloper kbVB400Search kbVB400 kbVB16bitSearch
	Version           : WINDOWS:4.0
	Issue type        : kbbug
	
	=============================================================================
	
