---
layout: page
title: "Q135084: SMS Software Inventory Fails to Find Office 95 or Word 95"
permalink: kb/135/Q135084/
---

## Q135084: SMS Software Inventory Fails to Find Office 95 or Word 95

	Article: Q135084
	Product(s): Microsoft Systems Management Server
	Version(s): WINDOWS:7.0; Win95:7.0; winnt:1.0,1.1,1.2
	Operating System(s): 
	Keyword(s): kbinterop kbInventory smsinv
	Last Modified: 25-JUL-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Systems Management Server versions 1.0, 1.1, 1.2 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	Software inventory does not find Microsoft Office version 7.0 or Microsoft Word
	version 7.0 installations when you use the .PDF file included on the CD-ROM.
	
	CAUSE
	=====
	
	Software inventory does not find Microsoft Office installation because the TIME
	setting in the OFF95STD.PDF file does not match the "STF_TIME" = "0" setting in
	the OFF95STD.INF file.
	
	Software inventory does not find Microsoft Word installation because the
	WRD95.PDF file on the Word for Windows 95 CD-ROM contains FILE = WORD.EXE
	instead of FILE = WINWORD.EXE.
	
	RESOLUTION
	==========
	
	To correct this problem for Microsoft Office:
	
	1. Use a text editor such as Notepad to edit the OFF95STD.PDF text file.
	
	2. Change TIME=12, 00 to TIME=00, 00.
	
	To correct this problem for Microsoft Word:
	
	1. Use a text editor such as Notepad to edit the WRD95.PDF text file.
	
	2. Change FILE = WORD.EXE to FILE = WINWORD.EXE.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in Microsoft Office for Windows 95,
	version 7.0 and Microsoft Word for Windows 95, version 7.0. We are researching
	this problem and will post new information here in the Microsoft Knowledge Base
	as it becomes available.
	
	Additional query words: prodsms sms off7 standard word95 word7
	
	======================================================================
	Keywords          : kbinterop kbInventory smsinv 
	Technology        : kbSMSSearch kbSMS100 kbSMS110 kbSMS120
	Version           : WINDOWS:7.0; Win95:7.0; winnt:1.0,1.1,1.2
	
	=============================================================================
	
