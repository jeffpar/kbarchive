---
layout: page
title: "Q168138: XFOR: IMC Setup for Non-MIME Inbound Japanese SMTP Mail"
permalink: kb/168/Q168138/
---

## Q168138: XFOR: IMC Setup for Non-MIME Inbound Japanese SMTP Mail

	Article: Q168138
	Product(s): Microsoft Exchange
	Version(s): WinNT:4.0,5.0
	Operating System(s): 
	Keyword(s): kbsetup
	Last Modified: 06-MAY-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Exchange Server, versions 4.0, 5.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	This problem occurs with Non-MIME inbound SMTP mail messages using the Japanese
	Industry Standard (JIS) character set. The mail messages may not be readable in
	the Japanese Exchange Client if the Exchange Server computer with the Internet
	Mail Connector (IMC) is the English version.
	
	WORKAROUND
	==========
	
	This workaround assumes that unreadable mail messages are from the domain JP.
	However, the following steps can be applied to any domains that send non-MIME
	outbound SMTP mail using JIS character set.
	
	1. Click the Internet Mail tab in the IMC.
	
	2. Click the E-Mail Domain to create a new entry.
	
	3. Specify JP as the E-Mail Domain.
	
	4. Set JIS for Non-MIME Character Set Translation.
	
	MORE INFORMATION
	================
	
	For additional information on how Microsoft Exchange Server can support
	Microsoft Exchange clients running on different language operating systems,
	please see the following article in the Microsoft Knowledge Base:
	
	  Q151701 How to Manually Add Code Pages for Mixed Languages
	
	Additional query words: kbjapan
	
	======================================================================
	Keywords          : kbsetup 
	Technology        : kbExchangeSearch kbExchange500 kbExchange400 kbZNotKeyword2
	Version           : WinNT:4.0,5.0
	
	=============================================================================
	
