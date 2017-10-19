---
layout: page
title: "Q151825: Gateway Error When Run CGI Application Connecting to Database"
permalink: /kb/151/Q151825/
---

## Q151825: Gateway Error When Run CGI Application Connecting to Database

	Article: Q151825
	Product(s): Internet Information Server
	Version(s): winnt:1.0,2.0,3.0,4.0
	Operating System(s): 
	Keyword(s): kbenv
	Last Modified: 06-FEB-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Internet Information Server versions 1.0, 2.0, 3.0, 4.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you use a CGI application that accesses a SQL Server or other database,
	Internet Information Server (IIS) may return the following error:
	
	  502 Gateway error
	
	However, IIS can also return no information, and the Web browser will appear to
	stop responding.
	
	CAUSE
	=====
	
	When you access a data source with IIS, a System DSN must be used. This applies
	for CGI applications and Internet Database Connector(IDC) files.
	
	RESOLUTION
	==========
	
	To set up a System DSN:
	-----------------------
	
	1. In Control Panel, click the ODBC icon.
	
	2. In the Data Sources dialog box, click the System DSN button. NOTE: This step
	  is important because IIS only works with System DSN.
	
	3. In the System DSN dialog box, click the Add button to display the Add Data
	  Source dialog box.
	
	4. In the Add Data Source dialog box, select the driver for the data source you
	  are connecting to, and click OK.
	
	5. Enter the data source name and the location of the database as needed
	  (depending on which type of database you plan to access).
	
	6. Click OK. NOTE: The System Data Sources dialog box is
	  displayed and displays the name of the data source you created. Click Close.
	
	7. The Data Sources dialog box is displayed. Click Close.
	
	Additional query words: visual c access sql odbc oracle internet explorer netscape HTTP
	
	======================================================================
	Keywords          : kbenv 
	Technology        : kbiisSearch kbiis400 kbiis300 kbiis200 kbiis100
	Version           : winnt:1.0,2.0,3.0,4.0
	
	=============================================================================
	
