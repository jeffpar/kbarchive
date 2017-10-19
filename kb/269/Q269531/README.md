---
layout: page
title: "Q269531: How to Enable Fault Logging in Windows 95"
permalink: /kb/269/Q269531/
---

## Q269531: How to Enable Fault Logging in Windows 95

	Article: Q269531
	Product(s): Microsoft Windows 95.x Retail Product
	Version(s): 1.0
	Operating System(s): 
	Keyword(s): 
	Last Modified: 29-JUN-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows 95 OEM Service Release, version 1.0 
	- Microsoft Windows 95 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	When troubleshooting error messages that are difficult to reproduce, it may be
	helpful to enable fault logging to record the errors as they occur.
	
	By enabling fault logging in the registry, Windows 95 logs general protection
	faults, and invalid page faults to the Faultlog.txt file.
	
	To enable fault logging, follow these steps:
	
	1. Click Start, click Run, type "regedit" (without the quotation marks), and
	  then click OK.
	
	2. Create a registry key under the following location, and name it "Fault"
	  (without the quotation marks):
	
	  HKEY_LOCAL_MACHINE\Software\Microsoft\Windows\CurrentVersion
	
	3. Create a Logfile string value in the Fault key with a value data of
	  "C:\Windows\Faultlog.txt".
	
	  Logging takes effect immediately, and does not require that you restart the
	  computer. Logging remains in effect until you delete the Fault registry key.
	
	MORE INFORMATION
	================
	
	Windows 95 OEM Service Release 2 includes a version of Drwatson.exe, which
	offers a more detailed method of logging fault errors to the Faultlog.txt file.
	In addition, Windows 98 includes an updated version of Drwatson.exe, which
	includes the ability to take a snapshot of the system when a problem occurs with
	a program.
	
	For additional information about Drwatson.exe, click the article numbers below to
	view the articles in the Microsoft Knowledge Base:
	
	  Q185837 Description of the Dr. Watson (Drwatson.exe) Tool in Windows 98
	
	  Q198397 Dr. Watson Does Not Seem to Trap GP Faults
	
	Additional query words: kbinfo kbref kbhowto
	
	======================================================================
	Keywords          :  
	Technology        : kbWin95search kbOPKSearch kbWin95
	Version           : :1.0
	Issue type        : kbhowto
	
	=============================================================================
	
