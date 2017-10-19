---
layout: page
title: "Q185010: XADM: How to Rehome Public Folders"
permalink: /kb/185/Q185010/
---

## Q185010: XADM: How to Rehome Public Folders

	Article: Q185010
	Product(s): Microsoft Exchange
	Version(s): 4.0,5.0,5.5
	Operating System(s): 
	Keyword(s): exc4 exc5 exc55
	Last Modified: 06-AUG-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Exchange Server, versions 4.0, 5.0, 5.5 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	When public folders are rehomed, perform the steps below to recover the stranded
	data.
	
	The standard method is to move the information in the public folder to a personal
	folder file, delete the public folder, and let the deletion replicate throughout
	the organization, then recreate the public folder on the correct home server,
	and move the information from the personal folder file to the public folder.
	
	Public folders can also be rehomed using the Resource Kit utility Pfadmin version
	3.0. This utility is located in the BackOffice Resource Kit 3.0, and is also
	available from Microsoft Product Support Services.
	
	MORE INFORMATION
	================
	
	To rehome the public folders, perform the following steps:
	
	1. If the home server locations cannot be determined, install Exchange Server on
	  another server with the Pub.edb file that was backed up before the rehoming
	  occurred. Then manually check the home server of the public folders. You can
	  also use the Pfinfo utility to list the permissions and the home server
	  location on the temporary server.
	
	NOTE: If you install the Exchange Server on the same network with the same
	organization and site name, make sure you do not select the "Join an existing
	site" option, instead, select the "Create a new site" option. If the site is
	joined, the mailboxes move to the new server. To set up this server, perform the
	following steps:
	
	  a. Install a server in the domain as a backup domain controller (BDC).
	
	  b. Disconnect the computer from the network, and promote it to a primary
	     domain controller (PDC).
	
	  c. Change the Computer name, and install Exchange Server with the same
	     organization and site name. Use the same service account and password.
	
	2. From the Exchange Server computer where the public folders have rehomed, go
	  to the following subfolder:
	
	  Configuration\Servers\<Servername>\Public Information
	  Store\File\Properties\Instances
	
	  Move the public folders from the left to the right side. This enables File,
	  Properties on the rehomed public folders.
	
	3. For each public folder that you want to rehome, type the following command at
	  a command prompt, and press ENTER:
	
	  pfadmin <profile> rehome <folder
	  path><A0><site>\<server>
	
	  where <profile> is a user profile that is assigned the Service Account
	  Admin role on the source and destination servers, <folder path> is the
	  path of the public folder, <site> is the name of the new home site, and
	  <server> is the name of the new home server. Note that the Yes option
	  specifies that subfolders below the public folder also be rehomed. If you do
	  not want the subfolders to be rehomed, use the No option instead.
	
	4. After all the public folders are rehomed to the original servers, allow
	  enough time for replication to complete to the destination servers. The
	  rehoming must be done to the previous home server. The data is still
	  available on the previous home server. After replication occurs, the Pub.edb
	  file on the destination server has the updated home server but the Dir.edb
	  file does not have the updated information. If the public folder is rehomed
	  to the wrong server, placing a replica of the public folder on the server
	  with the "ghosted" data enables the data to be replicated back to the newly
	  homed server.
	
	5. On every server where a public folder is rehomed, DS/IS Consistency
	  Adjustment must be run to populate the Dir.edb file with the updated home
	  server name.
	
	Reason
	------
	
	The data still remains on the original home of the public folder. By rehoming the
	public folder back to that location, the client can see the data, even before
	DS/IS is run on the destination server. By using Pfadmin version 3.0, the
	permissions (access control list [ACL]) are preserved. If the public folder is
	rehomed but the data is not visible, then either the data was deleted or the
	public folder was rehomed to the wrong server.
	
	By going to the destination server and running "PFADMIN" (without the quotation
	marks) from that server, the public folder can be rehomed to another destination
	server. Or if the public folder is rehomed to the wrong server, placing a
	replica of the public folder on the server with the "ghosted" data enables the
	data to be replicated back to the newly homed server.
	
	Pfinfo can also be used to import any permissions that may be lost during the
	accidental public folder rehoming.
	
	For additional information, please see the following article in the Microsoft
	Knowledge Base:
	
	  Q178927 XADM: How to Rehome Public Folders in Exchange
	
	
	Additional query words: pub edb dir
	
	======================================================================
	Keywords          : exc4 exc5 exc55 
	Technology        : kbExchangeSearch kbExchange500 kbExchange550 kbExchange400 kbZNotKeyword2
	Version           : :4.0,5.0,5.5
	Issue type        : kbhowto
	
	=============================================================================
	
