---
layout: page
title: "Q131988: MHS: Messages Appear Stuck in MHS Queue"
permalink: /kb/131/Q131988/
---

## Q131988: MHS: Messages Appear Stuck in MHS Queue

{% raw %}

	Article: Q131988
	Product(s): Microsoft Mail For PC Networks
	Version(s): MS-DOS:3.0
	Operating System(s): 
	Keyword(s): 
	Last Modified: 11-NOV-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Mail Gateway to MHS, version 3.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	Outbound MHS messages are not removed from the PC Mail gateway postoffice MHS
	queue.
	
	CAUSE
	=====
	
	This problem occurs if the MV environment variable does not point to the proper
	MHS directory.
	
	MORE INFORMATION
	================
	
	Pages 17 and 18 of the Microsoft Mail Gateway to MHS "Administrator's Guide"
	show the MV environment command for Novell networks:
	
	  SET MV=SERVER/VOLUME:
	
	  -or-
	
	  SET MV=SERVER/VOLUME:PATH
	
	
	Additional query words: 3.00
	
	======================================================================
	Keywords          :  
	Technology        : kbMailSearch kbMailGateSearch kbZNotKeyword3 kbMailGateMHS300
	Version           : MS-DOS:3.0
	
	=============================================================================
	

{% endraw %}
