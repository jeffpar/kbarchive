---
layout: page
title: "Q139300: SNA Remote Access Service Client May Not See Remote Network"
permalink: /kb/139/Q139300/
---

## Q139300: SNA Remote Access Service Client May Not See Remote Network

	Article: Q139300
	Product(s): Microsoft SNA Server
	Version(s): WINDOWS:2.1,2.11
	Operating System(s): 
	Keyword(s): 
	Last Modified: 11-JUN-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft SNA Server, versions 2.1, 2.11, on platform(s):
	   - the operating system: Microsoft Windows NT 
	-------------------------------------------------------------------------------
	
	
	IMPORTANT: This article contains information about modifying the registry. Before you modify the registry, make sure to back it up and make sure that you understand how to restore the registry if a problem occurs. For information about how to back up, restore, and edit the registry, click the following article number to view the article in the Microsoft Knowledge Base:
	
	  Q256986 Description of the Microsoft Windows Registry
	
	SYMPTOMS
	========
	
	When you are using SNA Remote Access Service (RAS), your SNA Server Windows NT
	client is not able to see servers on the remote network and the following error
	message appears when you attempt to issue the command NET VIEW
	\\<server_name>, where <server_name> is a server on the remote
	network:
	
	  System error 53 has occured.
	  The system path was not found.
	
	The local SNA Server of the SNA Server Windows NT client can view servers on the
	remote network.
	
	CAUSE
	=====
	
	The following configuration can cause this problem:
	
	An SNA Server NT client is running SNA Remote Access Service connected to a local
	SNA Server over a LAN connection. The local SNA Server is then connected to a
	Front End Processor. The Front End Processor is then connected to a remote SNA
	Server running SNA Remote Access Service.
	
	
	RESOLUTION
	==========
	
	WARNING: If you use Registry Editor incorrectly, you may cause serious problems
	that may require you to reinstall your operating system. Microsoft cannot
	guarantee that you can solve problems that result from using Registry Editor
	incorrectly. Use Registry Editor at your own risk.
	
	On the SNA Server Windows NT client, add the LinkSpeed parameter in the
	registry:
	
	1. Go to the HKEY_LOCAL_MACHINE subtree under the following subkey:
	
	SOFTWARE\Microsoft\RAS\OTHER DEVICES\CONFIGURED\SnaRas\ 
	
	2. Add the following:
	
	  For Value Name: LinkSpeed
	  For Data Type: REG_DWORD
	  For Data: <value>
	
	  where <value> is the baud rate of the local SNA Server link to the FEP.
	
	  Valid values are: 2400, 4800, 9600, etc.
	
	If the above registry entries do not correct the problem, add the
	AuthenticateTimeout registry parameter:
	
	1. Go to the HKEY_LOCAL_MACHINE subtree under the following subkey at both the
	  RAS server and client:
	
	SYSTEM\CurrentControlSet\Services\RemoteAccess\Parameters\ 
	
	2. Add the following information:
	
	  Value Name: AuthenticateTimeout
	  Data Type: REG_DWORD
	  Data: <value>
	
	  where value is 240 (decimal). The default is 120.
	
	
	3. Reboot.
	
	Microsoft has updated the following files to correct this problem:
	
	  <snaroot>\SYSTEM\SNARAS.DLL
	  <snaroot>\SYSTEM\RASSNA.DLL
	  <snaroot>\SYSTEM\TRCRAS.DLL
	  <snaroot>\SYSTEM\TRCRAS.DLL
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in SNA Server for Windows NT. This
	problem was corrected in the latest SNA Server for Windows NT, 2.11 U.S. Service
	Pack. For information on obtaining the Service Pack, query on the following word
	in the Microsoft Knowledge Base (without the spaces):
	
	  S E R V P A C K
	
	Additional query words: prodsna 2.10 2.11 3.50 3.51
	
	======================================================================
	Keywords          :  
	Technology        : kbAudDeveloper kbSNAServSearch
	Version           : WINDOWS:2.1,2.11
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	
