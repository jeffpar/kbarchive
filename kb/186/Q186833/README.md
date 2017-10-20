---
layout: page
title: "Q186833: XADM: Internet Messages with Attachments Have Wrong Extension"
permalink: /kb/186/Q186833/
---

## Q186833: XADM: Internet Messages with Attachments Have Wrong Extension

{% raw %}

	Article: Q186833
	Product(s): Microsoft Exchange
	Version(s): WINDOWS:5.5
	Operating System(s): 
	Keyword(s): 
	Last Modified: 28-APR-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Exchange Server, version 5.5 
	-------------------------------------------------------------------------------
	
	
	SYMPTOMS
	========
	
	This issue involves a Windows 3.x messaging client opening a message containing
	attachments, which was received from the Internet. If the file names of the
	attachments originally contained no file extension, the Windows 3.x messaging
	client will display random file name extensions for the attachment file names.
	
	For example, if an attachment was sent with a file name of TESTFILE, the Windows
	3.x messaging client will see the attachment as TESTFILE.EST.
	
	CAUSE
	=====
	
	The PR_ATTACH_FILENAME MAPI property of the Internet message attachment was
	being computed improperly for attachments without extensions. Windows NT and
	Windows 95 messaging clients use the PR_ATTACH_LONG_FILENAME MAPI property,
	which was being computed properly.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in Microsoft Exchange Server
	version 5.5. This problem has been corrected in the latest U.S. Service Pack for
	Microsoft Exchange Server version 5.5. For information on obtaining the Service
	Pack, query on the following word in the Microsoft Knowledge Base (without the
	spaces):
	
	  S E R V P A C K
	
	
	Additional query words: wrong strange random extensions
	
	======================================================================
	Keywords          :  
	Technology        : kbExchangeSearch kbExchange550 kbZNotKeyword2
	Version           : WINDOWS:5.5
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	

{% endraw %}
