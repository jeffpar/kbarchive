---
layout: page
title: "Q244213: XADM: Configuring the Mailbox Manager to Exclude Message Classes"
permalink: kb/244/Q244213/
---

## Q244213: XADM: Configuring the Mailbox Manager to Exclude Message Classes

	Article: Q244213
	Product(s): Microsoft Exchange
	Version(s): 5.5 SP3
	Operating System(s): 
	Keyword(s): exc55sp3
	Last Modified: 12-FEB-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Exchange Server, version 5.5 SP3 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	This article explains how to configure the Microsoft Exchange Server Mailbox
	Manager to ignore certain messages classes.
	
	MORE INFORMATION
	================
	
	The Mailbox Manager Add-In from Service Pack 3 can be configured to exclude
	certain interpersonal message (IPM) classes from being scanned.
	
	For example:
	
	To have the Mailbox Manager ignore StickyNotes:
	
	1. From the Microsoft Exchange Administrator program, click the Add-Ins object.
	
	2. Open the properties of the Mailbox Manager.
	
	3. Click the Policies tab.
	
	4. Under General Policies, click the Message Classes button.
	
	5. Add IPM.STICKYNOTE to the Excluded Message Classes list.
	
	6. Click OK.
	
	7. Click OK again to quit the Mailbox Manager.
	
	Now during the next scheduled cleanup process, the StickyNotes will be ignored.
	
	NOTE: Additional message classes that may also be ignored are listed in the
	following table.
	
	  
	  +-----------------------------------------------------------+
	  | IPM type        | Outlook type                            | 
	  +-----------------------------------------------------------+
	  | IPM.NOTE        | Mail message                            | 
	  +-----------------------------------------------------------+
	  | IPM.POST        | Post (in this folder)                   | 
	  +-----------------------------------------------------------+
	  | IPM.APPOINTMENT | Appointment and Meeting Request entries | 
	  +-----------------------------------------------------------+
	  | IPM.TASK        | Task                                    | 
	  +-----------------------------------------------------------+
	  | IPM.CONTACT     | Contact                                 | 
	  +-----------------------------------------------------------+
	  | IPM.ACTIVITY    | Journal entry                           | 
	  +-----------------------------------------------------------+
	  | IPM.DISTLIST    | Distribution list                       | 
	  +-----------------------------------------------------------+
	  | IPM.STICKYNOTE  | Note                                    | 
	  +-----------------------------------------------------------+
	
	This field also accepts wildcards (for example, IPM.NOTE.*).
	
	Additional query words: MAPI SP3
	
	======================================================================
	Keywords          : exc55sp3 
	Technology        : kbExchangeSearch kbZNotKeyword2 kbExchange550SP3
	Version           : :5.5 SP3
	Issue type        : kbhowto
	
	=============================================================================
	
