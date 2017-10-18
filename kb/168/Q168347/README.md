---
layout: page
title: "Q168347: XADM: New Mailbox Attribute in Exchange Server 5.0 and 5.5"
permalink: kb/168/Q168347/
---

## Q168347: XADM: New Mailbox Attribute in Exchange Server 5.0 and 5.5

	Article: Q168347
	Product(s): Microsoft Exchange
	Version(s): winnt:5.0,5.5
	Operating System(s): 
	Keyword(s): kbusage exc5 exc55
	Last Modified: 03-JUN-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Exchange Server, versions 5.0, 5.5 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	Mailboxes and custom recipients in Microsoft Exchange Server 5.0 have a new
	attribute, the Protocol-Settings attribute. Protocol-Settings is a roll-up of
	all the various protocols-related settings; it is a multi-valued attribute. All
	the protocol-related settings are contained in a single attribute rather than
	specifying separate attributes for each setting.
	
	
	MORE INFORMATION
	================
	
	The following is a representation of the format of each value in the multi-
	valued attribute. In this example, an S in quotation marks is used as a
	separator. The actual character used as a separator is the one called the
	"section" character (it looks like a double S):
	
	  [Protocol]"S"[Enabled?]"S"[Use Defaults?]"S"[Encoding]"S"[Default Character
	  Set]"S"[Rich Text?]
	
	The section character, used as a separator, is character code 167. Explanations
	for all the components of this value follow below.
	
	By default, this value doesn't exist on a mailbox. When any settings on the
	Mailbox object or CR object Protocols tab are changed, the value is created. The
	default values for Protocol-Settings on a Mailbox object are:
	
	  HTTP"S"1"S"1"S""S""S"
	  LDAP"S"1"S"1"S""S""S"
	  NNTP"S"1"S"1"S"3"S""S"
	  POP3"S"1"S"1"S"1"S"US-ASCII"S"0
	
	The default values for Protocol-Settings on a Custom Recipient object are the
	same as for the Mailbox object, except that there is no POP3 entry:
	
	  HTTP"S"1"S"1"S""S""S"
	  LDAP"S"1"S"1"S""S""S"
	  NNTP"S"1"S"1"S"3"S""S"
	
	[Protocol]: can be any of the following:
	
	  POP3
	  NNTP
	  LDAP
	  HTTP
	
	[Enabled?]: can be 0 or 1
	
	  0 == protocol is not enabled
	  1 == protocol is enabled
	
	[Use Defaults?]: can be 0 or 1
	
	  0 == do not use server defaults for this protocol's settings
	  1 == use server defaults for this protocol's settings
	
	[Encoding]: can be 0, 1, 2, 3, or 4. Encoding specifies how messages retrieved
	using this protocol should be encoded:
	
	  0 == messages should be MIME-encoded with both text and HTML body parts
	  1 == messages should be MIME-encoded with a text-only body part
	  2 == attachments should be UUENCODED, with Binhex encoding for Macintosh
	  attachments
	  3 == attachments should be UUENCODED (never Binhex)
	  4 == messages should be MIME with an HTML-only body part
	
	[Default Character Set]: can be any supported character set. The list of
	supported character sets can be found in the second column of the Protocol
	container's Character-Set-List attribute. To see these values, do the
	following:
	
	WARNING: Using the raw mode of the Exchange Server Administrator program (admin
	/r) incorrectly can cause serious problems that may require you to reinstall
	Microsoft Windows NT Server and/or Microsoft Exchange Server. Microsoft cannot
	guarantee that problems resulting from the incorrect use of raw mode can be
	solved. Use raw mode at your own risk.
	
	1. Start the Microsoft Exchange Server Administrator program in raw mode by
	  typing the following at a command prompt:
	
	  admin /r
	
	2. Select the Protocols container (site or server will do).
	
	3. On the File menu, click Raw Properties.
	
	4. In the Object Attributes list, select Character-Set-List
	
	5. Under Attribute Values, you'll see a two-column, "S"-separated list of
	  character sets. The values in the second column are the values that can be
	  used here. The default value is US-ASCII. Other possible values include
	  ISO-8859-1 (Western European), BIG5 (Chinese Traditional), and so on.
	
	[Rich Text?]: can be 0 or 1. Specifies whether or not messages retrieved using
	this protocol should be in Microsoft rich-text format.
	
	  0 == do not use rich text
	  1 == use rich text
	
	Additional query words:
	
	======================================================================
	Keywords          : kbusage exc5 exc55 
	Technology        : kbExchangeSearch kbExchange500 kbExchange550 kbZNotKeyword2
	Version           : winnt:5.0,5.5
	
	=============================================================================
	
