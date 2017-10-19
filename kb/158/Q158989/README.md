---
layout: page
title: "Q158989: XADM: Factors affecting Exchange Directory Replication Speed"
permalink: /kb/158/Q158989/
---

## Q158989: XADM: Factors affecting Exchange Directory Replication Speed

	Article: Q158989
	Product(s): Microsoft Exchange
	Version(s): 4.0,5.0,5.5
	Operating System(s): 
	Keyword(s): exc4 exc5 exc55
	Last Modified: 17-AUG-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Exchange Server, versions 4.0, 5.0, 5.5 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	This article describes some of the reasons why Microsoft Exchange Server
	Directory Replication can take longer than expected.
	
	MORE INFORMATION
	================
	
	The following are factors that could affect the speed of Directory Replication
	within Microsoft Exchange Sites as well between Sites.
	
	1. Check the Microsoft Exchange Server Message Transfer Agent(MTA) queues to
	  make sure that messages are flowing out of the queues at a reasonable rate.
	  Directory Replication between Sites is message based and if messages are not
	  flowing, Directory Replication will not take place. If the MTA is bogged down
	  with messages, this maybe be due to excessive processor load, insufficient
	  hardware, or insufficient memory, among other reasons.
	
	2. Check the load on the sending and receiving Microsoft Exchange Servers. This
	  can be done using the Windows NT Performance Monitor and looking at the
	  %Processor Time counter of the Processor Object. If the %Processor Time is
	  consistently high (above 80%) determine which process is useing most of the
	  CPU cycles.
	
	  If possible, stop the CPU intensive processes until the Directory Replication
	  is complete. Make sure that you are not running CPU intensive programs, like
	  an OpenGL screen saver (like Pipes), that may unnecessarily take up CPU
	  cycles.
	
	  It is beneficial to run Performance Monitor from a computer other than the one
	  you are monitoring. This will allow you to catch screen saver processes
	  running on the Microsoft Exchange Server computer.
	
	3. If the number of addresses being replicated is very large, do not repeatedly
	  manually request an update of all entries in the Global Address List.
	
	4. Check the replication schedule. For the purpose of getting the replication
	  done as soon as possible, it may be advisable to set the replication schedule
	  to Always.
	
	5. Check the topology of your Microsoft Exchange Organization. It may be
	  possible that changes made to the Directory take a while to propagate to all
	  parts of the Organization, if the number of intermediate hops is large.
	
	  For more information on this issue, please refer to the following Microsoft
	  Knowledge Base article:
	
	  Q148381 XADM: Directory Replication Takes Too Long
	
	Additional query words:
	
	======================================================================
	Keywords          : exc4 exc5 exc55 
	Technology        : kbExchangeSearch kbExchange500 kbExchange550 kbExchange400 kbZNotKeyword2
	Version           : :4.0,5.0,5.5
	
	=============================================================================
	
