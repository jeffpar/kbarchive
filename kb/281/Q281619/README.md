---
layout: page
title: "Q281619: HIS 2000 End-User Client Doesn't Delete All Files During Removal"
permalink: /kb/281/Q281619/
---

## Q281619: HIS 2000 End-User Client Doesn't Delete All Files During Removal

	Article: Q281619
	Product(s): Microsoft SNA Server
	Version(s): 
	Operating System(s): 
	Keyword(s): kbDSupport kbhis2000bug
	Last Modified: 14-DEC-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Host Integration Server 2000 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	If the Host Integration Server (HIS) 2000 End-User Client is removed from a
	computer that is running Microsoft Windows 95 or Microsoft Windows 98 by
	clicking the Add/Remove Programs icon in Control Panel, the following files are
	left in the %WINDIR%\System folder:
	
	- Winsli.dll
	- Winsli32.dll
	- Luastr32.dll
	- Winrui.dll
	- Winrui32.dll
	- Csvstr32.dll
	- Wincsv.dll
	- Wincsv32.dll
	- Wcpic32.dll
	- Wincpic.dll
	- Appcst32.dll
	- Wappc32.dll
	- Winapcc.dll
	- Winmgt32.dll
	- Snadump.dll
	- Snareg.dll
	- Snatrcsn.dll
	- Dmodappc.dll
	- Snatrc.dll
	- Snadmod.dll
	- Snakrnl.dll
	- Snaclm.dll
	- Snacnw.dll
	- Snacbv.dll
	- Snacip.dll
	- fmistr32.dll
	- Vstapi.dll
	- Snancp.dll
	- Bvnsst.dll
	- Ibbcast.dll
	- Lmbcast.dll
	- Snasap32.dll
	- Snands32.dll
	- Adloc.dll
	- Snanls.dll
	- *.nls
	
	This problem does not occur if the HIS 2000 End-User Client is installed on a
	computer that is running Microsoft Windows 2000 Professional or Microsoft
	Windows NT 4.0 Workstation, because these files are not installed in the
	%WINDIR%\System folder.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in Microsoft Host Integration
	Server 2000.
	
	
	MORE INFORMATION
	================
	
	The files listed in the "Symptoms" section can be deleted manually after the HIS
	2000 End-User Client is removed.
	
	The Windows 95 or Windows 98 Client for SNA Server 4.0 does not function
	correctly if it is installed after the HIS 2000 End-User Client is removed,
	unless these files are deleted manually prior to installing the SNA Server
	client.
	
	Additional query words: sp1
	
	======================================================================
	Keywords          : kbDSupport kbhis2000bug 
	Technology        : kbAudDeveloper kbHostIntegServ2000
	Version           : :
	Issue type        : kbbug
	Solution Type     : kbnofix
	
	=============================================================================
	
