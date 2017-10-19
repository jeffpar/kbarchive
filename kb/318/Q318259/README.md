---
layout: page
title: "Q318259: Backup Server Returns &quot;Unable to Open Configuration&quot; Error Messa"
permalink: /kb/318/Q318259/
---

## Q318259: Backup Server Returns &quot;Unable to Open Configuration&quot; Error Messa

	Article: Q318259
	Product(s): Microsoft SNA Server
	Version(s): 3.0,4.0
	Operating System(s): 
	Keyword(s): kbsna400sp4 Kbhostintegserv2000
	Last Modified: 11-JUN-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft SNA Server, versions 3.0, 4.0 
	- Microsoft Host Integration Server 2000 
	-------------------------------------------------------------------------------
	
	IMPORTANT: This article contains information about modifying the registry. Before you modify the registry, make sure to back it up and make sure that you understand how to restore the registry if a problem occurs. For information about how to back up, restore, and edit the registry, click the following article number to view the article in the Microsoft Knowledge Base:
	
	  Q256986 Description of the Microsoft Windows Registry
	
	SYMPTOMS
	========
	
	When you open Microsoft SNA Server Manager on a backup Microsoft SNA Server or
	on a Microsoft Host Integration Server 2000 server, you may receive the
	following error message:
	
	  Unable to Open Configuration File, 352
	
	Additionally, a series of diagonal lines across the SNA Manager window.
	
	CAUSE
	=====
	
	The SNABase service that is on the backup server cannot complete copying the
	configuration file (Com.cfg) from the primary server to the SNABase service
	configuration folder.
	
	This behavior can occur for multiple reasons, including the following:
	
	- The backup server cannot open a named pipe connection to the primary server.
	
	- The backup server cannot complete the file copy locally because of incorrect
	  Write or Read permissions.
	
	RESOLUTION
	==========
	
	WARNING: If you use Registry Editor incorrectly, you may cause serious problems
	that may require you to reinstall your operating system. Microsoft cannot
	guarantee that you can solve problems that result from using Registry Editor
	incorrectly. Use Registry Editor at your own risk.
	
	Determine which LanManWorkstation provider that both servers are using. You can
	find this information in the following registry key:
	
	  HKEY_LOCAL_MACHINE\SYSTEM\CurrentControlSet\Services\LanmanWorkstation
	
	If multiple providers are installed on the servers, a registry subkey indicates
	the order of the providers. If the ProviderOrder subkey lists
	NetwareWorkstation;LanmanWorkstation, reverse the order of the providers, and
	place LanManWorkstation first.
	
	The existence of a Netware workstation value indicates that the Novell Client32
	has been installed. This problem occurs in Novell Client32 version 4.60;
	however, this problem may not occur on more recent versions.
	
	WORKAROUND
	==========
	
	To work around this problem, remove Novell Client32 version 4.60.
	
	MORE INFORMATION
	================
	
	
	For additional information about providers, click the article number below to
	view the article in the Microsoft Knowledge Base:
	
	  Q171386 Connectivity Delay with Multiple Redirectors Installed
	
	Troubleshooting
	---------------
	
	To trace the initial startup of the SNABase service, follow these steps:
	
	1. In SNA Manager, click Trace or Trace Initiator on the Tools menu to open the
	  SNATrace program.
	
	2. Click SNABase from the list of trace items, and then click Properties.
	
	3. Select all the trace items that appear in all windows, click Apply, and then
	  click Yes to exit with tracing on.
	
	4. Restart the SNABase service.
	
	5. After you receive the error message, open the SNA trace program, and then
	  click the "Clear all tracing" check box to stop tracing.
	
	To isolate the problem, follow these steps:
	
	1. To search for this error in the SNABase Internal and Message trace files
	  (Napint1.atf and Napmsg1.atf, respectively), search for the msgnum string,
	  which indicates the posted event (Event 671).
	
	2. Search earlier in the trace to find the actual error, which in this case is:
	
	  Path Not Found
	
	3. To test whether the issue is a copying problem, follow these steps:
	
	  a. Try to manually copy the file to the Universal Naming Convention (UNC)
	     name.
	
	  b. Create a mapping to the share.
	
	  c. Retest. If this is the issue, the system does not complete copying the
	     file to a UNC path.
	
	The system successfully copies the file to a mapped drive because Microsoft
	Windows NT and Microsoft Windows 2000 handle the two operations differently.
	
	
	The third-party products discussed in this article are manufactured by vendors
	independent of Microsoft; we make no warranty, implied or otherwise, regarding
	these products' performance or reliability.
	
	Additional query words:
	
	======================================================================
	Keywords          : kbsna400sp4 Kbhostintegserv2000 
	Technology        : kbAudDeveloper kbSNAServSearch kbHostIntegServ2000 kbSNAServ300 kbSNAServ400
	Version           : :3.0,4.0
	Issue type        : kbprb
	
	=============================================================================
	
