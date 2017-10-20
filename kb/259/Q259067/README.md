---
layout: page
title: "Q259067: Win2000: Only Administrator or Power User Can Run Legacy Program"
permalink: /kb/259/Q259067/
---

## Q259067: Win2000: Only Administrator or Power User Can Run Legacy Program

{% raw %}

	Article: Q259067
	Product(s): Microsoft Home Multimedia Titles
	Version(s): WINDOWS:4.5a
	Operating System(s): 
	Keyword(s): 
	Last Modified: 07-MAY-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Encarta 98 Encyclopedia for Windows 
	- Microsoft Flight Simulator 2000 Professional Edition 
	- Microsoft Works, version 4.5a 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	To start or run a program that is not designed for Microsoft Windows 2000 on a
	Windows 2000-based computer, you must log on to the computer as a member of the
	Administrators group or the Power Users group.
	
	NOTE: If you are unable to run the program successfully as a member of the Power
	Users group, you need to log on as a member of the Administrators group.
	
	If you experience any problems when you start or run the program while logged on
	as a member of the Administrators group, remove and reinstall the program, and
	then attempt to start and run the program.
	
	For maximum security and to ensure that the program functions properly, Microsoft
	recommends that you run a program that is designed for Windows 2000 on a Windows
	2000-based computer. If you do this, you can run the program successfully when
	you are logged on as a member of the Users group.
	
	To determine if your program is designed for Windows 2000, visit the following
	Microsoft Web site:
	
	  http://www.microsoft.com/windows2000/professional/howtobuy/upgrading/compat/search/software.asp
	
	MORE INFORMATION
	================
	
	On a Windows 2000-based computer, a member of the Users group cannot run most
	programs that are designed for earlier versions of Microsoft Windows. Microsoft
	Windows 95 and Microsoft Windows 98 do not support file system and registry
	security, and Microsoft Windows NT 4.0 uses lower file system and registry
	security settings by default.
	
	When you are logged on as a member of the Users group on a newly installed
	Windows 2000-based computer with an NTFS-formatted hard disk, if you experience
	a problem when you attempt to start or run a program that is not designed for
	Windows 2000, use one of the following methods to resolve or work around the
	issue:
	
	- Install a version of the program that is certified for Windows 2000.
	
	- Log on as an Administrator, and then move users from the Users group into the
	  Power Users group.
	
	- Use the Compatible security template to change the default security
	  permissions for the Users group.
	
	  For more information about security templates, see the "Predefined security
	  templates" and "security templates, compatible templates" topics in the
	  Windows 2000 online Help file.
	
	REFERENCES
	==========
	
	Windows 2000 Help topic: "permissions, Power Users group"
	
	Windows 2000 Help topic: "permissions, Users group"
	
	Additional query words: multi multi-media media mm ee98 flightsim fs2k fltsim 4.5a w_works win2k
	
	======================================================================
	Keywords          :  
	Technology        : kbHomeProdSearch kbWorksSearch kbHomeMMsearch kbEncartaSearch kbGamesSearch kbFlightSimSearch kbEncartaEncycSearch kbFlightSim2000 kbWorks450a kbEncartaEnCyc1998 kbSimSearch
	Version           : WINDOWS:4.5a
	
	=============================================================================
	

{% endraw %}
