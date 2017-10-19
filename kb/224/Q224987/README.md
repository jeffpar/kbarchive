---
layout: page
title: "Q224987: XFOR: NDR on Message Sent from Eastern European Outlook"
permalink: /kb/224/Q224987/
---

## Q224987: XFOR: NDR on Message Sent from Eastern European Outlook

	Article: Q224987
	Product(s): Microsoft Exchange
	Version(s): WINDOWS:8.0,8.01,8.02,8.03,8.5; winnt:5.0
	Operating System(s): 
	Keyword(s): kbExchange500preSP3fix
	Last Modified: 08-MAY-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Exchange Server, version 5.0 
	- Microsoft Outlook 97, versions 8.0, 8.01, 8.02, 8.03, used with:
	   - the operating system: Microsoft Windows NT 
	- Microsoft Outlook 98, version 8.5, used with:
	   - the operating system: Microsoft Windows NT 
	- Microsoft Outlook 97, versions 8.0, 8.01, 8.02, 8.03, used with:
	   - the operating system: Microsoft Windows 98 
	   - the operating system: Microsoft Windows 95 
	- Microsoft Outlook 98, version 8.5, used with:
	   - the operating system: Microsoft Windows 98 
	   - the operating system: Microsoft Windows 95 
	-------------------------------------------------------------------------------
	
	
	SYMPTOMS
	========
	
	An Outlook 8.0x or Outlook 8.5 client running on Windows NT 4.0 Workstation or
	Windows 95/98 with language settings set to an East European language gets a
	non-delivery report (NDR) similar to that below, when sending from a Microsoft
	Mail postoffice to Exchange Server:
	
	  Your Message
	
	  To: User
	  Subject: Subject
	
	  Was not delivered for the following reasons:
	
	  Delivery failed to MS:NETWORK/PO/USER
	  Reason: 0 (transfer failed)
	  diagnostic: -1 (no diagnostic).
	  MSEXCH:MSExchangeMTA:
	
	  Original message body follows...
	
	The Outlook client is connected to a Microsoft Mail postoffice, and the
	postoffice is connected to Exchange Server using the Microsoft Mail Connector,
	as follows:
	
	  Outlook -> Postoffice -> Microsoft Mail Connector -> Exchange Server
	  5.0
	
	The following messages are written to the Windows NT Application Event log:
	
	  Event ID: 2025 (IS Priv)
	  Description: The delivery of a message failed due to error 80004005. A
	  non-delivery report is being sent to the message's originator.
	
	  -and-
	
	  Event ID: 270 (MTA)
	  Description: A permanent error has occurred with Entity
	  /O=org/OU=orgunit/CN=CONFIGURATION/CN=SERVERS/CN=user/CN=MICROSOFT PRIVATE
	  MDB. Entity is a Message Object is a Normal Priority Message. Object:
	  06000046. Message ID: C=country;A=admd ;P=prmd;L=organisation-site-000000AF
	  Content length: 1281, External Trace information (first 100 bytes) =
	  3080638061801302555300006280130120000013094D6963726F736F66740000318080113
	  938313230383135313430302D303530308201008302060000000000, PDU dump reference 1
	  [MTA SUBMIT 16 74] (14)
	
	  -and-
	
	  Event ID: 290 (MTA)
	  Description: A non-delivery report (reason code transfer-failure and
	  diagnostic code Omit any diagnostic code) is being generated for message
	  C=country;A=admd ;P=prmd;L=organisation-site-000000AF. It was originally
	  destined for DN:/o=org/ou=orgunit/cn=Recipients/cn=user1 (recipient number
	  1), and was to be redirected to. [MTA DISP:RESULT 18 136] (12)
	
	CAUSE
	=====
	
	This problem occurs when the Microsoft Exchange Server information store
	receives a message from the message transfer agent (MTA) and detects that there
	are two MAPI properties for strings within the message that have conflicting
	code page IDs. The information store sends an NDR on the message because the
	discrepancy was encountered.
	
	This problem does not occur if an Eastern European Exchange client is used
	instead of the Eastern European Outlook client. This is because the Eastern
	European Outlook client includes four additional MAPI properties for the TNEF
	portion of the message, one of which is an additional string property containing
	a code page ID.
	
	RESOLUTION
	==========
	
	A supported fix is now available from Microsoft, but it is only intended to
	correct the problem described in this article and should be applied only to
	systems experiencing this specific problem. This fix may receive additional
	testing at a later time, to further ensure product quality. Therefore, if you
	are not severely affected by this problem, Microsoft recommends that you wait
	for the next Microsoft Exchange Server version 5.0 service pack that contains
	this fix.
	
	To resolve this problem immediately, contact Microsoft Product Support Services
	to obtain the fix. For a complete list of Microsoft Product Support Services
	phone numbers and information about support costs, please go to the following
	address on the World Wide Web:
	
	  http://support.microsoft.com/default.aspx?scid=fh;EN-US;CNTACTMS
	
	NOTE: In special cases, charges that are normally incurred for support calls may
	be canceled, if a Microsoft Support Professional determines that a specific
	update will resolve your problem. Normal support costs will apply to additional
	support questions and issues that do not qualify for the specific update in
	question.
	
	The English version of this fix should have the following file attributes or
	later:
	
	Component: Microsoft Mail Connector Interchange
	
	+---------------------------+
	| File name   | Version     | 
	+---------------------------+
	| Address.dll | 5.0.1461.88 | 
	+---------------------------+
	| Mt.exe      | 5.0.1461.88 | 
	+---------------------------+
	| Mtmsg.dll   | 5.0.1461.88 | 
	+---------------------------+
	
	
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in Microsoft Exchange Server
	version 5.0.
	
	Additional query words: MSMI
	
	======================================================================
	Keywords          : kbExchange500preSP3fix 
	Technology        : kbOutlookSearch kbExchangeSearch kbZNotKeyword2 kbOutlook97Search kbZNotKeyword3
	Version           : WINDOWS:8.0,8.01,8.02,8.03,8.5; winnt:5.0
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	
