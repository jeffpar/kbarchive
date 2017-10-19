---
layout: page
title: "Q173123: XCLN: 5.0/SP1 Macintosh Client Drops Three-Letter Extension"
permalink: /kb/173/Q173123/
---

## Q173123: XCLN: 5.0/SP1 Macintosh Client Drops Three-Letter Extension

	Article: Q173123
	Product(s): Microsoft Exchange
	Version(s): WINDOWS:5.0
	Operating System(s): 
	Keyword(s): kbusage
	Last Modified: 07-JAN-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Exchange Macintosh client, version 5.0 
	-------------------------------------------------------------------------------
	
	
	SYMPTOMS
	========
	
	
	When you send an attachment from the Microsoft Exchange Macintosh client, version
	5.0 Service Pack 1, if the client does not recognize the attachment, then the
	three-letter extension (if any) will not be preserved. As a result, receiving
	Windows clients will be unable to open the attachment from the message body. If
	the attachment is saved locally from a Windows client, the Save As dialog box
	will not have a three-letter extension on the filename.
	
	WORKAROUND
	==========
	
	If you manually add the correct three-letter extension to the file after saving
	locally from a Windows client, the file executes as expected.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in Microsoft Exchange Macintosh
	Client version 5.0. This problem has been corrected in the latest U.S. Service
	Pack for Microsoft Exchange Server version 5.0. For information on obtaining the
	service pack, query on the following word in the Microsoft Knowledge Base:
	
	  " SERVPACK " (without the quotation marks)
	
	MORE INFORMATION
	================
	
	When you send an attachment from the Macintosh client, the three-letter
	extension (if any) is stripped off. The creator and type information of the file
	are examined. If there is a match in the Exchange Preferences file, Mac File
	Types list, then the associated three-letter extension is added. If there is no
	match, then the original three-letter extension is not added back, but it should
	be and is in the original 5.0 client.
	
	Next, the creator and type information are stripped from the attachment and the
	Exchange Preferences file, Windows File Types list is checked. If the attachment
	is listed here, it is encoded as MacBinary2 and sent to the information store.
	If it is not in this list, then it is sent as Application/Octet-Stream to the
	information store.
	
	Additional query words: macbinary macbinary2 application octet stream .BIN 8.3
	
	======================================================================
	Keywords          : kbusage 
	Technology        : kbHWMAC kbOSMAC kbExchangeSearch kbExchangeClientSearch kbExchange500Mac
	Version           : WINDOWS:5.0
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	
