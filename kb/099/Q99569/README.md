---
layout: page
title: "Q99569: PC Forms: Err Msg: This Message Is Missing Some Information..."
permalink: /kb/099/Q99569/
---

## Q99569: PC Forms: Err Msg: This Message Is Missing Some Information...

{% raw %}

	Article: Q99569
	Product(s): Microsoft Mail For PC Networks
	Version(s): WINDOWS:1.0,3.0,3.2
	Operating System(s): 
	Keyword(s): 
	Last Modified: 06-NOV-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Electronic Forms Designer, version 1.0, used with:
	   - Microsoft Mail for PC Networks, versions 3.0, 3.2 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you attempt to read a message that was created using version 1.0 of
	Microsoft Electronic Forms Designer, the following error message may appear:
	
	  This message is missing some information and cannot be displayed.
	  Please ask the sender to resend it.
	
	CAUSE
	=====
	
	This error can occur if the message was forwarded without the attachment from
	either of the following clients for version 3.0 or 3.2 of Microsoft Mail for PC
	Networks:
	
	- Version 3.0 or 3.2 of Microsoft Mail for PC Networks, MS-DOS workstation
	
	- Version 3.0 or 3.2 of Microsoft Mail for PC Networks, Macintosh workstation
	
	E-forms store data in a special package (MEFPKG.DAT) that is included as an
	attachment to a mail message. If the attachment is deleted or removed from the
	message, the data necessary to display the form will not be available and the
	above error is presented.
	
	RESOLUTION
	==========
	
	To resolve this problem, forward the message and choose the Yes button when you
	are prompted to "forward the attached file(s)?"
	
	Additional query words: 1.00 3.00 3.20
	
	======================================================================
	Keywords          :  
	Technology        : kbZNotKeyword2 kbMailSearch kbZNotKeyword3
	Version           : WINDOWS:1.0,3.0,3.2
	
	=============================================================================
	

{% endraw %}
