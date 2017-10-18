---
layout: page
title: "Q153100: Pager Notification Not Supported with Some Voice Modems"
permalink: kb/153/Q153100/
---

## Q153100: Pager Notification Not Supported with Some Voice Modems

	Article: Q153100
	Product(s): Microsoft Mail For PC Networks
	Version(s): 1.0
	Operating System(s): 
	Keyword(s): win95 msphone1
	Last Modified: 08-NOV-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Phone, version 1.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	After you enable the Pager Notification feature in Microsoft Phone, you may not
	receive pager notification from Microsoft Phone when you receive new messages.
	
	CAUSE
	=====
	
	This behavior can occur for either of the following reasons:
	
	- The Pager Notification feature is not properly enabled or configured.
	
	- Your voice modem does not support the generation of DTMF codes during a voice
	  call.
	
	  NOTE: Microsoft Phone provides no indication of whether or not your modem
	  supports the generation of DTMF codes during a voice call.
	
	RESOLUTION
	==========
	
	To verify that you have properly enabled and configured the Pager Notification
	feature, follow these steps:
	
	1. Start Microsoft Phone.
	
	2. On the Options menu, point to Mailbox Settings, and then click the
	  appropriate mailbox.
	
	3. Click the Notification tab, and then click the "Notify me when new messages
	  arrive" check box to select it.
	
	4. In the Number box, type the phone number for your pager.
	
	5. Click the Pager check box to select it.
	
	6. In the Pager Message box, type a message to be sent to your pager when you
	  receive new messages.
	
	7. Configure the When To Notify Me settings the way you want them.
	
	8. Click OK.
	
	If you still do not receive pager notification when new messages arrive, contact
	your voice modem's manufacturer to determine whether the voice modem supports
	the generation of DTMF codes during a voice call. Without this support,
	Microsoft Phone 1.0 is unable to perform pager notification.
	
	MORE INFORMATION
	================
	
	The following voice modems are known not to support the generation of DTMF codes
	during a voice call:
	
	- Voice modems based on the Cirrus chip set
	
	- Voice modems included with Compaq Presario model CDS 520, 720, and 920 series
	  computers
	
	
	Additional query words: 1.00 tazz page
	
	======================================================================
	Keywords          : win95 msphone1 
	Technology        : _IKkbbogus kbMSHardwareSearch kbPhone
	Version           : :1.0
	
	=============================================================================
	
