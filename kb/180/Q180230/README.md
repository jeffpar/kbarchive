---
layout: page
title: "Q180230: Windows NT or Win95 Client Sponsor Connection Returns Err. Msg."
permalink: /kb/180/Q180230/
---

## Q180230: Windows NT or Win95 Client Sponsor Connection Returns Err. Msg.

{% raw %}

	Article: Q180230
	Product(s): Microsoft SNA Server
	Version(s): WINDOWS:2.11,3.0,3.0 SP1,3.0 SP2
	Operating System(s): 
	Keyword(s): 
	Last Modified: 11-JUN-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft SNA Server Windows NT client, versions 2.11, 3.0, 3.0 SP1, 3.0 SP2 
	- Microsoft SNA Server Windows 95 client, versions 3.0, 3.0 SP1, 3.0 SP2 
	-------------------------------------------------------------------------------
	
	IMPORTANT: This article contains information about editing the registry.
	Before you edit the registry, make sure you understand how to restore it if
	a problem occurs. For information about how to do this, view the "Restoring
	the Registry" Help topic in Regedit.exe or the "Restoring a
	Registry Key" Help topic in Regedt32.exe.
	
	SYMPTOMS
	========
	
	The timeout for a Microsoft SNA Windows NT and Microsoft SNA Windows 95 client
	sponsor connection is coded to 30 seconds. After opening a sponsor connection,
	the client waits 30 seconds for the server to respond with either Open(OK) or
	Open(Error) message. If the response does not arrive in this time, the SnaBase
	assumes the server is not available. During this 30 seconds, the server must be
	able to validate the client's userid or password. On slow networks, this may not
	be enough time and will cause the client to return an error message, indicating
	lack of sponsor connection or an inability to find a sponsor SNA Server
	computer.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in the following Microsoft SNA
	Server clients:
	Microsoft SNA Server Windows NT client version 2.11
	Microsoft SNA Server Windows NT client versions 3.0, 3.0 SP1, 3.0 SP2
	Microsoft SNA Server Windows 95 client versions 3.0, 3.0 SP1, 3.0 SP2
	
	This problem was corrected in SNA Server 4.0 and 4.0 SP1.
	
	This problem was corrected in the latest SNA Server version 3.0 U.S. Service
	Pack. For information on obtaining this Service Pack, query on the following
	word in the Microsoft Knowledge Base (without the spaces):
	
	  S E R V P A C K
	
	
	A supported fix for SNA Server versions 2.11 is now available, but has not been
	fully regression-tested and should be applied only to systems experiencing this
	specific problem. Unless you are severely impacted by this specific problem,
	Microsoft recommends that you wait for the next Service Pack that contains this
	fix. Contact Microsoft Technical Support for more information.
	
	
	
	MORE INFORMATION
	================
	
	WARNING: If you use Registry Editor incorrectly, you may cause serious problems
	that may require you to reinstall your operating system. Microsoft cannot
	guarantee that you can solve problems that result from using Registry Editor
	incorrectly. Use Registry Editor at your own risk.
	
	Two steps are necessary in order to modify the 30-second timeout:
	
	1. In a Windows NT environment, modify the following registry entry:
	
	  HKEY_LOCAL_MACHINE\System\CurrentControlSet\Services\SnaBase\ 
	     Parameters\SponsorTimeout:REG_DWORD:<timeout in seconds>.
	
	  In a Windows 95 environment, modify the following registry entry:
	
	  HKEY_LOCAL_MACHINE\Software\Microsoft\SnaBase\Parameters\ 
	     SponsorTimeout:REG_DWORD:<timeout in seconds>
	
	  The default value is 30.
	
	2. Obtain the updated <snaroot>\system\snabase.exe and
	  <ntroot>\symbols\exe\snabase.dbg modules from Microsoft. To apply the
	  update, stop all SNA Server applications, and run hotfix /i to install the
	  hotfix. This update procedure replaces both the DLL file and the debug symbol
	  file. Note: These updates are included in SNA Server 4.0 and 4.0 SP1.
	
	Additional query words:
	
	======================================================================
	Keywords          :  
	Technology        : kbAudDeveloper kbSNAServSearch kbSNAServ300NT kbSNAServ211NT kbSNAServ300NTSP1 kbSNAServ300NTSP2 kbSNAServ300Win95 kbSNAServ300Win95SP1 kbSNAServ300Win95SP2
	Version           : WINDOWS:2.11,3.0,3.0 SP1,3.0 SP2
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	

{% endraw %}
