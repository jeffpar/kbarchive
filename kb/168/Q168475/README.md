---
layout: page
title: "Q168475: How to Create a Base Profile for All Users"
permalink: /kb/168/Q168475/
---

## Q168475: How to Create a Base Profile for All Users

{% raw %}

	Article: Q168475
	Product(s): Microsoft Windows NT
	Version(s): WinNT:4.0
	Operating System(s): 
	Keyword(s): 
	Last Modified: 09-AUG-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Workstation version 4.0 
	- Microsoft Windows NT Server version 4.0 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	This article details how to create a "base" or Default User profile for all
	users and how to place it on the Netlogon share. It is important to note that
	this will only work for users that have a new user ID in a Windows NT 4.0 domain
	and have not logged on with it before.
	
	MORE INFORMATION
	================
	
	Windows NT 4.0 follows the following discovery process for creating a new
	profile:
	
	- Is there a central (roaming) profile defined in User Manager for Domains?
	
	- If yes, does the profile exist? If yes, use profile.
	
	- If no, does this user have a local profile? If yes, use local.
	
	- If no, does Default User exist on Netlogon share of validating Domain
	  Controller? If yes, use it.
	
	- If no, does Default User exist in WinNT\Profiles?
	
	Follow these steps to create a Default User:
	
	1. Log on to a workstation as a generic user (one that does not have
	  Administrator rights in the domain). Set up your desktop and change the
	  settings that you want to change. Log off the workstation. The profile is
	  actually created at this point.
	
	2. Log back onto the workstation as someone who has Administrator rights to the
	  local computer, as well as in the domain. In the System tool in Control
	  Panel, click the User Profiles tab. Select the user's profile that you
	  created in the previous step.
	
	3. Click Copy To, which will bring up a dialog box that allows you to specify
	  where the profile is going to be copied, as well as being able to specify who
	  is Permitted to Use this profile. To create the Default User Profile (base
	  profile) you should permit the group Everyone to be able to use the profile.
	  Next, in the blank box where it states Copy To:, specify the server name and
	  the share name, as well as the name of the profile that you want to copy this
	  profile to.
	
	  It should be in this format:
	
	  \\Servername\Sharename\Profilename.
	
	  NOTE: The name of the profile will actually be a directory name and the entire
	  directory and its subdirectories and files are the entire profile.
	
	4. Copy this profile to the Netlogon share and rename the profile to Default
	  User. This will enable Windows NT to create a new profile based on this
	  profile for a user who does not already have a central or local profile.
	
	  NOTE: This Default User profile will be used to create new Roaming Profiles as
	  well as new local profiles.
	
	Additional query words: Profile Base Default
	======================================================================
	Keywords          :  
	Technology        : kbWinNTsearch kbWinNTWsearch kbWinNTW400 kbWinNTW400search kbWinNT400search kbWinNTSsearch kbWinNTS400search kbWinNTS400
	Version           : WinNT:4.0
	Issue type        : kbhowto
	
	=============================================================================
	

{% endraw %}
