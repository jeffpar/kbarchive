---
layout: page
title: "Q128166: Services for Macintosh Not Available on Compaq Computers"
permalink: /kb/128/Q128166/
---

## Q128166: Services for Macintosh Not Available on Compaq Computers

{% raw %}

	Article: Q128166
	Product(s): Microsoft Windows NT
	Version(s): 3.5
	Operating System(s): 
	Keyword(s): 
	Last Modified: 08-AUG-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Server version 3.5 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	After you upgrade to Windows NT Server version 3.5 on Compaq computers, the
	option to install Services for Macintosh is not available, or the following
	error message appears when you attempt to configure Services for Macintosh:
	
	  Configuration operation attempt failed
	
	In addition, the following events appear in the Event Viewer:
	
	  Event ID: 13
	  Source: Apple Talk
	  Type: Error
	  Description: No adapter is configured to be the default adapter.
	
	  Event ID: 7000
	  Source: Service Control Manager
	  Type: Error
	  Description: The Apple Talk Protocol service failed to start due to the
	  following error: A device to the system is not functioning.
	
	  Event ID: 7001
	  Source: Service Control Manager
	  Type: Error
	  Description: The File Server for Macintosh service depends on the Apple Talk
	  Protocol service which failed to start...
	
	  Event ID: 7001
	  Source: Service Control Manager
	  Type: Error
	  Description: The Print Server for Macintosh service depends on...
	
	RESOLUTION
	==========
	
	To correct this problem:
	
	WARNING: Using Registry Editor incorrectly can cause serious, system-wide
	problems that may require you to reinstall Windows NT to correct them. Microsoft
	cannot guarantee that any problems resulting from the use of Registry Editor can
	be solved. Use this tool at your own risk.
	
	1. Run Registry Editor (REGEDT32.EXE).
	
	2. From the HKEY_LOCAL_MACHINE subtree, go to the following key:
	
	  \SYSTEM\CurrentControlSet\Services
	
	3. Remove the following keys and its subkeys:
	
	  AppleTalk
	  MacFile
	  MacPrint
	  MacSrv
	
	4. From the HKEY_LOCAL_MACHINE subtree, go to the following key:
	
	  \Software\Microsoft
	
	5. Remove the following keys and its subkeys:
	
	  AppleTalk
	  MacFile
	  MacPrint
	  SFM
	
	6. From the HKEY_LOCAL_MACHINE subtree, go to the following key:
	
	  \SYSTEM\CurrentControlSet\Control\Print
	  \Environments\Windows NT x86\Print Processors
	
	7. Remove the PSPRINT key and its subkeys.
	
	8. From the HKEY_LOCAL_MACHINE subtree, go to the following key:
	
	  \SYSTEM\CurrentControlSet\Control\Print
	  \Monitors
	
	9. Remove the AppleTalkPrinters key and its subkeys.
	
	10. Quit Registry Editor and restart Windows NT.
	
	11. Obtain SP1083.EXE from the CPQFORUM on CompuServe. Run the file to extract
	  the following files:
	
	  SP1083.DOC
	  README.TXT
	  OEMNXPSM.INF (dated 12/5/94)
	
	12. Copy the OEMNXPSM.INF file to the %SYSTEMROOT%\SYSTEM32 subdirectory.
	
	13. Run Control Panel and choose Network.
	
	14. Choose Add Software and select Services for Macintosh.
	
	15. Choose Continue.
	
	The Compaq products discussed here are manufactured by Compaq Computer
	Corporation, a vendor independent of Microsoft; we make no warranty, implied or
	otherwise, regarding these products' performance or reliability.
	
	Additional query words: prodnt 3.50 sfm Mac
	
	======================================================================
	Keywords          :  
	Technology        : kbWinNTsearch kbWinNT350search kbWinNTSsearch kbWinNTS350 kbWinNTS350search
	Version           : :3.5
	
	=============================================================================
	

{% endraw %}
