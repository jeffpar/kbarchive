---
layout: page
title: "Q87411: PC DB: Err Msg: Error in Transmitting Mail or Server Disk Full"
permalink: /kb/087/Q87411/
---

## Q87411: PC DB: Err Msg: Error in Transmitting Mail or Server Disk Full

{% raw %}

	Article: Q87411
	Product(s): Microsoft Mail For PC Networks
	Version(s): WINDOWS:2.1e,3.0,3.2
	Operating System(s): 
	Keyword(s): 
	Last Modified: 30-OCT-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Mail for PC Networks, versions 2.1e, 3.0, 3.2 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	The Microsoft Mail .MAI message file is stored within one of the 16
	subdirectories below the MAI subdirectory. If the subdirectory is not there, or
	if you are unable to create a file there, the following message is displayed:
	
	  Error in transmitting mail or server disk is full.
	
	RESOLUTION
	==========
	
	To prevent this message from appearing, use the MS-DOS MKDIR command to create
	the missing subdirectory.
	
	Additional query words: 2.10e 3.00 3.20
	
	======================================================================
	Keywords          :  
	Technology        : kbMailSearch kbZNotKeyword3 kbMailPCN320 kbMailPCN300 kbMailPCN210e
	Version           : WINDOWS:2.1e,3.0,3.2
	
	=============================================================================
	

{% endraw %}
