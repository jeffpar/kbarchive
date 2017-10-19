---
layout: page
title: "Q148708: No Network Access After Running Sclntupd.exe"
permalink: /kb/148/Q148708/
---

## Q148708: No Network Access After Running Sclntupd.exe

	Article: Q148708
	Product(s): Microsoft Windows 95.x Retail Product
	Version(s): 95
	Operating System(s): 
	Keyword(s): msnets win95
	Last Modified: 17-DEC-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows 95 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	After you run Sclntupd.exe from Microsoft Windows 95 Service Pack 1 on a shared
	network installation of Windows 95, you may no longer be able to access the
	network.
	
	CAUSE
	=====
	
	When you run Sclntupd.exe, it copies a new Net.exe file to the Temp folder (as
	defined in the "SET TEMP" statement in the Autoexec.bat file). If the Temp
	folder is the Windows folder, the original Net.exe file is overwritten by the
	new Net.exe file. When Sclntupd.exe finishes, it cleans up the Temp folder,
	which includes deleting the Net.exe file.
	
	RESOLUTION
	==========
	
	To resolve this situation, copy the Net.exe file from the Windows 95 Service
	Pack 1 disks or CD-ROM to the local Windows folder.
	
	To prevent the issue from occurring, modify the Autoexec.bat file before you run
	Sclntupd.exe and then restart your computer. Modify the Autoexec.bat file so
	that the "SET TEMP" and "SET TMP" statements point to a folder other than the
	Windows folder. For example, modify the "SET TEMP" and "SET TMP" statements to
	point to the C:\Windows\Temp folder.
	
	MORE INFORMATION
	================
	
	For information about obtaining Windows 95 Service Pack 1, please see the
	following article in the Microsoft Knowledge Base:
	
	  Q142794 Availability of Microsoft Windows 95 Service Pack 1
	
	For information about using Sclntupd.exe, please see the Admin.doc file included
	with Windows 95 Service Pack 1, or see the following article in the Microsoft
	Knowledge Base:
	
	  Q146239 Microsoft Windows 95 Service Pack 1 Admin.doc File (2 of 3)
	
	Additional query words: sp1
	
	======================================================================
	Keywords          : msnets win95 
	Technology        : kbWin95search kbZNotKeyword3
	Version           : 95
	
	=============================================================================
	
