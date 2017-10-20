---
layout: page
title: "Q272458: BETA-BUG: Interpreting App Center 2000 8022 Event Log Messages"
permalink: /kb/272/Q272458/
---

## Q272458: BETA-BUG: Interpreting App Center 2000 8022 Event Log Messages

{% raw %}

	Article: Q272458
	Product(s): Microsoft Windows NT
	Version(s): WINDOWS:
	Operating System(s): 
	Keyword(s): kbWinDNA kbGrpDSSIE kbDSupport
	Last Modified: 08-FEB-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Application Center 2000 
	-------------------------------------------------------------------------------
	
	This article discusses a beta test product not yet released by
	Microsoft. Please feel free to familiarize yourself with this
	product, test it, and report problems to Microsoft.
	
	This article discusses a Beta release of a Microsoft product. The 
	information in this article is provided as-is and is subject to change
	without notice.
	
	No formal product support is available from Microsoft for this Beta 
	product. For information about obtaining support for a Beta release, 
	please see the documentation included with the Beta product files, or 
	check the Web location from which you downloaded the release.
	
	SYMPTOMS
	========
	
	When you run Microsoft Application Center 2000 Beta 2, you may see error
	messages in the Application Center Events window with source "Monitoring," Event
	ID 8022, and Description "Application Center -". The complete text of the error
	message reads as follows:
	
	  The Performance Log consumer could not read the XXX performance counter from
	  Performance Data Helper (PDH). The status is NNN.
	
	NOTE: XXX is the Application Center 2000 name of a performance counter and NNN is
	typically a system error or an error return code from Performance Data Helper
	(PDH).
	
	There may also be a matching error message in the Application Event Log with
	Source "Application Center," Category "Monitoring," Event 53, and the following
	Description:
	
	  __CLASS: MicrosoftAC_MonPerPDHError
	  __SERVER: SSS
	  ServerGUID: {GGGG}
	  CounterName: XXX
	  EventId: 8022
	  GUID: {758E0DED-92F7-48D7-BFD4-47BF6D9B2CB7}
	  Status: NNN
	  TimeGenerated: MM/DD/YY HH:MM:SS
	  Type: 1
	  DisplayName: Monitoring PerfLog PDHError
	
	These error messages may be more frequent when the CPU is heavily loaded or the
	server is experiencing low memory conditions.
	
	After this error message occurs, the named counter may no longer be logged,
	Health monitor triggers that are based on the counter may no longer work, and it
	may not be available for display in the Application Center performance display
	window.
	
	This error does not affect the logging or use of the counter by other servers in
	the cluster.
	
	CAUSE
	=====
	
	Application Center 2000 Beta 2 collects performance information for logging and
	display by using threads within the Winmgmt.exe process. This leads to resource
	competition with other Windows Management Instrumentation (WMI) threads, and
	multithreading issues, which may result in corruption of the in-memory PDH
	database that is used by the Application Center logging thread.
	
	The 8022 error can also arise from transient conditions that do not cause the
	issues described in the "Symptoms" section; in those cases, the named counter
	continues to function normally although there may be a gap in the logged data.
	
	RESOLUTION
	==========
	
	The design of Application Center 2000 is being changed post Beta 2 to create a
	separate logging process for performance counter data, which will eliminate the
	multithreading issues and substantially reduce the resource competition.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a bug in the Microsoft products listed at the
	beginning of this article.
	
	MORE INFORMATION
	================
	
	You can usually restore counter availability by stopping and restarting the
	Windows Management Instrumentation service by using the Microsoft Management
	Console (MMC) snap-in Computer Management\Services and Applications\Services.
	
	If stopping and restarting the WMI service doesn't restore the counter to
	visibility in the Applications Center Performance window, you may need to
	restart the affected server.
	The 8020 events may immediately follow 8022 events, naming the same counter. The
	8020 events are caused by the same problem that caused the preceding 8022 event.
	
	Additional query words: appcenterkb mullt-threaded
	
	======================================================================
	Keywords          : kbWinDNA kbGrpDSSIE kbDSupport 
	Technology        : kbAudDeveloper kbACenterSearch kbACenter2000
	Version           : WINDOWS:
	Issue type        : kbbug
	
	=============================================================================
	

{% endraw %}
