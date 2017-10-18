---
layout: page
title: "Q257264: XFOR: Internet Mail Service NDR &quot;Message Exceeded Size Limit&quot;"
permalink: kb/257/Q257264/
---

## Q257264: XFOR: Internet Mail Service NDR &quot;Message Exceeded Size Limit&quot;

	Article: Q257264
	Product(s): Microsoft Exchange
	Version(s): winnt:5.5
	Operating System(s): 
	Keyword(s): exc55
	Last Modified: 23-OCT-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Exchange Server, version 5.5 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you send a message that is over the size limit that is configured on the
	Internet Mail Service, the following non-delivery report (NDR) may be
	generated:
	
	  Your message did not reach some or all of the intended recipients.
	
	  Subject: FW: test
	  Sent: 3/11/00 4:04:49 PM
	
	  The following recipient(s) could not be reached:
	
	  user@test.com on 3/11/00 4:05:00 PM
	  A syntax error was detected in the content of the message
	
	  The MTS-ID of the original message is:
	  c=US;a=IBMX400;p=ORG;l=Server-000312000449Z-48391
	  MSEXCH:IMS:ORG:Site:Server 3903 (000B099C) Message exceeds size limit.
	
	CAUSE
	=====
	
	This issue can occur if a size restriction has been set on the Internet Mail
	Service. You can configure this setting for each domain by clicking "Specify by
	E-Mail Domain" on the Connections tab of the Internet Mail Service that is
	generating the NDR.
	
	MORE INFORMATION
	================
	
	
	For more information, see the following section in Chapter 11 of the Exchange
	Server Administrator's Guide:
	
	  
	
	  Specifying the Maximum Message Size
	  -----------------------------------
	
	  You can configure the maximum size of messages transported through the
	  Internet Mail Connector using the General property page. This is useful when
	  you do not want users sending messages with large attachments that might
	  affect performance. This setting applies to both inbound and outbound
	  messages. If the message size is exceeded, the message will be returned to
	  the sender with an NDR.
	
	  You can restrict message size by e-mail domain. For outbound messages, the
	  maximum message size in the General property page is applied before the
	  maximum message size specified by the domain.
	
	  NOTE: Message size should not be restricted when using the Internet Mail
	  Connector as a site connector. This is to ensure that system messages used
	  for directory replication and information store updates are not prevented
	  from passing through the Internet Mail Connector.
	
	  1. Select the General tab.
	
	  2. In the "Message size" box, select an option.
	
	  +---------------------------------------------------------+
	  | Option      | Description                               | 
	  +---------------------------------------------------------+
	  | No limit    | Send an inbound message of any size       | 
	  +---------------------------------------------------------+
	  | Maximum (K) | Specify a number between 1 and 9,999,999K | 
	  +---------------------------------------------------------+
	
	Additional query words:
	
	======================================================================
	Keywords          : exc55 
	Technology        : kbExchangeSearch kbExchange550 kbZNotKeyword2
	Version           : winnt:5.5
	Issue type        : kbprb
	
	=============================================================================
	
