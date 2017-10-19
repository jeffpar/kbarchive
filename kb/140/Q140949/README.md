---
layout: page
title: "Q140949: XCLN: Faxing ASCII Messages Fails Due to Corrupted Phone #"
permalink: /kb/140/Q140949/
---

## Q140949: XCLN: Faxing ASCII Messages Fails Due to Corrupted Phone #

	Article: Q140949
	Product(s): Microsoft Exchange
	Version(s): 4.0
	Operating System(s): 
	Keyword(s): kbusage
	Last Modified: 13-MAR-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Exchange Windows 3.x client, version 4.0 
	- Microsoft Mail for PC Networks, version 3.x 
	- Microsoft Mail Gateway to Fax, version 3.0a 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	The Microsoft Exchange 16-bit Windows client generates an incorrect phone number
	when you send faxes to the Mail Gateway to Fax. The sender will receive a mail
	failure message from the Administrator stating that the fax was addressed to an
	unknown fax number.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in the Microsoft Exchange Windows
	3.x client version 4.0, when using the Microsoft Mail Gateway to Fax. This
	problem was corrected in Microsoft Exchange Server 4.0 U.S. Service Pack 2. For
	information on obtaining the service pack, query on the following word in the
	Microsoft Knowledge Base (without the spaces):
	
	  S E R V P A C K
	
	NOTE: The MSFS.DLL file contains the fix.
	
	MORE INFORMATION
	================
	
	The mail failure message the sender receives is similar to the following:
	
	From: Administrator
	Sent: Tuesday, May 14, 1996 6:34PM
	To: John Doe
	Subject: Mail failure
	
	FROM: Administrator
	TO: John Doe
	                                           DATE: 05-14-96
	                                           TIME: 18:34
	SUBJECT: Mail failure
	
	Fax addressed to the following unknown FAX NUMBER:
	 FAX NUMBER: JohnYYBPYYMicrosoftYY45811YY
	
	------------------------------------------------------
	
	Microsoft Mail v3.0 (MAPI 1.0 Transport) IPM.Microsoft Mail.Note
	From: John Doe
	To:  '3rd Floor Fax Machine'
	Subject:  Test Fax
	Date: 1996-05-14 18:05
	Priority: 3
	Message ID: 3A37306AE08F1D1084019EB787A3A7A0
	Conversation ID: Test Fax
	
	NOTE: The problem seems to be with the way the 16-bit Windows Microsoft Exchange
	client tries to form the fax number:
	
	  JohnYYBPYYMicrosoftYY45811YY
	
	The Fax number seems to have extra Ys appended as well as the recipient,
	location, and company name to the actual phone number
	
	======================================================================
	Keywords          : kbusage 
	Technology        : kbExchangeSearch kbExchange400 kbExchangeClientSearch kbMailSearch kbMailGateSearch kbZNotKeyword3 kbMailPCN3xSearch kbMailGateFax300a
	Version           : 4.0
	
	=============================================================================
	
