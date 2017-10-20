---
layout: page
title: "Q236793: XCLN ODK Deploying Internet Explorer 4.01 Service Packs with ODK"
permalink: /kb/236/Q236793/
---

## Q236793: XCLN ODK Deploying Internet Explorer 4.01 Service Packs with ODK

{% raw %}

	Article: Q236793
	Product(s): Microsoft Exchange
	Version(s): WINDOWS:98
	Operating System(s): 
	Keyword(s): kbsetup kbdta
	Last Modified: 11-JUN-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Outlook 98 Deployment Kit 
	- Microsoft Exchange Server, version 5.5 
	-------------------------------------------------------------------------------
	
	IMPORTANT: This article contains information about modifying the registry. Before you modify the registry, make sure to back it up and make sure that you understand how to restore the registry if a problem occurs. For information about how to back up, restore, and edit the registry, click the following article number to view the article in the Microsoft Knowledge Base:
	
	  Q256986 Description of the Microsoft Windows Registry
	
	SUMMARY
	=======
	
	This article discusses how to deploy Microsoft Internet Explorer 4.01 Service
	Packs with the Outlook Deployment Kit (ODK) for Outlook 98.
	
	You should test this method thoroughly in a non-production, test environment
	prior to deployment to production systems.
	
	MORE INFORMATION
	================
	
	By default, the ODK includes the files necessary to install Internet Explorer
	4.01. In some cases it may be desirable to deploy Outlook, and the latest
	Service Pack (currently SP2), for Internet Explorer 4.01, in a single package.
	It is not possible to deploy Internet Explorer 5.0 with the ODK.
	
	NOTE: Microsoft highly recommends installing Outlook 98 and Internet Explorer
	4.01 with the ODK, and then installing the latest version or Service Pack for
	Internet Explorer separately.
	
	To install Internet Explorer 4.01 SP2 within the ODK installation:
	
	1. After installing the ODK, back up the \Program Files\ODK\Download\En folder.
	
	2. Copy the Internet Explorer 4.01 Service Pack files to the \Program
	  Files\ODK\Download\En folder. There are 123 files for SP2, which include both
	  Microsoft Windows 9x and Microsoft Windows NT setup files. These files can be
	  obtained from various sources, such as the Microsoft Internet Explorer
	  Administration Kit (IEAK) or the Microsoft Developer Support Network (MSDN)
	  CDs.
	
	3. Delete the Mschat2.cab file. This file will be replaced by Mschat21.cab.
	
	4. Replace the Outlook.cif file with the updated Outlook.cif file. To obtain the
	  file, see the "References section.
	
	5. Start the Outlook Deployment Wizard (ODW) and create an Outlook installation
	  package.
	
	WARNING: If you use Registry Editor incorrectly, you may cause serious problems
	that may require you to reinstall your operating system. Microsoft cannot
	guarantee that you can solve problems that result from using Registry Editor
	incorrectly. Use Registry Editor at your own risk.
	
	To Modify the Registry
	----------------------
	
	Before deploying the package, modify the registry on each workstation by
	resetting the IsInstalled value for each component being upgraded. This can be
	done with a batch job run via a logon script or SMS package. You can also
	perform these steps manually:
	
	1. Start Registry Editor (Regedt32.exe).
	
	2. Locate the subkey for each component you wish to update under the following
	  key in the registry:
	
	  HKEY_LOCAL_MACHINE\Software\Microsoft\Active Setup\Installed Components
	
	3. Set the IsInstalled value to 00000000 (DWORD values), or to 00,00,00,00 (for
	  BINARY values), for each of the components.
	
	4. Quit Registry Editor.
	
	REFERENCES
	==========
	
	The Outlook.cif file, is available at this location as OLcif.exe.
	
	  ftp://ftp.microsoft.com/softlib/mslfiles
	
	Additional query words: 98 sp1 ie
	
	======================================================================
	Keywords          : kbsetup kbdta 
	Technology        : kbOutlookSearch kbExchangeSearch kbExchange550 kbZNotKeyword2 kbOutlookDeployKitSearch kbOutlook98DeployKit
	Version           : WINDOWS:98
	Issue type        : kbhowto
	
	=============================================================================
	

{% endraw %}
