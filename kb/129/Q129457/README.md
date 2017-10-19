---
layout: page
title: "Q129457: Anonymous Connections May Be Able to Obtain the Password Policy"
permalink: /kb/129/Q129457/
---

## Q129457: Anonymous Connections May Be Able to Obtain the Password Policy

	Article: Q129457
	Product(s): Microsoft Windows NT
	Version(s): 4.0,4.0 SP3
	Operating System(s): 
	Keyword(s): kbenv kbWinNT400sp4fix
	Last Modified: 06-FEB-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Workstation version 4.0 SP3 
	- Microsoft Windows NT Server version 4.0 SP3 
	- Microsoft Windows NT Server version 4.0, Terminal Server Edition 
	-------------------------------------------------------------------------------
	
	
	SYMPTOMS
	========
	
	Windows NT 4.0 with Service Pack 3 (SP3) installed provides the capability to
	restrict anonymous users from obtaining system information. For more
	information, please see the following article in the Microsoft Knowledge Base:
	
	  Q143474: Restricting Information Available to Anonymous Logon Users
	
	However, with RestrictAnonymous access enabled, anonymous connections are able to
	obtain the password policy from a Windows NT Server. The password policy defines
	the Windows NT domain policy with respect to the minimum password length,
	whether blank passwords are permitted, maximum password age, and password
	history.
	
	Anonymous access to the password policy information is used by Windows NT to
	provide end-users detailed error information under specific circumstances. If
	the user is required to change their password at the next logon, and the user
	enters a new password that is rejected because of the password policy, Windows
	NT can tell the user why the password was rejected. The password policy is
	obtained by the system before the user has completed the logon and therefore
	uses an anonymous connection.
	
	For example, assume there is a password policy that requires a minimum password
	length of 8 characters and a history that remembers the last 5 passwords. If the
	user chooses a new password of 6 characters, or enters a previous password, they
	see a detailed error message with the following information:
	
	  Your password must be at least 8 characters long. Your new password cannot be
	  the same as any of your previous 5 passwords.
	
	RESOLUTION
	==========
	
	Microsoft has a fix available that disables anonymous access to password policy
	information when the RestrictAnonymous access is enabled. When the hotfix is
	applied and RestrictAnonymous is enabled, anonymous connections cannot obtain
	password policy information.
	
	Microsoft recommends installing the hotfix on all domain controllers that have
	Service Pack 3 installed.
	
	To resolve this problem, obtain the latest service pack for Windows NT 4.0 or
	Windows NT Server 4.0, Terminal Server Edition. For additional information,
	please see the following article in the Microsoft Knowledge Base:
	
	  Q152734 How to Obtain the Latest Windows NT 4.0 Service Pack
	
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in Windows NT 4.0 and Windows NT
	Server 4.0, Terminal Server Edition. This problem was first corrected in Windows
	NT 4.0 Service Pack 4.0 and Windows NT Server 4.0, Terminal Server Edition
	Service Pack 4.
	
	
	
	MORE INFORMATION
	----------------
	
	If the user performs the same steps outlined in the example above after the
	hotfix is installed, they receive the following error message:
	
	Your new password does not meet the minimum length or password history
	requirements of the domain.
	
	The user should consult the account administrator to determine the password
	policy in effect for their account domain.
	
	Additional query words: 4.00 sp3
	
	======================================================================
	Keywords          : kbenv kbWinNT400sp4fix 
	Technology        : kbWinNTsearch kbWinNTWsearch kbWinNTW400search kbWinNT400search kbWinNTW400sp3 kbWinNTSsearch kbWinNTS400sp3 kbWinNTS400search kbNTTermServ400 kbNTTermServSearch
	Version           : :4.0,4.0 SP3
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	
