---
layout: page
title: "Q127767: PC WRmt: MWave Modem Is Incompatible w/ Mail Remote Client"
permalink: /kb/127/Q127767/
---

## Q127767: PC WRmt: MWave Modem Is Incompatible w/ Mail Remote Client

{% raw %}

	Article: Q127767
	Product(s): Microsoft Mail For PC Networks
	Version(s): WINDOWS:3.2,3.2a,3.5
	Operating System(s): 
	Keyword(s): 
	Last Modified: 22-JAN-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Mail Remote for Windows, versions 3.2, 3.2a, 3.5 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	When you run version 3.2 of Microsoft Mail Remote for Windows on an IBM Thinkpad
	75x Series equipped with the Mwave modem, the system may appear to hang when you
	choose Connect Now from the View menu.
	
	RESOLUTION
	==========
	
	NOTE: The workaround below is an unsupported switch.
	
	In the MSMAIL.INI file, under the [SFSREMOTE] section, add the line:
	
	  Exclusive=0
	
	The internal default for this setting is 1, giving the Remote client exclusive
	control of the Microsoft Windows operating system. Although this switch will now
	enable task switching (ALT+TAB), you should not task switch while connected. If
	you task switch, you may drop the carrier, or possibly corrupt the mail message
	file (.MMF).
	
	Also, there is a modem script available for this modem in the Workgroups
	Applications forum.
	
	NOTE: This script is provided by a third party and is not supported by
	Microsoft.
	
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in version 3.2 of Microsoft Mail
	Remote for Windows.
	
	MORE INFORMATION
	================
	
	The Mwave software runs at Ring 3 under Windows as confirmed by IBM Mwave
	development. The manner in which the Remote client starts a session and
	communicates with the modem places the session in Ring 1, thus giving it a
	higher privilege than Ring 3. In addition. the Client also runs by default in
	exclusive mode. Clicking on "Stop" pauses the session, allowing lower-
	privileged rings the opportunity to run their code. Using the exclusive switch
	in the MSMAIL.INI file moves the Client out of exclusive mode, and allows the
	lower ring to process its code, as if the session were paused.
	
	For additional information, please see the following article in the Microsoft
	Knowledge Base:
	
	  ARTICLE-ID: Q99106
	  TITLE     : PC WRmt: Mail Controls Windows During Active Modem Session
	
	Additional query words:
	
	======================================================================
	Keywords          :  
	Technology        : kbMailSearch kbZNotKeyword3 kbMailRemote320
	Version           : WINDOWS:3.2,3.2a,3.5
	
	=============================================================================
	

{% endraw %}
