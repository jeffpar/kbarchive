---
layout: page
title: "Q142688: Tape Devices Tool Cannot Find Location for Floppy Tape Driver"
permalink: /kb/142/Q142688/
---

## Q142688: Tape Devices Tool Cannot Find Location for Floppy Tape Driver

{% raw %}

	Article: Q142688
	Product(s): Microsoft Windows NT
	Version(s): winnt:4.0
	Operating System(s): 
	Keyword(s): kbsetup
	Last Modified: 08-AUG-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Workstation version 4.0 
	- Microsoft Windows NT Server version 4.0 
	-------------------------------------------------------------------------------
	
	
	SYMPTOMS
	========
	
	When you attempt to install a Conner or CMS floppy based tape driver from the
	\Drvlib directory on the Windows NT 4.0 compact disc, you may be prompted with a
	dialog that states the incorrect disk is being used and a prompt to enter the
	path to the driver disk.
	
	WORKAROUND
	==========
	
	Do one of the following to work around this problem:
	
	Install these drivers over the network from the \Drvlib directory. The
	installation functions properly when using the tape devices tool.
	
	-or-
	
	Copy the \Drvlib\Storage\Fenb\Conner or \Drvlib\Storage\Fenb\Cms to a temporary
	directory on your hard disk and then install the drivers with the tape devices
	tool from the temporary directory.
	
	STATUS
	======
	
	The third-party products discussed here are manufactured by vendors independent
	of Microsoft; we make no warranty, implied or otherwise, regarding these
	products' performance or reliability.
	
	Microsoft has confirmed this to be a problem in Windows NT version 4.0. A fix to
	this problem is in development, but has not been regression-tested and may be
	destabilizing in production environments. Microsoft does not recommend
	implementing this fix at this time. Contact Microsoft Product Support Services
	for more information on the availability of this fix.
	
	
	
	
	Additional query words: prodnt cmsfcxx.sys genflpy.sys
	
	======================================================================
	Keywords          : kbsetup 
	Technology        : kbWinNTsearch kbWinNTWsearch kbWinNTW400 kbWinNTW400search kbWinNT400search kbWinNTSsearch kbWinNTS400search kbWinNTS400
	Version           : winnt:4.0
	
	=============================================================================
	

{% endraw %}
