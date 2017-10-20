---
layout: page
title: "Q170009: XADM: NTFS Compressed Volume Causes Store to Fail"
permalink: /kb/170/Q170009/
---

## Q170009: XADM: NTFS Compressed Volume Causes Store to Fail

{% raw %}

	Article: Q170009
	Product(s): Microsoft Exchange
	Version(s): 4.0,5.0,5.5
	Operating System(s): 
	Keyword(s): 
	Last Modified: 22-OCT-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Exchange Server, versions 4.0, 5.0, 5.5 
	- Microsoft Exchange 2000 Server 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	On a compressed NTFS partition, the Microsoft Exchange Server information store,
	may get corrupted when its size reaches about 4 gigabytes (GB). This can cause
	failure of the information store.
	
	MORE INFORMATION
	================
	
	A compressed NTFS partition can adversely affect the Microsoft Exchange Server
	by causing one or more of the following problems:
	
	- High CPU utilization.
	
	- Enumeration of large NTFS directory may take a long time.
	
	- Degradation of NTAS server with NTFS partition that includes many Files.
	
	For additional information, please see the following articles in the Microsoft
	Knowledge Base:
	
	  Q128447 Enumeration of Large NTFS Directory Takes a Long Time
	
	  Q130839 NTFS Performance Problem with Many Files
	
	
	Additional query words:
	
	======================================================================
	Keywords          :  
	Technology        : kbExchangeSearch kbExchange500 kbExchange550 kbExchange400 kbZNotKeyword2 kbExchange2000Search kbExchange2000Serv
	Version           : :4.0,5.0,5.5
	Issue type        : kbprb
	
	=============================================================================
	

{% endraw %}
