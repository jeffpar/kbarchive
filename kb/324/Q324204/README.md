---
layout: page
title: "Q324204: SMS: Collections That Are Based on Complex Queries Do Not Update"
permalink: kb/324/Q324204/
---

## Q324204: SMS: Collections That Are Based on Complex Queries Do Not Update

	Article: Q324204
	Product(s): Microsoft Systems Management Server
	Version(s): 2.0 SP3,2.0 SP4
	Operating System(s): 
	Keyword(s): kbenv kbtool kbsms200 kbsms200bug kbCollections kbsms200preSP4fix
	Last Modified: 15-AUG-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Systems Management Server versions 2.0 SP3, 2.0 SP4 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	The Systems Management Server (SMS) Collection Evaluator component
	(SMS_COLLECTION_EVALUATOR) may time out when it tries to refresh a collection
	that is based on one or more SMS queries. If you experience this problem, the
	following entries or entries that are similar to these entries may appear in the
	Colleval.log file:
	
	  **********~Processing file A01001F3.UDC
	  Update flags for collection: 0xF, ChangeCount=1
	  Waiting to recover from SQL Error...
	  Waiting to recover from SQL Error...
	  Waiting to recover from SQL Error...
	  Waiting to recover from SQL Error...
	  Waiting to recover from SQL Error...
	  Waiting to recover from SQL Error...
	  Waiting to recover from SQL Error...
	  Waiting to recover from SQL Error...
	  Waiting to recover from SQL Error...
	  Waiting to recover from SQL Error...
	  Waiting to recover from SQL Error...
	  Waiting to recover from SQL Error...
	  Waiting to recover from SQL Error...
	  Waiting to recover from SQL Error...
	  Waiting to recover from SQL Error...
	  Waiting to recover from SQL Error...
	  Waiting to recover from SQL Error...
	  Waiting to recover from SQL Error...
	  CCollectionSource_SQL::RefreshResults - query timed out. Cmd = insert 
	  into Temp1__RES_COLL_A01001F3 
	  (MachineID,ArchitectureKey,Name,SMSID,Domain ,IsClient) select  all...
	  (remainder of query removed) 
	  CStatusReporter::Report() ERROR: Caller passed NULL for pSM.
	  Could not refresh results for collection A01001F3.
	
	CAUSE
	=====
	
	The hotfix for the following Microsoft Knowledge Base article changed the
	Collection Evaluator timeout from 18 hours to 18 minutes:
	
	  Q317337 SMS: Executive Services that Interact with SQL Appear to Hang
	
	Collections that are based on complex queries or queries that connect to
	extremely large tables may take over 18 minutes to finish. When this occurs, the
	collection refresh does not work, and you receive the symptoms that are listed
	in the "Symptoms" section of this article.
	
	RESOLUTION
	==========
	
	A supported fix is now available from Microsoft, but it is only intended to
	correct the problem that is described in this article. Apply it only to
	computers that are experiencing this specific problem. This fix may receive
	additional testing. Therefore, if you are not severely affected by this problem,
	Microsoft recommends that you wait for the next Systems Management Server
	service pack that contains this fix.
	
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
	
	The English-language version of this fix for SMS 2.0 Service Pack 3 (SP3) sites
	should have the following file attributes or later:
	
	  Date         Time   Version         Size       File name     Platform
	  ---------------------------------------------------------------------
	  01-Mar-2001  21:45  2.0.1493.3269   2,436,880  Basesvr.dll   Alpha 
	  01-Mar-2001  21:00  2.0.1493.3260     811,792  Baseutil.dll  Alpha 
	  01-Mar-2001  10:30  2.0.1493.3143     126,224  Cmprov.dll    Alpha 
	  01-Mar-2001  19:50  2.0.1493.3246     145,680  Colleval.dll  Alpha 
	  01-Mar-2001  13:30  2.0.1493.3182     171,792  Compmgr.exe   Alpha 
	  01-Mar-2001  21:40  2.0.1493.3268      76,048  Replmgr.dll   Alpha 
	  01-Mar-2001  19:40  2.0.1493.3244  11,803,408  Smsprov.dll   Alpha 
	  10-May-2002  23:51                      1,193  Update.sql    
	  01-Mar-2001  21:45  2.0.1493.3269   1,583,008  Basesvr.dll   INTEL
	  01-Mar-2001  21:00  2.0.1493.3260     527,808  Baseutil.dll  INTEL
	  01-Mar-2001  10:30  2.0.1493.3143      81,040  Cmprov.dll    INTEL
	  01-Mar-2001  19:50  2.0.1493.3246      91,024  Colleval.dll  INTEL
	  01-Mar-2001  13:30  2.0.1493.3182     121,440  Compmgr.exe   INTEL
	  01-Mar-2001  21:40  2.0.1493.3268      46,944  Replmgr.dll   INTEL
	  01-Mar-2001  19:40  2.0.1493.3244   4,205,008  Smsprov.dll   INTEL
	
	NOTE: Because of file dependencies, the most recent hotfix or feature that
	contains the above files may also contain additional files.
	
	
	
	After you apply the fix from Q324204, the Collection Evaluator timeout is set to
	6 hours. If you have installed any of the following hotfixes and have
	collections that take longer than 18 minutes to update, you may want to install
	the hotfix that is documented in this article. Besides increasing the timeout,
	Q324204 also fixes all the issues that are documented in the following articles
	in the Microsoft Knowledge Base:
	
	  Q316258 Problems Connecting to SMS Provider Without Impersonation
	
	  Q317337 SMS: Executive Services that Interact with SQL Appear to Hang
	
	  Q303397 Cannot View Subcollections on Child Sites
	
	  Q320692 SMS: Transaction History Files Increase in Size
	
	  Q245579 SMS: Secondary Site Does Not Decompress Package
	
	  Q319189 SMS: Distribution Manager Continuously Processes .pkg Files
	
	  Q323614 SMS: Increasing Number Of Zero-Byte Files in the Replmgr.box/Incoming
	  Folder
	
	NOTE: The individual hotfixes for these Microsoft Knowledge Base articles are no
	longer available from Microsoft because they are all superceeded by the hotfix
	for Q324204.
	
	
	The hotfix that is described in this article is included in the Hotfix Rollup
	Package (HRP) for customers who have installed SMS 2.0 Service Pack 4 (SP4).
	
	Note that the timeout problem that is described in Microsoft Knowledge Base
	article Q324204 is fixed in the HRP. The fixes for Q316258, Q317337, Q303397,
	and Q320692 are also included in the HRP. However, the fixes for Q245579,
	Q319189, and Q323614 are not included in the HRP.
	
	WORKAROUND
	==========
	
	Do not create collections that are based on queries that take more than 18
	minutes to finish.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in Systems Management Server
	version 2.0.
	
	MORE INFORMATION
	================
	
	To install the hotfix, use the appropriate method.
	
	Use the Hotfix Installer
	------------------------
	
	NOTE: This method is only for Intel-based computers.
	
	1. Create a folder to a location that is accessible to your SMS site servers.
	
	2. Copy the update file (Q324204.exe) and platform folders to the new folder.
	  The folder structure must be arranged so that the update file is located one
	  folder "above" the platform folders.
	
	3. From each of the primary and secondary SMS site servers in your environment,
	  log on to your site server by using an account with administrator
	  permissions.
	
	4. Quit the SMS Administrator console, if it is running.
	
	5. Run Q324204.exe, and then follow the instructions in the wizard.
	
	Manual Installation
	-------------------
	
	Manually Update the SMS Site Server:
	
	1. Create a folder to a location that is accessible to your SMS site servers.
	
	2. Copy the platform folders that contain the hotfixed files to the new folder.
	
	3. From each of your primary SMS site servers in your environment, log on to
	  your site server by using an account with administrative privileges.
	
	4. Quit the SMS administrator console.
	
	5. Stop all SMS services.
	
	6. Make a backup copy of the following files:
	
	   - <SMS_Root>\bin\<processor type>\Cmprov.dll
	
	   - <SMS_Root>\bin\<processor type>\Compmgr.exe
	
	   - <SMS_Root>\bin\<processor type>\Basesvr.dll
	
	   - <SMS_Root>\bin\<processor type>\Baseutil.dll
	
	   - <SMS_Root>\bin\<processor type>\Colleval.dll
	
	   - <SMS_Root>\bin\<processor type>\Replmgr.dll
	
	   - <SMS_Root>\bin\<processor type>\Smsprov.dll
	
	7. Copy the updated files from the disk or network share to the SMS installation
	  folder:
	
	   - <SMS_Root>\bin\<processor type>\Cmprov.dll
	
	   - <SMS_Root>\bin\<processor type>\Compmgr.exe
	
	   - <SMS_Root>\bin\<processor type>\Basesvr.dll
	
	   - <SMS_Root>\bin\<processor type>\Baseutil.dll
	
	   - <SMS_Root>\bin\<processor type>\Colleval.dll
	
	   - <SMS_Root>\bin\<processor type>\Replmgr.dll
	
	   - <SMS_Root>\bin\<processor type>\Smsprov.dll
	
	NOTE: This hotfix also contains a SQL script to update the SMS database. If the
	SMS site server and the SQL server are running on separate computers, you must
	run the script on the remote SQL server computer.
	
	8. Load the Update.sql script by using a SQL server query tool, such as Query
	  Analyzer or ISQL/W.
	
	9. In the SQL server query tool, click the SMS database, and then run the
	  script.
	
	10. Restart the SMS services.
	
	Additional Installation Information
	-----------------------------------
	
	To update remote site computers such as SMS administrator consoles, an SMS SQL
	monitor, or an SMS provider that is not located on the site server, use the
	appropriate method.
	
	Manually Updating a Remote SMS Administrator Console:
	
	NOTE: Before you implement this update on your SMS administrator console, you
	must install it on the SMS site servers in your environment.
	
	1. From the updated SMS site server, copy the following SMS administrator
	  console files to a disk or network share:
	
	   - <SMS_Root>\bin\<processor type>\Cmprov.dll
	
	   - <SMS_Root>\bin\<processor type>\Compmgr.exe
	
	   - <SMS_Root>\bin\<processor type>\Basesvr.dll
	
	   - <SMS_Root>\bin\<processor type>\Baseutil.dll
	
	   - <SMS_Root>\bin\<processor type>\Smsprov.dll
	
	2. Make a backup copy of the following files:
	
	   - <SMS_Admin_Root>\bin\<processor type>\Cmprov.dll
	
	   - <SMS_Admin_Root>\bin\<processor type>\Compmgr.exe
	
	   - <SMS_Admin_Root>\bin\<processor type>\Basesvr.dll
	
	   - <SMS_Admin_Root>\bin\<processor type>\Baseutil.dll
	
	   - <SMS_Admin_Root>\bin\<processor type>\Smsprov.dll
	
	3. Copy the updated files from the disk or network share to the SMS
	  administrator console folder:
	
	   - <SMS_Admin_Root>\bin\<processor type>\Cmprov.dll
	
	   - <SMS_Admin_Root>\bin\<processor type>\Compmgr.exe
	
	   - <SMS_Admin_Root>\bin\<processor type>\Basesvr.dll
	
	   - <SMS_Admin_Root>\bin\<processor type>\Baseutil.dll
	
	   - <SMS_Admin_Root>\bin\<processor type>\Smsprov.dll
	
	Updating a Remote SMS Provider Server:
	
	NOTE: Before you implement this update on your SMS provider server, you must
	install it on the SMS site servers in your environment.
	
	1. From the updated SMS site server, copy the following SMS provider files to a
	  disk or network share:
	
	   - <SMS_Root>\bin\<processor type>\Basesvr.dll
	
	   - <SMS_Root>\bin\<processor type>\Baseutil.dll
	
	   - <SMS_Root>\bin\<processor type>\Smsprov.dll
	
	2. At the SMS Provider server, stop the following services:
	
	   - SMS_SQL_MONITOR_<SERVERNAME>
	
	   - Windows Management
	
	     NOTE: With WMI build 1085, the service name has been changed to "Windows
	     Management Instrumentation".
	
	3. Make a backup copy of the files you are about to overwrite:
	
	   - <SMS_Root>\bin\<processor type>\Basesvr.dll
	
	   - <SMS_Root>\bin\<processor type>\Baseutil.dll
	
	   - <SMS_Root>\bin\<processor type>\Smsprov.dll
	
	4. Copy the updated files from the disk or network share to the SMS provider
	  folder:
	
	   - <SMS_Root>\bin\<processor type>\Basesvr.dll
	
	   - <SMS_Root>\bin\<processor type>\Baseutil.dll
	
	   - <SMS_Root>\bin\<processor type>\Smsprov.dll
	
	5. Restart the following SMS Provider services:
	
	   - SMS_SQL_MONITOR_<SERVERNAME>
	
	   - Windows Management
	
	     NOTE: With WMI build 1085, the service name has been changed to "Windows
	     Management Instrumentation".
	
	Manually Updating a Remote SMS SQL Monitor Server:
	
	NOTE: Before you implement this update on your SMS site database server, you must
	install it on the SMS site servers in your environment.
	
	1. From the updated SMS site server, copy the following SMS SQL monitor files to
	  a disk or network share:
	
	   - <SMS_Root>\bin\<processor type>\Basesvr.dll
	
	   - <SMS_Root>\bin\<processor type>\Baseutil.dll
	
	   - <SMS_Root>\bin\<processor type>\Smsprov.dll
	
	2. At the SMS SQL Monitor server, stop the SMS_SQL_MONITOR_<SERVERNAME>
	  service.
	
	3. Make a backup copy of the SMS SQL monitor files you are about to overwrite:
	
	   - <SMS_Root>\bin\<processor type>\Basesvr.dll
	
	   - <SMS_Root>\bin\<processor type>\Baseutil.dll
	
	   - <SMS_Root>\bin\<processor type>\Smsprov.dll
	
	4. Copy the updated files from the disk or network share to the SMS SQL monitor
	  folder:
	
	   - <SMS_Root>\bin\<processor type>\Basesvr.dll
	
	   - <SMS_Root>\bin\<processor type>\Baseutil.dll
	
	   - <SMS_Root>\bin\<processor type>\Smsprov.dll
	
	5. Restart the SMS_SQL_MONITOR_<SERVERNAME> SMS SQL monitor service.
	
	Additional query words: prodsms
	
	======================================================================
	Keywords          : kbenv kbtool kbsms200 kbsms200bug kbCollections kbsms200preSP4fix 
	Technology        : kbSMSSearch kbSMS200SP3 kbSMS200SP4
	Version           : :2.0 SP3,2.0 SP4
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	
