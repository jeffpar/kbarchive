---
layout: page
title: "Q150729: Err Msg: &quot;Access Denied&quot; When Using Account Operator"
permalink: /kb/150/Q150729/
---

## Q150729: Err Msg: &quot;Access Denied&quot; When Using Account Operator

{% raw %}

	Article: Q150729
	Product(s): Microsoft Windows NT
	Version(s): winnt:3.51
	Operating System(s): 
	Keyword(s): 
	Last Modified: 08-AUG-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Server version 3.51 
	-------------------------------------------------------------------------------
	
	
	SYMPTOMS
	========
	
	When you use the Account Operator to manage an NT NetWareEnable account, you may
	experience the following symptoms.
	
	When a user with account operator privileges tries to create a new user, the
	Maintain NetWare Compatible Login checkbox and the NWCompat button are missing
	from the New User and User Properties dialog boxes in User Manager for Domains.
	
	The account operator is unable to change the password for the Windows NT NetWare
	Enable user. The following error message appears:
	
	  Access Denied
	
	MORE INFORMATION
	================
	
	Steps to reproduce the problem:
	
	The account operator received the error message "Access Denied" when trying to
	change the password for Windows NT NetWare-enable users.
	
	These two users were created by the domain administrator:
	
	  Test_Op = Member of Account Operators
	  Test_User = Member of Domain Users with FPNW enabled
	
	If the domain administrator logs off and Test_Op logs on, any attempt to modify
	the password of Test_User results in an Access Denied error. (Test_Op can modify
	non-NetWare Windows NT account passwords with no problem). The Test_Op can also
	be a member of the Console Operators Group for NetWare console operators, but
	the same problem exists.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in Windows NT version 3.51. This
	problem was corrected in the latest Windows NT 3.51 U.S. Service Pack. For
	information on obtaining the Service Pack, query on the following word in the
	Microsoft Knowledge Base (without the spaces):
	
	  S E R V P A C K
	
	
	
	Additional query words: prodnt
	
	======================================================================
	Keywords          :  
	Technology        : kbWinNTsearch kbWinNT351search kbWinNTSsearch kbWinNTS351 kbWinNTS351search
	Version           : winnt:3.51
	
	=============================================================================
	

{% endraw %}
