---
layout: page
title: "Q232650: HOWTO: Store, Display, and Print JPG Images in Visual FoxPro"
permalink: kb/232/Q232650/
---

## Q232650: HOWTO: Store, Display, and Print JPG Images in Visual FoxPro

	Article: Q232650
	Product(s): Microsoft FoxPro
	Version(s): WINDOWS:6.0
	Operating System(s): 
	Keyword(s): kbole kbvfp600 KbDBFDBC kbGrpDSFox kbDSupport
	Last Modified: 13-JUL-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual FoxPro for Windows, version 6.0 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	In order to display and print JPG images that are stored in Visual FoxPro
	general fields, there must be an OLE server for JPG files installed on that
	computer.
	
	MORE INFORMATION
	================
	
	To display any file type in a general field, and be able to view and print it,
	the object type must have a OLE Server associated. This OLE server provides
	information about the file being linked or embedded. This information tells
	FoxPro how to display and print the file.
	
	One example of an OLE server for JPG files is the Microsoft Image Editor, which
	is included in the Microsoft Office CD's.
	
	If a JPG file is embedded or linked in a Visual FoxPro general field before the
	OLE server is installed, that object (the JPG file) will need to be re-added to
	the project. You must perform this step because the OLE server adds a lot of
	information to the file that tells Visual FoxPro how to reference the file.
	
	Additional query words:
	
	======================================================================
	Keywords          : kbole kbvfp600 KbDBFDBC kbGrpDSFox kbDSupport 
	Technology        : kbVFPsearch kbAudDeveloper kbVFP600
	Version           : WINDOWS:6.0
	Issue type        : kbhowto
	
	=============================================================================
	
