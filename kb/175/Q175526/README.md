---
layout: page
title: "Q175526: SMS: Modifying the Default 'User Information' MIF Entry"
permalink: /kb/175/Q175526/
---

## Q175526: SMS: Modifying the Default 'User Information' MIF Entry

{% raw %}

	Article: Q175526
	Product(s): Microsoft Systems Management Server
	Version(s): winnt:1.2
	Operating System(s): 
	Keyword(s): kbInventory smsinv
	Last Modified: 25-JUL-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Systems Management Server version 1.2 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	You may find it necessary to modify the default 'User Information' MIF Entry
	form that is supplied with Systems Management Server. This form is stored in the
	Uinfo.xnf file and can be modified using the Systems Management Server MIF Form
	Generator application, which is supplied with Systems Management Server.
	
	Because this file is part of a normal Systems Management Server client
	installation, modifying the existing form instead of simply creating a new form
	keeps you from continually redistributing a custom form after new Systems
	Management Server clients are installed.
	
	Ideally, this procedure should be accomplished prior to deploying Systems
	Management Server in a production environment. If this is done after the Systems
	Management Server client has been installed on users' workstations, several
	additional steps are required to ensure that it is done properly.
	
	MORE INFORMATION
	================
	
	NOTE: Applying Systems Management Server service packs will overwrite the
	modified files. Save a backup copy of the changes and manually update the files
	after applying the latest service pack.
	
	The master copy of the Uinfo.xnf file is stored in the following directory:
	
	  \SMS\Site.Srv\Maincfg.box\Client.src\X86.bin\00000409
	
	Microsoft recommends that you modify a copy of this file, rather than the file in
	this location. After you create and save the final version of the form, place it
	in this directory.
	
	The following steps show the best procedure for modifying this file and
	distributing it to your Systems Management Server clients:
	
	Customizing the Form
	--------------------
	
	1. Copy the Uinfo.xnf file from the directory noted in the previous section to a
	  working directory.
	
	2. Start the Systems Management Server MIF Form Generator and open the Uinfo.xnf
	  file or create a new one.
	
	3. Enter or modify the Form Name.
	
	  NOTE: If the Systems Management Server client has already been deployed in the
	  network environment, and users have already filled out the default User
	  Information form, then do not use User Information as the Form Name. Use User
	  Data or Client Information or something similar instead. Systems Management
	  Server uses the form name to define the group class and SQL tables in the
	  Systems Management Server database.
	
	4. Configure the rest of the MIF form as needed.
	
	  NOTE: Consulting with others is an excellent idea to help determine what
	  information is going to be requested from the users. Planning what is going
	  to be contained in the form will prevent users from having to fill out the
	  form more than once.
	
	5. Save the MIF form as Uinfo.xnf in the working directory.
	
	For more information on creating custom MIF forms, see Appendix B of the "Systems
	Management Server Administrator's Guide" for Systems Management Server version
	1.2.
	
	Testing the MIF Form on a Client
	--------------------------------
	
	Ideally, the new form should be tested in a test environment with a test
	installation of Systems Management Server.
	
	1. Delete the Uinfo.mif and Uinfo.sev files from the \Ms\Sms\Noidmifs directory
	  of the Systems Management Server client.
	
	2. Manually copy the new form (Uinfo.xnf) to the \Ms\Sms\Bin directory of the
	  Systems Management Server client.
	
	3. Start the MIF Entry application and view the form. If changes are necessary,
	  go back to the "Customizing the Form" procedure in this article and modify
	  until it is defined the way you want.
	
	4. Repeat Step 1 to delete the files.
	
	NOTE: If Systems Management Server inventory is taken after the MIF form is
	filled out, it will be written into the Systems Management Server database.
	Therefore, perform Step 1 (in Testing the MIF Form on a Client) to ensure that
	the group class matching the form name (that is, User Information) is not
	defined in the Systems Management Server database until the final version of the
	form is determined.
	
	Distributing the Updated Form
	-----------------------------
	
	Copy the updated Uinfo.xnf file to the following directory on each Systems
	Management Server site server:
	
	  \SMS\Site.srv\Maincfg.box\Client.src\X86.bin\00000409
	
	If additional sites are added to the Systems Management Server hierarchy, be sure
	to copy the custom MIF form to this directory on the new site servers. This will
	ensure that client inventory that is passed up the Systems Management Server
	hierarchy will not be rejected by the upper-level sites.
	
	After the Systems Management Server Maintenance Manager service has distributed
	the file to all the Systems Management Server logon servers managed by the site,
	any new Systems Management Server client that is installed will receive the
	updated form automatically.
	
	Viewing the New MIF Form Data
	-----------------------------
	
	After a Systems Management Server client has filled out the MIF Entry form and
	has been subsequently inventoried by running Smsls or Runsms utility, the new
	MIF Entry data can be viewed with the Systems Management Server Administrator
	utility. The following are some reasons why the new group might not appear under
	the Systems Management Server client's Personal Computer Properties.
	
	- To display a new group class for the first time, the Systems Management
	  Server Administrator must be exited and restarted.
	
	- It can take several minutes for a client's inventory to be updated in the
	  Systems Management Server database.
	
	- The client's inventory was rejected as being corrupted. See the 'Deleting the
	  Group Class' section (later in this document) to see if this is the case and
	  what needs to be done to correct it.
	
	Additional Steps for Existing Systems Management Server Clients
	---------------------------------------------------------------
	
	If the old form has been filled out and inventoried by any users in an existing
	Systems Management Server environment, you must remove any existing Uinfo.mif
	and Uinfo.sev files prior to distributing the new Uinfo.xnf file. This can be
	accomplished by creating a Systems Management Server Workstation package that
	calls a batch file which contains these commands:
	
	  REM Look for the Systems Management Server Client directory on the C: drive
	  REM If it isn't found, look on the D: drive
	  IF NOT EXIST C:\MS\SMS\BIN\UINFO.XNF goto D_DRIVE
	    DEL C:\MS\SMS\BIN\UINFO.XNF
	    DEL C:\MS\SMS\NOIDMIFS\UINFO.MIF
	    DEL C:\MS\SMS\NOIDMIFS\UINFO.SEV
	    XCOPY UINFO.XNF C:\MS\SMS\BIN
	    goto END
	
	  :D_DRIVE
	  IF NOT EXIST D:\MS\SMS\BIN\UINFO.XNF goto NO_CLIENT
	    DEL D:\MS\SMS\BIN\UINFO.XNF
	    DEL D:\MS\SMS\NOIDMIFS\UINFO.MIF
	    DEL D:\MS\SMS\NOIDMIFS\UINFO.SEV
	    XCOPY UINFO.XNF D:\MS\SMS\BIN
	    goto END
	
	  :NO_CLIENT
	  echo SMS Client Directory Not Found
	
	  :END
	
	In the preceding example, the batch file could be extended to look for the
	Systems Management Server client on other drive partitions. This same
	functionality could also be performed using a Systems Management Server
	Installer application.
	
	Deleting the Group Class
	------------------------
	
	The preceding steps should not be necessary if the procedures documented earlier
	are followed as recommended. However, if a new form name was not used, as
	recommended in the previous steps, it might be necessary to delete the group
	class created by an earlier version of the MIF form.
	
	Any inventory taken from Systems Management Server clients that have filled out
	the new form will be rejected as being corrupted if the form name used is
	already defined in the Systems Management Server database and has a different
	format.
	
	The MIFs that are rejected by the Dataloader service are placed in the following
	directory:
	
	  \SMS\Site.srv\Dataload.box\Deltamif.col\BadMifs
	
	To prevent the client inventory from being rejected, do the following:
	
	WARNING: Deleting a group class from the Systems Management Server database will
	result in the complete loss of all inventory stored by the corresponding tables
	in the Systems Management Server database. In other words, if the "User
	Information" group class is deleted, all Systems Management Server clients that
	previously showed the "User Information" group in their Personal Computer
	Properties will no longer show this group. In addition, deleting a group class
	will probably result in RESYNC jobs being created in order to retrieve full
	inventory information from Systems Management Server clients.
	
	1. Start the Systems Management Server Database Manager utility and log on to
	  SQL server.
	
	2. On the Tools menu, click Delete Group Classes.
	
	3. Select the Personal Computer architecture and then click OK.
	
	4. In the Defined Group Classes list, see if "User Information" is defined. If
	  "User Information" is defined as a group class, then at least one Systems
	  Management Server client has filled out the original form and passed it up
	  with their Systems Management Server inventory.
	
	5. Select User Information, click OK, and then answer Yes to verify the delete
	  action.
	
	6. Quit the Systems Management Server Database Manager utility.
	
	7. Start the Systems Management Server Service Manager utility.
	
	8. Stop and restart the Systems Management Server Executive service running on
	  the Systems Management Server site server. This will flush the Systems
	  Management Server Dataloader's cache, which contains an image of the
	  structure of the Systems Management Server database.
	
	When the next full client inventory is reported, the new User Information group
	will be created with the corresponding entries.
	
	After deleting the old group class, the Dataloader may be able to reprocess the
	MIFs that it previously found to be corrupted. To do this, move the MIF files
	located in the \BadMifs directory into the \Deltamif.col directory. Do not move
	MIF files which have a date and/or time stamp earlier than the date changes to
	the MIF Entry form were made. These were probably marked as corrupted for a
	different reason.
	
	Additional query words: prodsms custom mifs
	
	======================================================================
	Keywords          : kbInventory smsinv 
	Technology        : kbSMSSearch kbSMS120
	Version           : winnt:1.2
	Issue type        : kbinfo
	
	=============================================================================
	

{% endraw %}
