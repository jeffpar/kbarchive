---
layout: page
title: "Q122200: Err Msg: The Remoteboot Service Service Returned..."
permalink: /kb/122/Q122200/
---

## Q122200: Err Msg: The Remoteboot Service Service Returned...

{% raw %}

	Article: Q122200
	Product(s): Microsoft Windows NT
	Version(s): 
	Operating System(s): 
	Keyword(s): 
	Last Modified: 08-AUG-2001
	
	3.50
	
	WINDOWS
	
	kbtool
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Server versions 3.5, 3.51, 4.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you attempt to start the Windows NT Server version 3.5 Remoteboot service
	from the Services portion of Control Panel, the following error message may
	appear:
	
	  The Remoteboot Service service returned service specific error 2612
	
	When you attempt to start the Remoteboot service from a command line with the NET
	START REMOTEBOOT command, the following error message appears:
	
	  A service specific error occurred: 2612
	
	In addition, the following event messages appear in Event Viewer:
	
	  Event ID: 5766, Source: RemoteBoot, Type: Error Description: Service failed
	  to initialize from its database. The database may be missing or corrupted.
	  Service will attempt restoring the database from the backup.
	
	  Event ID: 5767, Source: RemoteBoot, Type: Error Description: Service failed to
	  restore its database from the backup. Service will not start.
	
	  Event ID: 7024, Source: Service Control Manager, Type: Error Description: The
	  Remoteboot Service service terminated with service-specific error 2612.
	
	CAUSE
	=====
	
	This problem occurs because the MDB extension files in the server's
	%SystemRoot%\RPL directory and in the %SystemRoot%\RPL\Backup directory are
	corrupt, read-only, or non-existent.
	
	RESOLUTION
	==========
	
	To enable the Remoteboot service, use the following procedure:
	
	1. Make sure that the MDB extension files are not marked read-only.
	
	2. Assuming that SYSTEM.MDB and RPLSVC.MDB are located in the %SystemRoot%\RPL
	  and %SystemRoot%\RPL\Backup directories and are not marked read-only, the
	  files are probably corrupt. If so, either delete or rename the *.MDB files.
	
	3. Copy the MDB extension files from the CLIENTS\RPL directory on the Windows NT
	  Server version 3.5 Installation CD-ROM. Make sure to remove the read-only
	  attributes after copying the files.
	
	4. Restart the Remoteboot service.
	
	5. Backup the Remoteboot database by choosing BackupDatabase from the Configure
	  menu of Remoteboot Manager.
	
	Additional query words: rpl prodnt
	======================================================================
	Keywords          :  
	Technology        : kbWinNTsearch kbWinNT351search kbWinNT350search kbWinNT400search kbWinNTSsearch kbWinNTS400search kbWinNTS400 kbWinNTS351 kbWinNTS350 kbWinNTS351search kbWinNTS350search
	
	=============================================================================
	

{% endraw %}
