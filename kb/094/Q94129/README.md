---
layout: page
title: "Q94129: Adding a Second Disk to 3Server"
permalink: /kb/094/Q94129/
---

## Q94129: Adding a Second Disk to 3Server

{% raw %}

	Article: Q94129
	Product(s): Microsoft LAN Manager
	Version(s): 
	Operating System(s): 
	Keyword(s): 
	Last Modified: 30-JUL-2001
	
	SUMMARY
	=======
	
	3Com 3Servers have a 3Com 3SCSI Plus card with an external port that can be used
	to connect 3Com external SCSI disk drives. To get the server to recognize the
	drive, do the following steps:
	
	1. Make a console connection to the 3Server (see Chapter 2 in the "Installation
	  and Configuration Guide for 3Servers" manual).
	
	2. Run 3fdisk from the 3Server Utility Diskette (the same one you used to make
	  the console connection).
	
	3. From the 3fdisk Main menu, choose option 2, Configuration Menu.
	
	4. From the Configuration Menu, choose option b, "Add drive".
	
	5. Enter SCSI ID for the expansion drive (this is probably 3).
	
	6. Enter the SCSI LUN number (probably 0).
	
	7. Choose the controller type (probably Adaptec ACB 4525).
	
	Note: Make sure that the SCSI disks are terminated properly.
	
	Reference(s):
	
	"Installation and Configuration Guide for 3Servers"
	
	Additional query words: 2.10 3COM setup
	
	======================================================================
	Keywords          :  
	
	=============================================================================
	

{% endraw %}
