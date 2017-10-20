---
layout: page
title: "Q245186: Print Jobs Are Not Printed and Spooler Service Stops Responding."
permalink: /kb/245/Q245186/
---

## Q245186: Print Jobs Are Not Printed and Spooler Service Stops Responding.

{% raw %}

	Article: Q245186
	Product(s): Microsoft Windows NT
	Version(s): winnt:4.0
	Operating System(s): 
	Keyword(s): 
	Last Modified: 08-AUG-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Workstation version 4.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you try to print, the print jobs may not be printed. The Spooler service
	may stop responding (hang), and you may receive no error messages.
	
	CAUSE
	=====
	
	This behavior can occur if a print job becomes corrupted.
	
	RESOLUTION
	==========
	
	To resolve this issue:
	
	1. Stop the Spooler service:
	
	  a. Click Start, point to Settings, click Control Panel, and then double-click
	     Services.
	
	  b. Click Spooler, and then click Stop.
	
	2. Delete all of the files in the \%SystemRoot%\System32\Spool folder.
	
	3. Start the Spooler service.
	
	Additional query words: hang freeze
	
	======================================================================
	Keywords          :  
	Technology        : kbWinNTsearch kbWinNTWsearch kbWinNTW400 kbWinNTW400search kbWinNT400search
	Version           : winnt:4.0
	Issue type        : kbprb
	
	=============================================================================
	

{% endraw %}
