---
layout: page
title: "Q150794: MaintainServerList Value Location in Windows 95 Resource Kit"
permalink: /kb/150/Q150794/
---

## Q150794: MaintainServerList Value Location in Windows 95 Resource Kit

{% raw %}

	Article: Q150794
	Product(s): Windows for Workgroups and Windows NT Networking Issues
	Version(s): Win2000:95; winnt:3.5,3.51
	Operating System(s): 
	Keyword(s): kbnetwork win95 win98
	Last Modified: 08-AUG-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Workstation versions 3.5, 3.51 
	- Microsoft Windows NT Server versions 3.5, 3.51 
	- Microsoft Windows 95 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	Page 1,198 and 1,199 of the Microsoft Windows 95 Resource Kit shows the value
	MaintainServerList located under the [Vserver] key. This value is not located
	under the [Vserver] key.
	
	MORE INFORMATION
	================
	
	On a computer running Windows 95, MaintainServerList is located under the
	HKEY_LOCAL_MACHINE\System\CurrentControlSet\Services\VxD\VNETSUP subkey.
	
	There are three section for MaintainServerList:
	
	To change whether or not the list is maintained, "MaintainServerList" in the
	first section below has to be the same value as the "@=" in the second section
	below. "@=" is "default" when you view it in Regedit.exe.
	
	[HKEY_LOCAL_MACHINE\System\CurrentControlSet\Services\VxD\VNETSUP]
	"MaintainServerList"="1"
	
	[HKEY_LOCAL_MACHINE\System\CurrentControlSet\Services\VxD\VNETSUP\Ndi\ 
	  params\MaintainServerList]
	"default"="2"
	"ParamDesc"="Browse Master"
	"type"="enum"
	@="1"
	<BR/><BR/>
	
	[HKEY_LOCAL_MACHINE\System\CurrentControlSet\Services\VxD\VNETSUP\Ndi\ 
	  params\MaintainServerList\enum]
	"2"="Automatic"
	"1"="Enabled"
	"0"="Disabled"
	
	Additional query words: master browse
	
	======================================================================
	Keywords          : kbnetwork win95 win98 
	Technology        : kbWinNTsearch kbWinNTWsearch kbWinNT351search kbWinNT350search kbWinNTW350 kbWinNTW350search kbWinNTW351search kbWinNTW351 kbWinNTSsearch kbWinNTS351 kbWinNTS350 kbWinNTS351search kbWinNTS350search kbWin95search kbZNotKeyword3
	Version           : Win2000:95; winnt:3.5,3.51
	
	=============================================================================
	

{% endraw %}
