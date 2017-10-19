---
layout: page
title: "Q290398: PRB: Access Denied When You Try to Start DCOM Server"
permalink: /kb/290/Q290398/
---

## Q290398: PRB: Access Denied When You Try to Start DCOM Server

	Article: Q290398
	Product(s): Internet Information Server
	Version(s): 4.0,5.0
	Operating System(s): 
	Keyword(s): kberrmsg kbDCOM kbDebug kbGrpDSASP kbDSupport kbiis400 kbiis500
	Last Modified: 13-JUN-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Internet Information Server versions 4.0, 5.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	One of the following events appear in the System log on a server that is running
	Internet Information Server (IIS):
	
	  Event Type: Error
	  Event Source: DCOM
	  Event Category: None
	  Event ID: 10002
	  Date: 2/22/2001
	  Time: 2:11:52 PM
	  User: <ComputerName>\IWAM_<ComputerName>
	  Computer: <ComputerName>
	  Description: Access denied attempting to launch a DCOM Server. The server is:
	  {0C0A3666-30C9-11D0-8F20-00805F2CD064} The user is
	  IWAM_<ComputerName>/<ComputerName>
	
	  -or-
	
	  Event Type: Error
	  Event Source: DCOM
	  Event Category: None
	  Event ID: 10003
	  Date: 2/22/2001
	  Time: 2:56:32 PM
	  User: <ComputerName>\IWAM_<ComputerName>
	  Computer: <ComputerName>
	  Description: Access denied attempting to launch a DCOM Server using
	  DefaultLaunchPermssion. The server is: {0C0A3666-30C9-11D0-8F20-00805F2CD064}
	  The user is IWAM_<ComputerName>/<ComputerName>
	
	CAUSE
	=====
	
	The Distributed Component Object Model (DCOM) server that is failing to launch
	is Machine Debug Manager (0C0A3666-30C9-11D0-8F20-00805F2CD064). This occurs
	because Machine Debug Manager lacks sufficient DCOM permissions.
	
	By default, Machine Debug Manager is not set up to use custom DCOM permissions;
	thus, it uses the default, computer-level DCOM permissions. For security
	reasons, the default DCOM permissions are tight. Blank access permissions mean
	that only the system and the identity of the client that is same as the server
	can access DCOM server. If the client's identity differs from the server's, the
	client receives the "Access denied" error.
	
	RESOLUTION
	==========
	
	
	To resolve this problem, follow these steps:
	
	1. At a command prompt, type the following command to open Distributed COM
	  Configuration Properties:
	
	  "dcomcnfg.exe" (without the quotation marks)
	
	2. On the Applications tab, in the list of DCOM servers, browse to the Machine
	  Debug Manager entry. If this entry does not exist, type the following command
	  at a command prompt to add the entry:
	
	  "mdm.exe /regserver" (without the quotation marks)
	
	3. Re-open Distributed COM Configuration Properties, click Machine Debug
	  Manager, and then click Properties.
	
	4. On the Security tab, click "Use custom access permissions", and then click
	  Edit.
	
	5. Add the appropriate users to the access permissions for Machine Debug
	  Manager. Microsoft recommends that you allow access permissions for at least
	  the following users:
	
	  Interactive
	  System
	  Administrators
	  IWAM_<ComputerName>
	
	  Click OK twice to return to the Security tab.
	
	6. On the Security tab, click "Use custom launch permissions", and then click
	  Edit.
	
	7. Add the appropriate users to the launch permissions for Machine Debug
	  Manager. Microsoft recommends that you allow launch permissions for at least
	  the following users:
	
	  Interactive
	  System
	  Administrators
	  IWAM_<ComputerName>
	
	  Click OK twice to return to the Security tab.
	
	8. On the Identity tab, click The interactive user to set the user account
	  identity of Machine Debug Manager. If no one will be logged onto the
	  computer, click This user, and then type the user name and password of a user
	  in the Administrators group.
	
	9. Close all instances of Mdm.exe, or restart your computer, so that these
	  changes take effect.
	
	MORE INFORMATION
	================
	
	Internet Information Server and Microsoft Visual Studio use Machine Debug
	Manager (Mdm.exe) to provide application debugging. Machine Debug Manager is
	initialized whenever IIS is started.
	
	When IIS is running in-process (Inetinfo.exe), the System account starts and
	accesses Machine Debug Manager. In addition, the System account allows the
	operating system components, such as RPC Endpoint Mapper (RPCSS), access to the
	DCOM server.
	
	When IIS is running out-of-process (Mtx.exe or Dllhost.exe), typically the
	IWAM_<ComputerName> account starts and accesses Machine Debug Manager.
	
	REFERENCES
	==========
	
	For additional information about using the Distributed COM Configuration
	Properties utility, click the article numbers below to view the articles in the
	Microsoft Knowledge Base:
	
	  Q176799 INFO: Using DCOM Config (DCOMCNFG.EXE) on Windows NT
	
	  Q246054 INFO: DCOMCNFG and AppID\.exe Mapping and Implications
	
	Additional query words:
	
	======================================================================
	Keywords          : kberrmsg kbDCOM kbDebug kbGrpDSASP kbDSupport kbiis400 kbiis500 
	Technology        : kbiisSearch kbiis500 kbiis400
	Version           : :4.0,5.0
	Issue type        : kbprb
	
	=============================================================================
	
