---
layout: page
title: "Q250311: Setting MA Logging Levels in Microsoft Metadirectory Services"
permalink: /kb/250/Q250311/
---

## Q250311: Setting MA Logging Levels in Microsoft Metadirectory Services

	Article: Q250311
	Product(s): Microsoft Windows NT
	Version(s): 2.1
	Operating System(s): 
	Keyword(s): kbenv
	Last Modified: 03-MAY-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Metadirectory Services, version 2.1 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	Each management agent (MA) has various log files, each one associated with a
	different phase of the MA. The most general log file is the Zscript.log file. It
	is located in the MA's working folder. The level of detail that is recorded is
	controlled by the log level setting within the MA. Increasing the logging level
	allows you to record what occurs when the MA runs and then compare that to what
	you intended to occur. Generally, you should not raise the logging level above 3
	because of the large amount of data generated.
	
	MORE INFORMATION
	================
	
	There are six levels: 0 through 5. The higher levels are cumulative. As the
	level increases, the log file contains all of the information from the previous
	levels.
	
	- Level 0 - Displays Zscript echo commands, fatal errors, and summaries.
	
	- Level 1 - Displays changes that occur during the management run. This is the
	  default setting for each MA that is created.
	
	- Level 2 - Displays all entries by name as they are being processed. This also
	  displays attribute flow and joining rules.
	
	- Level 3 - Displays all entries with full attribute listings.
	
	- Level 4 - Displays a line-by-line listing from each parsing and construction
	  template used during the MA.
	
	- Level 5 - Displays the MA configuration information and a line-by-line
	  interpretation of each construction template used during the MA.
	
	To Set a Higher Logging Level
	-----------------------------
	
	1. Use Compass to log on to the Microsoft Metadirectory Services (MMS) server.
	
	2. Click Bookmarks.
	
	3. Click the MA in which you want to increase the logging level.
	
	4. Click Operate MA.
	
	5. Click the Operational Settings tab, and then click the Logging tab.
	
	6. Change the Logging Detail Level setting to the number you want.
	
	7. Click OK to close all the dialog boxes.
	
	NOTE: If you need to increase the logging level to level 4 or higher for
	troubleshooting purposes, set the limit to five entries to reduce the amount of
	logging that occurs. For additional information, click the article number below
	to view the article in the Microsoft Knowledge Base:
	
	  Q250486 Running a Management Agent for a Limited Number of Entries
	
	Additional query words:
	
	======================================================================
	Keywords          : kbenv 
	Technology        : kbMMSSearch kbMMS210
	Version           : :2.1
	Issue type        : kbinfo
	
	=============================================================================
	
