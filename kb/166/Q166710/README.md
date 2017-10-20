---
layout: page
title: "Q166710: Kids Plus!: Start Menu Loses Hierarchies With Protect It! On"
permalink: /kb/166/Q166710/
---

## Q166710: Kids Plus!: Start Menu Loses Hierarchies With Protect It! On

{% raw %}

	Article: Q166710
	Product(s): Microsoft Home Kids Products
	Version(s): WINDOWS:1.0
	Operating System(s): 
	Keyword(s): kbusage
	Last Modified: 08-NOV-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Plus! for Kids, version 1.0 
	-------------------------------------------------------------------------------
	
	MORE INFORMATION
	================
	
	Protect It! organizes each family member's Start Menu based on the set
	restrictions and stores this information in:
	
	    C:\Windows\Profiles\<user name>\Start Menu
	
	(where C is the drive letter of your hard disk).
	
	The hierarchical information may, on some configurations, get omitted, and all
	application shortcuts will appear on the first level of the Start Menu. This can
	be a problem when the number of applications exceeds the screen size, so some
	applications cannot be accessed via the Start Menu.
	
	SYMPTOMS
	========
	
	When you use Microsoft Plus! For Kids, Protect It! to set restrictions on family
	member profiles, the Start Menu may lose hierarchies when the restricted family
	member logs in.
	
	WORKAROUND
	==========
	
	To workaround this issue:
	
	1. Go to C:\Windows\Start Menu (where C is the drive letter for you hard disk
	  and Windows is your Windows folder).
	
	2. Drag the contents of the Start Menu folder to the
	  C:\Windows\Profiles\<username> folder.
	
	3. This will replace the non-hierarchical Start Menu with the default Start
	  Menu, with hierarchies. All active Protect It! restrictions will remain.
	
	You can also workaround this issue by creating customization:
	
	1. Go to C:\Windows\Profiles\<username>.
	
	2. Create a Programs folder within the <username> folder, and then drag
	  the appropriate program shortcuts into this folder.
	
	3. Create any other desired Start Menu customization to re-enable hierarchies.
	  (You must restart Windows for these hierarchical changes to take place.)
	
	
	Additional query words: kids kbmm homekids mskids kidsplus kidsplus!pack plus plus!
	
	======================================================================
	Keywords          : kbusage 
	Technology        : _IKkbbogus kbGamesSearch kbPlusKids kbPlusSearch
	Version           : WINDOWS:1.0
	Issue type        : kbhowto
	
	=============================================================================
	

{% endraw %}
