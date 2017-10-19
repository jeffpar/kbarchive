---
layout: page
title: "Q167405: INFO: Visual FoxPro ODBC Driver Connect String Attributes"
permalink: /kb/167/Q167405/
---

## Q167405: INFO: Visual FoxPro ODBC Driver Connect String Attributes

	Article: Q167405
	Product(s): Microsoft FoxPro
	Version(s): 5.0,6.0
	Operating System(s): 
	Keyword(s): kbinterop kbAutomation kbvfp500 kbvfp600
	Last Modified: 01-NOV-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual FoxPro for Windows, versions 5.0, 6.0 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	Many ODBC client applications enable the user to establish an ODBC connection
	without setting up an ODBC data source. The exact implementation of this varies
	from client to client, but it typically involves using an ODBC driver connect
	string.
	
	The ODBC connect string that is used to establish the connection is specific to a
	given ODBC driver. The connect string generally contains the ODBC driver name
	and a number of driver-specific attributes.
	
	MORE INFORMATION
	================
	
	The following table lists all of the Visual FoxPro ODBC driver connect string
	attributes:
	
	  Attribute                 Value
	  ---------                 -----
	  BackgroundFetch           "Yes" or "No"
	
	  Collate                   Any supported collating sequence
	
	  Description               Description text
	
	  Exclusive                 "Yes" or "No"
	
	  SourceDB                  A fully qualified path to a directory
	                            containing zero or more free tables, or the
	                            absolute path and file name for a database.
	
	  SourceType                "DBC" or "DBF"
	
	REFERENCES
	==========
	
	The Help file for the Visual FoxPro ODBC driver, Drvvfp.hlp, offers more
	information on the driver. To access this Help file, activate the ODBC Control
	Panel, highlight the Microsoft Visual FoxPro Driver, press the Setup button and
	click the Help button.
	
	Additional query words:
	
	======================================================================
	Keywords          : kbinterop kbAutomation kbvfp500 kbvfp600 
	Technology        : kbVFPsearch kbAudDeveloper kbVFP500 kbVFP600
	Version           : :5.0,6.0
	Issue type        : kbinfo
	
	=============================================================================
	
