---
layout: page
title: "Q99445: Loading and Using PRTSC.EXE"
permalink: /kb/099/Q99445/
---

## Q99445: Loading and Using PRTSC.EXE

{% raw %}

	Article: Q99445
	Product(s): Microsoft LAN Manager
	Version(s): 
	Operating System(s): 
	Keyword(s): 
	Last Modified: 30-JUL-2001
	
	SUMMARY
	=======
	
	The PRTSC.EXE utility is a terminate-and-stay resident (TSR) program used to
	flush the print spooler when an application has failed to send an end-of-job
	signal. After executing PRTSC.EXE, you flush the spooler by pressing
	CTRL+ALT+PRINT SCREEN.
	
	Like any TSR, PRTSC.EXE must be loaded before the NET START workstation and LOAD
	NetBEUI commands; if it isn't, the NET STOP workstation command does not work
	properly. If you sometimes need to stop your workstation in the course of your
	work, do not install PRTSC.EXE as a service (as the "Microsoft LAN Manager
	Installation and Configuration Guide," suggests on page 96).
	
	Some shareware utilities such as Mark and Release let you load TSRs after NET
	START WORKSTATION and release them before stopping the workstation.
	
	Additional query words: 2.20 2.2
	
	======================================================================
	Keywords          :  
	
	=============================================================================
	

{% endraw %}
