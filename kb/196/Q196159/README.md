---
layout: page
title: "Q196159: XADM: Event 1002 Starting the DS after Failing to Move a Server"
permalink: /kb/196/Q196159/
---

## Q196159: XADM: Event 1002 Starting the DS after Failing to Move a Server

{% raw %}

	Article: Q196159
	Product(s): Microsoft Exchange
	Version(s): winnt:5.5 SP1
	Operating System(s): 
	Keyword(s): exc55sp1
	Last Modified: 11-JUN-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Exchange Server, version 5.5 SP1 
	-------------------------------------------------------------------------------
	
	IMPORTANT: This article contains information about modifying the registry. Before you modify the registry, make sure to back it up and make sure that you understand how to restore the registry if a problem occurs. For information about how to back up, restore, and edit the registry, click the following article number to view the article in the Microsoft Knowledge Base:
	
	  Q256986 Description of the Microsoft Windows Registry
	
	SYMPTOMS
	========
	
	The Exchange Directory Service might fail to start with error 2140 after a fatal
	failure of the Exchange Server Move Server Wizard and the following event might
	be logged in the event viewer:
	
	  Event ID: 1002
	  Source: MSExchangeDS
	  Type: Error
	  Category: Internal Processing
	  Description:
	  The Microsoft Exchange Server database, EDB, could not be initialized
	  and returned error -1811. Unrecoverable error. The directory can't
	  continue.
	
	NOTE: This error might happen even if the dsadata directory is restored to the
	state of before running the wizard.
	
	CAUSE
	=====
	
	The registry is pointing to the wrong Directory for the Dir.edb file.
	
	WORKAROUND
	==========
	
	To work around this problem, restore the registry. To do this, perform the
	following steps:
	
	WARNING: If you use Registry Editor incorrectly, you may cause serious problems
	that may require you to reinstall your operating system. Microsoft cannot
	guarantee that you can solve problems that result from using Registry Editor
	incorrectly. Use Registry Editor at your own risk.
	
	1. Go to the mvsrvdata\archive folder (mvsrvdata is the directory that you chose
	  to store the temporary files in while running the Move Server Wizard).
	
	2. Double-click on Restore.reg to restore the registry.
	
	MORE INFORMATION
	================
	
	The Exchange Move Server Wizard creates a subfolder under the dsadata folder
	called newdsa. It will store the new Dir.edb there while it is building it. It
	will also modify the registry to point to the newdsa folder (The wizard will
	backup the Exchange registry keys in the Restore.reg file). If the Wizard fails
	before it starts modifying the Private Information Store, it should recover on
	its own and restore the settings to what they were before running the wizard. In
	the case of a catastrophic failure however, the recovery code will not run and
	you might have to restore the server by performing the above steps.
	
	Additional query words: msw
	
	======================================================================
	Keywords          : exc55sp1 
	Technology        : kbExchangeSearch kbZNotKeyword2 kbExchange550SP1
	Version           : winnt:5.5 SP1
	Issue type        : kbprb
	
	=============================================================================
	

{% endraw %}
