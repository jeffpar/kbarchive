---
layout: page
title: "Q183896: XADM: Error Message When Installing Key Management Server"
permalink: /kb/183/Q183896/
---

## Q183896: XADM: Error Message When Installing Key Management Server

{% raw %}

	Article: Q183896
	Product(s): Microsoft Exchange
	Version(s): WINDOWS:4.0
	Operating System(s): 
	Keyword(s): kbusage
	Last Modified: 09-APR-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Exchange Server, version 4.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you are installing the Key Management (KM) Server, the following error
	message may appear:
	
	  "Unable to get information about the sites in your organization. Verify
	  the NT account you are logged on as has Microsoft Exchange
	  Administrative rights and you have access on the TEMP directory of this
	  machine before running setup."
	
	CAUSE
	=====
	
	The problem can be caused if the computer on which the KM Server is being
	installed does not have a directory with the name TEMP.
	
	WORKAROUND
	==========
	
	Sometimes the temporary directory is called TMP. In that case, to work around
	the problem, create a new directory with the name TEMP. If you are running on
	the NTFS file system, make sure that all users have full access to that
	directory.
	
	Before creating the TEMP directory, check the TEMP variable by going to Control
	Panel, double-clicking the System icon, and then choosing Environment. The TEMP
	directory should be created in the path that the TEMP variable is pointing to.
	
	======================================================================
	Keywords          : kbusage 
	Technology        : kbExchangeSearch kbExchange400 kbZNotKeyword2
	Version           : WINDOWS:4.0
	Issue type        : kbprb
	
	=============================================================================
	

{% endraw %}
