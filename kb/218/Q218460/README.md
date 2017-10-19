---
layout: page
title: "Q218460: SMS: Members of Global User Groups Do Not Inherit Permissions"
permalink: /kb/218/Q218460/
---

## Q218460: SMS: Members of Global User Groups Do Not Inherit Permissions

	Article: Q218460
	Product(s): Microsoft Systems Management Server
	Version(s): 2.0
	Operating System(s): 
	Keyword(s): kbenv kbnetwork kbSecurity kbWBEM kbsms200 kbsms200bug
	Last Modified: 02-JUL-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Systems Management Server version 2.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you assign a global user group Microsoft Systems Management Server (SMS)
	class or instance rights on the Security Rights tab of the Systems Management
	Server Administrator's Console or the Systems Management Server User Wizard, the
	individual members of the global user group do not inherit the permissions you
	gave to the global user group.
	
	In addition, when you give global user groups Wbem permissions using the
	Wbemperm.exe program or you add the global user group to the SMS Admins local
	group, the individual members of the global user group do not inherit the
	permissions of the global user group.
	
	For example: If you make the USER1 domain user a member of the Globalusergroup1
	group, and then you give the Globalusergroup1 group full Systems Management
	Server Administrator's Console class and instance rights, User1 is not able to
	gain access to the nodes of the Systems Management Server console.
	
	If you add the Globalusergroup1 group to the SMS Admins local group on the server
	where the Systems Management Server provider is located or given Wbem
	permissions using the Wbemperm.exe program, User1 is unable to connect to the
	provider.
	
	WORKAROUND
	==========
	
	To assign permissions to global groups:
	
	1. Create a local group on the server that is running the Systems Management
	  Server provider. This server can be the site server or the SQL server if
	  Systems Management Server and SQL server are on separate computers.
	
	  NOTE: The Smssetup.log file on the site server names the location of the
	  Systems Management Server provider service.
	
	2. Use the Wbemperm.exe program on the server that is running the Systems
	  Management Server provider to add the local group created in step 1 to grant
	  access to Wbem. When you add the group, make sure you click to select both
	  the Enabled and Execute Methods check boxes and the Schema Access Level is
	  set to Write Instance. The SMS Admins local group has the same settings.
	
	3. Use the Systems Management Server Administrator console to assign permissions
	  to the local group you created in step 1. Use the following format:
	
	  servername\localgroupname
	
	  You receive two error messages when you do this. The first error message
	  states that the user can not be verified. The second error message states
	  that the user cannot be added to the SMS Admins group. These error messages
	  do not stop the procedure from working correctly.
	
	After you perform these steps, any global user group or user placed in the local
	group created in step 1 has the same permissions granted to the local group.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in Systems Management Server
	version 2.0. This problem has been corrected in the latest U.S. service pack for
	Systems Management Server version 2.0. For information on obtaining the service
	pack, query on the following word in the Microsoft Knowledge Base (without the
	spaces):
	
	  S E R V P A C K
	
	MORE INFORMATION
	================
	
	For information about the Systems Management Server provider and console
	security, please see the following article in the Microsoft Knowledge Base:
	
	  Q201126 Troubleshooting Connectivity to the SMS Site Database
	
	You can also see the Systems Management Server Administrator's Guide.
	
	Computers that have been upgraded to Windows Management Instrumentation (WMI) 1.5
	or Microsoft Windows 2000-based computers do not have the WMI 1.1 tool
	(Wbemperm.exe).
	
	NOTE: Windows NT 4.0 users which have WMI 1.5 installed, also need to install the
	Microsoft Security Configuration Editor (SCE), included on the Windows NT 4.0
	Service Pack 4 (SP4) (and later) CD-ROM. On Windows NT-based computers, the tool
	is Wbemcntl.exe. The Microsoft SCE is required to edit the Access Control Lists
	(ACLs) on the Windows Installer (WI) namespaces.
	
	
	Additional query words: prodsms can't connect fail global groups trusted sp1 smssetup log
	
	======================================================================
	Keywords          : kbenv kbnetwork kbSecurity kbWBEM kbsms200 kbsms200bug 
	Technology        : kbSMSSearch kbSMS200
	Version           : :2.0
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	
