---
layout: page
title: "Q262925: Err Msg: &lt;Game&gt; Does Not Support the Connected Device Type..."
permalink: /kb/262/Q262925/
---

## Q262925: Err Msg: &lt;Game&gt; Does Not Support the Connected Device Type...

{% raw %}

	Article: Q262925
	Product(s): Microsoft Home Games
	Version(s): 2.0
	Operating System(s): 
	Keyword(s): kberrmsg kbhw kbimu kbHardware
	Last Modified: 06-AUG-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows Entertainment Pack, volume 2 
	- Microsoft Entertainment Pack for Windows CE version 2.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you attempt to install game included in Microsoft Windows Entertainment
	Pack, volume 2, or Microsoft Entertainment Pack for Windows CE version 2.0, you
	may receive an error message similar to the following:
	
	  <Game> does not support the connected device type, the application
	  manager will make the application available for installation when a supported
	  device is connected.
	
	CAUSE
	=====
	
	This behavior can occur if one or more of the following conditions are true:
	
	- You installed the Entertainment Pack software on a device that does not use
	  the Windows CE operating system, such as a Palm V or a PalmPilot device.
	
	- You installed the Entertainment Pack software for the Handheld PC (H/PC) on a
	  Palm-size PC (P/PC) or a Pocket PC.
	
	- You installed the Entertainment Pack software for the P/PC or Pocket PC on an
	  H/PC.
	
	- You installed a game in the Entertainment Pack software on a version of
	  Microsoft Windows CE other than version 2.x.
	
	- The Microsoft ActiveSync files are mismatched or outdated.
	
	RESOLUTION
	==========
	
	To resolve this issue, follow these steps:
	
	1. Make sure that you install the Entertainment Pack software on a Windows CE
	  device.
	
	  NOTE: PalmPilot and Palm V devices do not use the Windows CE operating system.
	
	2. Make sure that you install the correct version of the Entertainment Pack
	  software for your Windows CE device.
	
	3. Make sure that you install the Entertainment Pack software on Windows CE
	  version 2.x.
	
	
	4. Download and install the latest version of the ActiveSync software from the
	  following Microsoft Web site:
	
	  http://www.microsoft.com/mobile/downloads/default.asp
	
	STATUS
	======
	
	Microsoft has confirmed that this is a problem in the Microsoft products that
	are listed at the beginning of this article.
	
	The third-party products that are discussed in this article are manufactured by
	companies that are independent of Microsoft. Microsoft makes no warranty,
	implied or otherwise, regarding the performance or reliability of these
	products.
	
	Additional query words: msgame entpack hpc ppc wince
	
	======================================================================
	Keywords          : kberrmsg kbhw kbimu kbHardware 
	Technology        : kbHomeProdSearch kbGamesSearch kbWinEntPkSearch kbWinEntPk200
	Version           : :2.0
	Issue type        : kbprb
	
	=============================================================================
	

{% endraw %}
