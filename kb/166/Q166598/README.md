---
layout: page
title: "Q166598: XCON: Wrong Attachment Names in Messages from Mail.D"
permalink: kb/166/Q166598/
---

## Q166598: XCON: Wrong Attachment Names in Messages from Mail.D

	Article: Q166598
	Product(s): Microsoft Exchange
	Version(s): 5.0
	Operating System(s): 
	Keyword(s): kbusage
	Last Modified: 20-FEB-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Exchange Server, version 5.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	Microsoft Exchange Server users may receive ATT.DAT attachments, when sent from
	Mail.D client software for the Mail.X X.400 system clients. The received
	attachments do not have their appropriate names assigned to them. The message
	body, consisting of the actual content, falsely gets an attachment name
	assigned. This only occurs when the message transfer is over 1984 X.400 links
	and the message body-parts are bilaterally defined.
	
	CAUSE
	=====
	
	The routine handling Mail.D messages does not correctly correlate attachments
	with their names, if the Mail.D body-part is bilaterally defined.
	
	STATUS
	======
	
	Microsoft recognizes the need for interoperability with the Mail.X X.400 system.
	This feature is included in the latest U.S. Service Pack for Microsoft Exchange
	Server version 5.0. For information on obtaining the Service Pack, query on the
	following word in the Microsoft Knowledge Base (without the spaces):
	
	  S E R V P A C K
	
	MORE INFORMATION
	================
	
	Mail.X is a 1984/1988 X.400 system developed by Siemens Nixdorf
	Informationssysteme (SNI). The 1984 client software used with Mail.X is called
	Mail.D. Mail.D users have the ability to transfer attachment filenames via a
	1984 X.400 link, using the option OCIS (Office Communication and Informat on
	System, also developed by SNI). This results in several body-parts being
	generated:
	
	- OCIS
	
	- Mail.D manifest, made up of attachment filenames (if attachments are present)
	  and the actual message body
	
	- If present ATTACHMENT (for example, Filename.txt)
	
	Microsoft engineering implemented a special routine within the MTA, for
	interoperability reasons, to handle this specific kind of message. This routine
	is responsible for two things:
	
	- Matching the attachments with their respective filenames.
	
	- Creating the message text without having the attachment names included.
	
	In rare cases, the above-mentioned body-parts are being sent as Bilateral_BP
	(BP14). Usually they are defined as IA5 or TTX (Teletex) and handled correctly,
	i.e. without the need to apply the fix discussed in this article. The following
	describes the error case and the results of the fix in more details. It is
	assumed that a message has been sent to an Exchange user containing the text
	MESSAGE_TEXT. Attached to the message is a file. Its name throughout this
	example is Filename.txt and contains the text ATTACHMENT_TEXT.
	
	In the error case, the message received on the Exchange side consists of the
	following parts:
	
	- The attachment named Filename.txt. In the error case, Filename.txt consists
	  of the actual message content, which would be MESSAGE_TEXT in our example.
	
	- A second attachment named ATT.DAT. The second attachment would always be
	  named ATT.DAT. It contains the original attachment's (Filename.txt) contents,
	  i.e. ATTACHMENT_TEXT in this example. The OCIS body-part is correctly
	  discarded.
	
	After applying the fix described herein, Exchange Server users will receive the
	message containing the attachment Filename.txt and an additional attachment
	X400.TXT. The attachment Filename.txt now contains correctly ATTACHMENT_TEXT.
	X400.TXT represents the original message containing the text MESSAGE_TEXT.
	X400.TXT cannot be converted to a specific body-part, because there is no
	indication within the original message which type of text (for example, IA5, ISO
	6937 or ISO 8859-1) the content is made up of. Using X400.TXT instead of ATT.AT
	as the second attachment' s filename allows the receiving user to double click
	the file and read its contents. Due to the fact that no further conversion can
	be performed it might be possible for the content of X400.TXT to appear
	garbled.
	
	The fix includes additional .dbg files. These files contain symbolic information
	and are not needed for normal operation of Exchange Server. However, you should
	keep these files on hand, in case Microsoft Technical Support asks you to
	install them for troubleshooting.
	
	Mail.X is manufactured by SNI, a vendor independent of Microsoft; we make no
	warranty, implied or otherwise, regarding this product's performance or
	reliability.
	
	
	Additional query words:
	
	======================================================================
	Keywords          : kbusage 
	Technology        : kbExchangeSearch kbExchange500 kbZNotKeyword2
	Version           : :5.0
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	
