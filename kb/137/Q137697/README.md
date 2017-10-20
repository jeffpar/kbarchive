---
layout: page
title: "Q137697: Backup Problems with Colorado Trakker Drive on ECP or EPP Port"
permalink: /kb/137/Q137697/
---

## Q137697: Backup Problems with Colorado Trakker Drive on ECP or EPP Port

{% raw %}

	Article: Q137697
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
	
	If you have a Colorado Trakker tape drive installed in your computer, you may
	receive the following message when you start Microsoft Backup:
	
	  The parallel port your tape drive is connected to is configured as an
	  ECP, Enhanced, or Bi-Directional port. Using your tape drive with this
	  configuration will not work reliably and you will not be able to
	  recover data from tapes. To use your tape drive without data loss on
	  this port, the port configuration must be changed to NON-ECP mode.
	
	Even if you do not receive this message, you may not be able to back up, compare,
	or restore files reliably using Backup. When you try to back up, compare, or
	restore files, you may receive any of the following error messages:
	
	- Unable to transfer data properly. Retry the operation.
	
	- Tape header contains unexpected or invalid values. Microsoft Backup
	  encountered an error reading this tape. This error may be caused by an
	  unformatted or incorrectly formatted tape. Reformat the tape, and then try
	  again.
	
	NOTE: You may not receive any error messages when you back up files, but you may
	then be unable to compare or restore the files. If you can restore the files,
	the data that is restored to your hard disk may be damaged.
	
	CAUSE
	=====
	
	The problems described above can occur when you are using a Colorado Trakker
	tape drive connected to a parallel port that is in extended capabilities port
	(ECP) or enhanced parallel port (EPP) mode. Backup does not function properly
	with Colorado Trakker tape drives connected to ECP or EPP ports.
	
	RESOLUTION
	==========
	
	Configure the parallel port so that it is not in ECP or EPP mode. For
	information about how to configure a parallel port on your computer, please
	consult the computer's documentation or manufacturer.
	
	MORE INFORMATION
	================
	
	Backup may be able to determine when a Colorado Trakker tape drive is connected
	to an ECP or EPP port. When it does, it generates the message stated earlier in
	this article. However, because of the lack of a standard implementation for ECP
	and EPP ports, Backup cannot always detect an ECP or EPP port. When Backup
	cannot detect that an ECP or EPP port is being used, the problems described in
	this article can occur.
	
	======================================================================
	Keywords          : win95 
	Technology        : kbWin95search kbZNotKeyword3
	Version           : 95
	
	=============================================================================
	

{% endraw %}
