---
layout: page
title: "Q166154: XFOR: DXA Doesn't Export New Recipients Container During Dirsync"
permalink: /kb/166/Q166154/
---

## Q166154: XFOR: DXA Doesn't Export New Recipients Container During Dirsync

{% raw %}

	Article: Q166154
	Product(s): Microsoft Exchange
	Version(s): WinNT:4.0,5.0
	Operating System(s): 
	Keyword(s): 
	Last Modified: 07-MAY-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Exchange Server, versions 4.0, 5.0 
	-------------------------------------------------------------------------------
	
	
	SYMPTOMS
	========
	
	After you add a new recipients container to the list of Exported Containers for
	either a Dirsync Requester object or Remote Dirsync Requester object, some names
	in the new recipients container may not be sent in the next directory
	synchronization (dirsync) cycle as expected.
	
	CAUSE
	=====
	
	The Microsoft Exchange Directory Synchronization service (DXA) did not always
	handle this properly.
	
	Every object within a Microsoft Exchange Directory has a USN-Changed value. This
	value is updated every time that the object is modified. The USN- Changed value
	is what the DXA uses to determine if an object that it is synchronizing with
	Microsoft Mail for PC Networks has changed since the last dirsync cycle.
	
	When a new recipients container is added to the list of Exported Containers, the
	DXA should look for all objects with a USN-Changed value greater than zero
	within that new recipients container and send those objects out as dirsync
	transactions. Due to a logic error in the DXA, the DXA was treating the new
	recipients container as if it had always been in the list of export containers.
	
	
	WORKAROUND
	==========
	
	DXA Is Acting as Dirsync Server
	-------------------------------
	
	If the DXA is acting as the dirsync server, each remote dirsync requester must
	request a full import from the DXA. This can be accomplished by performing
	either of the following two procedures.
	
	Procedure 1 - Use the Admin.exe Utility:
	
	1. Start the Microsoft Mail for PC Networks Admin.exe utility against the
	  Requester postoffice that is now expecting the new recipients container.
	
	2. Select Config, Dirsync, Requester, Import, and YES.
	
	Repeat these two steps for each requester postoffice expecting the new containers
	Recipients to be sent.
	
	Procedure 2 - Use the Exchange Administrator Program:
	
	1. Start the Microsoft Exchange Administrator program.
	
	2. Highlight the Remote Requester object, open the File menu, and click
	  Properties.
	
	3. On the General tab, select the Export on Next Cycle checkbox.
	
	Repeat these three steps for each Remote Requester object expecting the new
	containers recipients to be sent.
	
	DXA Is Acting as a Dirsync Requester
	------------------------------------
	
	1. Start the Microsoft Exchange Administrator program.
	
	2. Highlight the Remote Requester object, open the File menu, and click
	  Properties.
	
	3. On the General tab, select the Export on Next Cycle checkbox.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in Microsoft Exchange Server,
	version 4.0. We are researching this problem and will post new information here
	in the Microsoft Knowledge Base as it becomes available.
	
	Microsoft has confirmed this to be a problem in Microsoft Exchange Server version
	5.0. This problem has been corrected in the latest U.S. Service Pack for
	Microsoft Exchange Server version 5.0. For information on obtaining the Service
	Pack, query on the following word in the Microsoft Knowledge Base (without the
	spaces):
	
	  S E R V P A C K
	======================================================================
	Keywords          :  
	Technology        : kbExchangeSearch kbExchange500 kbExchange400 kbZNotKeyword2
	Version           : WinNT:4.0,5.0
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	

{% endraw %}
