---
layout: page
title: "Q255113: Roaming Profiles May Not Synchronize Correctly in Windows"
permalink: /kb/255/Q255113/
---

## Q255113: Roaming Profiles May Not Synchronize Correctly in Windows

	Article: Q255113
	Product(s): Microsoft Windows NT
	Version(s): WINDOWS:
	Operating System(s): 
	Keyword(s): kbnetwork kbtool
	Last Modified: 24-OCT-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows 2000 Advanced Server 
	- Microsoft Windows 2000 Server 
	- Microsoft Windows 2000 Professional 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you log on to a domain using a computer running Windows 2000 and your
	profile is located on a computer running Microsoft Windows NT 4.0, the local and
	server-based profiles may not synchronize and the following event may be logged
	in Event Viewer:
	
	  Event ID: 1000
	  Event Type: Error
	  Event Source: Userenv
	  Event Category: None
	  Description: Windows cannot unload your registry file. If you have a roaming
	  profile, your settings are not replicated. Contact your administrator.
	
	  DETAIL: Access is denied.
	
	CAUSE
	=====
	
	This issue can occur if the share that contains your user profile is not set to
	Full Control.
	
	RESOLUTION
	==========
	
	To resolve this issue, put user profiles for clients running Windows 2000 on
	servers and domain controllers running Windows 2000 Server or change the
	permissions on the share to Full Control.
	
	MORE INFORMATION
	================
	
	The Change permission in Windows NT 4.0 Server does not allow WRITE_DAC access,
	which is required by the user profile code to update ACLs on the server-based
	profile. Change permissions in Windows 2000 Server have the appropriate access
	rights to allow the server-based profile to be updated.
	
	Additional query words: Roaming Profiles, Windows 2000
	
	======================================================================
	Keywords          : kbnetwork kbtool 
	Technology        : kbwin2000AdvServ kbwin2000AdvServSearch kbwin2000Serv kbwin2000ServSearch kbwin2000Search kbwin2000ProSearch kbwin2000Pro kbWinAdvServSearch
	Version           : WINDOWS:
	Issue type        : kbprb
	
	=============================================================================
	
