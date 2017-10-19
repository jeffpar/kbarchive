---
layout: page
title: "Q147906: DOC: Rights.bak File Is Not Necessarily Present"
permalink: /kb/147/Q147906/
---

## Q147906: DOC: Rights.bak File Is Not Necessarily Present

	Article: Q147906
	Product(s): Microsoft SourceSafe
	Version(s): WINDOWS:4.0
	Operating System(s): 
	Keyword(s): kbdocerr kbSSafe400 kbVBp400
	Last Modified: 07-DEC-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual Basic Standard Edition, 32-bit, for Windows, version 4.0 
	- Microsoft Visual Basic Professional Edition, 16-bit, for Windows, version 4.0 
	- Microsoft Visual Basic Professional Edition, 32-bit, for Windows, version 4.0 
	- Microsoft Visual Basic Enterprise Edition, 16-bit, for Windows, version 4.0 
	- Microsoft Visual Basic Enterprise Edition, 32-bit, for Windows, version 4.0 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	You'll find a reference to a Rights.bak file in Chapter 8 of the Visual
	SourceSafe Users Guide (available in Books Online under the Help menu) in the
	"Backing Up and Restoring Visual SourceSafe" section. This reference states that
	the Rights.bak file is an exact, up-to-date copy of the Rights.dat file and can
	be simply renamed if the Rights.dat file is lost or corrupted.
	
	However, a Rights.bak file does not get created in Visual SourceSafe 4.0. If the
	Rights.dat file is corrupted or lost, ensure that Rights.dat is not in the DATA
	directory, and run DDCONV from the command prompt as follows in order to create
	a new Rights.dat:
	
	  DDCONV <path to VSS\DATA directory>
	
	Additional query words:
	
	======================================================================
	Keywords          : kbdocerr kbSSafe400 kbVBp400 
	Technology        : kbVBSearch kbAudDeveloper kbVB400Search kbVB400 kbVB16bitSearch
	Version           : WINDOWS:4.0
	
	=============================================================================
	
