---
layout: page
title: "Q195583: XADM: Rules Are Not Applied to SMTP Messages Received as &#91;cc&#93;"
permalink: /kb/195/Q195583/
---

## Q195583: XADM: Rules Are Not Applied to SMTP Messages Received as &#91;cc&#93;

	Article: Q195583
	Product(s): Microsoft Exchange
	Version(s): WINDOWS:4.0,5.0,8.03,8.5; winnt:5.5
	Operating System(s): 
	Keyword(s): exc55sp2fix
	Last Modified: 09-JAN-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Exchange Server, version 5.5 
	- Microsoft Outlook 97, version 8.03, used with:
	   - the operating system: Microsoft Windows NT 
	- Microsoft Outlook 98, version 8.5, used with:
	   - the operating system: Microsoft Windows NT 
	- Microsoft Outlook 97, version 8.03, used with:
	   - the operating system: Microsoft Windows 98 
	   - the operating system: Microsoft Windows 95 
	- Microsoft Outlook 98, version 8.5, used with:
	   - the operating system: Microsoft Windows 98 
	   - the operating system: Microsoft Windows 95 
	- Microsoft Exchange Windows NT client, versions 4.0, 5.0 
	- Microsoft Exchange Windows 95/98 client, versions 4.0, 5.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	
	When you receive a Simple Mail Transfer Protocol (SMTP) message with your address
	specified in the CC field, rules may not be applied as follows:
	
	Exchange Client 4.0 and 5.0, and Outlook 97
	-------------------------------------------
	
	- If the "Copied (Cc) to me" check box is selected, rules are not applied.
	
	- If the "Sent directly to me" check box is selected, rules are applied.
	
	Outlook 98
	----------
	
	- If the "Where my name is in the Cc box" check box is selected, rules are not
	  applied.
	
	- If the "Sent directly to me" check box is selected, rules are applied.
	
	However, if the message is sent by a user in the same Exchange Server
	organization, rules are applied correctly.
	
	CAUSE
	=====
	
	This behavior occurs because the Internet Mail Service gets the recipient's
	information through the "RCPT TO:" command, and holds the recipient's
	information as P1 information. From the P1 information, the recipient list is
	generated internally, and then converted to the MAPI properties.
	
	The To, Cc, and Bcc fields are P2 properties, and in the case of incoming mail,
	the Internet Mail Service does not parse these to figure out who is in the To,
	Cc, or Bcc fields, and mark them in the recipient list that was created at the
	P1 level.
	
	In the case of the "Copied (Cc) to me" or "Where my name is in the Cc box" rules,
	the property PR_RECIPIENT_TYPE determines whether the recipient was specified in
	the To or Cc field in the message. Because the Internet Mail Service always sets
	PR_RECIPINET_TYPE to a value for To, the rule for messages received as Cc
	doesn't work correctly.
	
	RESOLUTION
	==========
	
	To resolve this problem, obtain the latest service pack for Exchange Server
	version 5.5. For more information, please see the following article in the
	Microsoft Knowledge Base:
	
	  Q191014 XGEN: How to Obtain the Latest Exchange Server 5.5 Service Pack
	
	
	The English version of this fix should have the following file attributes or
	later:
	
	  Component: Information Store
	
	  File Name    Version
	  -----------------------
	  Gapi32.dll   5.5.2436.0
	  Mdbmsg.dll   5.5.2436.0
	  Store.exe    5.5.2436.0
	
	  Component: Internet Mail Service
	
	  File Name      Version
	  -------------------------
	  Msexcimc.exe   5.5.2436.0
	
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in Microsoft Exchange Server
	version 5.5.
	
	MORE INFORMATION
	================
	
	This hotfix sets the correct value for PR_RECIPIENT_TYPE property of an outbound
	message. By sending this message to the Internet in Transport Neutral
	Encapsulation Format (TNEF), the correct value will be set for PR_RECIPIENT_TYPE
	of the inbound message, and the rule will work correctly. Therefore, in order
	for an SMTP message with your name specified as in the Cc field to work
	correctly using this hotfix, the following conditions must be met:
	
	The message you want to apply the rules to should be sent from the server to
	which this hotfix is applied.
	
	The hotfix must also be applied to the Internet Mail Service server to send the
	message to the Internet. The number of modules which you must apply is different
	whether the Internet Mail Service is installed or not.
	
	Internet Mail Service server
	----------------------------
	
	- Gapi32.dll
	
	- Mdbmsg.dll
	
	- Msexcimc.exe
	
	- Store.exe
	
	Non-Internet Mail Service server
	--------------------------------
	
	- Gapi32.dll
	
	- Mdbmsg.dll
	
	- Store.exe
	
	- Messages must be sent in Rich Text format for the rule to apply.
	
	Additional query words:
	
	======================================================================
	Keywords          : exc55sp2fix 
	Technology        : kbOutlookSearch kbExchangeSearch kbZNotKeyword2 kbOutlook97Search kbZNotKeyword3
	Version           : WINDOWS:4.0,5.0,8.03,8.5; winnt:5.5
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	
