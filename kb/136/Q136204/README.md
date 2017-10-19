---
layout: page
title: "Q136204: XCLN: Sending Messages In Rich-Text Format"
permalink: /kb/136/Q136204/
---

## Q136204: XCLN: Sending Messages In Rich-Text Format

	Article: Q136204
	Product(s): Microsoft Exchange
	Version(s): 95
	Operating System(s): 
	Keyword(s): kbusage
	Last Modified: 02-FEB-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- the operating system: Microsoft Windows 95 
	- Microsoft Plus! for Windows 95 
	- Microsoft Exchange Server, version 5.5 
	-------------------------------------------------------------------------------
	
	
	SUMMARY
	=======
	
	The Microsoft Exchange Windows 95 client allows you to send messages through the
	Microsoft Exchange Internet Provider in rich-text format.
	
	To view rich-text attributes, the recipient must also use Microsoft Exchange or
	another messaging system that displays rich-text formatting. Messaging systems
	that do not support rich-text formatting will display messages as plain text
	without special attributes or formatting.
	
	Rich-text format attributes include:
	
	  Font name
	  Font size
	  Character color
	  Bold
	  Italic
	  Underline
	  Strikethrough
	  Bulleted lists
	
	You may want to disable rich-text formatting in messages sent to recipients whose
	e-mail systems do not decode and display these attributes.
	
	MORE INFORMATION
	================
	
	Properties Concept
	------------------
	
	By default, when you send a rich-text message using the Microsoft Exchange
	Internet Mail Provider, a MIME-encoded description of the formatting is included
	with the message. You can also send messages without MIME; this causes a special
	file to be attached called Winmail.dat. Winmail.dat is appended to the message
	in uuencoded format. This encoding includes rich-text attributes and formatting
	details for the mail message.
	
	For additional information about how to prevent sending the Winmail.dat
	attachment to Internet users when you are using the Microsoft Exchange Internet
	Mail Service, click the article number below to view the article in the
	Microsoft Knowledge Base:
	
	  Q138053 XFOR: Preventing WINMAIL.DAT Sent to Internet Users
	
	
	When a rich-text format message is sent using MIME, an entry similar to the
	following is added to the header of the message:
	
	  Mime-Version: 1.0
	  Content-Type: multipart/mixed; boundary="----
	   =_NextPart_000_01BA6275.348C1000"
	  Status: RO
	  X-STATUS
	======
	
	  ------ =_NextPart_000_01BA6275.348C1000
	  ------ =_NextPart_000_01BA6275.348C1000
	  Content-Type: text/plain; charset="us-ascii"
	  Content-Transfer-Encoding: 7bit
	
	Following the header is the message body, followed by MIME-encoded rich-text
	formatting information similar to the following:
	
	  ------ =_NextPart_000_01BA6275.348C1000
	  Content-Type: application/ms-tnef
	  Content-Transfer-Encoding: base64
	
	  eJ8+IisSAQaQCAAEAAAAAAABAAEAAQeQBgAIAAAA5AQAAAAAAADoAAENgAQAAgAAAAEAAQ
	  ABBJAGAEgBAAABAAAADAAAAAMAADACAAAACwAPDgAAAAACAf8PAQAAAHQAAAAAAAAAtTvC
	  wCx3EBqhvAgAKypWwhUAAAB2ZPLzl7rOEa5RAKoAQkrnpIAAAAAAAACBKx+kvqMQGZ1uAN
	  0BD1QCAAAAAEdyZWcgS3VkYXN6IChhdCBjcmlzLmNvbSkAU01UUABna3VkYXN6QGNyaXMu
	  Y29tAB4AAjABAAAABQAAAFNNVFAAAAAAHgADMAEAAAARAAAAZ2t1ZGFzekBjcmlzLmNvbQ
	  AAAAADABUMAQAAAAMA/g8GAAAAHgABMAEAAAAcAAAAJ0dyZWcgS3VkYXN6IChhdCBjcmlz
	  LmNvbSknAAIBCzABAAAAFgAAAFNNVFA6R0tV
	  [. . .]
	
	Alternatively, when a rich-text formatted message is sent using UUENCODE, code
	similar to the following is added to the bottom of the message:
	
	  begin 600 WINMAIL.DAT
	  M>)\^(C<.`0:0" `$```````!``$``0>0!@`(````Y 0```````#H``$%@ ,`
	  M#@```,L'" `$``<`)P`O``4`0 $!"8 !`"$````S,S5$,C,W,#%"0T-#13$Q
	  M04,S,C4R-#$U,S0X,# P,0#8!@$@@ ,`#@```,L'" `$``<`)P`V``4`1P$!
	  M"( '`!@```!)4$TN36EC<F]S;V9T($UA:6PN3F]T90`Q" $$@ $`& ```%MS
	  M;71P.F=K=61A<WI 8W)I<RYC;VU=``T)`0V ! `"`````@`"``$#D 8```$`
	  M``P```! `#D`X!.6)7ABN@$>`' ``0```!@```!;<VUT<#IG:W5D87-Z0&-R
	  [. . .]
	
	Note that the MIME encoding and WINMAIL.DAT information are not legible text.
	Only Microsoft Exchange and messaging systems compatible with rich-text
	formatting can translate the formatting details contained in the MIME encoding
	and in WINMAIL.DAT.
	
	TOGGLING RICH-TEXT FORMAT
	-------------------------
	
	The following scenarios outline when a message sent though the Internet with
	Microsoft Exchange is delivered in rich-text format.
	
	NOTE: The following examples are true for the Microsoft Exchange Internet
	Provider that ships with Microsoft Plus! for Windows 95. Other providers may
	have different defaults.
	
	New Address Book Entry
	----------------------
	
	Rich text is a property that can be set per recipient with the Internet Mail
	Provider. You can set the rich-text option in the personal address book by
	clicking New Entry from the Address Book File menu, and clicking Internet
	Address. By default, rich-text formatting is off for new entries.
	
	Adding Address Book Entry from Message
	--------------------------------------
	
	If you receive mail from a sender that is not in your personal address book, you
	can add that person by examining the details on that sender (double-click the
	sender's alias name in the From box), and clicking Add To: Personal Address
	Book. The new entry has rich-text formatting off by default for the alias you
	are creating.
	
	You can click to select the Always Send To This Recipient In Microsoft Exchange
	Rich-Text Format check box to turn on rich-text formatting for the new alias.
	This setting is used when you choose the name from the address book for both of
	the above examples.
	
	NOTE: The above two examples are true for the Microsoft Exchange Internet
	Provider that ships with Microsoft Plus! for Windows 95. Other providers may
	have different defaults.
	
	Entering Address in [smtp:user@domain.net] Format
	-------------------------------------------------
	
	Instead of choosing an alias from the personal address book, you can use one of
	two forms of "one-off addressing." One-off addressing allows you to enter an
	alias directly in the To box when you compose a message.
	
	The first form of one-off addressing is to type the address enclosed in brackets
	with the SMTP address designator. Messages addressed in this format are
	delivered in rich-text format.
	
	Example:
	
	  TO: [smtp:postmaster@company.com]
	
	Entering Address in user@domain.net Format
	------------------------------------------
	
	The second form of one-off addressing is to enter the address without enclosing
	the address in brackets. Messages addressed in this format are NOT delivered in
	rich-text format.
	
	Example:
	
	  TO: postmaster@company.com
	
	NOTE: For the above two examples, you can toggle the rich-text setting using the
	following steps:
	
	1. Click Check Names on the toolbar, or press CTRL+K.
	
	2. Double-click the alias name in the To box.
	
	3. Either click to select or click to clear the Always Send To This Recipient In
	  Microsoft Exchange Rich-Text Format check box, as applicable.
	
	Additional query words: faq
	
	======================================================================
	Keywords          : kbusage 
	Technology        : kbOSWin95 kbOSWinSearch kbExchangeSearch kbExchange550 kbGamesSearch kbZNotKeyword2 kbPlusSearch kbPlus95
	Version           : :95
	
	=============================================================================
	
