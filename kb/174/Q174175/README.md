---
layout: page
title: "Q174175: XFOR: Some Exchange Server Non-Delivery Report Codes"
permalink: kb/174/Q174175/
---

## Q174175: XFOR: Some Exchange Server Non-Delivery Report Codes

	Article: Q174175
	Product(s): Microsoft Exchange
	Version(s): winnt:4.0 SP4
	Operating System(s): 
	Keyword(s): exc4sp4
	Last Modified: 26-JUL-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Exchange Server, version 4.0 SP4 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	The following is a list of codes that are sometimes associated with an Exchange
	Server non-delivery report (NDR). The codes are broken down into two categories:
	Reason Codes, and Diagnostic Codes, which are sometimes associated with NDR from
	the message transfer agent (MTA).
	
	Reason Codes on Non-Delivery Notifications
	------------------------------------------
	
	+--------------------------------------+
	| 0 | transfer-failure                 | 
	+--------------------------------------+
	| 1 | unable-to-transfer               | 
	+--------------------------------------+
	| 2 | conversion-not-performed         | 
	+--------------------------------------+
	| 3 | physical-rendition-not-performed | 
	+--------------------------------------+
	| 4 | physical-delivery-not-performed  | 
	+--------------------------------------+
	| 5 | restricted-delivery              | 
	+--------------------------------------+
	| 6 | directory-operation-unsuccessful | 
	+--------------------------------------+
	
	Diagnostic Codes on Non-Delivery Notifications from MTA
	-------------------------------------------------------
	
	+-------------------------------------------------------------+
	| 0  | unrecognized-OR-name                                   | 
	+-------------------------------------------------------------+
	| 1  | ambiguous-OR-name                                      | 
	+-------------------------------------------------------------+
	| 2  | MTS-congestion                                         | 
	+-------------------------------------------------------------+
	| 3  | loop-detected                                          | 
	+-------------------------------------------------------------+
	| 4  | recipient-unavailable                                  | 
	+-------------------------------------------------------------+
	| 5  | maximum-time-expired                                   | 
	+-------------------------------------------------------------+
	| 6  | encoded-information-types-unsupported                  | 
	+-------------------------------------------------------------+
	| 7  | content-too-long                                       | 
	+-------------------------------------------------------------+
	| 8  | conversion-impractical                                 | 
	+-------------------------------------------------------------+
	| 9  | implicit-conversion-prohibited                         | 
	+-------------------------------------------------------------+
	| 10 | implicit-conversion-not-subscribed                     | 
	+-------------------------------------------------------------+
	| 11 | invalid-arguments                                      | 
	+-------------------------------------------------------------+
	| 12 | content-syntax-error                                   | 
	+-------------------------------------------------------------+
	| 13 | size-constraint-violation                              | 
	+-------------------------------------------------------------+
	| 14 | protocol-violation                                     | 
	+-------------------------------------------------------------+
	| 15 | content-type-not-supported                             | 
	+-------------------------------------------------------------+
	| 16 | too-many-recipients                                    | 
	+-------------------------------------------------------------+
	| 17 | no-bilateral-agreement                                 | 
	+-------------------------------------------------------------+
	| 18 | unsupported-critical-function                          | 
	+-------------------------------------------------------------+
	| 19 | conversion-with-loss-prohibited                        | 
	+-------------------------------------------------------------+
	| 20 | line-too-long                                          | 
	+-------------------------------------------------------------+
	| 21 | page-split                                             | 
	+-------------------------------------------------------------+
	| 22 | pictorial-symbol-loss                                  | 
	+-------------------------------------------------------------+
	| 23 | punctuation-symbol-loss                                | 
	+-------------------------------------------------------------+
	| 24 | alphabetic-character-loss                              | 
	+-------------------------------------------------------------+
	| 25 | multiple-information-loss                              | 
	+-------------------------------------------------------------+
	| 26 | recipient-reassignment-prohibited                      | 
	+-------------------------------------------------------------+
	| 27 | redirection-loop-detected                              | 
	+-------------------------------------------------------------+
	| 28 | DL-expansion-prohibited                                | 
	+-------------------------------------------------------------+
	| 29 | no-DL-submit-permission                                | 
	+-------------------------------------------------------------+
	| 30 | DL-expansion-failure                                   | 
	+-------------------------------------------------------------+
	| 31 | physical-rendition-attributes-not-supported            | 
	+-------------------------------------------------------------+
	| 32 | undeliverable-mail-physical-delivery-address-incorrect | 
	+-------------------------------------------------------------+
	| 33 | undeliverable-mail-phys-deliv-office-incorrect/invalid | 
	+-------------------------------------------------------------+
	| 34 | undeliverable-mail-physical-delivery-address-incomplet | 
	+-------------------------------------------------------------+
	| 35 | undeliverable-mail-recipient-unknown                   | 
	+-------------------------------------------------------------+
	| 36 | undeliverable-mail-recipient-deceased                  | 
	+-------------------------------------------------------------+
	| 37 | undeliverable-mail-organization-expired                | 
	+-------------------------------------------------------------+
	| 38 | undeliverable-mail-recipient-refused-to-accept         | 
	+-------------------------------------------------------------+
	| 39 | undeliverable-mail-recipient-did-not-claim             | 
	+-------------------------------------------------------------+
	| 40 | undeliverable-mail-recipient-changed-addr-permanently  | 
	+-------------------------------------------------------------+
	| 41 | undeliverable-mail-recipient-changed-addr-temporarily  | 
	+-------------------------------------------------------------+
	| 42 | undeliverable-mail-recipient-changed-temporary-address | 
	+-------------------------------------------------------------+
	| 43 | undeliverable-mail-new-address-unknown                 | 
	+-------------------------------------------------------------+
	| 44 | undeliverable-mail-recipient-did-not-want-forwarding   | 
	+-------------------------------------------------------------+
	| 45 | undeliverable-mail-originator-prohibited-forwarding    | 
	+-------------------------------------------------------------+
	| 46 | secure-messaging-error                                 | 
	+-------------------------------------------------------------+
	| 47 | unable-to-downgrade                                    | 
	+-------------------------------------------------------------+
	
	+--------------------------------+
	| 253 | No Report required       | 
	+--------------------------------+
	| 254 | Per-recip failure        | 
	+--------------------------------+
	| 255 | Omit any diagnostic code | 
	+--------------------------------+
	
	Additional query words:
	
	======================================================================
	Keywords          : exc4sp4 
	Technology        : kbExchangeSearch kbZNotKeyword2 kbExchange400SP4
	Version           : winnt:4.0 SP4
	Issue type        : kbinfo
	
	=============================================================================
	
