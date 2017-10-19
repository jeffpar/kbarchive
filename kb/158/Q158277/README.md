---
layout: page
title: "Q158277: How to Configure DOS for Remoteboot In Windows NT 4.0"
permalink: /kb/158/Q158277/
---

## Q158277: How to Configure DOS for Remoteboot In Windows NT 4.0

	Article: Q158277
	Product(s): Microsoft Windows NT
	Version(s): WinNT:4.0
	Operating System(s): 
	Keyword(s): kbnetwork
	Last Modified: 08-AUG-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Server version 4.0 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	This article covers the steps required to install and configure Microsoft DOS on
	a Windows NT 4.0 Remoteboot server. This article assumes you are using MS-DOS
	version 6.22 in all examples.
	
	MORE INFORMATION
	================
	
	Installing DOS
	--------------
	
	1. Verify that the Winnt\Rpl\Rplfiles directory is being shared on the
	  remoteboot server with a share name of Rplfiles. If your system does not have
	  this share, then you either have not installed remoteboot properly or have
	  stopped sharing this directory. To resolve this problem, stop and restart the
	  Remoteboot Server service. After the service has restarted, the Rplfiles
	  share should be recreated. If the share fails to create, your remoteboot
	  service is not operating properly, and you must remove and reinstall the
	  Remoteboot service.
	
	2. From an MS-DOS client (running the version of MS-DOS you want to support on
	  the Remoteboot server), log on to the network as Administrator and connect to
	  the Remoteboot server's Rplfiles share by typing:
	
	  net use M: \\NTSERVER\RPLFILES
	
	  where NTSERVER is the name of the Remoteboot server.
	
	3. Copy all the MS-DOS files to the M:\Binfiles\Dosxxx directory by typing the
	  following commands. You will need to replace the xxx with the appropriate DOS
	  version (eg. DOS622 for DOS version 6.22).
	
	  COPY C:\DOS\*.* M:\BINFILES\DOS622
	  ATTRIB -S -H C:\IO.SYS
	  COPY C:\IO.SYS M:\BINFILES\DOS622
	  ATTRIB +S +H C:\IO.SYS
	  ATTRIB -S - H C:\MSDOS.SYS
	  COPY C:\MSDOS.SYS M:\BINFILES\DOS622
	  ATTRIB +S +H C:\MSDOS.SYS
	
	  The files Msdos.sys and Io.sys must have the hidden and system attributes
	  removed prior to copying them to the server. Once the copy has been
	  completed, remember to reset the hidden and system attributes on the client
	  computer (not on the Remoteboot server) for the DOS system to boot properly.
	
	  NOTE: The hidden and system attributes should not be set on the Remoteboot
	  server. If these attributes are set, then the DOS Remoteboot client will not
	  boot properly and will display an error:
	
	  Non-System Disk error or disk error
	
	4. If you copied DOS files other than MS-DOS, you must rename the input/output
	  system file to Io.sys and the Disk Operating System to Msdos.sys. The
	  following example is based on IBM's PC-DOS.
	
	  Rename Ibmdos.com Msdos.sys
	  Rename Ibmbio.com Io.sys
	
	Please note that the remoteboot service is designed to support Microsoft DOS.
	
	Activating the DOS Version
	--------------------------
	
	1. From the Windows NT remoteboot server, start the Remoteboot Manager.
	
	2. Select Configure from the menu bar, and then click Check Configurations. This
	  will check the remoteboot system for all available operating systems and make
	  them available for the clients.
	
	Creating a Remoteboot DOS Client Profile
	----------------------------------------
	
	1. From the Windows NT Remoteboot server, start Remoteboot Manager.
	
	2. Select Remoteboot from the menu bar, and then click New Profile.
	
	3. When the New Profile dialog box appears:
	
	  Type a Profile Name: MSDOS622
	
	  Select the Configuration: DOS 6.22 3Com Etherlink II
	
	  For the Description: Type any descriptive comments
	
	  NOTE: Any comments typed prior to selecting a configuration or changing a
	  configuration will be over-written with default comments.
	
	4. Click OK to save the new profile.
	
	Assigning a Profile to a Remoteboot Client
	------------------------------------------
	
	1. Connect the Remoteboot client to the network, and power the system on. The
	  client should start searching for the Remoteboot server. The retries counter
	  should increase at a steady pace.
	
	  NOTE: If your remoteboot client has a hard disk drive and the network
	  interface card's Remoteboot PROM does not take control of the boot process,
	  please see the following article in the Microsoft Knowledge Base:
	
	  ARTICLE-ID: Q158453
	  TITLE : How to Enable Remoteboot on a Client's Hard Disk
	
	2. From the Windows NT Remoteboot server, start Remoteboot Manager.
	
	3. Select the workstation name corresponding to the client's media access
	  control address. The client will have registered its address automatically
	  with the server.
	
	  The media access controll address is a unique 12-digit hexadecimal number
	  supplied by network adapter firmware. This ID identifies the adapter type and
	  manufacturer using the first six digits. If this number is not displayed in
	  Remoteboot Manager, press the F5 key. If you still do not see this number, it
	  is possible that you have not installed Remoteboot Manager properly, that the
	  DLC protocol is not installed, or that your client and server are separated
	  by a router that is not forwarding DLC packets.
	
	4. Select Remoteboot from the menu bar, and then click Convert Adapters.
	
	5. When the Convert Adapters dialog box appears:
	
	   - Type a workstation name for the client.
	
	   - Type a detail description for the client computer.
	
	   - Type a password if desired. A blank or Null password allows the Remoteboot
	     client to connect to the RPL server without any operator intervention
	     after the power is turned on.
	
	   - Select the Configuration type:
	
	  Shared: the client can share its profile with other clients
	  Personal: the must have it own unique profile
	
	   - Select the desired Workstation Profile
	
	   - Select TCP/IP DHCP / TCP/IP SETTINGS. If you select TCP/IP settings,
	     consult your network administrator for proper configuration.
	
	     NOTE: If you are not using TCP/IP, then select the TCP/IP DHCP option.
	
	6. Click ADD. The Remoteboot system will then create a user account for the
	  computer, and the Remoteboot client will continue the startup process using
	  the assigned profile.
	
	This completes the installation of MS-DOS on a Remoteboot client.
	
	For more information on Remoteboot, see the Windows NT 4.0 Resource Kit.
	Specifically, refer to the Server Networking Guide Help File.
	
	Additional query words: NT RPL Remote Boot DOS Remoteboot
	======================================================================
	Keywords          : kbnetwork 
	Technology        : kbWinNTsearch kbWinNT400search kbWinNTSsearch kbWinNTS400search kbWinNTS400
	Version           : WinNT:4.0
	
	=============================================================================
	
