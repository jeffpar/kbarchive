---
layout: page
title: "Q86328: PC Win: Err Msg: The New Folder Could Not Be Created"
permalink: /kb/086/Q86328/
---

## Q86328: PC Win: Err Msg: The New Folder Could Not Be Created

{% raw %}

	Article: Q86328
	Product(s): Microsoft Mail For PC Networks
	Version(s): WINDOWS:3.0
	Operating System(s): 
	Keyword(s): 
	Last Modified: 10-NOV-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Mail for Windows, version 3.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	In version 3.0 of Microsoft Mail for Windows, the following error message may be
	displayed if the maximum number of folders has been reached:
	
	  The New Folder Could Not Be Created
	
	CAUSE
	=====
	
	Several conditions determine the maximum number of folders that can be created,
	but the average is around 5,000. Therefore, it is highly unlikely that this
	error message is being displayed because of the maximum being reached.
	
	The following are two possible causes of this error:
	
	- The Mail Message File (MMF) is set to read-only.
	
	- The FOLDROOT.IDX file is marked read-only or, if you are on a Novell network,
	  the FOLDROOT.IDX file is ownerless.
	
	
	Additional query words: 3.00 err msg errmsg alert
	
	======================================================================
	Keywords          :  
	Technology        : kbMailSearch kbZNotKeyword3 kbMail300
	Version           : WINDOWS:3.0
	
	=============================================================================
	

{% endraw %}
