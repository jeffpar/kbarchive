---
layout: page
title: "Q112907: PC WRmt: Operation When No Timer Available"
permalink: /kb/112/Q112907/
---

## Q112907: PC WRmt: Operation When No Timer Available

{% raw %}

	Article: Q112907
	Product(s): Microsoft Mail For PC Networks
	Version(s): WINDOWS:3.2
	Operating System(s): 
	Keyword(s): 
	Last Modified: 05-NOV-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Mail Remote for Windows, version 3.2 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	On startup (if you have chosen periodic or scheduled events), Microsoft Mail
	Remote for Windows tries to get a timer. If a timer is not available (for
	example, the Windows system cannot be acquired), Mail Remote for Windows
	disables time-based features and issues the following error message:
	
	  Can not schedule connection. Close down other time-based applications and
	  restart mail
	
	However, if you have not requested a periodic or scheduled connection, this error
	does not appear.
	
	CAUSE
	=====
	
	In the Session Setup dialog box, if a timer isn't available, periodic and
	scheduled options are unavailable (grayed) from the connection group. The error
	message only appears if you have auto connect set to ON in your
	<Windows_Directory>\MSMAIL.INI file.
	
	Additional query words: 1.00 gray grey greyed
	
	======================================================================
	Keywords          :  
	Technology        : kbMailSearch kbZNotKeyword3 kbMailRemote320
	Version           : WINDOWS:3.2
	
	=============================================================================
	

{% endraw %}
