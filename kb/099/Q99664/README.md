---
layout: page
title: "Q99664: PC Forms: Err Msg: MAPI Failure"
permalink: /kb/099/Q99664/
---

## Q99664: PC Forms: Err Msg: MAPI Failure

{% raw %}

	Article: Q99664
	Product(s): Microsoft Mail For PC Networks
	Version(s): WINDOWS:1.0
	Operating System(s): 
	Keyword(s): 
	Last Modified: 08-NOV-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Electronic Forms Designer, version 1.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you read a message from a shared folder that was created using a Microsoft
	Electronic Forms Designer form, you may receive the following error message:
	
	  MAPI Failure
	
	CAUSE
	=====
	
	This error can occur when you use version 3.0b of Microsoft Mail for Windows
	with the E-Form Cache turned on. This is a known problem with custom message
	types and shared folders in the Windows client.
	
	RESOLUTION
	==========
	
	Upgrade to version 3.2 of Microsoft Mail for Windows.
	
	To read the message with version 3.0b of the Windows client, you can turn off the
	E-Form Cache by modifying the [E-Form Cache] section of the MSMAIL.INI file, as
	follows:
	
	  [E-Form Cache]
	  Maximum=0
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem with version 3.0b of Microsoft Mail
	for Windows. This problem was corrected in version 3.2.
	
	Additional query words:
	
	======================================================================
	Keywords          :  
	Technology        : kbZNotKeyword kbZNotKeyword2 kbMailSearch kbZNotKeyword3 kbEForms
	Version           : WINDOWS:1.0
	
	=============================================================================
	

{% endraw %}
