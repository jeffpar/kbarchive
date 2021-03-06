---
layout: page
title: "Q150687: Group Policies Not Applied on Windows NT Domain"
permalink: /kb/150/Q150687/
---

## Q150687: Group Policies Not Applied on Windows NT Domain

{% raw %}

	Article: Q150687
	Product(s): Microsoft Windows 95.x Retail Product
	Version(s): 1,2,2.1
	Operating System(s): 
	Keyword(s): kbnetwork kbtool msnets win95kbfixlist
	Last Modified: 25-MAR-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows 95 
	- Microsoft Windows 95 OEM Service Release, versions 1, 2, 2.1 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When group policies are used on Windows 95 workstations in a Microsoft Windows
	NT domain, the policies associated with the user's group member- ship may not be
	applied at logon. Instead, the policies associated with the Default user may be
	applied.
	
	CAUSE
	=====
	
	The primary domain controller (PDC) for the domain is not available at logon.
	Users are validated by a backup domain controller (BDC) instead.
	
	RESOLUTION
	==========
	
	To work around this behavior, use one of the following methods:
	
	- Remove the Default user from the Config.pol file.
	
	  This causes the settings for the last user who logged on to that workstation
	  to be retained. This may be an acceptable solution if the same user generally
	  logs on to the same workstation.
	
	- Define the settings for the Default user to be an acceptable default if the
	  specific group policies cannot be applied. Define different policies for
	  individual users for whom these defaults would not be appropriate.
	
	  This method may be effective if most users can operate with a certain base
	  configuration and only a few require a different configuration.
	
	- Configure system policies to be updated by manual download from a predefined
	  location instead of automatically.
	
	  When you are configured for automatic download and load balancing is not
	  enabled, system policies are downloaded from the PDC only. When you are
	  configured for automatic download and load balancing is enabled, system
	  policies are downloaded from the PDC or BDC that validates the user's logon.
	  When you are configured for manual down- load, system policies are downloaded
	  from a specific, pre-defined path.
	
	- Enable user profiles, set the users' Home directories on a Windows NT BDC
	  instead of the PDC, and remove the Default user from the Config.pol file.
	
	  When user profiles are enabled in a Windows NT domain, a user's profile is
	  saved to and loaded from the user's home directory (as defined in Windows NT
	  User Manager for Domains) by default. This allows for "roving" user
	  profiles.
	
	  When a user logs on, the appropriate user profile is downloaded and applied to
	  the local computer. Then, group policies are applied. Because there is no
	  Default user defined, if the PDC is unavailable the settings in the
	  previously saved user profile are used instead.
	
	  This method is useful if the BDC is on a local LAN segment and the PDC is on a
	  remote link that is less reliable, so that the BDC is more likely to be
	  available than the PDC. This also allows proper user configurations to be
	  applied regardless of the local computer on which a user logs on.
	
	
	STATUS
	======
	
	This problem no longer occurs in Windows 98. To resolve this problem, install
	the current version of Windows. For information about the current version of
	Windows, visit http://www.microsoft.com/windows.
	
	MORE INFORMATION
	================
	
	When group policies are in use, Windows 95 attempts to contact only the PDC to
	determine the user's group membership. Windows 95 does not attempt to query the
	BDC for this information, even though the user's logon may have been validated
	by the BDC. This occurs even if load balancing is enabled.
	
	REFERENCES
	==========
	
	For additional information about system policies and user profiles, see Chapter
	15, "User Profiles and System Policies," in the Microsoft Windows 95 Resource
	Kit.
	
	Additional query words: grouppol unavailable offline poledit
	
	======================================================================
	Keywords          : kbnetwork kbtool msnets win95 kbfixlist
	Technology        : kbWin95search kbOPKSearch kbZNotKeyword3 kbWin95OPKOSR2 kbWin95OPKOSR1 kbWin95OPKOSR210
	Version           : :1,2,2.1
	
	=============================================================================
	

{% endraw %}
