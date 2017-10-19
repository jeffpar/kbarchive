---
layout: page
title: "Q85542: OLE: Drag and Drop from CD-ROM May Cause Error"
permalink: /kb/085/Q85542/
---

## Q85542: OLE: Drag and Drop from CD-ROM May Cause Error

	Article: Q85542
	Product(s): Microsoft Windows 95.x Retail Product
	Version(s): WINDOWS:3.1,3.11
	Operating System(s): 
	Keyword(s): 
	Last Modified: 25-OCT-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows versions 3.1, 3.11 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When using Microsoft Windows File Manager drag-and-drop OLE functionality to
	drag a file from a CD-ROM into an application's document, you receive an error
	message. The error message varies depending on the application used.
	
	For example:
	
	  In Microsoft Windows Write
	
	  Problem with Object/Link
	
	  In Microsoft Word
	
	  Word cannot create the Package object
	
	WORKAROUND
	==========
	
	To work around this problem use Packager.
	
	For example:
	
	1. Run Write.
	
	2. From the Edit menu, choose Insert Object.
	
	3. From the File menu, choose Import.
	
	4. Select the file from the CD-ROM, and choose the OK button.
	
	5. From the File menu, choose Exit.
	
	6. When asked, "Update (Untitled)?", select Yes.
	
	The object will now be placed into the document.
	
	For more information about the drag-and-drop feature, see pages 58-59 of the
	"Microsoft Windows User's Guide" for version 3.1.
	
	Microsoft has confirmed this to be a problem in OLE's drag-and-drop functionality
	version 1.0. We are researching this problem and will post new information here
	as it becomes available.
	
	Additional query words:
	
	======================================================================
	Keywords          :  
	Technology        : kbWin3xSearch kbZNotKeyword3 kbWin310 kbWin311
	Version           : WINDOWS:3.1,3.11
	
	=============================================================================
	
