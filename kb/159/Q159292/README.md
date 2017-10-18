---
layout: page
title: "Q159292: XADM: &quot;&#36;&quot; in DDA Value Migrated Incorrectly in X.400 PAB Entry"
permalink: kb/159/Q159292/
---

## Q159292: XADM: &quot;&#36;&quot; in DDA Value Migrated Incorrectly in X.400 PAB Entry

	Article: Q159292
	Product(s): Microsoft Exchange
	Version(s): winnt:4.0
	Operating System(s): 
	Keyword(s): kbusage
	Last Modified: 10-APR-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Exchange Server, version 4.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	After you migrate an X.400 Microsoft Mail Personal Address Book (PAB) entry that
	contains a dollar sign ($)in the DDA value field and then try to send a message
	to this address in the Microsoft Exchange client, the message may not be
	delivered. Something similar to the following is returned to the originator:
	
	  From: System Administrator
	  Sent: Tuesday, November 5, 1996 12:16 PM
	  Subject: Undeliverable: test using migrated PAB address
	
	  Your message did not reach some or all of the intended recipients.
	
	  Subject:test using migrated PAB address
	  Sent:11/5/96 12:16:08 PM
	
	  The following recipient(s) could not be reached:
	
	  'X.400' on 11/5/96 12:16:12 PM
	  The message was undelivered because the specified recipient postal address was
	  incorrect
	  MSEXCH:MSExchangeIS:SITE:SERVER
	
	CAUSE
	=====
	
	A dollar sign, which was used in Microsoft Mail to signify that the preceding
	character should not be treated as a delimiter, is not a valid character to be
	used in a DDA value, according to the CCITT (ITU) X.400 specifications (see More
	Information for more details). The preliminary check of the address by the
	Microsoft Exchange Information Store correctly uncovers the invalid character
	and returns the message to the originator as undeliverable.
	
	WORKAROUND
	==========
	
	To work around this problem:
	
	- Remove the dollar sign from all DDA values in the PAB before performing the
	  migration.
	
	  -or-
	
	- Edit the PAB in the Microsoft Exchange client after the migration process is
	  complete and remove the dollar sign.
	
	MORE INFORMATION
	================
	
	During the migration process, when the dollar sign is encountered it is replaced
	with a forward slash mark or solidus (/). For example, an address that had the
	following format in Microsoft Mail
	
	  /c=us/admd=attmail/dda.type=id/dda.value=fax(b)7135466286($/User One)
	
	is migrated as follows into the Microsoft Exchange client PAB:
	
	  /c=us/admd=attmail/dda.type=id/dda.value=fax(b)7135466286(//Pete Petree)
	
	NOTE: The Microsoft Exchange Information Store treats a single forward slash mark
	in a DDA value as delimiter; therefore, a double forward slash needs to be used
	to send the message. Please see the following for more information:
	
	  Q159291 XADM: Single Forward Slash Treated as Delimiter in DDA Value
	
	The CCITT (ITU) 1988 Blue Book X.208, Table 5 defines the Printable Character set
	as follows:
	
	  Capital letters A, .. Z
	  Small letters a, .. z
	  Digits 0, .. 9
	  Space
	  Apostrophe '
	  Left paren(
	  Right paren )
	  Plus sign+
	  Comma ,
	  Hyphen -
	  Full stop .
	  Solidus / 
	  Colon :
	  Equal sign =
	  Question mark ?
	
	A DDA value field can only contain a printable string.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in Microsoft Exchange Server 4.0.
	This problem was corrected in the latest Microsoft Exchange 4.0 U.S. Service
	Pack. For information on obtaining the service pack, query on the following word
	in the Microsoft Knowledge Base (without the spaces):
	
	  S E R V P A C K
	
	
	Additional query words: NDR solidus
	
	======================================================================
	Keywords          : kbusage 
	Technology        : kbExchangeSearch kbExchange400 kbZNotKeyword2
	Version           : winnt:4.0
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	
