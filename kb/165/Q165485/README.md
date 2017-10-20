---
layout: page
title: "Q165485: XFOR: MS Mail Connector requires a PRMD field in Site Addressing"
permalink: /kb/165/Q165485/
---

## Q165485: XFOR: MS Mail Connector requires a PRMD field in Site Addressing

{% raw %}

	Article: Q165485
	Product(s): Microsoft Exchange
	Version(s): winnt:4.0,5.0
	Operating System(s): 
	Keyword(s): kbusage
	Last Modified: 05-MAY-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Exchange Server, versions 4.0, 5.0 
	-------------------------------------------------------------------------------
	
	
	SYMPTOMS
	========
	
	After the Microsoft Mail Connector Interchange (MSMI) has been started, the
	following events may be repeated continuously in the event log, and messages are
	not transferred through the Microsoft Mail Connector.
	
	  Event  2335         Source    MSExchangeMSMI
	  Type   Information  Category  Session Data
	  MS Mail Connector Interchange has established an MTA session for
	  downloading messages from the Exchange server.
	
	  Event 2380          Source    MSExchangeMSMI
	  Type  Error         Category  Session Error
	  A memory access violation has occurred that prevents further processing
	  of a message. The access violation that occurred is an attempt to read
	  from 0x4. Please refer to the immediately following event(s) logged by
	  MS Mail Connector Interchange for more information on the message that
	  could not be processed.
	
	Another symptom may be failure during installation of the MSMail Connector. The
	following error:
	
	  The MS Mail Connector failed to install properly.
	
	may be followed by:
	
	  An internal processing error has occurred: constraint violation. The
	  value specified for an attribute is either too big, too small, or not
	  valid. Microsoft Exchange Directory ID no: DS_E_CONSTRAINT_VIOLATION.
	
	CAUSE
	=====
	
	The MSMI requires a value in the PRMD (Private Resource Management Domain) field
	to operate correctly. If the X.400 Site Addressing value has a blank PRMD, the
	above symptoms will occur.
	
	WORKAROUND
	==========
	
	To work around this problem:
	
	1. Set a "dummy" value in the PRMD field for the X.400 Site Addressing.
	
	2. Even with a PRMD value set in the Site Addressing field, users need not have
	  a PRMD defined in their X.400 Proxy. Modify the X.400 proxy addresses either
	  manually or by using the Directory Import/Export program.
	
	For more information on using Directory Import/Export, please see the following
	Microsoft Knowledge Base article:
	
	  Q155414 XADM: Bulk Import/Export FAQ
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in Microsoft Exchange Server
	versions 4.0 and 5.0. We are researching this problem and will post new
	information here in the Microsoft Knowledge Base as it becomes available.
	
	
	======================================================================
	Keywords          : kbusage 
	Technology        : kbExchangeSearch kbExchange500 kbExchange400 kbZNotKeyword2
	Version           : winnt:4.0,5.0
	Issue type        : kbbug
	
	=============================================================================
	

{% endraw %}
