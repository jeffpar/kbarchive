---
layout: page
title: "Q159303: XCON: Message Sent Without Message Body Text is not Delivered"
permalink: /kb/159/Q159303/
---

## Q159303: XCON: Message Sent Without Message Body Text is not Delivered

{% raw %}

	Article: Q159303
	Product(s): Microsoft Exchange
	Version(s): winnt:4.0
	Operating System(s): 
	Keyword(s): kbusage
	Last Modified: 10-APR-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Exchange Server, version 4.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you send a mail message that has no message body from a foreign X.400
	system, it will not be delivered through Microsoft Exchange Server. The message
	may be returned to the originator with a non-delivery report (NDR). Microsoft
	Exchange server may log the following event in the Application Event Log:
	
	  Event ID: 210
	  Source: MSExchangeMTA
	  Category: X.400 Service
	  Type: Warning
	
	  Description:
	  An internal MTA error occured. Content conversion for message
	  C=country;A=ADMD;P=PRMD;L=servername failed. Conversion error 4096, object at
	  fault 060000C2, original content type 56010A00, new content type
	  2A864886F7140501. [MTA DISP FANOUT 15 112] (14)
	
	
	CAUSE
	=====
	
	If a foreign system passes a message and includes a General Text Body Part tag,
	the Microsoft Exchange message transfer agent (MTA) expects character set
	information. It is considered non-conformant to include a General Text Body Part
	without any character set information.
	
	Some systems will still send a General Text Body Part even in the absence of a
	message body, but Microsoft Exchange Server will do not do this.
	
	STATUS
	======
	
	The Microsoft Exchange MTA has been modified to assume a General Body Text type
	of IA5 in the absence of character set information.
	
	Microsoft has confirmed this to be a problem in Exchange version 4.0. This
	problem was corrected in the latest Microsoft Exchange 4.0 U.S. Service Pack.
	For information on obtaining the service pack, query on the following word in
	the Microsoft Knowledge Base (without the spaces):
	
	  S E R V P A C K
	
	
	Additional query words: non conformant message body IA5 NDR delivery
	
	======================================================================
	Keywords          : kbusage 
	Technology        : kbExchangeSearch kbExchange400 kbZNotKeyword2
	Version           : winnt:4.0
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	

{% endraw %}
