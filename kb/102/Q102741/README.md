---
layout: page
title: "Q102741: Windows NT Guest Account vs. Macintosh Guest Account"
permalink: kb/102/Q102741/
---

## Q102741: Windows NT Guest Account vs. Macintosh Guest Account

	Article: Q102741
	Product(s): Microsoft Windows NT
	Version(s): 3.1 4.0
	Operating System(s): 
	Keyword(s): kbinterop
	Last Modified: 08-AUG-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Advanced Server, version 3.1 
	- Microsoft Windows NT Server version 4.0 
	-------------------------------------------------------------------------------
	
	This articles discusses the differences between the guest account on a
	Windows NT Advanced Server running Services for Macintosh, and the
	Guest logon option that Macintosh users may choose when attempting to
	log on to a Windows NT Advanced Server running Services for Macintosh.
	
	The guest account on a Windows NT Advanced Server is different from
	the Guest logon option for Macintosh. When a Macintosh user attempts
	to log on to a Windows NT Advanced Server running Services for
	Macintosh, and that user selects the Guest option, that user is not
	logged on to the Windows NT Advanced Server as the guest account.
	
	MORE INFORMATION
	================
	
	When a Macintosh user selects the Guest option during logon, the MacFile Control
	Panel reports the following when displaying the Users connected:
	
	Connected Users      Computers
	<Guest>              <Unknown>
	
	In this case, the Macintosh is not logged with any user account the Windows NT
	Advanced Server has.
	
	When a Macintosh user selects the Registered User option and uses the user name
	"Guest," the MacFile Control Panel reports the following when displaying the
	Users connected:
	
	Connected Users      Computers
	<Guest>              <Unknown>
	
	In this case, the Macintosh is logged on to the Windows NT Advanced Server as
	that computer's guest, and therefore has the permissions of the guest account.
	
	The difference, as displayed, is the missing greater-than and less-than (">"
	and "<") signs. The difference, effectually, is that the Macintosh Guest is
	not the same as the guest account; they are similar in name only.
	
	To disable a Macintosh user from logging on to the Windows NT Advanced Server as
	a Guest (as opposed to as the guest account), the Allow Guests To Logon check
	box in the Security box of the MacFile Attributes dialog box must be clear (that
	is, not checked).
	
	To disable a Macintosh user from logging on to the Windows NT Advanced Server as
	the guest account, the guest account itself must be disabled. This makes it so
	no user, from any computer, can use the guest account.
	
	Another option to deny the guest account access from a Macintosh is to limit the
	guest account to log on only from certain named computers. This can be done in
	the Logon From box, which can be accessed by choosing User Properties from the
	User Manager.
	
	The permissions of the guest account is set by the User Manager. The permissions
	for the guest logon option is dependent upon the Everyone setting under
	Permissions from the MacFile menu in File Manager. Note that the Macintosh
	permission structure differs from the Windows NT permission structure.
	
	Additional query words: sfm prodnt
	
	======================================================================
	Keywords          : kbinterop 
	Technology        : kbWinNTsearch kbWinNT400search kbWinNTSsearch kbWinNTS400search kbWinNTS400 kbWinNTAdvSerSearch kbWinNTAdvServ310 kbWinNT310Search
	Version           : 3.1 4.0
	
	=============================================================================
	
