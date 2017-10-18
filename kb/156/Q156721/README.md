---
layout: page
title: "Q156721: XCLN: Double-Clicking an Attachment Might Open New Message"
permalink: kb/156/Q156721/
---

## Q156721: XCLN: Double-Clicking an Attachment Might Open New Message

	Article: Q156721
	Product(s): Microsoft Exchange
	Version(s): WINDOWS:4.0
	Operating System(s): 
	Keyword(s): kbusage
	Last Modified: 13-JAN-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Exchange Macintosh client, version 4.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you double-click on a file attachment in the Microsoft Exchange Macintosh
	client, it might open a new message and insert the attachment into the new
	message.
	
	CAUSE
	=====
	
	This will occur if the Microsoft Exchange Macintosh client does not recognize
	the file attachment. This happens when the attachment does not have a Mac
	creator or type, or there is no mapping from the file extension, creator, or
	type. The unrecognized file attachment will be stamped with a creator of 'EXCH'
	and a type of 'XCAT' and this will cause the Microsoft Exchange Macintosh client
	to open a new message.
	
	WORKAROUND
	==========
	
	To correct this problem, use a program such as ResEdit or the shareware Snitch
	More Info plug-in to reset the creator to '----' and the type to '????' on all
	saved attachments. This will prevent the Microsoft Exchange Macintosh client
	from starting when these documents are clicked.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in the Microsoft Exchange clients,
	version 4.0, listed at the beginning of this article. This problem was corrected
	in Microsoft Exchange Server 4.0 U.S. Service Pack 4. For information on
	obtaining the service pack, query on the following word in the Microsoft
	Knowledge Base:
	
	  " SERVPACK" (without the quotation marks)
	
	
	MORE INFORMATION
	================
	
	This fix corrects the reported problems for all attachments received after this
	version of the Microsoft Exchange Macintosh client is installed. It will not fix
	this problem for attachments received and saved prior to the installation of
	this fix.
	
	
	Additional query words: compose note
	
	======================================================================
	Keywords          : kbusage 
	Technology        : kbHWMAC kbOSMAC kbExchangeSearch kbExchangeClientSearch kbExchange400Mac
	Version           : WINDOWS:4.0
	
	=============================================================================
	
