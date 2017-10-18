---
layout: page
title: "Q162790: Auto Arrange Activates Itself in Copied User Profiles"
permalink: kb/162/Q162790/
---

## Q162790: Auto Arrange Activates Itself in Copied User Profiles

	Article: Q162790
	Product(s): Microsoft Windows NT
	Version(s): 4.0
	Operating System(s): 
	Keyword(s): kbnetwork
	Last Modified: 21-FEB-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Workstation version 4.0 
	- Microsoft Windows NT Server version 4.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When copying a profile from a reference account to Default User, the Auto
	Arrange attribute activates for all users using that copied profile.
	
	For example:
	
	Create a reference account that contains all the desktop properties wanted for
	new users. Ensure that Auto Arrange is not selected and some icons are placed in
	the center of the screen. Log off and then log on as administrator. In Control
	Panel, double-click the System icon. Click the User Profiles tab and select the
	profile for the reference account. Click Copy To and select
	%SystemRoot%\Profiles\Default User.
	
	Create a new user account and log on as that user. You will find that the new
	user has all the desktop properties needed; however, any icons that had been
	placed in certain locations in the original profile are now all arranged on the
	left side of the screen. The Auto Arrange property has automatically been
	applied whether it was manually selected or not.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in Windows NT version 4.0. We are
	researching this problem and will post new information here in the Microsoft
	Knowledge Base as it becomes available.
	
	
	Additional query words: placement location justified aligned
	
	======================================================================
	Keywords          : kbnetwork 
	Technology        : kbWinNTsearch kbWinNTWsearch kbWinNTW400 kbWinNTW400search kbWinNT400search kbWinNTSsearch kbWinNTS400search kbWinNTS400
	Version           : :4.0
	Hardware          : x86
	Issue type        : kbbug
	
	=============================================================================
	
