---
layout: page
title: "Q109254: CONN: Guest Access to the MACGATE Volume Not Recommended"
permalink: /kb/109/Q109254/
---

## Q109254: CONN: Guest Access to the MACGATE Volume Not Recommended

{% raw %}

	Article: Q109254
	Product(s): Microsoft Mail For PC Networks
	Version(s): 3.2
	Operating System(s): 
	Keyword(s): 
	Last Modified: 10-NOV-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Mail Connection for PC and AppleTalk Networks, version 3.2 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	If the network connection to the Microsoft Mail for PC Networks postoffice
	volume is broken, the Microsoft Mail Connection gateway tries to reestablish the
	connection during the next gateway cycle. If the file server and the Mail for PC
	Networks postoffice volume are available, you are prompted to type in your
	password. After you do so, the Postoffice volume reappears on the Desktop and
	the gateway continues to deliver mail.
	
	Configuring Guest access to the Mail for PC Networks postoffice volume allows the
	gateway to remount the volume automatically without prompting for a password,
	but compromises the security of the postoffice. Macintosh users can mount the
	postoffice and view confidential information such as the Mail administrator's
	name and password stored in the MACGATE.INI file.
	
	Additional query words: 3.20
	
	======================================================================
	Keywords          :  
	Technology        : kbMailSearch kbZNotKeyword3 kbMailConn320
	Version           : :3.2
	
	=============================================================================
	

{% endraw %}
