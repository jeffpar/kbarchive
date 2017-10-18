---
layout: page
title: "Q205100: Event IDs 4318 and 4224: WINS Database Missing or Corrupt"
permalink: kb/205/Q205100/
---

## Q205100: Event IDs 4318 and 4224: WINS Database Missing or Corrupt

	Article: Q205100
	Product(s): Microsoft Windows NT
	Version(s): 4.0
	Operating System(s): 
	Keyword(s): kbnetwork kbsetup
	Last Modified: 10-AUG-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Server version 4.0 
	- Microsoft Windows NT Server, Enterprise Edition version 4.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you restart your Windows NT server that is running Windows Internet Name
	Service (WINS), the following error message may be displayed:
	
	  WINS could not come up due to missing/corrupt database. Restore the database
	  using WINS Manager or winscl.exe (in the res kit) and then restart WINS. If
	  WINS still does not come up, start with a fresh copy of the database. To do
	  this:
	
	  1) delete all the files in the %%SystemRoot%%\system32\wins directory.
	
	  Note: if wins database file (typically named wins.mdb) is not in the above
	  directory, check the registry for the full filepath.
	  Delete the .mdb file.
	  Note: if jet*.log are not in the above directory, check the registry for the
	  directory path. Delete all log files.
	
	  2) net start wins
	
	  Please click on OK to terminate WINS.
	
	Events have been registered in the Event viewer. To view these errors:
	
	1. Click Start, point to Programs, and click on Administrative Tools (Common),
	  and then click on Event Viewer. This procedure opens the System Log, where
	  WINS errors may be logged.
	
	2. Look under the Source column for "Wins" and search for the following Event ID
	  numbers:
	
	  EVENT ID 4318
	  Source: WINS
	
	  The Description area contains the same error message listed above.
	
	  This also generates the following Event in the System log.
	
	  Event ID 4224
	  Source: WINS
	  WINS encountered a JET error. This may or may not be a serious error. WINS
	  will try to recover from it. If you continue to see a large number of these
	  errors consistently over time (a span of few hours), you may want to restore
	  the database from a backup. The error number is in the second DWORD of the
	  data section below.
	
	  -other related Events-
	
	  Event ID 7022
	  Source: Service Control Manager
	  The Windows Internet Name Service hung on starting.
	
	  Event ID 7023
	  Source: Service Control Manager
	  The Windows Internet Name Service terminated with the following error:
	
	  Application Events generated in the Event Viewer Application log.
	
	  Event ID 37
	  Source: JET
	  Unable to read header of database C:\Winnt\System32\Wins\Wins.mdb. Error -
	  1811.
	
	Also, when you attempt to start the WINS service manually, the following error
	message may be displayed:
	
	  Could not start the Windows Internet Name Service on \\computer_name;.Error
	  0001:Incorrect function.
	
	NOTE: If WINS fails to recreate, check to make sure that the root drive is not
	full.
	
	CAUSE
	=====
	
	This behavior occurs because the WINS database is corrupt or could not be found
	in the %SystemRoot%\System32\Wins directory.
	
	The error messages indicate that the WINS database is not running because of a
	corrupt, missing, or renamed Wins.mdb file.
	
	RESOLUTION
	==========
	
	To resolve this problem, replace the WINS database. This can be achieved in two
	ways.
	
	The first method is to restore the WINS database from a backup using WINS
	Manager. WINS Manager has the capability to create WINS backups and restore WINS
	backups. To do this:
	
	1. Click Start, point to Programs, then point to Administrative Tools(Common).
	
	2. Click on WINS Manager.
	
	3. On the Mappings menu, click Restore Local Database, which is the only command
	  listed. Restore Local Database is only accessible when the WINS database is
	  unavailable.
	
	4. A dialog box is displayed and prompts you for the path to the folder
	  Wins_bak. If you have performed a WINS Backup Database procedure previously,
	  locate the folder and set the path so that the WINS Manager is one level
	  above the wins_bak folder.
	
	  For example, if the wins_bak is at E:\Wins_bak then put the directory to E:\
	  and click OK. WINS Manager locates the WINS.mdb file and restores it. You can
	  then restart the WINS Service as described above.
	
	The second method is to recreate the WINS database. To recreate the WINS
	database, all the files in the %SystemRoot%\System32\Wins directory need to be
	moved or archived to a new location.
	To replace the WINS database files:
	
	1. Click Stop Replication Partners in WINS Manager.
	
	2. Stopping the WINS service is unnecessary, because it did not start when the
	  errors listed above occurred.
	
	3. Archive or delete the files in the %SystemRoot%\System32\Wins folder but do
	  not delete the folder. (If you do delete the folder, simply recreate a Wins
	  folder in this location. The folder is automatically created only when WINS
	  is installed.)
	
	4. Restart the WINS server. Windows NT automatically recreates the files and
	  registers the services that the WINS server uses.
	
	5. WINS clients in the environment then need to be restarted in order to
	  register their services with the WINS database.
	
	  If restarting the clients is not possible, you may still reregister the
	  services in WINS.
	
	  For more information, please see the following article in the Microsoft
	  Knoweledge Base: For additional information, please see the following
	  article(s) in the Microsoft Knowledge Base:
	
	  Q137423 How to Reregister Services in WINS
	
	MORE INFORMATION
	================
	
	For more information, please see the following articles in the Microsoft
	Knowledge Base:
	
	  Q185786 Recommended Practices for WINS
	
	  Q150737 Setting Primary and Secondary WINS Server Options
	
	  Q177140 How to Remove Static WINS Entries from All WINS Servers
	
	
	Additional query words:
	
	======================================================================
	Keywords          : kbnetwork kbsetup 
	Technology        : kbWinNTsearch kbWinNT400search kbWinNTSsearch kbWinNTSEntSearch kbWinNTSEnt400 kbWinNTS400search kbWinNTS400
	Version           : :4.0
	Issue type        : kbprb
	
	=============================================================================
	
