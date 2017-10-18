---
layout: page
title: "Q327359: FIX: Event 25 Logged If Printer Configured for Upper Paper Tray"
permalink: kb/327/Q327359/
---

## Q327359: FIX: Event 25 Logged If Printer Configured for Upper Paper Tray

	Article: Q327359
	Product(s): Microsoft SNA Server
	Version(s): 
	Operating System(s): 
	Keyword(s): kbhis2000 kbhis2000bug
	Last Modified: 12-AUG-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Host Integration Server 2000 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	An Event 25 error occurs when a 3270 print session or a 5250 print session is
	configured to use a printer that has DMBIN_UPPER specified as a paper source in
	the printer's DEVMODE structure.
	
	This problem occurs only if the 3270 print session or the 5250 print session is
	configured to use a Printer Definition Table (PDT) file and the "Printer
	Language is Hewlett-Packard (HP) PCL" option is selected.
	
	The following is an example of a typical Event 25 error message as it appears in
	the log:
	
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
	
	CAUSE
	=====
	
	The Host Integration Server 2000 print server is designed to recognize specific
	paper sources so that it can send HP Printer Control Language (PCL) control
	codes to the printer if the print session is using a PDT and the Printer
	Language is Hewlett-Packard (HP) PCL option is selected.
	
	However, print server does not correctly recognize a paper source of DMBIN_UPPER
	when this source is specified in the dwDefaultSource parameter in the printer's
	DEVMODE structure. The Event 25 error occurs because the paper source is not
	recognized.
	
	RESOLUTION
	==========
	
	A supported fix is now available from Microsoft, but it is only intended to
	correct the problem that is described in this article. Apply it only to
	computers that are experiencing this specific problem. This fix may receive
	additional testing. Therefore, if you are not severely affected by this problem,
	Microsoft recommends that you wait for the next Microsoft Host Integration
	Server 2000 service pack that contains this fix.
	
	To resolve this problem immediately, contact Microsoft Product Support Services
	to obtain the fix. For a complete list of Microsoft Product Support Services
	phone numbers and information about support costs, visit the following Microsoft
	Web site:
	
	  http://support.microsoft.com/default.aspx?scid=fh;EN-US;CNTACTMS
	
	NOTE: In special cases, charges that are ordinarily incurred for support calls
	may be canceled if a Microsoft Support Professional determines that a specific
	update will resolve your problem. The typical support costs will apply to
	additional support questions and issues that do not qualify for the specific
	update in question.
	
	The English version of this fix has the file attributes (or later) that are
	listed in the following table. The dates and times for these files are listed in
	coordinated universal time (UTC). When you view the file information, it is
	converted to local time. To find the difference between UTC and local time, use
	the Time Zone tab in the Date and Time tool in Control Panel.
	
	  Date          Time    Version     Size      File name
	  -------------------------------------------------------
	  09-Aug-2002   12:25   5.0.0.900   274,704   Winvprt.dll
	
	NOTE: Because of file dependencies, the most recent fix that contains the above
	files may also contain additional files.
	
	
	
	
	STATUS
	======
	
	Microsoft has confirmed that this is a problem in Microsoft Host Integration
	Server 2000.
	
	MORE INFORMATION
	================
	
	The DEVMODE structure contains information about the device initialization and
	environment of a printer. The print driver that is installed for the printer is
	responsible for returning the DEVMODE structure, which includes the
	dwDefaultSource value.
	
	The dmDefaultSource parameter specifies the default paper source that the printer
	uses. This parameter is an integer value as defined in wingdi.h. The print
	driver must return a value that matches one of the values listed in the
	following table:
	
	    +---------------------+----------------+
	    | Paper Source        | Value          |
	    +---------------------+----------------+
	    | DMBIN_UPPER         | 1              | 
	    +---------------------+----------------+
	    | DMBIN_ONLYONE       | 1              |
	    +---------------------+----------------+
	    | DMBIN_LOWER         | 2              |
	    +---------------------+----------------+
	    | DMBIN_MIDDLE        | 3              |
	    +---------------------+----------------+
	    | DMBIN_MANUAL        | 4              |
	    +---------------------+----------------+
	    | DMBIN_ENVELOPE      | 5              |
	    +---------------------+----------------+
	    | DMBIN_ENVMANUAL     | 6              |
	    +---------------------+----------------+
	    | DMBIN_AUTO          | 7              |
	    +---------------------+----------------+
	    | DMBIN_TRACTOR       | 8              |
	    +---------------------+----------------+
	    | DMBIN_SMALLFMT      | 9              |
	    +---------------------+----------------+
	    | DMBIN_LARGEFMT      | 10             |
	    +---------------------+----------------+
	    | DMBIN_LARGECAPACITY | 11             |
	    +---------------------+----------------+
	    | DMBIN_CASSETTE      | 14             |
	    +---------------------+----------------+
	    | DMBIN_FORMSOURCE    | 15             |
	    +---------------------+----------------+
	    | DMBIN_USER          | 256 and higher |
	    +---------------------+----------------+
	
	For example, the available paper sources for a specific printer and its installed
	driver may include Tray 1 as a valid paper source. Because Tray 1 is not listed
	as a defined paper source, the print driver must return one of the defined
	values or a user-defined value. It is not always clear what value a print driver
	may return for a particular paper source.
	
	The Host Integration Server 2000 print server recognizes the following paper
	sources after you apply the update:
	
	- DMBIN_UPPER
	- DMBIN_LOWER
	- DMBIN_MIDDLE
	- DMBIN_MANUAL
	- DMBIN_ENVELOPE
	- DMBIN_FORMSOURCE
	
	
	REFERENCES
	----------
	
	For additional information about print server related Event 25 error messages,
	click the article numbers below to view the articles in the Microsoft Knowledge
	Base:
	
	  Q325925 FIX: Event 25 Error Message Is Logged When You Create a Print Session
	  by Using Snacfg.exe
	
	  Q327356 FIX: Event 25 Error Messages Are Logged for Each Print Job in a Print
	  Session
	
	
	Additional query words:
	
	======================================================================
	Keywords          : kbhis2000 kbhis2000bug 
	Technology        : kbAudDeveloper kbHostIntegServ2000
	Version           : :
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	
