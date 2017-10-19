---
layout: page
title: "Q263269: XCLN: Error 53 Running Exchange Forms Designer"
permalink: /kb/263/Q263269/
---

## Q263269: XCLN: Error 53 Running Exchange Forms Designer

	Article: Q263269
	Product(s): Microsoft Exchange
	Version(s): 5.0
	Operating System(s): 
	Keyword(s): 
	Last Modified: 22-OCT-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Exchange Windows NT client, version 5.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	After you install Exchange Forms Designer 4.0 on a computer that is running
	Microsoft Windows NT Workstation 4.0, if you try to run Exchange Forms Designer,
	you may receive the following error message:
	
	  Runtime Error 53
	
	The installation itself finishes without any apparent problems.
	
	CAUSE
	=====
	
	This issue can occur if the version of the Ctl3dv2.dll file in the
	%SystemRoot%\System folder on the computer is incorrect. Specifically, you need
	version 2.31.001 of the Ctl3dv2.dll file.
	
	RESOLUTION
	==========
	
	To resolve this issue, copy version 2.31.001 of the Ctl3dv2.dll file to the
	%SystemRoot%\System folder. This file has a modified date stamp of 02/10/1997
	and a size of 27,632 bytes. Depending on the products that are installed on the
	computer and the sequence of installation, the date stamp may be displayed as
	02/20/1997 or some other date. The most important identifier for the Ctl3dv2.dll
	file is the version number.
	
	MORE INFORMATION
	================
	
	The Ctl3dv2.dll file is included with the Exchng4.cab file that is located in
	the Eng\Winnt\I386 folder on the Microsoft Exchange Client 5.0 CD. You can use
	Winzip Classic to extract this file.
	
	The following are the file details:
	
	- File Name: Ctl3dv2.dll
	
	- File Size: 27,632 bytes
	
	- Modified Date: February 10, 1997
	
	- File Version: 2.31.001
	
	- File Location: %SystemRoot%\System
	
	You can use the dynamic-link library (DLL) Help database on the following
	Microsoft Web site to search for DLL files:
	
	  http://support.microsoft.com/servicedesks/fileversion/dllinfo.asp
	  (http://support.microsoft.com/servicedesks/fileversion/dllinfo.asp)
	
	
	For additional information, click the article number below to view the article in
	the Microsoft Knowledge Base:
	
	  Q108392 Definitions of the OLE 2.0 DLLs
	
	  Q187839 XCLN: Runtime Error 367: Unable To Register Msriched.vbx
	
	Additional query words:
	
	======================================================================
	Keywords          :  
	Technology        : kbExchangeSearch kbExchangeClientSearch kbZNotKeyword2 kbZNotKeyword3 kbExchange500NT
	Version           : :5.0
	Issue type        : kbprb
	
	=============================================================================
	
