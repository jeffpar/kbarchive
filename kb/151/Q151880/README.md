---
layout: page
title: "Q151880: Using Server-Based User Profiles w/ Citrix Winframe"
permalink: kb/151/Q151880/
---

## Q151880: Using Server-Based User Profiles w/ Citrix Winframe

	Article: Q151880
	Product(s): Microsoft Windows NT
	Version(s): 3.50 3.51
	Operating System(s): 
	Keyword(s): 
	Last Modified: 08-AUG-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Server versions 3.5, 3.51 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you attempt to log on with a user profile on a Windows NT Server running
	Citrix Winframe, you may get the following error:
	
	  Unable to log you on because you do not have security access to the
	  information inside your mandatory profile.
	
	Normally, this error would mean that you had not been granted access to the
	profile in User Profile Editor. However, with Winframe installed, you may get
	this error even though you have the appropriate access.
	
	RESOLUTION
	==========
	
	With Winframe installed, user profiles must be kept in a share called Profile.
	If the profiles are kept in any other share, you may get the error mentioned
	above. The appropriate entry in User Manager for profile path is:
	
	  \\servername\Profile\mandatory.man
	
	where servername is the computer name of the server where the profiles are
	stored, and mandatory.man is the name of the profile assigned to the user.
	======================================================================
	Keywords          :  
	Technology        : kbWinNTsearch kbWinNT351search kbWinNT350search kbWinNTSsearch kbWinNTS351 kbWinNTS350 kbWinNTS351search kbWinNTS350search
	Version           : 3.50 3.51
	
	=============================================================================
	
