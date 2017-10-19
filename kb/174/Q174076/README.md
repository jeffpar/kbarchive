---
layout: page
title: "Q174076: Invalid Password Message When Strong Passwords Are Required"
permalink: /kb/174/Q174076/
---

## Q174076: Invalid Password Message When Strong Passwords Are Required

	Article: Q174076
	Product(s): Microsoft Windows NT
	Version(s): 3.51,4.0
	Operating System(s): 
	Keyword(s): kbsetup kbWinNT400sp4fix
	Last Modified: 09-AUG-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Server versions 3.51, 4.0 
	- Microsoft Windows NT Server version 4.0, Terminal Server Edition 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	After you change your password, you receive an error indicating that it does not
	meet the domain password requirements; however, the stated requirements have
	been met.
	
	CAUSE
	=====
	
	Normally, this message is correct; however, when strong passwords are required
	there may be restrictions in effect that will exclude many passwords.
	
	RESOLUTION
	==========
	
	To resolve this problem, obtain the latest service pack for Windows NT 4.0 or
	Windows NT Server 4.0, Terminal Server Edition. For additional information,
	please see the following article in the Microsoft Knowledge Base:
	
	  Q152734 How to Obtain the Latest Windows NT 4.0 Service Pack
	
	
	NOTE: The hotfix will need to be applied to all clients. The client is
	responsible for mapping a text message to the error code returned from the
	server.
	
	MORE INFORMATION
	================
	
	The old password error message was:
	
	  Your new password does not meet the minimum length or password history
	  requirements of the domain.
	
	The new messages displayed after you apply the fix are:
	
	  Your new password does not meet the minimum length or password history
	  requirements of the domain. Also, your site may require passwords that must
	  be a combination of upper case, lower case, numbers, and non-alphanumeric
	  characters.
	
	  Your password must be at least <#> characters long. Your new password
	  cannot be the same as any of your previous <#> passwords. Also, your
	  site may require passwords that must be a combination of upper case, lower
	  case, numbers, and non-alphanumeric characters.
	
	The numeric <#> in the previous dialog box comes from the Account Policy in
	User Manager.
	
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in Windows NT 4.0 and Windows NT
	Server 4.0, Terminal Server Edition. This problem was first corrected in Windows
	NT 4.0 Service Pack 4.0 and Windows NT Server 4.0, Terminal Server Edition
	Service Pack 4.
	
	
	Additional query words: passfilt change passwords pass word win95 can't workstation wfw workgroups fail unable
	
	======================================================================
	Keywords          : kbsetup kbWinNT400sp4fix 
	Technology        : kbWinNTsearch kbWinNT351search kbWinNT400search kbWinNTSsearch kbWinNTS400search kbWinNTS400 kbWinNTS351 kbNTTermServ400 kbNTTermServSearch kbWinNTS351search
	Version           : :3.51,4.0
	Hardware          : x86
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	
