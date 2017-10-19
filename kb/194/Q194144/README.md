---
layout: page
title: "Q194144: MHS: Messages with Addresses on Multiple Lines Not Delivered"
permalink: /kb/194/Q194144/
---

## Q194144: MHS: Messages with Addresses on Multiple Lines Not Delivered

	Article: Q194144
	Product(s): Microsoft Mail For PC Networks
	Version(s): MS-DOS:3.0
	Operating System(s): 
	Keyword(s): 
	Last Modified: 20-MAY-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Mail Gateway to MHS, version 3.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	If you send a message with a To line that wraps to multiple lines from MHS to
	Microsoft Mail for PC Networks through the Microsoft Mail Gateway to MHS, the
	message may not be successfully delivered. Even if the original message is
	successfully delivered, one or more additional messages may remain in the
	outbound message queue on the foreign system indefinitely. In addition, you may
	be unable to successfully reply to all recipients on the original message.
	
	CAUSE
	=====
	
	The Microsoft Mail Gateway to MHS does not properly resolve addresses that
	appear on multiple lines.
	
	RESOLUTION
	==========
	
	A supported fix that corrects this problem is now available from Microsoft, but
	has not been fully regression tested and should be applied only to systems
	experiencing this specific problem.
	
	To resolve this problem, contact Microsoft Product Support Services to obtain the
	fix. For a complete list of Microsoft Product Support Services phone numbers and
	information on support costs, please go to the following address on the World
	Wide Web:
	
	  http://support.microsoft.com/default.aspx?scid=fh;EN-US;CNTACTMS
	
	The English version of this fix should have the following file attributes or
	later:
	
	  File Name     Version
	  ---------------------
	  Outpost.exe   3.0.5
	
	This hotfix has been posted to the following Internet location as Mhsgy2k.exe:
	
	  ftp://ftp.microsoft.com/bussys/mail/gateways-public/All-Y2K/
	
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in Microsoft Mail Gateway to MHS
	version 3.0.
	
	Additional query words:
	
	======================================================================
	Keywords          :  
	Technology        : kbMailSearch kbMailGateSearch kbZNotKeyword3 kbMailGateMHS300
	Version           : MS-DOS:3.0
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	
