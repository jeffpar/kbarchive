---
layout: page
title: "Q148129: NetDDE Trusted Shares Disappear After The User Logs Off"
permalink: /kb/148/Q148129/
---

## Q148129: NetDDE Trusted Shares Disappear After The User Logs Off

{% raw %}

	Article: Q148129
	Product(s): Microsoft Windows NT
	Version(s): 3.51
	Operating System(s): 
	Keyword(s): 
	Last Modified: 08-AUG-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Workstation version 3.51 
	- Microsoft Windows NT Server version 3.51 
	-------------------------------------------------------------------------------
	
	
	SYMPTOMS
	========
	
	The NetDDE trusted shares that you have created using a DDEShare application
	disappear after you log off.
	
	CAUSE
	=====
	
	The user profile for the current user is not saved when the user logs off.
	Therefore, the NetDDE trusted shares information is removed.
	
	RESOLUTION
	==========
	
	To resolve this problem, use one of the following methods:
	
	- Upgrade to Windows NT Workstation and Server version 4.0
	
	  -or-
	
	- Edit the permissions on the DDE Trusted Shares registry subkey, by using the
	  following steps:
	
	  WARNING: Using Registry Editor incorrectly can cause serious, system- wide
	  problems that may require you to reinstall Windows NT to correct them.
	  Microsoft cannot guarantee that any problems resulting from the use of
	  Registry Editor can be solved. Use this tool at your own risk.
	
	  1. Start Registry Editor (REGEDT32.EXE) and locate the following Registry
	     subkey in the HKEY_CURRENT_USER subtree:
	
	     \SOFTWARE\Microsoft\NetDDE\DDE Trusted Shares
	
	  2. From the Security menu, select Permissions.
	
	  3. In the Registry Key Permissions dialog box, remove the Delete access for
	     the DDE Shares subkey.
	
	  4. Select the Replace Permission on Existing Subkeys check box.
	
	  5. Click OK and quit Registry Editor.
	
	For more information, see the following article in the Microsoft knowledge base:
	
	  ARTICLE-ID: Q114089
	  TITLE : Using the Windows NT NetDDE Share Manager
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in Windows NT version 3.51. This
	problem was corrected in Windows NT Workstation or Server version 4.0.
	
	Additional query words: wonderware
	======================================================================
	Keywords          :  
	Technology        : kbWinNTsearch kbWinNTWsearch kbWinNT351search kbWinNTW351search kbWinNTW351 kbWinNTSsearch kbWinNTS351 kbWinNTS351search
	Version           : 3.51
	
	=============================================================================
	

{% endraw %}
