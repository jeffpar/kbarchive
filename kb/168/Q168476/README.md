---
layout: page
title: "Q168476: How to Create Mandatory Profiles with Windows NT 4.0"
permalink: /kb/168/Q168476/
---

## Q168476: How to Create Mandatory Profiles with Windows NT 4.0

{% raw %}

	Article: Q168476
	Product(s): Microsoft Windows NT
	Version(s): 4.0
	Operating System(s): 
	Keyword(s): kbnetwork
	Last Modified: 09-AUG-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Workstation version 4.0 
	- Microsoft Windows NT Server version 4.0 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	This article describes how to create mandatory profiles for Windows NT version
	4.0.
	
	MORE INFORMATION
	================
	
	To create a mandatory profile for Windows NT 4.0, perform the following steps:
	
	1. Create a user called "Template" who will have the same privileges and rights
	  as the users in the group for which you are creating the mandatory profile.
	  (This step is very important so that you do not have conflicting permissions
	  while setting up shares, programs, and so on.)
	
	2. Log on to the computer running Windows NT Workstation as the new Template
	  user and set up the profile (set up the desktop, install applications, and so
	  on) to your specifications and log off the computer. The profile will not be
	  created until you log off.
	
	3. Log back on to the computer running Windows NT Workstation as a user with
	  administrator privileges on the local workstation as well as on the domain
	  and start the System tool in Control Panel. Select the User Profiles tab.
	
	4. Highlight the profile for your Template user and select Copy To. In the Copy
	  To dialog box, you will need to specify where you want to copy the profile
	  and who is permitted to use it.
	
	  a. Under the Permitted To Use section of this dialog box, click Change and
	     select the user or group who will be permitted to use this profile.
	
	  b. Next, you will need to specify where you want to COPY PROFILE TO. For a
	     server based mandatory profile, you will need to specify the following
	     information:
	
	  \\ServerName\Sharename\Name of Profile
	
	For example, \\PENDRAGON1\Profiles\mandatory.
	
	If you are using mandatory profiles, go to step 5; otherwise, go to step 6.
	
	5. Windows NT 4.0 has implemented two levels of security in mandatory profiles.
	
	  The first level is to rename the Ntuser.dat file to .man. This will allow the
	  users of a mandatory profile to log on to the domain using cached
	  information, if the profile is unavailable on the central server.
	
	  a. The steps to implement the first level of mandatory security: Change the
	     user's profile path in user manager to reflect the mandatory profile.
	
	  \\servername\sharename\profilename
	
	Rename the Ntuser.dat to Ntuser.man under the profile directory
	
	The second level is to add a .MAN extension on the directory name. When using the
	.man extension, if the profile is unavailable, the workstation will not log the
	user on and it will return to the CTRL+ALT+DELETE logon screen.
	
	  b. The steps in getting the second level of security are:
	
	     1. Add .man extension to profile path in user manager:
	
	  \\servername\sharename\profilename.man
	
	     2. Add .man extension to server based profile DIRECTORY and the Ntuser.dat
	        file needs to be renamed to Ntuser.man
	
	6. Click OK to copy the profile to where you have specified. Open Windows NT
	  explorer and connect to the path where you have copied the profile. Open the
	  directory and rename the Ntuser.dat to Ntuser.man. This will prevent users
	  from being able to modify the profile. If this is not renamed, it will not
	  function as a mandatory profile.
	
	7. In User Manager for Domains, select the users you want to use the mandatory
	  profile and in the properties for each user, select Profile and specify the
	  path to where the mandatory profile exists in the User Profile Path box. This
	  must be a UNC path so it must be in the form of \\Server\Share\Profile (all
	  users who are going to be using this profile must have at least read access
	  to the root share and the profile folder).
	
	8. Test by logging on to the workstation as another user who has just been
	  granted the mandatory profile.
	
	Additional query words: roaming
	
	======================================================================
	Keywords          : kbnetwork 
	Technology        : kbWinNTsearch kbWinNTWsearch kbWinNTW400 kbWinNTW400search kbWinNT400search kbWinNTSsearch kbWinNTS400search kbWinNTS400
	Version           : :4.0
	Issue type        : kbinfo
	
	=============================================================================
	

{% endraw %}
