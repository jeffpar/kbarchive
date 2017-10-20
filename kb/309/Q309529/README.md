---
layout: page
title: "Q309529: The CASE_IGNORE_NAME Line Has No Effect"
permalink: /kb/309/Q309529/
---

## Q309529: The CASE_IGNORE_NAME Line Has No Effect

{% raw %}

	Article: Q309529
	Product(s): Microsoft Windows NT
	Version(s): 2.0
	Operating System(s): 
	Keyword(s): kbenv kberrmsg kbtool
	Last Modified: 06-AUG-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows Services for UNIX, version 2.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you are using AIX 4.3.3, the sso.conf CASE_IGNORE_NAME line has no effect.
	This means that passwords for user names where the case does not match between
	UNIX and Windows are not synchronized, and you may receive the following error
	messages in the syslog:
	
	  ERR log:
	  ssod:[9180]: Bad shadow file - /etc/security.
	  ssod:[9180]: Unable to update password for user (user name) (error - 21)
	
	  INFO log:
	  ssod:[4966]: Bad shadow file - /etc/security.
	  ssod:[4966]: Unable to update password for user (user name) (error - 21)
	
	CAUSE
	=====
	
	This problem can occur because of a bug in the current AIX ssod that causes the
	password synchronization to fail when the user name case does not match between
	Windows and UNIX.
	
	RESOLUTION
	==========
	
	A supported fix is now available from Microsoft, but it is only intended to
	correct the problem that is described in this article. Apply it only to systems
	that are experiencing this specific problem.
	
	To resolve this problem, contact Microsoft Product Support Services to obtain the
	fix. For a complete list of Microsoft Product Support Services phone numbers and
	information about support costs, visit the following Microsoft Web site:
	
	  http://support.microsoft.com/default.aspx?scid=fh;EN-US;CNTACTMS
	
	NOTE: In special cases, charges that are ordinarily incurred for support calls
	may be canceled if a Microsoft Support Professional determines that a specific
	update will resolve your problem. The usual support costs will apply to
	additional support questions and issues that do not qualify for the specific
	update in question.
	
	The English version of this fix should have the following file attributes or
	later:
	
	  Date          Time       Size      File name     
	  --------------------------------------------
	  17-Oct-2001   16:26      202,392   Ssod.a42
	
	
	
	STATUS
	======
	
	Microsoft has confirmed that this is a problem in the Microsoft products that
	are listed at the beginning of this article.
	
	MORE INFORMATION
	================
	
	This bug as been confirmed to apply to AIX 4.3.3, but it may also apply to other
	versions of UNIX/Linux.
	
	NOTE: Make sure that the following lines are in the Sso.conf file:
	
	  "FILE_PATH=/etc/security/passwd"
	  "CASE_IGNORE_NAME=1"
	
	Additional query words: sfu
	
	======================================================================
	Keywords          : kbenv kberrmsg kbtool 
	Technology        : kbWinServiceUNIX200 kbWinServiceUNIXSearch
	Version           : :2.0
	Hardware          : ALPHA x86
	Issue type        : kbprb
	Solution Type     : kbfix
	
	=============================================================================
	

{% endraw %}
