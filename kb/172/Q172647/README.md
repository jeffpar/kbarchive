---
layout: page
title: "Q172647: Server Copy of User Profile May Be Overwritten By Local Copy"
permalink: /kb/172/Q172647/
---

## Q172647: Server Copy of User Profile May Be Overwritten By Local Copy

{% raw %}

	Article: Q172647
	Product(s): Microsoft Windows 95.x Retail Product
	Version(s): 1,2,2.1
	Operating System(s): 
	Keyword(s): kbnetwork osr1 osr2 win95
	Last Modified: 25-MAR-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows 95 
	- Microsoft Windows 95 OEM Service Release, versions 1, 2, 2.1 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	If you are using user profiles and roaming profiles, a user's local copy of the
	profile may overwrite the server copy. The local copy may be out of date or
	incorrect. The user is not prompted when this occurs.
	
	CAUSE
	=====
	
	This behavior can occur in the following situation:
	
	- A user logs on at a workstation that does not contain a local copy of his or
	  her profile, or that contains an outdated local copy of the profile.
	
	- The server copy of the profile is not successfully downloaded when the user
	  logs on (for example, because of network problems).
	
	- The user logs off and then logs back on at the same workstation, but this
	  time the server copy of the profile can be accessed.
	
	When this situation occurs, the outdated or incorrect local copy of the profile
	overwrites the server copy. The server copy can also be over- written when the
	user logs off if the server becomes available at that time.
	
	Windows compares the date and time stamps of the local and server copies of the
	profile when a user logs on. The newer copy of the profile overwrites the older
	copy. In the situation described above, the local copy has changed more recently
	than the server copy. When the profiles are reconciled, the newer local copy,
	although incorrect, overwrites the older server copy.
	
	RESOLUTION
	==========
	
	
	STATUS
	======
	
	This problem no longer occurs in Windows 98. To resolve this problem, install
	the current version of Windows. For information about the current version of
	Windows, visit http://www.microsoft.com/windows.
	
	MORE INFORMATION
	================
	
	
	Additional query words:
	
	======================================================================
	Keywords          : kbnetwork osr1 osr2 win95 
	Technology        : kbWin95search kbOPKSearch kbZNotKeyword3 kbWin95OPKOSR2 kbWin95OPKOSR1 kbWin95OPKOSR210
	Version           : :1,2,2.1
	
	=============================================================================
	

{% endraw %}
