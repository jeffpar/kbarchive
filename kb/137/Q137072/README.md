---
layout: page
title: "Q137072: PC Win: Err Msg: Unable to Load Specified Library"
permalink: /kb/137/Q137072/
---

## Q137072: PC Win: Err Msg: Unable to Load Specified Library

{% raw %}

	Article: Q137072
	Product(s): Microsoft Mail For PC Networks
	Version(s): WINDOWS:3.2,3.2a,3.5
	Operating System(s): 
	Keyword(s): 
	Last Modified: 05-NOV-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Mail for Windows, versions 3.2, 3.2a, 3.5 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you try to run the SendMail macro, included with Mail for Windows, you may
	get the following error message:
	
	  Unable to load specified library
	
	CAUSE
	=====
	
	Included with the client software in version 3.x of Mail for Windows are the
	following files:
	
	  SMIAUTO.DOC
	  SMIINST.DOT
	
	These are Microsoft Word version 2.0 for Windows files that install a Word macro
	called SendMail. This macro allows a Word document to be sent as a mail
	attachment from within Word.
	
	This macro was intended for use with Word for Windows version 2.0 and will not
	work with Word for Windows 95. Instead, use the Send command from the File menu.
	
	RESOLUTION
	==========
	
	To resolve this problem, use the Send command from the File menu instead of
	using the SendMail macro.
	
	Additional query words: 3.20 3.20a 3.50 win95 template ww2_
	
	======================================================================
	Keywords          :  
	Technology        : kbMailSearch kbZNotKeyword3 kbMail350 kbMail320 kbMail320a
	Version           : WINDOWS:3.2,3.2a,3.5
	
	=============================================================================
	

{% endraw %}
