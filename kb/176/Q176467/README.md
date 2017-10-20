---
layout: page
title: "Q176467: XGEN: User32.dll Error When Trying to Start Exchange Component"
permalink: /kb/176/Q176467/
---

## Q176467: XGEN: User32.dll Error When Trying to Start Exchange Component

{% raw %}

	Article: Q176467
	Product(s): Microsoft Exchange
	Version(s): winnt:4.0,5.0,5.5
	Operating System(s): 
	Keyword(s): exc4 exc5 exc55
	Last Modified: 22-DEC-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Exchange Server, versions 4.0, 5.0, 5.5 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you attempt to start an Exchange service, you may receive a pop-up dialog
	box with the following content:
	
	  <ServiceName> - DLL initialization failure Initialization of the
	  dynamic
	  link library c:\winnt\system32\user32.dll failed. The process is
	  terminating abnormally.
	
	CAUSE
	=====
	
	This can be caused by the wrong version of User32.dll in the location stated in
	the pop-up dialog.
	
	WORKAROUND
	==========
	
	After you confirm what version of Windows NT is installed on the server and what
	service packs have been applied, check the time and date stamps on User32.dll to
	confirm that the right version is installed.
	
	If you have confirmed that you are using the correct User32.dll, please refer to
	the following article in the Microsoft Knowledge Base for another possible
	resolution:
	
	  Q142676 Overcoming User32.dll Initialization Failure Errors
	
	Additional query words: user32.dll initialization
	
	======================================================================
	Keywords          : exc4 exc5 exc55 
	Technology        : kbExchangeSearch kbExchange500 kbExchange550 kbExchange400 kbZNotKeyword2
	Version           : winnt:4.0,5.0,5.5
	Issue type        : kbprb
	
	=============================================================================
	

{% endraw %}
