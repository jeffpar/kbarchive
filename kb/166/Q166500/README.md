---
layout: page
title: "Q166500: XCLN: Windows 3.x Client Can't Fully Display or Save Large Msgs"
permalink: kb/166/Q166500/
---

## Q166500: XCLN: Windows 3.x Client Can't Fully Display or Save Large Msgs

	Article: Q166500
	Product(s): Microsoft Exchange
	Version(s): WINDOWS:4.0,5.0
	Operating System(s): 
	Keyword(s): kbusage
	Last Modified: 08-MAY-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Exchange Windows 3.x client, versions 4.0, 5.0 
	-------------------------------------------------------------------------------
	
	
	SYMPTOMS
	========
	
	The Microsoft Exchange Windows 3.x client cannot fully display, or save to a
	disk file, messages containing large bodies of text. When you attempt to read
	such a message, the following error message appears:
	
	  You've exceeded the maximum amount of text.
	
	Attempts to forward or reply to the message will result in a truncated message
	being delivered to the recipient, and when sending, produces the following error
	messages:
	
	  The object could not be inserted. The action could not be completed.
	
	  The object could not be inserted. The message body is full. To avoid
	  overwriting the original text, the original message header may be only
	  partially added.
	
	When you select the message to highlight it, click Save As, and specify "text"
	and a target filename, the process is completed without error. However, the
	message content in the target file is truncated.
	
	CAUSE
	=====
	
	The Microsoft Exchange Windows 3.x client uses a 16-bit implementation of the
	RichEdit control (Riched.dll) for manipulating the contents of the MAPI
	property, PR_BODY, which includes the body text of the message. The Windows 3.x
	client RichEdit control has a limit of holding a maximum of 65,535 hard line
	breaks.
	
	WORKAROUND
	==========
	
	To work around this problem, do one of the following:
	
	- Use the Microsoft Exchange Windows 95 client, the Microsoft Exchange Windows
	  NT client, or the Microsoft Outlook client to view messages with large text
	  bodies.
	
	  -or-
	
	- Use a POP3 client accessing a computer running Microsoft Exchange Server 5.0
	  configured to support POP3 mail retrieval. The POP3 client can retrieve the
	  message in full. This is true of the POP3 mail client included with Microsoft
	  Internet Explorer 3.0 for Windows 3.x.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in Microsoft Exchange Windows 3.x
	client version 4.0. We are currently researching this problem and will post more
	information here in the Microsoft Knowledge base as it becomes available.
	
	Microsoft has confirmed this to be a problem in Microsoft Exchange Windows 3.x
	client version 5.0. This problem has been corrected in the latest U.S. Service
	Pack for Microsoft Exchange Server version 5.0. For information on obtaining the
	Service Pack, query on the following word in the Microsoft Knowledge Base
	(without the spaces):
	
	  S E R V P A C K
	
	
	MORE INFORMATION
	================
	
	With the fix applied, a modification is made to WMSUI.DLL so that it reports the
	following error Microsoft when you a Save a message as text and the message has
	a large text body that exceeds the RICHEDIT limit:
	
	  The item(s) could not be saved. You've exceeded the maximum amount of text.
	
	Although this doesn't address the core problem, it does ensure that you are
	informed of the problem when you save a large message as text.
	
	
	Additional query words: Win16
	
	======================================================================
	Keywords          : kbusage 
	Technology        : kbExchangeSearch kbExchange500 kbExchange400 kbExchangeClientSearch kbZNotKeyword3
	Version           : WINDOWS:4.0,5.0
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	
