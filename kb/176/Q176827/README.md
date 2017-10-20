---
layout: page
title: "Q176827: No Settings Command on Start Menu After Logging On to Windows"
permalink: /kb/176/Q176827/
---

## Q176827: No Settings Command on Start Menu After Logging On to Windows

{% raw %}

	Article: Q176827
	Product(s): Microsoft Home Kids Products
	Version(s): WINDOWS:1.0,95
	Operating System(s): 
	Keyword(s): kbenv kbtool
	Last Modified: 08-NOV-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Plus! for Kids, version 1.0 
	- Microsoft Windows 95 
	- Microsoft Windows 98 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you log on to Windows, there may be no Settings command on the Start menu.
	As a result, the Control Panel, Printers, and Taskbar commands may be
	unavailable.
	
	CAUSE
	=====
	
	This issue can occur if you have restricted family members from changing the
	computer settings in Protect It!.
	
	Access to the Control Panel, Printers, and Taskbar commands is restricted by
	selecting the To Change Computer Settings check box in Protect It!. If you have
	not given any family member the ability to change these settings, the Control
	Panel, Printers, and Taskbar commands are unavailable.
	
	RESOLUTION
	==========
	
	To give a family member access to the Settings command on the Start menu, follow
	these steps:
	
	1. Click Start, point to Programs, point to Microsoft Kids, and then click
	  Protect It!.
	
	  NOTE: If you receive the following error message when you try to start Protect
	  It!, you must follow the steps in the "More Information" section later in
	  this article before you can continue:
	
	  This operation has been cancelled due to restrictions in effect on this
	  computer. Please contact your system administrator.
	
	2. Type your Protect It! key, and then click OK.
	
	3. In the Family Members box, click the family member who you want to have
	  access to the Settings command.
	
	4. Click Set/Change.
	
	5. Click the To Change Computer Settings check box to clear it.
	
	6. Click Next, and then click Next.
	
	7. Click Finish.
	
	8. Repeat steps 3-7 for each family member who should have access to the
	  Settings command.
	
	Before you can access the Control Panel, Printers, or Taskbar command, you must
	log on to Windows as a family member who has access to these commands.
	
	MORE INFORMATION
	================
	
	You can control access to individual programs by selecting the "Limit the family
	member to programs selected by the owner below" check box. If you limit access
	to the Protect It! program for all family members, including the default user,
	you receive an error message when you try to run Protect It!.
	
	To work around this issue, create a shortcut to the Protect It! tool in Control
	Panel by following these steps:
	
	1. Right-click the Windows desktop.
	
	2. Point to New, and then click Shortcut.
	
	3. In the Command Line box, type the following line, and then click Next:
	
	  " protect!.cpl " (without the quotation marks)
	
	4. Click Finish.
	
	5. Double-click the new Protect!.cpl shortcut. This starts Protect It!.
	
	To give a family member access to the Settings command on the Start menu, follow
	steps 2-7 in the "Resolution" section earlier in this article.
	
	For additional information about Protect It!, please see the following article in
	the Microsoft Knowledge Base:
	
	  Q171703 Kids Plus!: Resetting Protect It! and Internet Ratings Passwords
	
	Additional query words: canceled protection mskids login sign on in
	
	======================================================================
	Keywords          : kbenv kbtool 
	Technology        : kbWin95search kbWin98search _IKkbbogus kbGamesSearch kbPlusKids kbPlusSearch kbZNotKeyword3 kbWin98
	Version           : WINDOWS:1.0,95
	
	=============================================================================
	

{% endraw %}
