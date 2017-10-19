---
layout: page
title: "Q311718: Unable to Suppress SNA/HIS Client SnaBase Pop-up Error Dialogs"
permalink: /kb/311/Q311718/
---

## Q311718: Unable to Suppress SNA/HIS Client SnaBase Pop-up Error Dialogs

	Article: Q311718
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
	
	SUMMARY
	=======
	
	SNA Server and Host Integration Server (HIS) 2000 clients display pop-up error
	dialog boxes when SnaBase detects various errors. For example, if SnaBase is
	unable to open a sponsor connection to an HIS 2000 server, the following pop-up
	error dialog box will be displayed:
	
	  Host Integration Server - ERROR # 1003
	
	  SnaBase could not open a sponsor connection to server <server name>
	
	These SnaBase error dialogs cannot be suppressed on SNA Server and HIS 2000
	clients.
	
	MORE INFORMATION
	================
	
	SNA Server 4.0
	--------------
	
	A supported feature that modifies the product's default behavior is now available
	from Microsoft, but it is only intended to modify the behavior described in this
	article and should be applied only to systems having a specific need for it.
	This feature may receive additional testing at a later time, to further ensure
	product quality. Therefore, if you are not severely affected by the lack of this
	feature, Microsoft recommends that you wait for the next Microsoft SNA Server
	version 4.0 service pack that contains this feature.
	
	To obtain this feature immediately, contact Microsoft Product Support Services.
	For a complete list of Microsoft Product Support Services phone numbers and
	information on support costs, please go to the following address on the World
	Wide Web:
	
	  http://support.microsoft.com/default.aspx?scid=fh;EN-US;CNTACTMS
	
	The English version of this feature should have the following file attributes or
	later:
	
	+--------------------------------+
	| File name   | Date     | Time  | 
	+--------------------------------+
	| Snabase.exe | xx/xx/xx | xx:xx | 
	+--------------------------------+
	
	NOTE: Date and time information will be provided as soon as it becomes
	available.
	
	
	NOTE: Because of file dependencies, the most recent fix that contains the above
	files may also contain additional files.
	
	
	Host Integration Server 2000
	----------------------------
	
	A supported feature that modifies the product's default behavior is now available
	from Microsoft, but it is only intended to modify the behavior described in this
	article and should be applied only to systems having a specific need for it.
	This feature may receive additional testing at a later time, to further ensure
	product quality. Therefore, if you are not severely affected by the lack of this
	feature, Microsoft recommends that you wait for the next Microsoft Host
	Integration Server 2000 service pack that contains this feature.
	
	To obtain this feature immediately, contact Microsoft Product Support Services.
	For a complete list of Microsoft Product Support Services phone numbers and
	information on support costs, please go to the following address on the World
	Wide Web:
	
	  http://support.microsoft.com/default.aspx?scid=fh;EN-US;CNTACTMS
	
	The English version of this feature should have the following file attributes or
	later:
	
	+--------------------------------+
	| File name   | Date     | Time  | 
	+--------------------------------+
	| Snabase.exe | xx/xx/xx | xx:xx | 
	+--------------------------------+
	
	NOTE: Date and time information will be provided as soon as it becomes
	available.
	
	
	NOTE: Because of file dependencies, the most recent fix that contains the above
	files may also contain additional files.
	
	
	After you apply the update, all SnaBase popup error dialog boxes can be
	suppressed by adding a registry entry, as follows.
	
	WARNING: If you use Registry Editor incorrectly, you may cause serious problems
	that may require you to reinstall your operating system. Microsoft cannot
	guarantee that you can solve problems that result from using Registry Editor
	incorrectly. Use Registry Editor at your own risk.
	
	SNA Server Client for Windows 9x and HIS 2000 End-User Client:
	
	1. Start Registry Editor (Regedt32.exe).
	
	2. Locate and click the following key in the registry:
	
	  HKEY_LOCAL_MACHINE/SOFTWARE/Microsoft/SnaBase/Parameters
	
	3. From the Edit menu, click Add Value, and then add the following registry
	  value:
	
	  Value name: Quiet
	  Data type: REG_SZ
	  Value data: YES
	
	If this key is not added prior to initializing SnaBase for the first time on an
	HIS 2000 End-User client, the key will have to be added to the following
	location:
	
	  HKEY_CURRENT_USER/SOFTWARE/Microsoft/SnaBase/Parameters
	
	4. Quit Registry Editor.
	
	HIS 2000 Admin Client:
	
	1. Start Registry Editor (Regedt32.exe).
	
	2. Locate and click the following key in the registry:
	
	   - If SnaBase is configured to run as an application:
	
	  HKEY_LOCAL_MACHINE/SOFTWARE/Microsoft/SnaBase/Parameters
	
	   - If SnaBase is configured to run as a service:
	
	  HKEY_LOCAL_MACHINE/SYSTEM/CurrentControlSet/Services/SnaBase/Parameter
	
	3. From the Edit menu, click Add Value, and then add the following registry
	  value:
	
	  Value name: Quiet
	  Data type: REG_SZ
	  Value data: YES
	
	4. Quit Registry Editor.
	
	Additional query words:
	
	======================================================================
	Keywords          : kbDSupport sna4 kbsna400sp1 kbsna400sp2 kbsna400sp3 kbhis2000 kbsna400sp4 
	Technology        : kbAudDeveloper kbSNAServSearch kbHostIntegServ2000 kbSNAServ400 kbSNAServ400SP1 kbSNAServ400SP2 kbSNAServ400SP3 kbSNAServ400SP4
	Version           : :4.0,4.0 SP1,4.0 SP2,4.0 SP3,4.0 SP4
	Issue type        : kbinfo
	
	=============================================================================
	
