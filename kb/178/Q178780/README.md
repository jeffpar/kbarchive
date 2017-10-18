---
layout: page
title: "Q178780: ODE: Distributing a Replica Set for Indirect Synchronization"
permalink: kb/178/Q178780/
---

## Q178780: ODE: Distributing a Replica Set for Indirect Synchronization

	Article: Q178780
	Product(s): Microsoft Access Distribution Kit
	Version(s): 
	Operating System(s): 
	Keyword(s): 
	Last Modified: 16-JUL-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Office 97 Developer Edition 
	-------------------------------------------------------------------------------
	
	Advanced: Requires expert coding, interoperability, and multiuser skills.
	
	SUMMARY
	=======
	
	You can use the Microsoft Replication Manager, which ships with Microsoft Office
	97 Developer Edition, to implement indirect synchronization. This article
	describes the proper configuration of Replication Manager to support indirect
	synchronization and the correct procedure for distributing a replica set for
	indirect synchronization.
	
	MORE INFORMATION
	================
	
	Indirect synchronization using Microsoft Replication Manager is the best
	synchronization method if you are not always connected to the network; you can
	specify a network location where message files containing information to be
	exchanged are deposited for later processing. When you use indirect
	synchronization, two synchronizers establish a link to each other and exchange
	messages containing the changes to the data. This method of synchronization is
	safer and more efficient when using slower WAN and modem connections, because
	you don't open the remote replica over the connection.
	
	Microsoft Replication Manager must be installed and configured on each computer
	that uses indirect synchronization.
	
	Follow these steps to configure Microsoft Replication Manager for indirect
	synchronization and for distributing a replica set that uses indirect
	synchronization.
	
	Configuring Microsoft Replication Manager
	-----------------------------------------
	
	1. Create a shared folder on each computer to serve as a Dropbox. This folder
	  should have its permissions set to give all users at least Read, Write, and
	  Create rights; if you are using Microsoft Windows NT, this folder should have
	  at least Change rights.
	
	2. Run Replication Manager. If you are running Replication Manager for the first
	  time, the Configuration Wizard starts automatically. If you have previously
	  used Replication Manager, start the Configuration Wizard by clicking
	  Configure Microsoft Replication Manager on the Tools menu.
	
	3. On the first page of the wizard, click Next.
	
	4. Click to select the Support Indirect Synchronization check box and then click
	  Next twice.
	
	5. In the list of Shared Folders On This Computer, click the folder that you
	  created in step 1 so that the folder appears in the Dropbox Folder box; you
	  can also type the path to this folder in the Dropbox Folder box. Then click
	  Next.
	
	6. On the screen that asks, "Is This Computer an Internet Server?" click No and
	  then click Next.
	
	7. Accept the default path to the log file by clicking Next.
	
	8. Type a name for the Synchronizer and then click Next. The default name of the
	  Synchronizer is the name of the computer.
	
	9. Click Finish to complete configuration of Replication Manager.
	
	Distributing a Replica Set for Indirect Synchronization
	-------------------------------------------------------
	
	It is not recommended that you use the Design Master as the hub for
	synchronization of a replica set. In the following steps, the first replica that
	you create is the hub replica from which you create all of the other replicas.
	
	1. Complete the steps in the section "Configuring Microsoft Replication Manager"
	  on every computer that is to host a member of the replica set.
	
	2. Create a replica set from an existing database on your primary computer. You
	  can do this by opening the database in Microsoft Access. On the Tools menu,
	  point to Replication, and then click Create Replica. Follow the instructions
	  to create both a Design Master and a replica.
	
	  NOTE: You can also use Microsoft Replication Manager to convert a database to
	  a Design Master by clicking Convert Database To Design Master on the Tools
	  menu. The Convert Database To Design Master Wizard allows you to specify
	  different characteristics of the replica set, such as which objects are
	  available to the replica set and whether replicas are read/write or
	  read/only. Unlike the Microsoft Access user interface, however, the wizard
	  does not create the first replica. When the Convert Database To Design Master
	  Wizard asks whether you want to manage the Design Master with this
	  Synchronizer, click No and then click Finish. Then, on the File menu, click
	  New Replica and follow the instructions provided by the New Replica Wizard to
	  create the first replica.
	
	3. Open Microsoft Replication Manager on the primary computer.
	
	4. On the File menu, click Managed Replicas. In the Managed Replicas dialog box,
	  click Manage New.
	
	5. In the Start Managing Replica dialog box, locate the replica that you created
	  in step 2 and click Open; do not manage the Design Master. In the Managed
	  Replicas dialog box, click Close.
	
	6. Start Windows Explorer. Locate the folder containing the managed replica and
	  make a copy of that replica.
	
	7. Move the copy of the replica to the secondary computer.
	
	  NOTE: It is important to move the replica rather than copy it to the secondary
	  computer. A copy of the replica should not remain on the primary computer.
	
	8. On the secondary computer, open Microsoft Replication Manager and manage the
	  replica that you moved to this computer in step 7.
	
	When you connect the secondary computer to the network, a line connecting the two
	transporters appears in the Synchronization window. You can right- click this
	line to synchronize the replicas. Synchronization is indirect if the primary
	computer has no network access to the folder containing the replica on the
	secondary computer and the secondary computer has no network access to the
	folder containing the replica on the primary computer. There is no way to
	prevent Microsoft Synchronizer from using direct synchronization if it is
	running on a computer that has direct network access to the folder containing
	the target replica. If one replica has direct network access to the other
	replica, the only way to guarantee indirect synchronization is to use internet
	synchronization.
	
	Additional query words: inf How To transporter synch
	
	======================================================================
	Keywords          :  
	Technology        : kbOfficeSearch kbAudDeveloper kbOffice97Search kbOffice97 kbOffice97DevSearch
	Hardware          : x86
	Issue type        : kbhowto
	
	=============================================================================
	
