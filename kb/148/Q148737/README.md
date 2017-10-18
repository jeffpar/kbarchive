---
layout: page
title: "Q148737: Cannot Install Network Monitor Components During Batch Setup"
permalink: kb/148/Q148737/
---

## Q148737: Cannot Install Network Monitor Components During Batch Setup

	Article: Q148737
	Product(s): Microsoft Windows 95.x Retail Product
	Version(s): 
	Operating System(s): 
	Keyword(s): win95
	Last Modified: 25-MAR-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows 95 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	You may not be able to install the Microsoft Network Monitor driver or the
	Microsoft Network Monitor Agent using Batch Setup.
	
	CAUSE
	=====
	
	The Network Monitor Setup file, Nm95setp.dll, makes a call to Windows during
	installation and expects the response to contain version 4.0. If Windows
	responds with version 3.1, the installation does not work.
	
	RESOLUTION
	==========
	
	
	STATUS
	======
	
	This problem no longer occurs in Windows 98. To resolve this problem, install
	the current version of Windows. For information about the current version of
	Windows, visit http://www.microsoft.com/windows.
	
	MORE INFORMATION
	================
	
	
	For more information about Microsoft Network Monitor Agent, please see the
	Netmon.txt file in the Admin\Nettools\Netmon folder on the Windows 95 CD-ROM.
	
	NOTE: Microsoft Network Monitor Agent is included in the CD-ROM version of
	Windows 95, but not in the floppy disk version. If you are using the floppy disk
	version of Windows 95 and you want to use Microsoft Network Monitor Agent,
	please see the following article in the Microsoft Knowledge Base for information
	about the availability of Microsoft Network Monitor Agent:
	
	  Q135315 CD-ROM Extras for Microsoft Windows 95 Upgrade
	
	Additional query words: netmon nmagent.exe
	
	======================================================================
	Keywords          : win95 
	Technology        : kbWin95search kbZNotKeyword3
	Version           : :
	Issue type        : kbprb
	
	=============================================================================
	
