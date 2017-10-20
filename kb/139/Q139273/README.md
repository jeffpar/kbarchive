---
layout: page
title: "Q139273: STOP 0x0000000A Using 3Com 3C770 with Compaq and HP"
permalink: /kb/139/Q139273/
---

## Q139273: STOP 0x0000000A Using 3Com 3C770 with Compaq and HP

{% raw %}

	Article: Q139273
	Product(s): Microsoft Windows NT
	Version(s): 3.5,3.51
	Operating System(s): 
	Keyword(s): 
	Last Modified: 18-FEB-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Workstation versions 3.5, 3.51 
	- Microsoft Windows NT Server versions 3.5, 3.51 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you use the 3Com 3C770 FDDI adapter driver in Windows NT 3.51 on a Compaq
	ProSignia 300 or 500, ProLiant 1500 or 4500, or Deskpro/XL computer, or on some
	Hewlett-Packard (HP) computers, the following STOP error message appears:
	
	  STOP: 0x0000000A
	
	CAUSE
	=====
	
	Bus timing can lead to a hardware malfunction on the 3C770. 3Com has determined
	that there is no software workaround and has revised the hardware to fix this
	problem.
	
	RESOLUTION
	==========
	
	According to the latest Windows NT 3.51 Hardware Compatibility List, the 3Com
	3C770 network adapter driver is not supported on these Compaq computers. Do not
	use the FDDILink adapter in any of these computers.
	
	You can obtain the revised adapter and driver from 3Com Technical Support at
	(800) 876-3266.
	
	For other Compaq PC models, run the adapter's diagnostic external loopback test
	to confirm interoperability.
	
	MORE INFORMATION
	================
	
	Compaq's EISA-PCI bridge chipset's large amount of wait-states causes 3Com's
	adapter to skip 4-byte at certain burst cycle. With NetBEUI, this manifests into
	a data-corruption problem on the Compaq ProSignia 500 computer. The 3C770 driver
	included on the Windows NT Workstation and Windows NT Server CD-ROM disks in the
	\DRVLIB\NETCARD\xX86\3C770 subdirectory is designed for use with only Windows NT
	3.5 and not in Windows NT 3.51. Updates to this adapter will be listed in future
	Hardware Compatibility Lists. The symptom mentioned above does not occur on 3Com
	network adapters with revision 08-0015-002-REV5A or higher.
	
	
	The third-party products discussed here are manufactured by vendors independent
	of Microsoft; we make no warranty, implied or otherwise, regarding these
	products' performance or reliability.
	
	
	Additional query words: prodnt trap 0xA hcl
	
	======================================================================
	Keywords          :  
	Technology        : kbWinNTsearch kbWinNTWsearch kbWinNT351search kbWinNT350search kbWinNTW350 kbWinNTW350search kbWinNTW351search kbWinNTW351 kbWinNTSsearch kbWinNTS351 kbWinNTS350 kbWinNTS351search kbWinNTS350search
	Version           : :3.5,3.51
	
	=============================================================================
	

{% endraw %}
