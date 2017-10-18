---
layout: page
title: "Q155216: XADM: How to Move Exchange Server to a New Computer w/ Same Name"
permalink: kb/155/Q155216/
---

## Q155216: XADM: How to Move Exchange Server to a New Computer w/ Same Name

	Article: Q155216
	Product(s): Microsoft Exchange
	Version(s): 4.0,5.0,5.5
	Operating System(s): 
	Keyword(s): kbenv kbusage exc4 exc5 exc55
	Last Modified: 23-MAR-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Exchange Server, versions 4.0, 5.0, 5.5 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	It may be necessary, because of performance or other reasons, to replace a
	Microsoft Exchange Server computer with a new, more powerful system.
	
	This article explains how to move Exchange Server to a new computer, if the
	original computer will be off the network and the new computer will have the
	same name as the original computer.
	
	MORE INFORMATION
	================
	
	Before you move Exchange Server to the new computer, verify that the original
	computer is not the only Microsoft Windows NT domain controller in the domain.
	While this computer is shut down as part of the moving procedure, there must be
	a domain controller that can validate logon requests.
	
	If the original computer is a Primary Domain Controller (PDC), make sure that
	there is at least one other backup domain controller (BDC) in the Windows NT
	domain. After you shut down the original computer, upgrade the BDC to a PDC.
	
	If the original computer is a BDC, make sure that the PDC in the domain is up and
	operational, or that there are other BDCs that can be upgraded to become the
	PDC.
	
	The steps below explain how to move Exchange Server to a new computer that has
	the same hardware platform as the original computer. That is, either both
	computers are Intel, or both computers are Alpha.
	
	For the purposes of these steps, the two computers are referred to as the
	"original computer" and the "new computer," even though both computers have the
	same NetBIOS computer name.
	
	How to Move Exchange Server to a New Computer with the Same Name as the Original Computer
	-----------------------------------------------------------------------------------------
	
	To move Exchange Server to a new computer consists of the following steps, which
	are expanded later:
	
	1. Backing up information from the original computer.
	
	2. Installing Windows NT and Exchange Server on the new computer.
	
	3. Installing Windows 2000 and Exchange Server on the new computer.
	
	4. Restoring the Exchange Server data to the new computer.
	
	5. Configuring the Key Management server (KM server).
	
	6. Restoring and reconfiguring connectors.
	
	Backing Up Information from the Original Computer:
	
	1. At the original Exchange Server computer, start the Exchange Server
	  Administrator program. Note the following information:
	
	   - The organization and site names.
	
	   - The configuration parameters of any connectors that are installed on the
	     original computer. You may want to print screen dumps of the different
	     pages of the connector properties.
	
	  Quit the Exchange Server Administrator program, and then note the drive
	  configuration of the original computer.
	
	2. At the original computer, stop all of the Exchange Server services.
	
	3. Copy the entire Exchsrvr directory to another computer on the network, or to
	  a tape drive. If the log, database, and working directories are on different
	  drives, make sure that you copy the Exchsrvr directories from every drive.
	
	4. Start the Exchange Server Performance Optimizer utility, and then note the
	  locations of the directory service, information store, message transfer agent
	  (MTA), and Internet Mail Service files. You can quit the Performance
	  Optimizer utility after you get the necessary information. You can also get
	  this information from the registry.
	
	  You may want to run the perfwiz -v command, and then note any customized
	  settings on the original computer.
	
	  Also, note the version and service pack number of Exchange Server that is
	  installed on the original computer.
	
	5. If the KM server service is installed, stop the KM server service, and then
	  back up the Security directory. If the original computer is running Exchange
	  Server version 5.5, there is no Security directory, because the KM server
	  information is stored in the Exchsrvr\Kmsdata directory. Also back up the KM
	  server Startup disk.
	
	6. Shut down the original computer, and then turn it off. Make sure that there
	  is an operational domain controller in the Windows NT domain.
	
	Installing Windows NT and Exchange Server on the New Computer:
	
	1. Using the Server Manager utility, remove the computer account for the
	  original computer, and then re-add it.
	
	2. Install Windows NT on the new computer, using the same computer name that the
	  original computer used. If necessary, make the new computer a BDC. Ensure
	  that the original computer is turned off before you install Windows NT on the
	  new computer.
	
	3. Reconfigure the drives on the new computer exactly as they were configured on
	  the original computer.
	
	Installing Windows 2000 and Exchange Server on the New Computer:
	
	NOTE:If the server is not a domain controller, do not perform step one and
	proceed to step 2.
	
	1. Run the Active Directory Installation Wizard (DCPROMO) to demote the server
	  to a member server.
	
	2. To disjoin the server from the domain, click Properties, click the Network
	  Identification tab, click Properties, and then click Workgroup.
	
	3. In Active Directory Users and Computers on a domain controller, remove the
	  computer account that corresponds to server that you have just removed from
	  the domain.
	
	4. Install Windows 2000 on the new computer, and then name the computer the same
	  computer name that the original computer used. Ensure that you reconfigure
	  the drives on the new computer exactly as they were configured on the old
	  computer.
	
	5. Join the server to the domain.
	
	  NOTE: It may be necessary to run the Active Directory Installation Wizard
	  (DCPROMO) to promote the member server to a domain controller.
	
	Restoring the Exchange Server Data to the New Computer:
	
	NOTE: When you install Exchange on the new server, create a new site with the
	same site name, organization name, and server name as the previous server being
	replaced. DO NOT join the site.
	
	1. Install Microsoft Exchange 5.5 on the new server, and then click the option
	  to create a new organization. When you receive the prompt, use the same
	  organization and site names that were used on the original server. Install
	  the same service packs and hotfixes that were installed on the original
	  server.
	
	2. Run the Performance Optimizer utility and verify that all of the paths are
	  the same as those noted in the previous steps.
	
	3. Stop the Exchange System Attendant Service (MSExchangeSA) from either the
	  Control Panel services interface or from a command prompt type "Net Stop
	  MSExchange" (without the quotation marks). This procedure stops all other
	  Exchange services as well.
	
	4. Copy the Exchsrvr directories that you backed up from the original computer
	  over the Exchsrvr directories on the new computer. Make sure that you copy
	  the directories to the correct drives.
	
	  If the original computer and the new computer do not have the same hardware
	  platform, then only copy the Dsadata, Dxadata, Imcdata, Mdbdata, and Mtadata
	  directories. You may also need to copy the Ccmcdata, Insdata, Kmsdata, and
	  Tracking.log directories if the corresponding components were installed or
	  enabled on the original computer.
	
	5. Start the system attendant and directory services.
	
	6. Start the information store service. If the Application event log states that
	  you need to run Isinteg -patch when you start the information store, at a
	  Windows NT command prompt, run the following command
	
	  isinteg -patch
	
	  and then restart the information store service.
	
	Configuring the KM Server:
	
	You installed the KM server in the "Installing Windows NT and Exchange Server on
	the New Computer" section, step 7, before you restored the Exchange Server
	directory from the original computer to the new computer.
	
	1. Stop the KM server service on the new computer.
	
	2. Copy the Kmspwd.ini file from the KM server Startup disk for the original
	  computer to another disk. Label the disk "KM Server Startup Disk - New
	  Computer."
	
	3. Perform one of the following steps, depending on the version of Exchange
	  Server that the original computer was running and the new computer is
	  running:
	
	   - For Exchange Server version 4.0 or 5.0, at the new computer, rename the
	     Security\Mgrent directory to the Security\Mgrent.original directory. Copy
	     the Security\Mgrent directory from the backup of the Security directory of
	     the original computer (that you made in the "Backing up Information from
	     the Original Computer" section, step 5) to the Security directory on the
	     new computer.
	
	  - or -
	
	   - For Exchange Server version 5.5, at the new computer, rename the
	     Exchsrvr\Kmsdata directory to the Exchsrvr\Kmsdata.original directory.
	     Copy the Exchsrvr\Kmsdata directory from the backup of the Exchsrvr
	     directory of the original computer (that you made in the "Backing up
	     Information from the Original Computer" section, step 3) to the Exchsrvr
	     directory on the new computer.
	
	4. Place the new KM server Startup disk for the new computer (labeled "KM Server
	  Startup Disk - New Computer") into the disk drive of the new computer.
	
	5. Start the KM server service on the new computer.
	
	6. Use the Performance Optimizer utility to make any desired changes.
	
	7. Start all of the Exchange Server services.
	
	Restoring and Reconfiguring Connectors:
	
	Restore all of the information that relates to site connectors and X.400
	Connectors on the new computer. You need to reconfigure any Internet Mail
	Connector or Dynamic RAS Connectors. You may also need to reconfigure
	third-party connectors.
	
	Exchange Client Profiles
	------------------------
	
	After you complete the steps in this article, Exchange Server runs on the new
	computer in the same way that it ran on the original computer. Exchange Clients
	can connect to the new Exchange Server computer just as they connected to the
	original computer.
	
	Use of Offline Backups Instead of Online Backups
	------------------------------------------------
	
	In the procedures in this article, you use an offline backup, instead of an
	online backup. This allows you to move all of the data that existed at the time
	that the Exchange Server services were stopped to the new computer. This
	includes data that may have arrived after the last online backup, as well as
	transient data in the MTA or connector queues.
	
	If you perform an online backup, to be sure that you move all of the data to the
	new computer you need to copy transaction logs, as well as the MTA and Internet
	Mail Service data files.
	
	It is more effective to copy the entire Exchsrvr directory on each drive to the
	new computer. This procedure requires that you configure the locations of the
	different logs and databases exactly the way they were configured on the
	original computer, but it guarantees that there is no loss of data.
	
	Additional query words: migrate hardware
	
	======================================================================
	Keywords          : kbenv kbusage exc4 exc5 exc55 
	Technology        : kbExchangeSearch kbExchange500 kbExchange550 kbExchange400 kbZNotKeyword2
	Version           : :4.0,5.0,5.5
	Issue type        : kbhowto
	
	=============================================================================
	
