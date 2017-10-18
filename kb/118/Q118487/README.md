---
layout: page
title: "Q118487: SMTP: Attachments Seem Corrupted or Garbled"
permalink: kb/118/Q118487/
---

## Q118487: SMTP: Attachments Seem Corrupted or Garbled

	Article: Q118487
	Product(s): Microsoft Mail For PC Networks
	Version(s): MS-DOS:2.1,3.0
	Operating System(s): 
	Keyword(s): 
	Last Modified: 30-OCT-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Mail Gateway to SMTP, versions 2.1, 3.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	Attachments of mail messages from the Microsoft Mail Gateway to SMTP may appear
	as in the body of messages and seem corrupted. They may also seem corrupted if
	you try to open them with their programs.
	
	CAUSE
	=====
	
	Attachments are coming in encoded in a format not supported by the SMTP
	Gateway.
	
	The SMTP Gateway supports the TEXT and UUENCODE formats of experimental protocol
	RFC 1154 ONLY. The uuencode used is Sun's uuencode 5.
	
	The SMTP Gateway does not support:
	
	- uuencoded files sent using the hex format instead of uuencode
	
	- AppleSingle file format
	
	- AppleDouble file format
	
	RESOLUTION
	==========
	
	Check with the message sender to ensure that attachments are uuencoded in
	accordance to RFC 1154 section 4.7 and the uuencode format, or that text
	attachments use the TEXT format.
	
	If the sender is on a Macintosh, ensure that the gateway to SMTP uuencodes the
	attachment and either uses MacBinaryII or strips off the resource fork of the
	file before sending it out.
	
	You can verify what encoding type is being received by looking at the header
	lines of the incoming message in the log file (m:\log\smtpgate.log). The
	encoding line will display the line count and format of all attachments.
	
	An example of encoding that the SMTP gateway can understand is below:
	
	  Header: Encoding: 2 TEXT, 1596 UUENCODE
	
	An example of encoding types the SMTP gateway does not understand is:
	
	  Header: Encoding: 2 TEXT, 391 HEX
	
	NOTE: The CC:Mail SMTP Gateway is configured by default to encode outgoing SMTP
	attachments in uuencode format. Turning on the uuencode option with the CC:Mail
	gateway turns on encoding using the hex format. Using the option to uuencode the
	complete message encodes the body as well as the attachment portion, rendering
	the message unreadable by MS Mail users, and (probably) by users with accounts
	on the SMTP host.
	
	MORE INFORMATION
	================
	
	Here are the definitions of text, hex, and uuencode formats from the
	experimental protocol RFC 1154 specification:
	
	4.1. Text
	
	  This indicates that the message is in no particular encoded format, but is to
	  be presented to the user as is.
	
	  The full range of the ASCII character set is used. The message is expected to
	  consist of lines of reasonable length (less than 1000 characters).
	
	  On some transport services, only the 7-bit subset of ASCII can be used. Where
	  full 8-bit transparency is available, the text is assumed to be ISO 8859-1
	  [3] (ASCII-8).
	
	4.3. Hex
	
	  The encoding indicates that the body part contains binary data, encoded as 2
	  hexadecimal digits per byte, highest significant nibble first.
	
	  Lines consist of an even number of hexadecimal digits. Blank lines are not
	  permitted. The decode process must accept lines with between 2 and 1000
	  characters, inclusive.
	
	4.7. uuencode
	
	  The uuencode keyword specifies a section consisting of the output of the
	  uuencode program supplied as part of UUCP.
	
	Additional query words: hex garbled corrupted
	
	======================================================================
	Keywords          :  
	Technology        : kbMailSearch kbMailGateSearch kbZNotKeyword3 kbMailGateSMTP300 kbMailGateSMTP210
	Version           : MS-DOS:2.1,3.0
	
	=============================================================================
	
