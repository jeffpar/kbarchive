---
layout: page
title: "Q147573: PRB: Microsoft Excel Not Registered in Running Object Table"
permalink: /kb/147/Q147573/
---

## Q147573: PRB: Microsoft Excel Not Registered in Running Object Table

{% raw %}

	Article: Q147573
	Product(s): Microsoft FoxPro
	Version(s): 3.0,3.0b,6.0
	Operating System(s): 
	Keyword(s): kbcode kbvfp300 kbvfp300b kbvfp600
	Last Modified: 03-NOV-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual FoxPro for Windows, versions 3.0, 3.0b, 6.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	According to Visual FoxPro Help, the following command will create a reference
	to a running instance of Microsoft Excel:
	
	     oleApp = GETOBJECT(,"Excel.Application")
	
	However, with Microsoft Excel version 7.0, this command can cause the following
	error even if Microsoft Excel is running:
	
	  OLE error code 0x800401e3: Operation unavailable
	
	CAUSE
	=====
	
	Previous versions of Microsoft Excel register the application object in the OLE
	RunningObjectTable (ROT) on startup. This would happen under all circumstances,
	whether Microsoft Excel was Launched using OLE or not.
	
	Microsoft Excel 7.0 does not register the application object in the ROT on
	startup by default. However, Microsoft Excel 7.0 registers itself in the ROT in
	any of the following situations:
	
	- When launched by OLE, as in this example:
	
	     CREATEOBJECT("Excel.Application"))
	
	- When a Module is inserted in one of the Workbooks.
	
	- When a WM_USER+18 message is sent to the Main window of Microsoft Excel.
	
	RESOLUTION
	==========
	
	In Visual FoxPro, send a WM_USER+18 message to the Main window of Microsoft
	Excel to force Microsoft Excel to register itself in the ROT.
	
	STATUS
	======
	
	This behavior is by design.
	
	MORE INFORMATION
	================
	
	The following code demonstrates how to create a reference to a running instance
	of Microsoft Excel 7.0:
	
	     * Start sample code
	     * Main program code
	     oleExcel = findxl()
	     IF TYPE("oleExcel") = "N"
	        =MessageBox("No instances of Excel running !")
	     ELSE
	         oleExcel.WindowState = -4137  &&maximize Excel
	     ENDIF
	
	     FUNCTION findxl
	     DECLARE LONG FindWindowA IN USER32 AS FindA STRING,STRING
	     DECLARE LONG SendMessageA IN USER32 AS SendA LONG, LONG, LONG, LONG
	
	     WM_USER = 1024
	     PRIVATE myExcelApp
	     PRIVATE mySendMessage
	
	     hwnd = FindA("XLMAIN", 0)
	     IF hwnd = 0 then
	        RETURN 0
	     ELSE
	        mySendMessage = SendA(hwnd, WM_USER + 18, 0, 0)
	        myExcelApp = GetObject(, "Excel.Application")
	        RETURN myExcelApp
	     ENDIF
	
	For more information about using the function GETOBJECT() to reference Microsoft
	Excel, please see the following articles in the Microsoft Knowledge Base:
	
	  Q132535 Releasing Object Variable Does Not Close Microsoft Excel
	
	  Q128994 Behavior of GETOBJECT()With Excel and Word For Windows
	
	Additional query words: VFoxWin kbinf CREATEOBJECT OLE automation
	
	======================================================================
	Keywords          : kbcode kbvfp300 kbvfp300b kbvfp600 
	Technology        : kbVFPsearch kbAudDeveloper kbVFP300 kbVFP300b kbVFP600
	Version           : :3.0,3.0b,6.0
	Issue type        : kbprb
	
	=============================================================================
	

{% endraw %}
