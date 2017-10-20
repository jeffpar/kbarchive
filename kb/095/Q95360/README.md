---
layout: page
title: "Q95360: WFWG: Unable to Log on to Banyan VINES"
permalink: /kb/095/Q95360/
---

## Q95360: WFWG: Unable to Log on to Banyan VINES

{% raw %}

	Article: Q95360
	Product(s): Microsoft Windows 3.x Retail Product
	Version(s): WINDOWS:3.1
	Operating System(s): 
	Keyword(s): 
	Last Modified: 15-OCT-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows for Workgroups version 3.1 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	You are unable to log on to the Banyan VINES network from the Windows for
	Workgroups directory, but can log on from the Banyan directory.
	
	CAUSE
	=====
	
	You may be experiencing problems with the default workstation environment
	settings in the PCCONFIG.DB file in your Windows for Workgroups directory.
	
	RESOLUTION
	==========
	
	To resolve this problem, run PCCONFIG.EXE from the Windows for Workgroups
	directory, and set your default environment settings to the same values as those
	in the PCCONFIG.DB file in the Banyan directory.
	
	NOTE: If you have had three unsuccessful log on attempts, reboot your computer.
	Banyan VINES networks require you to reboot the computer after three
	unsuccessful log on attempts.
	
	Follow these steps to resolve the problem:
	
	1. At the MS-DOS prompt from your Windows for Workgroups directory, type the
	  following:
	
	  PCCONFIG
	
	2. Select the Login Environment Settings option.
	
	3. Select the Edit/View Login Group Search List option.
	
	4. You are prompted for a Login Group Search List. Enter the Group you belong
	  to, an At Sign (@), then the Organization that your group resides in.
	
	  For example, if your group is "Composers" and your organization is "Music,"
	  type:
	
	  Composers@Music
	
	5. Press the F10 key until you return to the MS-DOS prompt.
	
	6. Restart your computer.
	
	This change allows you to access your network by typing only a user name or
	nickname, instead of the full path. A nickname in Banyan VINES is a symbolic
	link to a full text string, such as your full User name. For example, "Bob"
	might be a nickname standing for "Bob Brown@Composers@Music."
	
	For more information, contact Banyan Systems Technical Support.
	
	The product included here is manufactured by Banyan Systems, a vendor independent
	of Microsoft; we make no warranty, implied or otherwise, regarding this
	product's performance or reliability.
	
	Additional query words: 3.10 BVines Banyon setup boot bootup 3rdparty startup logon login
	
	======================================================================
	Keywords          :  
	Technology        : kbAudDeveloper kbWFWSearch kbWFW310
	Version           : WINDOWS:3.1
	
	=============================================================================
	

{% endraw %}
