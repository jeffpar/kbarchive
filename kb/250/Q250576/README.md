---
layout: page
title: "Q250576: XADM: Error Message While Exmerge Reads Server Recipients List"
permalink: kb/250/Q250576/
---

## Q250576: XADM: Error Message While Exmerge Reads Server Recipients List

	Article: Q250576
	Product(s): Microsoft Exchange
	Version(s): WINDOWS:2000; winnt:4.0,5.0,5.5; :4.0
	Operating System(s): 
	Keyword(s): exc5 exc55
	Last Modified: 06-AUG-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Exchange Server, versions 5.0, 5.5 
	- Microsoft Outlook 2000 
	- the operating system: Microsoft Windows NT 4.0 
	- the operating system: Microsoft Windows 2000 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you run the Microsoft Exchange Mailbox Merge program (Exmerge.exe) at a
	computer on which Microsoft Outlook 2000 is installed, the following error
	message may be displayed and logged in the application event log:
	
	  Error encountered reading list of recipients on server 'SERVERNAME.' Make
	  sure you have Admin permissions on the Private Information Store object.
	  Please refer to the 'C:\Exmerge.log' file for more information.
	
	CAUSE
	=====
	
	This issue occurs because when you install Outlook the full-featured Mapi32.dll
	file is renamed to Msmapi32.dll and moved to the Program Files\Common
	Files\System\Mapi\<Locale ID>\<operating system> folder. A new stub
	Mapi32.dll file is added to the System32 folder to point applications to the
	correct Messaging Application Programming Interface (MAPI) configuration.
	
	However, the Exchange Mailbox Merge program needs direct access to the
	full-featured version of the Mapi32.dll file.
	
	RESOLUTION
	==========
	
	To resolve this issue, copy the full-featured Mapi32.dll file from the System32
	folder of an Exchange Server computer, or of any computer on which Microsoft
	Outlook 98 is installed, to the folder that contains the Exmerge.exe file. After
	you copy the full-featured Mapi32.dll file to the folder that contains the
	Exmerge.exe file, the Mailbox Merge program uses the full-featured Mapi32.dll
	file in the local folder and runs successfully.
	
	Additional query words:
	
	======================================================================
	Keywords          : exc5 exc55 
	Technology        : kbOSWin2000 kbOutlookSearch kbOSWinSearch kbOSWinNT400 kbExchangeSearch kbExchange500 kbExchange550 kbZNotKeyword2 kbOutlook2000Search kbZNotKeyword3 kbOSWinNTSearch
	Version           : WINDOWS:2000; winnt:4.0,5.0,5.5; :4.0
	Issue type        : kbprb
	
	=============================================================================
	
