---
layout: page
title: "Q150301: Global Voice Commands Take Precedence over Custom Commands"
permalink: kb/150/Q150301/
---

## Q150301: Global Voice Commands Take Precedence over Custom Commands

	Article: Q150301
	Product(s): Microsoft Mail For PC Networks
	Version(s): 1.0
	Operating System(s): 
	Keyword(s): win95 msphone1
	Last Modified: 08-NOV-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Phone, version 1.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you attempt to use a custom voice command created with Microsoft Voice for
	a specific application, it is not executed. Instead a different action may
	occur.
	
	CAUSE
	=====
	
	If there is a global voice command with the same name as the custom voice
	command you are attempting to run, the global voice command is executed instead,
	even if the application that the custom voice command was created for has focus.
	Global voice commands take precedence over custom voice commands.
	
	
	RESOLUTION
	==========
	
	Make sure that Microsoft Voice is enabled, and then rename the custom voice
	command to a name that is not used by a global voice command. To do so, follow
	these steps:
	
	1. Click the Microsoft Voice icon on the taskbar, and then click Modify Voice
	  Command.
	
	2. Locate the name of the application for which the custom voice command was
	  created in the Voice Commands tree and click the plus (+) sign next to the
	  application's name.
	
	3. Locate and click the name of the custom voice command in the Voice Commands
	  tree so that the custom command is selected.
	
	4. Click the Rename button.
	
	5. Type the new name in the New Voice Command Name line, click OK, and then
	  click Close.
	
	NOTE: To view the list of Global Voice Commands, click the Microsoft Voice icon
	on the taskbar, and then click "What can I say?"
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in Microsoft Phone version 1.0. We
	are researching this problem and will post new information here in the Microsoft
	Knowledge Base as it becomes available.
	
	Additional query words: 1.00 tazz priority
	
	======================================================================
	Keywords          : win95 msphone1 
	Technology        : _IKkbbogus kbMSHardwareSearch kbPhone
	Version           : :1.0
	
	=============================================================================
	
