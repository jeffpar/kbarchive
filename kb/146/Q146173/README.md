---
layout: page
title: "Q146173: XCLN: Task Created in Appointment Book has no Created By Stamp"
permalink: kb/146/Q146173/
---

## Q146173: XCLN: Task Created in Appointment Book has no Created By Stamp

	Article: Q146173
	Product(s): Microsoft Exchange
	Version(s): WINDOWS:7.0,7.5; winnt:4.0,5.0
	Operating System(s): 
	Keyword(s): kbusage
	Last Modified: 22-OCT-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Exchange Server, versions 4.0, 5.0 
	- Microsoft Schedule+, versions 7.0, 7.5 
	-------------------------------------------------------------------------------
	
	
	SYMPTOMS
	========
	
	When you create a task in another user's Appointment Book with Access Control
	List (ACL) Owner and Delegate Owner privileges, the 'Created by' stamp will not
	be left on the task. However, the 'Created by' stamp will be there if the ACL's
	are Create, Modify, and Delegate.
	
	
	MORE INFORMATION
	================
	
	The only differences between the two sets of ACLs are that the owner' ACLs allow
	the selected user to modify all parts of your schedule, including private items,
	and that Owners and Delegate Owners can change user access permissions for your
	schedule. This is for informational purposes only.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in versions 4.0 and 5.0 of
	Microsoft Exchange Server. We are researching this problem and will post new
	information here in the Microsoft Knowledge Base as it becomes available.
	
	======================================================================
	Keywords          : kbusage 
	Technology        : kbExchangeSearch kbExchange500 kbExchange400 kbZNotKeyword2 kbScheduleSearch kbSchedule700 kbSchedule750
	Version           : WINDOWS:7.0,7.5; winnt:4.0,5.0
	
	=============================================================================
	
