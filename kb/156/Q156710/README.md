---
layout: page
title: "Q156710: XFOR: Incoming SMTP Messages NDR with Invalid Argument"
permalink: /kb/156/Q156710/
---

## Q156710: XFOR: Incoming SMTP Messages NDR with Invalid Argument

{% raw %}

	Article: Q156710
	Product(s): Microsoft Exchange
	Version(s): WINDOWS:; winnt:4.0
	Operating System(s): 
	Keyword(s): kbusage
	Last Modified: 22-OCT-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Exchange Server, version 4.0 Service Packs 1, 2 
	- Microsoft Mail for PC Networks 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	Messages sent from the Internet to the SMTP address of a Microsoft Exchange
	Custom Recipient (CR) might result in the originator receiving a Non- Delivery
	Report (NDR) similar to the following:
	
	  Your message did not reach some or all of the intended recipients.
	
	  To:Citizen Caine
	  Subject:Test Message
	  Sent:9/11/96 10:51:18 AM
	
	  The following recipient(s) could not be reached:
	
	  Citizen Caine on 9/11/96 10:55:36 AM
	  One or more arguments in the recipient was detected as being invalid
	  MSEXCH:MSExchangeIS:EvilMutants:DARKPHOENIX
	
	This NDR is returned to the originator after they attempt to send a SMTP message
	to Citizen.Caine@Rock.N.Roll.Com.
	
	The following events might also be logged in the Windows NT Event Log when the
	error occurrs:
	
	  Event ID:3021
	  Source:MSExchangeIMC
	  Description:
	  The following message was not delivered because the message received could not
	  be saved. A non-delivery report was sent for this message.
	  From: Subject:
	  Submit Time:
	
	  Event ID:1026
	  Source:MSExchangeIS
	  Description:
	  An error occurred with the following call stack:
	  EcTferOutMessage();0080070057
	  EcCreateOMTferOut();0080070057
	  EcMTSIDFromSz();0080070057
	
	The 1026 events will only be logged if logging is maximized on the Microsoft
	Exchange Private Information Store. In addition, there will be three 1026 events
	logged that have the exact same description. The error code listed in the 1026
	events (0080070057) is for an invalid parameter that corresponds to the
	description in the NDR that the originator receives.
	
	MORE INFORMATION
	================
	
	Only messages sent from the Internet to CRs can result in the originator
	receiving the NDR. Messages sent from the Internet to valid Microsoft Exchange
	mailboxes will be delivered successfully. The messages do not actually have to
	be sent from the Internet in order to see this behavior. Messages sent from a
	local Microsoft Exchange mailbox to the SMTP proxy address for a Microsoft Mail
	custom recipient can also result in the sender receiving a NDR under specific
	conditions.
	
	The Microsoft Exchange Internet Mail Connector (IMC) generates a MTSID for
	incoming SMTP messages using part of the IMC administrator's X400 address. The
	IMC will incorrectly use the Common Name (/cn=) parameter in lieu of the Country
	(/c=) parameter from the IMC administrator's X400 address when constructing the
	MTSID for the incoming SMTP messages if the IMC Administrator's X400 address
	contains the Common Name parameter.
	
	The IMC then passes the message to the MTS-IN queue that resides in the Microsoft
	Exchange Information Store. The store examines the message's recipient list. If
	the message was sent to local Microsoft Exchange addresses, the store will
	deliver the message to those local addresses directly, without examining the
	MTSID. All other recipients will require that the message be routed by the
	Microsoft Exchange Message Transfer Agent (MTA). The store looks at the MTSID
	and determines that the MTSID is invalid. The store then generates the NDR and
	sends it back to the originator. The CRs will never receive the original mail
	message. Only the local Microsoft Exchange addresses will have received the
	message.
	
	WORKAROUND
	==========
	
	There are two workarounds for this problem.
	
	Workaround #1:
	
	Clear the Common Name (CN) field for the IMC administrator's X400 address by
	following these steps:
	
	1. Start the Microsoft Exchange Administrator program.
	
	2. Select the Connections container and bring up the properties of the IMC.
	
	3. Take note of the administrator's Mailbox. This field can be found under the
	  Internet Mail tab. The mailbox listed in that field will need to have its
	  X400 address modified.
	
	4. Select the recipients container that contains the IMC administrator. If you
	  are not sure where the IMC administrator resides, select the Find Recipients
	  option on the Tools menu.
	
	5. Once the IMC administrator's address has been located, display the IMC
	  administrator's properties by double-clicking on the mailbox, by highlighting
	  the mailbox and clicking Properties on the File menu, or by highlighting the
	  mailbox and then pressing ALT+ENTER.
	
	6. Click the Email Addresses tab.
	
	7. Select the X400 address and click Edit.
	
	8. Clear the Common Name (cn) field. This is the field that caused the IMC to
	  generate the erroneous MTSID.
	
	9. Click OK.
	
	10. Select the Microsoft Exchange Internet Mail Connector in the Services applet
	  in the control panel. Stop and restart the IMC service.
	
	Workaround #2:
	
	Disable message tracking on the IMC.
	
	1. Start the Microsoft Exchange Administrator program.
	
	2. Select the Connections container and display the properties of the IMC.
	
	3. Clear the Enable Message Tracking box on the Internet Mail tab in order to
	  disable message tracking on the IMC.
	
	4. Click OK.
	
	5. Select the Microsoft Exchange Internet Mail Connector in the Services applet
	  in the control panel. Stop and restart the IMC service.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in Microsoft Exchange Server
	version 4.0. This problem was corrected in the latest Microsoft Exchange Service
	Pack. For information on obtaining the Service Pack, query on the following word
	in the Microsoft Knowledge Base (without the spaces):
	
	  S E R V P A C K
	
	
	Additional query words: NDR
	
	======================================================================
	Keywords          : kbusage 
	Technology        : kbPTProdChange kbExchangeSearch kbZNotKeyword2 kbMailSearch kbZNotKeyword3
	Version           : WINDOWS:; winnt:4.0
	
	=============================================================================
	

{% endraw %}
