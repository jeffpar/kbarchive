---
layout: page
title: "Q147823: Automated Procedure for Updating WFW Clients"
permalink: /kb/147/Q147823/
---

## Q147823: Automated Procedure for Updating WFW Clients

{% raw %}

	Article: Q147823
	Product(s): Microsoft Windows NT
	Version(s): 3.50 3.51
	Operating System(s): 
	Keyword(s): 
	Last Modified: 08-AUG-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Workstation versions 3.5, 3.51 
	- Microsoft Windows NT Server versions 3.5, 3.51 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	When you update Microsoft Windows for Workgroups clients from the compact disc
	for Windows NT Server version 3.5 or 3.51, and there are multiple clients that
	need to be updated, you can create a batch file that can be run either from a
	login script or through Systems Management Server (SMS).
	
	MORE INFORMATION
	================
	
	Before you attempt to run a batch file, make sure that the directory being
	shared has sufficient share and directory permissions and that file attributes
	are not read-only. You will also need to include in your batch file the attrib
	command to remove read-only attributes from the files that are being replaced on
	the local drive. Net.exe and Net.msg should be copied to the Windows directory.
	The remaining files should be copied to the system directory. Restart Windows.
	
	NOTE: Test this on a single computer first before broad implementation.
	
	
	Additional query words: 3.50 3.51 prodnt
	======================================================================
	Keywords          :  
	Technology        : kbWinNTsearch kbWinNTWsearch kbWinNT351search kbWinNT350search kbWinNTW350 kbWinNTW350search kbWinNTW351search kbWinNTW351 kbWinNTSsearch kbWinNTS351 kbWinNTS350 kbWinNTS351search kbWinNTS350search
	Version           : 3.50 3.51
	
	=============================================================================
	

{% endraw %}
