---
layout: page
title: "Q151195: LocalLUs Parameter Displays Printer LUs as Display LUs"
permalink: /kb/151/Q151195/
---

## Q151195: LocalLUs Parameter Displays Printer LUs as Display LUs

{% raw %}

	Article: Q151195
	Product(s): Microsoft SNA Server
	Version(s): WINDOWS:2.0,2.1,2.11,2.11 SP1
	Operating System(s): 
	Keyword(s): kbnetwork kbsetup kbnetserv
	Last Modified: 11-JUN-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft SNA Server, versions 2.0, 2.1, 2.11, 2.11 SP1, on platform(s):
	   - the operating system: Microsoft Windows NT 
	-------------------------------------------------------------------------------
	
	
	IMPORTANT: This article contains information about modifying the registry. Before you modify the registry, make sure to back it up and make sure that you understand how to restore the registry if a problem occurs. For information about how to back up, restore, and edit the registry, click the following article number to view the article in the Microsoft Knowledge Base:
	
	  Q256986 Description of the Microsoft Windows Registry
	
	SYMPTOMS
	========
	
	If 3270 Printer LUs are assigned to a computer using the LocalLUs parameter, the
	printer LU names are improperly displayed as 3270 Display LUs when viewed in a
	3270 Emulator.
	
	CAUSE
	=====
	
	The LocalLUs parameter was not designed to support printer LUs.
	
	RESOLUTION
	==========
	
	A new parameter called LocalPrinterLUs has been added to provide the capability
	of assigning printer LUs to a computer. If this parameter is present on a SNA
	Server client, the printer LUs in the User/Group record are replaced with the
	printer LUs specified in the LocalPrinterLUs parameter. The LocalPrinterLUs
	parameter supports a maximum of 10 printer LUs.
	
	The LocalPrinterLUs parameter is specified as follows:
	
	Win3x Clients
	-------------
	
	- Add the following entry to the [WNAP] Section of the WIN.INI file:
	
	  LocalPrinterLUs=<PrinterLUName1> <PrinterLUName2>
	  ...<PrinterLUNameX>
	
	  where <PrinterLUNameX> are LU names separated by spaces.
	
	Windows 95 Clients
	------------------
	
	WARNING: If you use Registry Editor incorrectly, you may cause serious problems
	that may require you to reinstall your operating system. Microsoft cannot
	guarantee that you can solve problems that result from using Registry Editor
	incorrectly. Use Registry Editor at your own risk.
	
	- Run the Registry Editor (REGEDIT), and locate the following key:
	
	         HKEY_LOCAL_MACHINE
	             SOFTWARE
	                 Microsoft
	                     SnaBase
	                         Parameters
	
	- Add the following string value to the Registry key:
	
	  String Value Name: LocalPrinterLUs
	  Data: <PrinterLUName1> <PrinterLUName2> ... <PrinterLUNameX>
	
	  where <PrinterLUNameX> are LU names separated by spaces.
	
	- Close the Registry Editor.
	
	Windows NT Clients
	------------------
	
	WARNING: Using Registry Editor incorrectly can cause serious, system-wide
	problems that may require you to reinstall Windows NT to correct them. Microsoft
	cannot guarantee that any problems resulting from the use of Registry Editor can
	be solved. Use this tool at your own risk.
	
	- Run the Registry Editor (REGEDT32), and locate the following key:
	
	     HKEY_LOCAL_MACHINE
	        SYSTEM
	            CurrentControlSet
	               Services
	                  SnaBase
	                     Parameters
	
	- Add the following value to the Registry key:
	
	  Value Name: LocalPrinterLUs Data Type:<A0><A0>REG_SZ
	  Data:<A0><A0><A0><A0><A0><A0><PrinterLUName1> <PrinterLUName2>
	  ...<PrinterLUNameX>
	
	  where <PrinterLUNameX> are LU names separated by spaces.
	
	- Close the Registry Editor.
	
	The following files have been updated to add the support for the new
	LocalPrinterLUs parameter:
	
	  Win3x Clients: <winroot>\System\Wdmod.dll
	  Windows 95 Clients: <winroot>\System\Snadmod.dll
	  Windows NT Clients: <snaroot>\System\Snadmod.dll
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in SNA Server versions 2.0, 2.1,
	2.11, and 2.11.sp1. This problem was corrected in the latest Microsoft SNA
	Server 2.11 U.S. Service Pack. For information on obtaining the service pack,
	query on the following word in the Microsoft Knowledge Base (without the
	spaces):
	
	  S E R V P A C K
	
	
	MORE INFORMATION
	================
	
	The LocalLUs parameter is used to specify the LUs to be used on the system,
	regardless of which user is logged on. If this variable is not used, SNA Server
	assigns LUs based on the User/Group records defined in SNA Server Admin.
	Reference to Appendix C of the SNA Server "Reference Guide" for more details on
	the LocalLUs parameter.
	
	For additional information on how SNA Server currently handles assigning LUs to a
	computer, please see the following article in the Microsoft Knowledge Base:
	
	  Q149802 Assigning 3270 LUs to Workstations Using SNA Server Client
	
	
	Additional query words:
	
	======================================================================
	Keywords          : kbnetwork kbsetup kbnetserv 
	Technology        : kbAudDeveloper kbSNAServSearch
	Version           : WINDOWS:2.0,2.1,2.11,2.11 SP1
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	

{% endraw %}
