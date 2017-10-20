---
layout: page
title: "Q258218: Error Message &quot;Pathname Not Normalized&quot; When Installing Interix"
permalink: /kb/258/Q258218/
---

## Q258218: Error Message &quot;Pathname Not Normalized&quot; When Installing Interix

{% raw %}

	Article: Q258218
	Product(s): Microsoft Windows NT
	Version(s): 2.2.1,2.2.2,2.2.3,2.2.4,2.2.4.03,2.2.4.08,2.2.5
	Operating System(s): 
	Keyword(s): kbenv kberrmsg kbsetup
	Last Modified: 11-JUN-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Interix versions 2.2.1, 2.2.2, 2.2.3, 2.2.4, 2.2.4.03, 2.2.4.08, 2.2.5 
	-------------------------------------------------------------------------------
	
	IMPORTANT: This article contains information about modifying the registry. Before you 
	modify the registry, make sure to back it up and make sure that you understand how to restore 
	the registry if a problem occurs. For information about how to back up, restore, and edit the 
	registry, click the following article number to view the article in the Microsoft Knowledge Base:
	
	  Q256986 Description of the Microsoft Windows Registry
	
	SYMPTOMS
	========
	
	During the Interix installation process, you may receive the following error
	message:
	
	  Pathname not normalized
	
	You may also receive error messages when you try to run the Interix command-line
	utilities.
	
	CAUSE
	=====
	
	Interix is case sensitive. The Interix installer checks the case (either
	uppercase or lowercase) of the installation folder (if it exists) and sets the
	registry values to those you provide at the time of installation. If you use the
	wrong case when you provide the folder location during Setup, Interix is
	installed correctly but the following registry values may be incorrect:
	
	  Hkey_Local_Machine\Software\Microsoft\Softway Systems\Interix\InstallRoot
	
	  HEY_LOCAL_MACHINE\software\Microsoft\softway systems\Interix\_CS_PATH
	
	RESOLUTION
	==========
	
	WARNING: If you use Registry Editor incorrectly, you may cause serious problems
	that may require you to reinstall your operating system. Microsoft cannot
	guarantee that you can solve problems that result from using Registry Editor
	incorrectly. Use Registry Editor at your own risk.
	
	Microsoft recommends that you accept the default values when you are installing
	Interix. If you cannot use the default values, change the registry values listed
	earlier in this article to reflect the correct case.
	
	Additional query words:
	
	======================================================================
	Keywords          : kbenv kberrmsg kbsetup 
	Technology        : kbInterixSearch kbUNIXSearch kbInterix221 kbInterix222 kbInterix223 kbInterix224 kbInterix22403 kbInterix22408 kbInterix225
	Version           : :2.2.1,2.2.2,2.2.3,2.2.4,2.2.4.03,2.2.4.08,2.2.5
	Issue type        : kbprb
	
	=============================================================================
	

{% endraw %}
