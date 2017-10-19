---
layout: page
title: "Q148825: Err Msg:  Modem Is Busy or Not Found."
permalink: /kb/148/Q148825/
---

## Q148825: Err Msg:  Modem Is Busy or Not Found.

	Article: Q148825
	Product(s): The Microsoft Network
	Version(s): 2.0,2.5,2.6
	Operating System(s): 
	Keyword(s): kbfaq
	Last Modified: 18-FEB-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- The Microsoft Network versions 2.0, 2.5, 2.6 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	
	When you attempt to connect to MSN, The Microsoft Network, you may receive the
	following error message:
	
	  Modem is busy or not found.
	
	CAUSE
	=====
	
	This message may indicate that an incorrect driver for your modem is installed,
	or that another application is taking control of the modem.
	
	RESOLUTION
	==========
	
	To resolve this issue, use any of the following methods:
	
	CHECK FOR SOFTWARE CONFLICT
	
	To determine whether there is a conflict with another program:
	
	1. Press the CTRL+ALT+DELETE key combination and highlight any program, except
	  Explorer or Systray, and then click End Task.
	
	2. Repeat this process until only Explorer and Systray, if present, are listed
	  in the Close Program dialog box.
	
	CHECK FOR INCORRECT MODEM DRIVER
	
	To determine which modem driver is installed:
	
	1. Go to Start, click Control Panel, and then double-click Modems.
	
	2. If the modem listed is not the modem that is connected to your computer, then
	  click the listed modem, and then click Remove.
	
	3. Click Add to run the Install New Modem Wizard, and if automatic detection
	  does not correctly identify your modem, click the Don't detect my modem, I
	  will select it from a list check box to select it and then manually select
	  your modem from the list.
	
	CHECK CONNECTIONS WITH OTHER PROGRAMS
	
	Test the modem with another 32-bit application, such as HyperTerminal:
	
	1. Click Start, point to Programs, point to Accessories, and then click
	  HyperTerminal.
	
	2. Click AT&T Mail or MCI Mail. If a dialog box containing an OK button
	  appears, click OK, and then click OK again.
	
	3. Click Dial, and allow the modem to dial the number. When the screen appears
	  prompting for a login name, type in a test login name.
	
	4. If what is displayed does not correspond with the typing, or an error message
	  appears before this point, contact the modem manufacturer for assistance in
	  configuring their modem for 32-bit applications.
	
	CHECK EXTRA MODEM SETTINGS
	
	To determine the extra settings for your modem:
	
	1. Click Start, point to Settings, and then click Control Panel.
	
	2. Double-click Modems, click your modem, and then click Properties.
	
	3. On the Connection tab, click Advanced, and then check the value in the Extra
	  Settings box. To determine the correct extra settings for your modem, please
	  see one of the following articles in the Microsoft Knowledge Base:
	
	  Q175186 Extra Modem Settings A-C for Connecting to MSN
	
	  Q175288 Extra Modem Settings D-H for Connecting to MSN
	
	  Q175187 Extra Modem Settings I-M for Connecting to MSN
	
	  Q175248 Extra Modem Settings N-P for Connecting to MSN
	
	  Q175249 Extra Modem Settings R-T for Connecting to MSN
	
	  Q175250 Extra Modem Settings U-Z for Connecting to MSN
	
	Additional query words: msn 1.30 2.00 2.50 2.60
	
	======================================================================
	Keywords          :  kbfaq
	Technology        : kbMSNSearch kbMSN200 kbMSN260 kbMSN250
	Version           : :2.0,2.5,2.6
	Issue type        : kbprb
	
	=============================================================================
	
