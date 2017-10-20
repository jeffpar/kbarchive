---
layout: page
title: "Q104133: PC Win: Err Msg: Some Information Could Not Be Written..."
permalink: /kb/104/Q104133/
---

## Q104133: PC Win: Err Msg: Some Information Could Not Be Written...

{% raw %}

	Article: Q104133
	Product(s): Microsoft Mail For PC Networks
	Version(s): WINDOWS:3.0,3.0b,3.2
	Operating System(s): 
	Keyword(s): 
	Last Modified: 29-OCT-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Mail for Windows, versions 3.0, 3.0b, 3.2 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	Upon exiting Microsoft Mail for Windows, you may receive the following error
	message:
	
	  Some information could not be written to disk. Changes may have been lost.
	
	  An error occurred while views were being saved. Some views may not be restored
	  at start up next time.
	
	CAUSE
	=====
	
	This message generally occurs because Mail is having problems accessing the Mail
	message file (.MMF). Mail stores the views (folder positions, folders currently
	open, message finders, and so forth) in the .MMF file (located in the MAILDATA
	subdirectory).
	
	Specifically, when you exit Windows with Mail still running, Mail may experience
	problems writing back to the .MMF file on the Mail server.
	
	RESOLUTION
	==========
	
	One of the following four options should correct the problem:
	
	- Run the .MMF recovery program to check the .MMF file, by holding down the
	  SHIFT key when you start Mail.
	
	
	- Check for ownerless files and the proper network privileges (rights).
	
	- Move the MMF file to your local computer:
	
	  a. From Mail, choose Options from the Mail menu.
	
	  b. Choose the Server button and select Local.
	
	  c. Type in a name for the file (for example, <username>.MMF, where
	     <username> is your name).
	
	- Check the physical network connection.
	
	Additional query words: 3.00 3.00b 3.20 errmsg views cannot be saved
	
	======================================================================
	Keywords          :  
	Technology        : kbMailSearch kbZNotKeyword3 kbMail300 kbMail320 kbMail300b
	Version           : WINDOWS:3.0,3.0b,3.2
	
	=============================================================================
	

{% endraw %}
