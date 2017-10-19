---
layout: page
title: "Q156516: Error 26 or &quot;MAPI_E_NOT_SUPPORTED&quot; with MAPI-Based Program"
permalink: /kb/156/Q156516/
---

## Q156516: Error 26 or &quot;MAPI_E_NOT_SUPPORTED&quot; with MAPI-Based Program

	Article: Q156516
	Product(s): Microsoft Windows 95.x Retail Product
	Version(s): WINDOWS:4.0,4.01,95
	Operating System(s): 
	Keyword(s): kbenv kberrmsg osr2 win95 msiew95
	Last Modified: 13-JUN-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows 95 
	- Microsoft Windows 95 OEM Service Release, versions 2.0, 2.1, 2.5 
	- Microsoft Internet Explorer versions 4.0, 4.01 for Windows 95 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you run a Messaging Application Programming Interface-based (MAPI- based)
	program in Windows 95, you may receive error number 26 or the error message
	"MAPI_E_NOT_SUPPORTED."
	
	CAUSE
	=====
	
	This behavior can occur after you install Internet Explorer 4.0 or 4.01 or the
	Microsoft Distributed COM Update for Windows 95 (DCOM95), or if you are using a
	non-English version of Windows 95 OEM Service Release 2 (OSR2) or later.
	
	Earlier versions of the Windows Messaging System (WMS) Mapisrvr.exe file do not
	support the COM call to the CoCreateInstance() function properly and return the
	E_NOINTERFACE value.
	
	NOTE: Because this problem does not occur in Windows 95 with the original WMS
	until you install DCOM95 or Internet Explorer 4.0 or 4.01, the problem may seem
	to be caused by either DCOM95 or Internet Explorer. The problem actually occurs
	because the earlier Mapisrvr.exe file does not properly support calls to the
	CoCreateInstance() function.
	
	RESOLUTION
	==========
	
	For English-language versions of Windows 95, you can resolve this problem by
	installing the latest WMS for Windows 95. The latest WMS is available from the
	following Microsoft Web site:
	
	  http://www.microsoft.com/windows95/info/exupd.htm
	
	This update is included in Windows 95 OEM Service Release versions 2, 2.1, and
	2.5.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem with the earlier Mapisrvr.exe file
	included with the original Windows 95 distribution. We are researching this
	problem and will post new information here in the Microsoft Knowledge Base as it
	becomes available.
	
	
	Additional query words:
	
	======================================================================
	Keywords          : kbenv kberrmsg osr2 win95 msiew95 
	Technology        : kbIEsearch kbWin95search kbIE95Search kbOPKSearch kbZNotKeyword3 kbWin95 kbIE400Win95 kbIE401Win95 kbWin95OPKOSR25 kbWin95OPKOSR210
	Version           : WINDOWS:4.0,4.01,95
	Issue type        : kbprb
	
	=============================================================================
	
