---
layout: page
title: "Q240725: TPU: &quot;Unable to Load Profile Information&quot; Error Message"
permalink: kb/240/Q240725/
---

## Q240725: TPU: &quot;Unable to Load Profile Information&quot; Error Message

	Article: Q240725
	Product(s): Microsoft Windows NT
	Version(s): winnt:4.5; :
	Operating System(s): 
	Keyword(s): kbenv kberrmsg
	Last Modified: 27-MAY-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft BackOffice Server 4.5 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you connect to a Team Workspace using Microsoft Windows 95, Microsoft
	Windows 98, or Microsoft Windows 98 Second Edition, the following error message
	may appear:
	
	  Unable to load profile information.
	
	  To use a Team Workspace, you must enable user profiles in Windows. For more
	  information about user profiles, see the Windows online Help.
	
	CAUSE
	=====
	
	This error message appears on a Windows 95/98 client if user profiles are not
	enabled on the client. Team Productivity Update uses user profiles to read
	user-specific information for determining items such as the custom links that
	can be added to the Microsoft Outlook Bar control loaded in Microsoft Internet
	Explorer 5.
	
	RESOLUTION
	==========
	
	To prevent the error message from occurring, enable user profiles on the
	client:
	
	Windows 98 Clients
	------------------
	
	1. Click Start, point to Settings, click Control Panel, and then double-click
	  Users.
	
	2. Click Next.
	
	3. In the "User name" box, type the user name for the profile you are using. (A
	  common practice is to use your network logon account name.) Click Next.
	
	4. Click to select the check boxes for the options you want to use. You can also
	  click to clear the check boxes for options you do not want to use. These
	  settings are a matter of preference for the users of the computer. For more
	  information about these options, see the Windows online Help.
	
	5. Click Next, and then click Finish.
	
	6. Restart the computer.
	
	Windows 95 Clients
	------------------
	
	1. Click Start, point to Settings, click Control Panel, and then double-click
	  Passwords.
	
	2. Click the User Profiles tab.
	
	3. Click "Users can customize their preferences and desktop settings".
	
	4. Click to select the options you want under User Profile Settings.
	
	5. When you are done, restart the computer.
	
	Additional query words:
	
	======================================================================
	Keywords          : kbenv kberrmsg 
	Technology        : kbAudDeveloper kbBackOfficeSearch kbBackOfficeServ450
	Version           : winnt:4.5; :
	Issue type        : kbprb
	
	=============================================================================
	
