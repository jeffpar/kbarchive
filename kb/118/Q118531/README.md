---
layout: page
title: "Q118531: FFAPI: GTWGET Extracts All FFAPI Messages, Specifies PO"
permalink: /kb/118/Q118531/
---

## Q118531: FFAPI: GTWGET Extracts All FFAPI Messages, Specifies PO

{% raw %}

	Article: Q118531
	Product(s): Microsoft Mail For PC Networks
	Version(s): 3.0
	Operating System(s): 
	Keyword(s): 
	Last Modified: 09-NOV-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Mail Software Development Kit (FFAPI), version 3.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	In File Format API (FFAPI), version 3.0, GTWGET allows you to specify which
	Microsoft Mail post office to "get" messages from, and extracts all FFAPI
	messages for all FFAPI-defined networks and post offices. This option is not
	documented in the version 3.0 manual.
	
	CAUSE
	=====
	
	Documentation error.
	
	RESOLUTION
	==========
	
	In the beginning of your command line options, specify the network and post
	office name. Follow this example:
	
	  gtwget network1/po3 -dq -auser:password c:\filename.out
	
	This command checks the network "network1," post office "po3" for outgoing mail
	and places it in a file called FILENAME.OUT.
	
	Place the network/postoffice option FIRST on the command line, before any other
	options.
	
	Additional query words: 3.00 ffapi docerr kbdocerr
	
	======================================================================
	Keywords          :  
	Technology        : kbAudDeveloper kbMailSearch kbSDKSearch kbSDKMailFFAPI300
	Version           : :3.0
	
	=============================================================================
	

{% endraw %}
