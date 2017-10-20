---
layout: page
title: "Q134960: How to Install CSNW or GSNW From Floppy Disks"
permalink: /kb/134/Q134960/
---

## Q134960: How to Install CSNW or GSNW From Floppy Disks

{% raw %}

	Article: Q134960
	Product(s): Microsoft Windows NT
	Version(s): 
	Operating System(s): 
	Keyword(s): 
	Last Modified: 08-AUG-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Workstation versions 3.5, 3.51 
	- Microsoft Windows NT Server versions 3.5, 3.51 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	This article describes how to create a floppy disk, from the original CD- ROM,
	to install Client Services for NetWare (CSNW) or Gateway Services for Netware
	(GSNW).
	
	MORE INFORMATION
	================
	
	The following procedures require that NWLink is installed and configured
	correctly on the computers that you are going to install CSNW or GSNW on.
	
	Client Services for NetWare
	---------------------------
	
	To create a floppy disk to install CSNW:
	
	1. Create an \i386 subdirectory in the root directory of the floppy disk.
	
	2. Copy CDROM.W from the root directory of the Windows NT CD-ROM to the root
	  directory of the floppy disk.
	
	3. Copy the following files from the \i386 directory on the Windows NT
	  Workstation CD-ROM to the \i386 directory on the floppy disk:
	
	  NWRDR.SY_
	  NWAPI32.DL_
	  NWCFG.DL_
	  NETWARE.DR_
	  NW16.EX_
	  NWAPI16.DL_
	  NWC.CP_
	  NWDOC.CN_
	  NWDOC.HL_
	  NWEVENT.DL_
	  NWWKS.DL_
	  PERFNW.DL_
	  VWIPXSPX.DL_
	  VWIPXSPX.EX_
	
	To install CSNW from the floppy disk:
	
	1. Run Control Panel.
	
	2. Choose Network.
	
	3. Choose Add Software.
	
	4. Select Client Services for NetWare and choose OK.
	
	5. When you are prompted for a path, type the following and then press Enter:
	
	  <drive>:\i386
	
	  where <drive> is the floppy disk drive containing the floppy disk you
	  created.
	
	Gateway Services for Netware
	----------------------------
	
	To create a floppy disk to install GSNW:
	
	1. Create an \i386 subdirectory in the root directory of the floppy disk.
	
	2. Copy all the files with a .S filename extension from the root directory of
	  the Windows NT Workstation CD-ROM to the root directory of the floppy disk.
	
	3. Copy the following files from the \i386 directory on the Windows NT
	  Workstation CD-ROM to the \i386 directory on the floppy disk:
	
	  NETWARE.DR_
	  NW16.EX_
	  NWAPI16.DL_
	  NWAPI32.DL_
	  NWC.CP_
	  NWCFG.DL_
	  NWDOCGW.CN_
	  NWDOCGW.HL_
	  NWEVENT.DL_
	  NWRDR.SY_
	  NWWKS.DL_
	  PERFNW.DL_
	  VWIPXSPX.DL_
	  VWIPXSPX.EX_
	
	To install GSNW from the floppy disk:
	
	1. Run Control Panel.
	
	2. Choose Network.
	
	3. Choose Add Software.
	
	4. Select Gateway Services for NetWare and choose OK.
	
	5. When you are prompted for a path, type the following and then press Enter:
	
	  <drive>:\i386
	
	  where <drive> is the floppy disk drive containing the floppy disk you
	  created.
	
	Additional query words: prodnt
	======================================================================
	Keywords          :  
	Technology        : kbWinNTsearch kbWinNTWsearch kbWinNT351search kbWinNT350search kbWinNTW350 kbWinNTW350search kbWinNTW351search kbWinNTW351 kbWinNTSsearch kbWinNTS351 kbWinNTS350 kbWinNTS351search kbWinNTS350search
	
	=============================================================================
	

{% endraw %}
