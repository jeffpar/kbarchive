---
layout: page
title: "Q193926: XFOR: TURFDIR Must Be Manually Created for Message Filtering"
permalink: /kb/193/Q193926/
---

## Q193926: XFOR: TURFDIR Must Be Manually Created for Message Filtering

	Article: Q193926
	Product(s): Microsoft Exchange
	Version(s): 5.5
	Operating System(s): 
	Keyword(s): 
	Last Modified: 11-JUN-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Exchange Server, version 5.5 
	-------------------------------------------------------------------------------
	
	
	IMPORTANT: This article contains information about modifying the registry. Before you modify the registry, make sure to back it up and make sure that you understand how to restore the registry if a problem occurs. For information about how to back up, restore, and edit the registry, click the following article number to view the article in the Microsoft Knowledge Base:
	
	  Q256986 Description of the Microsoft Windows Registry
	
	SYMPTOMS
	========
	
	When using the message filtering option on the Microsoft Exchange Server
	Internet Mail Service, the default option is to delete the filtered messages.
	This can be changed to send the messages to a "turf" directory. However, when
	the option to save the filtered messages is selected, the Exchange Server
	administrator will notice that the messages are not being saved. The following
	event will be recorded in the Windows NT Application Log:
	
	  Event ID 4192      MSExchangeIMC        Message Transfer
	  Delivery of a message was aborted because it appeared to be an
	  impersonation attempt or unwanted bulk mail. The 821 originator was
	  joes@spam.net. Either this address or the 822 message triggered this
	  based on TurfTable entries  in the registry. The message that caused
	  this was PBF3S5YB. This message will not be delivered. It will be copied
	  to \turfdir.
	
	CAUSE
	=====
	
	The reason for this behavior is that by default the turf directory is set to
	\Turfdir in the registry. This directory is not created by the Microsoft
	Exchange Server setup process.
	
	WORKAROUND
	==========
	
	WARNING: If you use Registry Editor incorrectly, you may cause serious problems
	that may require you to reinstall your operating system. Microsoft cannot
	guarantee that you can solve problems that result from using Registry Editor
	incorrectly. Use Registry Editor at your own risk.
	
	- Create a directory called Turfdir in the root of the hard disk that holds the
	  Exchange system files. This should allow the messages to be copied to that
	  directory.
	
	  - or -
	
	- Create a directory elsewhere, and change the registry to point to the path of
	  this new directory. You can accomplish this by performing the following
	  steps:
	
	1. Start Registry Editor (Regedt32.exe).
	
	2. Locate the TURFDIR value under the following key in the registry:
	
	  HKEY_LOCAL_MACHINE\System\CurrentControlSet\Services\MSExchangeIMC
	  \Parameters\
	
	  NOTE: The above registry key is one path; it has been wrapped for readability.
	
	3. Highlight the TURFDIR value and on the Edit menu, select String. Change the
	  string to reflect the desired path. Add the drive letter if a drive other
	  then C is desired.
	
	4. Quit Registry Editor.
	
	Additional query words: imc spam bulk junk turftable
	
	======================================================================
	Keywords          :  
	Technology        : kbExchangeSearch kbExchange550 kbZNotKeyword2
	Version           : :5.5
	Issue type        : kbprb
	
	=============================================================================
	
