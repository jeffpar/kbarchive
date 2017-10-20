---
layout: page
title: "Q134953: X400: Err Msg: WARNING 0 or 3...: Could Not Load Sort Table"
permalink: /kb/134/Q134953/
---

## Q134953: X400: Err Msg: WARNING 0 or 3...: Could Not Load Sort Table

{% raw %}

	Article: Q134953
	Product(s): Microsoft Mail For PC Networks
	Version(s): MS-DOS:3.0,3.2
	Operating System(s): 
	Keyword(s): 
	Last Modified: 18-NOV-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Mail Gateway to X.400, versions 3.0, 3.2 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	Microsoft Mail Gateway to X.400 may generate one of the following warning
	messages:
	
	Version 3.0
	-----------
	
	  WARNING 0 (MTA Control Program): Could not load sort table
	
	Version 3.2
	-----------
	
	  WARNING 3 (MTA Control Program): Could not load sort table
	
	CAUSE
	=====
	
	This message will occur if the C850SORT.GLB file located in the \GLB directory
	of the gateway postoffice is missing or corrupt. The file C850SORT.GLB controls
	the international character sort order for the Administrator's program
	(ADMIN.EXE), and it is specific for each international Microsoft Mail package.
	
	
	Additional query words: 3.20 error x400gate
	
	======================================================================
	Keywords          :  
	Technology        : kbMailSearch kbMailGateSearch kbZNotKeyword3 kbMailGatex400300 kbMailGatex400320
	Version           : MS-DOS:3.0,3.2
	
	=============================================================================
	

{% endraw %}
