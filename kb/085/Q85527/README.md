---
layout: page
title: "Q85527: Adobe Type Manager Overwrites HP DeskJet Soft Fonts"
permalink: /kb/085/Q85527/
---

## Q85527: Adobe Type Manager Overwrites HP DeskJet Soft Fonts

{% raw %}

	Article: Q85527
	Product(s): Microsoft Windows 95.x Retail Product
	Version(s): WINDOWS:3.1,3.11
	Operating System(s): 
	Keyword(s): 
	Last Modified: 07-DEC-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows versions 3.1, 3.11 
	-------------------------------------------------------------------------------
	
	
	SYMPTOMS
	========
	
	When you print to a Hewlett-Packard (HP) DeskJet using both Adobe Type Manager
	(ATM) version 2.0 and HP soft fonts from Microsoft Windows 3.1, the ATM fonts
	overwrite the soft fonts, so that ATM sends the equivalent graphic characters to
	the printer, replacing the soft fonts.
	
	For example, let's say you use the HP soft-font package HP 22708A, which gives
	you the TMS RMN font in assorted sizes. When you print with ATM 2.0 active,
	ATM's Times font is sent to the printer instead of the TMS RMN soft fonts.
	
	CAUSE
	=====
	
	This is a problem with ATM version 2.0.
	
	WORKAROUND
	==========
	
	1. Edit the ATM.INI file with a standard ASCII text editor, such as Notepad.
	
	2. Locate the [Aliases] section and comment out two lines (as shown below) with
	  semicolons:
	
	        [Aliases]
	        ;Tms Rmn=Times
	        ;Helv=Helvetica
	
	MORE INFORMATION
	================
	
	Adobe Type Manager is manufactured by a vendor independent of Microsoft; we make
	no warranty, implied or otherwise, regarding this product's performance or
	reliability.
	
	
	Additional query words: 3.10 ATM 3.11 3rdparty
	
	======================================================================
	Keywords          :  
	Technology        : kbWin3xSearch kbZNotKeyword3 kbWin310 kbWin311
	Version           : WINDOWS:3.1,3.11
	
	=============================================================================
	

{% endraw %}
