---
layout: page
title: "Q185131: XADM: Dynamic Link Library Edb.dll Could Not Be Found"
permalink: /kb/185/Q185131/
---

## Q185131: XADM: Dynamic Link Library Edb.dll Could Not Be Found

{% raw %}

	Article: Q185131
	Product(s): Microsoft Exchange
	Version(s): WINDOWS:5.5
	Operating System(s): 
	Keyword(s): 
	Last Modified: 11-APR-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Exchange Server, version 5.5 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you try to start the Information Store service after a server crash, the
	following error message appears:
	
	"The dynamic link library edb.dll could not be found in the specified path
	<PATH system variable>"
	
	CAUSE
	=====
	
	Some Exchange files may have been corrupted during the server crash. When the
	Information Store service is started, it thinks it is dealing with the EDB
	format rather than the ESE97 format.
	
	WORKAROUND
	==========
	
	To work around this problem, reinstall Microsoft Exchange Server 5.5 by running
	Setup.exe from the Microsoft Exchange Server 5.5 CD and selecting Reinstall.
	
	======================================================================
	Keywords          :  
	Technology        : kbExchangeSearch kbExchange550 kbZNotKeyword2
	Version           : WINDOWS:5.5
	Issue type        : kbprb
	
	=============================================================================
	

{% endraw %}
