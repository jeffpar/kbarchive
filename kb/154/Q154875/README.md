---
layout: page
title: "Q154875: File &amp; Print Services for NetWare May Stop Intermittently"
permalink: /kb/154/Q154875/
---

## Q154875: File &amp; Print Services for NetWare May Stop Intermittently

{% raw %}

	Article: Q154875
	Product(s): Microsoft Windows NT
	Version(s): winnt:3.51
	Operating System(s): 
	Keyword(s): kbenv kbinterop kbnetwork
	Last Modified: 10-AUG-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Workstation version 3.51 
	- Microsoft Windows NT Server version 3.51 
	- Microsoft File and Print Services for NetWare version 3.51 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	The File and Print Services for NetWare (FPNW) service may stop intermittently.
	A Dr. Watson error may also appear because the Nwssvc.exe service stopped. The
	Dr. Watson error is:
	
	  An application error has occurred and an application error log is being
	  generated.
	  Nwssvc.exe
	  Exception: access violation (0xc0000005), Address: ?x????????
	
	CAUSE
	=====
	
	A request for the FPNW properties was made through either the Server Manager or
	Control Panel FPNW, and the HomeBaseDirectory registry value was missing.
	
	RESOLUTION
	==========
	
	Add the following value to the registry:
	
	WARNING: Using Registry Editor incorrectly can cause serious, system-wide
	problems that may require you to reinstall Windows NT to correct them. Microsoft
	cannot guarantee that any problems resulting from the use of Registry Editor can
	be solved. Use this tool at your own risk.
	
	1. Run the Registry Editor (Regedt32.exe).
	
	2. Navigate to the key:
	
	  HKEY_LOCAL_MACHINE\SYSTEM\CurrentControlSet\Services\FPNW\Parameters
	
	3. On the Edit menu, click Add Value.
	
	4. Add the following:
	
	  Value Name: HomeBaseDirectory
	  Data Type : REG_SZ
	  Data :
	
	5. Click OK, and close the Registry Editor.
	
	6. Shut down the computer and restart Windows NT.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in Windows NT version 3.51.
	
	A supported fix is now available, but has not been fully regression- tested and
	should be applied only to systems experiencing this specific problem. Unless you
	are severely impacted by this specific problem, Microsoft recommends that you
	wait for the next Service Pack that contains this fix. Contact Microsoft
	Technical Support for more information.
	
	
	Additional query words: trap hang stopped nwssvc prodnt
	
	======================================================================
	Keywords          : kbenv kbinterop kbnetwork 
	Technology        : kbWinNTsearch kbWinNTWsearch kbWinNT351search kbWinNTW351search kbWinNTW351 kbWinNTSsearch kbWinNTS351 kbWinNTS351search kbServicesNetwareSearch kbFPNW351
	Version           : winnt:3.51
	
	=============================================================================
	

{% endraw %}
