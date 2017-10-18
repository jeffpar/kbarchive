---
layout: page
title: "Q193020: INFO: PDW [Do Not Redistribute] Section of VB6DEP.INI"
permalink: kb/193/Q193020/
---

## Q193020: INFO: PDW [Do Not Redistribute] Section of VB6DEP.INI

	Article: Q193020
	Product(s): Microsoft Visual Basic for Windows
	Version(s): WINDOWS:6.0
	Operating System(s): 
	Keyword(s): kbGrpDSVB
	Last Modified: 11-JAN-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual Basic Professional Edition for Windows, version 6.0 
	- Microsoft Visual Basic Enterprise Edition for Windows, version 6.0 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	A new section named [Do Not Redistribute] has been added to the VB6Dep.ini file
	that is used by the Package and Deployment Wizard (PDW) to build a Visual Basic
	6.0 application distribution set.
	
	MORE INFORMATION
	================
	
	The following kinds of files are listed under the new section:
	
	- Files that are not needed at run-time and have no dependencies of their own.
	
	  -and-
	
	- Files that cannot be redistributed by the PDW due to Microsoft redistribution
	  policy. For example, the Microsoft Internet Controls (Shdocvw.dll) cannot be
	  distributed using the PDW.
	
	When the PDW creates a distribution set for a Visual Basic 6.0 application, it
	checks VB6Dep.ini for any dependency of the files that are included in the set.
	It will specifically exclude the files listed under the [Do Not Redistribute]
	section when building the set.
	
	REFERENCES
	==========
	
	For additional information, please see the following articles in the Microsoft
	Knowledge Base:
	
	  Q191692 : PRB: SHDOCVW.DLL Not Included in PDW Setup Package
	
	  Q192136 : PRB: PDW Does Not Include MSAddndr.DLL for Add-in Projects
	
	Additional query words: kbdss kbDSupport kbVBp kbVBp600 kbWizard kbAppSetup
	
	======================================================================
	Keywords          : kbGrpDSVB 
	Technology        : kbVBSearch kbAudDeveloper kbZNotKeyword6 kbZNotKeyword2 kbVB600Search kbVBA600 kbVB600
	Version           : WINDOWS:6.0
	Issue type        : kbinfo
	
	=============================================================================
	
