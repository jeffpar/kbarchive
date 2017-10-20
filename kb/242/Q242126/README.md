---
layout: page
title: "Q242126: Cannot Delete Print Job and Printer"
permalink: /kb/242/Q242126/
---

## Q242126: Cannot Delete Print Job and Printer

{% raw %}

	Article: Q242126
	Product(s): Microsoft Windows NT
	Version(s): winnt:4.0
	Operating System(s): 
	Keyword(s): 
	Last Modified: 10-AUG-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Server version 4.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	If you delete a print job that has stopped responding in the print queue, the
	status of the print job may change to 'Deleting', but the print job stays in the
	print queue. Also, you are unable to delete the printer where the print job was
	sent.
	
	CAUSE
	=====
	
	This behavior can occur if the print job is stuck in the spooler.
	
	RESOLUTION
	==========
	
	To resolve this issue, restart the Spooler service. To do this, follow these
	steps:
	
	1. Close the Printers folder.
	
	2. To stop the Spooler service, type the following command at the command
	  prompt, and then press ENTER:
	
	  NET STOP SPOOLER
	
	3. To start the Spooler service again, type the following command at the command
	  prompt, and then press ENTER:
	
	  NET START SPOOLER
	
	Additional query words:
	
	======================================================================
	Keywords          :  
	Technology        : kbWinNTsearch kbWinNT400search kbWinNTSsearch kbWinNTS400search kbWinNTS400
	Version           : winnt:4.0
	Issue type        : kbprb
	
	=============================================================================
	

{% endraw %}
