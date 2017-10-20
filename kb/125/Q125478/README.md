---
layout: page
title: "Q125478: Replicating Login Scripts from Windows NT to LAN Manager"
permalink: /kb/125/Q125478/
---

## Q125478: Replicating Login Scripts from Windows NT to LAN Manager

{% raw %}

	Article: Q125478
	Product(s): Microsoft Windows NT
	Version(s): 
	Operating System(s): 
	Keyword(s): 
	Last Modified: 08-AUG-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Advanced Server, version 3.1 
	- Microsoft Windows NT Server version 3.5 
	- Microsoft LAN Manager, version 2.2c 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	This article describes a procedure that ensures proper replication of login
	scripts from a Windows NT server to a LAN Manager server.
	
	MORE INFORMATION
	================
	
	On The LAN Manager Server
	-------------------------
	
	1. Check for the following entries in the LANMAN.INI file and create them if
	  they do not exist:
	
	  In the [replicator] section:
	
	  replicate = import
	
	  importpath = <ImportPath>
	  (For example, REPL\ACCTS. This must be relative to the LANMAN directory and is
	  needed only if your import directory is something other than repl\import)
	
	  importlist = <WindowsNTServerName>
	  (For example, SALES-PDC)
	
	  logon = <LanManagerAccount>
	  (Must be the same as the account used on the Windows NT export server)
	
	  password = <LanManagerPassword>
	  (must be the same as the account used on the Windows NT export server) tryuser
	  = <yes or no>
	  (default = yes, set to "no" if you do not want the LAN Manager server to
	  attempt to update directories while a user is logged on locally)
	
	  In the [netlogon] section:
	
	  scripts = <ScriptsPath>
	  (For example, REPL\IMPORT\SCRIPTS)
	
	2. Create the import path directory tree if it does not exist (ie.
	  C:\LANMAN\REPL\IMPORT\SCRIPTS).
	
	3. Start the Replicator Service on the LAN Manager server with the command, NET
	  START REPLICATOR. You may also want to add the Replicator Service to the list
	  of services started automatically in the [server] section of the LANMAN.INI
	  file, per the following example:
	
	  srvservices = alerter,netlogon,replicator
	
	On The Windows NT Server
	------------------------
	
	1. Create the replication account in User Manager for Domains, making sure that
	  the username and password match the account being used on the LAN Manager
	  server. Also, make sure that all options requiring user intervention (such as
	  User Must Change Password at Next Logon) are disabled.
	
	2. Add the replication username to the Domain Users, Backup Operators, and
	  Replicator groups and exit User Manager for Domains.
	
	3. Start the Services option in Control Panel and from the Service list, select
	  Directory Replicator. Then choose the Startup button.
	
	4. Under Startup Type, select the Automatic option button.
	
	5. Under Log On As, select the This Account option button and choose the ...
	  button to open the Add User window and obtain the Names list.
	
	6. Select the replicator account from the Names list, choose the Add button, and
	  then choose the OK button.
	
	7. Under Log On As, enter the password for the replicator account in the
	  Password box, re-enter the password in the Confirm Password box, and choose
	  the OK button and then the Close button to close the Services window.
	
	8. Run the Server option in Control Panel, choose the Replication button, select
	  the Export Directories option button, and verify that the path shown in the
	  From Path box is correct. For example:
	
	  C:\WINNT\SYSTEM32\REPL\EXPORT
	
	9. From the Directory Replication window (opened in step 8 ), choose the Add
	  button under the To List field, select the name of the LAN Manager server or
	  the domain in which the LAN Manager server resides from the Select Domain
	  list, and then choose the OK button to close the Select Domain window. Choose
	  the OK button to close the Directory Replication window and choose the OK
	  button to close the Server window.
	
	10. Start the Services option in Control Panel again and from the Service list
	  select Directory Replicator. Choose the Start button to start the Directory
	  Replicator service and then choose the OK button to close the Services
	  window.
	
	11. Start the Servers option in Control Panel again and choose the Shares button
	  to view replication activity when it occurs. You can view the replication
	  session establishment in the Connected Users box by watching for a username
	  using the REPL$ share.
	
	If Replication Does Not Occur
	-----------------------------
	
	Follow these steps if an initial replication does not occur.
	
	1. Stop and restart the Directory Replicator service via the Services option in
	  Control Panel on the Windows NT server and check for any errors in Event
	  Viewer. If no errors regarding this service exist, proceed to step 11 above
	  to watch for replication to occur.
	
	2. Stop and restart the Replicator service on the LAN Manager server by issuing
	  the following commands in succession:
	
	  NET STOP REPLICATOR NET START REPLICATOR
	
	  After issuing these commands on the LAN Manager server, you should see the
	  file OK$ in the import directory of the LAN Manager server.
	
	3. If replication problems persist, check Event Viewer on the Windows NT server
	  and the error log on the LAN Manager server (using the command NET ERROR) for
	  indications of specific error conditions related to replication.
	
	For more information on replication, query on the following keywords here in the
	Microsoft Knowledge Base.
	
	  replication import export
	
	Additional query words: prodnt prodlm 3.10 2.2c
	======================================================================
	Keywords          :  
	Technology        : kbWinNTsearch kbWinNT350search kbWinNTSsearch kbWinNTS350 kbWinNTAdvSerSearch kbWinNTAdvServ310 kbWinNTS350search kbAudDeveloper kbWinNT310Search kbLanManSearch kbLanMan220c
	
	=============================================================================
	

{% endraw %}
