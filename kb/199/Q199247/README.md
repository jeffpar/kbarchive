---
layout: page
title: "Q199247: XCON: Lsdxamex.exe Application Error Running LDE 3.2 Dirsync"
permalink: /kb/199/Q199247/
---

## Q199247: XCON: Lsdxamex.exe Application Error Running LDE 3.2 Dirsync

{% raw %}

	Article: Q199247
	Product(s): Microsoft Exchange
	Version(s): WINDOWS:3.2; winnt:5.5
	Operating System(s): 
	Keyword(s): exc55
	Last Modified: 12-JUN-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- LinkAge Message Exchange, version 3.2 
	- Microsoft Exchange Server, version 5.5 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you run directory synchronization (dirsync) between Exchange Server 5.5
	(running on a Windows NT 4.0 computer with Service Pack 3 installed) and LinkAge
	Directory Exchange (LDE) 3.2, you receive the following application error
	message:
	
	  Lsdxamex.exe application error. The instruction at "0X002b9dbd" referenced
	  memory at "0X0000C" The memory could not be "read".
	
	CAUSE
	=====
	
	The cause of the problem is that a corrupted message is being processed by LDE.
	
	WORKAROUND
	==========
	
	1. Look at the most recent linkage log file located in the Linkage\Logs folder.
	  The files are created using the current date and adding a .log extension.
	  Look in the log file for the location of the Dxamex.in and Dxm.in folders.
	
	2. Stop the Linkage Directory Exchange service and delete all .rdy and .mpb
	  files in the Exchconn\Q\Dxamex.in\ and Exchconn\Q\Dxm.in\ folders.
	
	3. Start the LinkAge Directory Exchange service back up.
	
	Now it is necessary to propagate the new information from the Linkage
	administrator program. In the Linkage Administrator program:
	
	1. Expand Directory Exchange Manager, expand Directory Exchange Agents, expand
	  Linkage DXAMEX, and double-click Configuration.
	
	2. Double-click Propagation, click Send Updates, and then click Updates Only.
	
	MORE INFORMATION
	================
	
	There is no message generated in the application log and no User.dmp file. This
	is not a Dr. Watson error.
	
	Additional query words:
	
	======================================================================
	Keywords          : exc55 
	Technology        : kbZNotKeyword6 kbExchangeSearch kbExchange550 kbZNotKeyword2 kbLinkAgeSearch kbLinkAge320
	Version           : WINDOWS:3.2; winnt:5.5
	Issue type        : kbhowto
	
	=============================================================================
	

{% endraw %}
