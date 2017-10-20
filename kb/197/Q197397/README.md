---
layout: page
title: "Q197397: XFOR: cc:Mail Migration from Command Line May Give False Errors"
permalink: /kb/197/Q197397/
---

## Q197397: XFOR: cc:Mail Migration from Command Line May Give False Errors

{% raw %}

	Article: Q197397
	Product(s): Microsoft Exchange
	Version(s): winnt:5.5
	Operating System(s): 
	Keyword(s): 
	Last Modified: 17-DEC-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Exchange Server, version 5.5 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	
	When you run a command line cc:Mail migration, it may be interrupted or cancelled
	and the following event may be generated in the Windows NT Application Event
	log:
	
	  Event ID: 10008 Source:MSExchangeMig
	  Type: Warning
	  Description: Unnecessary keyword 'Function,' found in control file. The
	  keyword will be ignored
	
	CAUSE
	=====
	
	This is an erroneous warning, and can be safely ignored.
	
	STATUS
	======
	
	Microsoft acknowledges this to be a problem in Microsoft Exchange Server version
	5.5.
	
	Additional query words:
	
	======================================================================
	Keywords          :  
	Technology        : kbExchangeSearch kbExchange550 kbZNotKeyword2
	Version           : winnt:5.5
	Issue type        : kbbug
	
	=============================================================================
	

{% endraw %}
