---
layout: page
title: "Q142622: Repeated Automatic Logons in Windows NT May Fail"
permalink: /kb/142/Q142622/
---

## Q142622: Repeated Automatic Logons in Windows NT May Fail

{% raw %}

	Article: Q142622
	Product(s): Microsoft Windows NT
	Version(s): winnt:3.5,3.51
	Operating System(s): 
	Keyword(s): kbenv
	Last Modified: 08-AUG-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Workstation versions 3.5, 3.51 
	- Microsoft Windows NT Server versions 3.5, 3.51 
	-------------------------------------------------------------------------------
	
	
	SYMPTOMS
	========
	
	Windows NT has an auto-logon feature that allows an administrator to enter a
	user name and password in the Registry. After a very large number of repeated
	logon and logoff attempts, a logon attempt may eventually fail. Attempting to
	change the password for this user at this time may also fail.
	
	CAUSE
	=====
	
	When a user logs on to Windows NT, Windows NT takes the unencrypted password
	that the administrator set in the Registry for the auto-logon and uses it to log
	the specified user onto the workstation. A problem has been found when a large
	number of successive logon attempts occurs.
	
	For additional information on the Windows NT auto-logon feature, please see the
	following article in the Microsoft Knowledge Base:
	
	  ARTICLE-ID: Q97597
	  TITLE : How to Enable Automatic Logon in Windows NT
	
	
	WORKAROUND
	==========
	
	To resolve this problem on Windows NT 3.51 Workstation or Server, install
	Service Pack 5 or later, or upgrade to Windows NT Workstation and Server version
	4.0.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in Windows NT versions 3.5 and
	3.51. This problem was corrected in the latest Windows NT 3.51 U.S. Service
	Pack. For information on obtaining the Service Pack, query on the following word
	in the Microsoft Knowledge Base (without the spaces):
	
	  S E R V P A C K
	
	
	Additional query words: prodnt
	
	======================================================================
	Keywords          : kbenv 
	Technology        : kbWinNTsearch kbWinNTWsearch kbWinNT351search kbWinNT350search kbWinNTW350 kbWinNTW350search kbWinNTW351search kbWinNTW351 kbWinNTSsearch kbWinNTS351 kbWinNTS350 kbWinNTS351search kbWinNTS350search
	Version           : winnt:3.5,3.51
	
	=============================================================================
	

{% endraw %}
