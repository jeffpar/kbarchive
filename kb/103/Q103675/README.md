---
layout: page
title: "Q103675: Err Msg: This Operation is Not Allowed in this Special Group"
permalink: kb/103/Q103675/
---

## Q103675: Err Msg: This Operation is Not Allowed in this Special Group

	Article: Q103675
	Product(s): Microsoft Windows NT
	Version(s): 3.1
	Operating System(s): 
	Keyword(s): kbinterop
	Last Modified: 08-AUG-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Advanced Server, version 3.1 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	A primary group is needed when a user logs on using Services for Macintosh or
	runs POSIX applications. This group is used as the default group in Services for
	Macintosh when assigning permissions. If there is not a primary group, you will
	receive the following error message:
	
	  This operation is not allowed on this special group. ID 2234.
	
	This error message is described in the message guide as to occur in groups such
	as Users, Administrators and Guests; however, the problem goes far beyond that.
	
	MORE INFORMATION
	================
	
	When you delete a global group, Windows NT Advanced Server first removes all of
	its members; if one of its members is a Services for Macintosh user and has that
	group assigned as his Primary Group, the Windows NT Advanced Server fails to
	remove the group and generates the above error message (ID 2234). (The same
	thing happens if, when doing group maintenance, an attempt is made to remove
	that Macintosh user).
	
	To successfully delete the group, modify all Services for Macintosh users that
	are members of that group, and have it as their Primary Group, so they have a
	different Primary Group.
	
	For each Service for Macintosh user, do the following:
	
	1. From the User Manager for Domains, double-click the desired user.
	
	2. Select Groups.
	
	3. Choose a global group (different than the one you want to delete), and then
	  choose Set.
	
	4. Choose OK.
	
	5. Choose OK or Close.
	
	Even though this operation is time-consuming, using a Primary Group is
	recommended because of the lack of flexibility in the Macintosh permission
	scheme.
	
	For more information on how to set Primary Groups for Services for Macintosh
	users and what the permission scheme is, see the chapter titled "How Services
	for Macintosh Works" in the Windows NT Advanced Server "Services for Macintosh"
	guide.
	
	Additional query words: sfm prodnt primary group 2234
	
	======================================================================
	Keywords          : kbinterop 
	Technology        : kbWinNTsearch kbWinNTAdvSerSearch kbWinNTAdvServ310 kbWinNT310Search
	Version           : 3.1
	
	=============================================================================
	
