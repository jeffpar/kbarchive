---
layout: page
title: "Q192125: XCON: Messages Set for Delayed Delivery Sent at Wrong Time"
permalink: kb/192/Q192125/
---

## Q192125: XCON: Messages Set for Delayed Delivery Sent at Wrong Time

	Article: Q192125
	Product(s): Microsoft Exchange
	Version(s): WINDOWS:4.0,5.0,5.5,8.0,8.01,8.02,8.03,8.5
	Operating System(s): 
	Keyword(s): 
	Last Modified: 09-JAN-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Exchange Server, versions 4.0, 5.0, 5.5 
	- Microsoft Outlook 97, versions 8.0, 8.01, 8.02, 8.03, used with:
	   - the operating system: Microsoft Windows 98 
	   - the operating system: Microsoft Windows 95 
	- Microsoft Outlook 98, version 8.5, used with:
	   - the operating system: Microsoft Windows 98 
	   - the operating system: Microsoft Windows 95 
	- Microsoft Outlook 97, versions 8.0, 8.01, 8.02, 8.03, used with:
	   - the operating system: Microsoft Windows NT 
	- Microsoft Outlook 98, version 8.5, used with:
	   - the operating system: Microsoft Windows NT 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you send a message using a Microsoft Outlook client and use the option for
	delayed delivery by selecting the Do Not Deliver Before option, the message may
	be sent at the wrong time by the Microsoft Exchange Server computer.
	
	CAUSE
	=====
	
	The Microsoft Exchange message transfer agent (MTA) service does not recognize
	the change from Standard Time to Daylight Savings Time, and vice versa. In this
	case, the sending delay (or ahead of time difference) would be one hour. Any
	other time periods are not related to this article.
	
	WORKAROUND
	==========
	
	There are two options to workaround this problem:
	
	- Restart the MTA service on the Microsoft Exchange Server computer.
	
	  -OR-
	
	- To temporarily workaround the problem (per message) without restarting the
	  MTA service, set the delayed delivery options using the Send Options For This
	  Message dialog box by performing the following steps:
	
	  1. From the message window, select Properties from the File menu.
	
	  2. Click Send Options.
	
	  3. Click the Microsoft Exchange Server tab.
	
	  4. Under Send This Item, select the appropriate number of minutes, hours,
	     days, or weeks.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in Microsoft Exchange Server
	versions 4.0, 5.0, and 5.5.
	
	MORE INFORMATION
	================
	
	After Daylight Savings Time takes effect, messages set for delayed delivery, on
	April 15, may be sent an hour earlier than expected. For example, if you send a
	message to be delivered on April 15 at 4:00pm, the message is delivered at
	3:00pm, instead of 4:00pm. The opposite behavior may occur on October 15
	(messages sent an hour later than expected) when Standard Time takes effect.
	
	If the requested delivery delay is less than one hour, the message will be sent
	immediately. For example, assume it is currently 2:30pm on April 15 (DST). Send
	a message that is to be delivered at 3:00pm. The message is delivered right away
	(within a few minutes), instead of waiting until 3:00pm.
	
	
	
	Additional query words: incorrect
	
	======================================================================
	Keywords          :  
	Technology        : kbOutlookSearch kbExchangeSearch kbZNotKeyword2 kbOutlook97Search kbZNotKeyword3
	Version           : WINDOWS:4.0,5.0,5.5,8.0,8.01,8.02,8.03,8.5
	Issue type        : kbbug
	Solution Type     : kbpending
	
	=============================================================================
	
