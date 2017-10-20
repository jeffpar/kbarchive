---
layout: page
title: "Q152735: XCLN: Offline Folder Is in Use and Could Not Be Accessed"
permalink: /kb/152/Q152735/
---

## Q152735: XCLN: Offline Folder Is in Use and Could Not Be Accessed

{% raw %}

	Article: Q152735
	Product(s): Microsoft Exchange
	Version(s): WINDOWS:4.0,5.0
	Operating System(s): 
	Keyword(s): kbusage
	Last Modified: 30-MAR-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Exchange Windows 95/98 client, versions 4.0, 5.0 
	- Microsoft Exchange Windows 3.x client, versions 4.0, 5.0 
	- Microsoft Exchange Windows NT client, versions 4.0, 5.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When run the Microsoft Exchange client with an Offline folder configured, you
	may receive the following error messages:
	
	  The file Path:\exchange.ost is in use and could not be accessed. Close any
	  application that is using this file, and then try again.
	
	  The set of folders could not be opened. The file Path:\exchange.ost is in use
	  and could not be accessed. Close any application that is using this file, and
	  then try again.
	
	CAUSE
	=====
	
	This is by design.
	
	WORKAROUND
	==========
	
	Check to see if the Offline folder is currently being used by another Microsoft
	Exchange user or if the file has been locked open. Use the Control Panel Server
	applet to verify that the file is not locked open.
	
	MORE INFORMATION
	================
	
	The Offline folder (Path:\exchange.ost) can only be accessed by one Microsoft
	Exchange user at a time. If multiple Microsoft Exchange users try to access the
	Offline folder, only the first user will be allowed access to the file and the
	additional Microsoft Exchange users will be refused access.
	
	Additional query words: xclnwin xclnwin16 xclnwinnt xclnwin95
	
	======================================================================
	Keywords          : kbusage 
	Technology        : kbExchangeSearch kbExchange500 kbExchange400 kbExchangeClientSearch kbZNotKeyword kbZNotKeyword2 kbZNotKeyword3 kbExchange400NT kbExchange500NT kbExchange400Win95 kbExchange500Win95
	Version           : WINDOWS:4.0,5.0
	
	=============================================================================
	

{% endraw %}
