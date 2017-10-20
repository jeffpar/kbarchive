---
layout: page
title: "Q193603: Informational Events Logged by Windows NT Load Balancing Service"
permalink: /kb/193/Q193603/
---

## Q193603: Informational Events Logged by Windows NT Load Balancing Service

{% raw %}

	Article: Q193603
	Product(s): Microsoft Windows NT
	Version(s): 4.0
	Operating System(s): 
	Keyword(s): 
	Last Modified: 05-MAR-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Server version 4.0 
	- Microsoft Windows NT Load Balancing Service 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	This article contains the complete text of all Windows NT Load Balancing Service
	event log informational messages. These events are informational messages used
	to report changes in cluster state.
	
	MORE INFORMATION
	================
	
	Event ID: 4
	
	  Source: WLBS
	  Description: WLBS: Vx.y.z started successfully
	  Cause: Generated when a WLBS driver is loaded, it will display the version so
	  you know it was started successfully. This successfully.
	
	Event ID: 5
	
	  Source: WLBS
	  Description: WLBS: cluster mode started with host ID 'N'.
	  Cause: Generated when the cluster mode command "wlbs start" is issued. This is
	  generated on the local machine where the execution of the command took place.
	
	Event ID: 6
	
	  Source: WLBS
	  Description: WLBS: cluster mode stopped.
	  Cause: Generated when command like "wlbs stop" or "wlbs drain" is issued. This
	  event should never occur unless a human or monitoring tool like HTTPMon
	  initiates the stop or drain command. This is generated on the local machine
	  where the execution of the command took place
	
	Event ID: 18
	
	  Source: WLBS
	  Description: WLBS: Duplicate cluster subnets detected. The network may have
	  been inadvertently partitioned.
	  Cause: This event is generated on the remerging of a cluster that has been
	  split into more than one cluster. This event can be caused by:
	
	- Pulling the net tap on a server, which will cause the server to converge with
	  itself and two clusters will form.
	- Severing a trunk between two switches if the cluster is deployed across them.
	
	Event ID: 23
	
	  Source: WLBS
	  Description: WLBS: enabled traffic handling for rule containing port 'N'.
	  Cause: Generated when the command "wlbs enable" or a machine is rebooted and
	  the WLBS agent starts. This is generated on the local machine where the
	  execution of the command took place.
	
	Event ID: 24
	
	  Source: WLBS
	  Description: WLBS: disabled ALL traffic handling for rule containing port
	  'N'.
	  Cause: Generated when the cluster mode command "wlbs disable" is issued either
	  by an operator or monitoring tool like HTTPMon. This is generated on the
	  local machine where the execution of the command took place.
	
	Event ID: 28
	
	  Source: WLBS
	  Description: WLBS: host 'N' converged with host(s) 'N1, N2,..., Nn' as part of
	  the cluster.
	  Cause: Generated when a convergence has been completed. This message is
	  generated on every computer on which the convergence took place except for
	  the computer running as the default WLBS Agent (see next event).
	
	Event ID: 29
	
	  Source: WLBS
	  Description: WLBS: host 'N' converged as DEFAULT host with host(s)
	  'N1,N2,...,Nn' as part of the cluster.
	  Cause: Generated only on the machine running as the default WLBS agent when a
	  convergence has been completed. The default WLBS agent is the server with the
	  greatest (smallest number) priority as displayed in the WLBS Setup dialog
	  box.
	
	Event ID: 36
	
	  Source: WLBS
	  Description: WLBS: registry parameters successfully reloaded.
	  Cause: This event is issued only when the "convoy reload" command is issued
	  manually.
	
	Event ID: 38
	
	  Source: WLBS
	  Description: WLBS: adjusted traffic handling for rule containing port "N".
	  Cause: This event is generated as a result of executing an undocumented WLBS
	  command.
	
	Event ID: 39
	
	  Source: WLBS
	  Description: WLBS: disabled NEW traffic handling for rule containing port "N"
	  Cause: This event is generated when the "wlbs drain" command is executed for a
	  single port.
	
	Event ID: 41
	
	  Source: WLBS
	  Description: WLBS: disabled NEW traffic handling for all port rules
	  Cause: This event is generated when the "wlbs drain" command is executed for
	  all ports.
	
	Event ID: 42
	
	  Source: WLBS
	  Description: WLBS: enabled traffic handling for all port rules
	  Cause: This event is generated when the "wlbs enable" command is executed for
	  all ports.
	
	Event ID: 43
	
	  Source: WLBS
	  Description: WLBS: disabled ALL traffic handling for all port rules
	  Cause: This event is generated when the "wlbs disable" command is executed for
	  all ports.
	
	Event ID: 44
	
	  Source: WLBS
	  Description: WLBS: connection draining started
	  Cause: This event is generated when the "wlbs drainstop" command is executed
	  for all ports.
	
	Event ID: 45
	
	  Source: WLBS
	  Description: WLBS: connection draining interrupted.
	  Cause: This event is generated when a "wlbs stop" or "wlbs start" command is
	  executed after a "wlbs drainstop" is issued, but not completed.
	
	
	Additional query words: WLBS Convoy
	
	======================================================================
	Keywords          :  
	Technology        : kbWinNTsearch kbWinNT400search kbWinNTSsearch kbWinNTS400search kbWinNTS400 kbWinNTLBSSearch
	Version           : :4.0
	Issue type        : kbinfo
	
	=============================================================================
	

{% endraw %}
