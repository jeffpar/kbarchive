---
layout: page
title: "Q296229: XADM: Recovering Exchange Server Computer Using Online Backup"
permalink: /kb/296/Q296229/
---

## Q296229: XADM: Recovering Exchange Server Computer Using Online Backup

{% raw %}

	Article: Q296229
	Product(s): Microsoft Exchange
	Version(s): 5.5
	Operating System(s): 
	Keyword(s): 
	Last Modified: 08-AUG-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Exchange Server, version 5.5 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	This article describes how to recover data from an online backup of your
	Exchange Server computer.
	
	NOTE: When you perform the restore operation to a new or different server other
	than the original Exchange Server computer or if the server is being restored to
	new hard disk, you must reinstall the operating system. It is also very
	important that you configure the new recovery server as close as possible to the
	original configuration.
	
	MORE INFORMATION
	================
	
	NOTE: You may have previously performed some of the steps in the procedure
	described in this section; however, it is important to check all steps before
	you perform the online restore operation.
	
	If you are performing a total server recovery, all the necessary steps are
	included in this procedure. Even if you have previously performed some of these
	steps, you must check all steps before you perform the online restore operation
	of your Exchange Server computer.
	
	NOTE: This article applies if the Exchange Service Account's Security Identifier
	(SID) has not been lost. For additional information about how to proceed if the
	primary domain controller has been lost and there are no valid backup domain
	controllers, click the article number below to view the article in the Microsoft
	Knowledge Base:
	
	  Q170810 XADM: Service Specific Error 4021 Starting Information Store
	
	1. Install the correct version of the operating system (Microsoft Windows NT 4.0
	  or Microsoft Windows 2000), including the service packs, so that the
	  configuration matches the configuration of the original server.
	
	2. Install Exchange Server 5.5, including any connectors (Internet Mail, x.400,
	  and so on), and then apply service packs and any hot fixes so that the
	  configuration matches the configuration of the original server.
	
	3. Run Performance Optimizer, and then ensure that all data, log, and working
	  files are configured to the same locations as the original server locations.
	
	4. Stop all Exchange Server services except the Microsoft Exchange System
	  Attendant (MSExchangeSA).
	
	5. Set the Directory Service service (MSExchangeDS), the Information Store
	  service (MSExchangeIS), and the Message Transfer Agent (MSExchangeMTA) to
	  Disabled.
	
	6. Rename all copies of Mdbdata folders to "Mdbdataold" on all drives.
	
	7. Create new blank Mdbdata folders to replace the renamed folders.
	
	8. Use your backup software to restore the public information, private
	  information, and directory database files from your backup media.
	
	9. After the restore operation is complete, start Registry Editor
	  (Regedt32.exe), and then on the Options menu, verify that Read Only Mode is
	  selected.
	
	10. Check the Restore in Progress registry key that is located in the following
	  registry key:
	
	  HKEY_LOCAL_MACHINE/System/CurrentControlSet/Services/MSExchangeIS
	
	For additional information about the Restore in Progress registry key, click the
	article number below to view the article in the Microsoft Knowledge Base:
	
	  Q200941 XADM: How the Restore in Progress Registry Key Works
	
	11. Check the settings for the subkeys to ensure the file paths match the paths
	  described in step three, for example:
	
	   - BackupLogPath: REG_SZ:\\Server\C$\Exchsrvr\Mdbdata
	
	   - CheckpointFilePath: REG_SZ:\\Server\C$\Exchsrvr\Mdbdata
	
	   - EDB Database recovered: REG_BINARY:00
	
	   - EDB_RstMap:REG_MULTI_SZ:\\Server\C$\Exchsrvr\Mdbdata\Priv.edb
	
	   - EDB_RstMap:REG_MULTI_SZ:\\Server\C$\Exchsrvr\Mdbdata\Pub.edb
	
	   - HighLog Number:REG_DWORD:0x2
	
	   - LogPath:REG_SZ\\Server\C$\Exchsrvr\Mdbdata
	
	   - LowLog Number:REG_DWORD:0x1
	
	12. Confirm the value of LowLog Number and HighLog Number:
	
	   - Value Name: HighLog Number
	     Data Type: REG_DWORD
	     Value: 0x000 (where 0x000 is the highest log file that should have been
	     restored)
	
	   - Value Name: LowLog Number
	     Data Type: REG_DWORD
	     Value: 0x000 (where 0x000 is the lowest log file that should have been
	     restored)
	
	13. Check the Exchsrvr\Mdbdata folder for the Edb< #####>.log files.
	
	  This folder should contain all log files from the value identified in LowLog
	  Number value to the log file identified in HighLog Number with no break in
	  sequence. In addition, a Priv.pat and a Pub.pat file must be present in this
	  folder.
	
	  These logs are replayed as part of the recovery process. For example, if the
	  LowLog Number value is "0x2bc" and the HighLog Number value is "0x2c1", then
	  logs Edb002bc.log through Edb002c1.log must be available for the recovery to
	  succeed.
	
	  NOTE: If consecutive log files are present after the HighLog Number, you can
	  add these Edb<#####>.log and Edb.log files to the Mdbdata folder.
	  Exchange Server plays the log files identified in the Restore in Progress
	  value, and then continues playing all log files as long as there is no break
	  in the numerical sequence of these log files.
	
	14. Confirm that an Edb.chk file is not present in any Mdbdata folder. If the
	  Edb.chk file is present in this folder, move or delete the file (do not
	  delete or move it from an Mdbdataold folder).
	
	15. If you are restoring the directory, you must perform steps six through
	  fourteen again, but substitute Dsadata for Mdbdata, and check for the
	  Dir.pat file in the Dsadata folder.
	
	16. Set the directory service to Automatic, and then start the service.
	
	17. Open the server properties, click the Advanced tab, verify that the circular
	  logging options are the same as the options on the original server, and then
	  make changes if necessary.
	
	18. Set the Message Transfer Agent to Manual, and then start the service.
	
	19. Set the Information Store service to Manual, and then start the service.
	
	  If you receive an "-1011" error message ID, open a command prompt window, go
	  to the location of the Exchange Server files, (usually C:\Exchsrvr\Bin),
	  type " isinteg -patch " (without the quotation marks), and then press
	  ENTER.
	
	  When the utility is finished, start the Information Store service again.
	
	  At this point your services should all be running.
	
	20. Set the properties of the Information Store service (MSExchangeIS), and the
	  Message Transfer Agent (MSExchangeMTA) back to Automatic.
	
	For additional information about how to recover an Exchange Server computer using
	an online backup and how to include current log files in the restore process,
	click the article number below to view the article in the Microsoft Knowledge
	Base:
	
	  Q247109 XADM: Steps to Restore an Online Backup Using Current Log Files
	
	Additional query words:
	
	======================================================================
	Keywords          :  
	Technology        : kbExchangeSearch kbExchange550 kbZNotKeyword2
	Version           : :5.5
	Issue type        : kbhowto
	
	=============================================================================
	

{% endraw %}
