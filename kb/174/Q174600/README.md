---
layout: page
title: "Q174600: XCON: MTA Stops Unexpectedly or Stops Transferring Messages"
permalink: /kb/174/Q174600/
---

## Q174600: XCON: MTA Stops Unexpectedly or Stops Transferring Messages

{% raw %}

	Article: Q174600
	Product(s): Microsoft Exchange
	Version(s): 5.0,5.0 SP1,5.0 SP2
	Operating System(s): 
	Keyword(s): 
	Last Modified: 31-OCT-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Exchange Server, versions 5.0, 5.0 SP1, 5.0 SP2 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	You may experience one or more of the following symptoms:
	
	- The message transfer agent (MTA) may stop unexpectedly and an event similar
	  to the following may appear in the event log:
	
	     Source: MSExchangeMTA
	     Event: 2051
	     Description: A fatal internal MTA error occurred. Contact Microsoft
	     Product Support Services. An illegal GET from element <xxxxxxxx>
	     occurred at offset <yyyy>
	
	- When you send a message with high importance, the MTA may stop transferring
	  messages. The messages you send appear in the MTA queue, but they are not
	  sent to the intended recipients.
	
	- Event ID 1097, Event ID 2124, or Event ID 2171 may appear in the application
	  log.
	
	CAUSE
	=====
	
	These problems can occur when the Dbserver.sch file that is included with
	Microsoft Exchange Server 5.0 is installed on your hard disk, even though you
	have applied Exchange Server 5.0 Service Pack 1 or Service Pack 2. This can
	occur for either of the following reasons:
	
	- When you applied Service Pack 1 or Service Pack 2, the Dbserver.sch file was
	  not updated.
	
	  -or-
	
	- When you applied Service Pack 1 or Service Pack 2, the Dbserver.sch file was
	  updated properly. However, after you applied Service Pack 1 or Service Pack
	  2, the Dbserver.sch file was replaced with the version of the file that is
	  included with Exchange Server 5.0.
	
	WORKAROUND
	==========
	
	To work around this problem, reapply Exchange Server 5.0 Service Pack 1 or
	Service Pack 2. If the problem still occurs, rename the Dbserver.sch file in the
	Exchsrvr\Mtadata folder on your hard disk, and then use one of the following
	methods to obtain a new copy of the file:
	
	Copy the Dbserver.sch file from your Service Pack 1 or Service Pack 2 (depending
	on the Service Pack you have applied) compact disc or disks to the
	Exchsrvr\Mtadata folder on your hard disk.
	
	  -or-
	
	Decompress the self-extracting Service Pack 1 or Service Pack 2 file that you
	downloaded from an online service (if you have not already done so), and then
	copy the Dbserver.sch file from the resulting Mtadata folder to the
	Exchsrvr\Mtadata folder on your hard disk. To decompress the Service Pack 1 or
	Service Pack 2 file, type "<filename> -d" (without the quotation marks) at
	a command prompt, and then press ENTER.
	
	MORE INFORMATION
	================
	
	For additional information about how to obtain Exchange Server 5.0 Service Pack
	1 or Service Pack 2, click the article numbers below to view the articles in the
	Microsoft Knowledge Base:
	
	  Q159820 XGEN: How to Obtain Exchange Server 5.0 U.S. Service Pack 1
	
	  Q168858 XGEN: How to Obtain Exchange Server 5.0 U.S. Service Pack 2
	
	
	Additional query words:
	
	======================================================================
	Keywords          :  
	Technology        : kbExchangeSearch kbExchange500 kbZNotKeyword2 kbExchange500SP1 kbExchange500SP2
	Version           : :5.0,5.0 SP1,5.0 SP2
	Issue type        : kbprb
	
	=============================================================================
	

{% endraw %}
