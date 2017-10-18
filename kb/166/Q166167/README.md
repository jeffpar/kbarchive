---
layout: page
title: "Q166167: XCLN: Error Occurred During the Connection, Hardware Failure"
permalink: kb/166/Q166167/
---

## Q166167: XCLN: Error Occurred During the Connection, Hardware Failure

	Article: Q166167
	Product(s): Microsoft Exchange
	Version(s): 4.0
	Operating System(s): 
	Keyword(s): kb3rdparty kberrmsg kbusage
	Last Modified: 26-FEB-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Exchange Windows 95/98 client, version 4.0 
	-------------------------------------------------------------------------------
	
	
	IMPORTANT: This article contains information about editing the registry.
	Before you edit the registry, make sure you understand how to restore it
	if a problem occurs. For information on how to do this, view the "Restoring
	the Registry" online Help topic in Regedit.exe or the "Restoring a Registry
	Key" online Help topic in Regedt32.exe.
	
	SYMPTOMS
	========
	
	When you are using the Microsoft Exchange Client to retrieve mail via the Remote
	Mail dialog on an IBM ThinkPad 701c with an internal modem, after the initial
	retrieval of messages, subsequent attempts to retrieve mail via remote mail will
	return the following error message:
	
	  An error occurred during the connection. The port was disconnected
	  due to a hardware failure.
	
	Once this error message appears, it is necessary to turn off the computer and
	restart Windows 95 in order to access the modem.
	
	CAUSE
	=====
	
	The ThinkPad's internal modem fails to reset after an initial Exchange Server
	connection.
	
	RESOLUTION
	==========
	
	WARNING: Using Registry Editor incorrectly can cause serious problems that may
	require you to reinstall Windows. Microsoft cannot guarantee that problems
	resulting from the incorrect use of Registry Editor can be solved. Use Registry
	Editor at your own risk.
	
	For information about how to edit the registry, view the "Changing Keys And
	Values" online Help topic in Registry Editor (Regedit.exe) or the "Add and
	Delete Information in the Registry" and "Edit Registry Data" online Help topics
	in Regedt32.exe. Note that you should back up the registry before you edit it.
	
	To resolve this problem, do one of the following:
	
	- Use an external or PCMCIA (supported) modem with the ThinkPad.
	
	  -OR-
	
	- Modify the registry setting for the modem Hangup command, as shown below:
	
	1. Start Registry Editor.
	
	2. Go to the following key in the registry:
	
	     HKEY_LOCAL_MACHINE\System\CurrentControlSet\Services\Class\Modem\0000
	
	3. Highlight the 0000 and verify the Model in the right pane is IBM ThinkPad 701
	  Internal Modem. If the 0000 key is this modem, continue down the tree to the
	  Hangup key.
	
	4. In the right pane, edit the 1 value and add AT&F to the end of the
	  string. Once complete, the string should read:
	
	     ATH<cr>AT&F
	
	5. Exit Registry Editor.
	
	6. Restart the computer and attempt to retreive headers multiple times.
	
	  The addition of AT&F sends the command to reset the modem to the factory
	  defaults upon the hangup of the modem.
	
	MORE INFORMATION
	================
	
	ThinkPad is manufactured by IBM, a vendor independent of Microsoft; we make no
	warranty, implied or otherwise, regarding this product's performance or
	reliability.
	
	Additional query words: fail
	
	======================================================================
	Keywords          : kb3rdparty kberrmsg kbusage 
	Technology        : kbExchangeSearch kbExchangeClientSearch kbZNotKeyword kbZNotKeyword2 kbZNotKeyword3 kbExchange400Win95
	Version           : :4.0
	
	=============================================================================
	
