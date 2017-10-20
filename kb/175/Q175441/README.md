---
layout: page
title: "Q175441: XFOR: Dr. Watson Error When Running GWReset"
permalink: /kb/175/Q175441/
---

## Q175441: XFOR: Dr. Watson Error When Running GWReset

{% raw %}

	Article: Q175441
	Product(s): Microsoft Exchange
	Version(s): winnt:5.0,5.5
	Operating System(s): 
	Keyword(s): exc5 exc55
	Last Modified: 18-DEC-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Exchange Server, versions 5.5, 5.0 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	When running the Microsoft Exchange Server Utility GWReset, you may receive a
	Dr. Watson error stating the following:
	
	  An application error has occurred
	  and an application error log is being generated.
	  Reset.exe
	  Exception: access violation (0xc00000005), Address: 0x0040124f
	
	MORE INFORMATION
	================
	
	The above error can occur if any of the following are true:
	
	1. When starting Reset.exe, you already have a MAPI client started and logged on
	  using a different profile than that of the Internet Mail Service gateway
	  profile necessary for Reset.exe to run.
	
	2. When choosing the profile for Reset.exe to use, you choose the incorrect
	  profile.
	
	3. When at the Choose Profile dialog box, you accidentally click Cancel.
	
	Make sure that you do not have a MAPI profile already active before running
	Reset.exe. Also, be sure to choose the correct MAPI profile created specifically
	for access to the Internet Mail Service mailbox.
	
	For more information on GWReset, query on the following words in the Microsoft
	Knowledge Base:
	
	  GWClean and "Internet Mail Service"
	
	Additional query words:
	
	======================================================================
	Keywords          : exc5 exc55 
	Technology        : kbExchangeSearch kbExchange500 kbExchange550 kbZNotKeyword2
	Version           : winnt:5.0,5.5
	Issue type        : kbinfo
	
	=============================================================================
	

{% endraw %}
