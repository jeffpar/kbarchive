---
layout: page
title: "Q127838: Unable to Install Drivers During GUI Portion of Setup"
permalink: /kb/127/Q127838/
---

## Q127838: Unable to Install Drivers During GUI Portion of Setup

{% raw %}

	Article: Q127838
	Product(s): Microsoft Windows NT
	Version(s): 
	Operating System(s): 
	Keyword(s): 
	Last Modified: 08-AUG-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Workstation version 3.5 
	- Microsoft Windows NT Server version 3.5 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	If you attempt to install a driver located in the \DRVLIB directory on the
	Windows NT version 3.5 CD during the graphical user interface (GUI) portion of
	Setup, the following error message appears:
	
	  NONCRITICAL ERROR
	
	  An error has occurred. External library procedure CopySingleFile reported the
	  following error: Unable to do the specified file copy operation.
	
	  You may continue (ignoring the error), retry the operation, or exit Setup.
	
	  If you choose to ignore the error, Setup may not be able to completely and/or
	  correctly install the software. If you exit, you will have to repeat the
	  Setup process from the beginning.
	
	CAUSE
	=====
	
	This problem occurs when you install Windows NT from an unsupported CD-ROM or a
	network drive.
	
	Windows NT Setup copies contents of the \I386 directory on the Windows NT CD to
	the local hard disk. When you reach the graphical portion of Setup, any type of
	communication to the unsupported media or the network drive is terminated.
	
	WORKAROUND
	==========
	
	To work around this problem, copy the required drivers from the \DRVLIB
	directory on the Windows NT CD to the local hard disk or to a floppy disk before
	running WINNT (setup).
	
	Additional query words: prodnt netcard disc compact disc cd-rom cdrom
	======================================================================
	Keywords          :  
	Technology        : kbWinNTsearch kbWinNTWsearch kbWinNT350search kbWinNTW350 kbWinNTW350search kbWinNTSsearch kbWinNTS350 kbWinNTS350search
	
	=============================================================================
	

{% endraw %}
