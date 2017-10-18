---
layout: page
title: "Q89214: Drag-and-Drop Support in Version 1.0 of Freelance for Windows"
permalink: kb/089/Q89214/
---

## Q89214: Drag-and-Drop Support in Version 1.0 of Freelance for Windows

	Article: Q89214
	Product(s): Microsoft Windows 95.x Retail Product
	Version(s): WINDOWS:3.1,3.11
	Operating System(s): 
	Keyword(s): 
	Last Modified: 02-NOV-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows versions 3.1, 3.11 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	This article discusses how to enable the Microsoft Windows version 3.1 OLE drag
	and drop functionality in version 1.0 of Freelance for Windows. Because version
	1.0 of Freelance for Windows was developed before OLE technology, you must
	manually edit the REG.DAT file to allow the application to support this
	functionality in Windows 3.1.
	
	MORE INFORMATION
	================
	
	In Windows 3.1, you can open or embed a document by dragging a file from a
	directory in File Manager and placing the file on a minimized application, or by
	dragging the file into the window of an active application. This process is
	known as dragging and dropping.
	
	For drag-and-drop functionality to work, the application being used in
	conjunction with File Manager must directly support dynamic data exchange (DDE)
	messaging.
	
	For more information about drag-and-drop functionality, refer to pages 58-59 of
	the "Microsoft Windows User's Guide."
	
	Registering Freelance for Windows for Drag-and-Drop Application Use
	-------------------------------------------------------------------
	
	1. Run the Registration Editor (REGEDIT.EXE), which is located in the WINDOWS
	  directory.
	
	2. From the Edit menu, choose Add File Type.
	
	3. In the Identifier box, type "FLW" (without the quotation marks).
	
	4. In the File Type text box, type "FLW Presentation" (without the quotation
	  marks).
	
	5. In the Action text box, type "open" (without the quotation marks).
	
	6. In the Command text box, type "<drive><path>\FLW.EXE %1" (without
	  the quotation marks).
	
	7. To save this entry in the REG.DAT database, choose the OK button.
	
	Registering Freelance for Windows for Drag-and-Drop Printing
	------------------------------------------------------------
	
	1. Run the Registration Editor (REGEDIT.EXE), which is located in the WINDOWS
	  directory.
	
	2. From the Edit menu, choose Add File Type.
	
	3. Clear the Uses DDE check box.
	
	4. In the Identifier box, type "LFW" (without the quotation marks).
	
	5. In the File Type box, type "LFW Presentation" (without the quotation marks).
	
	6. In the Action box, type "print" (without the quotation marks).
	
	7. In the Command box, type "<drive><path>\LFW.EXE /p %1" (without
	  the quotation marks).
	
	8. To save this entry in the REG.DAT database, choose the OK button.
	
	9. In File Manager, make sure to associate LFW document files with
	  [drive][path]\LFW.EXE. (To do this, choose Associate from the File menu.)
	
	To print a Freelance for Windows document using drag-and-drop functionality, use
	the following steps:
	
	1. Open Print Manager and minimize it.
	
	2. Open File Manager and locate the file that needs to be printed.
	
	3. Drag and drop the file from File Manager onto the minimized Print Manager
	  icon.
	
	Additional query words: 3.10 3.11 imbed 3rdparty
	
	======================================================================
	Keywords          :  
	Technology        : kbWin3xSearch kbZNotKeyword3 kbWin310 kbWin311
	Version           : WINDOWS:3.1,3.11
	
	=============================================================================
	
