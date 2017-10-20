---
layout: page
title: "Q162565: How to Install CSNW or GSNW from Floppy Disks for Windows NT 4.0"
permalink: /kb/162/Q162565/
---

## Q162565: How to Install CSNW or GSNW from Floppy Disks for Windows NT 4.0

{% raw %}

	Article: Q162565
	Product(s): Microsoft Windows NT
	Version(s): 4.0
	Operating System(s): 
	Keyword(s): kbnetwork
	Last Modified: 08-AUG-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Workstation version 4.0 
	- Microsoft Windows NT Server version 4.0 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	This article describes how to create a floppy disk from the original compact
	disc to install Client Services for NetWare (CSNW) or Gateway Services for
	NetWare (GSNW) for Windows NT 4.0.
	
	MORE INFORMATION
	================
	
	The following procedures require that NWLink is installed and configured
	correctly on the computers on which you are going to install CSNW or GSNW.
	
	Client Services for NetWare
	---------------------------
	
	To create a floppy disk to install CSNW:
	
	1. Create an \i386 subdirectory in the root directory of the floppy disk.
	
	2. Copy Cdrom_W.40 from the root directory of the Windows NT compact disc to the
	  root directory of the floppy disk.
	
	3. Copy the following files from the \i386 directory on the Windows NT
	  Workstation compact disc to the \i386 directory on the floppy disk:
	
	     Netware.dr_
	     Nw16.ex_
	     Nwapi16.dl_
	     Nwapi32.dl_
	     Nwc.cp_
	     Nwcfg.dl_
	     Nwdoc.cn_
	     Nwdoc.hl_
	     nwevent.dl_
	     Nwrdr.sy_
	     Nwscript.ex_
	     Nwwks.dl_
	     Perfnw.dl_
	     Vwipxspx.dl_
	     Vwipxspx.ex_
	
	To install CSNW from the floppy disk:
	
	1. Run Control Panel.
	
	2. Choose Network.
	
	3. Choose Services.
	
	4. Choose Add.
	
	5. Select Client Services for NetWare and choose OK.
	
	6. When you are prompted for a path, type the following and then press Enter:
	
	  <drive>:\i386
	
	  where <drive> is the floppy disk drive containing the floppy disk you
	  created.
	
	Gateway Services for NetWare
	----------------------------
	
	To create a floppy disk to install GSNW:
	
	1. Create an \i386 subdirectory in the root directory of the floppy disk.
	
	2. Copy the file Cdrom_s.40 from the Windows NT Server compact disc root
	  directory to the root directory of the floppy disk.
	
	3. Copy the following files from the \i386 directory on the Windows NT
	  Workstation compact disc to the \i386 directory on the floppy disk:
	
	     Netware.dr_
	     Nw16.ex_
	     Nwapi16.dl_
	     Nwapi32.dl_
	     Nwc.cp_
	     Nwcfg.dl_
	     Nwdocgw.cn_
	     Nwdocgw.hl_
	     Nwevent.dl_
	     Nwrdr.sy_
	     Nwscript.ex_
	     Nwwks.dl_
	     Perfnw.dl_
	     Vwipxspx.dl_
	     Vwipxspx.ex_
	
	To install GSNW from the floppy disk:
	
	1. Run Control Panel.
	
	2. Choose Network.
	
	3. Choose Services.
	
	4. Choose Add.
	
	5. Select Gateway (and Client) Services for NetWare and choose OK.
	
	6. When you are prompted for a path, type the following and then press Enter:
	
	  <drive>:\i386
	
	  where <drive> is the floppy disk drive containing the floppy disk you
	  created.
	
	For instructions on installing to Windows NT 3.51, please see the following
	article in the Microsoft Knowledge Base:
	
	  ARTICLE-ID: Q134960
	  TITLE : How to Install CSNW or GSNW from Floppy Disks
	
	======================================================================
	Keywords          : kbnetwork 
	Technology        : kbWinNTsearch kbWinNTWsearch kbWinNTW400 kbWinNTW400search kbWinNT400search kbWinNTSsearch kbWinNTS400search kbWinNTS400
	Version           : 4.0
	
	=============================================================================
	

{% endraw %}
