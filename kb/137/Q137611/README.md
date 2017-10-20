---
layout: page
title: "Q137611: CLIENT.BAT Added Incorrectly to AUTOEXEC.BAT"
permalink: /kb/137/Q137611/
---

## Q137611: CLIENT.BAT Added Incorrectly to AUTOEXEC.BAT

{% raw %}

	Article: Q137611
	Product(s): Microsoft Systems Management Server
	Version(s): winnt:1.0,1.1,1.2
	Operating System(s): 
	Keyword(s): kbnetwork smsgeneral kbArtTypeINF
	Last Modified: 27-JUL-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Systems Management Server versions 1.0, 1.1, 1.2 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	
	Remote Control of Windows for Workgroups client does not work, even after Windows
	for Workgroups is rebooted.
	
	CAUSE
	=====
	
	CLI_DOS appends the CALL D:\MS\SMS\BIN\CLIENT.BAT line to the end of your
	AUTOEXEC.BAT file, after the WIN command. Consequently, CLIENT.BAT runs after
	you quit Windows for Workgroups.
	
	RESOLUTION
	==========
	
	To correct this problem, edit the AUTOEXEC.BAT file on the client so that
	CLIENT.BAT is called before WIN.COM.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in Systems Management Server
	versions 1.0, 1.1, and 1.2. We are researching this problem and will post new
	information in the Microsoft Knowledge Base as it becomes available.
	
	Additional query words: prodsms sms
	
	======================================================================
	Keywords          : kbnetwork smsgeneral kbArtTypeINF 
	Technology        : kbSMSSearch kbSMS100 kbSMS110 kbSMS120
	Version           : winnt:1.0,1.1,1.2
	
	=============================================================================
	

{% endraw %}
