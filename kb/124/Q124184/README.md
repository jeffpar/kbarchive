---
layout: page
title: "Q124184: Service Running as System Account Fails Accessing Network"
permalink: kb/124/Q124184/
---

## Q124184: Service Running as System Account Fails Accessing Network

	Article: Q124184
	Product(s): Microsoft Windows NT
	Version(s): 3.5,4.0
	Operating System(s): 
	Keyword(s): kbKernBase kbSecurity kbFAQ KbSECVulnerability
	Last Modified: 29-APR-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Workstation versions 3.5, 4.0 
	- Microsoft Windows NT Server versions 3.5, 4.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When an application is started using the system account, it logs on with null
	credentials. If it attempts to access a remote Windows NT 3.5 server resource
	(using a null session), it fails. Scheduler service scripts (AT command) and
	other service or application operations attempting to access server resources
	over the network receive errors such as the following:
	
	  Error 5: Access is denied.
	
	When an application using the system account uses a UNC name to access a shared
	resource, the following error message is returned:
	
	  File Not Found
	
	NOTE: Scheduler service script error messages can be caught by redirecting the AT
	command to a file.
	
	CAUSE
	=====
	
	Services, including the Scheduler, use null session support when logged on as
	system account to interact with desktop.
	
	Windows NT version 3.1 supports null sessions by default. However, Windows NT
	version 3.5 does not provide this support unless specifically configured to do
	so. This change was made in order to provide a higher default level of
	security.
	
	
	When a process is running under the context of the system account, it attempts to
	use a null session for credentials to acquire a resource access. AT scripts
	performing commands, such as NET USE, will default to these credentials. A
	protocol analyzer trace reveals the null session request associated with the
	Server Message Block (SMB) Session Setup & X in which no explicit
	credentials are passed.
	
	RESOLUTION
	==========
	
	Do not use the system account. Services, such as Scheduler, and custom
	applications can be configured using user-specific accounts. User-specific
	accounts provide user level security based on a specific account and associated
	password.
	
	NOTE: For more information, see Chapter 15: Server Manager, Assigning a Logon
	Account to the Schedule Service in the "Windows NT Server 3.5 System Guide."
	
	If you desire null session support, you can modify the registry of each remote
	resource computer as follows.
	
	WARNINGS:
	
	- A shared resource configured in this manner is not secure. Microsoft does not
	  recommend this configuration if null session security is a consideration.
	
	- Using the Registry Editor incorrectly can cause serious, system- wide
	  problems that may require you to reinstall Windows NT to correct them.
	  Microsoft cannot guarantee that any problems resulting from the use of the
	  Registry Editor can be solved. Use this tool at your own risk.
	
	1. Start the registry editor, REGEDT32.EXE
	
	2. From the HKEY_LOCAL_MACHINE subtree, go to the following key:
	
	     \System
	       \CurrentControlSet
	         \Services
	           \LanmanServer
	             \Parameters
	               \NullSessionShares
	
	  NOTE: NullSessionShares is type REG_MULTI_SZ
	
	3. On a new line within the NullSessionShares key, type in the share you want to
	  access with a null session (for example: "PUBLIC")
	
	4. If your application uses Named Pipes and requires null session support.
	
	  a. From the HKEY_LOCAL_MACHINE subtree, go to the following key:
	
	        \System
	          \CurrentControlSet
	            \Services
	              \LanmanServer
	                \Parameters
	                  \NullSessionPipes
	
	     NOTE: NullSessionPipes is type REG_MULTI_SZ
	
	  b. On a new line within the NullSessionShares key, type in the pipe you want
	     to access with a null session.
	
	5. Stop and restart the server.
	
	For additional information, please see the following articles in the Microsoft
	Knowledge Base:
	
	  ARTICLE-ID: Q132679
	  TITLE : Local System Account and Null Sessions in Windows NT
	
	  ARTICLE-ID: Q122702
	  TITLE : Using the System Account as a Service in Windows NT 3.5
	
	  ARTICLE-ID: Q121281
	  TITLE : LMHOSTS #Include Directives Requires Null Session Support
	
	Additional query words: prodnt
	
	======================================================================
	Keywords          : kbKernBase kbSecurity kbFAQ KbSECVulnerability 
	Technology        : kbWinNTsearch kbWinNTWsearch kbWinNTW400 kbWinNTW400search kbWinNT350search kbWinNT400search kbWinNTW350 kbWinNTW350search kbWinNTSsearch kbWinNTS400search kbWinNTS400 kbWinNTS350 kbWinNTS350search
	Version           : :3.5,4.0
	
	=============================================================================
	
