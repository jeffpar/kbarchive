---
layout: page
title: "Q92596: WFWG Upgrade Can't Find Windows When Automated Setup is Used"
permalink: /kb/092/Q92596/
---

## Q92596: WFWG Upgrade Can't Find Windows When Automated Setup is Used

{% raw %}

	Article: Q92596
	Product(s): Microsoft Windows 3.x Retail Product
	Version(s): WINDOWS:3.1
	Operating System(s): 
	Keyword(s): 
	Last Modified: 27-OCT-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows for Workgroups version 3.1 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	The upgrade versions of Windows for Workgroups (WFWG) are unable to detect an
	earlier version of Windows when the Automated Setup option (SETUP.SHH) is used.
	It does not matter if Windows is on the path or if Setup is run from the WINDOWS
	directory. The syntax for this automated setup is as follows:
	
	     setup /h:<path>setup.shh
	
	NOTE: SETUP.SHH is a file that tells Windows what and where to install. It allows
	for the installation of Windows with little or no user interaction.
	
	WORKAROUND
	==========
	
	A possible solution is to modify the SETUP.SHH file.
	
	To have the upgrade versions of Windows for Workgroups detect an earlier version
	of Windows while using the Automated Setup option, remove the following section
	from the SETUP.SHH file:
	
	     [windir]
	     c:\windows
	
	NOTE: Removing these two lines causes you to be prompted for the location to
	install Windows for Workgroups.
	
	Additional query words: 3.10 set up
	
	======================================================================
	Keywords          :  
	Technology        : kbAudDeveloper kbWFWSearch kbWFW310
	Version           : WINDOWS:3.1
	
	=============================================================================
	

{% endraw %}
