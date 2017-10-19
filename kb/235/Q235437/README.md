---
layout: page
title: "Q235437: How to Change Process Throttling Options for IIS 5.0"
permalink: /kb/235/Q235437/
---

## Q235437: How to Change Process Throttling Options for IIS 5.0

	Article: Q235437
	Product(s): Internet Information Server
	Version(s): winnt:5.0
	Operating System(s): 
	Keyword(s): 
	Last Modified: 04-FEB-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Internet Information Services version 5.0 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	Internet Information Services 5.0 allows for the throttling of application
	spaces. Throttling affects each application that is running in its own memory
	space (High Isolation).
	
	MORE INFORMATION
	================
	
	The throttling action is not based on the CPU load, but rather the CPU time
	expended servicing the application. For example, the settings for this option
	are as follows:
	
	  10% CPU time
	
	and the Threshold percentages are:
	
	  100%
	  150%
	  200%
	
	This means that after the application has used 10 percent of the elapsed
	processor time, the 100-percent threshold throttle will occur. At 15 percent
	(150 percent of the setting), the second throttle will occur. At 20 percent (200
	percent of the setting), the final throttle will occur.
	
	The events are as follows:
	
	  100 percent: An event is logged in the IIS Log file if process logging is
	  enabled.
	  150 percent: Thread priority is lowered, thereby decreasing the impact of the
	  application.
	  200 percent: Application is stopped. It may only be restarted by the Web
	  operator.
	
	All of the settings are customizable.
	To change the time percentage, do the following:
	
	1. Open the MMC.
	
	2. Expand the IIS Snap-in to open the application or Web site.
	
	3. Right-click the computer name.
	
	4. Click the Performance tab.
	
	5. Select the Enable process throttling check box.
	
	6. Set Maximum CPU use (10% is default).
	
	7. Select Enforce Limits.
	
	NOTE: Failure to select the Enforce Limits will result in log entries only; no
	other measures will be taken.
	To change the threshold limits (for example to 50%, 75%, and 100% respectively),
	do the following:
	
	1. Open a command prompt.
	
	2. Change the directory to c:\inetpub\adminscripts and type the following:
	
	  cscript adsutil.vbs set w3svc/CPULimitLogEvent 5000 <enter>
	  cscript adsutil.vbs set w3svc/CPULimitPriority 7500 <enter>
	  cscript adsutil.vbs set w3svc/CPULimitProcStop 10000 <enter>
	
	  Note: All values include two decimal places, but the decimal is omitted (for
	  example 50.00% = 5000)
	
	The settings above are global to the Web service for a particular server. The
	Cscript executable may be skipped if Cscript.exe is the default scripting host.
	
	To set Cscript as the default scripting host, use:
	
	  cscript //h:cscript<enter>
	
	To set Wscript as the default scripting host, use:
	
	  cscript //h:wscript<enter>
	
	Additional query words: iis
	
	======================================================================
	Keywords          :  
	Technology        : kbiisSearch kbiis500
	Version           : winnt:5.0
	Issue type        : kbinfo
	
	=============================================================================
	
