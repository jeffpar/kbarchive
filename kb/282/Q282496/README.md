---
layout: page
title: "Q282496: XADM: Best Practices When Resetting an Exchange Mailbox Database"
permalink: kb/282/Q282496/
---

## Q282496: XADM: Best Practices When Resetting an Exchange Mailbox Database

	Article: Q282496
	Product(s): Microsoft Exchange
	Version(s): 4.0,5.0,5.5
	Operating System(s): 
	Keyword(s): kberrmsg exc4 exc5 exc55
	Last Modified: 30-JAN-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Exchange Server, versions 4.0, 5.0, 5.5 
	- Microsoft Exchange 2000 Server 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	This article describes information to consider and best practices to implement
	when you reset an Exchange mailbox database.
	
	This article contains the following sections:
	
	- Overview
	
	- Offline Folders
	
	- Inbox Rules
	
	- Folder Permissions
	
	- Personal Forms and Custom Views
	
	- Outlook Address Book Service
	
	- Best Practices
	
	MORE INFORMATION
	================
	
	Overview
	--------
	
	To "wipe", or reset, an Exchange information store database, stop the Information
	Store service, delete the entire database and all the log files, and then
	restart the Information Store service. At this point, new database files are
	created. User accounts are unaffected by this procedure, but when users log on
	again, all of the users' server-based information is gone. In addition to
	mailbox data, a private information store can contain message delivery queues
	for several different connectors, including the Internet Mail Service. If you
	reset the information store while messages are in transit in these queues, the
	messages are lost.
	
	There are typically two scenarios in which you might want to reset the
	information store:
	
	- To help you with troubleshooting, in situations where you suspect that a
	  symptom is caused by a problem in the current database. In this situation,
	  all of the database folders (usually in the Mdbdata folder) on all of the
	  drives are renamed, and empty database folders are created in their place, to
	  force the creation of a new database. When you use this procedure, first
	  disable all of the connectors, including the message transfer agent (MTA), to
	  prevent new items from being delivered to the test database. After you finish
	  troubleshooting, you can rename the folders to restore the original database
	  to service.
	
	- As part of a "restore service now, restore data later" disaster-recovery
	  strategy. If a database has been damaged or displays other symptoms that make
	  that database unusable in production, you can reset the information store so
	  that clients can immediately log on and send and receive new mail. You can
	  begin recovery efforts for the problem database on a separate server at the
	  same time.
	
	  Typically, the Exmerge utility is used as part of a "restore service now,
	  restore data later" recovery strategy. An administrator can use Exmerge to
	  automatically copy all of the messages from one database to matching
	  mailboxes in another database.
	
	  An Exchange mailbox contains more data than the visible messages and items.
	  This additional "metadata" includes:
	
	   - Offline folders (.ost) file encryption keys
	
	   - Rules
	
	   - All folder permissions, which include delegate permissions
	
	   - Personal forms
	
	   - Custom folder views
	
	  Although Exmerge is a very reliable utility for copying user messages, Exmerge
	  cannot recover certain mailbox metadata. The version of Exmerge that is
	  current as of the publication of this article can extract and import user
	  messages and items, as well as folder permissions and rules, but cannot
	  extract and import most custom views or personal forms. Note also that before
	  you can use Exmerge to import data to a reset information store on a
	  pre-Exchange 2000 server, either each user must log on once, or an
	  administrator must send a message to each user on the server. Either of these
	  operations forces the creation of a new mailbox in the new database. This
	  step is not necessary when using ExMerge version 6.0 against an Exchange 2000
	  server.
	
	The rest of this article describes how the loss of various kinds of mailbox
	metadata can impact an organization, and provides suggestions for how to restore
	or re-create that mailbox metadata.
	
	The strategies for preserving or recovering mailbox metadata that are described
	in this article require manual intervention on a mailbox-by-mailbox basis. It is
	labor-intensive to implement these strategies; therefore, they are not suitable
	as a general strategy for preserving all metadata. These suggestions are not a
	substitute for making and restoring online backups of your Exchange databases.
	
	Offline Folders
	---------------
	
	Exchange supports both Online and Offline client connection modes. In Online
	mode, the client is connected directly to the Exchange computer's information
	store database, and all of the changes that the client makes are immediately
	written to that database. In Offline mode, changes that the client makes are
	stored in the offline folders (.ost) file on the client workstation. When the
	client next connects to the server, the changes are synchronized between the
	offline and online information stores.
	
	The .ost file is similar to a personal folders (.pst) file, but the .ost file is
	automatically encrypted. The encryption key is stored in two places: in the
	mailbox on the Exchange computer and in a local Messaging Application
	Programming Interface (MAPI) profile that is configured on the client
	workstation. If the key is lost from both locations, the .ost file is
	unreadable. When a client connects in Online mode, the key in the profile is
	checked against the key in the information store database. If the keys differ,
	the client copy of the key is overwritten with the key from the information
	store, and a new .ost file is automatically generated on the client workstation.
	When you reset an information store database, a new offline key is generated in
	each new mailbox; therefore, the current .ost file becomes unreadable at the
	beginning of the first successful online connection. Any changes that are made
	before the synchronization of the current .ost file are not uploaded.
	
	The current .ost file remains readable as long as the client opens Microsoft
	Outlook only in Offline mode; however, users who are working offline are usually
	not aware that a server reset has taken place until the users try to connect to
	the server again.
	
	After you reset an Exchange information store, offline clients receive the
	following error message during the first successful connection attempt:
	
	  The location the messages are delivered to has changed for this user profile.
	  To complete this operation, you may need to copy the contents of the old
	  Outlook folders to the new Outlook folders. For information about how to
	  complete the change of your mail delivery location, see Microsoft Outlook
	  Help. Some of the shortcuts on the Outlook Bar may no longer work. Do you
	  want Outlook to recreate your shortcuts? All shortcuts you have created will
	  be removed.
	
	By the time that the client receives this error message, it is too late to
	salvage the old key from the profile; the connection has already replaced the
	old key with a new key.
	
	You can use one of the following strategies to recover from this situation:
	
	- Back up the profile key beforehand.
	
	- Recover the key from the original database after you repair or recover the
	  database.
	
	Backing Up the Profile Key:
	
	You can back up client profiles by using Microsoft Windows Resource Kit
	utilities, such as Reg.exe, Regdmp.exe, and Regini.exe (you can configure these
	utilities to run automatically in a logon script). Regedit.exe is available on
	every Windows workstation, and you can use Regedit.exe to manually back up
	profiles.
	
	Each user who logs on to a computer has a separate set of profiles. If you are
	logged on to the computer as a particular user, you can find the profiles in the
	system registry at one of the following locations, depending on the operating
	system that you are using:
	
	- Microsoft Windows 95, Microsoft Windows 98, and Microsoft Windows Millennium
	  Edition (Me):
	
	  HKEY_CURRENT_USER\Software\Microsoft\Windows Messaging Subsystem\Profiles
	
	- Microsoft Windows NT or Microsoft Windows 2000:
	
	  HKEY_CURRENT_USER\Software\Microsoft\Windows NT\CurrentVersion\Windows
	  Messaging Subsystem\Profiles
	
	You can use Regedit.exe to export any profile that is listed, or even the entire
	Profiles key. To do this, click the key that you want to export, and then click
	Export Registry File on the Registry menu. If you choose a name with a .reg file
	name extension for the exported file, you can re-import the file into the
	registry by double-clicking the file in Windows Explorer.
	
	You can merge a profile from one computer or user back into the registry of
	another computer or user; in other words, you can take the .ost file from one
	computer and read that .ost file on another computer. To do this, restore the
	profile to a computer that is running the same operating system family as the
	computer from which the profile was taken, and place the .ost file in the same
	file path that was used on the original computer.
	
	NOTE: You can edit the .ost path in the profile if necessary. To do this, use
	Regedit.exe to visually scan the values and data in the profile to determine
	where you need to change the path.
	
	Another backup option is to create an additional profile that uses the same .ost
	file, but is configured only for offline use. Do not used this option as a
	substitute for backing up the original profile, but this option might be useful
	for more sophisticated mobile users who want to configure a backup for
	themselves. This option gives such users a "second chance" to log on to the .ost
	file offline after an attempt to connect to the server.
	
	NOTE: If you are using the Profile Creation Wizard, use the "Manually configure
	information services" option.
	
	To create an additional backup profile:
	
	1. Note the name and path of the currently configured .ost file in the profile
	  that you normally use; in Outlook 2000, click Services on the Tools menu, and
	  then open the properties of the Exchange Server service. Click the Advanced
	  tab, and then click Offline Folder File Settings to view the .ost file path
	  and name.
	
	2. Configure Outlook to prompt for the name of a profile when Outlook starts; in
	  Outlook 2000, click Options on the Tools menu, click Mail Services, and then
	  click "Prompt for a profile to be used".
	
	3. Create a new profile named Offline-Do Not Sync.
	
	4. Add Exchange Server as a service.
	
	5. In the General properties for the service, click "Manually control connection
	  state", and then click to select the "Choose connection type when starting"
	  check box. Set the default connection state to work offline.
	
	6. In the Advanced properties for the service, click Offline Folder File
	  Settings to open the .ost configuration dialog box. Locate the name of the
	  .ost file that is configured for the main profile, and select that .ost file.
	  Click OK, and make sure that the Enable Offline Use check box is selected.
	
	7. Start Outlook again, and then click the Offline-Do Not Sync profile. When you
	  are prompted to either connect or work offline, click Connect. You must
	  connect once by using the profile to add the encryption key to the profile.
	
	8. After Outlook starts, click Options on the Tools menu, click Mail Services,
	  and then disable any automatic synchronization options, including the option
	  to synchronize on exit. You may also want to click Services on the Tools
	  menu, and then click to clear the "Choose connection type when starting"
	  check box to configure the profile to always open Outlook in Offline mode.
	
	Recovering the Key from the Original Database:
	
	If no backup of the profile exists, you can still recover the .ost encryption key
	from the original database. Any .ost file that is configured for use with the
	original mailbox uses the same encryption key; therefore, you can configure
	profiles for offline use from a recovery server, and send those profiles to
	users for use on their own workstations. You do not have to make the original
	.ost file available to the recovery server, although you may do so if you want
	to. To recover the original .ost file encryption key from the original database
	from a recovery server:
	
	1. Determine the path and name of the .ost file on the user's computer. Although
	  this step is not essential, it makes the recovery process simpler for the
	  user. If you skip this step, the user must edit the path to the .ost file
	  that is stored in the profile by using Regedit.exe.
	
	2. Configure a profile that is similar to the profile that is described in the
	  "Backing Up the Profile Key" section of this article. Configure the profile
	  to point to an .ost file that is in the same path and has the same name as
	  the user's original .ost file.
	
	3. Use Regedit.exe to export this profile from the recovery server's registry,
	  and deliver the export file to the user. The user can then merge the file
	  into the registry of the user's computer, by either double-clicking the file
	  or typing the file name at a command prompt. Either you or the user may need
	  to configure the user's computer to prompt for a profile when Outlook starts
	  to make the profile available.
	
	4. After the user gains access to the original .ost file, you can add a .pst
	  file to the offline profile (by clicking New on the File menu, and then
	  clicking Personal Folders), and you can drag any information that the user
	  wants to preserve to the .pst file. The user can open the .pst file in an
	  online profile (by clicking Open on the File menu, and then clicking Personal
	  Folders). Carefully note the path in which the .pst file is created so that
	  you can easily find the .pst file again when you adding the .pst file to a
	  different profile. If you use the online profile, you can drag items from the
	  .pst file to the online information store.
	
	Inbox Rules
	-----------
	
	Users must manually edit all rules that copy or move items between folders after
	you reset an information store database. Rules reference underlying folder IDs,
	not just the folder display names. These IDs are not the same between different
	databases, even if the folder names are identical. The logic and syntax of each
	rule survives intact, but users must edit each rule to point to the correct
	folders. This issue occurs even if a user makes a backup of the rules before a
	database is reset.
	
	The Exmerge utility can copy rules from one database to another (if you set the
	Exmerge option to copy associated folder data), but most merged rules still
	require that each user manually edit the rules.
	
	Folder Permissions
	------------------
	
	When delegate permissions are granted, the name of the delegate is stored in the
	Exchange directory, but the permissions that are actually granted are stored in
	individual folders in the mailbox of the user who granted those delegate
	permissions. After you reset an information store, the names of previously
	defined delegates are still visible on the delegates page, but all of the
	permissions that were granted to delegates are lost.
	
	The Exmerge utility can restore all of the permissions that previously existed on
	all of the folders, regardless of the folder ID changes. When you copy
	permissions from one database to another by using the Exmerge utility, the
	permissions in the source database completely overwrite the permissions in the
	target database for every folder; any permissions that users might have recently
	configured in the new database are lost.
	
	You can easily copy folder permissions from one database or .pst file to another
	by using various means, including the use of a drag-and-drop procedure on
	folders in Outlook. The Exmerge utility is usually the best choice for restoring
	all folder permissions.
	
	Personal Forms and Custom Views
	-------------------------------
	
	By default, personal forms and custom views are not stored in specific folders,
	but are associated with the mailbox as a whole. Rules and permissions are always
	stored in specific folders; that is why you can use the recover associated
	folder data option in the Exmerge utility to recover rules and permissions.
	
	To force personal forms and custom views to be stored as associated folder data:
	
	- For personal forms, associate the form with a specific folder; open the
	  properties for a folder, and then click the Forms tab. Click Manage, and then
	  copy the form from a library to the folder.
	
	- For custom views, when you create a view, mark the view as "Can be used on
	  this folder", instead of "all folders".
	
	Users can also back up personal forms in advance by saving them as .oft (Outlook
	form template) files. Have the user open a form by pointing to Forms on the
	Tools menu, clicking "Design a Form", and then click Save As. Users can use the
	"User Template in File System" option in the Choose Form dialog box to gain
	access to forms that have been backed up. Users can re-imported forms into
	Outlook by opening a form, clicking Design This Form, and then re-publishing the
	form to the appropriate library. An Exchange administrator can also export and
	recover forms from the original information store database by using the same
	method.
	
	It is slightly more complicated to recover custom views from the original
	database. To back up or transport a custom view, you must generate a copy of the
	view for use in a single folder. You can do this in Outlook by clicking View,
	and then clicking Define Views to open the Define Views dialog box.
	
	NOTE: You cannot change the folder setting for a view after creation, except by
	using the Copy option.
	
	Then you must copy the entire folder to which the view is attached (not just the
	folder contents) to a .pst file. You can then add the .pst file to the user's
	profile, and copy the view again to restore it to the user's new mailbox.
	
	Users who create complex custom views may want to back up those custom views by
	associating copies of their views with a folder in a .pst file.
	
	Outlook Address Book Service
	----------------------------
	
	Most Outlook users have an Outlook Address Book service that is configured along
	with the Exchange Server service. Because of this, personal Contacts folders can
	be treated as part of the global address list to check names and auto-complete
	information. The link between this service and all Contacts folders is broken
	when you reset the information store. Users first notice this problem either
	because automatic name checking does not work, or because the auto-complete
	feature no longer finds names from Contacts before suggesting names from the
	global address list. To resolve this issue, the user must remove the service,
	and then add the service to the profile again.
	
	NOTE: The user cannot simply delete Contacts folders from the service properties;
	the user must delete and then create the entire service again.
	
	Instruct users to perform the following procedure to reset the Outlook Address
	Book service:
	
	1. Start Outlook, and then click Services on the Tools menu.
	
	2. Click the Outlook Address Book service, and then click Remove.
	
	3. Click Add, click Outlook Address Book under "Available information services",
	  and then click OK to add the Outlook Address Book service again. At this
	  point, if you examine the service properties, no Contacts folders are
	  associated with the service.
	
	4. Quit and log off from Outlook, and then start Outlook again.
	
	5. Examine the Outlook Address Book service properties to ensure that all of the
	  Contacts folders that you expect to be listed are listed (for most users,
	  only a single folder should be listed). If any expected folder is not listed,
	  open the properties of that folder, click the Outlook Address Book tab, and
	  then click the "Show this folder as an e-mail address book" check box. Quit
	  Outlook, and then start Outlook again.
	
	6. If you previously set Contacts folders to be searched before the global
	  address list is searched, click Services on the Tools menu, and then verify
	  that the search order on the Addresses tab is correct.
	
	Best Practices
	--------------
	
	- One way to restore all of the metadata after you reset an information store
	  is to put the original database back into production after you successfully
	  repair or recover the original database and there are no questions about the
	  database's viability. To do this, swap databases between a recovery server
	  and a production server, and then use the Exmerge utility against the reset
	  database (which is now running on the recovery server) to merge the reset
	  database's data back into the original database. Contact Microsoft Product
	  Support Services (PSS) if you want detailed information about how to swap
	  databases between a recovery server and a production server.
	
	
	  Be aware that if you swap the original database back in, metadata that is
	  associated with the new database is affected. The most troublesome problem
	  that might occur is that new .ost files that are created after the reset
	  might become obsolete. A third .ost file might be created. Although this new
	  .ost file shares the encryption key with the original .ost file, if you want
	  profiles to use the original .ost file, you must still manually reset
	  profiles to use the original .ost file.
	
	- Before a problem occurs, you may want to generate a list of very important
	  users (a VIP list) and define procedures to restore users on the list. You
	  can run multiple copies of the Exmerge utility at the same time, even on the
	  same computer; therefore, you can restore multiple groups of users in series
	  or in parallel as necessary.
	
	  NOTE: If you run multiple copies of the Exmerge utility on a single computer,
	  refer to the Exmerge utility documentation for information about redirecting
	  the Exmerge log file for each instance. The log file contains critical data
	  that you need to troubleshoot any problems that might occur during the
	  process.
	
	  You can also schedule the Exmerge utility to run regularly against specific
	  mailboxes and perform incremental backups of a mailbox's contents to a single
	  .pst file. Although this backup method might not be feasible for a large
	  number of users, if you perform this type of "brick" level backup, it can
	  help you restore data even more quickly for critical users or folders. Refer
	  to the Exmerge utility documentation for information about backup
	  scheduling.
	
	  Users who have defined delegate permissions (and their delegates) are often
	  good candidates for a VIP list, because users who have defined delegate
	  permissions are often executive users who have granted access to assistants.
	  You can use the following .csv file export header to quickly determine which
	  users have granted delegate permissions in your organization, and to whom
	  those delegate permissions have been granted:
	
	  Obj-Class,Display-Name,Public-Delegates,Public-Delegates-BL,Obj-Dist-Name
	
	  To use the preceding header, copy and paste the header to the first line of a
	  plain text file. Then use the Exchange Administrator program to export all of
	  the mailboxes by using the text file that you created as the export target.
	
	  If a user has delegated permissions to a mailbox, that user's object has a
	  Public-Delegates property. If someone has granted a user permissions to
	  another mailbox, that user has a Public-Delegates-BL property. Delegate
	  permissions are listed by distinguished name, not by display name. If it is
	  not obvious which user is referenced by a distinguished name, search the
	  Obj-Dist-Name column to make the correlation.
	
	  In Exchange 2000, you must search Active Directory to determine delegate
	  information. You can use the Ldifde.exe utility to simplify this search:
	
	  LDIFDE.EXE -F DELEGATES.TXT -D "DC=DOMAIN,DC=COM"
	  -L NAME,PUBLICDELEGATES,PUBLICDELEGATESBL
	  -R "(|(PUBLICDELEGATES=*)(PUBLICDELEGATESBL))"
	
	  NOTE: The preceding command is a single line, it is wrapped for readability.
	
	  The preceding command exports a list of all of the objects in the domain that
	  have assigned delegates or are an assigned delegate. The command ignores all
	  other objects. If the command returns no objects at all, assign delegate
	  permissions to a mailbox and try it again. If nothing is returned, there
	  might be a typographical error in the command, or the domain name might be
	  wrong.
	
	  NOTE: The Ldifde utility runs only on Microsoft Windows 2000. If you have a
	  Windows 2000-based computer, you can run the Ldifde utility against an
	  Exchange Server 5.5 computer on which LDAP has been enabled. This gives you
	  an Exchange 2000-style filtered list of those users who are participating in
	  delegation. Use a command that is similar to the following:
	
	  LDIFDE.EXE -F DELEGATES.TXT -S EXCHANGE55SERVER
	  -L DISPLAY-NAME,PUBLIC-DELEGATES,PUBLIC-DELEGATES-BL
	  -R "(|(PUBLIC-DELEGATES=*)(PUBLIC-DELEGATES-BL=*))"
	
	- When run against pre-Exchange 2000 servers, the list of mailboxes that the
	  Exmerge utility can work with is taken directly from the information store,
	  not from the directory. A mailbox entry is not created in the information
	  store until the owner logs on for the first time, or until a message is sent
	  to the owner. Send a message to all of the users on a server before you
	  attempt to re-import data by using the Exmerge utility. When ExMerge version
	  6 is run against an Exchange 2000 server, the list of mailboxes that the
	  ExMerge utility can work with is taken directly from the Active Directory and
	  not the Information Store.
	
	
	  You can use the message that you send to ensure that all of the mailboxes are
	  generated to inform users about the current situation and set the users'
	  expectations about recovery (make sure that you do not set expectations for
	  recovery too high). This message might include information about:
	
	   - What occurred, and why you chose to start the server with a blank
	     database.
	
	   - When to expect progress updates.
	
	   - Recovery efforts and time frames.
	
	   - How to check and reset delegate permissions.
	
	   - How to report problems and make special requests (such as requests to
	     restore personal forms).
	
	   - How to repair rules after they are restored.
	
	   - What not to do (for example, if you intend to restore rules, tell users
	     not to re-create them; if you intend to swap the original database back
	     into service, tell users that any changes that they make to rules, forms,
	     views and .ost files may be reversed after you recover the previous
	     database).
	
	   - How to reset the Outlook Address Book service.
	
	  A properly worded message after you reset an information store can greatly
	  reduce the work load for help desk resources and can help to prioritize your
	  recovery efforts.
	
	- You can use the Exmerge utility to export and import only the folders that
	  you specify; therefore, you can restore information in the order of that
	  information's importance. For example, the folders that are the most critical
	  to user productivity are often the Calendar, Contacts, Notes, and Tasks
	  folders. You can set the Exmerge utility to process only these folders on the
	  first pass, set Exmerge to restore the Inbox on the next pass, and then set
	  Exmerge to restore all of the other folders except the Deleted Items folder,
	  which can wait until the last step of the restoration process. You add very
	  little time to the overall length of the restoration process by restoring
	  data with this method.
	
	- It is important that you keep close watch on the information store
	  transaction log files when you restore information by using the Exmerge
	  utility. In essence, you are re-delivering all of the messages that are
	  restored, and this is reflected in the number of log files that are
	  generated. You can view the transaction log file location by using the
	  following command:
	
	  d:\exchsrvr\bin\perfwiz.exe -r
	
	  NOTE: Running Perfwiz.exe without the -r switch prompts you to shut down all
	  of the Exchange services before you can view the file locations.
	
	- Investigate the effects of an information store reset on add-on services in a
	  laboratory environment. For example, how does a reset affect the users of a
	  PocketPC calendar synchronization program? Do you need to do anything to
	  enable such users to continue to synchronize after a reset? Does a backup
	  utility that requires the use of an Exchange mailbox still function after you
	  reset the database?
	
	Additional query words: exch2kp2w
	
	======================================================================
	Keywords          : kberrmsg exc4 exc5 exc55 
	Technology        : kbExchangeSearch kbExchange500 kbExchange550 kbExchange400 kbZNotKeyword2 kbExchange2000Search kbExchange2000Serv
	Version           : :4.0,5.0,5.5
	Issue type        : kbinfo
	
	=============================================================================
	
