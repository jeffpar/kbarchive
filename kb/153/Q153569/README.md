---
layout: page
title: "Q153569: HOWTO: Get a Typelib (.TLB) File for a Visual Basic OLE Server"
permalink: /kb/153/Q153569/
---

## Q153569: HOWTO: Get a Typelib (.TLB) File for a Visual Basic OLE Server

	Article: Q153569
	Product(s): Microsoft Visual Basic for Windows
	Version(s): 
	Operating System(s): 
	Keyword(s): kbGrpDSVB
	Last Modified: 11-JAN-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual Basic Learning Edition for Windows, versions 5.0, 6.0 
	- Microsoft Visual Basic Professional Edition for Windows, versions 5.0, 6.0 
	- Microsoft Visual Basic Enterprise Edition for Windows, versions 5.0, 6.0 
	- Microsoft Visual Basic Enterprise Edition, 16-bit, for Windows, version 4.0 
	- Microsoft Visual Basic Enterprise Edition, 32-bit, for Windows, version 4.0 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	When you create an OLE or ActiveX server using Visual Basic, a separate Type
	library file (.TLB) is not automatically created. By default, the type library
	for the OLE server is compiled into the executable or .DLL file. However, if you
	choose to create "Remote Server Support Files" when you build your server, a TLB
	file will be generated
	
	NOTE: The ability to create Remote Server Support Files is provided only by the
	Enterprise versions of Microsoft Visual Basic.
	
	MORE INFORMATION
	================
	
	Visual Basic 4.0
	----------------
	
	1. Open the project for your server in Visual Basic.
	
	2. Click Make EXE File (or Make OLE DLL) on the File menu.
	
	3. In the Make EXE (or Make OLE DLL) dialog, click Options.
	
	4. Check "Remote Server Support Files".
	
	Visual Basic 5.0 and 6.0
	------------------------
	
	1. Open the project for your server in Visual Basic.
	
	2. Click Properties on the Project menu.
	
	3. Click the Component tab and check "Remote Server Files" and click OK.
	
	4. Build your server as usual.
	
	  NOTE: This check box will be enabled only if you are creating an accessible
	  OLE server with your current project; that is, only if you have at least one
	  Class Module in the project whose Public property has been set to True.
	
	Additional query words: kbVBp400 kbVBp500 kbVBp600 kbVBp kbdsd kbDSupport kbCompiler
	
	======================================================================
	Keywords          : kbGrpDSVB 
	Technology        : kbVBSearch kbAudDeveloper kbZNotKeyword6 kbZNotKeyword2 kbVB500Search kbVB600Search kbVBA500 kbVBA600 kbVB500 kbVB600 kbVB400Search kbVB400 kbVB16bitSearch
	Issue type        : kbhowto
	
	=============================================================================
	
