---
layout: page
title: "Q185198: Error 1000 and User Profiles"
permalink: /kb/185/Q185198/
---

## Q185198: Error 1000 and User Profiles

	Article: Q185198
	Product(s): Microsoft Windows NT
	Version(s): 4.0
	Operating System(s): 
	Keyword(s): 
	Last Modified: 09-AUG-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Server version 4.0 
	- Microsoft Windows NT Workstation version 4.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you log on to a computer running Windows NT Workstation or Server, you
	receive an error concerning the loading or use of a profile. These occur for
	local, roaming, and mandatory profiles.
	
	In viewing the corresponding Event Viewer Application Log, there are event ID
	1000 errors:
	
	  Event ID:   1000
	  Source:     Userenv
	  Type:       Error
	  Category:   None
	
	Description: The description will be one of the following, where %s is the
	affected username, and %d is the system error.
	
	- The operating system was unable to load your profile. Please contact your
	  Network Administrator. (%d)
	
	- You do not have permission to access your central profile located at %s. The
	  operating system is attempting to log you on with your local profile. Please
	  contact your Network Administrator.
	
	- The operating system was unable to create a profile directory %s. Another
	  file exists with the same name. You will be logged on with a local profile
	  only. Please contact your Network Administrator.
	
	- The operating system was unable to create profile directory %s. You will be
	  logged on with a local profile only. Please contact your Network
	  Administrator. (%d)
	
	- Your roaming profile is not available. You will be logged on with the locally
	  stored profile. (%d)
	
	- The operating system was unable to create a temporary profile directory %s.
	  Please contact your Network Administrator. (%d)
	
	- The operating system was unable to load the locally stored profile. A new
	  local profile will be created. (%d)
	
	- The operating system was unable to set security on your registry. Please
	  contact your Network Administrator. (%d)
	
	- The update of your roaming profile failed. Please contact your Network
	  Administrator. (%d)
	
	- Your profile was not successfully loaded, but you have been logged on with
	  the default system profile. Please correct the problem and log off. (%d)
	
	- Your roaming profile is not available, the operating system is attempting to
	  log you on with your local profile. (%d)
	
	- Your roaming mandatory profile is not available, the operating system is
	  attempting to log you on with your local profile. (%d)
	
	- The operating system is unable to log you on because your roaming mandatory
	  profile is not available. Please contact your Network Administrator. (%d)
	
	- This computer is in manual policy mode, but the policy file can not be found.
	  You will be logged on without policy. (%d)
	
	- RegLoadKey failed with error %d for %s
	
	CAUSE
	=====
	
	This problem has several common causes. The following are the most relevant
	causal scenarios.
	
	- Permissions on the local %system root%\Profiles have been modified. The
	  EVERYONE group needs Full Control to load the profile.
	
	- Lack of resources. If the system partition is low on space, or the registry
	  size limit has been exceeded, the profile can fail to load.
	
	- The profile is corrupted. Either the local Ntuser.dat (or .man) or the
	  roaming copy of Ntuser.dat is corrupted. When this occurs, there is usually
	  an event indicating a RegLoadKey failure.
	
	MORE INFORMATION
	================
	
	For additional information about a possible resolution, click the article number
	below to view the article in the Microsoft Knowledge Base:
	
	  Q189119 UserEnv Returns Corrupted Profile for All Failures
	
	For additional information about registry size limit, click the article number
	below to view the article in the Microsoft Knowledge Base:
	
	  Q124594 Understanding and Configuring Registry Size Limit (RSL)
	
	For more information on configuring and manipulating profiles, please consult the
	Windows NT 4.0 profiles and policies white paper available from the following
	Microsoft Web site:
	
	  http://www.microsoft.com/ntserver/management/deployment/planguide/prof_policies.asp
	
	NOTE: Uusers on NT 4.0 Workstation may experience the following error:
	
	  Your profile was not successfully loaded, but you have been logged on with
	  the default system profile. Please correct the problem and log off.
	
	The apparent cause was a missing folder: \Winnt\Profiles\Default User. To fix,
	replace entire folder with one from another workstation.
	
	Additional query words:
	
	======================================================================
	Keywords          :  
	Technology        : kbWinNTsearch kbWinNTWsearch kbWinNTW400 kbWinNTW400search kbWinNT400search kbWinNTSsearch kbWinNTS400search kbWinNTS400
	Version           : :4.0
	Issue type        : kbprb
	
	=============================================================================
	
