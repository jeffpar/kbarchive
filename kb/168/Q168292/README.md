---
layout: page
title: "Q168292: XFOR: Err Msg: (RAS) Phone Book Cannot Be Opened"
permalink: /kb/168/Q168292/
---

## Q168292: XFOR: Err Msg: (RAS) Phone Book Cannot Be Opened

{% raw %}

	Article: Q168292
	Product(s): Microsoft Exchange
	Version(s): winnt:4.0,5.0,5.5
	Operating System(s): 
	Keyword(s): kbusage exc4 exc5 exc55
	Last Modified: 19-DEC-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Exchange Server, versions 4.0, 5.0, 5.5 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you attempt to access the Dial-up connections property page, the following
	error message appears:
	
	  The Remote Access Service (RAS) phone book cannot be opened. It must be
	  accessible and in the system directory as
	  \winnt\system32\ras\rasphone.pbk
	
	You can successfully start the remote access service (RAS) from a command line,
	and Winnt\System32\Ras\Rasphone.pbk exists and is accessible.
	
	CAUSE
	=====
	
	The IMCAdmin extension attempts to open Rasphone.pbk based on a relative path
	from the ADMIN$ share. If this share is missing or has been removed the IMCAdmin
	extension will be unable to access the Rasphone.pbk file. This path is hardcoded
	into the following extension:
	
	  \\servername\admin$\system32\ras\rasphone.pbk
	
	If the location of this file changes you will receive this error message.
	
	Additional query words: fail
	
	======================================================================
	Keywords          : kbusage exc4 exc5 exc55 
	Technology        : kbExchangeSearch kbExchange500 kbExchange550 kbExchange400 kbZNotKeyword2
	Version           : winnt:4.0,5.0,5.5
	Issue type        : kbprb
	
	=============================================================================
	

{% endraw %}
