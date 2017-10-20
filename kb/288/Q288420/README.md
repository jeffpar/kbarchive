---
layout: page
title: "Q288420: XADM: How to Re-create a Directory Object for a System Folder"
permalink: /kb/288/Q288420/
---

## Q288420: XADM: How to Re-create a Directory Object for a System Folder

{% raw %}

	Article: Q288420
	Product(s): Microsoft Exchange
	Version(s): 5.5
	Operating System(s): 
	Keyword(s): 
	Last Modified: 13-AUG-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Exchange Server, version 5.5 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	In some cases, you may want to manually re-create the Directory object for a
	public folder rather than running a DS/IS consistency adjuster. In this way, you
	will avoid the possibility of rehoming public folders in your environment.
	
	RESOLUTION
	==========
	
	WARNING: Using the raw mode of the Exchange Server Administrator program (admin
	/r) incorrectly can cause serious problems that may require you to reinstall
	Microsoft Windows NT Server and/or Microsoft Exchange Server. Microsoft cannot
	guarantee that problems resulting from the incorrect use of raw mode can be
	solved. Use raw mode at your own risk.
	
	To manually re-create the Directory object, follow these steps:
	
	1. Restore an old Directory database from backup to a recovery server in a lab
	  environment that has been disconnected from the production network. The old
	  Directory that you restore does not have to be a Directory database from a
	  server in the site where the folder was homed. The Dir.edb from a server in
	  any connected site will do, because every site should have a copy of the
	  Directory object for the folder.
	
	For additional information about configuring a recovery server for the Directory
	database, click the article number below to view the article in the Microsoft
	Knowledge Base:
	
	  Q177635 XADM: How to Set Up a Disaster Recovery Server for Dir.edb
	
	2. After the Directory Service has been restored and is running on the recovery
	  server, start the Exchange Administrator program in Raw mode (admin /r).
	
	  Highlight the Global Address List in the left pane. On the View menu, click
	  Hidden Recipients. Find the system folder in question, and then dump the raw
	  attributes of the folder. To dump the raw attributes of the folder, follow
	  these steps:
	
	  a. Highlight the object, while you press and hold down the CTRL key.
	
	  b. On the File menu, click Raw Properties.
	
	  c. Release the CTRL key after the properties window appears.
	
	  The raw attributes of this folder are dumped to a file called Admindmp.txt in
	  the Exchsrvr\bin directory.
	
	3. On the production Exchange Server computer, start the Exchange Administrator
	  in Raw Mode (admin /r).
	
	4. Highlight the Recipients container, click New Other on the File menu, and
	  then click Raw Object. Choose Public-Folder from the list of objects
	  presented to you.
	
	5. Open the Admindmp.txt file that you created in step 2. It is recommended that
	  you cut and paste the contents of this file into a Microsoft Word document,
	  rather than in Notepad.
	
	6. Under the "List attributes of type", click ALL. For each attribute listed
	  below, highlight the value for this attribute, paste the appropriate value
	  into the Edit Value field, and then click Set. For those objects with
	  multi-valued fields, you will choose ADD (the only option available) rather
	  than SET after you paste in the appropriate value(s). The values listed below
	  are provided as an example of what you will see in the Admindmp.txt file.
	
	  Insert the values listed in the text file (without the single quotes
	  surrounding each value) rather than the values listed below. The attributes
	  below are only listed as examples of what you will find in the Admindmp.txt
	  file:
	
	  Alias Name: Schedule+ Free Busy Information - NorthAmerica
	
	  Deliv-Ext-Cont-Types: (Choose ADD after pasting the value below)
	  2A864886F7140501
	
	  Delivery-Mechanism: 0
	
	  Directory Name:
	  EX:_O=MYORG_OU=NORTHAMERICA-1264689012646890126468901E398F5F000007
	
	  Display Name: Schedule+ Free Busy Information - NorthAmerica
	
	  E-mail Addresses: (Enter the following 3 values one at a time. Choose ADD
	  after pasting each value)
	  CCMAIL:Schedule+ Free Busy Information - NorthAmerica at NorthAmerica
	
	  SMTP:Schedule+FreeBusyInformation-NorthAmerica@Myorg.com
	
	  X400:c=US;a= ;p=Myorg;o=NorthAmerica;s=Schedule+ Free Busy Information -
	  NorthA;
	
	  Folder-Pathname: SCHEDULE+ FREE BUSY\EX:/o=Myorg/ou=NorthAmerica
	
	  Hide from AB: 1
	
	  Home-MDB:
	  /o=ML/ou=NorthAmerica/cn=Configuration/cn=Servers/cn=EPCC24/cn=Microsoft
	  Public MDB
	
	  Home-MTA:
	  /o=ML/ou=NorthAmerica/cn=Configuration/cn=Servers/cn=EPCC24/cn=Microsoft MTA
	
	  Object-Class: (Enter the following 3 values one at a time. Choose ADD after
	  pasting each value)
	
	  2A864886F71401030F
	
	  2A864886F71401032E
	
	  550600
	
	7. Click Apply, make sure that all fields that you edited held their values, and
	  then click OK.
	
	After the directory entry has been created, you should be able to fully access
	the properties of the folder in the Exchange Administrator program.
	
	
	Additional query words:
	
	======================================================================
	Keywords          :  
	Technology        : kbExchangeSearch kbExchange550 kbZNotKeyword2
	Version           : :5.5
	Issue type        : kbprb
	
	=============================================================================
	

{% endraw %}
