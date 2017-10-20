---
layout: page
title: "Q99750: Using LAN Manager 2.2 OS/2 Workstation to Support OS/2"
permalink: /kb/099/Q99750/
---

## Q99750: Using LAN Manager 2.2 OS/2 Workstation to Support OS/2

{% raw %}

	Article: Q99750
	Product(s): Microsoft LAN Manager
	Version(s): 
	Operating System(s): 
	Keyword(s): kbnetwork
	Last Modified: 30-JUL-2001
	
	SUMMARY
	=======
	
	Although it is not supported yet, you can use a LAN Manager 2.2 OS/2 workstation
	to support OS/2 2.1. All you have to do is make the following change so that the
	workstation does not respond that the wrong version of OS/2 is installed:
	
	1. Use COPY CON to create the file C:\OS2VER.
	
	2. Add this line:
	
	  2.0=netwksta.sys
	
	3. Close the file via F6 or ^Z.
	
	4. Reboot.
	
	Additional query words: 2.20 2.2
	
	======================================================================
	Keywords          : kbnetwork 
	
	=============================================================================
	

{% endraw %}
