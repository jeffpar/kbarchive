---
layout: page
title: "Q190828: XADM: Information Store Fails to Start With Error"
permalink: /kb/190/Q190828/
---

## Q190828: XADM: Information Store Fails to Start With Error

{% raw %}

	Article: Q190828
	Product(s): Microsoft Exchange
	Version(s): WINDOWS:5.5
	Operating System(s): 
	Keyword(s): 
	Last Modified: 24-APR-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Exchange Server, version 5.5 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you try to start the Information Store service, the following error message
	may occur:
	
	  The procedure entry point UIEncodeEUC_KR@20 could not be located in the
	  dynamic link library gapi32.dll.
	
	CAUSE
	=====
	
	The Gapi32.dll file has been corrupted.
	
	WORKAROUND
	==========
	
	Copy the Gapi32.dll file from the Exchange Server installation disc.
	
	======================================================================
	Keywords          :  
	Technology        : kbExchangeSearch kbExchange550 kbZNotKeyword2
	Version           : WINDOWS:5.5
	Issue type        : kbprb
	
	=============================================================================
	

{% endraw %}
