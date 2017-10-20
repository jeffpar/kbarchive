---
layout: page
title: "Q167943: XCLN: Err Msg: The Item Could Not Be Printed"
permalink: /kb/167/Q167943/
---

## Q167943: XCLN: Err Msg: The Item Could Not Be Printed

{% raw %}

	Article: Q167943
	Product(s): Microsoft Exchange
	Version(s): 4.0
	Operating System(s): 
	Keyword(s): kbusage
	Last Modified: 07-DEC-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Exchange Windows 3.x client, version 4.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you run Windows 3.x and attempt to print a message from the Microsoft
	Exchange 16-bit client, the following error message is generated and nothing
	will print.
	
	  The item could not be printed. The print dialog could not be displayed. Page
	  size is too small.
	
	CAUSE
	=====
	
	There is insufficient space on the hard drive to spool the print file.
	
	RESOLUTION
	==========
	
	Delete some files or reduce the size of the Windows swap file to free some disk
	space. Restart Windows and the Microsoft Exchange client, and try printing
	again.
	
	Additional query words:
	
	======================================================================
	Keywords          : kbusage 
	Technology        : kbExchangeSearch kbExchange400 kbExchangeClientSearch kbZNotKeyword3
	Version           : :4.0
	Issue type        : kbprb
	
	=============================================================================
	

{% endraw %}
