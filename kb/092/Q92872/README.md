---
layout: page
title: "Q92872: After Failed WFWG Setup, Not Enough Space to Setup Again"
permalink: /kb/092/Q92872/
---

## Q92872: After Failed WFWG Setup, Not Enough Space to Setup Again

{% raw %}

	Article: Q92872
	Product(s): Microsoft Windows 3.x Retail Product
	Version(s): WINDOWS:3.1,3.11
	Operating System(s): 
	Keyword(s): 
	Last Modified: 09-OCT-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows for Workgroups versions 3.1, 3.11 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	Microsoft Windows for Workgroups Setup does not perform an upgrade over
	Microsoft Windows version 3.1 if it does not detect enough free disk space. If
	Setup fails for some reason and you run Setup a second time, it may refuse to
	upgrade your system.
	
	CAUSE
	=====
	
	This problem occurs if Setup incorrectly detects insufficient free disk space.
	Setup assumes it is upgrading Windows 3.1 and does not account for the Windows
	for Workgroups files it has already transferred.
	
	WORKAROUND
	==========
	
	To work around this problem, delete some Windows for Workgroups files before you
	start Setup. The following are some files you can safely delete:
	
	  NETAPI.DLL
	  PMSPL.DLL
	  WIN386.EXE
	
	You can also delete files with the extensions .BMP and .HLP. These files are
	copied again when you run Setup.
	
	NOTE: Avoid deleting files with the extensions .INI and .GRP. Such files contain
	information about your custom Windows configuration.
	
	MORE INFORMATION
	================
	
	Windows for Workgroups Setup uses WINVER.EXE to determine which version of
	Windows it is installing over. Unfortunately, WINVER.EXE is one of the last
	files to transfer. Often in a failed installation, WINVER.EXE does not get
	copied; therefore, Setup thinks that it is upgrading Windows 3.1.
	
	Additional query words: 3.10 3.11
	
	======================================================================
	Keywords          :  
	Technology        : kbAudDeveloper kbWFWSearch kbWFW310 kbWFW311
	Version           : WINDOWS:3.1,3.11
	
	=============================================================================
	

{% endraw %}
