---
layout: page
title: "Q245038: Err Msg: Password on This Account Cannot Be Changed at This..."
permalink: /kb/245/Q245038/
---

## Q245038: Err Msg: Password on This Account Cannot Be Changed at This...

{% raw %}

	Article: Q245038
	Product(s): Microsoft Windows NT
	Version(s): winnt:4.0
	Operating System(s): 
	Keyword(s): 
	Last Modified: 08-AUG-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Workstation version 4.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you try to change your password after you receive the 'Password Change
	Notification' message, you may receive the following error message:
	
	  Password on this account cannot be changed at this time.
	
	CAUSE
	=====
	
	This behavior can occur if the 'Password Change Notification' message appears
	before you are permitted to change your password. By default, the 'Password
	Change Notification' message appears 14 days before the maximum password age. If
	the minimum password age has not passed when you are notified, you do not have
	the permission to change the password, even though you are prompted to do so.
	
	RESOLUTION
	==========
	
	To resolve this issue, set the maximum password age on the primary domain
	controller to at least 14 days more than the minimum:
	
	1. In User Manager, click Account on the Policies menu.
	
	2. In the Maximum Password Age box, enter the number of days until the password
	  will expire.
	
	3. In the Minimum Password Age box, enter the number of days before the user is
	  permitted to make changes.
	
	4. Click OK.
	
	5. Quit User Manager.
	
	NOTE: You must perform this change on each workstation in the domain.
	
	MORE INFORMATION
	================
	
	An example of the password change issue is:
	
	If the maximum password age is 30 days, and the minimum password age is 29 days,
	the password change notification begins on the sixteenth day, which is the
	maximum password age, 30, minus the default notification time, 14. Users are
	prompted to change their passwords on the sixteenth day, but they cannot do so
	because they do not have the appropriate permission until the twenty-ninth day
	based the minimum password age.
	
	To resolve the issue described in the example, set the maximum password age to at
	least 43 days.
	
	For additional information, please see the following article in the Microsoft
	Knowledge Base:
	
	  Q135403 14 Day Password Change Notification Cannot be Changed
	
	Additional query words: age maximum
	
	======================================================================
	Keywords          :  
	Technology        : kbWinNTsearch kbWinNTWsearch kbWinNTW400 kbWinNTW400search kbWinNT400search
	Version           : winnt:4.0
	Issue type        : kbprb
	
	=============================================================================
	

{% endraw %}
