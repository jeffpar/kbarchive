---
layout: page
title: "Q191289: HOWTO: Enable Event Error Logging for FrontPage 98 &amp; SourceSafe"
permalink: /kb/191/Q191289/
---

## Q191289: HOWTO: Enable Event Error Logging for FrontPage 98 &amp; SourceSafe

{% raw %}

	Article: Q191289
	Product(s): Microsoft SourceSafe
	Version(s): WINDOWS:5.0,6.0,98
	Operating System(s): 
	Keyword(s): kbFrontPage kbSSafe500 kbSSafe600
	Last Modified: 01-MAY-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual SourceSafe for Windows, versions 5.0, 6.0 
	- Microsoft FrontPage 98 for Windows 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	With FrontPage 97, errors relating to the SourceSafe integration automatically
	display in the Web Server NT Event Log, usually on the Application tab. However,
	this behavior must be enabled in FrontPage 98 or FrontPage 2000.
	
	MORE INFORMATION
	================
	
	Front Page 98 Server Extensions
	-------------------------------
	
	Adding the following entry to the Frontpg.ini file on the Web server, allows you
	to see the error messages that are causing the SourceSafe integration in
	FrontPage to fail:
	
	     LogInitialSourceControlErrors=1
	
	The preceding line should be placed in the "[FrontPage 3.0]" section of the
	Frontpg.ini file.
	
	Front Page 2000 Server Extensions (version 4.0.2.2717 or later)
	---------------------------------------------------------------
	
	Add the following registry entry as a String Value:
	
	  HKEY_LOCAL_MACHINE\SOFTWARE\Microsoft\Shared Tools\Web Server Extensions\All Ports \LogInitialSourceControlErrors
	
	with the value "1"
	
	NOTE: All errors logged by FrontPage regarding SourceSafe integration are logged
	at the server end of the transaction. On a Windows NT system, the errors are
	logged in the "Windows NT Event Viewer Application" log. On a computer running
	Windows 95 or Windows 98, the errors are logged in the Frontpg log file located
	in the root of the drive to which Windows is installed. The errors are not
	logged to the client computer.
	
	In both cases you may want to set the value to zero once all errors have been
	resolved to avoid unnecessary activity in the Event log.
	
	Additional query words:
	
	======================================================================
	Keywords          : kbFrontPage kbSSafe500 kbSSafe600 
	Technology        : kbSSafeSearch kbFrontPageSearch kbAudDeveloper kbZNotKeyword4 kbFrontPage98Search kbZNotKeyword3 kbSSafe600 kbSSafe500
	Version           : WINDOWS:5.0,6.0,98
	Issue type        : kbhowto
	
	=============================================================================
	

{% endraw %}
