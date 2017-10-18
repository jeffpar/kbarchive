---
layout: page
title: "Q246784: RPC Services Do Not Start and 'Not Enough Resources' Message"
permalink: kb/246/Q246784/
---

## Q246784: RPC Services Do Not Start and 'Not Enough Resources' Message

	Article: Q246784
	Product(s): Microsoft Windows NT
	Version(s): 4.0
	Operating System(s): 
	Keyword(s): 
	Last Modified: 11-JUN-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Server version 4.0 
	- Microsoft Windows NT Workstation version 4.0 
	- Microsoft Windows NT Server, Enterprise Edition version 4.0 
	-------------------------------------------------------------------------------
	
	IMPORTANT: This article contains information about modifying the registry. Before you modify the registry, make sure to back it up and make sure that you understand how to restore the registry if a problem occurs. For information about how to back up, restore, and edit the registry, click the following article number to view the article in the Microsoft Knowledge Base:
	
	  Q256986 Description of the Microsoft Windows Registry
	
	SYMPTOMS
	========
	
	When you start a computer running Microsoft Windows NT 4.0 (Service Pack 4), the
	network services that Remote Procedure Call (RPC) enables may not start, and the
	following error message may appear:
	
	  Not enough resources are available to complete this operation.
	
	The network services that may not start include, but are not limited to, the
	following:
	
	- Domain Name Service (DNS)
	- Dynamic Host Configuration Protocol (DHCP)
	- Windows Internet Naming Service (WINS)
	- World Wide Web (WWW) Publishing
	- File Transfer Protocol (FTP) Publishing
	- Network New Transfer Protocol (NNTP)
	- Simple Mail Transport Protocol (SMTP)
	
	Also, the System log in Event Viewer may record Events 4156, 453, 1006, 1008, and
	7023.
	
	CAUSE
	=====
	
	This behavior can occur when there is a hyphen in a port range in Dcomcnfg. The
	system adds a space before and after the hyphen when it writes the port range to
	the registry, making (for example) the range 4000-4010 appear as 4000 - 4010.
	RPC does not recognize this string format and responds to the
	RpcServerUseProtseq call with RPC_S_OUT_OF_RESOURCES.
	
	RESOLUTION
	==========
	
	WARNING: If you use Registry Editor incorrectly, you may cause serious problems
	that may require you to reinstall your operating system. Microsoft cannot
	guarantee that you can solve problems that result from using Registry Editor
	incorrectly. Use Registry Editor at your own risk.
	
	To work around this behavior, manually remove the extra spaces in the port range
	data:
	
	1. Use Registry Editor (Regedt32).
	
	2. Locate and select the following registry key:
	
	  HKEY_LOCAL_MACHINE\Software\Microsoft\Rpc\Internet\Ports
	
	3. In the right pane, double-click the Ports value.
	
	4. Delete the spaces immediately before and after the hyphen in the port range.
	
	5. Quit Registry Editor.
	
	6. Restart the computer.
	
	MORE INFORMATION
	================
	
	Windows NT 4.0 Enterprise Edition, Microsoft Cluster Service (MSCS)
	-------------------------------------------------------------------
	
	MSCS or Clussvc may not start as well and you may receive the following:
	
	  System Log: Event Viewer
	
	  Event ID: 7023Service Control ManagerN/A<Servername>
	
	  The Cluster Server service terminated with the following error: %%1721
	
	where <Servername> is the name of the Cluster Node that failed to start
	cluster service.
	
	If we check the error code for 1721, it states:
	
	  "Not enough resources are available to complete this operation."
	
	NOTE: This error mssg is reported by the Service Control Manager.
	
	Resolution: The same workaround applies. The version of Dcomcnfg.exe has also
	been updated with a hotfix post SP6a to address this issue. This issue does not
	appear to affect Windows 2000 solutions.
	
	For additional information, click the article number below to view the article in
	the Microsoft Knowledge Base:
	
	  Q252589 Dcomcnfg.exe Utility Improvements, Fixes, Registry Entries and Format
	  of Ports Range Value
	
	Additional query words: www wins dhcp ftp dns nntp smtp error fail start event 4156 453 1006 1008 mscs cluster 1721 7023
	
	======================================================================
	Keywords          :  
	Technology        : kbWinNTsearch kbWinNTWsearch kbWinNTW400 kbWinNTW400search kbWinNT400search kbWinNTSsearch kbWinNTSEntSearch kbWinNTSEnt400 kbWinNTS400search kbWinNTS400
	Version           : :4.0
	Issue type        : kbprb
	
	=============================================================================
	
