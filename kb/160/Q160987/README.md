---
layout: page
title: "Q160987: XADM: Registry Security Is Not Set Up Properly"
permalink: /kb/160/Q160987/
---

## Q160987: XADM: Registry Security Is Not Set Up Properly

{% raw %}

	Article: Q160987
	Product(s): Microsoft Exchange
	Version(s): winnt:4.0,5.0
	Operating System(s): 
	Keyword(s): kbusage
	Last Modified: 12-APR-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Exchange Server, versions 4.0, 5.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you attempt to administer the MS Mail Connector or Internet Mail Connector
	that is located on a Windows NT 4.0 Server computer with an account that is not
	a Windows NT Administrator account, the following error message will appear:
	
	  The MSMAIL Connector Registry Key
	  System\CurrentControlSet\Services\MSExchangeMSMI\Parameters\Admin could not
	  be opened because the Registry Security is not set up correctly.
	
	Followed by this error message:
	
	  You will not be able to view all the property sheets because the MS Mail
	  Connector could not initialize completely.
	
	If you are administering the Internet Mail Connector in Microsoft Exchange Server
	version 4.0, you will see the following error message:
	
	  The data to be configured could not be loaded.
	
	If you are administering the Internet Mail Connector in Microsoft Exchange Server
	version 5.0, you will see this error message:
	
	  Extension "SMTP" could not be loaded. A problem occurred with the extension
	  .DLL file, possibly due to memory shortage. Close some applications or
	  windows, and try again.
	
	  Microsoft Exchange Administrator
	  ID no: c10312c6
	
	CAUSE
	=====
	
	Windows NT version 4.0 has introduced stricter registry security, which in
	effect does not allow accounts without Windows NT Administrator rights to
	perform registry-based Administrator operations, including configuring
	connectors (as above), setting diagnostics logging, and so on.
	
	WORKAROUND
	==========
	
	There is no workaround other than to give Windows NT Administrator rights to the
	account that needs to be able to administer the connectors.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in version 4.0 of Exchange Server
	on Windows NT 4.0. We are researching this problem and will post new information
	here in the Microsoft Knowledge Base as it becomes available.
	
	
	Additional query words:
	
	======================================================================
	Keywords          : kbusage 
	Technology        : kbExchangeSearch kbExchange500 kbExchange400 kbZNotKeyword2
	Version           : winnt:4.0,5.0
	
	=============================================================================
	

{% endraw %}
