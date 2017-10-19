---
layout: page
title: "Q275477: XADM: Determining Attachment Long File Names w. Outlook 2000"
permalink: /kb/275/Q275477/
---

## Q275477: XADM: Determining Attachment Long File Names w. Outlook 2000

	Article: Q275477
	Product(s): Microsoft Exchange
	Version(s): 5.5
	Operating System(s): 
	Keyword(s): exc55
	Last Modified: 23-OCT-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Exchange Server, version 5.5 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	Mdbvu32 is a utility that allows you to view a Messaging Application Programming
	Interface (MAPI) based mailbox store. This article describes how to use Mdbvu32
	to view the actual long file name of attachments.
	
	When you preview attachment names in Microsoft Outlook 2000 (or other Microsoft
	Exchange Client programs), the file name is truncated to 8.3 notation.
	
	In certain cases, you may need to determine the name of the attachment before you
	open or save the attachment, for example, if a virus infection occurs where the
	virus is in the form of an executable attachment. Some worm viruses have
	exploited this fact by using multiple extensions (for example,
	wrmvirus.txt.vbs). Because the .vbs extension is truncated, the file is
	displayed by the name wrmvirus.txt, and the user may not realize that by opening
	the attachment the user may execute malicious code.
	
	MORE INFORMATION
	================
	
	To determine the long file name of message attachments using Mdbvu32:
	
	1. Make sure that a client profile is configured for the mailbox that you want
	  to view. If you currently have a profile, create a new one.
	
	  NOTE: You must have rights to log on to the mailbox that you want to open.
	
	2. At a command prompt, type "mdbvu32.exe" (without the quotation marks).
	
	3. Leave the uIUIParam as the default of NULL, and then click OK.
	
	4. Click the client profile that is mentioned in step 1, and then click OK. The
	  MDB Viewer Test Application dialog box is displayed.
	
	5. On the MDB menu, click OpenMessageStore.
	
	6. A list of MAPI stores that the client has access to is displayed. Click the
	  mailbox that has the name of the client, and then click Open.
	
	7. The dialog box disappears and you are returned to the main window.
	
	8. On the MDB menu, click Open IPM Subtree.
	
	9. In the Child Folders list, double-click the Inbox. A list of the messages
	  that the folder contains is displayed in the Messages in Folder list.
	  Double-click the message that contains the attachment that you want to view.
	
	10. A list of attachments is displayed (numbered beginning at zero).
	  Double-click the first attachment.
	
	11. The default operation available is Attachment Properties. While this option
	  is selected, scroll down the Attachment Properties list until you see the
	  PR_ATTACH_LONG_FILENAME property. In the third column, the file name of the
	  attachment that you are viewing is displayed.
	
	12. If there are multiple attachments in the message, and this attachment is not
	  the attachment that you are looking for, repeat steps 9 through 11 until you
	  find the long file name information that you are looking for.
	
	Additional query words: worm virus exmerge
	
	======================================================================
	Keywords          : exc55 
	Technology        : kbExchangeSearch kbExchange550 kbZNotKeyword2
	Version           : :5.5
	Issue type        : kbhowto
	
	=============================================================================
	
