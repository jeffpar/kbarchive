---
layout: page
title: "Q248818: Fighter Ace II: Computer Hangs After You Click &quot;Fly Now&quot;"
permalink: /kb/248/Q248818/
---

## Q248818: Fighter Ace II: Computer Hangs After You Click &quot;Fly Now&quot;

{% raw %}

	Article: Q248818
	Product(s): Microsoft Home Games
	Version(s): 
	Operating System(s): 
	Keyword(s): kb3rdparty kbenv kbimu msgame
	Last Modified: 09-NOV-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Fighter Ace II 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you attempt to play Microsoft Fighter Ace II, the computer may stop
	responding (hang) after you click Fly Now. The "Loading" screen is displayed,
	but the game does not start.
	
	CAUSE
	=====
	
	This behavior can occur if the following conditions are true:
	
	- A 3D accelerator card based on the 3Dfx Voodoo chip set is installed in your
	  computer in addition to a primary video adapter.
	
	- The 3D accelerator card is disabled in Device Manager.
	
	RESOLUTION
	==========
	
	To resolve this issue, enable the 3D accelerator card in Device Manager:
	
	1. Click Start, point to Settings, and then click Control Panel.
	
	2. Double-click System.
	
	3. Click the Device Manager tab.
	
	4. Click the PLUS SIGN (+) next to Display Adapters to expand the branch.
	
	5. View the devices that are listed in the Display Adapters branch of Device
	  Manager.
	
	6. Click the device that appears with a red "X" through the device icon, and
	  then click Properties.
	
	7. Click to clear the "Disable in this hardware profile" check box.
	
	8. Click OK, and then click Close.
	
	9. Close Control Panel, and then restart the computer.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in Microsoft Fighter Ace version
	2.0 for MSN Gaming Zone.
	
	Additional query words: 2.00 msgame fa msngz igz chipset crash hangs freeze lock
	
	======================================================================
	Keywords          : kb3rdparty kbenv kbimu msgame 
	Technology        : kbGamesSearch kbMSNSearch kbFighterAceSearch kbFighterAce2
	Version           : :
	Issue type        : kbbug
	Solution Type     : kbpending
	
	=============================================================================
	

{% endraw %}
