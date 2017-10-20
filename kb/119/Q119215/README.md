---
layout: page
title: "Q119215: WSS Err Msg: WSETUP Caused a GP Fault in Module WSETUP.EXE..."
permalink: /kb/119/Q119215/
---

## Q119215: WSS Err Msg: WSETUP Caused a GP Fault in Module WSETUP.EXE...

{% raw %}

	Article: Q119215
	Product(s): Miscellaneous Windows Products
	Version(s): 2.00 2.00a
	Operating System(s): 
	Keyword(s): 
	Last Modified: 13-JUN-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows Sound System, versions 2.0, 2.0a 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	The Windows Sound System installation fails at the end of Setup with the
	following error message:
	
	  WSETUP caused a General Protection Fault in module WSETUP.EXE at
	  <address>.
	
	This error is displayed if any line in the [386Enh] section of the SYSTEM.INI
	file contains more than 80 characters. This includes blank lines that contain
	more than 80 spaces and lines that are remarked out.
	
	RESOLUTION
	==========
	
	1. Make a backup copy of your SYSTEM.INI file.
	
	2. Edit any line containing more than 80 characters in the [386Enh] section of
	  the SYSTEM.INI file to be 80 characters or fewer.
	
	3. Run the Windows Sound System Setup program to complete the installation.
	
	
	Additional query words: 2.00 2.00a gpf gp fault entry
	
	======================================================================
	Keywords          :  
	Technology        : kbWinSoundSysSearch kbWinSoundSys200 kbWinSoundSys200a
	Version           : 2.00 2.00a
	
	=============================================================================
	

{% endraw %}
