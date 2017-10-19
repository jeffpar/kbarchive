---
layout: page
title: "Q323315: HOW TO: Create an IIS Baseline by Using the Processor Object"
permalink: /kb/323/Q323315/
---

## Q323315: HOW TO: Create an IIS Baseline by Using the Processor Object

	Article: Q323315
	Product(s): Internet Information Server
	Version(s): 4.0,5.0
	Operating System(s): 
	Keyword(s): kbHOWTOmaster
	Last Modified: 06-AUG-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Internet Information Server version 4.0 
	- Microsoft Internet Information Services version 5.0 
	-------------------------------------------------------------------------------
	
	IN THIS TASK
	------------
	
	- SUMMARY
	
	   - IIS 4.0
	
	   - Set Up the Performance Monitor Logs
	- Schedule the Log to Run at Certain Times
	
	- IIS 5.0
	
	   - Set Up the Performance Monitor Logs and Schedule the Logs to Run at Certain
	  Times
	
	- REFERENCES
	
	SUMMARY
	=======
	
	This article provides step-by-step instructions for creating performance logs
	that can help you to analyze the performance of your Internet Information Server
	(IIS) 4.0 and Internet Information Services (IIS) 5.0 computer. These logs may
	be used for troubleshooting or for obtaining a performance baseline for future
	notification of possible issues with your IIS server.
	
	NOTE: Performance is best analyzed over several set time intervals. The longer
	the logging period, the better analysis is as to the typical baseline as opposed
	to the heavy baseline that your IIS server experiences.
	
	IIS 4.0
	-------
	
	Set up the Performance Monitor Logs:
	
	You must create two sets of logs: one for high traffic, and one for low traffic.
	
	1. Create two folders, one to host your high traffic Performance Monitor logs
	  (for example, C:\Perfmon\High) and one for the low traffic logs (for example,
	  C:\Perfmon\Low).
	
	2. Open Administrative Tools. To do this, click Start, point to Programs, click
	  Administrative Tools, and then click Performance Monitor.
	
	3. In Performance Monitor, click View, and then click Log.
	
	4. Add the correct counter. On the Edit menu, click Add to Log, click to select
	  Process, and then click Add.
	
	5. Click Done.
	
	6. To save the log file, click Options, click Log, and then name the file
	  Perfmon.log. Note that you must remember the path to the file so that you can
	  schedule the log to run at certain times. For example, the path may be
	  C:\Perfmon\High\Perfmon.log.
	
	7. On the File menu, click Save Log Settings, and then name the file
	  Perfmon.pml. Note that you must remember the path to the file so that you can
	  schedule the log to run at certain times. For example, the path may be
	  C:\Perfmon\High\Perfmon.pml.
	
	8. Follow these steps again to set up another log and log settings.
	
	Schedule the Log to Run at Certain Times:
	
	The following steps are provided as-is and are to be used only to provide
	scheduling functionality that currently does not exist on the Microsoft Windows
	NT 4.0 operating system. Instead of following these steps, you can use any
	third-party product that is designed to schedule performance monitoring.
	
	The following file is available for download from the Microsoft Download Center:
	
	  DownloadDownload Schedperf.exe now
	  (http://download.microsoft.com/download/iis50/Utility/1.0/NT4/EN-US/schedperf.exe)
	
	Release Date: July 3, 2002
	
	For additional information about how to download Microsoft Support files, click
	the following article number to view the article in the Microsoft Knowledge
	Base:
	
	  Q119591 How to Obtain Microsoft Support Files from Online Services
	
	Microsoft scanned this file for viruses. Microsoft used the most current
	virus-detection software that was available on the date that the file was
	posted. The file is stored on secure servers that prevent any unauthorized
	changes to the file.
	
	NOTE: To use the following Microsoft Visual Basic script, you must update your
	Windows Management Instrumentation (WMI) provider for Windows NT 4.0.
	
	1. Download Schedperf.exe.
	
	2. Unzip Schedperf.zip in its own folder (for example, C:\Perfmon).
	
	3. Double-click Wmicore.exe to install it.
	
	4. After the installation is complete, open a command prompt, switch to the
	  folder that contains the extracted files, and then start the script by using
	  the following command:
	
	  WSCRIPT SCHEDPERF.VBS
	
	5. Read the warning, and then click OK.
	
	6. Type the path to the folder where you extracted Schedperf.vbs (for example,
	  C:\Perfmon). Make sure that you do not type a backslash (\) at the end of the
	  path.
	
	7. Type the time zone information. To do this, calculate the offset from the GMT
	  time zone in minutes (for example, 420 for Pacific Standard Time during
	  Daylight Savings Time).
	
	8. Type the path to your high-traffic Performance Monitor logs.
	
	9. Type the start and end time for your high-traffic Performance Monitor logs in
	  hh:mmAM/PM format.
	
	10. Type the path to your low-traffic Performance Monitor logs.
	
	11. Type the start and end time for your low-traffic Performance Monitor logs in
	  hh:mmAM/PM format.
	
	12. Type "AT" (without the quotation marks) at a command prompt to review the
	  schedule entries. The JobID that is listed in the left side can be used to
	  delete an entry.
	
	Note that these Performance Monitor logs recur daily from Monday to Sunday. You
	may delete them by typing "AT <JobID> /delete" (without the quotation
	marks) at a command prompt.
	The AT functionality is only one of many Windows NT 4.0 scheduling applications.
	You can use any scheduling program for this task.
	
	IMPORTANT: The key to obtaining data at the correct points is to have an
	understanding of when your IIS server is receiving the most requests and the
	least requests. For more information about how to obtain this information, see
	the "References" section.
	
	IIS 5.0
	-------
	
	Set Up the Performance Monitor Logs and Schedule the Logs to Run at Certain Times:
	
	1. Open Administrative Tools. To do this, click Start, open Control Panel, and
	  then double-click Administrative Tools.
	
	2. Click Performance.
	
	3. In the left pane, double-click Performance Logs and Alerts.
	
	4. Click to select Counter Logs.
	
	5. Right-click inside the right pane, and then click New Log Settings.
	
	6. In the New Log Settings dialog box, type a name for the log, such as
	  "ProcessorHigh".
	
	7. On the General tab of the ProcessorHigh log, click Add Objects in the
	  Counters section.
	
	8. In the Performance Objects list, click Processor, and then click Add.
	
	9. At the log screen, click the Schedule tab to schedule the log times to run.
	
	10. Calculate the correct time frame, and then set the start time to one hour
	  before this time. For example, if the peak time is from 11:00 A.M. to 1:00
	  P.M. PST every Friday, start the log at 10:00 A.M. PST and set it to end at
	  2:00 P.M. PST every Friday. If the lowest usage time is from 2:00 A.M. to
	  4:00 A.M. PST every Friday, schedule a new log (such as ProcessorLow) to run
	  from 1:00 A.M. to 5:00 A.M. PST every Friday.
	
	11. Repeat these steps for the other log.
	
	REFERENCES
	==========
	
	If you have already gathered your data by following the steps in this article
	and you want to analyze your data for performance or baseline purposes, view the
	following article in the Microsoft Knowledge Base:
	
	  Q323312 HOW TO: Create an IIS Baseline by Using Log Analysis
	
	For additional information about similar procedures, click the article numbers
	below to view the articles in the Microsoft Knowledge Base:
	
	  Q323314 HOW TO: Create an IIS Baseline by Using the Memory Object
	
	  Q323316 HOW TO: Create an IIS Baseline by Using the Active Server Pages
	  Object
	
	  Q323317 HOW TO: Create an IIS Baseline by Using the Web Service Object
	
	  Q323701 HOW TO: Create an IIS Baseline by Using the Process Object
	
	Additional query words:
	
	======================================================================
	Keywords          : kbHOWTOmaster 
	Technology        : kbiisSearch kbiis500 kbiis400
	Version           : :4.0,5.0
	Issue type        : kbhowto
	
	=============================================================================
	
