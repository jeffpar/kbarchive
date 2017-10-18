---
layout: page
title: "Q146672: XCLN: Unable to Open Forms Because Files are Missing"
permalink: kb/146/Q146672/
---

## Q146672: XCLN: Unable to Open Forms Because Files are Missing

	Article: Q146672
	Product(s): Microsoft Exchange
	Version(s): WINDOWS:4.0,5.0; :
	Operating System(s): 
	Keyword(s): kbsetup
	Last Modified: 06-AUG-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Exchange Windows 95/98 client, versions 4.0, 5.0 
	- Microsoft Exchange Windows 3.x client, versions 4.0, 5.0 
	- Microsoft Exchange Windows NT client, versions 4.0, 5.0 
	- Microsoft Outlook 97 
	- Microsoft Outlook 98 
	- Microsoft Outlook 2000 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	After installing one of the custom applications located in the Exchsrvr\Samples
	directory on the Microsoft Exchange Server, a client will receive the following
	error message when attempting to use one of these forms:
	
	  Unable to open <form name> Form<s> because some files are missing
	  on your machine. The Microsoft Forms Designer tool must be installed.
	
	This error occurs even though a dialog box was displayed telling the client that
	the form has been installed on the computer.
	
	
	CAUSE
	=====
	
	When a form is installed on a client computer, only the main executable is
	installed. Any supporting DLLs will need to be installed on the client computer
	by running the Microsoft Exchange Electronic Forms Designer (EFD) Setup program.
	
	RESOLUTION
	==========
	
	There are two methods of installing the supporting DLLs without having to keep
	the Microsoft Exchange EFD installed on the computer.
	
	The first is to run the Microsoft Exchange EFD Setup program on the client
	computer and then re-run Setup and choose Remove All. This will uninstall the
	Microsoft Exchange EFD, however, the supporting DLLs will remain, as they are
	considered shared components and are not removed.
	
	To install the EFD run time for Outlook 2000:
	
	1. On the Start menu, point to Settings, and then click Control Panel.
	
	2. Double-click to open Add/Remove Programs.
	
	3. Click to select Microsoft Office 2000 Premium, and then click Add/Remove
	  features.
	
	4. Click the plus sign next to Microsoft Outlook for Windows.
	
	5. Click the down arrow next to Electronic Forms Designer runtime, and then
	  click "Run from my computer".
	
	6. Click Update Now.
	
	The second method is to manually copy over the needed files from a computer that
	has the Microsoft Exchange EFD installed. The necessary files are:
	
	  Dao2516.dll
	  Msajt200.dll
	  Vaen21.olb
	  Msjeterr.dll
	  Vbajet.dll
	  Msjetint.dll
	  Vbdb16.dll
	
	Copy these seven files into the <winroot>\System directory on Windows 95 or
	Windows 3.x and to the <winroot>\System32 on Windows NT.
	
	NOTE: Installing the 16-bit version of Microsoft Visual Basic 4.0 will also place
	these files on the client computer.
	
	You will then need to run Regsvr.exe (located in the Support\EFDSetup directory
	on the CD) with the following parameters to register the 16-bit Microsoft Jet
	DAO Library:
	
	  "REGSVR.EXE /S DA02516.DLL" (without the quotation marks)
	
	STATUS
	======
	
	Microsoft has confirmed that this is a problem in the Microsoft products that
	are listed at the beginning of this article.
	
	Additional query words: EFD survey form OL97 OL98 OL2000 8.0 8.01 8.02 8.03 8.04 8.5 9.0
	
	======================================================================
	Keywords          : kbsetup 
	Technology        : kbOutlookSearch kbExchangeSearch kbExchange500 kbExchange400 kbExchangeClientSearch kbZNotKeyword kbZNotKeyword2 kbOutlook2000Search kbOutlook97Search kbOutlook98Search kbZNotKeyword3 kbExchange400NT kbExchange500NT kbExchange400Win95 kbExchange500Win95
	Version           : WINDOWS:4.0,5.0; :
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	
