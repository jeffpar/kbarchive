---
layout: page
title: "Q147034: XCLN: First Line of Inbox Message Body May Be Missing"
permalink: /kb/147/Q147034/
---

## Q147034: XCLN: First Line of Inbox Message Body May Be Missing

	Article: Q147034
	Product(s): Microsoft Exchange
	Version(s): WINDOWS:4.0,5.0
	Operating System(s): 
	Keyword(s): kb3rdparty
	Last Modified: 21-MAR-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Exchange Windows 95/98 client, versions 4.0, 5.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you display a message in the Microsoft Exchange Windows 95 client Inbox
	ReadNote form, the first line of message body may be missing. This can occur on
	messages received through Innosoft's PMDF SMTP Gateway version 5.04. This same
	message will be displayed if read with version 3.x of Microsoft Mail for PC
	Networks MS-DOS or version 3.x of Microsoft Mail for Windows.
	
	CAUSE
	=====
	
	The specified number of lines in the message header is incorrect. This results
	in the first line of the message body being put into the header and thus it is
	not displayed in the message body.
	
	MORE INFORMATION
	================
	
	When an SMTP message arrives in the gateway, it is converted from SMTP
	formatting conventions into Extended Microsoft Mail File Format (Extended MMFF).
	One of the optional extended fields in this format defines the number of lines
	that are in the header. This field is calculated incorrectly.
	
	Below is a partial example of extended MMFF formatting:
	
	Header field<         EXT:I:3:HEADLEN
	Header line count<    9
	                     TEXT:340
	HeaderLine#1<         FROM:    SMTP:WAMOZART@tinpanalley.com
	          2<
	          3<         TO:      CSI:MUSIC/BLUEGRASS/JDOUGLAS
	          4<
	          5<         SUBJECT: This is the Subject Line
	          6<
	          7<         ----------------------------------------------------
	          8<
	          9<<<       This is the first line of the Body of Text.
	          10         This is the second line of the Body of Text.
	          11         This is the third and last line of the Body of Text.
	
	As indicated in the above example, the HEADLEN (header length) field specifies
	that the header is 9 lines. The ninth line is the first line of the body of the
	message, therefore, it does not display in the body of the message. The correct
	line count for the header should be 8 (or even 7).
	
	The MSMail DOS and MSMail Windows 3.x clients ignore this field if it exists. The
	Microsoft Exchange Windows 95 Inbox, when configured using the Microsoft Mail
	provider, keys on this field's value to determine the end of the
	header\beginning of the message body.
	
	For more information about FFAPI and MMFF formats, review Q87223, Q118785 and the
	File Format API for Gateways and Applications guide from the Microsoft Mail
	Software Development Kit.
	
	
	Additional query words:
	
	======================================================================
	Keywords          : kb3rdparty 
	Technology        : kbExchangeSearch kbExchangeClientSearch kbZNotKeyword kbZNotKeyword2 kbZNotKeyword3 kbExchange400Win95 kbExchange500Win95
	Version           : WINDOWS:4.0,5.0
	
	=============================================================================
	
