---
layout: page
title: "Q88309: Drag and Drop Support in Lotus 1-2-3 for Windows 1.0 and 1.1"
permalink: /kb/088/Q88309/
---

## Q88309: Drag and Drop Support in Lotus 1-2-3 for Windows 1.0 and 1.1

	Article: Q88309
	Product(s): Microsoft Windows 95.x Retail Product
	Version(s): WINDOWS:3.1,3.11
	Operating System(s): 
	Keyword(s): 
	Last Modified: 08-NOV-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows versions 3.1, 3.11 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	This article discusses how to enable the Windows 3.1 OLE Drag and Drop
	functionality in versions 1.0 and 1.1 of Lotus 1-2-3 for Windows. Because these
	Lotus applications are pre-OLE applications, you need to manually edit the
	REG.DAT file to allow the applications to support OLE drag and drop
	functionality.
	
	MORE INFORMATION
	================
	
	In Windows version 3.1, you can open or embed a document by dragging a file from
	a directory in File Manager and placing the file on a minimized application, or
	by dragging the file into the window of an active application. This process is
	known as "dragging and dropping."
	
	For OLE drag and drop to work, the application being used in conjunction with
	File Manager must directly support dynamic data exchange (DDE) messaging.
	
	For more information about OLE drag and drop, see pages 58-59 of the "Microsoft
	Windows User's Guide."
	
	To Register 1-2-3 for Windows for OLE Drag and Drop Application Use
	-------------------------------------------------------------------
	
	1. Run the Registration Editor (REGEDIT.EXE), which is located in the WINDOWS
	  directory.
	
	2. From the Edit menu, choose Add File Type.
	
	3. Select the Uses DDE check box.
	
	4. In the Identifier box, type "123w" (without the quotation marks).
	
	5. In the File Type box, type "123W Worksheet" (without the quotation marks).
	
	6. In the Action Box, type "open" (without the quotation marks).
	
	7. In the Command box type "<drive><path>\123W.EXE %1" (without the
	  quotation marks).
	
	8. Choose the OK button to save this entry in the REG.DAT database.
	
	To Register Lotus 1-2-3 for Windows for OLE Drag and Drop Printing Use
	----------------------------------------------------------------------
	
	1. Run the Registration Editor (REGEDIT.EXE), which is located in the WINDOWS
	  directory.
	
	2. From the Edit menu, choose Add File Type.
	
	3. Select the Uses DDE check box.
	
	4. In the Identifier box, type "123w" (without the quotation marks).
	
	5. In the File Type box, type "123W Worksheet" (without the quotation marks).
	
	6. In the Action box, type "print" (without the quotation marks).
	
	7. In the Command box, type "<drive><path>\123W.EXE %1" (without the
	  quotation marks) at the MS-DOS command prompt and then press ENTER.
	
	8. In the DDE Message box, type "[run("{alt}fp~{alt}fxn")]" (without the
	  quotation marks).
	
	9. In the Application Box, type "123w" (without the quotation marks).
	
	10. In the Topic Box, type "system" (without the quotation marks).
	
	11. Choose the OK button to save this entry in the REG.DAT database.
	
	12. In File manager, make sure to associate .WK3 files with Lotus 1-2-3 for
	  Windows (from the File menu, choose Associate).
	
	To Print a Lotus 1-2-3 Worksheet Using the OLE Drag and Drop Feature
	--------------------------------------------------------------------
	
	1. Load Print Manager and minimize it.
	
	2. Open File Manager and locate the file that needs to be printed.
	
	3. Drag and drop the file from File Manager onto the minimized Print Manager
	  icon.
	
	Additional query words: 3.10 3.11 imbed 3rdparty
	
	======================================================================
	Keywords          :  
	Technology        : kbWin3xSearch kbZNotKeyword3 kbWin310 kbWin311
	Version           : WINDOWS:3.1,3.11
	
	=============================================================================
	
