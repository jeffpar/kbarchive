---
layout: page
title: "Q104276: PC Win: Err Msg: Mail Failed to Relocate Message File"
permalink: /kb/104/Q104276/
---

## Q104276: PC Win: Err Msg: Mail Failed to Relocate Message File

{% raw %}

	Article: Q104276
	Product(s): Microsoft Mail For PC Networks
	Version(s): WINDOWS:3.0,3.0b,3.2
	Operating System(s): 
	Keyword(s): 
	Last Modified: 07-NOV-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Mail for Windows, versions 3.0, 3.0b, 3.2 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	With versions 3.0, 3.0b, and 3.2 of Microsoft Mail for Windows, when you try to
	implement Inbox Shadowing, the following error message may occur:
	
	  Unable to begin inbox shadowing
	
	When you try to move the Mail message file (.MMF) locally, the following error
	message may occur:
	
	  Mail failed to relocate message file
	
	NOTE: For more information about Inbox Shadowing, please see the following
	article in the Microsoft Knowledge Base:
	
	  Q96718 PC Win: Description and Use of Inbox Shadowing
	
	CAUSE
	=====
	
	There are two basic causes of these messages:
	
	- Mail for Windows cannot open, read, or write to the user's ACCESS3.GLB file.
	
	- The user's data contained in the ACCESS3.GLB file does not match the user
	  name the user is currently logged in as.
	
	As a result, Mail cannot add the messages in the Inbox to the shadowing Add list
	in the message store.
	
	In addition, a corrupt .MMF can also cause the problem.
	
	RESOLUTION
	==========
	
	For more information, please contact Microsoft Product Support Services Monday
	through Friday, 6:00 A.M. to 6:00 P.M. Pacific Standard Time, at (206) 635-7022
	or (900) 555-2100. If you are outside the United States, contact the Microsoft
	subsidiary for your area. To locate your subsidiary, call Microsoft
	International Customer Service at (206) 936-8661.
	
	Additional query words: 3.00 3.00b 3.20 errmsg database
	
	======================================================================
	Keywords          :  
	Technology        : kbMailSearch kbZNotKeyword3 kbMail300 kbMail320 kbMail300b
	Version           : WINDOWS:3.0,3.0b,3.2
	
	=============================================================================
	

{% endraw %}
