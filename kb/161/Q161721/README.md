---
layout: page
title: "Q161721: Interphase EISA Adapter Doesn't Support EISA Bus Preemption"
permalink: /kb/161/Q161721/
---

## Q161721: Interphase EISA Adapter Doesn't Support EISA Bus Preemption

	Article: Q161721
	Product(s): Microsoft Windows NT
	Version(s): 3.5,3.51,4.0
	Operating System(s): 
	Keyword(s): kb3rdparty kbhw kbHardware
	Last Modified: 25-FEB-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Workstation versions 3.5, 3.51, 4.0 
	- Microsoft Windows NT Server versions 3.5, 3.51, 4.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	The Cisco/Interphase EISA FDDI/CDDI adapters do not support EISA bus preemption.
	This may result in the adapter's being incompatible with PCs using a dual/split
	PCI/EISA I/O bus.
	
	The following models of Cisco/Interphase EISA FDDI/CDDI network adapters:
	
	- WA-C321T-PC
	
	- WA-C323T-PC
	
	- WA-C326T-PC
	
	- WA-C328T-PC
	
	can cause intermittent system resets or crashes with STOP: 0X0000000A.
	
	Some PC systems that are known to exhibit this symptom include:
	
	- IBM PC Server 320 CYO
	
	- Compaq Proliant series (some models)
	
	- ALR Revolution Quad6
	
	
	CAUSE
	=====
	
	The Interphase EISA FDDI/CDDI adapter requires guaranteed access time (GAT) to
	function properly. PCs that implement EISA bus preemption without also
	supporting GAT will experience problems. The symptom is intermittent and occurs
	when both the FDDI adapter and a PCI device are active.
	
	The adapter design predates implementation of the EISA bus preemption feature as
	described in EISA specification 3.12 (PCI/EISA systems shipped after 9/1/95).
	
	In PCs with both a PCI and an EISA bus, PCI devices are allowed access to system
	memory even if the EISA bus has been granted control. Because the adapter
	requires GAT, and because PCI devices are able to de-assert the EXRDY (external
	ready) signal to the EISA bus, the adapter will stall and not finish its
	transfer to memory.
	
	WORKAROUND
	==========
	
	If you are experiencing this problem, first contact your system vendor to see if
	your PC supports GAT mode. If your PC does not support GAT, consider the
	following two workarounds:
	
	- Reduce adapter transfer burst size from 64 bytes to 32 bytes. This reduces
	  burst transfer time and has a positive effect on some systems. This can be
	  changed in the registry entries for the drivers (C320tnt.sys). To make this
	  change, follow the steps listed below:
	
	  WARNING: Using Registry Editor incorrectly can cause serious, system-wide
	  problems that may require you to reinstall Windows NT to correct them.
	  Microsoft cannot guarantee that any problems resulting from the use of
	  Registry Editor can be solved. Use this tool at your own risk.
	
	  1. Run Regedt32 and select the HKEY_LOCAL_MACHINE Window
	
	  2. Go to SYSTEM\CurrentControlSet\Services\c320tnt1\parameters
	
	  3. Change the "BurstSize" from 63 (3F hex) to 31 (1F hex)
	
	- An alternative for adding FDDI connectivity, for systems with PCI slots, is
	  the Interphase PCI/FDDI 5511.
	
	  NOTE: Don't use an EISA adapter in PCs with active PCI devices. Use the
	  adapter only in PCs that have an EISA bus.
	
	MORE INFORMATION
	================
	
	Additional information can be obtained from Interphase at the following URL:
	
	  http://www.iphase.com/Public/AppEng/prodsup/c32x/EISAFDD2
	
	  Interphase Corporation
	  13800 Senlac
	  Dallas, TX 75234-8823
	
	  Technical Support: +1.214.654.5555
	  E-mail: intouch@iphase.com
	  World Wide Web: http://www.iphase.com
	  Anonymous FTP: ftp://ftp.iphase.com
	
	The products discussed here are manufactured by Cisco and Interphase, vendors
	independent of Microsoft; we make no warranty, implied or otherwise, regarding
	the products' performance or reliability.
	
	The third-party contact information included in this article is provided to help
	you find the technical support you need. This contact information is subject to
	change without notice. Microsoft in no way guarantees the accuracy of this
	third-party contact information.
	
	Additional query words:
	
	======================================================================
	Keywords          : kb3rdparty kbhw kbHardware 
	Technology        : kbWinNTsearch kbWinNTWsearch kbWinNTW400 kbWinNTW400search kbWinNT351search kbWinNT350search kbWinNT400search kbWinNTW350 kbWinNTW350search kbWinNTW351search kbWinNTW351 kbWinNTSsearch kbWinNTS400search kbWinNTS400 kbWinNTS351 kbWinNTS350 kbWinNTS351search kbWinNTS350search
	Version           : :3.5,3.51,4.0
	
	=============================================================================
	
