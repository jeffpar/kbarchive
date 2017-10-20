---
layout: page
title: "Q238665: Errors After Creating/Modifying Application, Directory, or Site"
permalink: /kb/238/Q238665/
---

## Q238665: Errors After Creating/Modifying Application, Directory, or Site

{% raw %}

	Article: Q238665
	Product(s): Internet Information Server
	Version(s): winnt:4.0
	Operating System(s): 
	Keyword(s): 
	Last Modified: 22-OCT-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Internet Information Server 4.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you create or modify an Internet Information Server (IIS) application,
	directory, virtual directory, or site, one or more of the following symptoms may
	occur:
	
	Note: The symptoms listed below are not all-inclusive; the symptoms that occur
	may vary due to the differences on your system and configuration.
	
	- In the Event Viewer, one of the following events may occur (please note that
	  the application path listed in the description will vary depending on the
	  path to your application):
	
	  Source: w3svc
	  Event ID: 36
	  Description: The server failed to load the application "/lm/w3svc/1/root" The
	  error was 8007053D.
	
	  -or-
	
	  Source: Service Control Manager
	  Event ID: 7011
	  Description: "Timeout (120000 milliseconds) waiting for transaction response".
	
	- IIS does not start.
	
	- The Microsoft Management Console (MMC) stops responding when you attempt to
	  open it or view the properties of an item in the scope pane.
	
	- When you attempt to browse the Web site, one of the following error messages
	  may occur:
	
	  HTTP Error 403 - Forbidden
	
	  -or-
	
	  HTTP Error 500 - Internal Server Error
	
	  -or-
	
	  Server Application Error.
	  The server has encountered an error while loading an application during the
	  processing of your request. Please refer to the event log for more detailed
	  information. Please contact the server administrator for assistance.
	
	CAUSE
	=====
	
	The changes made to the application, directory, virtual directory, or site are
	interrupted while they are being written to the metabase, which corrupted the
	metabase.
	
	RESOLUTION
	==========
	
	Because the metabase has a hierarchical structure, you can attempt to remove,
	and then re-create only the section that contains the corruption to create valid
	information in the metabase. To restore IIS functionality, try the following:
	
	Remove and Re-Create the Application, Directory, or Site
	--------------------------------------------------------
	
	If the MMC is working properly, remove, and then re-create the application,
	directory, virtual directory, or site that was being created when the corruption
	originally occurred.
	
	Restore from MMC Backup
	-----------------------
	
	If the MMC is working properly, and a backup of the metabase was created using
	the Backup action in the MMC, perform the following steps:
	
	1. In the MMC, open the Internet Information Server snap-in, right-click the
	  computer name, and then click Backup/Restore Configuration.
	
	2. Select the most recent, valid backup, and then click Restore.
	
	3. Manually re-create any changes or settings to IIS that were made between the
	  time of the backup and just before the corruption occurred.
	
	4. Re-create the application, directory, virtual directory, or site that
	  inadvertently caused the corruption.
	
	If the MMC Cannot be Used
	-------------------------
	
	If the MMC cannot be started, which therefore prevents you from attempting to
	remove and re-create the application, directory, virtual directory, or site,
	perform the following steps:
	
	1. Manually restore the metabase from a backup file. For information on how to
	  do this, see the following Microsoft Knowledge Base article:
	
	  Q234429 How to Manually Restore the Metabase When No Proper Backup Exists or
	  MMC Won't Start
	
	2. Manually re-create any changes or settings to IIS that were made between the
	  time of the backup and just before the corruption occurred.
	
	3. Re-create the application, directory, virtual directory, or site that
	  inadvertently caused the corruption.
	
	MORE INFORMATION
	================
	
	Note: You should back up the metabase regularly using the Restore action in the
	MMC.
	
	For information on how to back up and restore the metabase by using the MMC, see
	the IIS Readme file, located at
	http://localhost/iishelp/iis/htm/core/iisread.htm#general (assuming that the
	product documentation is installed on the local computer).
	
	Additional query words: vdir recreate corrupt errmsg err msg akz
	
	======================================================================
	Keywords          :  
	Technology        : kbiisSearch kbiis400
	Version           : winnt:4.0
	Issue type        : kbprb
	Solution Type     : kbpending
	
	=============================================================================
	

{% endraw %}
