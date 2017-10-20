---
layout: page
title: "Q139615: Blank Screen May Be Caused By Corrupt Video Driver"
permalink: /kb/139/Q139615/
---

## Q139615: Blank Screen May Be Caused By Corrupt Video Driver

{% raw %}

	Article: Q139615
	Product(s): Microsoft Windows NT
	Version(s): 3.50 3.51
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
	
	If you start Windows NT and notice a blank screen, the video driver you are
	using may be damaged. This article describes how you can verify that the video
	driver is damaged.
	
	MORE INFORMATION
	================
	
	To verify the video driver is damaged:
	
	1. Boot Windows NT in /basevideo mode. If the video driver is not the standard
	  VGA compatible driver (VGA.SYS), this operation should work.
	
	2. If the video driver is VGA.SYS, do not boot Windows NT in /basevideo mode.
	  Instead, start Windows NT "blind." For additional information, please see the
	  following article(s) in the Microsoft Knowledge Base:
	
	  ARTICLE-ID: Q103615
	  TITLE : Recovering From an Incompatible Video Driver
	
	3. Shutdown Windows NT "blind" and reboot your computer. To verify that the
	  Windows NT has restarted, attempt to connect to a network share on this
	  computer from another computer.
	
	After you verify that the video driver is damaged, do one of the following:
	
	- Boot your computer using the Windows NT Setup Boot Disk (for your version of
	  Windows NT) and select R for Repair. Enable the "Verify Windows NT system
	  files" option, and continue with the Repair process.
	
	  -OR-
	
	- Copy VGA.SYS from the I386 directory (for Intel platforms) on the Windows NT
	  Server or Workstation CD-ROM disc to the following directory:
	
	  %SystemRoot%\SYSTEM32\DRIVERS
	
	Additional query words: prodnt corrupt black
	
	======================================================================
	Keywords          :  
	Technology        : kbWinNTsearch kbWinNTWsearch kbWinNT351search kbWinNT350search kbWinNTW350 kbWinNTW350search kbWinNTW351search kbWinNTW351 kbWinNTSsearch kbWinNTS351 kbWinNTS350 kbWinNTS351search kbWinNTS350search
	Version           : 3.50 3.51
	
	=============================================================================
	

{% endraw %}
