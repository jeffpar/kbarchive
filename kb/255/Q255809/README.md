---
layout: page
title: "Q255809: Using the Init.bat Utility in Microsoft Metadirectory Services"
permalink: /kb/255/Q255809/
---

## Q255809: Using the Init.bat Utility in Microsoft Metadirectory Services

{% raw %}

	Article: Q255809
	Product(s): Microsoft Windows NT
	Version(s): 2.1
	Operating System(s): 
	Keyword(s): kbtool
	Last Modified: 06-AUG-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Metadirectory Services 2.1 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	The Init.bat utility is a powerful tool. It is used by the installation program
	when you reinstall a VIA server. You can also use Init.bat to start over and
	create a new, clean directory database file. It completely deletes the current
	metadirectory database and reinitializes all its files.
	
	However, because all of the Management Agent (MA) working folders are also
	deleted, you can potentially delete any custom MA templates that have been
	created. You should create a working backup of the database and make copies of
	your custom templates from their working folders before you run this utility.
	
	This article describes how to use the Init.bat utility.
	
	MORE INFORMATION
	================
	
	If you have custom MA templates, save them before you run Init.bat. To do so,
	record the templates to the working folder, and then copy them to an alternative
	location. For information about how to record MA templates, see the following
	article in the Microsoft Knowledge Base:
	
	  Q250479 Recording Management Agent Templates in Microsoft Metadirectory
	  Services
	
	Using the Init.bat Utility
	--------------------------
	
	1. Quit the Compass Client utility.
	
	2. Stop the Zoomit Server service by typing net stop "zoomit server" at the
	  command prompt. The quotation marks are required. You can also stop the
	  service by using the Services tool in Control Panel (Microsoft Windows NT
	  4.0), Administrative tools (Microsoft Windows 2000), or the Services
	  Management snap-in (Windows 2000).
	
	3. Copy custom MAs from the working folder. For information about the MA working
	  folder and how to locate it, see the following articles in the Microsoft
	  Knowledge Base:
	
	  Q254189 Description of the Management Agent Working Folders
	
	  Q279692 Init.bat Does Not Correctly Reinitialize the Database
	
	4. At a command prompt, change to the Zoomserv\Bin\Init folder.
	
	5. At the command prompt, type "init.bat <drive>" (without the quotation
	  marks), where <drive> is the drive on which the Zoomserv\Bin\Init
	  exists.
	
	Additional query words: MMS Zoomit VIA init bat
	
	======================================================================
	Keywords          : kbtool 
	Technology        : kbMMSSearch kbMMS210
	Version           : :2.1
	Issue type        : kbinfo
	
	=============================================================================
	

{% endraw %}
