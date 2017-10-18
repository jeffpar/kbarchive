---
layout: page
title: "Q140008: Seed Routing Network Range Options Grayed Out with DEC FDDI"
permalink: kb/140/Q140008/
---

## Q140008: Seed Routing Network Range Options Grayed Out with DEC FDDI

	Article: Q140008
	Product(s): Microsoft Windows NT
	Version(s): winnt:3.51
	Operating System(s): 
	Keyword(s): kbnetwork
	Last Modified: 08-AUG-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Server version 3.51 
	-------------------------------------------------------------------------------
	
	
	SYMPTOMS
	========
	
	You cannot configure a DEC FDDI (EISA or PCI) network interface card (NIC) to do
	seed routing on Appletalk.
	
	In the Network section of Control Panel, under Services for Macintosh, the option
	to set the Network Range is grayed out after you check the "Seed this Network"
	option in the AppleTalk Routing Configuration dialog box.
	
	WORKAROUND
	==========
	
	You can obtain a fixed driver on the Digital Corporation FTP server located at
	the following address:
	
	- ftp://ftp.digital.com/pub/DEC/adapters/fddi/<adapter_type>/release
	
	  (Where adapter type is either "DEFEA" for EISA or "DEFPA" for PCI)
	
	  -or-
	
	- You can work around the problem by modifying the corresponding OEM*.inf file:
	
	
	  - For the DEC FDDI EISA adapter modify the OEMNADD3.INF file.
	
	  Modify line 485 by changing the last value from 4 to 3; this is the FDDI Media
	  type.
	
	  - For the DEC FDDI PCI adapter modify the OEMNADDF.INF file.
	
	  Modify line 504 by changing the last value from 4 to 3; this is the FDDI Media
	  type.
	
	For best results, modify the corresponding line before you add the card to
	Windows NT. If you have already installed the card:
	
	1. Be sure to quit from the Network Settings dialog box in Control Panel.
	
	2. Modify the *.INF file and save your changes.
	
	3. In Control Panel, choose Network.
	
	4. Select Services for Macintosh (SFM) and choose Configure. The routing
	  configuration dialog box should now display the controls as enabled.
	
	RESOLUTION
	==========
	
	This problem has been corrected in the latest Service Pack for Windows NT
	version 3.51.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in Windows NT version 3.51. This
	problem was corrected in the latest Windows NT 3.51 U.S. Service Pack. For
	information on obtaining the Service Pack, query on the following word in the
	Microsoft Knowledge Base (without the spaces):
	
	  S E R V P A C K
	
	
	Additional query words: prodnt Mac greyed
	
	======================================================================
	Keywords          : kbnetwork 
	Technology        : kbWinNTsearch kbWinNT351search kbWinNTSsearch kbWinNTS351 kbWinNTS351search
	Version           : winnt:3.51
	
	=============================================================================
	
