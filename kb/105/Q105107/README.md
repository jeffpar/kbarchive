---
layout: page
title: "Q105107: PC Win: Missing _MSSETUP.EXE Causes Setup to Abort"
permalink: /kb/105/Q105107/
---

## Q105107: PC Win: Missing _MSSETUP.EXE Causes Setup to Abort

{% raw %}

	Article: Q105107
	Product(s): Microsoft Mail For PC Networks
	Version(s): WINDOWS:3.0,3.0b,3.2
	Operating System(s): 
	Keyword(s): 
	Last Modified: 07-NOV-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Mail for Windows, versions 3.0, 3.0b, 3.2 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	In versions 3.0, 3.0b, and 3.2 of Microsoft Mail for Windows, when you run the
	Setup program (SETUP.EXE), the Windows client Setup screen flashes momentarily
	and then returns to File Manager or Program Manager without completing the setup
	process.
	
	CAUSE
	=====
	
	If you run _MSSETUP.EXE instead of SETUP.EXE to install Mail for Windows, the
	file will delete itself and will not run the setup process.
	
	If you then run SETUP.EXE and _MSSETUP.EXE is not present in the same directory
	as SETUP.EXE, the blue setup screen will momentarily flash on the screen and
	quickly disappear because the setup program is unable to find _MSSETUP.EXE.
	
	RESOLUTION
	==========
	
	For version 3.2 of Microsoft Mail, copy _MSSETUP.EXE directly from the original
	Microsoft Mail disk 4 into the Mail executables directory. The _MSSETUP.EXE file
	is 9813 bytes and it is not compressed; therefore, you do not need to use
	EXPAND.EXE.
	
	For version 3.0 of Microsoft Mail, _MSSETUP.EXE is located on the original
	Microsoft Mail disk 1. You must either use the Microsoft MS-DOS version 6.0
	EXPAND.EXE program or reinstall the Windows client.
	
	In some cases (with Mail 3.2), the _MSSETUP.EXE file may be missing from the
	original Microsoft Mail disk 4. In this event, if the computer is running
	version 5.0 or later of MS-DOS, you can use the UNDELETE.EXE command to retrieve
	the file.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in versions 3.0, 3.0b, 3.2, 3.2a,
	and 3.5 of Microsoft Mail for Windows. We are researching this problem and will
	post new information here in the Microsoft Knowledge Base as it becomes
	available.
	
	Additional query words: 3.00 3.00b 3.20 3.20a 3.50
	
	======================================================================
	Keywords          :  
	Technology        : kbMailSearch kbZNotKeyword3 kbMail300 kbMail320 kbMail300b
	Version           : WINDOWS:3.0,3.0b,3.2
	
	=============================================================================
	

{% endraw %}
