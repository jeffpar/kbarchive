---
layout: page
title: "Q235609: Recovering a WINS Database From Other Backup Sources"
permalink: /kb/235/Q235609/
---

## Q235609: Recovering a WINS Database From Other Backup Sources

{% raw %}

	Article: Q235609
	Product(s): Microsoft Windows NT
	Version(s): winnt:4.0
	Operating System(s): 
	Keyword(s): kbenv kbnetwork kbtool
	Last Modified: 10-AUG-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Server, Enterprise Edition version 4.0 
	- Microsoft Windows NT Server version 4.0 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	There may be times when using the Restore Local Database function within the
	Microsoft Windows Internet Name Service (WINS) Manager tool may not be
	sufficient to restore a WINS database. To recover the data, you may be required
	to restore files from other sources such as a tape backup. The purpose of this
	article is to document a set of procedures to accomplish this.
	
	MORE INFORMATION
	================
	
	Backing UP the WINS Database
	----------------------------
	
	The WINS database can be backed up locally or to a network drive. The default
	folder for the backup files is %SystemRoot%\System32\Wins\Backup. Inside the
	backup folder is a Wins_bak folder and inside that is a folder named New.
	Located in the New folder are three files required to restore from backup.
	
	The user can identify a backup path in WINS Manager by performing the following
	steps:
	
	1. Open WINS Manager.
	
	2. Double-click on the server entry in the WINS Servers List to ensure you are
	  working on that server.
	
	3. Click to select Server, and then click to select Configuration.
	
	4. In the WINS Server Configuration window, click Advanced to view the Advanced
	  WINS Server Configuration options.
	
	5. Click to select Logging Enabled or the WINS database cannot be backed up.
	
	6. Type the folder location of the WINS database backup files in the Database
	  Backup Path box. You may use the Browse button to visually select a path. If
	  no entry is made, the default location is used.
	
	7. Click to select Backup On Termination if you want WINS to backup the database
	  every time the WINS service is stopped.
	
	8. When these steps are completed, a manual backup of the database is required
	  for the first time or automatic backups cannot occur. To accomplish this, on
	  the Mappings menu, click Backup Database.
	
	9. Choose the folder where the backup files are to be stored (this should be the
	  location you identified in Step 6), and then click OK.
	
	Frequently, network administrators choose to also backup the same files in the
	WINS backup location to another media such as a tape drive. The J500000XX.log,
	Wins.mdb, and Wins.pat files are placed in the Wins_bak\New backup folder. If
	you wish to back up the WINS database to a tape, you need to ensure that these
	files are selected or just select the backup folder itself.
	
	Restoring a WINS Database from the Configured Backup Location
	-------------------------------------------------------------
	
	To restore the WINS database from the backup location configured using the
	procedures listed above, do the following:
	
	1. Stop the WINS service. At a command prompt, type "net stop wins" (without the
	  quotation marks), and then press Enter. You can also use the Control Panel
	  Services tool by click Windows Internet Name Service, and then click Stop.
	
	2. After the WINS Service is stopped, highlight the server in WINS Manager and,
	  from the Mappings menu, click Restore Local Database. Select the location
	  where the backup database is located. Using the Browse button, find the
	  correct location of the backup files, and then click OK.
	
	3. A successful backup is indicated by a pop-up message stating Restore
	  Successfully Completed.
	
	4. At this point, your database includes all entries that were in the backup
	  copy of the Wins.mdb file. This information is current as of the last time
	  the WINS database was either manually backed up using the Backup Database
	  function on the Mappings menu or automatically backed up by the WINS service
	  itself.
	
	  For additional information about WINS automatic backup, please see the
	  following article in the Microsoft Knowledge Base:
	
	  Q191846 WINS Automatic Backup Does Not Run Every Three Hours
	
	5. You can now jetpack the WINS database to ensure that you get a successful
	  compaction without errors.
	
	  NOTE: For additional information about on how to jetpack a WINS database,
	  please see the following articles in the Microsoft Knowledge Base:
	
	  Q145881 How to Use Jetpack.exe to Compact a WINS or DHCP Database
	
	  Q172570 Jetpack Error codes for Windows NT 4.0
	
	6. Restart the WINS service. At a command prompt, type net start wins, and then
	  press Enter. Or, using the Control Panel Services tool, click Windows
	  Internet Name Service, and then click Start.
	
	Restoring a WINS Database from Other Media
	------------------------------------------
	
	To restore a WINS database from another media like a tape backup, the
	J500000XX.log, Wins.mdb, and Wins.pat files must be copied to the folder that
	currently contains these same files that are the backup files from the last time
	WINS was backed up (either manually or automatically). The steps outlined here
	are to be followed to provide the best possible results. The primary assumption
	is that a decision to restore a WINS database from another media source has been
	made because the current WINS database is corrupt, a recovery from the primary
	backup database location was not successful (that is, that database may also be
	corrupt), or the required information is no longer in the current backup copy of
	the database but may be on the copy on the other media.
	
	1. Identify the location of the files listed above so they can be restored
	  accurately.
	
	2. If the current WINS database is no longer viable, you can recreate the
	  database from scratch. To do this:
	  1. At a command prompt, type "net stop wins" (without the quotation marks),
	     and then press Enter.
	
	  2. Delete all files in the %SystemRoot%\System32\Wins folder with the
	     exception of the Backup folder (or copy the files to another location in
	     case you need them later for troubleshooting purposes).
	
	  3. At a command prompt, type "net start wins" (without the quotation marks),
	     and then press Enter.
	
	  After you complete these steps, a news WINS database is created.
	
	3. Copy the J500000XX.log, Wins.mdb, and Wins.pat files from the external media
	  to the folder location under the backup folder. If prompted to replace the
	  current files, click Yes to All.
	
	4. After this is completed, at a command prompt, type"net stop wins" (without
	  the quotation marks), and then press Enter.
	
	5. In WINS Manager, highlight the WINS server you want to restore the database
	  on and from the Mappings menu, click Restore Local Database.
	
	6. After the restore completes successfully, At a command prompt, type "net
	  start wins" (without the quotation marks), and then press Enter. You may now
	  inspect the database for the desired entries.
	
	Other Useful Knowledge Base Articles Relating to the WINS Database
	------------------------------------------------------------------
	
	  Q134972 Restore Local Database Option in WINS is Unavailable
	
	  Q162563 WINS Restore Fails on Windows NT Server 4.0
	
	  Q160471 Incorrect Documentation on WINS Database Backup Interval
	
	  Q165915 Explanation of Jet Database for Windows NT 4.0
	
	  Q167806 Explanation of Advanced Options in WINS Manager
	
	  Q170849 Restore of WINS Database to a Different Server Fails
	
	  Q190573 Jetpack/WINADMIN Create Maintenance Files in System32
	
	  Q191846 WINS Automatic Backup Does Not Run Every Three Hours
	
	  Q142273 Backing up in-use WINS Database Files Can Cause Corruption
	
	Additional query words: WINS; backup; database; recovery; corrupt
	
	======================================================================
	Keywords          : kbenv kbnetwork kbtool 
	Technology        : kbWinNTsearch kbWinNT400search kbWinNTSsearch kbWinNTSEntSearch kbWinNTSEnt400 kbWinNTS400search kbWinNTS400
	Version           : winnt:4.0
	Issue type        : kbinfo
	
	=============================================================================
	

{% endraw %}
