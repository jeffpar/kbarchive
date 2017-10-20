---
layout: page
title: "Q142848: Installing IIS Over Previously Installed Beta Versions"
permalink: /kb/142/Q142848/
---

## Q142848: Installing IIS Over Previously Installed Beta Versions

{% raw %}

	Article: Q142848
	Product(s): Internet Information Server
	Version(s): 1.0
	Operating System(s): 
	Keyword(s): kbinterop
	Last Modified: 08-MAY-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Internet Information Server 1.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	You experience problems after you install a beta version of Microsoft Internet
	Information Server and then upgrade to the release version instead of deleting
	the beta version first before installing the release version.
	
	RESOLUTION
	==========
	
	Microsoft does not recommend or support installation of released software on top
	of previous beta versions. To install the released version:
	
	1. Backup your data files and make notes of your settings.
	
	2. Run the beta Internet Server Setup program and choose Remove All to remove
	  all beta files and related registry entries.
	
	  If you have already upgraded over your beta version, follow this same
	  procedure with the release version Setup program.
	
	3. Reboot and run Setup from the release version.
	
	This ensures that all outdated files and registry entries are removed so there
	are no conflicts between the release version and the beta version.
	
	Additional query words: prodiis1
	
	======================================================================
	Keywords          : kbinterop 
	Technology        : kbiisSearch kbiis100
	Version           : 1.0
	
	=============================================================================
	

{% endraw %}
