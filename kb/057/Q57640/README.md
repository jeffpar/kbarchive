---
layout: page
title: "Q57640: Net Print Job Appears Twice in Print Manager"
permalink: /kb/057/Q57640/
---

## Q57640: Net Print Job Appears Twice in Print Manager

{% raw %}

	Article: Q57640
	Product(s): Microsoft Windows 95.x Retail Product
	Version(s): WINDOWS:3.0,3.0a,3.1,3.11
	Operating System(s): 
	Keyword(s): 
	Last Modified: 06-NOV-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows versions 3.0, 3.0a, 3.1, 3.11 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	If you use a "Microsoft Network or Compatible," and you connect to two network
	printers on the same server and print to one of them, the print job appears
	twice in the Print Manager network queue listings.
	
	CAUSE
	=====
	
	This is by design. The double listing occurs because of the way the Microsoft
	Redirector networks handle print queues. The queue is managed on a per server,
	not per printer, basis. Therefore, both printer listings in Print Manager
	reflect the same server print queue, and the job is shown twice.
	
	Additional query words: 3.00 win30 3.00a win31 3.10 3.11
	
	======================================================================
	Keywords          :  
	Technology        : kbWin3xSearch kbZNotKeyword3 kbWin300 kbWin300a kbWin310 kbWin311
	Version           : WINDOWS:3.0,3.0a,3.1,3.11
	
	=============================================================================
	

{% endraw %}
