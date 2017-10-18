---
layout: page
title: "Q177095: SAMPLE: SysTray.exe ActiveX Control Adds Icons to Status Area"
permalink: kb/177/Q177095/
---

## Q177095: SAMPLE: SysTray.exe ActiveX Control Adds Icons to Status Area

	Article: Q177095
	Product(s): Microsoft Visual Basic for Windows
	Version(s): 5.0
	Operating System(s): 
	Keyword(s): kbfile kbProgramming kbSample kbVBp500 kbGrpDSVB
	Last Modified: 10-JUN-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual Basic Professional Edition for Windows, version 5.0 
	- Microsoft Visual Basic Enterprise Edition for Windows, version 5.0 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	SysTray.exe is an ActiveX control that is written in Visual Basic that
	demonstrates how to add icons to the status area of the taskbar. SysTray.exe
	also processes callback messages for taskbar icons. By using the new Visual
	Basic 5.0 AddressOf function, the callback messages are received and processed
	in a module that is registered as a callback function in a Win32 application
	programming interface (API) call.
	
	The following file is available for download from the Microsoft Download Center:
	
	  DownloadDownload SysTray.exe now
	  (http://download.microsoft.com/download/vb60pro/Update/6.0/W9X2K/EN-US/SysTray.exe)
	
	For additional information about how to download Microsoft Support files, click
	the article number below to view the article in the Microsoft Knowledge Base:
	
	  Q119591 How to Obtain Microsoft Support Files from Online Services
	
	Microsoft used the most current virus detection software available on the date of
	posting to scan this file for viruses. After it is posted, the file is housed on
	secure servers that prevent any unauthorized changes to the file.
	
	MORE INFORMATION
	================
	
	In Visual Basic version 4.0, you must use a Visual Basic intrinsic control to
	serve as a Window that reacts to the callback message to manipulate the status
	area of the taskbar. By using an intrinsic control in this way, you can work
	around the inability of Visual Basic version 4.0 to work with pointers. For
	additional information about this method, click the article number below to view
	the article in the Microsoft Knowledge Base:
	
	  Q162613 HOWTO: Manipulate Icons in the System Tray with Visual Basic
	
	Because Visual Basic 5.0 can work with pointers, you do not need to use an
	intrinsic control to add icons to the status area of the taskbar. Additionally,
	the control contains properties and mouse events, such as MouseMove, MouseDown,
	MouseUp, and MouseDblClick, to make the control more useful by specifying when
	the icon appears, where the ToolTip text will be, and the icon image.
	
	Additional query words: system tray systray
	
	======================================================================
	Keywords          : kbfile kbProgramming kbSample kbVBp500 kbGrpDSVB 
	Technology        : kbVBSearch kbAudDeveloper kbZNotKeyword6 kbZNotKeyword2 kbVB500Search kbVB500
	Version           : :5.0
	Issue type        : kbhowto
	
	=============================================================================
	
