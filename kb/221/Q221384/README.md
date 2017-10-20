---
layout: page
title: "Q221384: XFOR: Pickup Directory Files w/Single Period Aren't Padded Right"
permalink: /kb/221/Q221384/
---

## Q221384: XFOR: Pickup Directory Files w/Single Period Aren't Padded Right

{% raw %}

	Article: Q221384
	Product(s): Microsoft Exchange
	Version(s): winnt:2.0,4.0,5.5
	Operating System(s): 
	Keyword(s): exc55
	Last Modified: 09-OCT-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Exchange Server, version 5.5 
	- Microsoft Internet Information Server 4.0 
	- Microsoft Commercial Internet System version 2.0 
	-------------------------------------------------------------------------------
	
	
	SYMPTOMS
	========
	
	When you use Internet Information Service SMTP service to create SMTP mail by
	copying files to or creating files in the Pickup subdirectory or when you use
	the Exchange Server Internet Mail Service to create SMTP mail in the Mailroot
	directory, mail may prematurely end for the recipient.
	
	Each line after the end causes the remote system to interpret the text as a
	command and generate a "500 Command Unrecognized" error message.
	
	CAUSE
	=====
	
	The SMTP service does not explicitly ascertain whether the processed files have
	a single period on a line by itself in the message contents. Consequently, when
	a file that contains a single period on a line by itself is copied into the
	Pickup directory, the period is interpreted as the end of the message, and the
	message is truncated at the period. Each line after the period causes an error,
	which produces a "500 Command Unrecognized" error message on the remote system.
	Unless you run a network trace, the only indication of a problem is that the
	messages are truncated.
	
	WORKAROUND
	==========
	
	When you copy files to the Pickup directory, ensure any single periods are
	escaped or padded with another period (that is, when you want a period on a line
	by itself, type two periods).
	
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in the Microsoft products that are
	listed at the beginning of this article.
	
	MORE INFORMATION
	================
	
	To Reproduce the Problem:
	
	1. Stop the SMTP service:
	
	  "net stop smtpsvc" (without the quotation marks)
	
	2. In Notepad, create the following message and save it in a file called
	  Message.txt in the Pickup directory:
	
	  x-sender: Sender
	  x-receiver: user1@valid.but.unreachable.host
	  Subject: Testing.
	
	  Testing
	
	  .
	
	  Testing
	  <EOF>
	
	3. Restart the SMTP service.
	
	  "net start smtpsvc" (without the quotation marks)
	
	NOTE: The remote user will not see the second "Testing" text.
	RFC 821, Section 4.5.2 states:
	
	4.5.2.  TRANSPARENCY
	
	        Without some provision for data transparency the character
	        sequence "<CRLF>.<CRLF>" ends the mail text and cannot be sent
	        by the user.  In general, users are not aware of such
	        "forbidden" sequences.  To allow all user composed text to be
	        transmitted transparently the following procedures are used.
	
	           1. Before sending a line of mail text the sender-SMTP checks
	           the first character of the line.  If it is a period, one
	           additional period is inserted at the beginning of the line.
	
	           2. When a line of mail text is received by the receiver-SMTP
	           it checks the line.  If the line is composed of a single
	           period it is the end of mail.  If the first character is a
	           period and there are other characters on the line, the first
	           character is deleted.
	
	What occurs is that remote systems interpret the "<CRLF>.<CRLF>"
	sequence as ending the message.
	
	Note that this problem also occurs with the Pickup subdirectory of the Imcdata
	directory in Exchange Server 5.5.
	
	Additional query words:
	
	======================================================================
	Keywords          : exc55 
	Technology        : kbiisSearch kbAudDeveloper kbExchangeSearch kbExchange550 kbiis400 kbZNotKeyword2 kbMCISSearch kbMCIS200
	Version           : winnt:2.0,4.0,5.5
	Issue type        : kbbug
	Solution Type     : kbnofix
	
	=============================================================================
	

{% endraw %}
