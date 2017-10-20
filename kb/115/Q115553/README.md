---
layout: page
title: "Q115553: MHS: Backboning Microsoft Mail over MHS"
permalink: /kb/115/Q115553/
---

## Q115553: MHS: Backboning Microsoft Mail over MHS

{% raw %}

	Article: Q115553
	Product(s): Microsoft Mail For PC Networks
	Version(s): MS-DOS:3.0
	Operating System(s): 
	Keyword(s): 
	Last Modified: 09-NOV-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Mail Gateway to MHS, version 3.0 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	Version 3.0 of Microsoft Mail Gateway to MHS can backbone Microsoft Mail over
	MHS, which enables automatic encapsulation of messages, including those
	containing OLE objects, something not normally available over MHS. Encapsulation
	passes OLEs through seamlessly and works around the fact that MHS messages are
	text-based.
	
	Backboning works only between Microsoft Mail postoffices defined as indirect
	through MHS and with address mapping set up. When backboning is enabled, all
	users appear to be normally defined Microsoft Mail users, even though the
	transport between sites is MHS.
	
	It also has the offset advantage of allowing directory synchronization messages
	to be sent through MHS, even though to MHS the recipient is invalid.
	
	MORE INFORMATION
	================
	
	Messages are sent from the Microsoft Mail user to the gateway in the Microsoft
	Mail format. Normally, the gateway would read the header of the message into the
	MHS format, it would read the body into the body of the MHS message, and it
	would note any attachments. With encapsulation, the header is read to get the
	sender and recipient details. The sender is changed to $Encaps@Gateway and the
	recipient is changed to User1@gateway. The Microsoft Mail message format is
	maintained by making the message an attachment to the MHS message.
	
	A Standard MHS Message
	----------------------
	
	  SMF-70
	  230Sender: joeblogs@acmecorp {ACME/CORP/JOEBLOGS}
	  Send-to: elvisp@gracelan {MEMPHIS/GRACELAND/ELVISP}
	  20MCB-options: NNYNANA
	  200Message-encoding: IBM-8202
	  From: joeblogs@acmecorp {ACME/CORP/JOEBLOGS}
	  To: elvisp@gracelan {MEMPHIS/GRACELAND/ELVISP}
	  Subject: This is the Header
	  Date: 07-May-93 13:10
	  Importance: Normal
	
	The Body
	--------
	
	  SMF 70--the Simple Message Format the message was transmitted in.
	  joeblogs@acmecorp {ACME/CORP/JOEBLOGS} The sender--an MS Mail user.
	  230Sender: The sender. Field not displayable. Same as the From Line. Send-to:
	  Is the Recipient. Same as the To: line The section following is the
	  unencrypted body of the message.
	
	Compared to an Encapsulated Message Body
	----------------------------------------
	
	  SMF-70
	  230Sender: joeblogs@acmecorp {ACME/CORP/JOEBLOGS}
	  Send-to: User1@gracelan {MEMPHIS/GRACELAND/ELVISP}
	  20MCB-options: NNYNANA
	  Attachment: ANBFAGAM
	  Attachment-name: 000006AA.ENC
	  200Message-encoding: IBM-8202
	  From: $Encaps@acmecorp {ACME/CORP/JOEBLOGS}
	  To: User1@gracelan {MEMPHIS/GRACELAND/ELVISP}
	  Subject: This is the header
	  Date: 07-May-93 13:14
	  Attachment-date: 07-May-93 13:14
	  Importance: Normal
	
	An Encapsulated Message
	-----------------------
	
	  SMF 70 refers to the Simple Message Format the message was transmitted in.
	  joeblogs@acmecorp {ACME/CORP/JOEBLOGS} Is the sender--an MS Mail user.
	  230Sender: Is the sender. This field is not displayable.
	  Send-to: Is the Recipient.
	  Attachment: Name of the attachment in the corresponding attachment directory.
	  Attachment-name: The name in MS-DOS of the attachment file.
	  Attachment-date: The Date of the attachment.
	  From: Note how the user's address differs from the nondisplayable 230Sender
	  address.
	  To: Note how the user's address differs from the nondisplayable Send-To
	  address.
	  The body of the message contains the note "This is an encapsulated message"
	  signifying a small mystery, now solved.
	
	REFERENCES
	==========
	
	Pages 35-41 in the "Gateway to MHS Administrator's Guide."
	
	Additional query words: 3.00
	
	======================================================================
	Keywords          :  
	Technology        : kbMailSearch kbMailGateSearch kbZNotKeyword3 kbMailGateMHS300
	Version           : MS-DOS:3.0
	
	=============================================================================
	

{% endraw %}
