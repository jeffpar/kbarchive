---
layout: page
title: "Q140421: Doc Err: Mandatory Profiles Are Not Cached"
permalink: /kb/140/Q140421/
---

## Q140421: Doc Err: Mandatory Profiles Are Not Cached

{% raw %}

	Article: Q140421
	Product(s): Microsoft Windows NT
	Version(s): 3.10 3.50
	Operating System(s): 
	Keyword(s): 
	Last Modified: 08-AUG-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Server version 3.1 
	- Microsoft Windows NT Workstation version 3.1 
	- Microsoft Windows NT Advanced Server, version 3.1 
	- Microsoft Windows NT Workstation version 3.5 
	- Microsoft Windows NT Server version 3.5 
	-------------------------------------------------------------------------------
	
	
	SYMPTOMS
	========
	
	Even though the Windows NT Concepts and Planning Guide states on page 88 that
	you should be able to log on using cached profiles on the local workstation,
	users are denied access, are unable to log on, and the following error message
	appears if the server based mandatory profile is not available:
	
	  Unable to log you on because your mandatory profile is not available. Please
	  contact your administrator.
	
	Windows NT Concepts and Planning Guide Excerpt
	----------------------------------------------
	
	The Windows NT Concepts and Planning Guide states on page 88:
	
	"If a user has a personal profile, the per-user settings are saved to both the
	user's personal profile and the locally cached version of the profile when the
	user logs off. The locally cached profile is identical to the updated personal
	profile.
	
	If a user has a mandatory profile, changes made by the user during a session are
	not uploaded to the mandatory profile when the user logs off- the user can never
	change the mandatory profile. However, if the mandatory profile allows the user
	to make changes during a session, any changes made by the user are saved in the
	locally cached version of the mandatory profile. So, the next time the user logs
	on at this workstation, if the user's mandatory profile is unavailable, the
	locally cached profile is loaded, and the user will have the changes made during
	his or her last session."
	
	CAUSE
	=====
	
	Mandatory profiles do not get cached on the local workstations.
	
	RESOLUTION
	==========
	
	This is a documentation error.
	
	If a user logs on and both the server-based profile and local version of the
	profile are unavailable, the user is logged on using the computer's default
	profile, if the user has a personal profile. If the user has a mandatory
	profile, the logon attempt is denied. This is expected for mandatory profiles.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in Windows NT versions 3.5 and
	3.51. We are researching this problem and will post new information here in the
	Microsoft Knowledge Base as it becomes available.
	
	Additional query words: prodnt 3.51
	
	======================================================================
	Keywords          :  
	Technology        : kbWinNTsearch kbWinNTWsearch kbWinNT350search kbWinNTW350 kbWinNTW350search kbWinNTW310 kbWinNTSsearch kbWinNTS350 kbWinNTS310 kbWinNTAdvSerSearch kbWinNTAdvServ310 kbWinNTS350search kbWinNTS310search kbWinNT310Search kbWinNTW310Search
	Version           : 3.10 3.50
	
	=============================================================================
	

{% endraw %}
