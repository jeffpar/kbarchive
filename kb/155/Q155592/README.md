---
layout: page
title: "Q155592: XFOR: MSMI Message Tracking Does Not Log Message Size"
permalink: /kb/155/Q155592/
---

## Q155592: XFOR: MSMI Message Tracking Does Not Log Message Size

	Article: Q155592
	Product(s): Microsoft Exchange
	Version(s): winnt:4.0,5.0
	Operating System(s): 
	Keyword(s): kbusage
	Last Modified: 03-APR-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Exchange Server, versions 4.0, 5.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	The Microsoft Exchange Server Microsoft Mail Connector interchange (MSMI) does
	not log message sizes in the message tracking log files.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in Microsoft Exchange Server
	versions 4.0 and 5.0. This problem was corrected in the latest Microsoft
	Exchange Server 4.0 and 5.0 U.S. Service Packs. For information on obtaining the
	service pack, query on the following word in the Microsoft Knowledge Base
	(without the spaces):
	
	  S E R V P A C K
	
	MORE INFORMATION
	================
	
	When message tracking is enabled, tracking log files are written to an
	Exchsrvr\<Tracking number>.log file.
	
	The tracking logs are tab delimited text files that are best displayed in
	Microsoft Excel. The file name of each tracking log corresponds to the date of
	messages tracked for that particular log file. For example, if a message was
	sent through the MSMI on March 24, 1997, and message tracking was enabled, a
	tracking log file would have been created with the following file name:
	
	  19970324.log
	
	The component that logs a particular entry in the message tracking log is located
	in the fourth column (column D in Microsoft Excel). For the MSMI, the component
	name looks similar to the following:
	
	  /o=MSFT/ou=Guitars/cn=configuration/cn=connections
	  /cn=MS Mail Connector (Strat)
	
	The message size should be logged in the ninth column (column I in Microsoft
	Excel). The message size logged for any message going through the MSMI will be 0
	bytes.
	
	Additional query words:
	
	======================================================================
	Keywords          : kbusage 
	Technology        : kbExchangeSearch kbExchange500 kbExchange400 kbZNotKeyword2
	Version           : winnt:4.0,5.0
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	
