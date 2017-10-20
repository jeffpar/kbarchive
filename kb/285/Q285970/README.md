---
layout: page
title: "Q285970: Additional SNA Server Services Cannot Use Specific TCP/IP Ports"
permalink: /kb/285/Q285970/
---

## Q285970: Additional SNA Server Services Cannot Use Specific TCP/IP Ports

{% raw %}

	Article: Q285970
	Product(s): Microsoft SNA Server
	Version(s): 4.0,4.0 SP1,4.0 SP2,4.0 SP3,4.0 SP4
	Operating System(s): 
	Keyword(s): kbDSupport sna4 kbsna400sp1 kbsna400sp2 kbsna400sp3 kbhis2000 kbsna400sp4
	Last Modified: 11-JUN-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft SNA Server, versions 4.0, 4.0 SP1, 4.0 SP2, 4.0 SP3, 4.0 SP4 
	- Microsoft Host Integration Server 2000 
	-------------------------------------------------------------------------------
	
	IMPORTANT: This article contains information about modifying the registry. Before you modify the registry, make sure to back it up and make sure that you understand how to restore the registry if a problem occurs. For information about how to back up, restore, and edit the registry, click the following article number to view the article in the Microsoft Knowledge Base:
	
	  Q256986 Description of the Microsoft Windows Registry
	
	SYMPTOMS
	========
	
	SNA Server 4.0 (all service packs) and Host Integration Server 2000 allow
	multiple SNA Server services (Snaservr.exe) to be installed and configured to
	provide for increased session capacity. However, the additional SNA Server
	services cannot be configured to use specific software ports in environments
	that implement Internet firewalls. Therefore, the default ports listed here are
	used by the additional SNA Server services:
	
	+--------------------------------------------+
	| Port          | TCP/IP | IPX/SPX | Vines   | 
	+--------------------------------------------+
	| SnaServerPort | 1477   | 0x84C9  | Dynamic | 
	+--------------------------------------------+
	
	CAUSE
	=====
	
	The ability to configure the software ports used by the additional SNA Server
	services was not implemented in SNA Server 4.0 or Host Integration Server 2000.
	
	RESOLUTION
	==========
	
	SNA Server 4.0
	--------------
	
	A supported fix is now available from Microsoft, but it is only intended to
	correct the problem described in this article and should be applied only to
	systems experiencing this specific problem. This fix may receive additional
	testing at a later time, to further ensure product quality. Therefore, if you
	are not severely affected by this problem, Microsoft recommends that you wait
	for the next Microsoft SNA Server version 4.0 service pack that contains this
	fix.
	
	To resolve this problem immediately, contact Microsoft Product Support Services
	to obtain the fix. For a complete list of Microsoft Product Support Services
	phone numbers and information about support costs, please go to the following
	address on the World Wide Web:
	
	  http://support.microsoft.com/default.aspx?scid=fh;EN-US;CNTACTMS
	
	NOTE: In special cases, charges that are normally incurred for support calls may
	be canceled, if a Microsoft Support Professional determines that a specific
	update will resolve your problem. Normal support costs will apply to additional
	support questions and issues that do not qualify for the specific update in
	question.
	
	The English version of this fix should have the following file attributes or
	later:
	
	+------------------------------------+
	| File name   | Date       | Time    | 
	+------------------------------------+
	| Snadmod.dll | 01/04/2001 | 07:16PM | 
	+------------------------------------+
	| Snaip.dll   | 01/04/2001 | 07:16PM | 
	+------------------------------------+
	
	NOTE: Because of file dependencies, the most recent fix that contains the above
	files may also contain additional files.
	
	
	
	Host Integration Server 2000
	----------------------------
	
	A supported fix is now available from Microsoft, but it is only intended to
	correct the problem described in this article and should be applied only to
	systems experiencing this specific problem. This fix may receive additional
	testing at a later time, to further ensure product quality. Therefore, if you
	are not severely affected by this problem, Microsoft recommends that you wait
	for the next Microsoft Host Integration Server 2000 service pack that contains
	this fix.
	
	To resolve this problem immediately, contact Microsoft Product Support Services
	to obtain the fix. For a complete list of Microsoft Product Support Services
	phone numbers and information about support costs, please go to the following
	address on the World Wide Web:
	
	  http://support.microsoft.com/default.aspx?scid=fh;EN-US;CNTACTMS
	
	NOTE: In special cases, charges that are normally incurred for support calls may
	be canceled, if a Microsoft Support Professional determines that a specific
	update will resolve your problem. Normal support costs will apply to additional
	support questions and issues that do not qualify for the specific update in
	question.
	
	The English version of this fix should have the following file attributes or
	later:
	
	+------------------------------------+
	| File name   | Date       | Time    | 
	+------------------------------------+
	| Snadmod.dll | 12/19/2000 | 12:00PM | 
	+------------------------------------+
	| Snaip.dll   | 12/19/2000 | 12:00PM | 
	+------------------------------------+
	
	NOTE: Because of file dependencies, the most recent fix that contains the above
	files may also contain additional files.
	
	
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in Microsoft SNA Server versions
	4.0, 4.0 SP1, 4.0 SP2, 4.0 SP3, 4.0 SP4, and Host Integration Server 2000.
	
	MORE INFORMATION
	================
	
	The following Microsoft Knowledge Base article describes how to configure SNA
	Server and Host Integration Server 2000 to use specific software port numbers
	for environments that implement Internet firewalls:
	
	  Q139508 Internet Firewall Support in SNA Server
	
	WARNING: If you use Registry Editor incorrectly, you may cause serious problems
	that may require you to reinstall your operating system. Microsoft cannot
	guarantee that you can solve problems that result from using Registry Editor
	incorrectly. Use Registry Editor at your own risk.
	
	Article Q139508 describes how to change the port used by the primary SNA Server
	service (Snaservr.exe) by setting a registry entry called SnaServerPort.
	
	After applying the fixes described in this article, the additional SNA Server
	services can be configured to use specific software ports by adding the
	following registry entries:
	
	- SnaServer2Port
	
	- SnaServer3Port
	
	- SnaServer4Port
	
	These entries are added in the same location as the SnaServerPort entry for the
	primary SNA Server service. See Q139508 for additional detail.
	
	Additional query words:
	
	======================================================================
	Keywords          : kbDSupport sna4 kbsna400sp1 kbsna400sp2 kbsna400sp3 kbhis2000 kbsna400sp4 
	Technology        : kbAudDeveloper kbSNAServSearch kbHostIntegServ2000 kbSNAServ400 kbSNAServ400SP1 kbSNAServ400SP2 kbSNAServ400SP3 kbSNAServ400SP4
	Version           : :4.0,4.0 SP1,4.0 SP2,4.0 SP3,4.0 SP4
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	

{% endraw %}
