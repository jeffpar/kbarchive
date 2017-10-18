---
layout: page
title: "Q265797: INFO: Use of User-Defined Data Types in eMbedded Visual Basic"
permalink: kb/265/Q265797/
---

## Q265797: INFO: Use of User-Defined Data Types in eMbedded Visual Basic

	Article: Q265797
	Product(s): Microsoft Visual Basic for Windows
	Version(s): 3.0
	Operating System(s): 
	Keyword(s): kbGrpDSVB kbDSupport kbVBM300
	Last Modified: 22-FEB-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft eMbedded Visual Basic, version 3.0 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	User-defined data types (UDTs) are not supported in eMbedded Visual Basic (eVB).
	The only data type provided by eVB is a Variant, which do not explicitly support
	user-defined data types.
	
	Calling Windows CE APIs that use structures is also not supported from eMbedded
	Visual Basic. Although it is possible to use structures, Microsoft recommends
	that you avoid using Declare statements that include structures.
	
	For illustration purposes only, the following resources may be helpful:
	
	  http://www.vbce.com/articles/udt/index.asp
	  (http://www.vbce.com/articles/udt/index.asp)
	
	  Q265793 HOWTO: Use the CreateProcess API from eMbedded Visual Basic
	
	REFERENCES
	==========
	
	For additional information, click the article number below to view the article
	in the Microsoft Knowledge Base:
	
	  Q241530 HOWTO: Call an API That Uses Structures from VBCE6
	
	Additional query words:
	
	======================================================================
	Keywords          : kbGrpDSVB kbDSupport kbVBM300 
	Technology        : kbVBSearch kbAudDeveloper kbZNotKeyword2 kbVBeMbSearch kbVBeMb300
	Version           : :3.0
	Issue type        : kbinfo
	
	=============================================================================
	
