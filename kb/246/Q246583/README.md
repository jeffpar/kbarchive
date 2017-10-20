---
layout: page
title: "Q246583: SMS: RC Does Not Work in Master Domain Model Using Global Groups"
permalink: /kb/246/Q246583/
---

## Q246583: SMS: RC Does Not Work in Master Domain Model Using Global Groups

{% raw %}

	Article: Q246583
	Product(s): Microsoft Systems Management Server
	Version(s): winnt:2.0,2.0 SP1
	Operating System(s): 
	Keyword(s): kberrmsg kbnetwork kbsms200 kbsms200bug kbsmsAdmin kbsmsProvider kbsms200sp2fix
	Last Modified: 06-AUG-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Systems Management Server versions 2.0, 2.0 SP1 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	In a master domain model where a Systems Management Server (SMS) site resides in
	a resource domain and you grant the "Use Remote Tools" permission to a global
	group from the master account domain, the following error message may be
	displayed when you attempt to Remote Control a client:
	
	  Security rights to run Remote Tools on this client have been denied.
	
	RESOLUTION
	==========
	
	To resolve this problem, obtain the latest service pack for Systems Management
	Server version 2.0. For additional information, click the following article
	number to view the article in the Microsoft Knowledge Base:
	
	  Q236325 How to Obtain the Latest Systems Management Server 2.0 Service Pack
	
	
	
	WORKAROUND
	==========
	
	To work around this problem, use either of the following methods:
	
	- Grant the "Use Remote Tools" security permission to specific users from the
	  master account domain.
	
	- Create a local group in the resource domain where SMS resides, add the Remote
	  Control global group from the master account domain to this local group, and
	  then assign the "Use Remote Tools" security permission using the local group
	  from the resource domain.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in Systems Management Server
	version 2.0. This problem was first corrected in Systems Management Server
	version 2.0 Service Pack 2.
	
	MORE INFORMATION
	================
	
	To install the hotfix, use the appropriate method.
	
	Method 1: Using the Hotfix Installer
	------------------------------------
	
	NOTE: You can use this method only for I386-based computers.
	
	1. Copy the hotfix folder structure to a share on your network. Q246583.exe is a
	  Microsoft Windows Installer file that updates specific files on your site
	  server.
	
	2. Log on to your site server using an account with administrative privileges.
	
	3. On the site server, close the SMS Administrator console.
	
	4. Run Q246583.exe and follow the directions in the wizard. You can run the file
	  in Quiet mode using the /s switch.
	
	Method 2: Manual Installation
	-----------------------------
	
	To determine if the SMS Provider is located on the site server or a remote SQL
	Server computer, examine the following registry key on the primary site server:
	
	  HKEY_LOCAL_MACHINE\SOFTWARE\Microsoft\SMS\Setup
	  Value: Provider Location
	
	NOTE: If the system identified here is not the local site server, use the
	installation steps for a remote provider.
	
	Site System with Local Provider:
	
	1. Close the SMS Administrator console and stop all SMS services including the
	  Windows Management service and the SMS_SQL_MONITOR service.
	
	2. Use Regsvr32.exe to unregister the existing SMS Provider file. At a command
	  prompt, type the following command:
	
	  regsvr32 /u <sms_root_directory>\bin\<platform>\smsprov.dll
	
	3. Replace the Smsprov.dll file in the
	  <Sms_root_directory>\Bin\<Platform> folder with the version
	  obtained from the hotfix.
	
	4. Use Regsvr32.exe to register the updated SMS Provider file. At a command
	  prompt, type the following command:
	
	  regsvr32 <sms_root_directory>\bin\<platform>\smsprov.dll
	
	5. Restart all SMS services.
	
	Site System with Remote Provider:
	
	1. Close the SMS Administrator console and stop all SMS services.
	
	2. Use Regsvr32.exe to unregister the existing SMS Provider file. At a command
	  prompt, type the following command:
	
	  regsvr32 /u <sms_root_directory>\bin\<platform>\smsprov.dll
	
	3. Replace the Smsprov.dll file in the
	  <Sms_root_directory>\Bin\<Platform> folder with the version
	  obtained from the hotfix.
	
	4. Use Regsvr32.exe to register the updated SMS Provider file. At a command
	  prompt, type the following command:
	
	  regsvr32 <sms_root_directory>\bin\<platform>\smsprov.dll
	
	5. Restart all SMS services.
	
	6. From the updated SMS site server, copy the Smsprov.dll file to a disk or
	  network share.
	
	7. On the server running the SMS Provider, stop the Windows Management service
	  and the SMS_SQL_MONITOR service.
	
	8. Use Regsvr32.exe to unregister the existing SMS Provider file. At a command
	  prompt, type the following command:
	
	  regsvr32 /u <smsprov_root_directory>\bin\<platform>\smsprov.dll
	
	9. Make a backup copy of the existing SMS Provider file.
	
	10. Copy the updated Smsprov.dll file from the disk or network share to the
	  <Smsprov_root_directory>\Bin\<Platform> folder.
	
	11. Use Regsvr32.exe to register the updated SMS Provider file. At a command
	  prompt, type the following command:
	
	  regsvr32 <smsprov_root_directory>\bin\<platform>\smsprov.dll
	
	12. Restart the SMS services.
	
	
	Additional query words: prodsms denied fail fails failure
	
	======================================================================
	Keywords          : kberrmsg kbnetwork kbsms200 kbsms200bug kbsmsAdmin kbsmsProvider kbsms200sp2fix 
	Technology        : kbSMSSearch kbSMS200 kbSMS200SP1
	Version           : winnt:2.0,2.0 SP1
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	

{% endraw %}
