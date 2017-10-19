---
layout: page
title: "Q126660: PC Win: Images Pasted into a Mail Message Are Blank"
permalink: /kb/126/Q126660/
---

## Q126660: PC Win: Images Pasted into a Mail Message Are Blank

	Article: Q126660
	Product(s): Microsoft Mail For PC Networks
	Version(s): WINDOWS:3.0,3.0b,3.2,3.2a
	Operating System(s): 
	Keyword(s): 
	Last Modified: 12-NOV-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Mail for Windows, versions 3.0, 3.0b, 3.2, 3.2a 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	If an image is cut from another application and pasted into a Mail message, it
	may not be visible to the recipients. When the recipient reads the message, the
	space where the image should be will be blank. If the recipient double-clicks
	the blank space, the following error message appears:
	
	  Pictures and bitmaps cannot be activated.
	
	CAUSE
	=====
	
	This is because the Windows Clipboard pastes the image into the message using a
	device-dependent format based on the video driver. Once the message reaches the
	recipient's machine, the image will only be seen if the video driver can
	understand the information from the sender's machine.
	
	RESOLUTION
	==========
	
	The sender should paste the image into Paintbrush, then save it as a bitmap
	(.BMP) file. The sender can attach the .BMP to the Mail message. Because .BMP
	files are device-independent, all recipients will be able to see the image when
	they double-click the Paintbrush icon in the Mail message, assuming they have
	Paintbrush installed.
	
	
	Additional query words: 3.00 3.00b 3.20 3.20a pasted images
	
	======================================================================
	Keywords          :  
	Technology        : kbMailSearch kbZNotKeyword3 kbMail300 kbMail320 kbMail300b kbMail320a
	Version           : WINDOWS:3.0,3.0b,3.2,3.2a
	
	=============================================================================
	
