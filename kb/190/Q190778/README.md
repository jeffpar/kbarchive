---
layout: page
title: "Q190778: BUG: PDW Incorrectly Includes Autprx32.dll for DCOM Server"
permalink: kb/190/Q190778/
---

## Q190778: BUG: PDW Incorrectly Includes Autprx32.dll for DCOM Server

	Article: Q190778
	Product(s): Microsoft Visual Basic for Windows
	Version(s): 6.0
	Operating System(s): 
	Keyword(s): kbwizard kbAppSetup kbDCOM kbVBp kbVBp600bug kbGrpDSVB kbDSupport
	Last Modified: 11-JAN-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual Basic Learning Edition for Windows, version 6.0 
	- Microsoft Visual Basic Professional Edition for Windows, version 6.0 
	- Microsoft Visual Basic Enterprise Edition for Windows, version 6.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	If you use the Package and Deployment Wizard (PDW) to create a setup package for
	a project and you include a remote server file (.vbr file) in the package, the
	PDW automatically adds the .tlb file and Autprx32.dll to the list of files to be
	included. This happens even though Autprx32.dll is needed for remote automation
	only, not DCOM.
	
	RESOLUTION
	==========
	
	Manually deselect Autprx32.dll in the Included Files dialog box to remove it
	from the setup package.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a bug in the Microsoft products listed at the
	beginning of this article.
	
	Additional query words:
	
	======================================================================
	Keywords          : kbwizard kbAppSetup kbDCOM kbVBp kbVBp600bug kbGrpDSVB kbDSupport 
	Technology        : kbVBSearch kbAudDeveloper kbZNotKeyword6 kbZNotKeyword2 kbVB600Search kbVBA600 kbVB600
	Version           : :6.0
	Issue type        : kbbug
	
	=============================================================================
	
