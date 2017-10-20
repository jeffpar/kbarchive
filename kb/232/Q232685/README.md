---
layout: page
title: "Q232685: XADM: Error 1084 Reports Corruption in an RTF Attachment"
permalink: /kb/232/Q232685/
---

## Q232685: XADM: Error 1084 Reports Corruption in an RTF Attachment

{% raw %}

	Article: Q232685
	Product(s): Microsoft Exchange
	Version(s): winnt:5.5
	Operating System(s): 
	Keyword(s): exc55
	Last Modified: 08-JAN-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Exchange Server, version 5.5 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	A number of errors appear in the application log on the Exchange Server computer
	and contain the following information:
	
	  1084: MSExchangeIS
	
	  There is corruption in rich text format (RTF). Compressed RTF size %1.Extra
	  data: dwMagic %2. size %3, raw size %4, CRC-32 %5. Logon: %6 Message ID: %7
	  From: %8 To: %9 Cc: %10
	
	CAUSE
	=====
	
	This behavior can occur when the clients are using a utility called "Secrets for
	Windows" or a similar client-side encryption application.
	
	Secrets for Windows encrypts data at the file level, not message level. When
	these encrypted files are attached to a message and sent through Exchange Server
	to another user, Exchange Server is unable to process the message correctly
	because the RTF format attachment no longer contains the correct checksum in the
	header.
	
	RESOLUTION
	==========
	
	Exchange Server is operating by design. The attachment will still be delivered
	unaltered (remaining encrypted). The recipient will still be able to decrypt the
	attachment correctly using the Secrets for Windows application.
	
	The Event ID:1084 "RTF corruption" is reporting properly, because it is not a
	valid RTF format.
	
	MORE INFORMATION
	================
	
	For additional information regarding Secrets for Windows, please refer to the
	manufacturer's Web site at:
	
	  http://www.entegrity.co.uk/main.htm
	
	Additional query words:
	
	======================================================================
	Keywords          : exc55 
	Technology        : kbExchangeSearch kbExchange550 kbZNotKeyword2
	Version           : winnt:5.5
	Issue type        : kbprb
	
	=============================================================================
	

{% endraw %}
