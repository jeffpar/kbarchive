---
layout: page
title: "Q103623: Error Locating Server with Master UAS Data"
permalink: /kb/103/Q103623/
---

## Q103623: Error Locating Server with Master UAS Data

{% raw %}

	Article: Q103623
	Product(s): Microsoft Windows NT
	Version(s): 3.1
	Operating System(s): 
	Keyword(s): kbnetwork
	Last Modified: 27-FEB-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Advanced Server, version 3.1 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you choose Permissions from the Users menu in Remote Access Administrator,
	the following error message appears:
	
	  Error locating server with master UAS data. Error 6118: The list of servers
	  for this workgroup is not currently available.
	
	CAUSE
	=====
	
	This error message can be caused by any of the following:
	
	- The domain controller may no longer be running.
	
	- The connection to the domain controller may be broken.
	
	- The Windows NT computer is not on a network.
	
	RESOLUTION
	==========
	
	If you name a server or domain in Remote Access Administrator and you are not on
	a network, or are on a network where the named item does not exist, the above
	error will be generated. Although you can change the domain or server name with
	Remote Access Administrator, there is no way to erase a domain or server name
	completely. To do this requires editing the Registry:
	
	WARNING: Using Registry Editor incorrectly can cause serious, system-wide
	problems that may require you to reinstall Windows NT to correct them. Microsoft
	cannot guarantee that any problems resulting from the use of Registry Editor can
	be solved. Use this tool at your own risk.
	
	1. Start Registry Editor and locate the following Registry subkey:
	
	  HKEY_CURRENT_USER\Software\Microsoft\Windows NT
	  \CurrentVersion\Network\Remote Access Admin
	
	2. Locate the value RasAdminFocus. It should be of type REG_SZ, and have a text
	  string which matches the name of the server or domain you selected in Remote
	  Access Administrator.
	
	3. Erase the text string from RasAdminFocus, leaving it with a null value.
	
	Upon restarting Remote Access Administrator, you should be able to choose
	Permissions from the Users menu, without generating any error.
	
	Additional query words: prodnt
	
	======================================================================
	Keywords          : kbnetwork 
	Technology        : kbWinNTsearch kbWinNTAdvSerSearch kbWinNTAdvServ310 kbWinNT310Search
	Version           : :3.1
	Issue type        : kbprb
	
	=============================================================================
	

{% endraw %}
