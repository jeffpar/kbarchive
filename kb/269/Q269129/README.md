---
layout: page
title: "Q269129: PC DirSync: Making Exchange Server Computer the Dirsync Server"
permalink: kb/269/Q269129/
---

## Q269129: PC DirSync: Making Exchange Server Computer the Dirsync Server

	Article: Q269129
	Product(s): Microsoft Mail For PC Networks
	Version(s): WINDOWS:3.2,3.2a,3.5; winnt:5.5,5.5 SP1,5.5 SP2,5.5 SP3
	Operating System(s): 
	Keyword(s): exc55 exc55sp1 exc55sp2 exc55sp3
	Last Modified: 23-OCT-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Mail for PC Networks, versions 3.2, 3.2a, 3.5 
	- Microsoft Exchange Server, versions 5.5, 5.5 SP1, 5.5 SP2, 5.5 SP3 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	This article describes how to remove an Exchange Server computer as a requestor
	and make the Exchange Server computer the directory synchronization (dirsync)
	server.
	
	MORE INFORMATION
	================
	
	For additional information about the steps that are performed on the old
	Microsoft Mail (MS Mail) postoffice in the following procedure, click the
	article number below to view the article in the Microsoft Knowledge Base:
	
	  Q257740 PC DirSync: Global Reset for Microsoft Mail
	
	To remove the Exchange Server computer as a requestor and make the Exchange
	Server computer the dirsync server:
	
	1. Demote the old MS Mail dirsync server to a requestor.
	
	  NOTE: If you do not have a dirsync server for your MS Mail organization, you
	  can skip step 1.
	
	  To demote the old MS Mail dirsync server to a requestor:
	
	  a. Start the MS Mail Administrator program, choose Config, choose Dir-Sync,
	     choose Options, and then choose No. When a warning message is displayed,
	     choose Yes.
	
	     IMPORTANT: This step deletes the Srvconf.glb and Msttrans.glb files from
	     the server. After you complete this step, you must perform all of the
	     following steps in steps 1 and 2.
	
	  b. Reset the Reqconf.glb file on the dirsync server by running the following
	     command:
	
	  listds admin -p(password) -dm -r -z
	
	  c. Choose Config, choose Dir-Sync, choose Requestor, choose Registration, and
	     then choose the network name of the shadow postoffice and the postoffice
	     name of the shadow postoffice.
	
	  d. Choose Config, choose Dir-Sync, choose Requestor, and then choose Types to
	     reset the types of names that are propagated by dirsync.
	
	     IMPORTANT: This step is only necessary if gateways are installed and
	     gateway names are included in dirsync.
	
	  e. Choose Config, choose Dir-Sync, choose Requestor, and then choose Export
	     to send the list to the other postoffices.
	
	  f. Replace the Control.glb file with a copy of the Control.glb file from
	     another requestor.
	
	2. On each MS Mail requestor postoffice:
	
	  a. Reset the Reqconf.glb file by running the following command:
	
	  listds admin -p(password) -dm -r -z
	
	  b. Verify that the Reqconf.glb file is reset properly by running the
	     following command:
	
	  listds admin -p(password) -dm -r
	
	     The ReqSync and SrvSync numbers should both be zero (0).
	
	  c. Choose Config, choose Dir-Sync, choose Requestor, and then choose Types to
	     reset the types of names that are propagated by dirsync.
	
	     IMPORTANT: This step is only necessary if gateways are installed and
	     gateway names are included in dirsync.
	
	     If you use an older version of the Listds utility, the name of the dirsync
	     server is reset as well. If this occurs, reregister the dirsync server by
	     choosing Config, choosing Dir-Sync, choosing Requestor, and then choosing
	     Registration.
	
	  d. Choose Config, choose Dir-Sync, choose Requestor, and then choose Export
	     to send the list to the other postoffices. After you perform these steps,
	     all the dirsync files are reset. Wait for Dispatch to complete the next
	     dirsync cycle, and then review the log files to make sure that everything
	     is working properly.
	
	3. Remove the Exchange Server computer as a requestor:
	
	  a. Start the Exchange Server Administrator program.
	
	  b. Click the Connections object.
	
	  c. Click the dirsync server object, and then press the DELETE key.
	
	4. Make the Exchange Server computer the dirsync server:
	
	  a. Click the Connections object.
	
	  b. On the File menu, click New, click Other, and then click Dirsync Server.
	
	  c. Give the dirsync server object a name.
	
	  d. Click Dirsync Admin, and then click an administrator account.
	
	  e. Click Forward Dirsync Messages to Admin.
	
	  f. Click the Schedule tab, and then click "T2 time".
	
	  g. Click OK.
	
	5. Create requestor objects:
	
	  a. On the File menu, click New, click Other, and then click Remote Dirsync
	     Requestor.
	
	  b. A list of all of the MS Mail postoffices is displayed. Click the first
	     postoffice in the list.
	
	  c. Click OK.
	
	  d. Give the requestor object a name.
	
	  e. Click Import Container, and then click the container in which you want MS
	     Mail names to appear.
	
	  f. Click Export, and then select the containers that you want to participate
	     in dirsync.
	
	  g. Click the General tab, and then click to select the Export On Next Cycle
	     check box.
	
	6. Repeat step 5 for each MS Mail postoffice.
	
	7. Either allow dirsync to run overnight, or perform a manual dirsync.
	
	For additional information about how to perform a manual dirsync, click the
	article number below to view the article in the Microsoft Knowledge Base:
	
	  Q147464 XFOR: Manual Dirsync with Exchange Server as Dirsync Server
	
	Additional query words:
	
	======================================================================
	Keywords          : exc55 exc55sp1 exc55sp2 exc55sp3 
	Technology        : kbExchangeSearch kbExchange550 kbZNotKeyword2 kbMailSearch kbZNotKeyword3 kbMailPCN320 kbMailPCN320a kbMailPCN350 kbExchange550SP1 kbExchange550SP2 kbExchange550SP3
	Version           : WINDOWS:3.2,3.2a,3.5; winnt:5.5,5.5 SP1,5.5 SP2,5.5 SP3
	Issue type        : kbhowto
	
	=============================================================================
	
