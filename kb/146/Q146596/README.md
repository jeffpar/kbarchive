---
layout: page
title: "Q146596: XCLN: Cannot Open Linked Attachment in a Message"
permalink: /kb/146/Q146596/
---

## Q146596: XCLN: Cannot Open Linked Attachment in a Message

	Article: Q146596
	Product(s): Microsoft Exchange
	Version(s): WINDOWS:4.0
	Operating System(s): 
	Keyword(s): 
	Last Modified: 14-MAR-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Exchange Windows 3.x client, version 4.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	After you open a message with an attachment using the Microsoft Exchange 16- bit
	Windows client under Windows 3.1 or Windows for Workgroups 3.x, the following
	error will occur when you try to open the attachment:
	
	  \\Servername\sharename\filename.ext does not exist
	
	The same attachment can be opened by other users at different computers.
	
	CAUSE
	=====
	
	This error will occur if the attachment in the message is linked to a file that
	is on a share local to the user who sent the message. The redirector in Windows
	3.1 and WFWG 3.x cannot use UNC pathnames to local shares.
	
	For example, User1 is at a machine called USER1. A message is sent to User1 or
	placed in a public folder that is linked to the file Test.txt, which is located
	on \\USER1\Share. When User1 tries to open the attachment, the above error will
	occur. However another user at a computer named USER2 will be able to open the
	attachment.
	
	MORE INFORMATION
	================
	
	This problem only occurs when sending linked attachments. Embedded attachments
	do not point back to the shares from which they came. In the above example,
	User1 would be able open the embedded attachment even though the file originated
	on the USER1 share.
	
	WORKAROUND
	==========
	
	Windows 95 and Windows NT workstations do not have the same redirector
	limitation that Win 3.1 and WFWG 3.x have. So if a linked attachment is needed
	by all members of the organization, using Windows 95 or Windows NT would be the
	preferred method.
	
	For additional information, please see the following article(s) in the Microsoft
	Knowledge Base:
	
	  Q93260 WFWG: Cannot Connect to Local Postoffice
	
	
	Additional query words: 4.00 unc local share win3x wfwg
	
	======================================================================
	Keywords          :  
	Technology        : kbExchangeSearch kbExchange400 kbExchangeClientSearch kbZNotKeyword3
	Version           : WINDOWS:4.0
	
	=============================================================================
	
