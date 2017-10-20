---
layout: page
title: "Q86972: X400: Typical Batch Files to Set Up and Start X.400 Gateway"
permalink: /kb/086/Q86972/
---

## Q86972: X400: Typical Batch Files to Set Up and Start X.400 Gateway

{% raw %}

	Article: Q86972
	Product(s): Microsoft Mail For PC Networks
	Version(s): MS-DOS:3.0
	Operating System(s): 
	Keyword(s): 
	Last Modified: 05-NOV-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Mail Gateway to X.400, version 3.0 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	The CONFIG.SYS files do not change when either the X.25 Eicon card or the
	redirector software is installed.
	
	The AUTOEXEC.BAT files may contain the following startup:
	
	  Server Startup
	     nabios srv gateway /4
	     ecload
	
	Or, if the workstation is a redirector workstation:
	
	  Eicon Redirector Software Startup
	     nabios rdr gateway /4
	     x25net start
	
	A typical X.400 startup batch file appears as follows:
	
	  x400gate -dq -lv
	
	The Eicon X.25 card installation manual contains additional examples of
	installation and startup batch files.
	
	Additional query words: pcmail
	
	======================================================================
	Keywords          :  
	Technology        : kbMailSearch kbMailGateSearch kbZNotKeyword3 kbMailGatex400300
	Version           : MS-DOS:3.0
	
	=============================================================================
	

{% endraw %}
