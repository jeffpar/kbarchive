---
layout: page
title: "Q139612: TCP/IP-32 3.11b NET LOGON to Domain Fails Across Router"
permalink: /kb/139/Q139612/
---

## Q139612: TCP/IP-32 3.11b NET LOGON to Domain Fails Across Router

	Article: Q139612
	Product(s): Windows for Workgroups and Windows NT Networking Issues
	Version(s): 3.11b
	Operating System(s): 
	Keyword(s): 
	Last Modified: 06-FEB-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows for Workgroups 
	- Microsoft TCP/IP-32 for Windows for Workgroups, version 3.11b 
	-------------------------------------------------------------------------------
	
	
	SYMPTOMS
	========
	
	When a Windows for Workgroups 3.11 client running Microsoft TCP/IP-32 3.11b
	attempts to log on to a Windows NT domain, using NET LOGON command from the
	command prompt across routers. The attempt fails and the following warning
	message appears:
	
	  You are logged on, but have not been validated by a server.
	
	CAUSE
	=====
	
	The logon fails because the NET LOGON command attempts to resolve the domain
	name by using only b-node broadcasts. A query request for the domain <1C>
	SMB is not sent to the WINS server, nor is the local LMHOSTS file parsed after
	the three b-node broadcasts for Logon request SMB fail.
	
	This problem does not occur when the Windows for Workgroups client logs on to the
	domain using the Enterprise logon option under Control Panel Networks in Windows
	for Workgroups3.11.
	
	RESOLUTION
	==========
	
	The above problem is fixed by updating the following WFW 3.11 files from the NT
	Server 3.51 CD or NT 4.0 Server CD.
	
	  NDIS.386
	  NET.EXE
	  NET.MSG
	  NETAPI.DLL
	  NWNBLINK.386
	  VNETSUP.386
	  VREDIR.386
	  VSERVER.386
	
	The updated files address specific problems related to Windows for Workgroups
	version 3.11 and also provide the following:
	
	- Support for inter-network browsing (they allow browsing to Windows NT domains
	  from subnets that have only Windows for Workgroups clients).
	
	- A fix for problems using the NWLink protocol with the Ethernet_II frame type
	  when connecting to a Windows NT Server.
	
	Files can be found on \CLIENTS\WFW\UPDATE directory on NT 3.51 Server CD and on
	\CLIENTS\UPDATE.WFW directory on NT 4.0 Server CD.
	
	WHEN USING the NT 3.5 Server CD take the following steps :
	
	To work around this problem, either use Control Panel Network to log on or
	replace Microsoft TCP/IP-32 version 3.11b with version 3.11A.
	
	NOTE: The TCP/IP-32 version 3.11A drivers can be found on the Windows NT 3.5
	Server CD, in the CLIENTS\TCP32WFW\DISKS directory.
	
	1. From the Network group, run Network Setup.
	
	2. Choose the Drivers button.
	
	  Under Network Drivers, you will see your Network Interface Card (NIC) and the
	  network protocols used on that NIC.
	
	3. Select TCP/IP-32 3.11b.
	
	4. Choose the Setup button and write down all of your TCP/IP-32 3.11b
	  configuration information.
	
	5. Choose the Cancel button to return to the Network Drivers dialog box.
	
	6. Choose the Remove button and then the Yes button to confirm.
	
	7. Choose the Add Protocol button.
	
	8. Select Unlisted or Updated Protocol and Choose the OK button.
	
	9. In the Install Driver dialog box, enter the path to the TCP/IP-32 3.11
	  files.
	
	  You should then see Microsoft TCP/IP-32 3.11 in the Unlisted or Updated
	  Protocol dialog.
	
	10. Choose the OK button.
	
	  You should then see Microsoft TCP/IP-32 3.11 in the Network Drivers dialog
	  box.
	
	11. Choose the Setup button and configure TCP/IP-32 3.11 based on the
	  information you wrote down in step 4.
	
	12. Choose the Close button to exit the Network Divers dialog box.
	
	13. Choose the OK button to exit the Network Setup dialog box.
	
	  Setup will modify system files.
	
	14. Choose the OK button.
	
	  Network Setup prompts you to reboot.
	
	15. Choose the Restart Computer button.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in Windows for Workgroups version
	3.11. We are researching this problem and will post new information here in the
	Microsoft Knowledge Base as it becomes available.
	
	
	Additional query words: 3.50 3.11 tcpip32 wfw wfwg prodtcp32
	
	======================================================================
	Keywords          :  
	Technology        : kbAudDeveloper kbTCPIPSearch kbWFWSearch kbZNotKeyword3 kbTCPIP311b
	Version           : :3.11b
	
	=============================================================================
	
