---
layout: page
title: "Q69604: Mac Form Srv: Err Msg: Couldn't Allocate the Forms List"
permalink: /kb/069/Q69604/
---

## Q69604: Mac Form Srv: Err Msg: Couldn't Allocate the Forms List

	Article: Q69604
	Product(s): Microsoft Mail For Appletalk Networks
	Version(s): WINDOWS:3.0
	Operating System(s): 
	Keyword(s): 
	Last Modified: 09-NOV-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Mail for AppleTalk Networks, version 3.0 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	The following error message may occur when you are installing a Microsoft Mail
	form on a Microsoft Mail server:
	
	  Couldn't allocate the forms list properly. You may be low on memory.
	
	This error occurs when you use the Mail version 2.00 Form Designer to install a
	form on a Mail 3.00 server. You must use the Mail 3.00 Form Designer to install
	a form on a Mail 3.00 server.
	
	MORE INFORMATION
	================
	
	When you click the Form Mover button to install the form on the server, the
	script for the button looks for a stack called Form Designer. If this stack
	can't be found, an Open dialog box appears asking you to locate the stack called
	Form Designer. The above error message will occur if the Mail version 2.00 Form
	Designer, not the Mail version 3.00 Form Designer, is automatically opened or is
	selected in the Open dialog box.
	
	Additional query words: 3.00
	
	======================================================================
	Keywords          :  
	Technology        : kbMailSearch kbZNotKeyword3 kbMailATN300
	Version           : WINDOWS:3.0
	
	=============================================================================
	
