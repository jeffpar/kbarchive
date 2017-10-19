---
layout: page
title: "Q308184: IIS 5.1: Reboot of WinXP Pro Shuts Down Computer Without Warning"
permalink: /kb/308/Q308184/
---

## Q308184: IIS 5.1: Reboot of WinXP Pro Shuts Down Computer Without Warning

	Article: Q308184
	Product(s): Internet Information Server
	Version(s): 
	Operating System(s): 
	Keyword(s): 
	Last Modified: 17-MAY-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Internet Information Services version 5.1 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	In the Microsoft Windows XP Professional environment, if you configure the
	server in a workgroup, you can use the Fast User Switching feature. This permits
	multiple simultaneous users to be logged on to the computer locally. However, if
	multiple users are simultaneously logged on to the computer with Fast User
	Switching, and one user reboots the server by using reboot %Servername% in the
	Internet Information Services (IIS) Microsoft Management Console (MMC), the
	operating system reboots the computer without displaying a warning that another
	user is logged on.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in Internet Information Services
	version 5.1.
	
	MORE INFORMATION
	================
	
	Steps to Reproduce the Behavior
	-------------------------------
	
	1. Configure Windows XP Professional for Fast User Switching. To do this, follow
	  these steps:
	
	NOTE: To enable Fast User Switching, you must also enable the Use the Welcome
	screen option. This feature cannot be used if your computer is a member of a
	domain.
	
	  a. Log on to the computer as an administrator.
	
	  b. Click Start, click Control Panel, and then click User Accounts.
	
	  c. Click Change the way users log on or off.
	
	  d. If it is not already selected, click to select the Use the Welcome screen
	     check box.
	
	     NOTE: The Use Fast User Switching check box is unavailable until you click
	     to select the Use the Welcome screen check box.
	
	  e. Click to select the Use Fast User Switching check box, and then click
	     Apply Options. Quit the User Accounts tool.
	
	2. Make sure that you have at least two active user accounts.
	
	3. Log on as the first user.
	
	4. Switch back to the Welcome screen.
	
	5. Log on as the second user.
	
	6. In Control Panel, click Administrative Tools, and then click IIS.
	
	7. Right-click the server name, and then click All tasks.
	
	8. Click Restart IIS.
	
	9. Click Reboot %servername%.
	
	REFERENCES
	==========
	
	For additional information, click the article numbers below to view the articles
	in the Microsoft Knowledge Base:
	
	  Q279765 HOW TO: Use the Fast User Switching Feature in Windows XP
	
	  Q294855 Description of the Fast User Switching Compatibility Service
	
	  Q281980 Using CTRL+ALT+DEL Key Combination to Open Windows Security Opens
	  Task Manager
	
	  Q294737 Architecture of Fast User Switching
	
	Additional query words:
	
	======================================================================
	Keywords          :  
	Technology        : kbiisSearch kbiis510
	Version           : :
	Issue type        : kbbug
	Solution Type     : kbnofix
	
	=============================================================================
	
