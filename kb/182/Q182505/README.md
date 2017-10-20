---
layout: page
title: "Q182505: XADM: Memory Usage of Store.exe Is Higher in Exchange 5.5"
permalink: /kb/182/Q182505/
---

## Q182505: XADM: Memory Usage of Store.exe Is Higher in Exchange 5.5

{% raw %}

	Article: Q182505
	Product(s): Microsoft Exchange
	Version(s): WINDOWS:5.5
	Operating System(s): 
	Keyword(s): kbusage
	Last Modified: 04-APR-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Exchange Server, version 5.5 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	When you run Microsoft Exchange Server version 5.5, memory usage of Store.exe as
	viewed from Task Manager Processes may be considerably higher than in previous
	versions of Microsoft Exchange Server.
	
	MORE INFORMATION
	================
	
	In versions earlier than Microsoft Exchange Server 5.5, memory over 256 MB was
	not used. With version 5.5, memory up to 3 GB can be used and is used, as is
	evident in the Task Manager Processes.
	
	Exchange Server 5.5 uses all available RAM for the best performance possible,
	unless memory usage is limited by using the Exchange Performance Optimizer.
	Exchange Server will release memory to other applications as required to
	increase system performance.
	
	As per the Exchange Server 5.5 Readme.doc:
	
	  Significant changes were made to the database engine allowing Microsoft
	  Exchange Server to better use large memory and multiple processor
	  servers. In particular, Performance Optimizer will set the maximum
	  number of information store and directory database buffers to much
	  higher values than before (approximately the amount of available RAM
	  divided by 4K).
	
	======================================================================
	Keywords          : kbusage 
	Technology        : kbExchangeSearch kbExchange550 kbZNotKeyword2
	Version           : WINDOWS:5.5
	Issue type        : kbinfo
	
	=============================================================================
	

{% endraw %}
