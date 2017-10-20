---
layout: page
title: "Q94410: FFAPI: Basic Address Formats for Gateways"
permalink: /kb/094/Q94410/
---

## Q94410: FFAPI: Basic Address Formats for Gateways

{% raw %}

	Article: Q94410
	Product(s): Microsoft Mail For PC Networks
	Version(s): 2.1,3.0
	Operating System(s): 
	Keyword(s): 
	Last Modified: 29-OCT-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Mail Software Development Kit (FFAPI), versions 2.1, 3.0 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	This article describes how to address mail items when you want to use Microsoft
	Mails File Format Application Programming Interface (FFAPI) to send messages to
	users on other systems over Microsoft Mail gateways. You will find addressing
	schemes for the following Microsoft gateways:
	
	  FAX
	  X.400
	  SMTP
	  MHS
	  Microsoft Mail for PC Networks
	  Microsoft Mail Connection (Mail for AppleTalk Networks)
	  SNADS
	  PROFS
	  3Com
	  MCI
	
	MORE INFORMATION
	================
	
	General Format Notes
	--------------------
	
	Use the formats exactly as shown, including the spaces or lack of spaces. All
	formats begin with TO:, a required token. You may have multiple TO: fields per
	message.
	
	Some of the TO: field formats include ^0D. This is the control code for a
	carriage return. Type it exactly as shown -- caret zero dee. The ^0D shown on
	the end of some lines is required in addition to the normal line-termination
	character inserted by the text editor.
	
	Microsoft Mail Gateway to FAX
	-----------------------------
	
	To:Fax:Recipient^0DLocation^0DCompany^0DPhone^0D
	
	Microsoft Mail Gateway to X.400
	-------------------------------
	
	TO:X400:/c=Country/admd=Admin_Domain/=...
	
	Microsoft Mail Gateway to SMTP
	------------------------------
	
	TO:SMTP:UserID@Host.Domain
	
	-or-
	
	TO:SMTP:User
	
	Microsoft Mail for PC Networks
	------------------------------
	
	TO:CSI:10/10/10 (Normal address, default no CSI)
	
	Microsoft Mail Connection (Gateway to MS Mail for AppleTalk Networks)
	---------------------------------------------------------------------
	
	Version 1.0b:
	
	  TO:MSMail:UserID@Postoffice (Microsoft AppleTalk Mail)
	
	Version 3.2
	
	  TO:CSI:PROXYNET/PROXYPO/PROXYID
	
	Gateway to SNADS (Both Linkage and Softswitch)
	----------------------------------------------
	
	TO:SNADS:Gateway/DGN/DEN
	
	Microsoft Mail Gateway to IBM PROFS and OfficeVision
	----------------------------------------------------
	
	TO:Profs:Gateway/Host/User
	
	Microsoft Mail Gateway to MHS
	-----------------------------
	
	TO:MHS:User@Host
	
	-or-
	
	TO:MHS:User@Host {Network/Postoffice}
	
	-or-
	
	TO:MHS:User@Host {Network/Postoffice/User}
	
	Microsoft Mail Gateway to 3Com 3+Mail
	-------------------------------------
	
	TO:SMTP:UserName:Domain:Organization
	
	-or-
	
	TO:SMTP:UserAlias:Domain:organization
	
	-or-
	
	TO:SMTP:UserName (Sends mail to default address)
	
	-or- TO:SMTP:UserAlias (...3+Mail Domain:Organization)
	
	Microsoft Mail Gateway to MCI (Examples)
	----------------------------------------
	
	Note: All the addresses below should be entered on one line. Also, be sure to
	read the "More MCI Information" section below.
	
	MCI User (MCI Mail account number or name):
	
	  TO:MCI:John Doe^0D EMS:MCI Mail^0D MBX:123-4567
	
	  -or-
	
	  TO:MCI:John Doe^0D EMS:MCI Mail^0D MBX:JDoe
	
	Paper:
	
	  TO:MCI:John Doe^0D EMS:MCI Mail^0D MBX:Company:ABC, Inc.^0D
	  MBX:Country:Canada^0D MBX:Line1:100 - 123 Main Street^0D
	  MBX:Line2:^0D
	  MBX:City:Vancouver^0D MBX:State:B.C.^0D MBX:Code:V6B 1A1^0D
	
	REMS (for Microsoft Mail recipients):
	
	  TO:MCI:John Doe^0D EMS:ems_name^0D
	  MBX:network/postoffice/JohnDoe^0D
	  MBX:^0D MBX:^0D MBX:^0D MBX:^0D MBX:^0D
	
	REMS (for non-Microsoft Mail recipients):
	
	  TO:MCI:John Doe^0D EMS:Internet^0D
	  MBX:JohnDoe@aaa.bbb.bc.ca^0D MBX:^0D
	  MBX:^0D MBX:^0D MBX:^0D MBX:^0D
	
	TELEX:
	
	  TO:MCI:John Doe^0D EMS:MCI Mail^0D MBX:Country:-^0D
	  MBX:Telex:6501234567^0D MBX:Answerback:6507654321^0D
	
	Fax:
	
	  TO:MCI:John Doe^0D EMS:MCI Mail^0D
	  MBX:FAXNo:604-123-4567^0D
	  MBX:Retry:4.0^0D
	  MBX:Company:ABC Company Inc.^0D MBX:SFax:604-111-1111^0D
	  MBX:SPhone:604-222-2222^0D
	
	More MCI Information
	--------------------
	
	TO:MCI:Username^0D EMS:EMSname^0D MBX:MCIMailbox^0D
	
	The following is a description of what each token means:
	
	      Token       Description
	     ---------------------------------------------------------
	
	  TO          Address field indicator. Include as is.
	
	  MCI         MCI mail address indicator. Include as is.
	
	  Username    Name of mail recipient. Replace with person's name. Not used
	              for mail delivery.
	
	  EMS         Indicates the name or number in next token is the
	              recipient's REMS (remote e-mail system) account. Include as
	              is.
	
	  EMSname     EMS name or number. Replace with actual EMS name or number.
	              This can also be an MCI service provided by MCI; consult MCI
	              Help for more information.
	
	  MBX         Indicates this is additional information required by the
	              remote system. Include as is.
	
	  MCIMailbox  Actual MBX (address) fields for the recipient on the remote
	              system. Replace with the actual address of the person. If
	              the remote system is Microsoft Mail, enter the full
	              Microsoft Mail address. You can only have one complete MBX
	              address (see the examples above).
	
	Note that there is always a space in front of the EMS: token and another space in
	front of each MBX: token. These spaces are required. The carriage-return symbol
	at the end of the line is in addition to whatever code your text editor
	inserts.
	
	The actual message body requires a header separator after the TEXT: token. That
	is, the first line after TEXT: should be a line of 78 dash (-) characters to
	separate the header from the message body. Include these 78 characters in the
	TEXT count.
	
	For More Information
	--------------------
	
	For more detailed information about the FFAPI text file formats, consult the
	FFAPI documentation and query on the following words in the Microsoft Knowledge
	Base:
	
	  "pcmail and FFAPI and MCI" (without the quotation marks)
	
	Additional query words: 3.00 FFAPI format
	
	======================================================================
	Keywords          :  
	Technology        : kbAudDeveloper kbMailSearch kbSDKSearch kbSDKMailFFAPI300 kbSDKMailFFAPI210
	Version           : :2.1,3.0
	
	=============================================================================
	

{% endraw %}
