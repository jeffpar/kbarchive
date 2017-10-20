---
layout: page
title: "Q117649: PC WRmt: Missing Dialog Box When Change to Remote Mail Driver"
permalink: /kb/117/Q117649/
---

## Q117649: PC WRmt: Missing Dialog Box When Change to Remote Mail Driver

{% raw %}

	Article: Q117649
	Product(s): Microsoft Mail For PC Networks
	Version(s): WINDOWS:3.2
	Operating System(s): 
	Keyword(s): 
	Last Modified: 09-NOV-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Mail Remote for Windows, version 3.2 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	This dialog box fails to appear when you use the Mail System Selector to change
	to the Microsoft Mail Remote driver:
	
	  Microsoft Mail Remote
	
	  Some information is stored on the postoffice that you may want to take with
	  you.
	
	  Copy Address List from Postoffice
	
	  Move Message File from Postoffice to File:
	
	CAUSE
	=====
	
	The ServerPath= line is not present in the MSMAIL.INI file located in the
	Windows directory.
	
	RESOLUTION
	==========
	
	In the [Microsoft Mail] section of your MSMAIL.INI, add a ServerPath= line with
	the actual location of the Maildata files.
	
	Additional query words: 3.20
	
	======================================================================
	Keywords          :  
	Technology        : kbMailSearch kbZNotKeyword3 kbMailRemote320
	Version           : WINDOWS:3.2
	
	=============================================================================
	

{% endraw %}
