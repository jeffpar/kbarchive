---
layout: page
title: "Q199379: XADM: Event 7000 :The System Cannot Find the File Specified"
permalink: /kb/199/Q199379/
---

## Q199379: XADM: Event 7000 :The System Cannot Find the File Specified

{% raw %}

	Article: Q199379
	Product(s): Microsoft Exchange
	Version(s): winnt:4.0,5.0,5.5
	Operating System(s): 
	Keyword(s): 
	Last Modified: 22-APR-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Exchange Server, versions 4.0, 5.0, 5.5 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When joining an existing Exchange Server site, the administrator may encounter
	the following error message:
	
	  The system cannot find the file specified...0XC0020002
	
	The administrator will find Event-ID 7000 in System Event Log.
	
	Installation to a new site completes successfully.
	
	CAUSE
	=====
	
	The existing servers in this site have installed a third-party proxy DLL (for
	example, Csproxy.dll). During Setup (Join existing Site), this DLL is not copied
	over to the new server (as it is supposed to be, according to SDK
	recommendations), and therefore, the System Attendant fails to start.
	
	WORKAROUND
	==========
	
	Possible workarounds to this problem are as follows:
	
	- Copy the needed file manually to the new Exchange Server computer during the
	  installation process. Compare the file with an existing file on another
	  server to determine the file location.
	
	  -or-
	
	- This should be the preferred option if more than one server has to be
	  installed.
	
	  1. Create a network installation share.
	
	  2. Copy the third-party proxy DLL into the required directory or directories.
	
	  3. Adapt the Server.inf file to enable the Exchange Server Setup to copy the
	     proxy DLL to the needed directory locations. To do so, in the Server.inf
	     file, add an entry for the third-party DLL to the section [Proxy Files].
	
	Additional query words:
	
	======================================================================
	Keywords          :  
	Technology        : kbExchangeSearch kbExchange500 kbExchange550 kbExchange400 kbZNotKeyword2
	Version           : winnt:4.0,5.0,5.5
	Issue type        : kbprb
	
	=============================================================================
	

{% endraw %}
