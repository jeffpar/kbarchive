---
layout: page
title: "Q196306: XFOR: Err Msg: The Remote Access Service Phone Book Cannot..."
permalink: /kb/196/Q196306/
---

## Q196306: XFOR: Err Msg: The Remote Access Service Phone Book Cannot...

	Article: Q196306
	Product(s): Microsoft Exchange
	Version(s): WinNT:4.0,5.0,5.5
	Operating System(s): 
	Keyword(s): 
	Last Modified: 25-APR-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Exchange Server, versions 4.0, 5.0, 5.5 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you click the Dial-Up Connections tab in the properties for the Internet
	Mail Service or Internet Mail Connector, the following error message may be
	displayed:
	
	  The Remote Access Service (RAS) phone book cannot be opened. It must be
	  accessible and in the system directory as \winnt\system32\ras\
	  rasphone.pbk.
	
	In addition, the following event may appear in the event log:
	
	  Event: 4106
	  Source: MSExchangeIMC
	  Category: SMTP Interface Event
	  Description: The dial-up connection "<phonebook>" could not be made.
	  The error reported was [5]. Access denied.
	
	Where <phonebook> is a Dial-Up Networking phonebook entry. Note that if you
	attempt to manually establish a connection using the Dial-Up Networking
	phonebook entry, you are able to do so.
	
	CAUSE
	=====
	
	The Internet Mail Service or Internet Mail Connector is unable to access the
	Rasphone.pbk file in the Winnt\System32\Ras folder. This can occur for either of
	the following reasons:
	
	- The file is missing or damaged.
	
	- The Microsoft Windows NT Server administrative shares have been removed from
	  the Microsoft Exchange Server computer.
	
	WORKAROUND
	==========
	
	To work around this problem, perform the following steps:
	
	1. Verify that the Rasphone.pbk file exists in the Winnt\System32\Ras folder.
	
	2. Recreate the Windows NT Server administrative shares. For information about
	  how to do so, please see the following article in the Microsoft Knowledge
	  Base:
	
	  Q155345 How To Re-Create Administrative Shares in Windows NT
	
	MORE INFORMATION
	================
	
	When you click the Dial-Up Connections tab in the properties for the Internet
	Mail Service or Internet Mail Connector, the Imcadmin.dll dynamic- link library
	(DLL) attempts to open the Rasphone.pbk file located in the following folder:
	
	  \\<server>\Admin$\System32\Ras
	
	Where <server> is the name of the Exchange Server computer. If the
	Rasphone.pbk file does not exist in this folder or the Admin$ share has been
	removed, Imcadmin.dll is unable to open the file.
	
	Additional query words: ims
	
	======================================================================
	Keywords          :  
	Technology        : kbExchangeSearch kbExchange500 kbExchange550 kbExchange400 kbZNotKeyword2
	Version           : WinNT:4.0,5.0,5.5
	Issue type        : kbprb
	
	=============================================================================
	
