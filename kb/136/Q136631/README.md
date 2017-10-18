---
layout: page
title: "Q136631: PC WRmt: Using Remote Mail Client and WinRules Version 1.0"
permalink: kb/136/Q136631/
---

## Q136631: PC WRmt: Using Remote Mail Client and WinRules Version 1.0

	Article: Q136631
	Product(s): Microsoft Mail For PC Networks
	Version(s): WINDOWS:3.2
	Operating System(s): 
	Keyword(s): 
	Last Modified: 07-NOV-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Mail Remote for Windows, version 3.2 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you use Mail Remote for Windows and Beyond Incorporated WinRules version
	1.0, and you exit Mail without sending a composed message, the remote modem
	session is initiated.
	
	Notes:
	
	- WinRules is a third-party product that can be used to filter the receipt
	  notification messages into specified folders in the mail message file (MMF).
	
	- You will not see a dialog box notifying you of unsent mail.
	
	
	CAUSE
	=====
	
	When you install WinRules version 1.0, the following lines are added to the
	[Custom Commands] section of the MSMAIL.INI file:
	
	  [Custom Commands]
	
	  winrulesN=3.0;;;;c:\winrules\wrdriver.dll;D;0010000000000000;;;;
	  winrulesS=3.0;;;;c:\winrules\wrdriver.dll;0;1000000000000000;;;;
	  winrulesT=3.0;;;;c:\winrules\wrdriver.dll;1;0100000000000000;;;;
	
	RESOLUTION
	==========
	
	If you comment out the above lines, Mail Remote will function as designed.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in version 3.2 of Microsoft Mail
	Remote for Windows. We are researching this problem and will post new
	information here in the Microsoft Knowledge Base as it becomes available.
	
	MORE INFORMATION
	================
	
	When a message is sent from an application that uses Simple Messaging
	Application Programming Interface (MAPI), such as Microsoft Word version 2.0 for
	Windows and WinRules version 1.0 using the WRDRIVER.DLL driver file, and you
	have Mail Remote for Windows installed but not running, the message is always
	sent immediately, despite the Mail Remote for Windows connection-scheduling
	feature.
	
	When the application closes the Simple MAPI session, the spooler begins to shut
	down. The spooler checks for mail in the Outbox, spools the mail to an
	intermediate storage location, and begins sending the mail automatically,
	without prompting for user confirmation.
	
	The Mail Remote driver cannot control the spooler, so when the intermediate
	storage location is checked for mail, an asynchronous session is started. This
	is a limitation of MAPI.
	
	For additional information on MAPI, please see the following articles in the
	Microsoft Knowledge Base:
	
	  Q100458 MAPI Ignores Scheduled Connections
	
	  Q114125 Simple MAPI Programs Only Send Mail with Remote
	
	WinRules is manufactured by Beyond Incorporated, which has been purchased by
	Banyan Systems, a vendor independent of Microsoft. We make no warranty, implied
	or otherwise, regarding this product's performance or reliability. You can
	contact Banyan Systems regarding WinRules at (508) 898-1000.
	
	
	Additional query words: 3.20 client
	
	======================================================================
	Keywords          :  
	Technology        : kbMailSearch kbZNotKeyword3 kbMailRemote320
	Version           : WINDOWS:3.2
	
	=============================================================================
	
