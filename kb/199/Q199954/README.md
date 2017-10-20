---
layout: page
title: "Q199954: XADM: Forklifting All Users to a New Server"
permalink: /kb/199/Q199954/
---

## Q199954: XADM: Forklifting All Users to a New Server

{% raw %}

	Article: Q199954
	Product(s): Microsoft Exchange
	Version(s): winnt:4.0,5.0,5.5
	Operating System(s): 
	Keyword(s): exc4 exc5 exc55
	Last Modified: 06-AUG-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Exchange Server, versions 4.0, 5.0, 5.5 
	-------------------------------------------------------------------------------
	
	WARNING: This article contains information about an unsupported method of moving users and data. Microsoft cannot guarantee that problems resulting from the incorrect use of this method can be solved. Use this method at your own risk.
	
	IMPORTANT: This article contains information about modifying the registry. Before you 
	modify the registry, make sure to back it up and make sure that you understand how to restore 
	the registry if a problem occurs. For information about how to back up, restore, and edit the 
	registry, click the following article number to view the article in the Microsoft Knowledge Base:
	
	  Q256986 Description of the Microsoft Windows Registry
	
	SUMMARY
	=======
	
	You may want to move all of the users from one Exchange Server computer to
	another, often during a hardware or software upgrade. If the server has a large
	number of users who have large mailboxes, the move may take an unusually long
	time if you use the Move Mailbox utility of the Exchange Server Administrator
	program in the usual manner.
	
	You can "forklift" all of the user data at once, if you physically move the
	Priv.edb file from one server to another. This significantly reduces the time
	that it takes to accomplish the entire move. This procedure is useful only if
	you move the users to a new server that does not already have user data on it,
	because it destroys all of the mailbox data that is already on the destination
	server.
	
	Do not use this method to move public folder data. This method requires server
	down time. Allow at least two hours, plus any time that you need to back up,
	restore, or otherwise physically move your mailbox data.
	
	MORE INFORMATION
	================
	
	This is not a supported method of moving users and data. Although it has been
	tested and successfully used in several Exchange Server version 5.0 and 5.5
	production sites, the Move User utility in the Exchange Server Administrator
	program is the supported method for moving users from one server to another
	within the same site.
	
	Advance Preparation
	-------------------
	
	In the following instructions, the source server is the server on which the
	mailboxes are currently located. The destination server is the server where the
	mailboxes will ultimately reside.
	
	1. Join the destination server to the site, and make sure that it is functioning
	  normally. Check that directory and public folder replication with other
	  servers in the site works, that messages can be sent between this server and
	  other servers, and so on.
	
	2. Back up all of the data on both of the servers before you begin this
	  procedure. You may also want to practice this procedure in a lab environment
	  before you perform it using production data. If this method does not work,
	  you may need to completely reinstall Exchange Server on each server, restore
	  your data, and then reconfigure all of your connectors.
	
	3. Remove all the replicas of all the public folders from the source server.
	  Double-click the server's Public Information Store object, and in the
	  Instances page, remove all of the folders that are listed in the right pane.
	
	  If you cannot remove a folder because the source server contains the only
	  replica, you must place a replica of that folder on another server in the
	  site. Do not proceed until you have moved all of the public folder replicas
	  to another server, and have verified that the data in the folders has
	  actually replicated.
	
	  To verify that replication has occurred:
	
	  a. Before you move the replicas from the source server, connect to the source
	     server by using the Exchange Server Administrator program, and at the
	     Public Folder Resources box, note the item counts and sizes for each
	     replica on the server.
	
	  b. After you move the replicas, connect to the destination servers by using
	     the Exchange Server Administrator program and verify that the resource
	     values match closely (they may not match exactly because of ongoing user
	     changes to folder contents).
	
	  NOTE: The best strategy to move public folders is to replicate the folders of
	  the source server to the destination server.
	
	4. (Optional) Remove any connectors and transport stacks from the server, and
	  then reconfigure them on other servers in the site if you still need them. If
	  you want to completely remove the source server from service, carefully
	  consider the implications for any other services that you may need to move,
	  such as advanced security or third-party gateways.
	
	If this was the first server installed in the site, you must assign additional
	functions to other servers in the site before you remove the server completely.
	For additional information about moving the first server in the site, click the
	article number below to view the article in the Microsoft Knowledge Base:
	
	  Q152959 XADM: How to Remove the First Exchange Server in a Site
	
	5. Create a distribution list that contains all of the users on the source
	  server. If the source server is running Exchange Server version 5.0 or 5.5,
	  you can simplify this task by creating an Address Book view that is grouped
	  by the Home Server value. If you create the Address Book view, you can use it
	  when you create the distribution list to quickly select only the source
	  server's mailboxes.
	
	6. Schedule a service outage for the move procedure.
	
	Move Database Procedures
	------------------------
	
	1. Stop and disable all of the Exchange Server services on both the source and
	  destination servers, except for the system attendant, directory service, and
	  information store. You do not need to empty all of the queues. If mail is
	  backed up in any delivery or transfer queues, it can be delivered later, when
	  the connector services are re-enabled.
	
	2. Note the Distinguished Name (DN) for the system attendant on both servers,
	  and the DN of an administrative account of your choice. You need this
	  information for step 3. To find these DNs:
	
	  a. Start the Exchange Server Administrator program, and then view the Mailbox
	     Resources page for each server.
	
	  b. On the View menu, click Columns, and then click Full Mailbox Directory
	     Name.
	
	  c. Find the system attendant and one other mailbox account of your choice,
	     and then note the full DN for both. A system attendant DN is usually
	     displayed as follows:
	
	  /o=<organization name>/ou=<site
	  name>/cn=Configuration/cn=Servers/cn=<server name>/cn=Microsoft
	  System Attendant
	
	You can also access the DN of any object using the Exchange Server Administrator
	program in raw mode. If you use this method, you can copy and paste the DN,
	rather than retyping it.
	
	WARNING: If you use the raw mode of the Exchange Server Administrator program
	(admin /r) incorrectly, serious problems may occur that may require you to
	reinstall Microsoft Windows NT Server, Microsoft Exchange Server, or both.
	Microsoft cannot guarantee that problems that result from using raw mode
	incorrectly can be solved. Use raw mode at your own risk.
	
	NOTE: Only use raw mode to view properties, do not use it to edit them, unless
	you are fully aware of all of the ramifications of your changes. Editing
	properties in raw mode may render your Exchange Server computer incapable of
	functioning.
	
	To access the DN of an object in raw mode:
	
	  a. Start the Exchange Server Administrator program in raw mode by typing the
	     following at a command prompt:
	
	  "c:\exchsrvr\bin\admin /r" (without the quotation marks)
	
	  b. View your object of interest. (To view the System Attendant object, click
	     to expand the <Site> object, click to expand the Configuration
	     object, click to expand the Servers object, and then click the <Server
	     name> container.)
	
	  c. On the File menu, click Raw Properties.
	
	  d. Locate the Obj-Dist-Name attribute. This is the DN.
	
	  e. You can copy this value to the clipboard, and then paste it into a text
	     editor, or the Regedt32 utility that is used in step 3.
	
	3. At the source server, disable the user logon rights, except for the system
	  attendant and one normal mailbox account. To disable the logon rights you
	  must edit the registry.
	
	WARNING: If you use Registry Editor incorrectly, you may cause serious problems
	that may require you to reinstall your operating system. Microsoft cannot
	guarantee that you can solve problems that result from using Registry Editor
	incorrectly. Use Registry Editor at your own risk.
	
	  a. Start the Registry Editor utility (Regedt32.exe) and locate the following
	     key:
	
	  HKEY_LOCAL_MACHINE\System\CurrentControlSet\Services\MSExchangeIS\ParametersSystem
	
	  b. Create a new value. On the Edit menu, click Add Value. Configure the value
	     as follows:
	
	  Value Name: Logon Only As
	  Type: REG_MULTI_SZ
	  Data: Add the system attendant DN and your chosen administrative account DN
	  (as noted in step 2). You can list the DNs of as many mailboxes as you want;
	  separate each DN by pressing the ENTER key. Do not press the ENTER key at the
	  end of the last line.
	
	     If you leave the value blank, nobody, regardless of their Windows NT
	     permissions, can log on to the information store as a client, even using
	     the Exchange Server Administrator program. The Exchange Server
	     Administrator program still runs, and can access most directory functions,
	     but you receive error messages if you try to access information store
	     functions such as the public folder tree or mailbox resources. You must
	     allow the system attendant to log on so that the Exchange Server
	     Administrator program can access the store.
	
	     If the system attendant is listed in the Logon Only As registry value, the
	     Exchange Server Administrator program can still access the information
	     store. The ordinary mailbox account that you list in the value can still
	     log on to the client and send mail to the group of all recipients on the
	     server.
	
	4. At the source server, stop the information store, and then restart it to
	  activate the Logon Only As registry value and to prevent users from logging
	  back on to the server. This also commits any outstanding transaction logs to
	  the Priv.edb file, and ensures that all of the mailbox data is safely in that
	  single file.
	
	5. Stop the information store on both the source and destination servers. Verify
	  that you shut down the information store on the source server cleanly by
	  performing the following steps:
	
	  a. Check the Windows NT Event Viewer application event log for any errors or
	     warnings that were logged during the service shutdown.
	
	  b. To verify that the Priv.edb file is in a consistent state, at a command
	     prompt, run one of the following commands (depending on the version of
	     Exchange Server that the source server is running):
	
	      - For Exchange Server versions 4.0 and 5.0:
	
	  <exchsrvr>\bin\edbutil /mh <exchsrvr>\mdbdata\priv.edb | more
	
	      - For Exchange Server version 5.5:
	
	  <winnt>\system32\eseutil /mh <exchsrvr>\mdbdata\priv.edb | more
	
	     Using either command, you receive about two screens of output. Look for a
	     line that reads:
	
	  State: Consistent
	
	     If the state is inconsistent, do not proceed. If the state is consistent,
	     and there are no problems logged in the Event Viewer, the Priv.edb file
	     contains all of the mailbox data.
	
	6. Back up the private information store from the source server. You can either
	  copy the Priv.edb file to a safe location, or perform an Exchange Server
	  online backup.
	
	  If you want to transfer the private database by means of an online backup,
	  restart the information store before you perform the online backup. Stop the
	  information store service after the online backup finishes.
	
	  To save time, you may want to begin to copy the Priv.edb file to the
	  destination server at this point. If you do this, don't copy the file to the
	  <exchsrvr>\Mdbdata folder, copy it to the root of the same logical
	  drive where the Priv.edb file resides on the destination server so that you
	  can quickly move the file into place when you need to.
	
	7. Move all the data from all the <exchsrvr>\Mdbdata folders on all the
	  local drives on BOTH servers to a safe location, outside the <exchsrvr>
	  folder trees.
	
	  NOTE: Up to four Mdbdata folders may exist. Check all the local drives for the
	  existence of an <exchsrvr>\Mdbdata folder, or verify the paths using
	  the Exchange Server Administrator program, in the Database Paths page of the
	  <Server> object properties.
	
	8. Restart the information store service on both servers. This creates empty
	  mailbox and public folder data stores for both servers.
	
	9. Start a client application using the administrative account that you enabled
	  in the Logon Only As registry value. Send a mail message that is similar to
	  the following example to every mailbox on the server:
	
	  Subject: YOUR MAILBOX IS BEING MOVED
	  Message: Your mailbox items are safe, but are unavailable right now. Please
	  exit so that we can complete the move procedure. Your data will be available
	  again after <time>. Any messages that you send during this session will
	  not be delivered, and you cannot receive mail right now. Personal
	  appointments or other items that you create in this session will be lost
	  after the move. You may direct any questions to <administrator name>.
	  Thank you for your patience.
	
	10. At the source server, re-enable the logon rights; delete the Logon Only As
	  registry value. You must re-enable the logon rights to proceed to step 11.
	  The message that you sent in step 9 prevents users from panicking if they
	  open empty mailboxes.
	
	11. At the source server, start the Exchange Server Administrator program. Use
	  the Move Mailbox utility to move all the users to the destination server.
	  Because the mailboxes are virtually empty, the move finishes quickly.
	
	  After the Move Mailbox utility finishes the move, click the source Server
	  object, and then view the Recipients container. Click the destination Server
	  object, and then view the Recipients container. It may be several minutes
	  before the moved users are visible on the destination server. To speed up
	  the process, open the Directory Service object properties for the
	  destination server, and click Update Now (update only new and changed
	  objects, not all objects).
	
	12. At the destination server, disable the logon rights (use steps 2 and 3,
	  above), but make an exception for your administrative mailbox and the
	  destination server system attendant.
	
	  CAUTION: The administrative mailbox has the same DN on the destination server
	  that it has on the source server, but the system attendant DN is different.
	  Be sure that you have the correct system attendant DN.
	
	13. Stop the information store service on the destination server, and then
	  restore the mailbox data from the source server. Choose one of the following
	  restoration methods, based on the type of backup that you used in step 6:
	
	   - If you made an online backup, restore only the information store files to
	     the destination server, and then choose to either erase all the existing
	     data, or turn off the "no loss restore" option (your backup software
	     interface may implement this option in different ways).
	
	     - or -
	
	   - If you copied the Priv.edb file to the destination server, rename all the
	     <exchsrvr>\Mdbdata folders on all the drives, and create empty
	     Mdbdata folders to replace them. Copy the source Priv.edb file to the same
	     Mdbdata folder where the Priv.edb file already existed on the destination
	     server.
	
	14. Start the information store on the destination server. If you did not use
	  the online backup method to transfer the Priv.edb file, you need to "patch"
	  the database before it starts. This is a normal operation that synchronizes
	  the directory with the information store. If you need to patch the database,
	  an application event log error that states this is logged. To patch the
	  database, at a command prompt, run the following command:
	
	  "<exchsrvr>\bin\isinteg.exe -patch" (without the quotation marks)
	
	  At this point, make sure that both servers have the information store
	  services running. It is important that you keep both servers running at
	  least until all the clients have logged on once so that clients that attempt
	  to connect to the old server can be automatically redirected to the new
	  server.
	
	15. To verify that the procedure was successful:
	
	   - Check the mailbox resources using the Exchange Server Administrator
	     program. Make sure that the items and byte counts for mailboxes look
	     typical.
	
	   - Log on to your administrative client account, and then verify that your
	     own previously existing mail is available.
	
	16. Re-enable the client logon rights at the destination server; delete the
	  Logon Only As registry value from the registry, and then restart the
	  information store. Start an online backup of the database at this time.
	
	17. Re-enable and restart the message transfer agent (MTA) and any connectors,
	  and then test mail flow between the servers and the sites.
	
	Notes
	-----
	
	Messages that were in transit or queued on the source server are rerouted and
	delivered to users on the new server when you re-establish connections.
	
	You do not need to move distribution lists or custom recipients. These objects
	belong to the site as a whole, not to a specific server, and so they are
	automatically replicated, and are available on all the servers.
	
	You do not need to run a DS/IS consistency adjustment as part of this procedure.
	
	Additional query words:
	
	======================================================================
	Keywords          : exc4 exc5 exc55 
	Technology        : kbExchangeSearch kbExchange500 kbExchange550 kbExchange400 kbZNotKeyword2
	Version           : winnt:4.0,5.0,5.5
	Issue type        : kbhowto
	
	=============================================================================
	

{% endraw %}
