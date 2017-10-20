---
layout: page
title: "Q152961: How to Install TP4 Components on Windows NT 4.0"
permalink: /kb/152/Q152961/
---

## Q152961: How to Install TP4 Components on Windows NT 4.0

{% raw %}

	Article: Q152961
	Product(s): Microsoft Windows NT
	Version(s): 4.0
	Operating System(s): 
	Keyword(s): kbenv kbinterop
	Last Modified: 22-FEB-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Server version 4.0 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	This information in this article is needed to install Microsoft Exchange on
	Microsoft Windows NT 4.0.
	
	Windows NT version 4.0 now ships the TP4 components on the Windows NT
	installation compact disc. This protocol is available from the Microsoft Windows
	NT Server or Windows NT Workstation version 4.0 compact disc in the following
	folder:
	
	  \DRVLIB\PROTOCOL\TP4SETUP
	
	Definition of TP4
	-----------------
	
	OSI transport layer protocol Transport Class 4/Connectionless Network Protocol
	(TP4/CLNP) provides an OSI interface across a local area network (LAN). The
	Microsoft Exchange Server has an interface that allows it to work with the
	Windows NT TP4 driver. It uses this interface to communicate with other systems
	using TP4 during message transport. In CLNP, data is transferred without using a
	connection request. In Windows NT, TP4 is designed for use in a connectionless
	mode network. TP4 network address information is determined by the server
	running the transport stack. The network service access point (NSAP) address
	used by TP4 is configured in the Windows NT Control Panel on that server.
	
	MORE INFORMATION
	================
	
	To install these files, you must do the following:
	
	1. If you already have TP4 installed and are upgrading from Windows NT 3.51,
	  then you must remove and re-install the TP4 components from the Windows NT
	  4.0 compact disc. The version of TP4 that was shipped with Windows NT 3.51
	  will not work on Windows NT 4.0, and the Windows NT upgrade process will not
	  upgrade the TP4 components automatically.
	
	  To remove TP4 use the Network applet within the Control Panel. Select TP4 from
	  the list of protocols and then select Remove. You should re-boot after
	  performing this removal process.
	
	2. The TP4 files can be found on the compact disc in the following path
	  drvlib\protocol\tp4setup. Within this directory path there are subdirectories
	  for the processor type of your server.
	
	  To install the new version of TP4 you should open the network applet within
	  the Control Panel. Select the Protocols tab and then the Add button. Next
	  select the Have Disk button, and you will get a dialog box requesting a path
	  to the installation point. Enter the path to the appropriate subdirectory on
	  the Windows NT compact disc for your processor type.
	
	3. You will see a dialog box with the driver ISO TP4/CLNP Stack selected. Select
	  the OK button.
	
	4. You will now be returned to the Network Control Panel applet on the Protocols
	  tab. TP4 should now appear on the list of installed protocols.
	
	5. Select Close to complete the installation process. During the close down
	  process, you will be given TP4 configuration options. Select the proper Local
	  Address and NSAP address for your configuration and then select the OK
	  button.
	
	6. Re-start the server when requested. Upon re-start the TP4 stack will be
	  installed and available for use.
	
	The NT ISO TP4 stack is bound to the Streams environment. TP4 is a Streams driver
	that does not export TDI at its upper edge nor NDIS at its lower edge. Instead,
	it exports the AT&T "Transport Provider Interface" (TPI) at its upper edge,
	and the "Data Link Provider Interface" (DLPI) at its lower edge. The NT Streams
	environment includes facilities to convert TDI primitives to equivalent TPI
	primitives at the upper edge, and DLPI primitives to NDIS primitives at the
	lower edge.
	
	It is not possible to communicate via NetBios over TP4. You can only communicate
	with TP4 via the Windows Sockets (WinSock) API based on the Berkeley Sockets
	programming model.
	
	Also it is not possible to communicate with TP4 over X25. In the OSI reference
	model, there are two lower-layer stacks: LAN (CLNP) and WAN (X.25). CLNP is used
	in the LAN environment because it does not do any error checking and relies on
	TP4 to do the end-to-end error checking. X.25 is the layer that does all the
	error checking so that any error is caught before it reaches its destination.
	TP4 relies on CLNP and may not rely on TP0/X.25.
	
	TP4 includes the following features:
	
	- Uses CLNP network service provider based on ISO 8473
	
	- Provides guaranteed reliable delivery of packets using sequence numbers
	
	- Ensures data integrity by using checksums
	
	- Re-transmits corrupted or lost packets
	
	Additional query words: prodnt xchg exchng
	
	======================================================================
	Keywords          : kbenv kbinterop 
	Technology        : kbWinNTsearch kbWinNT400search kbWinNTSsearch kbWinNTS400search kbWinNTS400
	Version           : :4.0
	
	=============================================================================
	

{% endraw %}
