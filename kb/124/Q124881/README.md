---
layout: page
title: "Q124881: WFWG Frame Type Default Depends On Installation Source"
permalink: kb/124/Q124881/
---

## Q124881: WFWG Frame Type Default Depends On Installation Source

	Article: Q124881
	Product(s): Microsoft Windows 3.x Retail Product
	Version(s): WINDOWS:3.11
	Operating System(s): 
	Keyword(s): 
	Last Modified: 22-OCT-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows for Workgroups version 3.11 
	-------------------------------------------------------------------------------
	
	Windows for Workgroups uses one of two different network packet frames
	types (802.2 or 802.3) depending on whether you updated your existing
	Windows for Workgroups installation, or installed Windows for Workgroups
	from the Windows NT Server version 3.5 compact disc.
	
	If you upgrade your existing Windows for Workgroups installation by copying
	the six files from the CLIENTS\WFW\UPDATE directory on the Windows NT
	Server version 3.5 CD, your system continues to use 802.3 frames (the
	previous Windows for Workgroups default). If you install Windows for
	Workgroups to a new directory, from the Windows NT Server version 3.5 CD
	CLIENTS\WFW\NETSETUP directory, your system uses 802.2 frames.
	
	The Windows for Workgroups default frame type was changed from 802.3 to
	802.2 to match the new Novell and Windows NT default frame types. An
	updated NWLINK.386 file was not included in the CLIENTS\WFW\UPDATE
	directory. If it had been, existing clients using 802.3 frames would stop
	working once the updated Windows for Workgroups files were installed.
	
	Additional query words:
	
	======================================================================
	Keywords          :  
	Technology        : kbAudDeveloper kbWFWSearch kbWFW311
	Version           : WINDOWS:3.11
	
	=============================================================================
	
