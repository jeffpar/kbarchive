---
layout: page
title: "Q138995: Updating to WinNT 3.51 SP2 Causes Loss of Persistent IP Routes"
permalink: /kb/138/Q138995/
---

## Q138995: Updating to WinNT 3.51 SP2 Causes Loss of Persistent IP Routes

{% raw %}

	Article: Q138995
	Product(s): Microsoft Windows NT
	Version(s): 3.51 SP2,4.0
	Operating System(s): 
	Keyword(s): kbnetwork
	Last Modified: 08-AUG-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Workstation versions 3.51 SP2, 4.0 
	- Microsoft Windows NT Server version 3.51 SP2 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	You added persistent IP routes with the "route" command. After applying Windows
	NT 3.51 U.S. Service Pack 2, the routes no longer appear in the route table.
	Connectivity that relies on those routes does not function properly.
	
	CAUSE
	=====
	
	An enhancement was made to the route command for Windows NT 3.51 Service Pack 2
	to allow a metric (hop count) to be specified. This hop count parameter is
	stored in the registry along with the other information for each persistent
	route. The route entry format was changed in the registry to add a field for the
	metric, and the new route code can not read the older-style entries.
	
	WORKAROUND
	==========
	
	There are currently three ways to regain the previous routes. Two require the
	use of Regedt32.exe to modify the registry:
	
	- Delete the registry values for the old persistent routes, and re-add the
	  routes using the route /p command:
	
	  ROUTE -p add [destination] [MASK netmask] [gateway] [METRIC metric]]
	
	  -or-
	
	- Modify the old registry values by adding the metric to them. They will then
	  become visible after the next reboot.
	
	-or-
	
	- Upgrade to Windows NT 4.0 Server or Workstation which will recognize and
	  update the 3.51 route format by applying a default metric of 1.
	
	MORE INFORMATION
	================
	
	In Windows NT 3.51, the ROUTE.EXE command can store persistent IP routes as
	values under the following registry key:
	
	  HKEY_LOCAL_MACHINE
	  \SYSTEM\CurrentControlSet\Services\Tcpip\Parameters\Persistent Routes
	
	Each route is stored in the value name string as a comma-delimited list of the
	form:
	
	  destination,subnet mask,gateway
	
	For example, the value representing a host route to destination 45.100.23.10
	through gateway 131.110.0.1 would be named:
	
	  45.100.23.10,255.255.255.255,131.110.0.1
	
	The value type is a REG_SZ. There is no value data (empty string).
	
	After applying Service Pack 2, the expected format changes to:
	
	  destination,subnet mask,gateway,metric
	
	The sample entry above could be modified as follows:
	
	  45.100.23.10,255.255.255.255,131.110.0.1,1
	                                           ^ a metric of "one"
	
	RESOLUTION
	==========
	
	This problem has been corrected in the latest Service Pack for Windows NT
	version 3.51 and Windows NT 4.0.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in Windows NT version 3.51. This
	problem was corrected in the latest Windows NT 3.51 U.S. Service Pack. For
	information on obtaining the Service Pack, query on the following word in the
	Microsoft Knowledge Base (without the spaces):
	
	  S E R V P A C K
	
	
	Additional query words: prodnt 3.51 static routes lost
	
	======================================================================
	Keywords          : kbnetwork 
	Technology        : kbWinNTsearch kbWinNTWsearch kbWinNTW400 kbWinNTW400search kbWinNT351search kbWinNT400search kbWinNTW351search kbWinNTSsearch kbWinNTS351sp2 kbWinNTW351SP2
	Version           : :3.51 SP2,4.0
	
	=============================================================================
	

{% endraw %}
