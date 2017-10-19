---
layout: page
title: "Q192043: XADM: Cannot Get Properties of Public Folders After a Restore"
permalink: /kb/192/Q192043/
---

## Q192043: XADM: Cannot Get Properties of Public Folders After a Restore

	Article: Q192043
	Product(s): Microsoft Exchange
	Version(s): winnt:5.5
	Operating System(s): 
	Keyword(s): exc55
	Last Modified: 23-FEB-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Exchange Server, version 5.5 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	Folder properties are unavailable on some or all public folders after a
	restoration of an Exchange Server information store to a new Exchange Server
	Directory (Dir.edb). The folders are listed under the public folder hierarchy,
	and are also listed as resources under public folder resources for that Exchange
	Server computer.
	
	NOTE: To obtain a listing of public folder resources, select the Public Folder
	Resources object located under this Exchange Server's Public Information Store
	object in the Exchange Server Directory. The folders that are in this
	information store will then be listed in the right-hand pane when using the
	Exchange Server Administrator program.
	
	In addition to this, these folders are listed as instances on the Exchange
	Server's Instances tab of Public Information Store Properties page.
	
	You are still not able to retrieve properties of these folders after running a
	DS/IS consistency adjustment. When attempting to retrieve properties of a
	folder, you may receive the following error message:
	
	  The object cannot be found in the directory. This may be because
	  replication has not completed.
	
	  Microsoft Exchange Directory.
	  ID no: C1010aae
	
	The application log reports after running a DS/IS consistency adjustment:
	
	  Event ID: 7008
	  Type: Information
	  Source: MSExchangeIS Public
	  Category: IS/DS Interactions
	  Description: Created a public folder "PUBLIC FOLDER NAME" in the
	  directory service.
	
	CAUSE
	=====
	
	The public folders were previously configured to use a Recipients container as
	the public folder container. Because a new Directory (Dir.edb) was created, the
	public folder container is no longer available, and the public folder's
	directory object cannot be updated.
	
	WORKAROUND
	==========
	
	A container with the same Directory name as the previous public folder container
	must be created. To do so, follow these steps:
	
	1. On the File menu, click New Other, and click Recipients Container.
	
	2. Create the container with the same Directory name as the original public
	  folder container.
	
	  NOTE: You can make this container the public folder container if you want, but
	  it is not required to re-create the public folder's directory object. You
	  make a container the public folder container by completing the following
	  steps:
	
	   - Expand the Configuration object. Select the "Information Store Site
	     Configuration" object from the right-hand pane, and on the File menu,
	     click Properties.
	
	   - On the General Tab, click the Modify button, and choose the Recipients
	     Container you want to use.
	
	3. Run a DS/IS consistency adjustment by completing the steps below.
	
	IMPORTANT: Before continuing, refer to the following Knowledge Base article for
	additional information concerning the function and effects of running the DS/IS
	consistency adjuster.
	
	  Q182979 XADM: Function and Effects of Running the DS/IS Consistency Adjuster
	
	IMPORTANT: If not done carefully, consistency adjustment can affect public folder
	access for your entire organization. Be sure to fully understand the process and
	its ramifications before proceeding.
	
	a. In the Exchange Server Administrator program, select the server's name.
	
	b. On the File menu, click Properties.
	
	c. On the Advanced Tab, click the Consistency Adjuster button.
	
	d. Under the Public Information Store section, click the check box that says,
	  "Synchronize with the directory, and reset the home server value for public
	  folders homed in unknown sites. See help for more information." This will
	  synchronize public folders with the directory.
	
	e. Click the All Inconsistencies option.
	
	f. Click the Adjust button.
	
	MORE INFORMATION
	================
	
	If the public folder container is present with the correct directory name, and
	located in the same location in the hierarchy, the public folder's corresponding
	directory entry will be created when the DS/IS consistency adjustment is run.
	After the DS/IS consistency adjustment, select the public folder container. You
	should see the public folders listed on the right. If they are still not
	present, click the Hidden Recipients option on the View menu.
	
	
	Additional query words:
	
	======================================================================
	Keywords          : exc55 
	Technology        : kbExchangeSearch kbExchange550 kbZNotKeyword2
	Version           : winnt:5.5
	Issue type        : kbhowto
	
	=============================================================================
	
