---
layout: page
title: "Q176231: XADM: TEXT/PLAIN Bodyparts Discarded in Embedded Messages"
permalink: /kb/176/Q176231/
---

## Q176231: XADM: TEXT/PLAIN Bodyparts Discarded in Embedded Messages

	Article: Q176231
	Product(s): Microsoft Exchange
	Version(s): 5.0
	Operating System(s): 
	Keyword(s): 
	Last Modified: 14-MAR-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Exchange Server, version 5.0 
	-------------------------------------------------------------------------------
	
	
	SYMPTOMS
	========
	
	After you apply Microsoft Exchange Server version 5.0 Service Pack 1, TEXT/PLAIN
	bodyparts may be discarded in embedded MIME messages. Messages which may
	experience this problem will meet the following requirements:
	
	1. There are multiple text/plain bodyparts in a message body without MIME
	  encoding to indicate that they are file attachments.
	
	2. The message body containing the text/plain bodyparts is not the top- level
	  message body.
	
	All but the last text/plain bodypart may be discarded in non-top level message
	bodies.
	
	CAUSE
	=====
	
	A logic error was introduced for a fix in Microsoft Exchange Server, version 5.0
	Service Pack 1. The fix is supposed to concatenate text/plain bodyparts into the
	message body, but only for top-level messages. The logic error caused a
	mishandling of non top-level message bodies with multiple text/plain bodyparts.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in Microsoft Exchange Server
	version 5.0. This problem has been corrected in the latest U.S. Service Pack for
	Microsoft Exchange Server version 5.0. For information on obtaining the Service
	Pack, query on the following word in the Microsoft Knowledge Base (without the
	spaces):
	
	  S E R V P A C K
	
	
	MORE INFORMATION
	================
	
	Below is an example MIME message, the second MULTIPART/MIXED Content-Type will
	be treated as the the start of an embedded message in this case. Of the two
	TEXT/PLAIN Content-Type bodyparts in the embedded message below, only BodyPart
	#2 will be displayed. The text for this bodypart will appear in the message body
	of the embedded message.
	
	  Date: Tue, 16 Sep 1997 10:58:00 -0400 (EDT)
	  From: "Example"
	  Subject: Test Message
	  To: Testuser
	  Message-id: <01INPI37BQ1M054PIG@COMPANY.COM>
	  MIME-version: 1.0
	  Content-type: MULTIPART/MIXED; BOUNDARY="Boundary (ID
	LY4m2yKIDQ2Q9f6dR6UGlg)"
	
	  --Boundary (ID LY4m2yKIDQ2Q9f6dR6UGlg)
	  Content-type: TEXT/PLAIN; CHARSET=US-ASCII
	
	Enclosed you'll find a message with three bodyparts...
	
	  --Boundary (ID LY4m2yKIDQ2Q9f6dR6UGlg)
	  Content-type: MULTIPART/MIXED; BOUNDARY="Boundary (ID
	P6hOhonnruLpzicTo1sWlw)"
	
	  --Boundary (ID P6hOhonnruLpzicTo1sWlw)
	  MIME-version: 1.0
	  Content-type: TEXT/PLAIN; CHARSET=US-ASCII
	
	BodyPart #1
	
	  --Boundary (ID P6hOhonnruLpzicTo1sWlw)
	  Content-type: TEXT/PLAIN; CHARSET=US-ASCII
	
	BodyPart #2
	
	  --Boundary (ID P6hOhonnruLpzicTo1sWlw)--
	
	  --Boundary (ID LY4m2yKIDQ2Q9f6dR6UGlg)--
	
	For more information about the fix for SP1, please see the following article in
	the Microsoft Knowledge Base:
	
	  Q153464 Unexpected Text Attachment in Mail Received from Internet
	
	Microsoft has produced a fix which allows Q153464 to operate as expected and
	correctly creates text file attachments for all the non top-level text/plain
	bodyparts.
	
	
	Additional query words: foriegn 3rd party gateway rfc
	======================================================================
	Keywords          :  
	Technology        : kbExchangeSearch kbExchange500 kbZNotKeyword2
	Version           : 5.0
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	
