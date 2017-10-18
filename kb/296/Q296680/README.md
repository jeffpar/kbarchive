---
layout: page
title: "Q296680: User Accounts Are Not Excluded from Password Synchronization"
permalink: kb/296/Q296680/
---

## Q296680: User Accounts Are Not Excluded from Password Synchronization

	Article: Q296680
	Product(s): Microsoft Windows NT
	Version(s): 2.0
	Operating System(s): 
	Keyword(s): kbenv
	Last Modified: 18-MAY-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows Services for UNIX, version 2.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	The user accounts that are supposed to be excluded by the Password
	Synchronization feature may not be excluded, and password changes to these
	accounts may occur unexpectedly.
	
	CAUSE
	=====
	
	This problem can occur if a UNIX administrator adds the "SYNC_USERS=-root -pat"
	line to the Sso.conf file so that all user passwords are synchronized, except
	for the "root" and "pat" user passwords. However, the exclude delimiter, the
	minus (-) symbol, is ignored (not recognized), which enables Password
	Synchronization to occur for the "root" and "pat" user passwords.
	
	WORKAROUND
	==========
	
	To work around this problem, use either of the following methods:
	
	- Explicitly list the users in the Sso.conf file by using the SYNC_USERS field.
	  The plus (+) symbol delimiter is used to explicitly add a user, for example:
	
	  SYNC_USERS=+fred +leon +ralph
	
	- Add the excluded users to a special group called "PasswordPropDeny" in either
	  Microsoft Windows 2000 or Microsoft Windows NT. These users can be added by
	  using Active Directory Users and Computers in a Windows 2000 domain or User
	  Manager on a Windows NT 4.0 domain.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in the Microsoft products that are
	listed at the beginning of this article.
	
	Additional query words:
	
	======================================================================
	Keywords          : kbenv 
	Technology        : kbWinServiceUNIX200 kbWinServiceUNIXSearch
	Version           : :2.0
	Issue type        : kbprb
	
	=============================================================================
	
