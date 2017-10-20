---
layout: page
title: "Q183795: XCLN: Err Msg Opening Read Receipt After Upgrading NT Server"
permalink: /kb/183/Q183795/
---

## Q183795: XCLN: Err Msg Opening Read Receipt After Upgrading NT Server

{% raw %}

	Article: Q183795
	Product(s): Microsoft Exchange
	Version(s): winnt:4.0
	Operating System(s): 
	Keyword(s): kberrmsg kbsetup
	Last Modified: 18-MAY-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Exchange Windows NT client, version 4.0 
	- the operating system: Microsoft Windows NT 4.0 
	-------------------------------------------------------------------------------
	
	
	SYMPTOMS
	========
	
	If you upgrade from Microsoft Windows NT Server 3.51 to Windows NT Server 4.0 on
	a computer that has the Microsoft Exchange Windows NT client 4.0 installed, the
	following error message may be displayed when you open a read receipt in the
	client:
	
	  The item could not be displayed. The object could not be found.
	  Launching default form instead.
	
	If you close the dialog box in which the error message is displayed, the read
	receipt opens and is displayed properly.
	
	CAUSE
	=====
	
	When you upgrade to Windows NT Server 4.0 on a computer that has the Exchange
	Windows NT client installed, the Windows NT Server Windows Messaging System
	(WMS) is installed. The registry modifications that are made and the new files
	that are installed may cause this problem to occur when you open a read receipt.
	
	WORKAROUND
	==========
	
	To work around this problem, reinstall the Exchange client for Windows NT.
	
	======================================================================
	Keywords          : kberrmsg kbsetup 
	Technology        : kbWinNTsearch kbWinNTSsearch kbExchangeSearch kbExchange400 kbExchangeClientSearch kbZNotKeyword2 kbZNotKeyword3
	Version           : winnt:4.0
	Issue type        : kbbug
	
	=============================================================================
	

{% endraw %}
