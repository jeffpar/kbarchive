---
layout: page
title: "Q191953: HOWTO: Use Coverage Profiler to Optimize App Performance"
permalink: /kb/191/Q191953/
---

## Q191953: HOWTO: Use Coverage Profiler to Optimize App Performance

	Article: Q191953
	Product(s): Microsoft FoxPro
	Version(s): WINDOWS:6.0
	Operating System(s): 
	Keyword(s): 
	Last Modified: 11-AUG-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual FoxPro for Windows, version 6.0 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	A coverage application writes information about which lines of code were run in
	a file. A profiler application provides information about which lines actually
	run, how many times a line is run, duration, and more. Coverage and profiler
	enable a developer to identify problem areas in an application, especially
	skipped code and performance bottlenecks. Using this tool you are able to
	identify parts of your code that have not been executed during your testing.
	
	MORE INFORMATION
	================
	
	There are many different ways to test your code. One of the ways is to make sure
	that every line of code has been run at least once or more during your normal
	testing pass.
	
	To start the Coverage Profiler, you need to create a Log file by issuing the
	following command:
	
	  SET COVERAGE TO C:\MYLOGFILE.LOG 
	
	(may have any random file name)
	
	By issuing this command you create the LOG file and turn on the Coverage
	Profiler. Since the Coverage Profiler has been started, you can run your program
	or application and everything is recorded into your Log file.
	
	NOTE: These log files can grow quickly to be very large in size so you may wish
	to test sub sets of your code at any one time to conserve hard disk space.
	
	Once you have completed running your application or program, you can run the
	Coverage Profiler from the Tools menu in Visual FoxPro 6.0.
	
	Once the Coverage Profiler is completed analyzing the Log file it will put the
	Coverage Profiler dialog into one of two modes; the Coverage Mode or the Profile
	Mode. The mode can be changed easily by selection of a button on the Coverage
	Profiler toolbar.
	
	The Coverage Mode allows you to view each line of code and determine whether or
	not that line of code was run at any time during your testing.
	
	The Profile Mode shows you each line of code and how many times it was hit along
	with how long it took to run the first time and on average.
	
	Before you start looking at the code log file line by line, you might like to get
	a quick overview of how well your code executes. Click the toolbar button
	labeled Statistics. This gives you a quick overview of how many lines of code
	were executed verses how many were not. If you did not get 100% Covered
	Linecount, then you probably did not execute all possible scenarios of your code
	in your test run.
	
	The Options toolbar button presents you with a dialog box that allows you to
	alter and store certain preferences for use by the Coverage Profiler. Click the
	Options toolbar button to open up the Options dialog box. In addition to your
	choice of Display Font, Start Mode, and Environment frame, you can also change
	the Coverage mark from its defaults to something that you prefer, like $$$ for
	the Executed lines or ### for the Not Executed lines. Select the Set as Default
	check box if you wish to preserve your changes. When you close the Options
	dialog box you will be asked to preserve current marked records or Empty and
	re-mark these records. You should then choose No, to Empty and re-mark the
	records. You will see these coverage marks in the Coverage Mode to the left of
	each line of code. You can now go through your code line by line and identify
	each line of code that did not get executed by your test run. This helps you to
	identify parts of your code that still need to be executed the next time you run
	through your test.
	
	To identify bottlenecks or lines of code that are potential performance problems,
	use the Profile Mode. You can scan down through your code looking for lines that
	have large numbers of hits or a long average execute time. To improve
	performance, check to see if you can find a faster way of performing the same
	task that is done by that line of code.
	
	There are many other third party tools that can help you test your Visual FoxPro
	code, but Microsoft has provided the Coverage Profiler as a way of getting
	started down the testing path.
	
	REFERENCES
	==========
	
	Visual FoxPro 6.0 Help, search on: "Coverage Profiler Application"
	
	Additional query words: PGFest600 kbXBase kbMiscTools kbVFp600
	
	======================================================================
	Keywords          :  
	Technology        : kbVFPsearch kbAudDeveloper kbVFP600
	Version           : WINDOWS:6.0
	Issue type        : kbhowto
	
	=============================================================================
	
