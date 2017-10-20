---
layout: page
title: "Q255987: Service Pack Requires Logon with Local Administrative Rights"
permalink: /kb/255/Q255987/
---

## Q255987: Service Pack Requires Logon with Local Administrative Rights

{% raw %}

	Article: Q255987
	Product(s): Microsoft Windows NT
	Version(s): winnt:4.0 SP4,4.0 SP5,4.0 SP6,4.0 SP6a
	Operating System(s): 
	Keyword(s): kbenv kberrmsg kbsetup
	Last Modified: 08-AUG-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Server versions 4.0 SP4, 4.0 SP5, 4.0 SP6, 4.0 SP6a 
	- Microsoft Windows NT Server, Enterprise Edition versions 4.0 SP4, 4.0 SP5, 4.0 SP6, 4.0 SP6a 
	- Microsoft Windows NT Workstation versions 4.0 SP4, 4.0 SP5, 4.0 SP6, 4.0 SP6a 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	The design of the Windows NT 4.0 Service Pack update process requires an
	additional logon with local administrative credentials after Update.exe has
	restarted the computer.
	
	If a non-administrative user logs on directly after the Service Pack Setup
	process is run, two Application events are logged for ProtectedStorage:
	
	  ProtectedStorage error: 5; OpenSCManager failed.
	
	  ProtectedStorage error: 203; Install Service failed.
	
	These events are logged at every logon until a local administrator logs on.
	
	CAUSE
	=====
	
	Local administrative permission are necessary to successfully process and delete
	all registry values under the following key:
	
	  HKEY_LOCAL_MACHINE\SOFTWARE\Microsoft\Windows\CurrentVersion\RunOnce
	
	RunOnce values are processed with the current login credentials. A typical user
	does not have sufficient permissions to successfully process the "4. 'Install
	pstores.exe'='pstores.exe -install'" RunOnce entry, causing both of the events
	listed above to be logged.
	
	Also, a typical user by default has "Everyone=read" permission on the RunOnce
	key, so the entries cannot be deleted.
	
	Other Microsoft and third-party Setup procedures may be affected in a similar way
	if they use the RunOnce or RunOnceEx keys to complete the Setup process during
	next logon.
	
	WORKAROUND
	==========
	
	Use either of the following methods:
	
	- Have a user with local administrative rights log on to the computer.
	
	- Use an administrative AutoAdminLogon and optionally disable the Mouclass and
	  Kbdclass driver to prevent user interruption.
	
	  This method involves certain issues. The password of the local administrator
	  is stored as plain text in the registry (plus the corresponding script file),
	  and a problem with disabled drivers can lead to an inaccessible system.
	  Furthermore, be aware of the information on the following article in the
	  Microsoft Knowledge Base:
	
	  Q159969 AutoLogon Fails If DontDisplayLastUserName Is Also Enabled
	
	Because of these issues, Microsoft recommends using the first method.
	
	
	Additional query words:
	
	======================================================================
	Keywords          : kbenv kberrmsg kbsetup 
	Technology        : kbWinNTsearch kbWinNTWsearch kbWinNTW400search kbWinNT400search kbWinNTW400sp5 kbWinNTW400sp4 kbWinNTSsearch kbWinNTSEntSearch kbWinNTSEnt400sp6 kbWinNTSEnt400sp5 kbWinNTSEnt400sp4 kbWinNTS400sp6 kbWinNTS400sp5 kbWinNTS400sp4 kbWinNTS400search kbWinNTW400sp6 kbWinNTSEnt400SP6a kbWinNTW400SP6a
	Version           : winnt:4.0 SP4,4.0 SP5,4.0 SP6,4.0 SP6a
	Issue type        : kbprb
	
	=============================================================================
	

{% endraw %}
