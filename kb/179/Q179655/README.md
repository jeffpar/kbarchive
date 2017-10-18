---
layout: page
title: "Q179655: XADM: How to Export All Users on a Particular Server"
permalink: kb/179/Q179655/
---

## Q179655: XADM: How to Export All Users on a Particular Server

	Article: Q179655
	Product(s): Microsoft Exchange
	Version(s): WINDOWS:4.0,5.0,5.5
	Operating System(s): 
	Keyword(s): kbusage
	Last Modified: 27-MAR-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Exchange Server, versions 4.0, 5.0, 5.5 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	This article describes how to export recipients on a per server basis, using the
	export functionality of the Microsoft Exchange Administrator program.
	
	MORE INFORMATION
	================
	
	To export recipients as described in Summary, do the following:
	
	1. Create an Export.ini file with the following contents:
	
	     [export]
	     HomeServer=<server name>
	     Basepoint=/o=<org>/ou=<site>/cn=recipients
	     ExportObject=recipients
	
	  Where <server name> is the name of the server from which you wish to
	  export the recipients. <org> and <site> are the organization and
	  site names as seen in the Microsoft Exchange Administrator program's
	  containers view.
	
	2. Run the following command from a Windows NT VDM (command prompt), or place it
	  in the properties of an icon:
	
	  admin /e <path>\export.csv /d <server name> /o
	  <path>\mygal.ini
	
	  In this case, <path> is the complete path to the file including the
	  drive letter and subdirectory. <server name> is the name of the server
	  from which the directory will be exported.
	
	  This will create a comma delimited file that contains the all mailboxes
	  created on the specified server.
	
	3. To export all the users on a server, using the Administrator program's
	  graphical user interface, select Directory Export from the Tools menu.
	
	4. Select the required server in the MS Exchange Server and Home server list
	  boxes.
	
	5. Specify the file to export the data to, and click the Export button.
	======================================================================
	Keywords          : kbusage 
	Technology        : kbExchangeSearch kbExchange500 kbExchange550 kbExchange400 kbZNotKeyword2
	Version           : WINDOWS:4.0,5.0,5.5
	Issue type        : kbhowto
	
	=============================================================================
	
