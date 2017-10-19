---
layout: page
title: "Q252800: XCLN: Meeting Request Goes to Former Delegate"
permalink: /kb/252/Q252800/
---

## Q252800: XCLN: Meeting Request Goes to Former Delegate

	Article: Q252800
	Product(s): Microsoft Schedule+ for Windows
	Version(s): 7.0,7.0a,7.5
	Operating System(s): 
	Keyword(s): 
	Last Modified: 27-FEB-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Schedule+, versions 7.0, 7.0a, 7.5 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	If you specify a delegate and later remove that delegate, the former delegate
	continues to receive meeting requests and responses as if the former delegate is
	still a delegate.
	
	The former delegate is not listed in Schedule+.
	
	CAUSE
	=====
	
	This problem occurs because the delegate is represented by a set of rules that
	are hidden in the mailbox. The delegate is "stranded."
	
	RESOLUTION
	==========
	
	To resolve this problem, use the MDBView utility to identify the delegate rules
	and remove them.
	
	The Schedule+ 7.x delegate rules are stored in the Schedule folder.
	
	- One rule is an item in the Associated Messages in FLD window, in the CB
	  entry, and has a description of "Schedule + EMS Interface."
	
	- The other rule is an item in the Associated Message in FLD window, in the CB
	  entry, and has a description of "Schedule + EMS Interface Base Rule."
	
	To remove delegate rules by using the MDBView utility:
	
	1. Start the MDBView utility, click MAPI_Explicit_PROFILE, and then click OK.
	
	2. Click the profile name of the user whose mailbox contains the delegate rules.
	
	3. On the MDB menu, click Open Message Store. In the Store Display Name pane,
	  click the user's mailbox, and then click Open.
	
	4. On the MDB menu, click Open Root Folder.
	
	5. In the root folder, double-click the Schedule folder.
	
	6. In the Associated Messages in FLD window, double-click to open each message
	  until you find a message named "Schedule + EMS Interface."
	
	7. Close this message to return the focus to the list.
	
	8. To delete this message, in the Associated Messages In FLD window, click to
	  select the message. In the Operations Available box, click
	  lpFLD->DeleteMessages(). Click Call Function, and then to confirm the
	  deletion, click OK. The message is deleted.
	
	9. In the Associated Messages in FLD window, double-click to open each message
	  until you find a message named "Schedule + EMS Interface Base Rule."
	
	10. Close this message to return the focus to the list.
	
	11. To delete this message, in the "Associated Messages In FLD" window, click to
	  select the message. In the Operations Available box, click
	  lpFLD->DeleteMessages(). Click Call Function, and then to confirm the
	  deletion, click OK. The message is deleted.
	
	If the user had an existing delegate, re-add the delegate.
	
	MORE INFORMATION
	================
	
	The MDBView utility (Mdbvu32.exe) is located on both the Standard Edition and
	Enterprise Edition of the Exchange Server CD-ROM in the Support\Utils\I386
	folder. You can run the utility directly from the CD-ROM.
	
	Additional query words:
	
	======================================================================
	Keywords          :  
	Technology        : kbZNotKeyword2 kbScheduleSearch kbSchedule700 kbSchedule700a kbSchedule750
	Version           : :7.0,7.0a,7.5
	Issue type        : kbprb
	
	=============================================================================
	
