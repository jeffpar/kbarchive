---
layout: page
title: "Q269107: Fax Service Is Missing After Upgrade from Windows NT Workstation"
permalink: /kb/269/Q269107/
---

## Q269107: Fax Service Is Missing After Upgrade from Windows NT Workstation

{% raw %}

	Article: Q269107
	Product(s): Microsoft Windows NT
	Version(s): WINDOWS:2000
	Operating System(s): 
	Keyword(s): 
	Last Modified: 29-OCT-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows 2000 Professional 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	After you upgrade to Microsoft Windows 2000 Professional from Microsoft Windows
	NT Workstation 4.0 with the MS Fax Service installed, the Windows 2000 Fax
	Service may be missing. All of the files for the MS Fax Service are present, and
	the registry entries for the MS Fax Service are present at the following
	registry locations:
	
	HKEY_LOCAL_MACHINE\Software\Microsoft\Fax
	
	HKEY_CURRENT_USER\Software\Microsoft\Fax
	
	However, there is no fax service listed under Services in Control Panel, and no
	fax service is listed at the following registry location:
	
	HKEY_LOCAL_MACHINE\System\CurrentControlSet\Services
	
	RESOLUTION
	==========
	
	To resolve this issue, manually install the fax service, using the Service
	Control utility (sc.exe) from the Windows 2000 Resource Kit.
	
	NOTE: Service Control (sc.exe) is a command line utility that allows you to
	query, start or stop, and install or remove services locally or remotely.
	
	MORE INFORMATION
	================
	
	1. Verify that you have the resource kit installed, and that the directory where
	  the resource kit is installed is listed in the system variables path.
	
	2. Start a command prompt and type the following line exactly as it appears
	  here:
	
	  "sc create fax binpath= c:\winnt\system32\faxsvc.exe Displayname= "Fax
	  Service" " (without the quotation marks)
	
	3. In Windows Explorer, right-click My Computer and select Manage.
	
	4. Click Services and Applications, and then click Services.
	
	5. In the right-hand pane of the Computer Management window, double-click Fax
	  Service.
	
	6. On the Log On tab, select Allow service to interact with desktop and then
	  click OK.
	
	7. Right-click the Fax Service entry, and then select start.
	
	Additional query words:
	
	======================================================================
	Keywords          :  
	Technology        : kbwin2000Search kbwin2000ProSearch kbwin2000Pro
	Version           : WINDOWS:2000
	Issue type        : kbprb
	
	=============================================================================
	

{% endraw %}
