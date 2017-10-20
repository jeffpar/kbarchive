---
layout: page
title: "Q168121: How Windows 95 Determines Which Policies to Enforce"
permalink: /kb/168/Q168121/
---

## Q168121: How Windows 95 Determines Which Policies to Enforce

{% raw %}

	Article: Q168121
	Product(s): Microsoft Windows 95.x Retail Product
	Version(s): 95
	Operating System(s): 
	Keyword(s): kbother win95
	Last Modified: 17-DEC-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows 95 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	When policies are being enforced with Windows 95, the following queries are used
	to determine the correct policy for the current user:
	
	1. Does a specific policy exist for the user? If yes, implement the policy; if
	  no, continue to the next query.
	
	2. Are group policies enabled? If yes, is the current user a member of any
	  groups within the policy file? If the user is a member of multiple groups,
	  the first one that is specified in the policy file is implemented. If group
	  policies are not enabled or the user is not a member of a group for which
	  policies are implemented, continue to the next query.
	
	3. Is there a default user in the policy file? If yes, implement the policy; if
	  no, use the current logon User.dat file.
	
	MORE INFORMATION
	================
	
	When a user logs on and policies are being enforced, the logon name is set as
	the current user when the login script finishes. If the current user has a
	specific policy available, that policy is used.
	
	If the user does not have a policy, and group policies are enabled, Windows 95
	determines whether the user is a member of any of the groups specified in the
	.pol file. If the current user is a member of a group, group policies are
	processed for all groups to which the user belongs, starting with the lowest
	priority group and ending with the highest priority group. Groups can be moved
	up and down in priority in Group Policy Editor.
	
	If the user is not a member of any group, the default user policy is used. If
	there is no default user policy, the existing policy remains in effect.
	
	Additional query words: profiles
	
	======================================================================
	Keywords          : kbother win95 
	Technology        : kbWin95search kbZNotKeyword3
	Version           : 95
	
	=============================================================================
	

{% endraw %}
