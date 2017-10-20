---
layout: page
title: "Q175096: XCLN: Electronic Forms Designer Installation Hangs on Exchange"
permalink: /kb/175/Q175096/
---

## Q175096: XCLN: Electronic Forms Designer Installation Hangs on Exchange

{% raw %}

	Article: Q175096
	Product(s): Microsoft Exchange
	Version(s): WinNT:5.5
	Operating System(s): 
	Keyword(s): kbusage
	Last Modified: 08-MAR-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Exchange Server, version 5.5 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you are installing the Electronic Forms Designer (EFD) program from the
	Microsoft Exchange Client or Outlook 97 CD-ROM onto an Exchange Server 5.5
	computer, the Setup program will start, proceed through the first few screens,
	and after prompting you for a user name and company, hang (stop responding).
	
	CAUSE
	=====
	
	Other MAPI (Messaging Application Programming Interface) services on the server
	are causing the installation process to stall, because MAPI files in use cannot
	be overwritten.
	
	WORKAROUND
	==========
	
	Bring up Task Manager and stop Events.exe. This allows the installation process
	to continue and complete successfully. To ensure that no other problems are
	encountered, it is recommended that you stop all Exchange services until the
	installation process is completed. After installation, restart the services
	through the Services icon in Control Panel. EFD should function normally.
	======================================================================
	Keywords          : kbusage 
	Technology        : kbExchangeSearch kbExchange550 kbZNotKeyword2
	Version           : WinNT:5.5
	
	=============================================================================
	

{% endraw %}
