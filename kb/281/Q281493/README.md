---
layout: page
title: "Q281493: XADM: Information Store Does Not Start with ESE Event ID 188"
permalink: /kb/281/Q281493/
---

## Q281493: XADM: Information Store Does Not Start with ESE Event ID 188

{% raw %}

	Article: Q281493
	Product(s): Microsoft Exchange
	Version(s): 5.5
	Operating System(s): 
	Keyword(s): exc55
	Last Modified: 11-JUN-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Exchange Server, version 5.5 
	-------------------------------------------------------------------------------
	
	IMPORTANT: This article contains information about modifying the registry. Before you modify the registry, make sure to back it up and make sure that you understand how to restore the registry if a problem occurs. For information about how to back up, restore, and edit the registry, click the following article number to view the article in the Microsoft Knowledge Base:
	
	  Q256986 Description of the Microsoft Windows Registry
	
	SYMPTOMS
	========
	
	The information store may not start (even with an empty Mdbdata folder) and the
	following event ID may be logged:
	
	  Event ID: 188
	  Event Type: Error
	  Event Source: ESE97
	  Event Category: System Parameter Settings
	  Description:
	  MSExchangeIS (1956) System parameter stop clean flush threshold (1962) is less
	  than start clean flush threshold (3270).
	
	CAUSE
	=====
	
	This issue can occur if the Buffer Threshold Low Percent registry key is missing
	or has an incorrect value (too high).
	
	RESOLUTION
	==========
	
	To resolve this issue, make sure that the Buffer Threshold Low Percent key
	exists and has a value that is equal to or less than the Buffer Threshold High
	Percent value.
	
	Exchange Performance Optimizer (Perfwiz) adds two registry keys: the Buffer
	Threshold Low Percent key and the Buffer Threshold High Percent key. Both keys
	may not exist; this does not cause any issues. However, if one of these keys
	exists, the other key must also exist.
	
	WARNING: If you use Registry Editor incorrectly, you may cause serious problems
	that may require you to reinstall your operating system. Microsoft cannot
	guarantee that you can solve problems that result from using Registry Editor
	incorrectly. Use Registry Editor at your own risk.
	
	These keys are located under the following key in the registry:
	
	  HKEY_LOCAL_MACHINE\System\CurrentControlSet\Service\MsExchangeIs\ParameterSystem
	
	The default setting for both keys is REG_DWORD: 0x3.
	
	Additional query words:
	
	======================================================================
	Keywords          : exc55 
	Technology        : kbExchangeSearch kbExchange550 kbZNotKeyword2
	Version           : :5.5
	Issue type        : kbprb
	
	=============================================================================
	

{% endraw %}
