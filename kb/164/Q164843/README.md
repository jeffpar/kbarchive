---
layout: page
title: "Q164843: XADM: Enhancement to Separate Reply Address from E-mail Address"
permalink: /kb/164/Q164843/
---

## Q164843: XADM: Enhancement to Separate Reply Address from E-mail Address

	Article: Q164843
	Product(s): Microsoft Exchange
	Version(s): 4.0
	Operating System(s): 
	Keyword(s): kbusage
	Last Modified: 25-APR-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Exchange Server, version 4.0 
	-------------------------------------------------------------------------------
	
	
	SUMMARY
	=======
	
	The ability to separate a reply address from an e-mail address is an enhancement
	to Microsoft Exchange. As originally released, changes to the reply address
	would also change the e-mail address. With this enhancement, the reply address
	can be set independently from the e-mail address.
	
	STATUS
	======
	
	This enhancement is included in the latest Microsoft Exchange Server U.S.
	Service Pack. For information on obtaining the Service Pack, query on the
	following word in the Microsoft Knowledge Base (without the spaces):
	
	  S E R V P A C K
	
	
	
	MORE INFORMATION
	================
	
	When a custom recipient is created in Microsoft Exchange, the recipient is
	considered to have one e-mail address that Microsoft Exchange will pass mail to.
	This is also referred to as the target address for the recipient. This e-mail
	address appears on the General property sheet when looking at the properties of
	the custom recipient.
	
	Microsoft Exchange supports creating additional addresses for recipients. This is
	done through the E-mail Addresses tab when you view the details of a recipient.
	This functionality gives Microsoft Exchange the ability to deliver mail to a
	user who has multiple addresses.
	
	The Microsoft Exchange Administrator program also allows a user to send mail with
	a reply address that differs from the e-mail address that Microsoft Exchange
	uses to deliver mail to this recipient. This address is selectable when there is
	more than one e-mail address of a single type. The "Set as Reply Address" button
	is used for this purpose.
	
	For additional information about fixes related to the use of multiple e-mail
	addresses and the target e-mail address, please see the following articles in
	the Microsoft Knowledge Base:
	
	  Q152501 XADM: Problem When Creating Multiple SMTP Proxy Addresses
	
	  Q157007 XADM: Secondary Proxy Address Replaces Target Address of CR
	
	NOTE: When this update has been used to modify a custom recipient, it is not
	advisable to use an older version of Microsoft Exchange Administrator to make
	changes to the same recipient addresses. The following message box may result:
	
	  Microsoft Exchange Administrator
	  An internal processing error has occurred:
	  The attribute or value exists.
	  Try restarting the Administrator program or
	  the Microsoft Exchange Server computer, or both.
	
	  Microsoft Exchange Directory
	  ID no: DS_E_ATTRIBUTE_OR_VALUE_EXISTS
	
	Additional query words: pretty proxy NDR non-delivery receipt DCR
	======================================================================
	Keywords          : kbusage 
	Technology        : kbExchangeSearch kbExchange400 kbZNotKeyword2
	Version           : 4.0
	
	=============================================================================
	
