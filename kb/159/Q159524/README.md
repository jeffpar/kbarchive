---
layout: page
title: "Q159524: SMS: Color Option Causes Folder Name Display Problems w/PCMMAC"
permalink: /kb/159/Q159524/
---

## Q159524: SMS: Color Option Causes Folder Name Display Problems w/PCMMAC

{% raw %}

	Article: Q159524
	Product(s): Microsoft Systems Management Server
	Version(s): winnt:1.0,1.1,1.2
	Operating System(s): 
	Keyword(s): kbenv kbPCM smspcm
	Last Modified: 30-JUL-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Systems Management Server versions 1.0, 1.1, 1.2 
	-------------------------------------------------------------------------------
	
	
	SYMPTOMS
	========
	
	If the Highlight Color option on a Macintosh is set to 'black-white,' Package
	Command Manager for the Macintosh (PCMMAC) will have problems displaying the
	folder names in the left pane of the Package Command Manager (PCM) window.
	
	You may observe any of the following problems:
	
	- When PCMMAC initially loads, the default selection shows only a black bar for
	  the folder name.
	
	- The name of the active folder becomes blank when the next folder is selected
	  (this problem may also be seen by clicking on the right pane of the PCM
	  window).
	
	- Hiding and restoring the PCM window causes the blank names to be restored,
	  but the active folder remains black.
	
	WORKAROUND
	==========
	
	To work around this problem, change the highlight color to something other than
	'black-white.' This setting can be changed in the Color Control Panel.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in Systems Management Server
	versions 1.0, 1.1, and 1.2. We are researching this problem and will post new
	information here in the Microsoft Knowledge Base as it becomes available.
	
	Additional query words: prodsms mac text colour invmac
	
	======================================================================
	Keywords          : kbenv kbPCM smspcm 
	Technology        : kbSMSSearch kbSMS100 kbSMS110 kbSMS120
	Version           : winnt:1.0,1.1,1.2
	
	=============================================================================
	

{% endraw %}
