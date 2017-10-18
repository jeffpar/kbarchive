---
layout: page
title: "Q172813: XADM:Troubleshooting High CPU Utilization By Store.exe"
permalink: kb/172/Q172813/
---

## Q172813: XADM:Troubleshooting High CPU Utilization By Store.exe

	Article: Q172813
	Product(s): Microsoft Exchange
	Version(s): winnt:4.0,5.0,5.5
	Operating System(s): 
	Keyword(s): 
	Last Modified: 09-JAN-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Exchange Server, versions 4.0, 5.0, 5.5 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	This article describes the steps for troubleshooting high CPU utilization by the
	Store.exe process. High CPU utilization means that the Store.exe CPU utilization
	is constantly in the 90 to 100 percent range. It should be noted, however, that
	it is normal for CPU utilization by the Store.exe process to randomly rise,
	depending on the activity of the system.
	
	MORE INFORMATION
	================
	
	The versions of Windows NT and Exchange Server that you are running will
	determine if the issue can be resolved by any service packs or hotfixes.
	
	Windows NT has an RPC hot fix. For more information, see the Microsoft Knowledge
	Base article Q159176, "XADM: Store Stops Responding with High CPU Usage."
	
	Additionally, if the computer is running Microsoft Exchange Server version 4.0
	with Service Pack 4, apply the post-SP4 hotfix, located at:
	
	  ftp://ftp.microsoft.com/bussys/exchange/exchange-public/fixes/eng/
	  exchg4.0/Post-SP4-Store
	
	Any service packs newer than the Post-SP4-Store fix should include the hotfix.
	
	For Exchange Server versions 5.0 and 5.5, please refer to the Microsoft Knowledge
	Base article
	
	  Q181410, "Store Stops Responding with High CPU Usage for a Thread," for more
	  information.
	
	If neither of the two hot fixes resolve the problem, or if they are already
	applied, proceed as follows:
	
	1. Stop the information store and restart it. Does this resolve the problem? How
	  long does it take to stop?
	
	2. If possible, try rebooting the server. Does this help?
	
	  If it does help, it is likely that the information store is fine, and an
	  "outside" entity caused the store to hang; this could be a corrupted message,
	  a connector, or an application.
	
	3. Are the MTA queues backing up? Are the messages incoming or outgoing?
	
	  If so, try deleting the oldest message, to see if this resolves the problem.
	
	4. Try stopping the MTA and any other connectors. If the CPU utilization drops,
	  then it may be one of the stopped services that is actually the cause of the
	  problem.
	
	5. Check to see if there is a looping message that may be causing this problem.
	  Message tracking can help with this.
	
	  a. Also check if the Priv.edb or Pub.edb are rapidly growing.
	
	  b. Check the Mailbox Resources and Public Folder Resources in the Exchange
	     Server Administrator Program to see if there are any mailbox or public
	     folders growing Rapidly.
	
	6. Are users able to send and receive mail? Are the clients responsive or slow?
	
	  This information will indicate if the information store is hung or just busy.
	
	7. Check if this is a problem with the information store files. To do this, stop
	  the information store, rename all MDBDATA directories, create new MDBDATA
	  directories, and start the information store.
	
	  Does the problem occur again?
	
	  If it does occur again, the problem is not with the information store database
	  files. If it does not occur again, restore the original database files and
	  run ISINTEG -patch.
	
	8. Are there any third-party Exchange Server applications running against the
	  private or public information store on this server?
	
	  Check the current logons in the properties of the private information store
	  and public information store, to determine if there are any such program
	  running against this information Store.
	
	  Third-party products can cause high CPU utilization as well as high memory
	  usage by the Store.exe. If there are any third-party programs running against
	  this information store, try stopping them.
	
	9. Are there any third-party virus checking programs running on this server?
	
	  If so, try stopping them.
	
	  What's the size of the Priv.edb and Pub.edb files? Do you have sufficient free
	  disk space on all drives? It may be beneficial to schedule an Off-line Defrag
	  of the two .edb files.
	
	10. If none of the above steps fixes the problem, back up the existing databases
	  files. Then run ISINTEG -fix -pri and ISINTEG -fix -pub.
	
	For additional information, please see the following articles in the Microsoft
	Knowledge Base:
	
	  Q159297 XADM: High Store.exe CPU Utilization During IS Maintenance
	
	  Q159176 XADM: Store Stops Responding with High CPU Usage
	
	Additional query words: exfaq Store
	
	======================================================================
	Keywords          :  
	Technology        : kbExchangeSearch kbExchange500 kbExchange550 kbExchange400 kbZNotKeyword2
	Version           : winnt:4.0,5.0,5.5
	Issue type        : kbhowto
	
	=============================================================================
	
