---
layout: page
title: "Q242200: TPU: Setup Continues Even with Insufficient Disk Space"
permalink: /kb/242/Q242200/
---

## Q242200: TPU: Setup Continues Even with Insufficient Disk Space

{% raw %}

	Article: Q242200
	Product(s): Microsoft Windows NT
	Version(s): winnt:4.5; :
	Operating System(s): 
	Keyword(s): kberrmsg kbsetup
	Last Modified: 27-MAY-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft BackOffice Server 4.5 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you are installing Team Productivity Update (TPU), you may receive the
	following error message (note that the drive letter and space available vary):
	
	  Insufficient Drive Space
	
	  There does not appear to be sufficient disk space available on drive E to
	  complete the setup.
	
	  Space Available: 287.5 MB
	
	  Space Required: 566.6 MB
	
	  If you'd like to try to continue the setup anyway, click OK. Otherwise, click
	  Cancel.
	
	If you choose to continue with TPU Setup, you receive the following error
	message:
	
	  TPUSetup
	
	  Setup was unable to place the Outlook 2000 files on the client share.
	
	  Please review any documentation accompanying your setup for more information
	  on why setup may not be working properly. You might also try closing any open
	  applications and run setup again.
	
	When you click OK, the Team Productivity Update Setup Wizard indicates that Setup
	was not successful. TPU has not been installed.
	
	CAUSE
	=====
	
	This behavior occurs if the drive you choose as the installation drive for TPU
	does not have enough free space for the installation.
	
	RESOLUTION
	==========
	
	When you receive the first error message, click Cancel, and then change the
	destination drive for the Team Productivity Client share to a drive with at
	least 566.5 megabytes (MB) of free space.
	
	MORE INFORMATION
	================
	
	Microsoft has confirmed this to be a problem in the Microsoft products that are
	listed at the beginning of this article.
	
	Additional query words: smallbiz
	
	======================================================================
	Keywords          : kberrmsg kbsetup 
	Technology        : kbAudDeveloper kbBackOfficeSearch kbBackOfficeServ450
	Version           : winnt:4.5; :
	Issue type        : kbprb
	
	=============================================================================
	

{% endraw %}
