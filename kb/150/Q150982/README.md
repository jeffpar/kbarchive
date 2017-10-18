---
layout: page
title: "Q150982: PPT: Problems Unpacking Presentation on a Windows 3.x Computer"
permalink: kb/150/Q150982/
---

## Q150982: PPT: Problems Unpacking Presentation on a Windows 3.x Computer

	Article: Q150982
	Product(s): Microsoft PowerPoint for Windows
	Version(s): WINDOWS:4.0,7.0
	Operating System(s): 
	Keyword(s): kbusage kbdta
	Last Modified: 16-APR-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft PowerPoint for Windows 95, version 7.0 
	- Microsoft PowerPoint for Windows, version 4.0 
	-------------------------------------------------------------------------------
	
	
	SYMPTOMS
	========
	
	When you unpack a PowerPoint Pack and Go presentation on a computer running
	Windows 3.x, you may receive the following error message when you attempt to run
	the presentation in PowerPoint Viewer:
	
	  Sorry, this is not a PowerPoint presentation.
	
	CAUSE
	=====
	
	The following is a list of possible causes for this error:
	
	- The steps outlined in the article Q140983 for running a Pack and Go
	  presentation on a Windows 3.1x computer were not followed. For more
	  information, please see the following article here in the Microsoft Knowledge
	  Base:
	
	  Q140983 PPT7: Pack And Go Wizard Is Not Supported on Windows 3.1
	
	- The following OLE files located in the Windows\System folder are not the
	  proper size, date, or version:
	
	  Ole2.dll
	  Ole2prox.dll
	  Ole2disp.dll
	  Ole2conv.dll
	  Storage.dll
	  Compobj.dll
	
	- The file name listed in the PowerPoint Presentation Playlist (*.lst) contains
	  a long file name. A long file name has more than 8 characters in the name or
	  more than 3 characters in the extension such as "abcdefghijk.1234"
	
	RESOLUTION
	==========
	
	How to Install Correct Versions of the OLE2 Files
	-------------------------------------------------
	
	To replace all the OLE files on the system, follow these steps:
	
	1. Exit Windows.
	
	2. At the command prompt, type:
	
	  "cd windows\system <ENTER>" (without the quotation marks)
	
	  "ren ole2*.* ole2*.old <ENTER>" (without the quotation marks)
	
	  "ren storage.dll storage.old <ENTER>" (without the quotation marks)
	
	  "ren compobj.dll compobj.old <ENTER>" (without the quotation marks)
	
	3. Restart Windows.
	
	4. Insert the PowerPoint Viewer disk that ships with Office 95 into drive A.
	
	5. On the File menu in Program Manager, click Run.
	
	6. In the Command Line box, type:
	
	  "A:\Vsetup.exe <ENTER>" (without the quotation marks)
	
	This installs all the viewer files and replaces the updated OLE files to the
	Windows 3.1x computer.
	
	Additional query words: 4.00 7.00 powerpt powerpnt ppt error 3.1 3.11 3.10 viewer
	
	======================================================================
	Keywords          : kbusage kbdta 
	Technology        : kbPowerPtSearch kbPowerPt700 kbZNotKeyword2 kbPowerPt700Search kbPowerPt400
	Version           : WINDOWS:4.0,7.0
	Hardware          : x86
	Issue type        : kbprb
	
	=============================================================================
	
