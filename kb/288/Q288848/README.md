---
layout: page
title: "Q288848: XADM: MTA Returns Mail with Transfer-Failure Reason Code"
permalink: kb/288/Q288848/
---

## Q288848: XADM: MTA Returns Mail with Transfer-Failure Reason Code

	Article: Q288848
	Product(s): Microsoft Exchange
	Version(s): 5.5,5.5 SP1,5.5 SP2,5.5 SP3,5.5 SP4
	Operating System(s): 
	Keyword(s): kberrmsg kbExchange550preSP5fix
	Last Modified: 08-MAY-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Exchange Server, versions 5.5, 5.5 SP1, 5.5 SP2, 5.5 SP3, 5.5 SP4 
	-------------------------------------------------------------------------------
	
	
	SYMPTOMS
	========
	
	Mail that is sent with attachments may be sent back to the sender, and a
	non-delivery report (NDR) may be generated. In some cases, the recipients still
	receive the mail. The following events may be logged in the Application event
	log:
	
	  Event Type: Warning
	  Event Source: MSExchangeMTA
	  Event Category: X.400 Service
	  Event ID: 290
	  Description:
	  A non-delivery report (reason code transfer-failure and diagnostic code Omit
	  any diagnostic code) is being generated for message C=US;A=
	  ;P=ORG;L=ServerName-#########Z-#####. It was originally destined for
	  DN:/o=ORG/ou=CORP/cn=RECIPIENTS/cn=USER<A7> (recipient number 1), and was to be
	  redirected to . [MTA DISP:RESULT 18 136] (12)
	
	  Event Type: Information
	  Event Source: MSExchangeMTA
	  Event Category: X.400 Service
	  Event ID: 270
	  Description:
	  A permanent error has occurred with Entity
	  /O=ORG/OU=CORP/CN=CONFIGURATION/CN=SERVERS/CN=ServerName/CN=MICROSOFT PRIVATE
	  MDB. Entity is a Message Object is a Normal Priority Message. Object:
	  #######. Message ID: C=US;A= ;P=ORG;L=ServerName-########z-##### Content
	  length:####, .....
	
	  Event Type: Information
	  Event Source: MSExchangeIS Private
	  Event Category: Transport Delivering
	  Event ID: 2025
	  Description:
	  The delivery of a message failed due to error 0000050A. A non-delivery report
	  is being sent to the message's originator.
	
	
	CAUSE
	=====
	
	This problem can occur because of the virus scanning application programming
	interface (API) mode scanner for the information store. When a message with an
	attachment is sent to multiple users on the same server, the message transfer
	agent (MTA) submits the message multiple times. The store "sees" these
	submissions as the same message because of single instance storage; if the
	message has not been scanned yet, the message issues an error back to the MTA,
	which interprets the error as a communications error. The MTA then issues the
	NDR.
	
	
	RESOLUTION
	==========
	
	A supported fix is now available from Microsoft, but it is only intended to
	correct the problem described in this article and should be applied only to
	systems experiencing this specific problem. This fix may receive additional
	testing at a later time, to further ensure product quality. Therefore, if you
	are not severely affected by this problem, Microsoft recommends that you wait
	for the next Microsoft Exchange Server 5.5 service pack that contains this fix.
	
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
	
	Component: Information store
	
	+-------------------------+
	| File name | Version     | 
	+-------------------------+
	| Store.exe | 5.5.2654.61 | 
	+-------------------------+
	
	NOTE: Because of file dependencies, this fix requires Microsoft Exchange Server
	version 5.5 Service Pack 4.
	
	
	
	WORKAROUND
	==========
	
	To work around this problem, change the antivirus software from virus scanning
	API mode to Messaging Application Programming Interface (MAPI) mode.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in Microsoft Exchange Server
	version 5.5.
	
	MORE INFORMATION
	================
	
	For additional information about this fix, click the article number below to
	view the article in the Microsoft Knowledge Base:
	
	  Q282533 XADM: Exchange Server 5.5 Post-SP4 Information Store Fixes
	
	After applying this fix. The information store will release the attachment and
	pass it to MTA to deliver outgoing mail. In some cases the attachments are not
	scanned completely by the Virus scan before they are released to the MTA. This
	may results in infected attachment being sent via the outgoing mail. This is by
	design. The Exchange AV API version 1.0 guarantees virus cleanup for incoming
	mail but only commercially reasonable efforts for outgoing mail. Customers who
	apply this fix should make sure that they have the Antivirus product on all of
	the Messaging servers.
	
	
	
	Additional query words: norton anti-virus nav mcafee groupshield VAPI
	
	======================================================================
	Keywords          : kberrmsg kbExchange550preSP5fix 
	Technology        : kbExchangeSearch kbExchange550 kbZNotKeyword2 kbExchange550SP1 kbExchange550SP2 kbExchange550SP3 kbExchange550SP4
	Version           : :5.5,5.5 SP1,5.5 SP2,5.5 SP3,5.5 SP4
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	
