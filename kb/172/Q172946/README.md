---
layout: page
title: "Q172946: XCLN: How to Install the Simple Mail Handler Utility"
permalink: kb/172/Q172946/
---

## Q172946: XCLN: How to Install the Simple Mail Handler Utility

	Article: Q172946
	Product(s): Microsoft Exchange
	Version(s): WINDOWS:4.0,5.0; :8.0,8.01,8.02,8.03
	Operating System(s): 
	Keyword(s): 
	Last Modified: 06-AUG-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Exchange Windows 3.x client, versions 4.0, 5.0 
	- Microsoft Exchange Windows 95/98 client, versions 4.0, 5.0 
	- Microsoft Exchange Windows NT client, versions 4.0, 5.0 
	- Microsoft Outlook 97, versions 8.0, 8.01, 8.02, 8.03 
	- Microsoft Outlook 98 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	This article describes how to install the Simple Mail Handler service for
	Microsoft Exchange and Microsoft Outlook. This service is included in the
	BackOffice Resource Kit (BORK). The Simple Mail Handler (SMH) tool is similar to
	the Microsoft Exchange Client Inbox Assistant, but does not require a connection
	to a Microsoft Exchange Server computer. The SMH tool also has more advanced
	filtering capabilities than those available in the Inbox Assistant.
	
	MORE INFORMATION
	================
	
	The instructions in the Help file included with the BORK, Version 1, and BORK,
	Part 2 indicate that you should run Mergeini.exe to install the MAPI service.
	However, when you run this program, you receive the following error message:
	
	  File does not exist.
	
	The purpose of the Mergeini.exe file is to add the settings from the Smh.inf file
	to the Mapisvc.inf file. The Smh.inf file is included in the BackOffice Resource
	Kit: Part One, but not in Part Two.
	
	To successfully install the Simple Mail Handler service for all operating systems
	except Windows NT Workstation:
	
	  From the Exchange\<operating system>\<platform>\Client\SMH folder
	  on the Microsoft BackOffice Resource Kit, Second Edition compact disc, copy
	  Mergeini.exe, Smh.inf, and the Smh.dll file for your operating system to the
	  Windows\System folder on your computer.
	
	For Windows NT Workstation:
	
	  Copy Mergeini.exe, Smh.inf, and Smh.dll to the System32 folder on your
	  computer.
	
	To add Simple Mail Handler to the list of available Microsoft Exchange Server
	services:
	
	1. Run Mergeini.exe using the following command-line syntax:
	
	  Mergeini.exe -m<install path>smh.inf
	
	2. In Control Panel, double-click the Mail and Fax icon.
	
	3. Click the Services tab, and then click Add.
	
	4. Click Simple Mail Handler, and then click OK.
	
	NOTE: These instructions are included in the BORK, Part 3, Help file.
	
	Additional query words: reskit sample 8.5
	
	======================================================================
	Keywords          :  
	Technology        : kbOutlookSearch kbExchangeSearch kbExchange500 kbExchange400 kbExchangeClientSearch kbZNotKeyword kbOutlook97 kbZNotKeyword2 kbOutlook97Search kbOutlook98Search kbZNotKeyword3 kbOutlook801 kbOutlook802 kbOutlook803 kbExchange400NT kbExchange500NT kbExchange400Win95 kbExchange500Win95
	Version           : WINDOWS:4.0,5.0; :8.0,8.01,8.02,8.03
	Issue type        : kbhowto
	
	=============================================================================
	
