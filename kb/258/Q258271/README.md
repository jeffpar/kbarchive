---
layout: page
title: "Q258271: SNA Application May be Slow When Locating HIS2000"
permalink: /kb/258/Q258271/
---

## Q258271: SNA Application May be Slow When Locating HIS2000

{% raw %}

	Article: Q258271
	Product(s): Microsoft SNA Server
	Version(s): 
	Operating System(s): 
	Keyword(s): 
	Last Modified: 26-MAY-2000
	
	This article discusses a Beta release of a Microsoft product. The information in this article is provided as-is and is subject to change without notice.
	
	No formal product support is available from Microsoft for this Beta product. For information about how to obtain support for a Beta release, see the documentation that is included with the Beta product files, or check the Web location from which you downloaded the release.
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Host Integration Server 2000 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	An SNA 3270 or APPC/CPIC application may experience a delay when you initially
	open a session through a Microsoft Windows 2000 Server that is running Microsoft
	Host Integration Server 2000. This problem occurs when you run the Win5250
	emulator on Host Integration Server 2000 configured to use Active Directory.
	
	When you enable the SNA Application full internal traces by using the
	Snatrace.exe tool, the following delays and error messages occur in the
	resulting Cliint1.atf file. (Note that some data has been omitted for
	readability).
	
	  
	
	  [...]
	  15:21:14.0298  PADR Picked request to initialize Directory
	  15:21:15.0409  GWAOLI Number of Wksta assigned OUs = 1
	  15:21:15.0409  IOLI Use wksta OU OU=server,DC=server2000,DC=nttest,DC=microsoft,DC=com
	  15:21:15.0409  IWMI Get WMI servers for OU=server,DC=server2000,DC=nttest,DC=microsoft,DC=com
	  15:21:15.0449  IWMI Next finally failed 1
	  15:21:15.0459  IWMI Found locally running WMI server
	  15:21:15.0459  IWMI Plan to use WMI server SERVER5
	  15:21:16.0131  MLCOOL OU=server,DC=SERVER2000,DC=nttest,DC=microsoft,DC=com||||SNA Domain=SERVER2
	  15:21:16.0131  ISNAADSI SNAADSIInit is successful
	 [...]
	  15:21:16.0141  PADR Get server list for LU BIGBLUE2
	  15:21:16.0141  WLLP WMILocateAppcLUInOU for BIGBLUE2, OU=server,DC=server2000,DC=nttest,DC=microsoft,DC=com
	  15:21:16.0141  CTWS Locate WMI server for OU=server,DC=server2000,DC=nttest,DC=microsoft,DC=com
	  15:21:16.0401  CTWS Connecting to WMI server SERVER5
	  15:21:19.0205  WLLP Run query SELECT Alias FROM MsSna_LuAppcLocal WHERE Alias="BIGBLUE2"
	  15:21:20.0066  WLLP Query SELECT Alias FROM MsSna_LuAppcLocal WHERE Alias="BIGBLUE2" failed,  error 80041013
	  15:21:20.0066  WLLP Run query SELECT Alias FROM MsSna_LuAppcRemote WHERE Alias="BIGBLUE2"
	  15:21:20.0187  WLLP Query SELECT Alias FROM MsSna_LuAppcRemote WHERE Alias="BIGBLUE2" failed,  error 80041013
	  15:21:20.0187  ADPSL No servers found in list
	  15:21:20.0187  build_srv_list_callback Entry
	  15:21:20.0187  QAPCB Query LU server list failed, rc 1
	
	Note the 2-second delay when the Active Directory interface is initialized and
	the 3-second delay when you connect to the WMI server running on Server5. Also,
	note the error message that is returned when WMI is queried, and the WMI error
	information taken from the Microsoft Platform SDK documentation, as follows:
	
	  WBEM_E_PROVIDER_LOAD_FAILURE 0x80041013
	  COM cannot locate a provider referenced in the schema. This error may be
	  caused by any of the following:
	  - The provider is using a WMI DLL that does not match the .lib file used when
	  the provider was built.
	  - The provider's DLL or any of the DLLs on which it depends is corrupt.
	  - The provider failed to export DllRegisterServer.
	  - An in-process provider was not registered using the regsvr32 command.
	  - An out-of-process provider that was not registered using the /regserver
	  switch. For example, myprog.exe /regserver.
	
	CAUSE
	=====
	
	The "WBEM_E_PROVIDER_LOAD_FAILURE 0x80041013" error message occurs because of a
	system configuration problem on the Windows 2000 Server computer on which Host
	Integration Server 2000 is running. The Wmisna.dll file (the SNA WMI provider
	interface) cannot load because it is dependent on the following Wbem DLL file:
	
	  %Systemroot%\System32\Wbem\Framedyn.dll
	
	However, this directory is not present in the PATH environment on this particular
	Windows 2000 Server-based computer, and therefore, this DLL file is not found.
	
	Any retail installation of Windows 2000 Server or Windows 2000 Advanced Server
	automatically adds the %Systemroot%\System32\Wbem folder to the system PATH.
	
	
	RESOLUTION
	==========
	
	From a command prompt, type "path" (without the quotation marks) to view the
	PATH environment setting on the computer, and then check for the presence of the
	Wbem folder. For example, type the following:
	
	  
	
	  C:\>path
	  PATH=C:\WINNT\System32;C:\WINNT;C:\WINNT\System32\WBEM;C:\Program Files\Host Integration Server\System
	
	If the Wbem folder is not present, add it manually to your search path by
	performing the following steps:
	
	1. Log on to Windows 2000 by using an Administrator account.
	
	2. In Control Panel, double-click System.
	
	3. Select Advanced Folder, and then select Environment Variables.
	
	4. In the System variables window, highlight the Path variable, and then click
	  Edit.
	
	5. Add the Wbem folder to the beginning of the Variable value data, followed by
	  a semicolon (;). For example:
	
	  
	
	Variable value:   c:\Winnt\System32\Wbem;c:\Winnt\System32;C:\Program Files\Host Integration Server\System
	
	Additional query words:
	
	======================================================================
	Keywords          :  
	Technology        : kbAudDeveloper kbHostIntegServ2000
	Version           : :
	Issue type        : kbinfo
	
	=============================================================================
	

{% endraw %}
