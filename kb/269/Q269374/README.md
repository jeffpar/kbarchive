---
layout: page
title: "Q269374: XWEB: OWA Prompts Three Times for Credentials then Blank Page"
permalink: /kb/269/Q269374/
---

## Q269374: XWEB: OWA Prompts Three Times for Credentials then Blank Page

{% raw %}

	Article: Q269374
	Product(s): Microsoft Exchange
	Version(s): 2000,4.0,5.5
	Operating System(s): 
	Keyword(s): exc55
	Last Modified: 22-JUN-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Outlook Web Access, version 5.5, on platform(s):
	   - Microsoft Windows NT Server version 4.0 
	   - Microsoft Windows 2000 Server 
	- Microsoft Exchange Server, version 5.5 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	After a user types a mailbox name at the Microsoft Outlook Web Access (OWA)
	logon page, the user may be prompted for credentials three times, and then a
	blank page is displayed.
	
	CAUSE
	=====
	
	This issue can occur because of any application that scans and modifies files,
	such as an antivirus solution.
	
	RESOLUTION
	==========
	
	To resolve this issue, disable scanning of the Exchsrvr\Webdata folder for the
	drive where OWA is installed. You can configure most antivirus applications to
	disable scanning of the Exchsrvr\Webdata folder; refer to your antivirus
	application manual or online help for further details.
	
	MORE INFORMATION
	================
	
	Any time that the Global.asa file is modified, the file is re-run. The
	Global.asa file sets up the application and session variables that OWA uses. Any
	time that the Global.asa file is re-run, a new application and session are
	created and the existing application and session are ended. When the current
	session ends, all session variables are lost. The attempt to log on is
	unsuccessful, and three prompt messages and a blank screen are displayed. While
	antivirus applications may not visibly make any changes to the Global.asa file,
	antivirus applications typically reset the archive bit on files that have been
	scanned, and this is enough to cause the Global.asa file to be re-run.
	
	
	Additional query words: virus signature update.
	
	======================================================================
	Keywords          : exc55 
	Technology        : kbOutlookSearch kbOWASearch
	Version           : :2000,4.0,5.5
	Issue type        : kbprb
	
	=============================================================================
	

{% endraw %}
