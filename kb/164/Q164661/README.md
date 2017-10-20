---
layout: page
title: "Q164661: SNA Server 3.0 Config Tool Incorrectly Sets Client Transports"
permalink: /kb/164/Q164661/
---

## Q164661: SNA Server 3.0 Config Tool Incorrectly Sets Client Transports

{% raw %}

	Article: Q164661
	Product(s): Microsoft SNA Server
	Version(s): WINDOWS:3.0
	Operating System(s): 
	Keyword(s): kbnetwork
	Last Modified: 11-JUN-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft SNA Server, version 3.0 
	-------------------------------------------------------------------------------
	
	
	IMPORTANT: This article contains information about modifying the registry. Before you modify the registry, make sure to back it up and make sure that you understand how to restore the registry if a problem occurs. For information about how to back up, restore, and edit the registry, click the following article number to view the article in the Microsoft Knowledge Base:
	
	  Q256986 Description of the Microsoft Windows Registry
	
	SYMPTOMS
	========
	
	The SNA Server Configuration Tool (Svconfig.exe) does not update the following
	registry entry to include the valid NameSpace values for the SNA Server
	transports that are chosen
	
	  HKEY_LOCAL_MACHINE
	     \SYSTEM
	        \CurrentControlSet
	           \Services
	              \SnaBase
	                 \Parameters
	                    \NameSpaces: REG_MULTI_SZ:<list>
	
	where the entries in the <list> are the DLL names listed below, listed on
	separate lines in the registry editor Multi-String Editor Data field. The valid
	NameSpace values for the various transports are shown here:
	
	  TCP/IP: ipbcast.dll
	  IPX/SPX: nwsap.dll
	  Microsoft Networking (Named Pipes): lmbcast.dll
	  Banyan Vines: bvnsst.dll
	  AppleTalk: atnbp.dll
	
	For example, if named pipes and TCP/IP are chosen, the entry will appear as
	
	  NameSpaces: REG_MULTI_SZ: lmbcast.dll ipbcast.dll
	
	NOTE: The Server Configuration Tool (Svconfig.exe) included with SNA Server 3.0
	can be used to change the following SNA Server settings:
	
	- Subdomain Name
	
	- Server Mode
	
	- Transports
	
	CAUSE
	=====
	
	The Server Configuration Tool as originally written did not update the NameSpace
	value in the registry.
	
	RESOLUTION
	==========
	
	Use either of the following two methods to work around this problem:
	
	- Use SNA Server Manager to change the SNA Server Transports instead of the SNA
	  Server Configuration Tool.
	
	  -or-
	
	- Manually add the appropriate NameSpace value to the registry after making a
	  change to the Transports using the SNA Server Configuration Tool.
	
	WARNING: If you use Registry Editor incorrectly, you may cause serious problems
	that may require you to reinstall your operating system. Microsoft cannot
	guarantee that you can solve problems that result from using Registry Editor
	incorrectly. Use Registry Editor at your own risk.
	
	The SNA Server Configuration Tool has been modified to correctly update the
	NameSpace value when making a change to the SNA Server transports. The following
	file has been updated:
	
	  <Snaroot>\System\Svconfig.exe
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in SNA Server version 3.0. This
	problem was corrected in the latest Microsoft SNA Server 3.0 U.S. Service Pack.
	For information on obtaining the service pack, query on the following word in
	the Microsoft Knowledge Base (without the spaces):
	
	  S E R V P A C K
	
	Additional query words:
	
	======================================================================
	Keywords          : kbnetwork 
	Technology        : kbAudDeveloper kbSNAServSearch kbSNAServ300
	Version           : WINDOWS:3.0
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	

{% endraw %}
