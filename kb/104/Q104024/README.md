---
layout: page
title: "Q104024: Ethernet Frame Types for NWLINK"
permalink: /kb/104/Q104024/
---

## Q104024: Ethernet Frame Types for NWLINK

{% raw %}

	Article: Q104024
	Product(s): Microsoft Windows NT
	Version(s): winnt:3.1
	Operating System(s): 
	Keyword(s): kbsetup
	Last Modified: 08-AUG-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Server version 3.1 
	- Microsoft Windows NT Workstation version 3.1 
	- Microsoft Windows NT Advanced Server, version 3.1 
	-------------------------------------------------------------------------------
	
	When you install NWLink, you need to provide a value for "Frame Type"
	that specifies the frame format that the NWLink packets will use.
	Although default frame types exist for different versions of Novell
	NetWare, NetWare networks can conceivably use one of six different
	frame types. For those cases, this article describes how to determine
	the correct frame type for NWLink when setting up Windows NT on an
	existing NetWare network.
	
	MORE INFORMATION
	================
	
	NetWare version 2.2 and 3.11 servers use the Ethernet_802.3 frame type by
	default. In NetWare networks, this is often referred to as "raw 802.3." NetWare
	version 4.0 servers use the 802.2 frame type by default.
	
	These defaults are summarized in the following table:
	
	  NetWare Version         Default Frame Type
	  ------------------------------------------
	  2.2                     Ethernet_802.3
	  3.1                     Ethernet_802.3
	  4.0                         802.2
	
	Assuming the person who created the network didn't deviate from the settings
	listed above, the appropriate default frame type should be selected when
	installing NWLink. However, if a Windows NT computer, acting as an application
	server, is not able to communicate with a Novell MS-DOS client computer after
	selecting the relevant default frame type, you can determine the correct frame
	type by examining the NET.CFG file located on the NetWare client.
	
	The NET.CFG is a text file containing configuration information for a NetWare
	workstation. It maintains section headings and defined options that deviate from
	the established defaults for the regular workstation. Using any text file
	editor, or by displaying the file at the command prompt (that is, using the
	MS-DOS TYPE command), locate the Link Driver section, under which the Frame
	parameter is set. This setting should look like the following:
	
	  Link Driver "drivername"
	  FRAME "frame_type"
	
	In the above example, "drivername" is the name of the network adapter driver and
	"frame_type" is the frame type that is used with the network board. The Link
	Driver section supports many entries, and the FRAME parameter may not be the
	first line following the section header.
	
	NWLink's "Frame Type" parameter must be identical to the frame type specified in
	the NetWare client's NET.CFG file to use NWLink to communicate with a NetWare
	client.
	
	Additional query words: IPX
	
	======================================================================
	Keywords          : kbsetup 
	Technology        : kbWinNTsearch kbWinNTWsearch kbWinNTW310 kbWinNTSsearch kbWinNTS310 kbWinNTAdvSerSearch kbWinNTAdvServ310 kbWinNTS310search kbWinNT310Search kbWinNTW310Search
	Version           : winnt:3.1
	
	=============================================================================
	

{% endraw %}
