---
layout: page
title: "Q152960: XADM: Reassigning Site Roles after Removing the First Server"
permalink: /kb/152/Q152960/
---

## Q152960: XADM: Reassigning Site Roles after Removing the First Server

{% raw %}

	Article: Q152960
	Product(s): Microsoft Exchange
	Version(s): 4.0,5.0,5.5
	Operating System(s): 
	Keyword(s): kbusage exc4 exc5 exc55
	Last Modified: 17-JUL-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Exchange Server, versions 4.0, 5.0, 5.5 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	The first server installed into an Exchange site by default is assigned several
	site-wide roles. These roles include:
	
	- Routing calculation server
	
	- Site folder server
	
	- Default site folder replica server
	
	- Offline Address Book generation server
	
	As a best practice, these roles should be re-assigned before the server is
	removed from the site. This article explains how to re-assign these roles if the
	first server has already been deleted.
	
	When decommissioning an Exchange server, it is important to inventory and migrate
	all the data and services provided by that server. It is beyond the scope of
	this article to provide a comprehensive list of all services and data that may
	require migration, but some of the more common factors to consider are:
	
	- Mailboxes.
	
	- Public folder replicas, including organization forms.
	
	- Exchange connectors and services, including Key Management Server (KMS) and
	  external directory replication services.
	
	- Third party connectors or other services.
	
	- Connector or replication bridgehead roles.
	
	- Default public folder server role for other mailbox servers.
	
	- Active Directory Connector (ADC) endpoints.
	
	MORE INFORMATION
	================
	
	Changing the Routing Calculation Server
	---------------------------------------
	
	The routing calculation server is defined on the Site Addressing object for each
	site. If you fail to define a new server after deleting the routing calculation
	server, Exchange will automatically discover the problem and select another
	server, but this may take several hours or longer. In the meantime, routing
	information may become out of date.
	
	To change the Routing Calculation Server:
	
	1. Start Microsoft Exchange Administrator.
	
	2. Expand the Configuration object of the site, and then click to select the
	  Site Addressing object.
	
	3. On the General page, click to select a new Routing Calculation Server from
	  those available in the drop down list.
	
	If you have difficulty changing the Routing Calculation Server, please refer to
	the following Microsoft Knowledge Base article:
	
	  Q162012 XADM: Unable to Change the Routing Calculation Server
	
	Changing the Site Folder Server
	-------------------------------
	
	If the Site Folder Server is removed from the site, Exchange will automatically
	discover the problem and select another server, but this may take several hours
	or longer.
	
	The site folder server has responsibility for verifying the validity and
	existence of the Offline Address Book (OAB) and the Schedule+ Free Busy (F/B)
	folders.
	
	The OAB and F/B folders are implemented as public folders in each Exchange site.
	They are stored in the System Folders public folder hierarchy. They are not
	directly visible to Exchange users as public folders. Microsoft Outlook clients
	access these folders through features such as Free/Busy search and Offline
	Address Book download.
	
	There may be several other folders stored in the System Folders hierarchy,
	including the Organization Forms library and Events folders for servers with the
	Event Service installed. These other folders are not checked or managed during
	the site folder check.
	
	Each time that the Information Store service on the Site Folder Server is
	started, or once every 24 hours, a site folder check is done. The Site Folder
	Server removes invalid OAB and F/B folders or generates new site folders as
	necessary.
	
	As a best practice, the Site Folder Server should hold a replica of both the
	Offline Address Book and Free/Busy folders. This is not strictly required, but
	should be considered when deciding which server in the site should be designated
	as the new Site Folder Server.
	
	To designate a particular server as the Site Folder Server, perform the following
	steps. WARNING: If you use the raw mode of the Exchange Server Administrator
	program (admin /r) incorrectly, serious problems may occur that may require you
	to reinstall Microsoft Windows NT Server, Microsoft Exchange Server, or both.
	Microsoft cannot guarantee that problems that result from using raw mode
	incorrectly can be solved. Use raw mode at your own risk.
	
	1. Start Microsoft Exchange Administrator with the /r command line switch.
	  Admin.exe is in the Exchsrvr\Bin folder by default.
	
	2. Expand the Configuration object of the site, and then click to select the
	  "Information Store Site Configuration" object.
	
	3. On the File menu, click "Raw Properties".
	
	4. In the "Object Attributes" window, click to select "Site-Folder-Server".
	
	5. Click Editor.
	
	6. Replace the existing server name with another valid server name in the same
	  site. For example, if the current Site Folder Server is Server1 and you wish
	  to designate Server2, change
	
	  /o=Organization_Name/ou=Site_Name/cn=Configuration/cn=Servers/cn=SERVER1/cn=Microsoft
	  Public MDB
	
	  to
	
	  /o=Organization_Name/ou=Site_Name/cn=Configuration/cn=Servers/cn=SERVER2/cn=Microsoft
	  Public MDB
	
	7. Click OK to close the Edit dialog box, click Set, and then click OK to commit
	  the change.
	
	Changing the Location of Site Folder Replicas
	---------------------------------------------
	
	By default, replicas of the OAB and F/B folders are created only on the Site
	Folder Server. With regard to replication, site folders behave the same and are
	managed the same as any other public folder. Administrators can therefore create
	additional replicas as needed of these folders. As best practices:
	
	- Place replicas of Offline Address Book folders on servers close to the
	  network access points used by remote users who need to download Offline
	  Address Books.
	
	- Limit the number of replicas of the F/B folder to the minimum required for
	  reliable client access. The more copies of the F/B folder there are, the
	  longer it will take for replication to converge the information in all
	  replicas for accurate Free/Busy searches.
	
	If the only replica of the site folders was on a deleted server, then all
	existing OAB and F/B information was removed with the server. (NOTE: you may be
	able to recover the information if a backup of the public database on the
	deleted server still exists and you are willing to reinstall the deleted server
	into the Exchange site.)
	
	The following error may be seen if the only replica of a site folder has been
	lost:
	
	  The contents of this public folder are currently unavailable. Either the
	  Microsoft Exchange Server computer servicing this public folder is down or
	  the public folder has not been replicated to this site. See your
	  administrator.
	
	  Microsoft Exchange Server Information Store
	  ID no: 80004005-0507-00000000
	
	In this case, you will not be able to access the properties of the affected
	folders. This prevents you from accessing the Replicas properties and adding a
	replica to a different server in the site. To work around this problem:
	
	1. Start Exchange Administrator and connect to a server that should hold a
	  replica of a site folder.
	
	2. Click to select the Instances page on the properties of the "Public
	  Information Store" object for this server.
	
	3. Locate the site folders in the left pane of the Instances dialog box, and
	  then add each folder to the server.
	
	Repopulating the Site Folders with Data
	---------------------------------------
	
	Offline Address Book:
	
	To repopulate the Offline Address Book site folder, perform the following steps:
	
	1. Start the Microsoft Exchange Administrator program.
	
	2. Click to expand the Configuration object, click the "DS Site Configuration"
	  object, and then on the File menu click Properties.
	
	3. Click the "Offline Address Book" tab, and then click "Generate Offline
	  Address Book Now".
	
	NOTE: If an error occurs when generating the OAB, reselect the Offline Address
	Book Generation server, and try again. If errors still occur, please note the
	errors and refer to the Microsoft Knowledge Base for more information.
	
	Schedule+ Free Busy Information:
	
	The Schedule+ Free Busy Information site folder is automatically repopulated as
	users log on to their mailboxes and make Calendar changes.
	
	NOTE: Unless public folder affinities have been created with other sites, it will
	be necessary to replicate the F/B folder throughout your organization in order
	to allow clients from other site to view Free/Busy information from your site.
	
	Organization Forms
	------------------
	
	Although Organization Forms are not site folders, they are frequently lost when
	the first server in a site is removed. Just as with site folders, a replica of
	the Organization Forms library folder can be placed on another server using the
	Instances interface on a Public Information Store object in Exchange
	Administrator. But all forms previously in the library will be lost because the
	replica will be blank.
	
	For additional information about how to recover the forms in a library without
	having to reinstall the deleted server back into the site, click the article
	number below to view the article in the Microsoft Knowledge Base:
	
	  Q239760 Salvaging Organization Forms
	
	There should be only one Organization Forms library for a given language per
	Exchange organization. One site in the organization should host the library, and
	replicas should be dispersed to all other sites.
	
	As a best practice, place replicas of the Organization Forms library as close as
	possible to client mailboxes. If a mailbox server has a public folder database
	on it, a copy of the Organization Forms library should be replicated to that
	server.
	
	Destroying and Regenerating Site Folders
	----------------------------------------
	
	Do not regenerate site folders unless you have exhausted all other alternatives
	for recovering replicas of them, or unless you specifically wish to destroy the
	contents of the existing site folders.
	
	When an Exchange site is created, a Site Folder GUID is generated. The GUID is a
	16-byte sequence of hexadecimal characters generated by an algorithm that makes
	it very unlikely that any other Exchange site in the entire world will possess
	the same GUID. This GUID is used to name and identify the OAB and F/B folders.
	When a site folder check is performed, site folders that are based on the wrong
	GUID are destroyed.
	
	For Exchange 5.5, you will observe a subfolder of the OAB folder called OAB
	Version 2. This folder contains the Exchange 5.5 version of the OAB. The
	original OAB folder is used in Exchange 5.5 only for backward compatibility with
	servers running older versions of Exchange.
	
	The OAB Version 2 folder's name is not based on the Site Folder GUID, and the
	site folder check cannot remove duplicate or invalid OAB Version 2 folders. But,
	because the OAB Version 2 folder is a child of the original OAB folder,
	regenerating the site folders can destroy invalid copies of OAB version 2.
	
	If you are having problems with duplicate site folders, and the site folder check
	has not been able to correct them, resetting the site folder GUID is usually
	effective. Doing the following before resetting the GUID will make the process
	faster and more reliable:
	
	- Replicate the OAB, OAB Version 2 and F/B site folders to the site folder
	  server.
	
	- Remove all replicas of these folders from other servers in the organization.
	
	If you are unable to access the Replicas properties for the folders, use the
	Instances interface on the Public Information Store objects for each server to
	accomplish these tasks.
	
	It is possible that by confining all replicas to the Site Folder Server, a site
	folder check may then be successful without requiring a GUID reset.
	
	In a case where there are duplicate site folders, clients from some servers may
	have published their free/busy information to one of the folders, while clients
	from other servers have published their information to a different folder. In
	such cases, there will be temporary loss of some Free/Busy data from resolving
	the problem.
	
	The Guidgen utility can be used to generate a new GUID for the site.
	
	WARNING: If you change the site folder GUID, you must never restore previous
	backups of any public folder store in the entire Exchange organization. If you
	do so, you may cause duplicate site folders to be created, cause existing site
	folders to be destroyed, cause the site folder server's public database to stop
	replicating permanently, or cause other public stores in the site to be unable
	to accept replicas of site folders. Correcting such problems may require you to
	destroy and rebuild public folder stores on some or all servers in the entire
	Exchange organization.
	
	You cannot reset the GUID for only a single site folder. If you reset the GUID,
	all offline address books and Free/Busy Information for a single site will be
	deleted.
	
	To reset the site folder GUID and delete all offline address book and free/busy
	information in a site, perform the following steps:
	
	WARNING: If you use the raw mode of the Exchange Server Administrator program
	(admin /r) incorrectly, serious problems may occur that may require you to
	reinstall Microsoft Windows NT Server, Microsoft Exchange Server, or both.
	Microsoft cannot guarantee that problems that result from using raw mode
	incorrectly can be solved. Use raw mode at your own risk.
	
	1. Obtain a copy of the utility Guidgen.exe.
	
	  This utility is available in the Microsoft Developers Network under the
	  product samples. If you do not have access to this utility, contact Microsoft
	  Product Support Services. You do not have to run Guidgen on the Site Folder
	  Server or even on an Exchange server in your organization. Microsoft PSS can
	  remotely generate and send you a new GUID if necessary.
	
	2. Start the Guidgen.exe program, and then click to select Option 4, "Registry
	  Format".
	
	3. Click "New GUID".
	
	4. The new GUID number is displayed in the Result box. Copy or write down this
	  number.
	
	5. Start the Microsoft Exchange Administrator program in raw mode. Go to the
	  command line, change to the Exchsrvr\Bin directory, and then type "admin /r"
	  (without the quotation marks).
	
	6. Click to expand the Configuration object of the site you want to rebuild, and
	  then click to select the "Information Store Site Configuration" object.
	
	7. On the File menu, click "Raw Properties".
	
	8. In the Object Attributes window, scroll down, and then click
	  "Site-Folder-GUID".
	
	9. Click Remove.
	
	10. In the "Edit Value" box, replace the existing GUID number with the number
	  generated in step 4.
	
	  If you copy and paste the value generated by GUIDGEN, you may receive the
	  following error message:
	
	  Some of the characters in the clipboard are not valid for this entry.
	
	  Despite this error, the paste will succeed, with dash and brace characters
	  removed from the GUID. If you are manually typing in the GUID, do not enter
	  dash or brace characters.
	
	11. Click Set, and then make sure the Edit Value and Attribute Value are the
	  same.
	
	12. Click Apply, and then OK to close the dialog box.
	
	13. To force an immediate site folder rebuild, stop and start the Information
	  Store on the Site Folder Server. Otherwise, the folders will be rebuilt
	  within the next 24 hours.
	
	If there are multiple servers in the site, the Information Store Services should
	be restored on those servers also.
	
	After successful regeneration of site folders using GUIDGEN, the only replicas of
	the site folders will be on the site folder server. All other replicas
	throughout the organization will be destroyed as soon as public folder
	replication completes.
	
	How Site Folder Names Are Constructed
	-------------------------------------
	
	The OAB and F/B folder directory names are constructed in a standardized way
	using the Site Folder GUID. This allows the Site Folder Server to identify valid
	site folders. The display names of the folders do not include the numeric string
	at the end of the name. To see the actual directory name of a public folder,
	open the properties for the folder in Exchange System Administrator, and check
	the Directory Name attribute on the Advanced page.
	
	Site folder directory names are up to 64 characters in length. Up to the first 26
	characters are constructed from the organization and site names, and then 32
	more characters are constructed from the GUID. The last 6 characters of the name
	are always 000007 for the F/B folder and 000008 for the OAB folder. For example,
	an OAB folder might have a name like this:
	
	  EX:_O=ORGANIZATION_OU=SITE1FBDCBA2734480E0F47D5764AA2EA00F000008
	
	The first 12 bytes of the Site Folder GUID are reversed and appended to the stem
	of the name. Then the last 4 bytes of the GUID are reversed and appended, and
	then 000008 is added to the end of the name.
	
	If you experience problems with duplicate or mismatched site folders, it can be
	useful in troubleshooting to determine which folders are the "real" site
	folders. To construct the names manually, perform the following steps:
	
	WARNING: If you use the raw mode of the Exchange Server Administrator program
	(admin /r) incorrectly, serious problems may occur that may require you to
	reinstall Microsoft Windows NT Server, Microsoft Exchange Server, or both.
	Microsoft cannot guarantee that problems that result from using raw mode
	incorrectly can be solved. Use raw mode at your own risk.
	
	1. Start the Microsoft Exchange Administrator program with the /r command line
	  switch. Admin.exe is in the Exchsrvr\Bin folder by default.
	
	2. Expand the Configuration object of the site, and then click to select the
	  "Information Store Site Configuration" object.
	
	3. On the File menu, click "Raw Properties".
	
	4. In the "Object Attributes" window, click to select "Site-Folder-GUID".
	
	5. Copy the GUID to a text editor. In this example, the GUID is
	  64577DF4E0804473A2CBBD1F0FA02EAA.
	
	6. Separate the GUID into individual hexadecimal numbers as follows:
	
	64 57 7D F4 E0 80 44 73 A2 CB BD 1F           0F A0 2E AA
	
	7. Reverse the two sections of the GUID:
	
	64 57 7D F4 E0 80 44 73 A2 CB BD 1F           0F A0 2E AA   original
	1F BD CB A2 73 44 80 E0 F4 7D 57 64           AA 2E A0 0F   reversed
	
	8. Construct the numeric part of the site folder name by adding 000007 or 000008
	  to the resulting number from the last step.
	
	  In this example, the folder names are:
	
	  EX:_O=ORGANIZATION_OU=SITE1FBDCBA2734480E0F47D5764AA2EA00F000007 (F/B)
	  EX:_O=ORGANIZATION_OU=SITE1FBDCBA2734480E0F47D5764AA2EA00F000008 (OAB)
	
	
	Additional query words: 4.00 4.00A IES system create
	
	======================================================================
	Keywords          : kbusage exc4 exc5 exc55 
	Technology        : kbExchangeSearch kbExchange500 kbExchange550 kbExchange400 kbZNotKeyword2
	Version           : :4.0,5.0,5.5
	Issue type        : kbhowto
	
	=============================================================================
	

{% endraw %}
