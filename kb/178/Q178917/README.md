---
layout: page
title: "Q178917: XCLN: Cannot Access Outlook CD from DOS, Win 3.1x, WinNT 3.51"
permalink: kb/178/Q178917/
---

## Q178917: XCLN: Cannot Access Outlook CD from DOS, Win 3.1x, WinNT 3.51

	Article: Q178917
	Product(s): Microsoft Exchange
	Version(s): MS-DOS:5.0; WINDOWS:8.0; winnt:5.5; :8.03
	Operating System(s): 
	Keyword(s): kbusage
	Last Modified: 09-DEC-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Exchange Server, version 5.5 
	- Microsoft Outlook, Exchange Server Edition, version 8.0, used with:
	   - the operating system: Microsoft Windows versions 3.1, 3.11 
	- Microsoft Outlook 97, version 8.03, on platform(s):
	   - the operating system: Microsoft Windows NT 
	- Microsoft Exchange MS-DOS client, version 5.0 
	-------------------------------------------------------------------------------
	
	
	SYMPTOMS
	========
	
	You may be unable to access files and directories on the Microsoft Outlook
	CD-ROM, version 8.03, which shipped with Microsoft Exchange Server version 5.5.
	
	CAUSE
	=====
	
	If your computer is running on the MS-DOS, Windows 3.1x, or Windows NT 3.51
	platform, it will not be possible to read the Microsoft Outlook CD-ROM.
	
	WORKAROUND
	==========
	
	To access the contents of the CD, use one of the following options from a
	computer running Microsoft Windows 95 or Microsoft Windows NT 4.0:
	
	- Share the Microsoft Outlook CD on the network.
	
	- Copy the contents of the appropriate client directory to a shared network
	  location.
	
	- Run the Ucsetup.exe program to create a shared client installation point on
	  the network.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem with the Microsoft Outlook CD- ROM
	that is included with Microsoft Exchange Server version 5.5. We are researching
	this problem and will post new information here in the Microsoft Knowledge Base
	as it becomes available.
	
	MORE INFORMATION
	================
	
	On the platforms mentioned above, the files and directories located in the root
	directory of the CD are viewable, but they cannot be accessed or opened. In
	MS-DOS 6.22 or earlier, you may receive one of the following error messages when
	you try to execute files (such as Ucsetup.exe) or access directories on the
	Microsoft Outlook CD:
	
	  Bad command or file name
	
	-or-
	
	  Invalid directory
	
	In Microsoft Windows 3.1, Microsoft Windows for Workgroups 3.1x, and Microsoft
	Windows NT 3.51, the directories on the CD may appear to be empty when selected.
	Also, when you attempt to open a file by double-clicking it in File Manager, the
	following error message may appear:
	
	  Cannot Run Program
	
	  File Manager cannot find the specified file (or one of its components).
	
	  Make sure the path and filename are correct and that all required
	  libraries are available.
	
	
	Additional query words: real-mode cdrom driver exchange.dos outlook.w16 win16 win3x
	
	======================================================================
	Keywords          : kbusage 
	Technology        : kbOutlookSearch kbExchangeSearch kbZNotKeyword2
	Version           : MS-DOS:5.0; WINDOWS:8.0; winnt:5.5; :8.03
	Issue type        : kbbug
	Solution Type     : kbpending
	
	=============================================================================
	
