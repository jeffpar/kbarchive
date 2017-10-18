---
layout: page
title: "Q152942: XADM: Slow Intra-site Directory Replication Between Servers"
permalink: kb/152/Q152942/
---

## Q152942: XADM: Slow Intra-site Directory Replication Between Servers

	Article: Q152942
	Product(s): Microsoft Exchange
	Version(s): winnt:4.0
	Operating System(s): 
	Keyword(s): 
	Last Modified: 28-MAR-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Exchange Server, version 4.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	Microsoft Exchange Server computers, version 4.0, with Microsoft Exchange
	Service Pack 2 (SP2) loaded might indicate that replication is occurring
	(through Performance Monitor and Event Viewer logging), but replication never
	completes or catches up between one or more Microsoft Exchange Servers within
	the same Microsoft Exchange Site. You might notice this by not seeing mailboxes,
	custom recipients, other objects, or modifications to objects appear in one or
	more Microsoft Exchange Server Directories.
	
	CAUSE
	=====
	
	When a target Microsoft Exchange Server computer is busy replicating with other
	Microsoft Exchange Server computers, it might not return its UUID when it
	refuses a connection from a requesting Microsoft Exchange Server. This results
	in the requesting Server incorrectly assigning the wrong UUID to the "Reps-From"
	field for the target Server. The next time the requesting Server attempts
	replication with the target Server, it "sees" a different UUID on the target
	Server, considers it a "new" Server, and attempts to replicate all objects. This
	can occur repeatedly if the requesting Server is refused the connection again at
	a later time.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in Microsoft Exchange Server
	version 4.0. This problem was corrected in the latest Microsoft Exchange Service
	Pack. For information on obtaining the Service Pack, query on the following word
	in the Microsoft Knowledge Base (without the spaces):
	
	  S E R V P A C K
	
	WORKAROUND
	==========
	
	One possible workaround is to increase the following registry value on all
	Microsoft Exchange Servers within the Microsoft Exchange Site to a number equal
	to or greater than the total number of Servers in the Site. Note that modifying
	this value requires adequate RAM memory resources on all the computers on which
	the modification is made. The default for this value is 10 (0xA).
	
	  HKEY_LOCAL_MACHINE\SYSTEM\CurrentControlSet\Services\MSExchangeDS
	                    \Parameters\Replicator maximum concurrent read threads
	
	WARNING: If this setting is changed, and adequate resources do not exist on the
	server, several detrimental side effects may result including: mail flow
	failure; and/or Directory, Information Store, or MTA operational intermittency
	or failure.
	
	MORE INFORMATION
	================
	
	It is important to confirm that the problem documented here is indeed the issue
	BEFORE proceeding with corrective actions. To diagnose this issue, perform the
	following:
	
	1. Determine the UUID for the Directory Synchronization Agent (DSA) on the
	  Microsoft Exchange Server which is not sending out updates.
	
	  Start the Microsoft Exchange Administrator program in raw mode (Admin.exe /r)
	  against the Microsoft Exchange Server.
	
	  Highlight the <sitename>. Configuration.Servers.<this-Server s-
	  name>.Directory Service
	
	  Select, File, Raw Properties..., and Invocation-ID. Note the first and last 4
	  characters listed in the Edit Value string. This is the UUID.
	
	2. Compare the above UUID with the replication UUID listed on one of the
	  Microsoft Exchange Servers that has not received the replicas yet.
	
	  Start the Microsoft Exchange Administrator program in raw mode against the
	  non-replicated Microsoft Exchange Server.
	
	  Highlight, <sitename>.
	
	  Select File, Raw Properties...,Reps-From.
	
	  In the Attributes Value scroll box, move the horizontal scroll bar to the far
	  right until the Microsoft Exchange Server names can be seen. Scroll through
	  the list until the servername in step 1 is found.
	
	  Double click on this entry and view Replica link.
	
	  The value in the UUID: field should be the same UUID noted in step 1. If it is
	  not, this indicates the condition documented in this article. If the UUIDs
	  match, the problem is not a result of this issue and implementing the hotfix
	  or workaround is not recommended.
	
	
	Additional query words: 1186 event ID
	
	======================================================================
	Keywords          :  
	Technology        : kbExchangeSearch kbExchange400 kbZNotKeyword2
	Version           : winnt:4.0
	
	=============================================================================
	
