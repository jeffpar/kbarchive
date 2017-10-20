---
layout: page
title: "Q143004: Description of Microsoft Windows 95 Service Pack 1 Tools"
permalink: /kb/143/Q143004/
---

## Q143004: Description of Microsoft Windows 95 Service Pack 1 Tools

{% raw %}

	Article: Q143004
	Product(s): Microsoft Windows 95.x Retail Product
	Version(s): 95
	Operating System(s): 
	Keyword(s): dtssb win95
	Last Modified: 17-DEC-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows 95 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	This article contains information about the tools included with Microsoft
	Windows 95 Service Pack 1.
	
	For information about obtaining Microsoft Windows 95 Service Pack 1, please see
	the following article in the Microsoft Knowledge Base:
	
	  Q142794 Availability of Microsoft Windows 95 Service Pack 1
	
	MORE INFORMATION
	================
	
	The following tools are included with Microsoft Windows 95 Service Pack 1.
	
	Microsoft Batch Installation Utility Version 2.0 for Windows 95
	---------------------------------------------------------------
	
	Usage:
	
	The Microsoft Batch Installation Utility (Batch.Exe) is a tool designed to
	provide a user interface for creating Msbatch.Inf files for scripted setups. By
	running this program and answering as many or as few questions as desired,
	Windows 95 Setup procedures can be made completely automatic.
	
	Batch Setup version 2.0 includes the following new features:
	
	- You can have Batch Setup scan your Windows 95 registry and create an .inf
	  file based on your current settings. For more information about which
	  registry settings Batch Setup can retrieve, search Batch Setup Help.
	
	- You can now specify which protocol to make the default from within the Batch
	  Setup program.
	
	- More settings are available to configure File and Print Services for
	  Microsoft Networks or File and Print Services for NetWare networks.
	
	- Administrators can now choose whether to disable the Netcard Resource
	  Conflict Resolution Wizard during setup. (This option is disabled by
	  default.)
	
	- With one click, you can enable or disable all optional components in a single
	  area.
	
	- Batch Setup finds user-level security settings.
	
	- Locates client TCP/IP settings (for example, DNS servers).
	
	To start Windows Batch Setup click Start and select Programs. Click Windows Batch
	Setup. Selections can be made by placing a check mark in the appropriate
	selection you wish to automate. Please see the online help for instructions on
	running Windows 95 Setup in Batch Mode.
	
	Support Boundaries:
	
	The Microsoft Product Support Services (PSS) Desktop Systems Unit supports the
	functionality and operation of the tools for the creation of Msbatch.inf files
	and the files created with them. The Desktop Systems Unit does not support the
	functionality of manually edited Msbatch.inf files.
	
	Microsoft INF Generator Utility for Windows 95
	----------------------------------------------
	
	Usage:
	
	The Microsoft INF Generator Utility is a tool for generating individualized
	Msbatch.inf files for multiple computers. For detailed usage instructions,
	please see the Infgndoc.doc file included with the tool.
	
	Support Boundaries:
	
	The Microsoft PSS Desktop Systems Unit supports the functionality and operation
	of the tools for the creation of Msbatch.inf files and the files created with
	them. The PSS Desktop Systems Unit does not support the functionality of
	manually edited Msbatch.inf files.
	
	Microsoft INF Installation Tool for Windows 95
	----------------------------------------------
	
	Usage:
	
	You can use the Microsoft INF Installation Tool to integrate .inf (and related)
	files from the various tools folders contained in the Admin folder on the
	Windows 95 CD-ROM.
	
	To use this tool, first run Netsetup and create a network installation of Windows
	95. Then, use the INF Installation Tool to add external components (such as the
	SNMP agent in the Admin\Nettools\SNMP folder) to the Netsetup tree and
	(optionally) force the installation of the components using a batch script.
	
	Support Boundaries:
	
	The Microsoft PSS Desktop Systems Unit supports the functionality and operation
	of the tools for the creation of Msbatch.inf files and the files created with
	them. The Desktop Systems Unit does not support the functionality of manually
	edited Msbatch.inf files.
	
	The functionality of Infinst.exe is not supported with all .inf files. Due to the
	differences in the structure of some .inf files, they cannot be integrated into
	an automated install with Infinst.exe.
	
	Microsoft Support Assistant for Windows 95
	------------------------------------------
	
	The Microsoft Support Assistant for Windows 95 is a no-cost online Help file
	developed by Microsoft PSS and Microsoft User Education.
	
	For additional information, please see the following article in the Microsoft
	Knowledge Base:
	
	  Q134363 Windows 95 Support Assistant Available
	
	Microsoft Systems Management Server PDF
	---------------------------------------
	
	Usage:
	
	This tool allows the inclusion of Microsoft Windows 95 Service Pack 1 using the
	Microsoft Systems Management Server (SMS) Administration Utility. For more
	information about this file, please see the Readme.txt file located in the
	Admin\Tools\SMS folder.
	
	Support Boundaries:
	
	The Microsoft PSS Desktop Systems Unit does not support SMS functionality. For
	Microsoft Systems Management Server support, consult your SMS documentation for
	contact information.
	
	Microsoft Windows NT Server Management Tools for Windows 95
	-----------------------------------------------------------
	
	Usage:
	
	The Microsoft Windows NT Server Management Tools for Windows 95 are a suite of
	tools providing access to administrative settings for Windows NT servers from
	Windows 95-based workstations. For information about the use of these tools,
	please see the included Srvtools.txt file.
	
	Support Boundaries:
	
	Support requests for The Microsoft Windows NT Server Management Tools for Windows
	95 should be directed to Microsoft Corporate Network Support.
	
	======================================================================
	Keywords          : dtssb win95 
	Technology        : kbWin95search kbZNotKeyword3
	Version           : 95
	
	=============================================================================
	

{% endraw %}
