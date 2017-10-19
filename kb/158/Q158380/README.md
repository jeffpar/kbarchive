---
layout: page
title: "Q158380: Application Stops Responding after Logging Off"
permalink: /kb/158/Q158380/
---

## Q158380: Application Stops Responding after Logging Off

	Article: Q158380
	Product(s): Windows for Workgroups and Windows NT Networking Issues
	Version(s): WINDOWS:4.0,7.0,7.0a,7.0b; winnt:4.0
	Operating System(s): 
	Keyword(s): 
	Last Modified: 10-AUG-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Office for Windows 95, versions 7.0, 7.0a, 7.0b 
	- Microsoft Exchange Windows NT client, version 4.0 
	- Microsoft Windows NT Server version 4.0 
	- Microsoft Windows NT Workstation version 4.0 
	-------------------------------------------------------------------------------
	
	
	SYMPTOMS
	========
	
	When you log off or attempt to shut down and restart a computer running Windows
	NT 4.0 with multiple Microsoft Exchange messages open, you may receive one of
	the following errors:
	
	  Application Error in Winword.exe. "This Windows application cannot respond to
	  the End Task request. It may be busy, waiting for a response from you, or it
	  may have stopped executing..."
	
	-or-
	
	  Winword.exe - Application Error. "The instruction at "0x30037757" referenced
	  memory at "0x00000000". The memory could not be read."
	
	RESOLUTION
	==========
	
	To work around this problem, perform one of the following:
	
	- Before shutting down the computer running Windows NT, close all open Exchange
	  message windows to close the hidden Microsoft Word session.
	
	-or-
	
	- Use the following steps to disable WordMail:
	
	  1. In Exchange, from the Compose menu, click WordMail Options.
	
	  2. Click to clear the 'Enable Word as Email Editor' option.
	
	  3. Click Close.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in Windows NT version 4.0.
	
	
	Additional query words: Shut Down Reboot Rebooting word95 word7 App Err dr watson e-mail crash logs off logged
	
	======================================================================
	Keywords          :  
	Technology        : kbWinNTsearch kbWinNTWsearch kbWinNTW400 kbWinNTW400search kbWinNT400search kbWinNTSsearch kbWinNTS400search kbWinNTS400 kbOfficeSearch kbExchangeSearch kbExchangeClientSearch kbZNotKeyword2 kbOffice95Search kbOffice95 kbZNotKeyword3 kbOffice95a kbOffice95b kbExchange400NT
	Version           : WINDOWS:4.0,7.0,7.0a,7.0b; winnt:4.0
	Issue type        : kbbug
	Solution Type     : kbpending
	
	=============================================================================
	
