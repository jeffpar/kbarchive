---
layout: page
title: "Q101602: Configuring Windows NT for Replication"
permalink: /kb/101/Q101602/
---

## Q101602: Configuring Windows NT for Replication

{% raw %}

	Article: Q101602
	Product(s): Microsoft Windows NT
	Version(s): 3.1,3.5,3.51,4.0
	Operating System(s): 
	Keyword(s): kbusage
	Last Modified: 27-FEB-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Server versions 3.1, 3.5, 3.51, 4.0 
	- Microsoft Windows NT Workstation versions 3.1, 3.5, 3.51, 4.0 
	- Microsoft Windows NT Advanced Server, version 3.1 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	Windows NT implements replication to maintain identical copies of specified
	files and directories on different computers. Changes made to files on one
	computer are automatically replicated to other computers configured to receive
	the changes. Replication requires a Windows NT Advanced Server to serve as the
	export server. The import server(s) can be other Windows NT Advanced Servers,
	Windows NT workstations, or OS/2 LAN Manager version 2.x servers. The
	information below provides detailed instructions to replicate information from
	an export server to an import server.
	
	MORE INFORMATION
	================
	
	Perform the following fourteen steps to configure the export server:
	
	1. Run the User Manager from the Administrative Tools group.
	
	2. Create a new account for replication (for example, REPL). Specify a password,
	  if desired. Remove the check from the "User must change password at next
	  logon" check box.
	
	3. Choose OK. Then close User Manager.
	
	4. Run the Control Panel and select Services.
	
	5. Choose the Directory Replicator service and choose Startup. Change the
	  Startup Type from Manual to Automatic.
	
	6. In the Log On As control, choose This Account. Then choose Add User. Select
	  the account created in step 2 above and choose Add.
	
	7. Type the password for the replication account and choose OK. Control Panel
	  responds with a message such as "The account DOMAIN\REPL has been granted the
	  Log On As A Service right and added to the Replicator local group." (If this
	  message does not appear, use the User Manager to grant this right. In User
	  Manager, choose Policies, then choose User Rights, and choose Show Advanced
	  User Rights. Select Log On As a Service. If the replication account does not
	  appear in the Grant To box, click Add, then Show Users, highlight the
	  replication account, click Add, and click OK. The replication account should
	  appear in the Grant To box. Click OK.)
	
	8. Choose OK to dismiss this message.
	
	9. Run the Server Manager from the Administrative Tools group.
	
	10. Choose the export Advanced Server, then choose Computer and Properties.
	
	11. Choose Replication. In the Replication dialog box, choose Export
	  Directories. The Server Manager displays the default path:
	  C:\WINNT\SYSTEM32\REPL\EXPORT.
	
	12. Choose Add. Specify the name of the domain or computer to act as the import
	  server. (Specifying the name of a domain replicates the files and
	  directories to any workstation or Windows NT Advanced Server in the domain
	  that is configured for import replication.)
	
	  NOTE: If you're setting up replication across a WAN, use specific computer
	  names instead of or in addition to the domain name. For additional
	  information, please see the following article in the Microsoft Knowledge
	  Base:
	
	  ARTICLE-ID: Q139103
	  TITLE : Replication to Import Computers in a WAN Environment
	
	13. Choose Manage to configure specific directories for replication. By default,
	  the Server Manager exports the Scripts directory that contains any user
	  logon scripts. Choose the Add button to specify any additional
	  subdirectories. (If necessary, create the directories first in the File
	  Manager or at the command prompt.)
	
	  If you choose the Add Lock button, Windows NT does not replicate the selected
	  directory until all <LOCKS> are removed. If you choose Wait until
	  Stabilized, Windows NT does not replicate files until two or more minutes
	  after the last file changed. Otherwise, Windows NT replicates files
	  immediately.
	
	  If you choose Entire Subtree, Windows NT exports the specified subdirectory
	  and all subdirectories it contains. Otherwise, Windows NT exports only the
	  specified subdirectory.
	
	  After you choose all applicable options, choose OK.
	
	14. Choose OK to exit the Directory Replication dialog box. Windows NT responds
	  with the message "Attempting to Start the Directory Replication service on
	  <computername>." If the service does not start, refer to the Error Log
	  for specific error information.
	
	Perform the following nine steps to configure the import server:
	
	1. On each import computer, run Control Panel and select Services.
	
	2. Choose the Directory Replicator service and choose Startup. Change the
	  Startup Type from Manual to Automatic.
	
	3. In the Log On As control, choose This Account. Then choose Add User. Select
	  the replication account created on the export server and choose Add.
	
	  If the importing computer is in a different domain from the exporting
	  computer, set up a replication account in the import domain with the same
	  name and password as the account used for the export domain.
	
	4. Type the password for the replication account and choose OK. Control Panel
	  responds with a message such as "The account DOMAIN\REPL has been granted the
	  Log On As A Service right and added to the Replicator local group." (If this
	  message does not appear, use the User Manager to grant this right. In User
	  Manager, choose Policies, then choose User Rights, and choose Show Advanced
	  User Rights. Check Log On As A Service and choose OK.)
	
	5. Choose OK to dismiss this message.
	
	6. In Control Panel, choose Server, then choose Replication.
	
	7. In the Replication dialog box, choose Import directories. The Server Manager
	  displays the default path: C:\WINNT\SYSTEM32\REPL\IMPORT.
	
	8. Choose Add. Specify the name of the domain or computer to act as the export
	  server. (By default, the From List is blank and the computer automatically
	  imports files from the local domain. If you add any entries to the From List,
	  the computer no longer automatically imports files from the local domain; if
	  desired, it must be added to the From List.)
	
	  If you're setting up replication in a WAN environment, use specific computer
	  names instead of or in addition to the domain name. For additional
	  information, please see the following article in the Microsoft Knowledge
	  Base:
	
	  ARTICLE-ID: Q139103
	  TITLE : Replication to Import Computers in a WAN Environment
	
	9. Choose Manage to display the status screen for the imported directories. Add
	  Lock prevents Windows NT from updating the specified directory.
	
	10. The Status field can be one of the following:
	
	   - - "OK" indicates that the subdirectory receives regular updates.
	
	   - - "No Master" indicates that the subdirectory is not receiving regular
	     updates.
	
	   - - "No Sync" indicates that the subdirectory has received updates, but that
	     its data is not up to date.
	
	   - - A blank status indicates that the subdirectory has not been replicated.
	
	Additional notes:
	
	- An Advanced Server can be configured as both an import and an export server.
	
	- Windows NT can replicate files across domain trust relationships by
	  establishing the same Replication account and password in each domain.
	
	- When Windows NT replicates files from NTFS to FAT, it replicates only 8.3
	  filenames.
	
	- Windows NT can support other import and export paths. However, the default
	  paths, C:\WINNT\SYSTEM32\REPL\IMPORT and C:\WINNT\SYSTEM32\REPL\EXPORT, have
	  complex permissions that support replication. Maintaining these paths is
	  recommended.
	
	- When Windows NT displays the message such as "The account DOMAIN\REPL has
	  been granted the Log On As A Service right and added to the Replicator local
	  group.", it indicates that the specified account has been added to the Backup
	  Operators and Domain Users groups by default in addition to the Replicator
	  group.
	
	REFERENCE
	---------
	
	System Guide NT Advanced Server
	
	Additional query words: prodnt repl directory replication backup logon scripts setup configure
	
	======================================================================
	Keywords          : kbusage 
	Technology        : kbWinNTsearch kbWinNTWsearch kbWinNTW400 kbWinNTW400search kbWinNT351search kbWinNT350search kbWinNT400search kbWinNTW350 kbWinNTW350search kbWinNTW351search kbWinNTW351 kbWinNTW310 kbWinNTSsearch kbWinNTS400search kbWinNTS400 kbWinNTS351 kbWinNTS350 kbWinNTS310 kbWinNTAdvSerSearch kbWinNTAdvServ310 kbWinNTS351search kbWinNTS350search kbWinNTS310search kbWinNT310Search kbWinNTW310Search
	Version           : :3.1,3.5,3.51,4.0
	Issue type        : kbhowto
	
	=============================================================================
	

{% endraw %}
