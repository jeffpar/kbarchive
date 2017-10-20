---
layout: page
title: "Q156290: XCLN Forms Designer Hangs Attempting To Install Project File"
permalink: /kb/156/Q156290/
---

## Q156290: XCLN Forms Designer Hangs Attempting To Install Project File

{% raw %}

	Article: Q156290
	Product(s): Microsoft Exchange
	Version(s): WINDOWS:4.0,5.0
	Operating System(s): 
	Keyword(s): kbusage
	Last Modified: 14-JAN-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Exchange Windows 3.x client, versions 4.0, 5.0 
	- Microsoft Exchange Windows NT client, versions 4.0, 5.0 
	- Microsoft Exchange Windows 95/98 client, versions 4.0, 5.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you install a Microsoft Exchange Electronic Forms Designer (EFD) project
	file (*.efp file), the computer may stop responding, or a general protection
	fault (GPF) may occur. The only way to get back into Exchange Forms Designer at
	this point is to end task from Task Manager and restart.
	
	CAUSE
	=====
	
	This behavior occurs during the project installation and compile processand is
	due to an out of memory error. The out of memory error is caused in turn by the
	number of controls placed on and Exchange Form during design time. The number of
	controls is not limited during design time but the number that can be present
	while installing or compiling an Exchange Forms Project file is limited to a
	number between 80 to 120. This number varies due to the different memory
	requirements of each control.
	
	WORKAROUND
	==========
	
	Before installing, limit the number of controls present in an Exchange Forms
	project file to approximately 80 controls.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in Microsoft Exchange versions 4.0.
	We are researching this problem and will post new information here in the
	Microsoft Knowledge Base as it becomes available.
	
	
	Additional query words: Exchange forms install hang compile EFD GPF OOM exclnfaqold
	
	======================================================================
	Keywords          : kbusage 
	Technology        : kbExchangeSearch kbExchange500 kbExchange400 kbExchangeClientSearch kbZNotKeyword kbZNotKeyword2 kbZNotKeyword3 kbExchange400NT kbExchange500NT kbExchange400Win95 kbExchange500Win95
	Version           : WINDOWS:4.0,5.0
	
	=============================================================================
	

{% endraw %}
