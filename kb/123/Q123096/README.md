---
layout: page
title: "Q123096: Windows 95 Err Msg: Setup Error G1. Windows Setup Cannot..."
permalink: /kb/123/Q123096/
---

## Q123096: Windows 95 Err Msg: Setup Error G1. Windows Setup Cannot...

{% raw %}

	Article: Q123096
	Product(s): Microsoft Windows 95.x Retail Product
	Version(s): 95
	Operating System(s): 
	Keyword(s): win95
	Last Modified: 17-DEC-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows 95 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	After you type "setup" (without the quotation marks) to start the Microsoft
	Windows 95 Setup program, you may receive the following error message:
	
	  Setup Warning G1: Setup cannot run from MS-DOS with EMM386.EXE or other
	  memory managers (such as QEMM or 386Max) running on your computer. If Windows
	  is on your computer, run Setup from Windows. Otherwise, remove the memory
	  manager from your CONFIG.SYS file, and then restart your computer before
	  running Setup. After Windows 95 is installed, you can safely add the memory
	  manager back to your CONFIG.SYS file.
	
	CAUSE
	=====
	
	Some Gateway 2000 computers are equipped with BIOS chip sets that cause this
	error message to appear when you run Setup from MS-DOS and you are loading
	EMM386.EXE, or a similar memory manager, in the CONFIG.SYS file.
	
	WORKAROUND
	==========
	
	To work around this error message:
	
	- Remove EMM386.EXE (or the similar memory manager) before you run Setup.
	
	  -or-
	
	- Run Setup from within Windows (for example, perform an upgrade over a
	  previous version of Windows or Windows for Workgroups).
	
	  -or-
	
	- Upgrade the BIOS in your computer.
	
	
	MORE INFORMATION
	================
	
	It is uncertain exactly which BIOS manufacturers and versions cause this error
	message; however, it has been reported with the following BIOS chip sets:
	
	- Phoenix 486 ROM BIOS Plus dated 1/15/88
	
	- Phoenix ROM BIOS version 0.10 copyright 1990
	
	Additional query words: 3rdparty err msg
	
	======================================================================
	Keywords          : win95 
	Technology        : kbWin95search kbZNotKeyword3
	Version           : 95
	
	=============================================================================
	

{% endraw %}
