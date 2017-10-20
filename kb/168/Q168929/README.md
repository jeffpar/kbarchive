---
layout: page
title: "Q168929: XCLN: Err Msg: You Need More Memory or System Resources"
permalink: /kb/168/Q168929/
---

## Q168929: XCLN: Err Msg: You Need More Memory or System Resources

{% raw %}

	Article: Q168929
	Product(s): Microsoft Exchange
	Version(s): WINDOWS:4.0,5.0
	Operating System(s): 
	Keyword(s): kbtshoot kbusage
	Last Modified: 29-APR-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Exchange Windows 3.x client, versions 4.0, 5.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you click the Mail icon in Control Panel you may receive the following
	error message:
	
	  You need more memory or system resources. Close some windows and try
	  again.
	
	CAUSE
	=====
	
	The Mapi.dll file, located in the Windows\System subdirectory by default, is
	either missing, corrupted, or has been replaced by another version.
	
	
	RESOLUTION
	==========
	
	1. Reinstall Microsoft Exchange Client.
	
	2. Expand Mapi.dll from the Exchange Client cabinet (cab) files.
	
	3. Copy Mapi.dll from another Windows computer that is currently working. Both
	  computers must be running the same version and service pack of Exchange
	  Client. See table below and compare the size of the Mapi.dll file to find out
	  this information.
	
	  Mapi.dll File Size       Version
	                ====        ======
	              1,000,288    5.0
	               989,280     4.0 SP4
	               988,544     4.0 SP3
	               988,480     4.0 SP2
	               890,464     4.0 RTM
	
	======================================================================
	Keywords          : kbtshoot kbusage 
	Technology        : kbExchangeSearch kbExchange500 kbExchange400 kbExchangeClientSearch kbZNotKeyword3
	Version           : WINDOWS:4.0,5.0
	Issue type        : kbprb
	
	=============================================================================
	

{% endraw %}
