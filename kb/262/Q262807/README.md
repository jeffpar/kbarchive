---
layout: page
title: "Q262807: How to Use the SNA Server Linkcfg.exe on Windows 2000"
permalink: kb/262/Q262807/
---

## Q262807: How to Use the SNA Server Linkcfg.exe on Windows 2000

	Article: Q262807
	Product(s): Microsoft SNA Server
	Version(s): WINDOWS:2000,4.0 SP3; :
	Operating System(s): 
	Keyword(s): kbsna400sp3
	Last Modified: 27-OCT-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft SNA Server, version 4.0 SP3 
	- Microsoft Windows 2000 Advanced Server 
	- Microsoft Windows 2000 Server 
	- Microsoft Host Integration Server 2000 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	The Linkcfg.exe tool included with Microsoft SNA Server 4.0 and Host Integration
	Server 2000 allows SNA link services to be installed from a command line. When
	you install an SNA DLC 802.2 link service on a Windows NT 4.0-based computer,
	the /ADAPTERTYPE parameter refers to the logical "name" of the adapter driver.
	For example:
	
	  
	  C:\>linkcfg LINKSVC "SnaDlc1" /SERVER:MYSERVER /LSTYPE:"DLC 802.2 Link Service" /ADAPTERTYPE:ce3 /DISTRIBUTABLE:NO /USEFIXEDSAP:NO
	
	However, on a Windows 2000-based computer, the /ADAPTERTYPE parameter must be
	specified by using a special class value associated with the network adapter
	driver. For example:
	
	  
	  C:\>linkcfg LINKSVC "SnaDlc1" /SERVER:MYSERVER /LSTYPE:"DLC 802.2 Link Service" /ADAPTERTYPE:{32DC5199-7833-47B3-A07E-77C6FE33B41F} /DISTRIBUTABLE:NO /USEFIXEDSAP:NO
	
	For instructions on how to locate the /ADAPTERTYPE value, see the "More
	Information" section of this article .
	
	NOTE: SNA Server 4.0 SP3 is supported on Windows 2000. For additional
	information, click the article number below to view the article in the Microsoft
	Knowledge Base:
	
	  Q251320 Installing SNA Server on Windows 2000
	
	CAUSE
	=====
	
	On a Windows 2000-based computer, the network adapters that are bound to the DLC
	transport are represented differently than they are on Windows NT 4.0-based
	computers.
	
	MORE INFORMATION
	================
	
	The Linkcfg.exe tool allows an administrator to install link services from the
	command line. When you install a DLC 802.2 link service on Windows NT 4.0-based
	computers, the syntax for SNA Server 4.0 or Host Integration Server 2000 is as
	follows:
	
	  
	  C:\>linkcfg LINKSVC "SnaDlc1" /SERVER:MYSERVER /LSTYPE:"DLC 802.2 Link Service" /ADAPTERTYPE:ce3 /DISTRIBUTABLE:NO /USEFIXEDSAP:NO
	
	In this example, "ce3" is the network card driver name that DLC binds to. The
	"ce3" value can be found under the following registry key of the target server:
	
	  HKEY_LOCAL_MACHINE\SYSTEM\CurrentControlSet\Services\DLC\Parameters\ce3\
	
	However, on Windows 2000-based computers, the network card driver (for example
	"ce3") is replaced by a class identifier. Therefore, the DLC adapter interface
	is represented as follows:
	
	  HKEY_LOCAL_MACHINE\SYSTEM\CurrentControlSet\Services\DLC\Parameters\{32DC5199-7833-47B3-A07E-77C6FE33B41F}
	
	The network adapter is registered in the Windows 2000 Network Adapter class as
	follows:
	
	  HKEY_LOCAL_MACHINE\SYSTEM\CurrentControlSet\Control\Network\{4D36E972-E325-11CE-BFC1-08002BE10318}\{32DC5199-7833-47B3-A07E-77C6FE33B41F}
	
	{4D36E972-E325-11CE-BFC1-08002BE10318} is the Network Adapter class on Windows
	2000-based computers. The subkeys are the class IDs associated with the actual
	network adapters themselves. Therefore, for The Linkcfg.exe tool to work
	properly on Windows 2000, the adapter class ID must be used for the /ADAPTERTYPE
	value. For example:
	
	  
	  C:\>linkcfg LINKSVC "SnaDlc1" /SERVER:MYSERVER /LSTYPE:"DLC 802.2 Link Service" /ADAPTERTYPE:{32DC5199-7833-47B3-A07E-77C6FE33B41F} /DISTRIBUTABLE:NO /USEFIXEDSAP:NO
	
	Each physical network adapter and logical adapter installed on Windows 2000, has
	a unique subkey located under the following registry key:
	
	  HKEY_LOCAL_MACHINE\SYSTEM\CurrentControlSet\Control\Class\{4D36E972-E325-11CE-BFC1-08002BE10318}
	
	The subkeys are named 0000, 0001, 0002, and so on. Under these subkeys, see the
	following registry values to get more information on each adapter:
	
	   - DriverDesc (REG_SZ): Description of the physical network adapter's make
	  and/or model
	
	- NetCfgInstanceId (REG_SZ): Class ID for the adapter
	
	NOTE: When the linkcfg utility is used to add DLC link services, the connection
	type will be listed as Token Ring. If the adapter is ethernet, the connection
	will still work.
	
	
	Additional query words:
	
	======================================================================
	Keywords          : kbsna400sp3 
	Technology        : kbwin2000AdvServ kbwin2000AdvServSearch kbwin2000Serv kbwin2000ServSearch kbwin2000Search kbAudDeveloper kbSNAServSearch kbWinAdvServSearch kbHostIntegServ2000 kbSNAServ400SP3
	Version           : WINDOWS:2000,4.0 SP3; :
	Issue type        : kbprb
	
	=============================================================================
	
