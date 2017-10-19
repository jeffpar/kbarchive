---
layout: page
title: "Q182618: XADM: Cannot Log On Using IMAP4 If WinNT Locale Set to Swedish"
permalink: /kb/182/Q182618/
---

## Q182618: XADM: Cannot Log On Using IMAP4 If WinNT Locale Set to Swedish

	Article: Q182618
	Product(s): Microsoft Exchange
	Version(s): 5.5
	Operating System(s): 
	Keyword(s): 
	Last Modified: 09-JAN-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Exchange Server, version 5.5 
	-------------------------------------------------------------------------------
	
	
	SYMPTOMS
	========
	
	An IMAP4 e-mail client cannot log on to a Microsoft Exchange Server 5.5 computer
	if the Windows NT default locale is set to Swedish. (The default locale is set
	in the Control Panel Regional Settings.)
	
	If you enable protocol logging for IMAP4, you will see that the IMAP4 session
	fails when the client issues the LOGIN command:
	
	  01/26/1998 17:31:43.079     (TID:141): IMAP connection accepted from
	  157.58.35.128
	  01/26/1998 17:31:43.139 >>> (TID:141): * OK Microsoft Exchange IMAP4rev1
	  Server Ready
	  01/26/1998 17:34:05.003 <<< (TID:141): 1 LOGIN U116BIT password
	  01/26/1998 17:34:05.193 >>> (TID:141): 1 NO
	
	However, if the Windows NT locale is set to English, the same login will work
	correctly:
	
	  01/26/1998 16:54:39.267     (TID:140): IMAP connection accepted from
	  157.58.35.128
	  01/26/1998 16:54:39.267 >>> (TID:140): * OK Microsoft Exchange IMAP4rev1
	  server version 5.5.2147.0 (JUNWIN03) ready
	  01/26/1998 16:54:55.370 <<< (TID:140): 1 LOGIN U116BIT PASSWORD
	  01/26/1998 16:54:55.520 >>> (TID:140): 1 OK LOGIN completed.
	
	
	CAUSE
	=====
	
	The Exchange Information Store service does not correctly handle the IMAP4
	responses to the client if the locale is not set to English, French, German, or
	Japanese.
	
	
	WORKAROUND
	==========
	
	To work around this problem, set the locale to English, French, German, or
	Japanese. If that is not possible, a fix for this problem is now available.
	
	NOTE: After you apply this fix, portions of the return message will be in the
	same language as the Windows NT locale.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in Microsoft Exchange Server
	version 5.5. This problem has been corrected in the latest U.S. Service Pack for
	Microsoft Exchange Server version 5.5. For information about obtaining the
	Service Pack, query on the following word in the Microsoft Knowledge Base
	(without the spaces):
	
	  S E R V P A C K
	
	
	
	Additional query words: MSExchangeIS language WszFromMsgid
	
	======================================================================
	Keywords          :  
	Technology        : kbExchangeSearch kbExchange550 kbZNotKeyword2
	Version           : :5.5
	Issue type        : kbprb
	Solution Type     : kbfix
	
	=============================================================================
	
