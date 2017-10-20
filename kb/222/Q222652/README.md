---
layout: page
title: "Q222652: Prompted for Floppy Disk When Adding a Printer to SBS Server"
permalink: /kb/222/Q222652/
---

## Q222652: Prompted for Floppy Disk When Adding a Printer to SBS Server

{% raw %}

	Article: Q222652
	Product(s): Microsoft Windows NT
	Version(s): winnt:4.5
	Operating System(s): 
	Keyword(s): kbenv kbprint
	Last Modified: 06-AUG-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft BackOffice Small Business Server version 4.5 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you are adding a printer to a BackOffice Small Business Server (SBS), you
	may receive the following message at the end of the Add Printer Wizard:
	
	  Please insert the floppy disk labeled "Microsoft BackOffice Small Business
	  Server Disc 1" into drive <drive letter>: and then click OK.
	
	  You can also click OK if you want files to be copied from an alternate
	  location, such as a network server or a compact disc.
	
	CAUSE
	=====
	
	This behavior can occur if the drive letter of the CD-ROM drive from which SBS
	was installed is changed after the SBS server is installed.
	
	RESOLUTION
	==========
	
	To work around this issue, click OK as instructed. When you are prompted, browse
	to the location of the printer driver and complete the printer installation.
	
	STATUS
	======
	
	Microsoft has confirmed that this is a problem in Microsoft BackOffice Small
	Business Server 4.5.
	
	Additional query words: smallbiz
	
	======================================================================
	Keywords          : kbenv kbprint 
	Technology        : kbAudDeveloper kbSBServSearch kbSBServ450
	Version           : winnt:4.5
	Issue type        : kbbug
	
	=============================================================================
	

{% endraw %}
