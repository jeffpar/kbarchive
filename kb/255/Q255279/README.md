---
layout: page
title: "Q255279: HOWTO: Create a COM DLL with Visual FoxPro that Prints Screen Im"
permalink: kb/255/Q255279/
---

## Q255279: HOWTO: Create a COM DLL with Visual FoxPro that Prints Screen Im

	Article: Q255279
	Product(s): Microsoft FoxPro
	Version(s): WINDOWS:6.0
	Operating System(s): 
	Keyword(s): kbprint kbCOMt kbPrinting kbvfp600 kbGrpDSFox kbDSupport kbCodeSnippet
	Last Modified: 11-SEP-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual FoxPro for Windows, version 6.0 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	This article demonstrates, by example, the general ease with which Component
	Object Model (COM) DLLs can be created within Microsoft Visual FoxPro 6.0. The
	program code contained in this article enables the user to create a useful
	example of a simple COM DLL.
	
	MORE INFORMATION
	================
	
	In order for the example to be put to use, the host computer must have a
	properly installed copy of Microsoft Office for Windows 95 (or higher). The COM
	DLL offers the following functionalities:
	
	- It captures the screen image of the open and active window.
	
	- An OLE instance of Microsoft Word is created for the purpose of printing the
	  captured screen image.
	
	- The captured screen image is pasted into a Microsoft Word document.
	
	- The Microsoft Word Document is printed to the computer's default printer.
	
	To create the COM DLL described in this example, perform the following steps:
	
	1. Within Microsoft Visual FoxPro 6.0, create a new project called "olepscrn"
	  (without the quotation marks).
	
	2. Add a new program to the olepscrn project, and input the following code:
	
	  *!* Beginning of program code example:
	  DEFINE CLASS p_screen AS CUSTOM OLEPUBLIC
	      Name = "p_screen"
	      ScreenPrinted = .F.
	      oWordObj = ""
	      PROCEDURE ScreenCapture
	          This.ReleaseWord()
	          This.ScreenPrinted = .T.
	          DECLARE INTEGER keybd_event IN Win32API ;
	              INTEGER, INTEGER, INTEGER, INTEGER
	          VK_SNAPSHOT = 44
	          =keybd_event(VK_SNAPSHOT, 1, 0, 0)
	          This.oWordObj=CREATEOBJECT("Word.Application")
	          This.oWordObj.Documents.Add
	          This.oWordObj.ActiveDocument.PageSetup.Orientation = 1
	          WITH This.oWordObj.WordBasic
	              .EditPaste
	              .FilePrint
	              .FileClose(2)
	          ENDWITH
	          RELEASE keybd_event, vk_snapshot
	      ENDPROC
	      PROCEDURE ReleaseWord
	          IF This.ScreenPrinted
	              This.oWordObj.Quit
	              This.oWordObj = ""
	              This.ScreenPrinted = .F.
	          ENDIF
	      ENDPROC
	      PROCEDURE Destroy
	          This.ReleaseWord()
	      ENDPROC
	  ENDDEFINE
	  *!* End of program code example:
	
	3. Save the program as "p_screen" (without the quotation marks).
	
	4. On the Project Manager, select the Build button, and choose Single-threaded
	  COM server (DLL) in Visual FoxPro 6.0 with SP3, or choose Build COM DLL in
	  Visual FoxPro 6.0.
	
	5. From the Command window, you can use the DLL by entering the following three
	  commands:
	
	  1. This command creates an object reference to the DLL and loads it into
	     memory:
	
	  oPScreen = CREATEOBJECT("olepscrn.p_screen")
	
	  2. This command executes the Print Screen:
	
	  oPScreen.ScreenCapture()
	
	  3. This third and final command removes the DLL from memory. When the object
	     is released, the instance of Microsoft Word that it created releases as
	     well:
	
	  RELEASE oPScreen
	
	REFERENCES
	==========
	
	For additional information about programmatic screen capturing, click the
	article number below to view the article in the Microsoft Knowledge Base:
	
	  Q153003 How To Perform a Screen Capture Programmatically
	
	For additional information about COM and VFP 6.0, click the article number below
	to view the article in the Microsoft Knowledge Base:
	
	  Q188709 Vfpcom.exe Using COM Language Enhancements in VFP 6.0
	
	For more information about Creating Automation Servers, search for Extending
	Applications, and then Adding OLE in Visual FoxPro Help.
	
	Additional query words:
	
	======================================================================
	Keywords          : kbprint kbCOMt kbPrinting kbvfp600 kbGrpDSFox kbDSupport kbCodeSnippet 
	Technology        : kbVFPsearch kbAudDeveloper kbVFP600
	Version           : WINDOWS:6.0
	Issue type        : kbhowto
	
	=============================================================================
	
