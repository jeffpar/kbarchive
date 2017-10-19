---
layout: page
title: "Q152166: XFOR: Attachment Name Truncated When Name Contains a Period"
permalink: /kb/152/Q152166/
---

## Q152166: XFOR: Attachment Name Truncated When Name Contains a Period

	Article: Q152166
	Product(s): Microsoft Exchange
	Version(s): winnt:4.0,5.0
	Operating System(s): 
	Keyword(s): kbusage
	Last Modified: 27-MAR-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Exchange Server, versions 4.0, 5.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you send a message into the Microsoft Exchange Internet Mail Connector
	(IMC) or Internet Mail Service (IMS), and the message contains an attachment
	with a name that contains a period and the content-type has an entry in the MIME
	TYPES field, the attachment name gets truncated.
	
	For example, here is a sample of header information:
	
	   ...
	   Content-Type: application/vnd.ms-excel; name="Excel 4.0 Test"
	   ...
	
	Application/vnd.ms-excel means that xls is added to MIME TYPES.
	
	When the attachment is received in the client, the attachment name is "Excel
	4.xls."
	
	CAUSE
	=====
	
	When the IMC or IMS receives a message, it attempts to match the Content- Type
	in the header to the MIME Types list. If a match is found, the appropriate .3
	extension is added to the name if it does not already exist.
	
	WORKAROUND
	==========
	
	To work around this problem:
	
	1. Remove the associated Content-Type from the MIME Types property page. This
	  will prevent the attachment from being associated with the specified
	  extension but will allow the entire attachment name to stay intact.
	
	2. To view the MIME Types tab in Microsoft Exchange Server 5.0, go to the
	  Protocols Object (Site or Server). On the File menu, click Properties; MIME
	  Types will be the last tab.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in Microsoft Exchange versions 4.0
	and 5.0.
	
	We are researching this problem in Microsoft Exchange version 4.0 and will post
	new information here in the Microsoft Knowledge Base as it becomes available.
	
	This problem was corrected in the latest Microsoft Exchange 5.0 Server U.S.
	Service Pack. For information on obtaining the service pack, query on the
	following word in the Microsoft Knowledge Base (without the spaces):
	
	  S E R V P A C K
	
	Additional query words:
	
	======================================================================
	Keywords          : kbusage 
	Technology        : kbExchangeSearch kbExchange500 kbExchange400 kbZNotKeyword2
	Version           : winnt:4.0,5.0
	
	=============================================================================
	
