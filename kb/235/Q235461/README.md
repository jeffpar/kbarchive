---
layout: page
title: "Q235461: Enhancing Performance in Internet Information Server 4.0"
permalink: /kb/235/Q235461/
---

## Q235461: Enhancing Performance in Internet Information Server 4.0

{% raw %}

	Article: Q235461
	Product(s): Internet Information Server
	Version(s): 4.0
	Operating System(s): 
	Keyword(s): 
	Last Modified: 11-JUN-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Internet Information Server version 4.0 
	-------------------------------------------------------------------------------
	
	IMPORTANT: This article contains information about modifying the registry. Before you modify the registry, make sure to back it up and make sure that you understand how to restore the registry if a problem occurs. For information about how to back up, restore, and edit the registry, click the following article number to view the article in the Microsoft Knowledge Base:
	
	  Q256986 Description of the Microsoft Windows Registry
	
	SUMMARY
	=======
	
	This article provides some general performance-enhancement settings for Internet
	Information Server (IIS) 4.0. The default settings for Internet Information
	Server 4.0 are adequate for most uses; however, sites serving a great number of
	users may need to increase certain default parameters to increase performance.
	These settings should be verified on a test computer prior to making changes to
	the production computer.
	
	MORE INFORMATION
	================
	
	1. Increase the number of script engines cached by performing the following
	  steps:
	
	  a. Open the MMC and right-click on the computer name.
	
	  b. Click Properties.
	
	  c. Click Edit master properties.
	
	  d. Click Configuration (application).
	
	  e. Click Process Options.
	
	  f. Change the value in Script Engines cached to 100. Setting this value
	     higher than 250 will show only marginal results.
	
	  g. Change the value in Max ASP Files Cached from Cache all requested files to
	     approximately 25 percent of the ASP page count (for example, 1,000 ASP
	     pages would need 250 as a default).
	
	2. Change the Performance settings in the Web site to 100,000+Visits:
	
	  a. Open the MMC and right-click on the Web site.
	
	  b. Click the Performance tab.
	
	  c. Slide the optimization bar to the far right.
	
	3. The following changes must be made from the command line:
	
	  a. Change the directory to c:\winnt\system32\inetsrv\adminsamples.
	
	  b. Change the default script host to cscript (will save some keystrokes):
	     cscript //h:cscript. (Optional)
	
	  c. Change ASP Queue Timeout to 30 sec (defaults to unlimited) by typing
	     "adsutil set w3svc/1/AspQueueTimeout 30."
	
	  d. Set the ServerListenBackLog to 500 (default 200) by typing "adsutil.vbs
	     set w3svc/1/ServerListenBackLog 500."
	
	  e. Change Max End Point Connections to 500 (default 200) by typing "adsutil
	     set w3svc/1/MaxEndPointConnections 500."
	
	4. Open the Registry Editor to make the following changes:
	
	WARNING: If you use Registry Editor incorrectly, you may cause serious problems
	that may require you to reinstall your operating system. Microsoft cannot
	guarantee that you can solve problems that result from using Registry Editor
	incorrectly. Use Registry Editor at your own risk.
	
	  a. Change ProcessorThreadMax to 14 (hex) (Reg DWord)
	     HKEYLOCALMACHINE\SYSTEM\CurrentControlSet\Services\W3svc\Asp\Parameters.
	     The value is not present by default.
	
	  b. Create the MaxBlocks Registry setting (if not present already)
	     HKEY_CLASSES_ROOT\CLSID\{c8b522cb-5cf3-11ce-ade5-00aa0044773d}\Flags
	     "MaxBlock"=dword:00004000.
	
	For more information, refer to the following article in the Microsoft Knowledge
	Base:
	
	  
	
	  Q193026 PRB: NOT_ENOUGH_STORAGE Errors in IIS Log File
	
	  c. If the scripting host was changed, and if it needs to be changed back to
	     the default (wscript) type:
	
	  cscript //h:wscript<enter>
	
	For best results, it is recommended that consistent monitoring and benchmarking
	be used. For relatively simplistic analysis, Perfmon may be used with the
	following counters:
	
	- ASP object: Requests Queued, Requests Executing, Script Engines Cached.
	
	- Processor object: % Processor Time
	
	- Memory: Available Bytes
	
	Explanation of counters:
	
	- Requests Queued displays the current number of ASP pages waiting to execute.
	  It is not unusual for the queue to periodically spike, but should return to a
	  count at or near zero. Queuing may be caused by a resource (Database
	  connection, CPU, and so on) not being available to service the request.
	
	- Requests Executing displays the current number of ASP pages executing and
	  gives a general idea of site load.
	
	- Script Engines Cached displays the current number of script engines loaded
	  into memory. If this value is showing the same value as the setting mentioned
	  earlier, it may be increased. It should be increased in stages (50) until the
	  number of engines cached remains below the maximum setting.
	
	  NOTE: Increasing the value will increase the amount of memory used by Internet
	  Information Server.
	
	- % Processor Time: Displays the current processor load.
	
	- Available bytes: Displays available RAM
	
	NOTE: This article is based on the following whitepaper:
	
	  Web Server Performance Optimization
	
	For additional information, click the article number below to view the article in
	the Microsoft Knowledge Base:
	
	  Q229814 Configuring IIS to Handle Heavy Usage
	
	Additional query words: IIS
	
	======================================================================
	Keywords          :  
	Technology        : kbiisSearch kbiis400
	Version           : :4.0
	Issue type        : kbhowto
	
	=============================================================================
	

{% endraw %}
