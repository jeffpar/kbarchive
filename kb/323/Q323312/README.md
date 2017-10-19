---
layout: page
title: "Q323312: HOW TO: Create an IIS Baseline by Using Log Analysis"
permalink: /kb/323/Q323312/
---

## Q323312: HOW TO: Create an IIS Baseline by Using Log Analysis

	Article: Q323312
	Product(s): Internet Information Server
	Version(s): 4.0,5.0
	Operating System(s): 
	Keyword(s): kbHOWTOmaster
	Last Modified: 23-JUL-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Internet Information Server version 4.0 
	- Microsoft Internet Information Services version 5.0 
	-------------------------------------------------------------------------------
	
	IN THIS TASK
	------------
	
	- SUMMARY
	
	   - IIS 4.0
	
	   - Open the Log File
	- Add Counters in High or Low Logs
	- Review Data from Counters in High or Low Logs
	
	- IIS 5.0
	
	   - Open the Log File
	- Add Counters in High or Low Logs
	- Review Data from Counters in High or Low Logs
	
	- REFERENCES
	
	SUMMARY
	=======
	
	This step-by-step article describes how to open and analyze performance data
	that has been gathered by using performance logging. This data can help you to
	analyze the performance of your Microsoft Windows NT Internet Information Server
	(IIS) 4.0 computer or your Microsoft Windows 2000 Internet Information Services
	(IIS) computer.
	
	NOTE: It is extremely difficult to pinpoint exact baselines for each server. This
	article provides help in understanding how to review this data, but it is not
	intended to review all aspects of server performance. For more information, see
	the "References" section.
	
	IIS 4.0
	-------
	
	Open the Log File:
	
	1. Click Start, point to Programs, open the Administrative Tools, and then click
	  Performance Monitor.
	
	2. With the Performance Monitor Microsoft Management Console (MMC) open, click
	  Options, and then click Choose Data From.
	
	3. On the Data From menu, click to select Log File, and then click the ellipsis
	  button (...).
	
	4. Locate the log file, click to select the file, and then click Open.
	
	NOTE: To confirm that the data log file has been opened, view the lower left of
	the Performance Monitor screen. You see the following:
	
	Data:  C:\MyLog.Log
	
	For example, if the log file is saved to C:\Mylogs\ and the file name is
	ProcessHigh, you open the C:\Mylogs\ProcessHigh.log file (note that the file
	name extension may vary based on the type of file that was saved.)
	
	Add Counters in High or Low Logs:
	
	1. After you open the file, open the appropriate counter. To do this, click the
	  plus sign (+) in Performance Monitor. Alternatively, on the Edit menu, click
	  Add to Chart to add the counter to the chart.
	
	2. In the Object list, click to select the appropriate object (such as Web
	  Service).
	
	3. In the counter list, click to select the counter. In the instance list, make
	  sure that _Total is selected, and then click Add.
	
	4. Click Done.
	
	Review Data from Counters in High or Low Logs:
	
	Performance Monitor shows the behavior of the counters in the form of a single
	line in relation to a scale from 0 to 100. After you determine the time the log
	ran for (such as four hours), the next step is to determine the average from the
	Average box in Performance Monitor.
	
	After you run performance baseline logs over the course of one week, a baseline
	average can be obtained by adding the average of each log and then dividing it
	by the number of logs that were taken. For example, if the average Anonymous
	Users\Sec (_Total) in a four-hour time period over five days is an average of
	the following logs, you can assume that the average Anonymous Users\Sec for your
	Web applications is 27.4 users during this four-hour period:
	
	     Day 1 = 22
	     Day 2 = 28
	     Day 3 = 23
	     Day 4 = 35
	     Day 5 = 29
	
	If this information comes from the WebServiceHigh log, a number that is greater
	than this can be considered above the maximum norm.
	
	You can follow the same steps for the WebServiceLow log to determine the minimum
	average over a four-hour period. This produces data such as:
	
	Baseline Averages: WebService\AnonymousUsers\Sec
	
	  Minimum = 27.4
	
	IIS 5.0
	-------
	
	Open the Log File:
	
	1. Open the System Monitor. To do this, click Start, open Control Panel,
	  double-click Administrative Tools, and then double-click Performance.
	
	2. In the left pane of the MMC, click System Monitor.
	
	3. Right-click anywhere in the right pane of the MMC, and then click Properties.
	
	4. In the System Monitor properties, click the Source tab, and then click
	  Browse.
	
	5. Locate the log file in the file system.
	
	For example, if the log file is saved to C:\Mylogs\ and the file name is
	ProcessHigh, you open the C:\Mylogs\Processhigh.blg file (the extension may vary
	based on saved type.)
	
	Add Counters in High or Low Logs:
	
	1. With the System Monitor properties open, click the Data tab to see the
	  counters loaded.
	
	NOTE: This example only steps through loading an individual counter (Web Service
	-- Request Executing) for review, and then discusses how to get data out of this
	counter.
	
	2. Click Add, and then click from Performance Object Active Server Pages.
	
	3. Under All Counters, click to select Select Counters from List.
	
	4. Scroll to the Requests Executing counter, click to select Requests Executing,
	  and then click Add.
	
	NOTE: Microsoft recommends that you select multiple counters from multiple
	objects for review. However, for simplicity, this example only selects one
	counter at this time.
	
	5. Click Close.
	
	Review Data from Counters in High or Low Logs:
	
	Performance Monitor shows the behavior of the counters in the form of a single
	line in relation to a scale from 0 to 100. After you determine the time the log
	ran for (such as four hours), the next step is to determine the average from the
	Average box in Performance Monitor.
	
	After you run performance baseline logs over the course of one week, a baseline
	average can be obtained by adding the average of each log and then dividing it
	by the number of logs that were taken. For example, if the average Anonymous
	Users\Sec (_Total) in a four-hour time period over five days was an average of
	the following logs, you can assume that the average Anonymous Users\Sec for your
	Web applications is 11.8 users during this four-hour period:
	
	     Day 1 = 12
	     Day 2 = 14
	     Day 3 = 9
	     Day 4 = 14
	     Day 5 = 10
	
	If this information comes from the WebServiceHigh log, a number that is greater
	than this can be considered above the maximum norm.
	
	You can follow the same steps for the WebServiceLow log to determine the minimum
	average over a four-hour period. This produces data such as:
	
	Baseline Averages: WebService\AnonymousUsers\Sec
	
	  Minimum = 11.8
	
	REFERENCES
	==========
	
	For additional information about how to gather individual baseline information,
	click the article numbers below to view the articles in the Microsoft Knowledge
	Base:
	
	  Q323314 HOW TO: Create an IIS Baseline by Using the Memory Object
	
	  Q323315 HOW TO: Create an IIS Baseline by Using the Processor Object
	
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
	
