---
layout: page
title: "Q166822: Remote Password Change Works Incorrectly to Down-Level Server"
permalink: /kb/166/Q166822/
---

## Q166822: Remote Password Change Works Incorrectly to Down-Level Server

{% raw %}

	Article: Q166822
	Product(s): Microsoft Windows NT
	Version(s): winnt:3.51,4.0; :
	Operating System(s): 
	Keyword(s): kbWinNT400sp4fix
	Last Modified: 09-AUG-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Workstation versions 3.51, 4.0 
	- Microsoft Windows NT Server versions 3.51, 4.0 
	- Microsoft LAN Manager 
	- Microsoft Windows NT Server version 4.0, Terminal Server Edition 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When users attempt to manually change their passwords on a down-level LAN
	Manager or LAN Server and a minimum password length policy is set, the passwords
	are changed even if the new password has fewer than the required minimum number
	of characters. This occurs regardless of whether users make their attempts
	through the "net user/password" command from the command prompt, or from the
	Change Password option in the Windows NT Security dialog box (use
	CTRL+ALT+DELETE to get this dialog box).
	
	CAUSE
	=====
	
	When a computer running Windows NT attempts to change the password, it first
	attempts to create a pipe to the remote server. This action will fail, forcing
	the computer to fall back on an older 16-bit API. The older API used to change
	the password is not properly formatting the correct length of the new password
	being sent to the remote server. The end result is that a new password of the
	same length as the old password is created. As long as the old password was
	longer than the minimum password length policy, the new password is changed
	regardless of its length, including if set to NULL.
	
	
	RESOLUTION
	==========
	
	To resolve this problem, obtain the latest service pack for Windows NT 4.0 or
	Windows NT Server 4.0, Terminal Server Edition. For additional information,
	please see the following article in the Microsoft Knowledge Base:
	
	  Q152734 How to Obtain the Latest Windows NT 4.0 Service Pack
	
	
	To resolve this problem, obtain the following fix for Windows NT 3.51:
	
	The fix should have the following time stamp:
	
	  4/30/97 9:49PM                  215,968 Netapi32.dll (Intel)
	  4/30/97 9:52PM                  322,832 Netapi32.dll (Alpha)
	  4/30/97 9:50PM                  339,216 Netapi32.dll (Mips)
	
	NOTE: Service Pack 3 must be applied to Windows NT 3.51 prior to applying this
	fix.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in Windows NT 4.0 and Windows NT
	Server 4.0, Terminal Server Edition. This problem was first corrected in Windows
	NT 4.0 Service Pack 4.0 and Windows NT Server 4.0, Terminal Server Edition
	Service Pack 4.
	
	
	Microsoft has confirmed this to be a problem in Windows NT version 3.51. A
	supported fix is now available, but has not been fully regression-tested and
	should be applied only to systems experiencing this specific problem. Unless you
	are severely impacted by this specific problem, Microsoft recommends that you
	wait for the next Service Pack that contains this fix. Contact Microsoft
	Technical Support for more information.
	
	
	
	Additional query words: net password user change remote
	
	======================================================================
	Keywords          : kbWinNT400sp4fix 
	Technology        : kbWinNTsearch kbWinNTWsearch kbWinNTW400 kbWinNTW400search kbWinNT351search kbWinNT400search kbWinNTW351search kbWinNTW351 kbWinNTSsearch kbWinNTS400search kbWinNTS400 kbWinNTS351 kbNTTermServ400 kbNTTermServSearch kbWinNTS351search kbAudDeveloper kbLanManSearch
	Version           : winnt:3.51,4.0; :
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	

{% endraw %}
