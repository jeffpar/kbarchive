---
layout: page
title: "Q192298: Third Party GINAs May Fail with Service Pack 4 Causing STOP 0x21"
permalink: /kb/192/Q192298/
---

## Q192298: Third Party GINAs May Fail with Service Pack 4 Causing STOP 0x21

{% raw %}

	Article: Q192298
	Product(s): Microsoft Windows NT
	Version(s): 2000,4.0
	Operating System(s): 
	Keyword(s): 
	Last Modified: 11-JUN-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Workstation version 4.0 
	- Microsoft Windows NT Server version 4.0 
	- Microsoft Windows NT Server, Enterprise Edition version 4.0 
	- Microsoft Windows 2000 Server 
	- Microsoft Windows 2000 Professional 
	- Microsoft Windows Advanced Server 
	-------------------------------------------------------------------------------
	
	IMPORTANT: This article contains information about modifying the registry. Before you modify the registry, make sure to back it up and make sure that you understand how to restore the registry if a problem occurs. For information about how to back up, restore, and edit the registry, click the following article number to view the article in the Microsoft Knowledge Base:
	
	  Q256986 Description of the Microsoft Windows Registry
	
	SYMPTOMS
	========
	
	In Windows NT 4.0 Service Pack 4, the interface version that WINLOGON asks for
	has been raised from 1.1 to 1.2. Because of this, third-party GINAs that do not
	do the version checking correctly might fail to initialize after you install
	Service Pack 4.
	
	If the GINAs fail to initialize, Windows NT will stop with a stop 0xc000021A
	error because WINLOGON terminates because it needs a GINA module to function.
	
	This change has an additional impact on so called stub GINAs. They need to
	properly forward the call to negotiate the interface version.
	
	
	MORE INFORMATION
	================
	
	In Service Pack 4, there is a new Winlogon.exe that implements a new interface
	function and, because of this function, the interface version has been changed
	to 1.2. If a third-party GINA does not initialize with interface version 1.2,
	WINLOGON will fail because it cannot function without a GINA.
	
	A stub GINA adds an additional layer of complexity because the third-party GINA
	needs to forward the interface version it supports to Msgina.dll and not the
	version WINLOGON has passed to it. Msgina.dll will initialize with interface
	version 1.1 and 1.2, but only supports 1.1. This behavior should guarantee that
	third-party GINAs with proper and half-way correct version checking continue to
	work with Service Pack 4.
	
	Because of the nature of the change made for interface version 1.2, even stub
	GINAs with improper version checking (which do not filter out version 1.2) can
	work, but there is a good chance that they will break with future interface
	versions.
	
	Samples for GINAs are in the Gina and Ginastub folders under
	Mssdk\Samples\WinBase\Security\WinNT in the Platform SDK.
	
	The sample GINA does version checking correctly whereas GINASTUB does not filter
	out version 1.2. Stub GINAs based on this sample could possibly cause a
	problem.
	
	This is a template for a proper WlxNegotiate implementation. It also includes
	code to remove the GINA from the registry in case initialization fails. This may
	not be appropriate for your stub GINA.
	
	   BOOL
	   WINAPI
	   WlxNegotiate(
	       DWORD       dwWinlogonVersion,
	       DWORD       *pdwDllVersion)
	   {
	       BOOL bRetCode = TRUE;
	
	       if( !MyInitialize() )
	           bRetCode = FALSE;
	       else if (WLX_CURRENT_VERSION > dwWinlogonVersion)
	           bRetCode = FALSE;  // Don't allow old WINLOGON version, change as
	   needed to support older versions
	       else if (!GWlxNegotiate( WLX_CURRENT_VERSION, pdwDllVersion )
	                || WLX_CURRENT_VERSION != *pdwDllVersion)
	           bRetCode = FALSE;  // Don't allow mismatched MSGINAs, change as
	   needed
	
	       *pdwDllVersion = WLX_CURRENT_VERSION;
	
	       if (!bRetCode) {
	           HKEY hReg;
	
	           if (ERROR_SUCCESS != RegCreateKey (HKEY_LOCAL_MACHINE,
	   "SOFTWARE\\Microsoft\\Windows NT\\CurrentVersion\\Winlogon", &hReg))
	               return FALSE;
	           if (ERROR_SUCCESS != RegDeleteValue (hReg, "GinaDll")) {
	               RegCloseKey (hReg);  // be a good citizen
	               return FALSE;
	           }
	           RegCloseKey (hReg);
	
	           MessageBox (NULL, "GINA initialization failed due to a version
	   conflict. Please contact your manufacturer.\nThis GINA module was
	   uninstalled.\nWindows NT will run into a stop screen when you press OK.",
	   "Vendor GINA module", MB_OK);
	       }
	
	       return bRetCode;
	   }
	
	
	Additional query words:
	
	======================================================================
	Keywords          :  
	Technology        : kbWinNTsearch kbWinNTWsearch kbWinNTW400 kbWinNTW400search kbWinNT400search kbwin2000AdvServSearch kbwin2000Serv kbWinNTSsearch kbWinNTSEntSearch kbWinNTSEnt400 kbWinNTS400search kbWinNTS400 kbwin2000ServSearch kbwin2000Search kbwin2000ProSearch kbwin2000Pro kbWinAdvServSearch
	Version           : :2000,4.0
	Issue type        : kbprb
	
	=============================================================================
	

{% endraw %}
