---
layout: page
title: "Q327356: FIX: Event 25 Error Messages Are Logged for Each Print Job"
permalink: /kb/327/Q327356/
---

## Q327356: FIX: Event 25 Error Messages Are Logged for Each Print Job

	Article: Q327356
	Product(s): Microsoft SNA Server
	Version(s): 
	Operating System(s): 
	Keyword(s): kberrmsg kbhis2000 kbhis2000bug
	Last Modified: 12-AUG-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Host Integration Server 2000 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	When you configure 3270 print sessions and 5250 print sessions to use a Printer
	Definition Table (PDT) file, you may receive Event 25 error messages similar to
	the following in the Application Event Log for each print job that the print
	session processes:
	
	  Event ID: 25
	  Source: SNA Virtual Print Driver
	  Description: If your print output is correct, this warning can be ignored.
	
	  If your session has "Printer Language is Hewlett-Packard (HP) PCL" selected,
	  then the SNA Virtual Print Driver has not recognised your PaperSize (1) or
	  Orientation (1) setting. If your job output has incorrect PaperSize or
	  Orientation, use GDI printing or put the definitions in the START_JOB macro
	  in your PDT file.
	
	  If your session is not configured for HP PCL, the SNA Virtual Print Driver
	  cannot automatically apply PaperSize and Orientation Admin settings. If your
	  job output has incorrect PaperSize or Orientation, use GDI printing or put
	  the definitions in the START_JOB macro in your PDT file.
	
	  Print Session: <Print Session Name>.
	  Printer: <Printer Name>.
	
	This behavior can cause the Application Event Log to fill up on computers that
	print a large number of print jobs.
	
	MORE INFORMATION
	================
	
	A supported feature that modifies the product's default behavior is now
	available from Microsoft, but it is only intended to modify the behavior that is
	described in this article. Apply it only to systems that specifically need it.
	This feature may receive additional testing. Therefore, if your system is not
	severely affected by the lack of this feature, Microsoft recommends that you
	wait for the next Microsoft Host Integration Server 2000 service pack that
	contains this feature.
	
	To obtain this feature immediately, contact Microsoft Product Support Services.
	For a complete list of Microsoft Product Support Services phone numbers and
	information on support costs, visit the following Microsoft Web site:
	
	  http://support.microsoft.com/default.aspx?scid=fh;EN-US;CNTACTMS
	
	The English version of this fix has the file attributes (or later) that are
	listed in the following table. The dates and times for these files are listed in
	coordinated universal time (UTC). When you view the file information, it is
	converted to local time. To find the difference between UTC and local time, use
	the Time Zone tab in the Date and Time tool in Control Panel.
	
	  Date          Time    Version     Size      File name
	  --------------------------------------------------------
	  09-Aug-2002   12:25   5.0.0.900   274,704   Winvprt.dll
	  09-Aug-2002   12:25   5.0.0.900    90,384   Snaprint.exe
	
	NOTE: Because of file dependencies, the most recent fix that contains the above
	files may also contain additional files.
	
	
	
	
	The print service that is included with Host Integration Server 2000 was designed
	to log an Event 25 error message for each print job when the print service
	cannot recognize the paper size, orientation, or paper source that you specified
	in the printer's DEVMODE structure.
	
	Because most print jobs print correctly even when Event 25 error messages are
	logged, it was determined that a reduction in the frequency of Event 25 error
	messages would help to prevent unnecessary message logging.
	
	After you apply the update, the print server logs an Event 25 error message only
	when the print session is initially activated. The event is not logged for each
	print job that is processed by the print session.
	
	REFERENCES
	----------
	
	For additional information about print server related Event 25 error messages,
	click the article numbers below to view the articles in the Microsoft Knowledge
	Base:
	
	  Q325925 FIX: Event 25 Error Message Is Logged When You Create a Print Session
	  by Using Snacfg.exe
	
	  Q327359 FIX: Event 25 Error Message Is Logged When the Printer Is Configured
	  to Use the Upper Paper Tray
	
	
	Additional query words:
	
	======================================================================
	Keywords          : kberrmsg kbhis2000 kbhis2000bug 
	Technology        : kbAudDeveloper kbHostIntegServ2000
	Version           : :
	Issue type        : kbinfo
	Solution Type     : kbfix
	
	=============================================================================
	
