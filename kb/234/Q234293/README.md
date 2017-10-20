---
layout: page
title: "Q234293: XFOR: Setup Problems Upgrading GW/Notes/SNADS/PROFS Connectors"
permalink: /kb/234/Q234293/
---

## Q234293: XFOR: Setup Problems Upgrading GW/Notes/SNADS/PROFS Connectors

{% raw %}

	Article: Q234293
	Product(s): Microsoft Exchange
	Version(s): winnt:5.5
	Operating System(s): 
	Keyword(s): exc55
	Last Modified: 05-JUN-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Exchange Server, version 5.5 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	You may encounter the following error message while upgrading or installing the
	Microsoft Exchange Connectors for Novell GroupWise, Lotus Notes, SNADS, or
	PROFS:
	
	  A read-only file, \\server\Exchsrvr\Gwise\I386\Gwxpxgen.dll, was found while
	  attempting to copy files to the destination location. To overwrite the file,
	  click the Yes button, otherwise click the No button.
	
	Note that this file will change depending on which connector you are attempting
	to install.
	
	CAUSE
	=====
	
	This problem occurs because the system attendant has locked the proxy address
	generator for these connectors.
	
	WORKAROUND
	==========
	
	There are two workarounds:
	
	Workaround Number One
	---------------------
	
	1. Minimize the Setup window.
	
	2. Stop the Microsoft Exchange System Attendant. You will be asked if it may
	  stop the following services:
	
	   - Microsoft Exchange Message Transfer Agent
	   - Microsoft Exchange Directory
	   - Microsoft Exchange Information Store
	
	  Note any other services that are mentioned.
	
	3. Restart each service individually, until all services are started again.
	
	4. Return to the Setup window, and click Retry to finish the Setup procedure.
	
	Workaround Number Two
	---------------------
	
	1. Find the .dll file listed in the error message.
	
	2. Rename the .dll file.
	
	3. Return to the Setup window, and click Retry to finish Setup. Do this as many
	  times as required depending on the number of connectors installed.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in Microsoft Exchange Server
	version 5.5.
	
	Additional query words:
	
	======================================================================
	Keywords          : exc55 
	Technology        : kbExchangeSearch kbExchange550 kbZNotKeyword2
	Version           : winnt:5.5
	Issue type        : kbprb
	
	=============================================================================
	

{% endraw %}
