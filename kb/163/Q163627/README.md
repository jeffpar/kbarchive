---
layout: page
title: "Q163627: XADM: How to Defrag an EDB File on a Non-Exchange Server"
permalink: /kb/163/Q163627/
---

## Q163627: XADM: How to Defrag an EDB File on a Non-Exchange Server

{% raw %}

	Article: Q163627
	Product(s): Microsoft Exchange
	Version(s): winnt:4.0,5.0
	Operating System(s): 
	Keyword(s): exc4 exc5
	Last Modified: 23-FEB-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Exchange Server, versions 4.0, 5.0 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	In certain cases it may be necessary to defragment a Microsoft Exchange Server
	database file offline. If there is not enough disk space on the server running
	Microsoft Exchange Server to do this, but there is enough disk space on another
	Windows NT Server that does not have Microsoft Exchange Server running on it,
	you can perform the defragmentation without having to install Microsoft Exchange
	Server. This article will explain how to do this.
	
	MORE INFORMATION
	================
	
	To perform a defrag on a Windows NT Server that does not have Microsoft Exchange
	Server running on it, follow these steps:
	
	1. Verify that there is enough hard disk space on the server where you want to
	  perform the defrag. There must be at least twice the amount of free hard disk
	  space as the the size of the database file. If the database file is 10G,
	  there must be at least 20G of free hard disk space.
	
	2. Create a blank directory on the non-Exchange server and copy the following
	  files to that directory:
	
	     Edb.dll                       - located in the exchsrvr\bin
	                                     directory
	     Edbutil.exe                   - also in the exchsrvr\bin directory
	     Priv.edb, Pub.edb, or Dir.edb - the database file needing
	                                     defragmentation
	
	3. From the new directory on the non-Exchange server, run the following
	  command:
	
	     EDBUTIL /D <path to the database file>
	
	  For example, if the directory where these files are located is C:\Defrag, and
	  you want to defrag the Priv.edb, use the following command:
	
	     EDBUTIL /D C:\DEFRAG\PRIV.EDB
	
	Additional query words:
	
	======================================================================
	Keywords          : exc4 exc5 
	Technology        : kbExchangeSearch kbExchange500 kbExchange400 kbZNotKeyword2
	Version           : winnt:4.0,5.0
	Issue type        : kbhowto
	
	=============================================================================
	

{% endraw %}
