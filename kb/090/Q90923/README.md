---
layout: page
title: "Q90923: Multimedia Development Kit Cannot Be Installed in WFWG"
permalink: /kb/090/Q90923/
---

## Q90923: Multimedia Development Kit Cannot Be Installed in WFWG

{% raw %}

	Article: Q90923
	Product(s): Microsoft Windows 3.x Retail Product
	Version(s): WINDOWS:3.1
	Operating System(s): 
	Keyword(s): 
	Last Modified: 14-OCT-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows for Workgroups version 3.1 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	If the Microsoft Multimedia Development Kit (MDK) is set up over an installation
	of Windows for Workgroups, the following error message is displayed:
	
	  Setup did not find a version of Microsoft Windows in this directory which is
	  compatible with Multimedia Extensions. Please select a directory with
	  Microsoft Windows to upgrade to Windows with Multimedia.
	
	CAUSE
	=====
	
	The Multimedia Development Kit cannot be installed over Windows for Workgroups.
	It must be installed before you upgrade to Windows for Workgroups.
	
	The Multimedia Development Kit was designed to add Multimedia Extensions and
	multimedia development tools to Microsoft Windows versions 3.0, 3.0a, and 3.1.
	
	WORKAROUND
	==========
	
	The MDK Setup program does not recognize Windows for Workgroups as being a
	version of Windows compatible with the multimedia tools and extensions. If it is
	imperative that you use this kit:
	
	1. Reinstall Windows 3.0 or Windows 3.1 to a different directory than the
	  Windows for Workgroups directory.
	
	2. Upgrade that installation of Windows with the Multimedia Development Kit.
	
	3. Upgrade to Windows for Workgroups over the Multimedia Development Kit.
	
	Additional query words: 3.10 3.1 mdk
	
	======================================================================
	Keywords          :  
	Technology        : kbAudDeveloper kbWFWSearch kbWFW310
	Version           : WINDOWS:3.1
	
	=============================================================================
	

{% endraw %}
