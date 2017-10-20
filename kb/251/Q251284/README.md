---
layout: page
title: "Q251284: Cluster Server Cannot Start If the Quorum Disk Space Is Full"
permalink: /kb/251/Q251284/
---

## Q251284: Cluster Server Cannot Start If the Quorum Disk Space Is Full

{% raw %}

	Article: Q251284
	Product(s): Microsoft Windows NT
	Version(s): winnt:4.0,4.0 SP4,4.0 SP5,4.0 SP6,4.0 SP6a
	Operating System(s): 
	Keyword(s): kbnetwork kbtool
	Last Modified: 06-AUG-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Server, Enterprise Edition versions 4.0, 4.0 SP4, 4.0 SP5, 4.0 SP6, 4.0 SP6a 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	You may be unable to start Windows Clustering. Also, any combination of the
	following event messages may be listed in the System Event log:
	
	- Event 1021: There is insufficient disk space remaining on the Quorum device.
	  Please free up some space on the Quorum device. If there is no space on the
	  disk for the Quorum Log files, then changes to the cluster registry will be
	  prevented.
	
	- Event 1080: Microsoft Cluster Server could not write file <file>. The
	  disk may be low on disk space or some other serious condition exists.
	
	- Event 1016: Microsoft Cluster Server failed to obtain a checkpoint from the
	  cluster database for log file <file>.
	
	- Event 1000: Microsoft Cluster Server suffered an unexpected fatal error at
	  line <line> of source module <module>. The error code was: 112.
	
	- Event 1022: There is insufficient space left on the Quorum device. Microsoft
	  Cluster Server cannot start.
	
	- Event 1009: Microsoft Cluster Server could not join an existing cluster and
	  could not form a new cluster. Microsoft Cluster Server has terminated.
	
	- Event 1063: Microsoft Cluster Server was successfully stopped.
	
	CAUSE
	=====
	
	This behavior can occur if the disk that contains the Quorum log file does not
	have any free disk space.
	
	RESOLUTION
	==========
	
	To resolve this issue, follow these steps:
	
	1. Turn off one of the nodes, for example, Node1.
	
	2. On the remaining node, for example, Node2, in Control Panel, select Devices
	  and set the startup value of the ClusDisk device to "disabled."
	
	3. On Node2, in Control Panel, select Services and set the ClusSvc service to
	  "disabled."
	
	4. Restart Node2.
	
	  Because the Cluster Disk device driver does not start, the disk drives on the
	  shared SCSI bus appear as normal disk drives to the computer.
	
	5. Delete the files on the disk that contains the Quorum log to free up space on
	  the disk drive. Do not access any files that might be needed by the Cluster
	  Service or by shared applications, unless absolutely necessary.
	
	6. Set the startup value of the ClusDisk device back to "System" and the ClusSvc
	  service back to "Automatic."
	
	7. Restart the computer.
	
	  The Cluster Service should start and the shared SCSI disk drives (and all
	  other resources) should be "owned" by the node that is turned on (Node2).
	
	8. Restart the other node, Node1.
	
	9. If necessary, you can now move the Quorum log to a disk that has more
	  available free space.
	
	STATUS
	======
	
	This behavior is by design.
	
	MORE INFORMATION
	================
	
	If the Cluster Service on both nodes has stopped, it may be impossible to start
	the Cluster Service on either node. Until the Cluster Service is started,
	neither node can "own" the disk drive that contains the Quorum log file. Because
	neither node can "own" the disk drive, access to the disk drive is not available
	and therefore files on the disk drive cannot be deleted.
	
	Additional query words: mscs
	
	======================================================================
	Keywords          : kbnetwork kbtool 
	Technology        : kbWinNTsearch kbWinNT400search kbWinNTSsearch kbWinNTSEntSearch kbWinNTSEnt400sp6 kbWinNTSEnt400sp5 kbWinNTSEnt400sp4 kbWinNTSEnt400 kbWinNTS400search kbWinNTSEnt400SP6a
	Version           : winnt:4.0,4.0 SP4,4.0 SP5,4.0 SP6,4.0 SP6a
	Issue type        : kbprb
	
	=============================================================================
	

{% endraw %}
