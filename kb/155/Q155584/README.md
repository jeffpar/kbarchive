---
layout: page
title: "Q155584: PRB: Files Missing or Not Displayed in GUI Interface"
permalink: /kb/155/Q155584/
---

## Q155584: PRB: Files Missing or Not Displayed in GUI Interface

{% raw %}

	Article: Q155584
	Product(s): Microsoft SourceSafe
	Version(s): 
	Operating System(s): 
	Keyword(s): kbSSafe400 kbSSafe500 kbSSafe600
	Last Modified: 04-MAY-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual SourceSafe for Windows, versions 5.0, 6.0 
	- Microsoft Visual SourceSafe, 16-bit, for Windows, version 4.0 
	- Microsoft Visual SourceSafe, 32-bit, for Windows 4.0 
	-------------------------------------------------------------------------------
	
	
	SYMPTOMS
	========
	
	Projects are displayed without any files even though Visual SourceSafe Explorer
	normally displays a list of projects in its database and any associated files
	within the projects.
	
	WORKAROUND
	==========
	
	If the projects are displayed without any files, find and fix the problem with
	the following troubleshooting steps:
	
	1. Determine if Status Search is in use. From the View menu, selecting a Status
	  Search and choosing a particular user may result in an empty file list. This
	  means a particular user does not have any files in the selected project. To
	  cancel the query, select the View menu and click Cancel Search. Cancel Search
	  will be grayed out if a Query is not in progress.
	
	2. Determine if Rights are turned off through the Visual SourceSafe Admin
	  utility. In the Visual SourceSafe Admin utility, choose Options and Project
	  Security from the Tools menu, and clear the "Enable Project Security" check
	  box. In Visual SourceSafe, choose Security Setup from the Users menu, and
	  clear the "Enable Security System" check box.
	
	If the files still do not appear and the user has at least "Read" rights, then
	there is probably corruption in one of the .dat files. Copy the Version.dat,
	Rights.dat, and Status.dat files from the Vss\Data directory to a backup
	directory. Run DDCONV -S <path to Data directory> to rebuild the .dat
	files. Alternatively run Analyze.exe with the -f switch. Users of Visual
	SourceSafe version 4.0 should obtain the latest version of Analyze and DDCONV
	and should obtain build 1309 of Visual SourceSafe from Microsoft Technical
	Support.
	
	NOTE: Be careful of serial numbers on versions prior to 3.02. To view the version
	number, choose About from the Help menu.
	
	STATUS
	======
	
	This behavior is by design.
	
	REFERENCES
	==========
	
	For additional information, please see the following article in the Microsoft
	Knowledge Base:
	
	  Q190881 SAMPLE: Analyze6.exe Utility for Visual SourceSafe
	
	Additional query words:
	
	======================================================================
	Keywords          : kbSSafe400 kbSSafe500 kbSSafe600 
	Technology        : kbSSafeSearch kbAudDeveloper kbSSafe600 kbSSafe400 kbSSafe500 kbSSafe16bitSearch kbSSafe32bitSearch
	Issue type        : kbprb
	
	=============================================================================
	

{% endraw %}
