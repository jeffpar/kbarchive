---
layout: page
title: "Q113824: SMTP: Return Receipts Sent If &quot;Return-Receipt-To&quot; Is Blank"
permalink: /kb/113/Q113824/
---

## Q113824: SMTP: Return Receipts Sent If &quot;Return-Receipt-To&quot; Is Blank

	Article: Q113824
	Product(s): Microsoft Mail For PC Networks
	Version(s): MS-DOS:3.0
	Operating System(s): 
	Keyword(s): 
	Last Modified: 05-NOV-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Mail Gateway to SMTP, version 3.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	A return receipt message is sent when the RFC 822 header "Return-Receipt- To"
	field is blank.
	
	CAUSE
	=====
	
	The gateway knows to generate a return receipt by the presence of the field
	"Return-Receipt-To" (or "Rr"). It sends the return receipt to the address in the
	"Return-Path" field which it builds from the RFC 821 "MAIL From" Address.
	
	RESOLUTION
	==========
	
	Configure the mail routing host so that a blank "Return-Receipt-To" header line
	is not generated.
	
	Additional query words: 3.00 smtp return receipt
	
	======================================================================
	Keywords          :  
	Technology        : kbMailSearch kbMailGateSearch kbZNotKeyword3 kbMailGateSMTP300
	Version           : MS-DOS:3.0
	
	=============================================================================
	
