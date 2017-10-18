---
layout: page
title: "Q154650: DBWEB: NT Service Reports Error 1067 and Immediately Terminates"
permalink: kb/154/Q154650/
---

## Q154650: DBWEB: NT Service Reports Error 1067 and Immediately Terminates

	Article: Q154650
	Product(s): Microsoft Access Distribution Kit
	Version(s): WINDOWS:1.0
	Operating System(s): 
	Keyword(s): kberrmsg
	Last Modified: 24-JUL-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft dbWeb, version 1.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you try to start the dbWeb Service, you may receive the following error
	message:
	
	  Could not start dbWeb Service service on \\servername. Error 1067: The
	  process terminated unexpectedly.
	
	CAUSE
	=====
	
	Upon startup, the dbWeb service attempts to establish a connection with the
	dbWeb repository (a Microsoft Access database file called Dbweb.mdb located in
	the \Dbweb\Admin) folder. If this attempt fails, the service quits with an Error
	1067. The failure may be related to a misconfiguration with the ODBC system data
	source (System DSN) named "dbWebSchema." The service uses this data source to
	communicate with the repository. Ensure that "dbWebSchema" points to the proper
	file (Dbweb.mdb). The service will also terminate if Dbweb.mdb is corrupted.
	Repair the database file using Microsoft Access or the dbWeb Administrator
	(Utilities menu). Also, if the repository (Dbweb.mdb) is exclusively opened by
	another process, the same error message will occur.
	
	RESOLUTION
	==========
	
	The following steps list possible reasons why the dbWeb Service won't start and
	the steps needed to correct the problem. The steps are divided into the
	following sections:
	
	- Misconfiguration of ODBC System Data Source
	
	   - No dbWebSchema Data Source
	
	   - There is a dbWebSchema Data Source
	
	- Corrupted Dbweb.mdb
	
	- Dbweb.mdb Opened Exclusively
	
	You should first follow the steps in the "Misconfiguration of ODBC System Data
	Source" section, because it is the most common reason for the error. This
	section is divided into two subsections: the "No dbWebSchema Data Source"
	section, which details the steps of recreating the dbWebSchema data source; and
	the "There is a dbWebSchema Data Source" section, which makes sure the current
	dbWebSchema data source is set up properly. The "Corrupted Dbweb.mdb" and the
	"Dbweb.mdb Opened Exclusively" sections are other possible causes of the error.
	However, you should try these sections only after you have follow the steps in
	the "Misconfiguration of ODBC System Data Source" section.
	
	Misconfiguration of ODBC System Data Source
	-------------------------------------------
	
	1. Open Control Panel and double-click the 32-bit ODBC icon.
	
	2. In the Data Sources dialog box, click the System DSN button.
	
	3. In the System Data Sources dialog box, you should see a schema called
	  "dbWebSchema" (not case sensitive).
	
	  NO DBWEBSCHEMA DATA SOURCE
	
	4. If you do see a dbWebSchema data source, then skip to the steps under the
	  "There is a dbWebSchema Data Source" section. If you don't, then click the
	  Add button.
	
	5. In the Add Data Source dialog box, select the Microsoft Access Driver
	  (*.mdb), and then click OK.
	
	6. In the ODBC Microsoft Access Setup dialog box, type "dbWebSchema" in the line
	  next to the Data Source Name.
	
	7. Click the Select button under the Database section.
	
	8. In the Select Database dialog box, select the Dbweb.mdb database. The default
	  folder for the Dbweb.mdb is \dbWeb\Admin. Once you've chosen the Dbweb.mdb,
	  click OK.
	
	9. Once you're back in the ODBC Microsoft Access Setup dialog box, click OK.
	
	  THERE IS A DBWEBSCHEMA DATA SOURCE
	
	10. If the dbWebSchema data source is listed in the Data Sources dialog box,
	  select the data source, and click the Setup button.
	
	11. In the ODBC Microsoft Access Setup dialog box, verify that the path next to
	  the "Database:" in the Database section points to the Dbweb.mdb. If it
	  doesn't, then click the Select button. In the Select Database dialog box,
	  select the Dbweb.mdb database. The default folder for the Dbweb.mdb is
	  \dbWeb\Admin. Once you've chosen the Dbweb.mdb, click OK.
	
	12. If it is pointing to the Dbweb.mdb, then delete the data source and recreate
	  it. See the steps in the "No dbWebSchema Data Source" section for
	  information about recreating the data source.
	
	Corrupted DBWEB.MDB
	-------------------
	
	If the above steps don't solve the problem, the Dbweb.mdb may be corrupted. To
	repair the Dbweb.mdb, follow these steps:
	
	1. Open the dbWeb Administrator.
	
	2. In the dbWeb Administrator, on the File menu, click Close.
	
	3. On the Utilities menu, click Repair Database.
	
	4. In the Select Database to Repair dialog box, select Dbweb.mdb. The default
	  folder for the Dbweb.mdb is \dbWeb\Admin. Once you've chosen the Dbweb.mdb,
	  click OK.
	
	  In the status bar at the bottom of the dbWeb Administrator you should see
	  "Repairing:," and then the path to the Dbweb.mdb. Then it will say "Ready"
	  when it is finished.
	
	5. If the database has unrecoverable errors that the Repair utility couldn't
	  fix, then restore a copy of Dbweb.mdb from you backup copy.
	
	Dbweb.mdb Opened Exclusively
	----------------------------
	
	If the Dbweb.mdb is opened exclusively by another process (or user), the dbWeb
	Service data source can't make the initial connection, and you will receive an
	error message.
	
	Make sure that no other user has Dbweb.mdb open exclusively. Also, check for any
	other programs (such as Microsoft Access) that may have the Dbweb.mdb open
	exclusively.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in Microsoft dbWeb version 1.0.
	This problem no longer occurs in Microsoft dbWeb version 1.1.
	
	MORE INFORMATION
	================
	
	Steps to Reproduce Problem
	--------------------------
	
	1. Open Control Panel and double-click the 32bit ODBC icon.
	
	2. In the Data Sources dialog box, click the System DSN button.
	
	3. In the System Data Sources dialog box, select the dbWebSchema data source,
	  click the Delete button, and then click Close.
	
	4. In the Data Sources dialog box, click the Close button.
	
	5. In Control Panel, double-click the Services icon.
	
	6. In the Service dialog box, select the dbWeb Service, and then click the Start
	  button. Note that within a few seconds, you receive the error message
	  mentioned in the "Symptoms" section.
	
	REFERENCES
	==========
	
	For more information about setting up ODBC, search for "ODBC," and then
	"Installing and Configuring ODBC," using the Microsoft dbWeb Help Index.
	
	For more information about Starting the dbWeb Service, search for "dbWeb
	Service," and then "Installing and Starting the dbWeb Service," using the
	Microsoft dbWeb Help Index.
	
	Additional query words:
	
	======================================================================
	Keywords          : kberrmsg 
	Technology        : kbAudDeveloper kbdbWebSearch kbdbWeb100
	Version           : WINDOWS:1.0
	Hardware          : x86
	Issue type        : kbprb
	
	=============================================================================
	
