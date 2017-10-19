---
layout: page
title: "Q270036: SMS: Multiple TCP/IP Addresses Cause Incorrect Discovery Data"
permalink: /kb/270/Q270036/
---

## Q270036: SMS: Multiple TCP/IP Addresses Cause Incorrect Discovery Data

	Article: Q270036
	Product(s): Microsoft Systems Management Server
	Version(s): 2.0
	Operating System(s): 
	Keyword(s): kbsms200 kbsms200bug kbsms120 kbsms120bug kbsms200preSP4fix
	Last Modified: 12-JUL-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Systems Management Server version 2.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When multiple Transmission Control Protocol/Internet Protocol (TCP/IP) addresses
	are bound to one network adapter, the discovery data collected from the client
	only reports one of the TCP/IP addresses.
	
	When viewing the client properties in the Systems Management Server Administrator
	console the Client or AgentSite attributes will not show the expected data. The
	Client property may be set to 0 (not installed) when it should be set to 1
	(installed), and AgentSite property may be blank. Additionally, only the first
	TCP/IP address of the client is listed. If the first TCP/IP address is 0.0.0.0
	there will be no TCP/IP address listed.
	
	CAUSE
	=====
	
	The Systems Management Server discovery process only captures one TCP/IP address
	per network adapter.
	
	RESOLUTION
	==========
	
	To resolve this problem, obtain the latest service pack for Systems Management
	Server version 2.0. For additional information, click the following article
	number to view the article in the Microsoft Knowledge Base:
	
	  Q236325 How to Obtain the Latest Systems Management Server 2.0 Service Pack
	
	
	WORKAROUND
	==========
	
	Make sure that the client's TCP/IP address that is within the Systems Management
	Server site boundaries is the first address bound to the client's network
	adapter. This address is listed first when you look at the Ipconfig, or Winipcfg
	command-line tools on the client.
	
	STATUS
	======
	
	Microsoft has confirmed that this is a problem in the Microsoft products that
	are listed at the beginning of this article. This problem was first corrected in
	Systems Management Server 2.0 Service Pack 4.
	
	MORE INFORMATION
	================
	
	This limitation of reporting only one TCP/IP per network adapter applies to all
	forms of discovery with the exception of Network Discovery using SNMP.
	
	Hotfix Installation Instructions
	--------------------------------
	
	Since this is a hotfix to the SMS Client base components, it should be applied to
	all primary and secondary sites in the SMS hierarchy. To install the fix, use
	the appropriate method.
	
	Method 1: Using the Hotfix Installer:
	
	NOTE: You can use this method only for I386-based computers.
	
	1. Copy the hotfix folder structure to a share on your network. Q270036.exe is a
	  Microsoft SMS Installer file that updates specific files on your site server.
	
	2. Log on to your site server using an account with administrative privileges.
	
	3. On the site server, close the SMS Administrator console.
	
	4. Run Q270036.exe and follow the directions in the wizard. You can run the file
	  in Quiet mode using the /s switch.
	
	Method 2: Manual Installation:
	
	NOTE: The post SP3 version of the hotfix does not include Abnwcli.dll and
	Falclin.dll as these files are included with SMS 2.0 Service Pack 3. Also, some
	of the files listed above are contained within CCMCore.exe and Clicore.exe.
	Those files are handled automatically and do not need to be manually copied.
	
	1. Create a folder in a location that is accessible to your SMS site servers.
	
	2. Copy the platform folders that contain the hotfixed files to the new folder.
	
	3. From each of the primary and secondary SMS site servers in your environment,
	  log on to your site server by using an account with administrative
	  privileges.
	
	4. Quit the SMS Administrator console if it is running.
	
	5. Stop all SMS services.
	
	6. Replace the Abnwcli.dll file in the Sms_root_folder\Bin\Platform folder with
	  the version obtained from the hotfix.
	
	7. Replace the BindCliN.dll file in the Sms_root_folder\Bin\Platform folder with
	  the version obtained from the hotfix.
	
	8. Replace the Falclin.dll file in the Sms_root_folder\Bin\Platform folder with
	  the version obtained from the hotfix.
	
	9. Replace the Mslmclin.dll file in the Sms_root_folder\Bin\Platform folder with
	  the version obtained from the hotfix.
	
	10. Replace the NdsCliN.dll file in the Sms_root_folder\Bin\Platform folder with
	  the version obtained from the hotfix.
	
	11. Replace the Ntsvrdis.dll file in the Sms_root_folder\Bin\Platform folder
	  with the version obtained from the hotfix.
	
	12. Replace the Clicore.exe file in the
	  Sms_root_folder\Inboxes\Clicomp.src\Base\Platform folder with the version
	  obtained from the hotfix.
	
	13. Replace the Compver.ini file in the Sms_root_folder\Inboxes\Clicomp.src\Base
	  folder with the Compverbase.ini file obtained from the hotfix. Note that you
	  must rename the Compverbase.ini file to Compver.ini.
	
	14. Restart all SMS services.
	
	NOTE: An NT_Logon_Server_Manager (LSM) polling cycle is necessary to cause the
	hotfixed Clicore.exe file to be propagated to all the logon points so that new
	clients will be installed by using the hotfixed files. In Systems Management
	Server (SMS) 2.0 Service Pack 2 (SP2), LSM was changed so that it does not
	perform a polling cycle when the SMS Executive service is stopped and restarted.
	For additional information, click the article number below to view the article
	in the Microsoft Knowledge Base: Q249333 SMS: Logon Server Manager Performs a
	Full Work Cycle on Each SMS Executive Restart.
	15. Force the Logon Server Manager to perform a polling cycle by creating a file
	  named NT_LOGON.NOT in the following folder:
	  Sms_root_folder\Inboxes\NT_Logon.box\Notify
	
	All logon points must be updated before you attempt to install new clients.
	
	
	Additional query words: prodsms
	
	======================================================================
	Keywords          : kbsms200 kbsms200bug kbsms120 kbsms120bug kbsms200preSP4fix 
	Technology        : kbSMSSearch kbSMS200
	Version           : :2.0
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	
