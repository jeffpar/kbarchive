---
layout: page
title: "Q115125: ADT2: Calendar Control Font and Color Properties Unavailable"
permalink: /kb/115/Q115125/
---

## Q115125: ADT2: Calendar Control Font and Color Properties Unavailable

	Article: Q115125
	Product(s): Microsoft Access Distribution Kit
	Version(s): WINDOWS:2.0
	Operating System(s): 
	Keyword(s): kbusage
	Last Modified: 08-JUL-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Access Developer's Toolkit, version 2.0 
	-------------------------------------------------------------------------------
	
	Moderate: Requires basic macro, coding, and interoperability skills.
	
	SYMPTOMS
	========
	
	The arrow to the right of the Calendar Control Properties box is unavailable
	(appears dimmed) and you cannot set the Font and Color properties for the
	Calendar Control.
	
	CAUSE
	=====
	
	The OC1016.DLL file was not registered properly in the REG.DAT file when you
	installed the Microsoft Access Developer's Toolkit.
	
	RESOLUTION
	==========
	
	To register the OC1016.DLL file, follow these steps.
	
	NOTE: This resolution assumes that the Microsoft Access Developer's Toolkit is
	installed in the C:\ACCESS\ADT directory, and that Microsoft Windows is
	installed in the C:\WINDOWS directory. If you are using different directories,
	modify the line in step 2 appropriately.
	
	1. In Windows Program Manager, choose Run from the File menu.
	
	2. In the Command Line box, type the following line, and then choose OK:
	
	  C:\ACCESS\ADT\MSAREG C:\WINDOWS\SYSTEM\OC1016.DLL
	
	The registration process will take from 1 to 5 seconds to complete. You will not
	receive any notification that the process has been completed.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in Microsoft Access version 2.0.
	This problem no longer occurs in Microsoft Access for Windows 95 version 7.0.
	
	MORE INFORMATION
	================
	
	Steps to Reproduce Problem
	--------------------------
	
	1. In any database, create a blank, new form.
	
	2. From the Edit menu, choose Insert Object.
	
	3. Select the Insert Control button.
	
	4. In the Control Type box, select Calendar Control, and then choose OK.
	
	5. From the Edit menu, choose Calendar Control Object, and then choose
	  Properties. Note that the arrow to the right of the Calendar Control
	  Properties box is dimmed.
	
	Additional query words: gray grayed custom ocx
	
	======================================================================
	Keywords          : kbusage 
	Technology        : kbAudDeveloper kbAccessSearch kbAccessDevTK200 kbZNotKeyword3
	Version           : WINDOWS:2.0
	Hardware          : x86
	Issue type        : kbbug
	
	=============================================================================
	
