---
layout: page
title: "Q158646: SMS Trace and the SNMP Trap Receiver Log File"
permalink: kb/158/Q158646/
---

## Q158646: SMS Trace and the SNMP Trap Receiver Log File

	Article: Q158646
	Product(s): Microsoft Systems Management Server
	Version(s): winnt:1.2
	Operating System(s): 
	Keyword(s): kbtool kbsmsUtil smssnmp smsutil
	Last Modified: 31-JUL-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Systems Management Server version 1.2 
	-------------------------------------------------------------------------------
	
	
	SYMPTOMS
	========
	
	The Systems Management Server Trace utility does not correctly display the
	information in the Trapfltr.log file. Trapfltr.log does not follow the standard
	syntax conventions for the Systems Management Server logs. As a result, the
	Systems Management Server Trace utility may discard or improperly display log
	file information.
	
	WORKAROUND
	==========
	
	To work around this problem, use a text editor such as Notepad to open the
	Trapfltr.log file. Note that Notepad only reads the log file once, upon opening.
	In order to see updates, the file must be closed and reopened.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in Systems Management Server
	version 1.2. We are researching this problem and will post new information here
	in the Microsoft Knowledge Base as it becomes available.
	
	Additional query words: prodsms filter smstrace smstrace.exe tracer
	
	======================================================================
	Keywords          : kbtool kbsmsUtil smssnmp smsutil 
	Technology        : kbSMSSearch kbSMS120
	Version           : winnt:1.2
	
	=============================================================================
	
