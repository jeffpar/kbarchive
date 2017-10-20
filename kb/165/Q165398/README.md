---
layout: page
title: "Q165398: Profiles for Members of Guests Group Are Deleted"
permalink: /kb/165/Q165398/
---

## Q165398: Profiles for Members of Guests Group Are Deleted

{% raw %}

	Article: Q165398
	Product(s): Microsoft Windows NT
	Version(s): WinNT:4.0
	Operating System(s): 
	Keyword(s): kbnetwork
	Last Modified: 09-AUG-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Workstation version 4.0 
	- Microsoft Windows NT Server version 4.0 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	If a user is added to the Guests group (or the Domain Guests group, which
	belongs to the Guests group) in Windows NT 4.0, when the user logs on, that
	user's profile information is only stored temporarily. When that user logs off,
	the entire profile is deleted. This includes everything stored in the
	%userprofile% directory: the user's registry hive information, custom desktop
	icons, and so on.
	
	If the user is assigned membership to both the Guests group and the
	Administrators group, the user's profile will not be deleted when the user logs
	off. If the user is subsequently removed from the Administrators group and
	remains a member of the Guests group, the user's profile will be deleted the
	next time the user logs off. This is by design.
	
	MORE INFORMATION
	================
	
	The Guests group plays a special role in Windows NT 4.0 that integrates with the
	behavior of the new Windows NT 4.0 user profile scheme. Membership in the Guests
	group should only be granted to users who are intended to be guests on a
	computer or in a domain. It should never be granted to regular users. Guest
	accounts are not meant for users who have data and need to log on and off
	domains often. By intent, guests are people who may need to log to on a domain
	for a specific reason and then log off, but they do not stay or use the system
	for an extended time.
	
	If users log on to a domain frequently enough that they would want to customize a
	desktop and keep data on it, they are not guests; they should be considered
	users, and should no longer be part of the Guests group.
	
	Following this logic, if someone is made a member of the Administrators group,
	that user is definitely not a guest, which is why the user profile is not
	deleted when the user is a member of both groups.
	
	Additional query words: policy operators power
	======================================================================
	Keywords          : kbnetwork 
	Technology        : kbWinNTsearch kbWinNTWsearch kbWinNTW400 kbWinNTW400search kbWinNT400search kbWinNTSsearch kbWinNTS400search kbWinNTS400
	Version           : WinNT:4.0
	Hardware          : x86
	Issue type        : kbinfo
	
	=============================================================================
	

{% endraw %}
