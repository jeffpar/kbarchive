---
layout: page
title: "Q94063: LAN Man Setup Hangs with Two &#91;tcpip_node&#93; Sections"
permalink: /kb/094/Q94063/
---

## Q94063: LAN Man Setup Hangs with Two &#91;tcpip_node&#93; Sections

{% raw %}

	Article: Q94063
	Product(s): Microsoft LAN Manager
	Version(s): 
	Operating System(s): 
	Keyword(s): kbnetwork
	Last Modified: 30-JUL-2001
	
	SYMPTOMS
	========
	
	After the upgrade from LAN Manager 2.1a to 2.2 has completed, LANMAN.INI has two
	sections of [tcpip_node]--the first one is left blank and the original one is
	appended to the end of the file.
	
	CAUSE
	=====
	
	The LAN Manager 2.1a Setup program does not fully recognize the section
	[tcpip_node] in LANMAN.INI.
	
	RESOLUTION
	==========
	
	You must remove the blank, first [tcpip_node] section for two reasons:
	
	- Because it is blank, [tcpip_node] may not initialize correctly due to blank
	  parameters.
	
	- Two [tcpip_node] sections in LANMAN.INI will hang the Setup program during
	  upgrade after copying all the files from the Drivers 1 disk. The dialog box
	  "Please Wait..." will not disappear.
	
	Additional query words: install tcp/ip 2.20 2.2 2.10a 2.1a
	
	======================================================================
	Keywords          : kbnetwork 
	
	=============================================================================
	

{% endraw %}
