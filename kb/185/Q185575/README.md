---
layout: page
title: "Q185575: XADM: Home Server Attribute Does Not Work In Mailbox Template"
permalink: /kb/185/Q185575/
---

## Q185575: XADM: Home Server Attribute Does Not Work In Mailbox Template

{% raw %}

	Article: Q185575
	Product(s): Microsoft Exchange
	Version(s): WINDOWS:4.0,5.0,5.5
	Operating System(s): 
	Keyword(s): 
	Last Modified: 12-APR-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Exchange Server, versions 4.0, 5.0, 5.5 
	-------------------------------------------------------------------------------
	
	
	SYMPTOMS
	========
	
	When you add the Home-MDB list-box value to the mailbox details template on a
	computer running Exchange Server, the field appears blank on the Exchange Client
	computer.
	
	The Home-MDB value is added when it is necessary for users to be able to
	determine another user's mailbox home server from their Exchange Client's
	address book.
	
	Mailbox detail templates can be edited in the Exchange Server Administrator
	program to add to or remove the pages and properties displayed when a client
	accesses user properties in the Global Address List.
	
	WORKAROUND
	==========
	
	To resolve this problem, perform the steps in any of the following three
	workarounds:
	
	- From the client computer, access the properties of the Outlook or Inbox icon
	  on your desktop, or click the Mail icon in Control Panel. The properties of
	  these icons will bring you to the MAPI service configuration dialog window.
	  In this window, perform the following steps:
	
	  1. Choose Show Profiles, and then click Add to create a new profile.
	
	  2. Choose Manually Configure Information Services and add Microsoft Exchange
	     Server as a service.
	
	  3. Choose the Exchange Server service properties, and type in the name of any
	     Exchange Server computer in the site and the Name or Alias of the user
	     whose home server you wish to determine.
	
	  4. Choose Check Names. The Exchange Server name will resolve to the user's
	     home server.
	
	  5. Close all windows to prevent saving of the new profile.
	
	- Fill in a Custom Attribute field with the Home Server value, and add this
	  attribute to your mailbox details template. The information can be created in
	  bulk with the Export/Import feature in the Exchange Server Administrator
	  program by performing the following steps:
	
	  1. Export mailboxes to a .csv (Comma Separated Values) file from the Exchange
	     Administrator's Tools/Directory Export dialog.
	
	  2. Open the file in Microsoft Excel and add an Extension-Attribute-<N>
	     column, where <N> is the number of the custom attribute you have
	     selected to hold Home-Server information.
	
	     NOTE: If you rename the Custom Attribute field, some versions of the
	     Exchange Administrator program may not be able to handle the field under
	     its new name or as Custom Attribute <N> in an export file. Using the
	     underlying directory name of the attribute (Extension-
	     Attribute-<N>) will avoid this problem.
	
	  3. Copy and paste the Home-Server column into the Extension-Attribute-
	     <N> column.
	
	  4. Save the file as a .csv file, and then import it in the Exchange
	     Administrator's Tools/Directory Import dialog to update your mailboxes
	     with the new attribute.
	
	     NOTE: Importing this file will cause each mailbox to replicate to each
	     server in your site and to sites which you have configured directory
	     replication. Therefore, you should avoid doing this during peak usage
	     hours.
	
	  5. Alter your mailbox details template as desired to display this field.
	
	  Keep in mind that this workaround requires that you decide on a procedure to
	  add or change the attribute whenever you add or move users. These fields will
	  never update automatically.
	
	- If you wish to have Home Server information available outside of the Exchange
	  Server Administrator program for helpdesk or other administrative personnel,
	  you can automate the creation of an export file with the appropriate
	  information as follows:
	
	  1. Create a .csv header file with the fields you wish to export.
	
	     NOTE: A .csv header is created as a simple plain text file, with each field
	     separated by a comma. For example, the following header:
	
	     Obj-Class,Alias Name,Display Name,Home-Server,Issue warning storage
	     limit,Prohibit send storage limit,DXA-Task
	
	
	     shows you home servers and storage limits. The DXA-Task is valid only in
	     Exchange Server 5.5 and corresponds to the Prohibit Send and Receive
	     limit, which is new to Exchange Server 5.5.
	
	  2. Use the header.exe utility (available in the BackOffice Resource Kit) to
	     see a list of all fields available for an object type. By default, the
	     Exchange Administrator program exports only common and required fields. By
	     exporting to your custom header file, you can obtain other fields of
	     interest.
	
	  3. Export mailboxes to this header file. This can be done in the Exchange
	     Server Administrator program through Tools/Directory Export or from a
	     command line similar to the following:
	
	  <exchsrvr>\bin\admin /e myheader.csv
	
	     After running the export, the file will look similar to the following:
	
	     Obj-Class,Alias Name,Display Name,Home-Server,Issue warning storage
	     limit,Prohibit send storage limit,DXA-Task
	     Mailbox,KirstenC,Kirsten Carver,SERVER1,,,
	     Mailbox,DavidC,David Carver,SERVER2,10000,20000,40000
	
	
	     The first user in the example is homed on SERVER1 and has no limits set.
	     The second user is on SERVER2 and has all limits set.
	
	     Each time you export data to a header file, all the contents of the file
	     except for the header line are deleted prior to export. Thus you can
	     export repeatedly to the same file to update information in it.
	
	  4. If desired, automate and schedule the creation and distribution of this
	     file using a command line export and a scheduling utility such as the AT
	     command in Windows NT. A batch file similar to the following can be
	     scheduled to run periodically:
	
	           <exchsrvr>\bin\admin /e myheader.csv
	           copy myheader.csv \\SERVER\DIRECTORY
	      
	
	     The file can be loaded in any text editor or in Microsoft Excel, or it can
	     be easily searched by helpdesk personnel using a command similar to the
	     following:
	
	  FIND /I "<string>" textfile.csv
	
	     where <string> is the alias, the display name, or a fragment of any
	     line in the file.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in Exchange Server versions 4.0,
	5.0 and 5.5. We are researching this problem and will post additional
	information here in the Microsoft Knowledge Base as it becomes available.
	
	======================================================================
	Keywords          :  
	Technology        : kbExchangeSearch kbExchange500 kbExchange550 kbExchange400 kbZNotKeyword2
	Version           : WINDOWS:4.0,5.0,5.5
	Issue type        : kbbug
	Solution Type     : kbpending
	
	=============================================================================
	

{% endraw %}
