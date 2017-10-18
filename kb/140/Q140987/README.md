---
layout: page
title: "Q140987: Errors Removing TCP/IP Registry Keys Using Insight Manager"
permalink: kb/140/Q140987/
---

## Q140987: Errors Removing TCP/IP Registry Keys Using Insight Manager

	Article: Q140987
	Product(s): Microsoft Windows NT
	Version(s): 3.50 3.51
	Operating System(s): 
	Keyword(s): 
	Last Modified: 08-AUG-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Workstation versions 3.5, 3.51 
	- Microsoft Windows NT Server versions 3.5, 3.51 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	On Compaq file servers that are using versions of Windows NT Server that are
	installed using the SmartStart compact disc, a user may have difficulties
	reinstalling TCP/IP or other TCP/IP related services.
	
	Insight Manager is a systems management tool that provides performance and
	configuration management for Compaq servers and desktop clients. However,
	Insight Manager can complicate the process that is used to remove all traces of
	TCP/IP from the Windows NT registry. This article helps to identify those
	Insight Manager entries and prepare Windows NT Server for a trouble-free,
	reinstallation of TCP/IP and related components.
	
	MORE INFORMATION
	================
	
	There are many reasons why a Windows NT Server operator may need to remove and
	readd TCP/IP and/or the related components. Because of service dependencies that
	exist when these components are removed, the next time the system is booted and
	the operator tries to readd these components, the installation fails
	nevertheless with one or more of the following error messages:
	
	- Registry Service Subkey Already Exists.
	
	- Registry Subkey Already Exists.
	
	- Unable to remove name space provider
	
	This error occurs whether the options to add them are grayed out, or whether the
	individual check boxes for TCP/IP, Simple TCP/IP Tools, FTP Server, SNMP, WINS
	Server, DHCP Server appear.
	
	If the installed TCP/IP components are from Microsoft installation media and you
	want to properly remove all references to the TCP/IP tools, please see the
	following articles in the Microsoft Knowledge Base for instructions:
	
	  ARTICLE-ID: Q122398
	  TITLE : TCP/IP Internetworking Components Not Available
	
	  ARTICLE-ID: Q102973
	  TITLE : REG: TCP/IP Transport Entries, PART 1
	
	  ARTICLE-ID: Q102974
	  TITLE : REG: TCP/IP Transport Entries, PART 2
	
	NOTE: Q102973 and Q102974 go into greater detail regarding the TCP/IP entries in
	the registry.
	
	After you remove the registry entries, reinstall the TCP/IP components that are
	needed.
	
	If Windows NT Server was installed from the Compaq SmartStart compact disc along
	with the TCP/IP components, Compaq Insight Manager may also have been
	installed.
	
	If Insight Manager is installed and the operator has tried removing and readding
	TCP/IP components, they may have been able to get past the TCP/IP installation
	check boxes, but Setup always detects another TCP/IP component that is already
	installed and will prompt with "Registry Service Subkey Already Exists." causing
	the TCP/IP installation to fail. To successfully reinstall the TCP/IP
	components, any Insight Manager entries will need to be deleted from the
	registry.
	
	WARNING: Using Registry Editor incorrectly can cause serious, system- wide
	problems that may require you to reinstall Windows NT to correct them. Microsoft
	cannot guarantee that any problems resulting from the use of Registry Editor can
	be solved. Use this tool at your own risk. Insight Manager is a Compaq product.
	If you have questions regarding this product and the changes that it makes to
	the Registry, please contact Compaq Technical Support.
	
	1. Stop the Compaq Insight Manager Service from the Services Control Panel.
	
	2. From File Manager, delete the %SYSTEMROOT%\SYSTEM32\CPQMGMT subdirectory.
	
	3. Run Registry Editor (REGEDT32.EXE) and under the HKEY_LOCAL_MACHINE\SYSTEM
	  subtree delete the following keys:
	
	  \COMPAQ
	
	  \COMPAQPERMANENT
	
	4. Quit Registry Editor and reboot the server.
	
	5. Run Control Panel and choose Network and then Add Software.
	
	6. Choose "TCP/IP and Related Components" from the list of software and select
	  the check boxes next to the components that need to be added (TCP/IP, Simple
	  TCP/IP, etc.) and click OK.
	
	7. Insert the Windows NT floppy disk or compact disc when prompted.
	
	  The install should complete successfully after copying the appropriate files
	  and making necessary registry changes.
	
	8. Reboot the server.
	
	9. (Optional) If the system requires Insight Manager to be running on the
	  server, then go ahead and complete its installation per Compaq instructions
	  (typically, this means that the SNMP service under TCP/IP must be installed
	  in step 5 and 6).
	
	The Compaq products discussed here are manufactured by Compaq Computer Corp., a
	vendor independent of Microsoft; we make no warranty, implied or otherwise,
	regarding these products' performance or reliability.
	
	Additional query words: prodnt
	
	======================================================================
	Keywords          :  
	Technology        : kbWinNTsearch kbWinNTWsearch kbWinNT351search kbWinNT350search kbWinNTW350 kbWinNTW350search kbWinNTW351search kbWinNTW351 kbWinNTSsearch kbWinNTS351 kbWinNTS350 kbWinNTS351search kbWinNTS350search
	Version           : 3.50 3.51
	
	=============================================================================
	
