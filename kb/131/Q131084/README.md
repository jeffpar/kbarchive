---
layout: page
title: "Q131084: Corrupt Swap File Dual Booting Windows 3.1"
permalink: kb/131/Q131084/
---

## Q131084: Corrupt Swap File Dual Booting Windows 3.1

	Article: Q131084
	Product(s): Microsoft Windows 95.x Retail Product
	Version(s): 95
	Operating System(s): 
	Keyword(s): win31 win95
	Last Modified: 17-DEC-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows 95 
	-------------------------------------------------------------------------------
	
	
	SYMPTOMS
	========
	
	When you start Windows or Windows for Workgroups versions 3.1 or 3.11 on a
	computer that has Windows 95 and dual boot installed, you may receive a warning
	about a corrupt swap file. This occurs only after you run Windows 95 and then
	boot the previous version of Windows.
	
	CAUSE
	=====
	
	When Windows 95 is installed to a clean directory on a computer that also has
	Windows 3.1x or Windows for Workgroups installed, Windows 95 attempts to share a
	swap file with the existing Windows installation. It does so to save disk space.
	In most cases, this causes no conflict. However, if you change the virtual
	memory setting from within the previous version of Windows, or if you re-install
	Windows 95 over the existing Windows 95 directory, when you run Windows 95
	again, it may change the swap file in such a way that Windows 3.1x displays the
	"Corrupt swap file" message.
	
	RESOLUTION
	==========
	
	To work around this behavior, delete the PagingFile and MinPagingFileSize lines
	from the System.ini file so that Windows 95 has its own swap file.
	
	To save disk space, you may can change the Windows 3.1x virtual memory settings
	to use a temporary swap file. If you want Windows 3.1x to use a permanent swap
	file, run its Virtual Memory applet to reconstruct the swap file.
	
	
	Additional query words: swapfile
	
	======================================================================
	Keywords          : win31 win95 
	Technology        : kbWin95search kbZNotKeyword3
	Version           : 95
	
	=============================================================================
	
