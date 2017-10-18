---
layout: page
title: "Q160971: XADM: How to Export the Connections Container to a Text File"
permalink: kb/160/Q160971/
---

## Q160971: XADM: How to Export the Connections Container to a Text File

	Article: Q160971
	Product(s): Microsoft Exchange
	Version(s): winnt:4.0,5.0,5.5
	Operating System(s): 
	Keyword(s): kbtool kbusage
	Last Modified: 12-APR-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Exchange Server, versions 4.0, 5.0, 5.5 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	This article describes how to export the Connections container to a text file.
	Exporting the Connections container to a text file allows you to view its
	contents in a different format than that provided by the Raw Properties command
	in the Microsoft Exchange Administrator program.
	
	MORE INFORMATION
	================
	
	To export the Connections container to a text file, follow these steps:
	
	1. Create a new text file called Connect.txt in the root folder of drive C that
	  contains the following lines:
	
	     [Export]
	     DirectoryService=<server1>
	     HomeServer=<server2>
	     Basepoint=/o=ORG/ou=SITE/cn=configuration/cn=connections
	     ExportObject=All
	     InformationLevel=Full
	     RawMode=Yes
	     HiddenObjects=Yes
	     Subcontainers=Yes
	
	     [Import]
	     DirectoryService=<server1>
	     Basepoint=/o=ORG/ou=SITE/cn=configuration
	     Container=
	     InformationLevel=Full
	     OverwriteProperties=Yes
	     RawMode=Yes
	
	  where <server1> is the name of the computer on which the directory
	  service is running and <server2> is the name of the Microsoft Exchange
	  Server computer.
	
	2. Use the Header.exe program from the Microsoft Exchange Server Resource Kit to
	  create a comma-delimited text file called Connect.csv in the root folder of
	  drive C. The file should contain all the attributes from the Mailbox Gateway
	  object class.
	
	3. Type the following command at a command prompt, and then press ENTER:
	
	  c:\exchsrvr\bin\admin.exe /e c:\connect.csv /o c:\connect.txt
	
	NOTE: After you export the Connections container to the Connect.csv file, you can
	use the following command to import the contents of the Connect.csv file to the
	Connections container:
	
	  c:\exchsrvr\bin\admin.exe /i c:\connect.csv /o c:\connect.txt
	
	Because the directory contains most of the necessary configuration information
	for the connectors, you should not back up the Connections container by
	exporting it to a text file. Importing the text file at a later time is
	essentially the same as restoring the directory.
	
	Additional query words: schema x400 msmail site
	
	======================================================================
	Keywords          : kbtool kbusage 
	Technology        : kbExchangeSearch kbExchange500 kbExchange550 kbExchange400 kbZNotKeyword2
	Version           : winnt:4.0,5.0,5.5
	Issue type        : kbhowto
	
	=============================================================================
	
