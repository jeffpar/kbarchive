---
layout: page
title: "Q222086: Gateway Services for NetWare (GSNW) Gateway Shares Shown as Dele"
permalink: kb/222/Q222086/
---

## Q222086: Gateway Services for NetWare (GSNW) Gateway Shares Shown as Dele

	Article: Q222086
	Product(s): Microsoft Windows NT
	Version(s): WINDOWS:2000; winnt:3.51,4.0
	Operating System(s): 
	Keyword(s): kbenv
	Last Modified: 06-AUG-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Server versions 3.51, 4.0 
	- Microsoft Windows 2000 Server 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	On a server that is configured with gateway shares to a NetWare server that are
	separated by a Cisco Catalyst 5000 Etherswitch, the gateway shares are listed as
	deleted in Server Manager after you reboot the server. You can successfully
	create or re-create shares, but they are lost on a reboot.
	
	CAUSE
	=====
	
	The Etherswitch is taking too long to enumerate the nodes on the port, causing
	GSNW not to map the drive before the Server service starts. The Etherswitch
	enumerates the nodes on that port for routing, and to ensure that there is not a
	routing loop.
	
	RESOLUTION
	==========
	
	Change the following configuration on the switch to shorten the time the switch
	waits to enumerate the port:
	
	  set spantree portfast [<slotnumber>/<port>] enable
	
	This command allows a port that is connected to a single workstation or PC to
	start faster when it is connected.
	
	The syntax for this command is:
	
	  set spantree portfast mod_num/port_num enable | disable
	
	+------------------------------------------------------------------+
	| Command  | Description                                           | 
	+------------------------------------------------------------------+
	| mod_num  | The number of the module                              | 
	+------------------------------------------------------------------+
	| port_num | The number of the port on the module                  | 
	+------------------------------------------------------------------+
	| enable   | Enables the spanning-tree bridge portfast for a port  | 
	+------------------------------------------------------------------+
	| disable  | Disables the spanning-tree bridge portfast for a port | 
	+------------------------------------------------------------------+
	
	Default: This command has no default setting.
	
	Command type: Switch command.
	
	Command mode: Privileged.
	
	Usage guidelines: When you use the spantree portfast enable command on a port, it
	immediately enters into the spanning-tree forwarding state when the port is
	connected, rather than going through the normal spanning-tree states such as
	listening and learning. Use this command on ports that are connected to a single
	workstation or PC only; do not use it on ports that are connected to networking
	devices such as hubs, routers, switches, bridges, or concentrators.
	
	For example, the following sample command illustrates how to set the
	spanning-tree bridge portfast for port 2 on module 1:
	
	Console> (enable) set spantree portfast
	Usage: set spantree portfast
	Usage: set spantree portfast mod_num/port_num enable|disable
	Console> (enable) set spantree portfast 1/2 enable
	
	NOTE: You should enable spantree port fast start only on ports connected to a
	single host. Connecting hubs, concentrators, switches, bridges, and so on to a
	fast start port can cause temporary spanning tree loops.
	
	Spantree port 1/2 fast start enabled.
	Console> (enable) set spantree portfast 1/2 disable
	Spantree port 1/2 fast start disabled.
	Console> (enable)"
	
	Additional query words:
	
	======================================================================
	Keywords          : kbenv 
	Technology        : kbWinNTsearch kbWinNT351search kbWinNT400search kbwin2000Serv kbWinNTSsearch kbWinNTS400search kbWinNTS400 kbWinNTS351 kbwin2000ServSearch kbwin2000Search kbWinNTS351search
	Version           : WINDOWS:2000; winnt:3.51,4.0
	Issue type        : kbprb
	
	=============================================================================
	
