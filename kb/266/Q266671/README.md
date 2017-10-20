---
layout: page
title: "Q266671: XADM: Exmerge Won't Work on Windows 2000 Terminal Server Comp."
permalink: /kb/266/Q266671/
---

## Q266671: XADM: Exmerge Won't Work on Windows 2000 Terminal Server Comp.

{% raw %}

	Article: Q266671
	Product(s): Microsoft Exchange
	Version(s): winnt:5.5 SP3
	Operating System(s): 
	Keyword(s): exc55sp3
	Last Modified: 18-MAY-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Exchange Server, version 5.5 SP3, used with:
	   - the operating system: Microsoft Windows 2000 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you run the Microsoft Exchange Mailbox Merge program (Exmerge.exe) on a
	Windows 2000 Server-based Terminal Server computer that is running Exchange
	Server 5.5 Service Pack 3, you may receive the following error message:
	
	  One or more system files required to run this program were not found. Please
	  reinstall the Microsoft Exchange Administrator program and then run
	  Exmerge.exe.
	
	CAUSE
	=====
	
	This issue can occur if Terminal Services is running in Execute mode. To run the
	Exmerge program, Terminal Services must be running in Install mode.
	
	RESOLUTION
	==========
	
	To resolve this issue, change Terminal Services to Install mode before you run
	the Exmerge.exe program. To change Terminal Services to Install mode, type
	"change user /install" (without the quotation marks) at a command prompt.
	
	After you run Exmerge successfully, change Terminal Services back to Execute
	mode; type "change user /execute" (without the quotation marks) at the command
	prompt.
	
	Additional query words:
	
	======================================================================
	Keywords          : exc55sp3 
	Technology        : kbExchangeSearch kbZNotKeyword2
	Version           : winnt:5.5 SP3
	Issue type        : kbprb
	
	=============================================================================
	

{% endraw %}
