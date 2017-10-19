---
layout: page
title: "Q321625: HOWTO: Use Bandwidth and Process Throttling to Limit Resources"
permalink: /kb/321/Q321625/
---

## Q321625: HOWTO: Use Bandwidth and Process Throttling to Limit Resources

	Article: Q321625
	Product(s): Internet Information Server
	Version(s): 4.0,5.0
	Operating System(s): 
	Keyword(s): kbHOWTOmaster
	Last Modified: 08-AUG-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Internet Information Server version 4.0 
	- Microsoft Internet Information Services version 5.0 
	-------------------------------------------------------------------------------
	
	
	IN THIS TASK
	------------
	
	- SUMMARY
	
	   - Limit Computer Resources in IIS 4.0
	- Limit Computer Resources in IIS 5.0
	
	- REFERENCES
	
	SUMMARY
	=======
	
	This step-by-step article describes how to limit the computer resources that are
	used by the Internet Information Server (IIS) 4.0 or Internet Information
	Services (IIS) 5.0 services that are running on a Web server.
	
	Limit Computer Resources in IIS 4.0
	-----------------------------------
	
	1. Click Start, point to Programs, click Windows NT 4.0 Option Pack, click
	  Microsoft Internet Information Server, and then click Internet Service
	  Manager.
	
	2. When the Microsoft Management Console (MMC) window opens, expand <Server
	  Name>, and then click to select either Default Web Site or the name of the
	  Web site that you want to work with.
	
	3. Right-click the Web site, and then click Properties.
	
	4. In the Web Site Properties window, click the Performance tab.
	
	5. On this tab, you can select the estimated hits per day for this Web site by
	  selecting one of the three predetermined stop positions with the slide bar.
	  Adjust this setting to the number of daily connections that you anticipate
	  for your site. If the number is set a little higher than the actual number of
	  connections, the connections are made faster and server performance is
	  improved. If the number is much higher than the actual connection attempts,
	  server memory is wasted, reducing overall server performance.
	
	6. You can also click to select Enable Bandwidth Throttling. Turn on this option
	  to limit the bandwidth that this Web site uses. For this Web site only, the
	  value that you type for the bandwidth overrides the value that is set at the
	  computer level, even if this value is greater than the value that is set at
	  the computer level.
	
	Limit Computer Resources in IIS 5.0
	-----------------------------------
	
	1. Click Start, point to Programs, click Administrative Tools, and then click
	  Internet Services Manager.
	
	2. When the Microsoft Management Console (MMC) window opens, expand <Server
	  Name>, and then click to select either Default Web Site or the name of the
	  Web site that you want to work with.
	
	3. Right-click the Web site, and then click Properties.
	
	4. In the Web Site Properties window, click the Performance tab.
	
	5. On this tab, you can select the estimated hits per day for this Web site by
	  selecting one of the three predetermined stop positions with the slide bar.
	  Adjust this setting to the number of daily connections that you anticipate
	  for your site. If the number is set a little higher than the actual number of
	  connections, the connections are made faster and server performance is
	  improved. If the number is much higher than the actual connection attempts,
	  server memory is wasted, reducing overall server performance.
	
	6. If you want to, click to select Enable Bandwidth Throttling. Turn on this
	  option to limit the bandwidth that this Web site uses. For this Web site
	  only, the value that you type for the bandwidth overrides the value that is
	  set at the computer level, even if this value is greater than the value that
	  is set at the computer level.
	
	7. If you want to, click to select Enable Process Throttling. Turn on this
	  option to limit the percentage of CPU processing time that this Web site can
	  use for out-of-process applications. If this option is turned on, but Enforce
	  limits is not selected, the only result is that an event is written to Event
	  Log when the assigned limit is exceeded. Click to select Enforce limits to
	  incur consequences for overrunning the limit.
	
	REFERENCES
	==========
	
	For additional information, click the article number below to view the article
	in the Microsoft Knowledge Base:
	
	  Q235437 How to Change Process Throttling Options for IIS 5.0
	
	  Q308186 HOW TO: Optimize Web Server Performance in Windows 2000
	
	  Q308192 HOW TO: Configure Windows 2000 as a Web Server
	
	  Q187506 List of NTFS Permissions Required for IIS Site to Work
	
	Additional query words:
	
	======================================================================
	Keywords          : kbHOWTOmaster 
	Technology        : kbiisSearch kbiis500 kbiis400
	Version           : :4.0,5.0
	Issue type        : kbhowto
	
	=============================================================================
	
