---
layout: page
title: "Q154086: XCLN: Err Msg: This Program has Performed an Illegal Operation"
permalink: kb/154/Q154086/
---

## Q154086: XCLN: Err Msg: This Program has Performed an Illegal Operation

	Article: Q154086
	Product(s): Microsoft Exchange
	Version(s): WINDOWS:4.0,5.0
	Operating System(s): 
	Keyword(s): kbusage
	Last Modified: 04-APR-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Exchange Windows 95/98 client, versions 4.0, 5.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you start the Windows 95 Exchange client, you may receive the following
	error message:
	
	  This program has performed an illegal operation and will be shut down. If the
	  problem persists, contact the program vendor.
	
	If you click the Details button, additional information such as the following
	will appear:
	
	  Exchange32 caused an invalid page fault in module......(the module specified
	  will vary)
	
	CAUSE
	=====
	
	Your Windows 95 password file has become corrupt.
	
	RESOLUTION
	==========
	
	Rename your Windows 95 password (.PWL) file, and exit Windows 95. When you
	reenter Windows 95, a new password file will be created.
	
	To rename the *.PWL file, use the following steps.
	
	NOTE: If you are using a personal certificate, you should export it before
	renaming your .pwl file. If you do not do so, it may be unavailable when you
	send e-mail. For more information, see the following article in the Microsoft
	Knowledge Base:
	
	  Q190296 Unable to Use Personal Certificates in Outlook Express
	
	1. Click the Start button.
	
	2. Click Find.
	
	3. Click Find Files or Folders.
	
	4. In the Named drop down list box, enter "*.PWL".
	
	5. Select the listed file.
	
	6. Click Rename on the File menu.
	
	7. Enter a new name for the file. For example: <name>.PWL becomes
	  <name>.OLD
	
	8. Click Close on the File menu.
	
	9. Restart the computer.
	
	or follow these steps:
	
	1. Click the Start button.
	
	2. Click Programs
	
	3. Click MS-DOS Prompt.
	
	4. At the C:\WINDOWS> prompt, type:
	
	  DIR *.PWL
	
	and press Enter.
	
	5. Using the filename that is returned, type:
	
	  REN <filename>.PWL <filename>.OLD
	
	and press Enter.
	
	6. Type EXIT and press Enter.
	
	7. Restart the computer.
	
	Additional query words: msvcrt20.dll
	
	======================================================================
	Keywords          : kbusage 
	Technology        : kbExchangeSearch kbExchangeClientSearch kbZNotKeyword kbZNotKeyword2 kbZNotKeyword3 kbExchange400Win95 kbExchange500Win95
	Version           : WINDOWS:4.0,5.0
	
	=============================================================================
	
