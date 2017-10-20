---
layout: page
title: "Q172376: PRB: Ddcerr.log Reports &quot;DDCONV initializing&quot; During Upgrade"
permalink: /kb/172/Q172376/
---

## Q172376: PRB: Ddcerr.log Reports &quot;DDCONV initializing&quot; During Upgrade

{% raw %}

	Article: Q172376
	Product(s): Microsoft SourceSafe
	Version(s): WINDOWS:5.0
	Operating System(s): 
	Keyword(s): kbSSafe500
	Last Modified: 01-MAY-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual SourceSafe for Windows, version 5.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	DDCONV produces a Ddcerr.log file that contains only "DDCONV Initializing" when
	upgrading a Visual SourceSafe 4.x installation.
	
	CAUSE
	=====
	
	DDCONV does not have to go through the usual conversion routines for a database
	that is in 4.x format, because the structure of the database files did not
	change from versions 4.x to 5.x. The only difference was the addition of a 128
	byte unique identifier in the Um.dat file. This identifier is not added during
	the DDCONV session.
	
	RESOLUTION
	==========
	
	No action is required. The database should function normally under Visual
	SourceSafe version 5.0.
	
	STATUS
	======
	
	This behavior is by design.
	
	MORE INFORMATION
	================
	
	The normal output in the Ddcerr.log file after a successful conversion of a
	non-version 4.x database is as follows:
	
	  DDCONV initializing
	  Creating subfolders
	  Moving files
	  Creating rights DB
	  Building project list
	  Creating names DB
	  Converting log files
	  Adding project rights
	  Converting users
	  DDCONV finished
	
	Additional query words:
	
	======================================================================
	Keywords          : kbSSafe500 
	Technology        : kbSSafeSearch kbAudDeveloper kbSSafe500
	Version           : WINDOWS:5.0
	Issue type        : kbprb
	
	=============================================================================
	

{% endraw %}
