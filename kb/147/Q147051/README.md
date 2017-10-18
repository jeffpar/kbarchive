---
layout: page
title: "Q147051: XFOR: IMC Queue Only Displays the First 10,000 Items"
permalink: kb/147/Q147051/
---

## Q147051: XFOR: IMC Queue Only Displays the First 10,000 Items

	Article: Q147051
	Product(s): Microsoft Exchange
	Version(s): winnt:4.0
	Operating System(s): 
	Keyword(s): kbusage
	Last Modified: 19-MAR-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Exchange Server, version 4.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	The Internet Mail Connector (IMC) queue pages in the Microsoft Exchange
	Administrator program display only the first 10,000 messages.
	
	CAUSE
	=====
	
	This is by design. The queue list is displayed in First-In-First-Out (FIFO) with
	a limit of 10,000 items.
	
	One way to determine the number of messages in the queue is to select all the
	messages and press the Delete key. In Exchange Administrator, the "Are you sure
	you want to delete all <number> selected messages?" message appears, where
	<number> is the total number of messages in the queue. Click No so that
	you do not delete the messages.
	
	MORE INFORMATION
	================
	
	All incoming and outgoing messages are stored in the IMCDATA\IN and IMCDATA\OUT
	subdirectories under the Microsoft Exchange Server root directory. When these
	messages are moved out of the queue, new messages are added to the queue.
	
	To determine an accurate number of incoming and outgoing messages, do the
	following:
	
	1. Run File Manager and locate the root directory of the Microsoft Exchange
	  Server.
	
	2. Select the IMCDATA subdirectory. Select either the IN or OUT subdirectory
	  (matches queue names).
	
	3. The status bar displays "Total <number> file(s)", where <number>
	  is the total number of files.
	
	4. Subtract the number of subdirectories from the number of files. This results
	  in the number of messages in the directory.
	
	
	Additional query words: remove
	
	======================================================================
	Keywords          : kbusage 
	Technology        : kbExchangeSearch kbExchange400 kbZNotKeyword2
	Version           : winnt:4.0
	
	=============================================================================
	
