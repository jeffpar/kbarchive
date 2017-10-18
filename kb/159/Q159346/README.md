---
layout: page
title: "Q159346: Msbatch.inf Parameters: Inserting IPX/SPX Options"
permalink: kb/159/Q159346/
---

## Q159346: Msbatch.inf Parameters: Inserting IPX/SPX Options

	Article: Q159346
	Product(s): Microsoft Windows 95.x Retail Product
	Version(s): 95
	Operating System(s): 
	Keyword(s): 
	Last Modified: 17-DEC-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows 95 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	This article describes how to insert IPX/SPX options using the Msbatch.inf file
	for batch installations of Windows 95.
	
	MORE INFORMATION
	================
	
	Microsoft does not encourage or support changes to .inf files; therefore,
	Microsoft Technical Support does not support the procedure in this article.
	Although we have tested the following procedure and it appears to function as
	described, make a backup copy of your .inf file before you proceed.
	
	In the Msbatch.inf file, modify the [Network] section to include the following
	line:
	
	  Protocols=NWLINK  ; other protocols can be inserted here also
	
	Also, add the following section and parameters as needed:
	
	  [NWLINK]
	  Frame_Type=value
	  NetBIOS=value
	  Cachesize=value
	  Maxconnect=value
	  Maxsockets=value
	  Forceeven=value
	
	Frame_Type values:
	
	0=802.3
	1=802.2
	2=Ethernet II
	4=Auto
	5=Token ring
	6=Token ring SNAP
	
	NetBIOS values:
	
	0=Do not install NetBIOS support over IPX/SPX
	1=Install NetBIOS support over IPX/SPX
	
	Cachesize values (Source Routing):
	
	0=Off
	16=16 entry cache (recommended)
	32=32 entry cache
	64=64 entry cache
	
	Maxconnect values (maximum connections):
	
	Allowable values are 1-128. If you do not want a value set for this parameter, do
	not include it in the section.
	
	Maxsockets values (maximum sockets):
	
	Allowable values are 2-255. If you do not want a value set for this parameter, do
	not include it in the section.
	
	Forceeven values:
	
	0=No ; Do not force even-length packets
	1=Yes ; Force even-length packets
	
	Additional Information
	----------------------
	
	If for some reason the frame_type setting in the Msbatch.inf file does not take
	effect, and a certain frame type is required, modify the Nettrans.inf file to
	force the frame type.
	
	To accomplish this, find the following line in the [NWLINK.ndi.reg] section of
	the Nettrans.inf file:
	
	  HKR,Ndi\params\Frame_Type,default,,4
	
	The number at the end of the line is the default for the frame type. Because 4 is
	the default, it defaults to Auto.
	
	When you use the Msbatch.inf file, you force the frame type for a specific
	network adapter or configuration. When enumeration takes place and a new network
	adapter is found, the information in the Nettrans.inf file is used.
	
	======================================================================
	Keywords          :  
	Technology        : kbWin95search kbZNotKeyword3
	Version           : 95
	
	=============================================================================
	
