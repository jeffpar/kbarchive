---
layout: page
title: "Q105995: AT Command May Fail Copying Files to a LAN Manager Server"
permalink: /kb/105/Q105995/
---

## Q105995: AT Command May Fail Copying Files to a LAN Manager Server

{% raw %}

	Article: Q105995
	Product(s): Microsoft Windows NT
	Version(s): winnt:3.1,3.5,3.51,4.0
	Operating System(s): 
	Keyword(s): kbnetwork
	Last Modified: 06-AUG-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Server versions 3.1, 3.5, 3.51, 4.0 
	- Microsoft Windows NT Workstation versions 3.1, 3.5, 3.51, 4.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	If you use the AT command to schedule a batch file that copies files to a
	Microsoft LAN Manager server in a different domain, the batch file may fail and
	you will receive an "Access Denied" error message. However, if you execute the
	batch file from a command prompt, it successfully copies the files without
	generating an error message.
	
	Sample batch file:
	
	  Net Use z: \\LMServer\Share
	  copy test.txt z:\
	  Net Use z: /d
	
	CAUSE
	=====
	
	Without domain information for the user account, using the AT command does not
	succeed. This is because the account it is trying to validate is the SYSTEM
	account. By default, the Schedule service uses the SYSTEM account for access
	rights.
	
	WORKAROUND
	==========
	
	There are two workarounds for this problem:
	
	- Supply domain information for the user in the NET USE command, such as the
	  following
	
	  Net Use z: \\LMServer\share password /USER:LMDomain\<guest>
	
	  where <guest> must be a valid account in the "LMDomain" domain.
	
	- Have the Schedule Service log on as a valid account on that LAN Manager
	  server by doing the following:
	
	  1. In Control Panel, double-click the Services icon.
	
	  2. Click the Schedule service, and then click Startup.
	
	  3. Type the user account on the LAN Manager server (which matches a local
	     account) with sufficient rights and type the appropriate password.
	
	  4. Restart the service so the changes take effect.
	
	  This option does not require changing the command line and will be permanent
	  unless it is changed.
	
	Additional query words:
	
	======================================================================
	Keywords          : kbnetwork 
	Technology        : kbWinNTsearch kbWinNTWsearch kbWinNTW400 kbWinNTW400search kbWinNT351search kbWinNT350search kbWinNT400search kbWinNTW350 kbWinNTW350search kbWinNTW351search kbWinNTW351 kbWinNTW310 kbWinNTSsearch kbWinNTS400search kbWinNTS400 kbWinNTS351 kbWinNTS350 kbWinNTS310 kbWinNTS351search kbWinNTS350search kbWinNTS310search kbWinNT310Search kbWinNTW310Search
	Version           : winnt:3.1,3.5,3.51,4.0
	
	=============================================================================
	

{% endraw %}
