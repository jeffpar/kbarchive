---
layout: page
title: "Q149948: Changing Properties for Many Users Resets Logon Password Flag"
permalink: kb/149/Q149948/
---

## Q149948: Changing Properties for Many Users Resets Logon Password Flag

	Article: Q149948
	Product(s): Microsoft Windows NT
	Version(s): 3.51,4.0
	Operating System(s): 
	Keyword(s): kbtool kbui
	Last Modified: 20-FEB-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Server versions 3.51, 4.0 
	-------------------------------------------------------------------------------
	
	
	SYMPTOMS
	========
	
	It is possible under User Manager to select multiple users and to change their
	common properties (all properties but the user name.) When you change the
	properties for multiple users and one user has the flag "User Must Change
	Password at Next Logon" enabled and another user does not, then changing any
	other property of the users resets this flag for all users.
	
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in Microsoft Windows NT versions
	3.51 and 4.0. We are researching this problem and will post new information here
	in the Microsoft Knowledge Base as it becomes available.
	
	
	MORE INFORMATION
	================
	
	For more information, please see the following article(s) in the Microsoft
	Knowledge Base:
	
	Q150995How to set User Manager Settings for Multiple Users
	
	Additional query words: 4.00 prodnt
	
	======================================================================
	Keywords          : kbtool kbui 
	Technology        : kbWinNTsearch kbWinNT351search kbWinNT400search kbWinNTSsearch kbWinNTS400search kbWinNTS400 kbWinNTS351 kbWinNTS351search
	Version           : :3.51,4.0
	
	=============================================================================
	
