---
layout: page
title: "Q119581: PC Win: Using Mail Over RAS"
permalink: /kb/119/Q119581/
---

## Q119581: PC Win: Using Mail Over RAS

{% raw %}

	Article: Q119581
	Product(s): Microsoft Mail For PC Networks
	Version(s): WINDOWS:3.2
	Operating System(s): 
	Keyword(s): 
	Last Modified: 28-OCT-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Mail for Windows, version 3.2 
	-------------------------------------------------------------------------------
	
	Version 3.2 of Microsoft Mail for Windows is supported over a Remote Access
	Service (RAS), although it will be much slower than if you access mail
	directly over a network. (Version 3.2 of Microsoft Mail Remote for Windows
	provides faster access.) If you need to use Mail for Windows over RAS, you
	should compose and read messages offline.
	
	To start Mail offline
	---------------------
	
	To start Mail offline, double-click the MMF file referred to in the
	OfflineMessages line of the MSMAIL.INI file (located in the Windows
	subdirectory).
	
	NOTE: With the Microsoft Mail for Windows NT, MSMAIL32.EXE, the command
	line option will work. However, if you double-click on the MMF in File
	Manager, the wrong name appears for the Mailbox only after trying to find
	the postoffice. If you are on the network, this should not take long. If
	you are using RAS, as this article indicates, this may take several
	minutes.
	
	Another method is to create a second icon for offline Mail by copying the
	Mail icon and changing the properties to include /f <MMF name>. For
	example:
	
	  c:\msmail\msmail.exe /f myname.mmf
	
	You can compose messages while working offline. Only the Personal Address
	Book (PAB) will be available while you work offline. To send and receive
	messages, exit and sign out and then double-click the (online) Mail icon to
	start Mail.
	
	To improve performance
	----------------------
	
	1. Move the mail message file (MMF) to your local computer. You can do this from
	  the Windows client by choosing Options from the Mail menu, then choosing
	  Server. Moving the MMF to your local machine requires SHARE.EXE to be loaded
	  on the machine. When the MMF is local, you are responsible for making regular
	  and frequent backups.
	
	2. If the Global Address List (GAL) is available at the postoffice, use
	  GALOnly=1 option in the MSMAIL section of the MSMAIL.INI file. If this entry
	  is set to 1, the Mail address book will display only the GAL and the PAB. If
	  this entry is set to 0, the Mail address book will display all possible
	  address lists and the PAB.
	
	3. Turn AutoCompress off by using No_Compress=1 in the MMF section of the
	  MSMAIL.INI file. This will disable background compression of the message
	  store. You can compress your MMF when you are working offline by holding down
	  the F5 key while you log in to Mail.
	
	4. Turn off Inbox Shadowing if you do not use other Mail clients such as the
	  MS-DOS or Remote client to read your mail. You can do this from the Windows
	  client by choosing Options from the Mail menu, choosing Server, and checking
	  the Keep Copy Of Inbox For Dialin Access option.
	
	5. Keep the number of messages in the Inbox to a minimum.
	
	6. Perform any message manipulation, such as moving a message to a different
	  folder or deleting a message, while you are working offline.
	
	7. Turn off the option to empty the wastebasket on exit by choosing Options from
	  the Mail menu and unchecking the Empty Wastebasket When Exiting option. To
	  empty the Wastebasket when you are working offline, select the Wastebasket
	  folder, select the first message and press CTRL+SHIFT+END to highlight all
	  the messages, and then press the DELETE key.
	
	Additional query words: 3.20
	
	======================================================================
	Keywords          :  
	Technology        : kbMailSearch kbZNotKeyword3 kbMail320
	Version           : WINDOWS:3.2
	
	=============================================================================
	

{% endraw %}
