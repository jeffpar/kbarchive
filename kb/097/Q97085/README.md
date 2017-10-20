---
layout: page
title: "Q97085: 3COM: Mail Moves Only in One Direction"
permalink: /kb/097/Q97085/
---

## Q97085: 3COM: Mail Moves Only in One Direction

{% raw %}

	Article: Q97085
	Product(s): Microsoft Mail For PC Networks
	Version(s): 1.0
	Operating System(s): 
	Keyword(s): 
	Last Modified: 05-NOV-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Mail Gateway to 3Com 3+Mail, version 1.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	In the Microsoft Mail Gateway to 3Com 3+Mail version 1.0, mail moves from
	Microsoft Mail to 3Com 3+Mail, but does not move in the opposite direction.
	
	CAUSE
	=====
	
	One of the following can cause this error:
	
	- A message is stranded
	
	- A message is corrupted
	
	- A message has more than 99 recipients
	
	- A message is too large for the gateway to process
	
	RESOLUTION
	==========
	
	To address this problem, perform these two steps:
	
	1. Purge the process directories to remove any stranded mail. For more
	  information on this process, query in the Microsoft Knowledge Base on the
	  following words:
	
	  "3Com" (without the quotation marks) and "stranded" (without the quotation
	  marks) and "process" (without the quotation marks)
	
	2. If the problem remains, delete the first message in the queue to go from 3Com
	  3+Mail to Microsoft Mail. To perform this step, log in as a 3Com 3+Mail
	  Name/Mail administrator anywhere on the network, it is not necessary to log
	  in at the gateway PC. Use the 3Com 3M.EXE command-line utility to send the 3M
	  DEL1M command to the _GATEWAY user to delete only the oldest message. Delete
	  one file at a time to purge the gateway, then restart it. Correct the
	  problems in the deleted messages and resend them.
	
	Additional query words: 1.00
	
	======================================================================
	Keywords          :  
	Technology        : kbMailSearch kbMailGateSearch kbZNotKeyword3 kbMailGate3COM3Plus100
	Version           : :1.0
	
	=============================================================================
	

{% endraw %}
