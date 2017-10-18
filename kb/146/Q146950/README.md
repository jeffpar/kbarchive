---
layout: page
title: "Q146950: XFOR: No NDR When IMCDATA/OUT Directory Is Deleted"
permalink: kb/146/Q146950/
---

## Q146950: XFOR: No NDR When IMCDATA/OUT Directory Is Deleted

	Article: Q146950
	Product(s): Microsoft Exchange
	Version(s): winnt:4.0
	Operating System(s): 
	Keyword(s): kbother
	Last Modified: 18-MAR-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Exchange Server, version 4.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	If the IMCDATA\OUT directory is removed while the Internet Mail Connector (IMC)
	runs, messages disappear and the user is not informed that the messages are not
	delivered. However, the IMC administrator receives the "Notification: Outbound
	Mail Failure" error message.
	
	In addition, the following appears in the Event Viewer:
	
	  The following non-delivery report could not be delivered because the message
	  could not be saved From: UserX Subject: Test Message Submit Time:
	  <date> <time>
	
	CAUSE
	=====
	
	If you remove the IMCDATA\OUT directory when the IMC is running, the directory
	is re-created. The symptom above occurs if the IMCDATA\OUT directory is removed
	after the IMC has successfully started. The "Notification: Outbound Mail
	Failure" error message and the event log above indicates that the IMCDATA\OUT
	directory is missing.
	
	RESOLUTION
	==========
	
	To correct the problem, the administrator must restart the IMC only. Notify the
	users that they must send the messages again.
	
	
	Additional query words:
	
	======================================================================
	Keywords          : kbother 
	Technology        : kbExchangeSearch kbExchange400 kbZNotKeyword2
	Version           : winnt:4.0
	
	=============================================================================
	
