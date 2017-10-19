---
layout: page
title: "Q272570: XADM: Disaster Recovery of Information Store on Exchange Server"
permalink: /kb/272/Q272570/
---

## Q272570: XADM: Disaster Recovery of Information Store on Exchange Server

	Article: Q272570
	Product(s): Microsoft Exchange
	Version(s): 4.5,5.5
	Operating System(s): 
	Keyword(s): kberrmsg exc55
	Last Modified: 06-AUG-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Exchange Server, version 5.5 
	- Microsoft BackOffice Small Business Server version 4.5 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	This article describes how to recover from information store corruption by using
	an offline restore procedure of Microsoft Exchange Server data.
	
	NOTE: This article does not describe disaster recovery methods for any other
	areas of Exchange Server, and the solution described in this article may not
	correct all instances of information store corruption.
	
	MORE INFORMATION
	================
	
	When corruption occurs in Exchange Server 5.5, one of the most commonly affected
	components is the information store. Corruption usually involves any one of the
	.edb (Exchange Server database) files. In most cases, either the Priv.edb file
	or the Pub.edb file (located in the Exchsrvr\Mdbdata folder) is corrupted.
	
	When the information store is corrupted, the following symptoms occur:
	
	- The Microsoft Exchange Server information store service does not start.
	
	- The information store cannot be stopped.
	
	- The information store stops responding and the CPU usage level remains at 100
	  percent.
	
	- Clients are unable to retrieve or send e-mail. This behavior does not change
	  if you stop the information store, and then restart it.
	
	- When you try to restore the Exchange Server databases from an offline backup,
	  and then run the Information Store Integrity utility (Isinteg) patch, you
	  receive the following error message:
	
	  Error 4294966746: JET_errDatabaseInconsistent
	
	The procedure described in this article is based on a single-server, single-site
	scenario with the following qualities:
	
	- A site connector is not being used.
	
	- An offline copy of both the Pub.edb and Priv.edb files exists.
	
	- A Key Management Server is not being used.
	
	- The server is running Microsoft Small Business Server 4.5. However, the
	  principles can apply to most other Exchange Server 5.5 computers that are set
	  up in a single-organization, single-site configuration.
	
	NOTE: This setup is not designed to restore connector settings.
	
	Troubleshooting
	---------------
	
	Use the following procedure to isolate information store corruption, and to help
	you recover the public and private information stores. Before you start, make
	sure that you can recover the data files from another source. For example, if
	you are using a small Exchange Server database (less than 1 gigabyte [GB]), make
	a copy of the Pub.edb and Priv.edb files. For larger databases, if you do not
	have enough disk space to copy the files, use a good tape backup system or
	another offline storage utility.
	
	To troubleshoot the information store:
	
	1. Try to start the information store. Record any error and event IDs that are
	  reported.
	
	2. Check the consistency of the databases. If a database is consistent, all the
	  log files have been committed to the store. If the database is not
	  consistent, the database may not be corrupted; the log files might not have
	  been committed to the database yet. Run the following commands to check the
	  consistency of the public and private databases:
	
	  "c:\exchsrvr\bin>eseutil /mh ..\mdbdata\priv.edb" (without the quotation
	  marks)
	
	  "c:\exchsrvr\bin>eseutil /mh ..\mdbdata\pub.edb" (without the quotation
	  marks)
	
	  NOTE: This example assumes that you are running the programs from the
	  ExchSrvr\Bin folder, and that the .edb files are in the same ExchSrvr folder
	  in the Mdbdata folder.
	
	  To verify that the .edb file is consistent, check the output line labeled
	  "State." If you would like to send the output of this command directly to a
	  text file, you can modify the command line as follows:
	
	  "c:\exchsrvr\bin>eseutil /mh ..\mdbdata\priv.edb > <mypriv>.txt"
	  (without the quotation marks)
	
	  "c:\exchsrvr\bin>eseutil /mh ..\mdbdata\pub.edb > <mypub>.txt"
	  (without the quotation marks)
	
	  To have the text displayed directly on the screen, add "| more" (without the
	  quotation marks) to the end of the command.
	
	  If Pub.edb and Priv.edb are not located in the ExchSrvr\Mdbdata folder on the
	  same drive as the ExchSrvr\Bin folder that you are running the command from,
	  replace the "..\mdbdata\priv.edb" portion of the command with the full path
	  of the Priv.edb file. Make the same changes for Pub.edb. If both the Pub.edb
	  and Priv.edb files are consistent, go directly to step six.
	
	  If one of the databases is inconsistent, attempt a soft recovery of the files
	  to check if there are copies of the log files stored in the Mdbdata folder.
	  If you do not have the log files, you are not able to complete the soft
	  recovery process. When you do a soft recovery, any uncommitted log files are
	  then committed to the information store database.
	
	  To initiate a soft recovery, run the following commands. The first command is
	  for the private information store. The second command is for the public
	  information store:
	
	  "c:\exchsrvr\bin>eseutil /r /ispriv" (without the quotation marks)
	
	  "c:\exchsrvr\bin>eseutil /r /ispub" (without the quotation marks)
	
	  This command enables you to recover the databases (if the databases are fully
	  recoverable). To confirm this behavior, repeat this step from the beginning,
	  and then run the "eseutil /mh" (without the quotation marks) command again.
	  If the state has changed to "Consistent" for both the public and private
	  information store, then go directly to step six.
	
	3. Defragment the file that you just ran the recovery on. You must do this
	  procedure if you are running short of disk space. If not, this step may not
	  be necessary. If you ran the soft recovery procedure on both Pub.edb and
	  Priv.edb, then run the following defragmentation commands on both files:
	
	   - To defragment Priv.edb:
	
	  "c:\exchsrvr\bin>eseutil /d /ispriv" (without the quotation marks)
	
	   - To defragment Pub.edb:
	
	  "c:\exchsrvr\bin>eseutil /d /ispub" (without the quotation marks)
	
	  NOTE: If the private and public information store databases are large, this
	  step may take some time.
	
	  If you receive an error message that indicates a lack of space when you
	  attempt this step, copy the ExchSrvr\Bin folder to a drive with more space
	  and run the command from that location. For additional information about how
	  to resolve this error message, click the article number below to view the
	  article in the Microsoft Knowledge Base:
	
	  Q192185 XADM: How to Defragment with the Eseutil Utility (Eseutil.exe)
	
	4. If either of the databases are inconsistent, and the eseutil /r command does
	  not return them to a consistent state, use the following procedure:
	
	  NOTE: When you use the following command, you may lose some Exchange Server
	  data, including the messages that were contained in the log files that were
	  not yet committed to the information store database. The following command is
	  a hard or forcible state recovery command, and should only be used if the
	  public or private information stores did not return to a consistent state
	  after you followed the previous steps.
	
	  At the command prompt, type the following commands:
	
	   - To bring the Priv.edb file back into a consistent state, type the
	     following command at a command prompt:
	
	  "c:\exchsrvr\bin>eseutil /p /ispriv" (without the quotation marks)
	
	   - To bring the Pub.edb file back into a consistent state, type the following
	     command at a command prompt:
	
	  "c:\exchsrvr\bin>eseutil /p /ispub" (without the quotation marks)
	
	5. Delete all .log files in the Mdbdata folder as well as the .chk file, and the
	  Temp.edb file (if it exists).
	
	6. Use Isinteg.exe to fix Pub.edb and Priv.edb. This utility runs a test on all
	  areas of each of the databases and reports the results. It also attempts to
	  fix any issues that are encountered.
	
	   - To fix Priv.edb, type the following command at a command prompt:
	
	  "c:\exchsrvr\bin>isinteg -pri -fix -test alltests" (without the quotation
	  marks)
	
	   - To fix Pub.edb, type the following command at a command prompt:
	
	  "c:\exchsrvr\bin>isinteg -pub -fix -test alltests" (without the quotation
	  marks)
	
	  You receive a summary report which indicates the number of tests that were
	  run, the number of warnings, the number of errors found, the number of fixes
	  attempted, and the time it took for the program to run. If there are any
	  warnings, errors, or fixes, run the command again. Repeat this step until
	  there are no warnings, errors, or fixes.
	
	  NOTE: In some cases, the same warnings, errors, or fixes are reported every
	  time you run the program. If you receive the same warnings, errors, or fixes
	  three times in a row, move to the next step. The errors may be caused by a
	  corrupted e-mail attachment or something similar, which does not prevent you
	  from starting the information store. If you can start the information store,
	  and if it is stable, if errors and warning messages continue to be reported
	  after you have run Isinteg.exe several times, use the ExMerge utility to
	  repair the information store. The directions to use the ExMerge utility are
	  listed later in this article.
	
	7. Attempt to start the Information Store Database. If the Information Store
	  Starts, proceed to the next step. If the Information Store fails to start
	  with an error -1011 you will need to bring the Pub.edb and Priv.edb back to a
	  state where the information store can recognize them. To do this, run the
	  following command for both the public and private information store:
	
	  "c:\exchsrvr\bin>isinteg -patch" (without the quotation marks)
	
	  NOTE: The Microsoft Exchange directory service must be started before you run
	  this command. This command works for both the public and the private
	  databases.
	
	  This command works for both the public and the private databases. You do not
	  need to complete this step if you have already performed an online restore of
	  the data. However, if you receive an -1011 error message when you try to
	  start the information store, complete this step.
	
	8. Restart the information store.
	
	9. Run the Exchange Server Consistency Adjuster. The directory
	  service/information store (DS/IS) Consistency Adjuster is used in disaster
	  recovery scenarios where it is not possible to restore the folder to the
	  recovery computer, or where the information store (the Priv.edb or the
	  Pub.edb file) is copied to a recovery computer with a name that is different
	  from that of the original server. If you did not lose the directory service
	  or you did not reinstall Exchange Server with a clean folder, then you would
	  not need to run this tool.
	
	  NOTE: If you use this utility if you have multiple sites in your Exchange
	  Server organization or multiple servers in your Exchange Server site, public
	  folders may be rehomed unexpectedly.
	
	For additional information about the DS/IS Consistency Adjuster, click the
	article number below to view the article in the Microsoft Knowledge Base:
	
	  Q182979 XADM: Function and Effects of the DS/IS Consistency Adjuster
	
	Using the Consistency Adjuster
	------------------------------
	
	To run the Consistency Adjuster, following these steps:
	
	1. Start the Exchange Server Administrator program.
	
	2. Open the container for your server.
	
	3. Open the configuration container.
	
	4. Open the Servers container.
	
	5. Click your server.
	
	6. On the File menu, click Properties, and then click the Advanced tab.
	
	7. Click Consistency Adjuster, select all of the Operations check boxes, and
	  then click OK.
	
	The Consistency Adjuster runs on both the public and private information stores.
	
	If you are performing this recovery on another server, or if you removed and
	reinstalled Exchange Server on this server and do not have a working copy of the
	directory store (Dir.edb), then there are two methods for recovering the users
	mailboxes. For both these methods, you are required to re-create any
	distribution lists and membership to those distribution lists that were lost.
	
	Method One:
	
	If you are able to access the user accounts, start the Exchange Server
	Administrator program, and then click "Extract Windows NT Account List" on the
	Tools menu. Make sure that you extract the user list from the domain, and not
	from the local computer. This procedure enables you to create a file that
	contains a list of all of the Windows NT users.
	
	After the file has been created, on the Tools menu, click Directory Import. When
	you import this list, all of the recipient mailboxes are restored. You may want
	to run the Consistency Adjuster again after this step.
	
	Method Two:
	
	If you do not have access to the Windows NT user accounts for these recipients,
	you must manually re-create all of the Windows NT user accounts with the same
	user names. Then, start the Exchange Server Administrator program, and then
	click "Extract Windows NT Account List" on the Tools menu. Make sure that you
	extract the user list from the domain, and not from the local computer. This
	procedure enables you to create a file that contains a list of all of the
	Windows NT users.
	
	After the file has been created, on the Tools menu, click Directory Import. When
	you import this list, all of the recipients? mailboxes are restored.
	
	After you complete either of these methods, if the mailbox has not been restored,
	you may have created a user account that has a name that is different from the
	previous Exchange Server recipient.
	
	At this point, the server should be functioning, and users should be able to
	retrieve e-mail.
	
	Using the ExMerge Utility
	-------------------------
	
	If the information store starts, but there are other issues, use the ExMerge
	utility to export all of the user's mailboxes to .pst files. Then, merge the
	.pst files to user mailboxes in a newly created Priv.edb file. If you use
	offline storage for mail (.ost files), you need to move the .ost files to a .pst
	file before you start this procedure to prevent you from losing any .ost data.
	Before you use the ExMerge utility, be aware that ExMerge enables you to move
	user mailboxes only. You cannot use ExMerge to move specific Exchange Server
	configuration properties such as connector settings, Outlook settings, or
	client-side rules. You cannot use ExMerge.exe to move distribution lists,
	memberships in those distribution lists, or public folders. If you attempted
	this procedure, you must re-create or reconfigure the distributions lists
	manually. This procedure also destroys your single instance store for messages
	up to that point. As a result, the Exchange Server databases run the risk of
	growing substantially.
	
	For additional information about the ExMerge utility, click the article number
	below to view the article in the Microsoft Knowledge Base:
	
	  Q174197 XADM: Microsoft Exchange Mailbox Merge Program (Exmerge.exe)
	  Information
	
	To download the ExMerge utility, visit the following Microsoft Web site:
	
	  http://download.microsoft.com/download/exch55/utility/q224493/nt4alpha/en-us/iloveyouhlpi.zip
	  (http://download.microsoft.com/download/exch55/utility/q224493/nt4alpha/en-us/iloveyouhlpi.zip)
	
	NOTE: This version of ExMerge was publicly used to deal with the "Love Bug"
	virus. This is why the download is named Iloveyouhlpi.zip.
	
	After you have downloaded and extracted the ExMerge utility, delete the
	Exmerge.ini file that was placed in the extract folder for ExMerge. This
	procedure prevents errors from occurring while you are running the ExMerge
	utility. Next, follow these steps:
	
	1. Make sure no users are currently accessing e-mail or have their e-mail client
	  programs running.
	
	2. Run ExMerge using step one of the two-step merge, and then enter all users.
	
	3. When ExMerge is finished, stop the Exchange Server information store service,
	  and then go into the ExchSrvr\Mdbdata folder and rename the Pub.edb and
	  Priv.edb files. Delete all other files in this folder. Make sure that you do
	  not delete the renamed Pub.edb and Priv.edb files until after you are sure
	  the merge completed successfully.
	
	4. Restart the Exchange Server information store service.
	
	5. Start Outlook on a client computer, and then send an e-mail message to all of
	  the users in the Exchange Server global address book.
	
	  NOTE: If you do not complete this step, the second step of the ExMerge
	  two-step merge does not show that there are any available mailboxes to
	  restore.
	
	6. Run ExMerge using step two of the two-step merge, and then enter all users.
	  When this process is complete, the e-mail that was in the .pst files are
	  moved to Exchange Server mailboxes.
	
	You should now have a new Priv.edb file that contains fresh copies of all mail
	messages.
	
	For additional information about restoring the Exchange Server information store,
	click the article numbers below to view the articles in the Microsoft Knowledge
	Base:
	
	  Q231299 XADM: Information Store Returns Service-Specific Error 335544375
	
	  Q162354 XADM: DS_E_COMMUNICATIONS_PROBLEM Running ISINTEG -PATCH
	
	  Q172813 XADM: Troubleshooting High CPU Utilization By Store.exe
	
	  Q242364 XADM: Information Store Does Not Start After an Offline
	  Defragmentation With 4294966277
	
	  Q237767 XADM: Making and Restoring Offline Backups
	
	  Q219419 XADM: Information Store Stops Unexpectedly and Cannot Be Repaired
	
	For more information about Exchange Server disaster recovery, refer to the
	following white paper that is located at the following Microsoft Web site:
	
	  http://www.microsoft.com/exchange/techinfo/administration/55/BackupRestore.asp
	
	For more information about the Isinteg.exe and Eseutil.exe utilities, refer to
	the documents that are located at the following path on the Exchange Server
	CD-ROM:
	
	  <CD Drive>\ExchSrvr\Server\Support\Utils
	
	The files are called Eseutil.rtf and Isinteg.rtf
	
	Additional query words: IS, smallbiz, SBS GAB .edb pub.edb priv.edb .ost .log isinteg.exe and eseutil.exe
	
	======================================================================
	Keywords          : kberrmsg exc55 
	Technology        : kbAudDeveloper kbExchangeSearch kbExchange550 kbZNotKeyword2 kbSBServSearch kbSBServ450
	Version           : :4.5,5.5
	Issue type        : kbhowto
	
	=============================================================================
	
