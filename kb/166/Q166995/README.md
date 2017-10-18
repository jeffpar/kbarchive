---
layout: page
title: "Q166995: XCLN: Mail Notifications Not Received for Each New Message"
permalink: kb/166/Q166995/
---

## Q166995: XCLN: Mail Notifications Not Received for Each New Message

	Article: Q166995
	Product(s): Microsoft Exchange
	Version(s): 4.0 5.0
	Operating System(s): 
	Keyword(s): kbusage
	Last Modified: 01-MAY-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Exchange Windows 3.x client, versions 4.0, 5.0 
	- Microsoft Exchange Windows 95/98 client, versions 4.0, 5.0 
	- Microsoft Exchange Windows NT client, versions 4.0, 5.0 
	- Microsoft Exchange Macintosh client, versions 4.0, 5.0 
	- Microsoft Outlook for Macintosh, Exchange Server Edition, version 8.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	Even though new mail notification has been enabled, you may not be notified of
	each new incoming message.
	
	CAUSE
	=====
	
	By product design, the Microsoft Exchange Client is hardcoded to wait two
	minutes between displaying the new mail notification window. This design was
	based on customer feedback from the Microsoft Exchange Server beta program. This
	value cannot be modified.
	
	RESOLUTION
	==========
	
	An Inbox rule can be created that will display a pop-up dialog box for every
	incoming message. For this message to display properly, the rule must be
	profile-specific, which means an identical rule needs to be created on any
	computer running Microsoft Exchange Client.
	
	To initiate notification of every incoming e-mail message, perform the following
	steps:
	
	1. On the Tools menu, click Inbox Assistant.
	
	2. In the Inbox Assistant dialog box, click Add Rule.
	
	3. In the Edit Rule dialog box, click to select the Alert With check box, and
	  then click Action.
	
	4. In the Alert Actions dialog box, click to select the Notify With The Text or
	  the Play check box, if it is not already selected.
	
	  If you select Notify With The Text, type the text to be displayed in the
	  notification dialog box.
	
	  If you select Play, click Sound, choose the sound file to be played, and then
	  click Test.
	
	5. Click OK to close all dialog boxes.
	
	NOTE: You can enable new mail notification by clicking Options on the Tools menu,
	clicking the General tab, and then selecting "When new mail arrives, display a
	notification message."
	
	Additional query words: notify notifications minute alert
	
	======================================================================
	Keywords          : kbusage 
	Technology        : kbHWMAC kbOSMAC kbExchangeSearch kbExchange500 kbExchange400 kbExchangeClientSearch kbZNotKeyword kbZNotKeyword2 kbZNotKeyword3 kbOutlookMacSearch kbExchange500Mac kbExchange400Mac kbExchange400NT kbExchange500NT kbOutlook800Mac kbExchange400Win95 kbExchange500Win95
	Version           : 4.0 5.0
	
	=============================================================================
	
