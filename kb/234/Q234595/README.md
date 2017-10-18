---
layout: page
title: "Q234595: XCLN: PowerPoint Slide Show Files (.pps) Get .ppt Extension"
permalink: kb/234/Q234595/
---

## Q234595: XCLN: PowerPoint Slide Show Files (.pps) Get .ppt Extension

	Article: Q234595
	Product(s): Microsoft Exchange
	Version(s): WINDOWS:4.0,5.0
	Operating System(s): 
	Keyword(s): 
	Last Modified: 11-JUN-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Exchange Windows 95/98 client, versions 4.0, 5.0 
	- Microsoft Exchange Windows NT client, versions 4.0, 5.0 
	-------------------------------------------------------------------------------
	
	IMPORTANT: This article contains information about modifying the registry. Before you modify the registry, make sure to back it up and make sure that you understand how to restore the registry if a problem occurs. For information about how to back up, restore, and edit the registry, click the following article number to view the article in the Microsoft Knowledge Base:
	
	  Q256986 Description of the Microsoft Windows Registry
	
	SYMPTOMS
	========
	
	When you send Microsoft PowerPoint Slide Show files (.pps) from the Microsoft
	Exchange Client the .pps file gets a .ppt appended to the end of the file name
	(for example, Filename.pps.ppt) when it is opened in another Exchange Client.
	
	CAUSE
	=====
	
	PowerPoint has one registered content type as defined in Request for Comments
	(RFC) 1521. Therefore, all PowerPoint files you send through Exchange Client get
	a .ppt extension if they don't already have a .ppt extension.
	
	WORKAROUND
	==========
	
	WARNING: If you use Registry Editor incorrectly, you may cause serious problems
	that may require you to reinstall your operating system. Microsoft cannot
	guarantee that you can solve problems that result from using Registry Editor
	incorrectly. Use Registry Editor at your own risk.
	
	1. Start Registry Editor (Regedt32.exe).
	
	2. Locate the following key in the registry:
	
	  HKEY_CLASSES_ROOT\.pps
	
	  Double-click Content Type, in the String box, type
	  "application/x-mspowerpoint" (without the quotation marks), and then click
	  OK.
	
	3. Locate the following key in the registry:
	
	  HKEY_CLASSES_ROOT\MIME\Database\Content Type\application/x-mspowerpoint
	
	  Double-click Extension, in the String box, type ".pps" (without the quotation
	  marks), and then click OK.
	
	4. Quit Registry Editor.
	
	MORE INFORMATION
	================
	
	For additional information about attachment names, please see the following
	article in the Microsoft Knowledge Base:
	
	  Q147299 XFOR: Attachment Names Changed in Messages To & From Internet
	
	Additional query words:
	
	======================================================================
	Keywords          :  
	Technology        : kbExchangeSearch kbExchangeClientSearch kbZNotKeyword kbZNotKeyword2 kbZNotKeyword3 kbExchange400NT kbExchange500NT kbExchange400Win95 kbExchange500Win95
	Version           : WINDOWS:4.0,5.0
	Issue type        : kbprb
	
	=============================================================================
	
