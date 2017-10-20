---
layout: page
title: "Q135457: PC Gen: DocErr: New Mail Utility Errorlevel Incorrectly Stated"
permalink: /kb/135/Q135457/
---

## Q135457: PC Gen: DocErr: New Mail Utility Errorlevel Incorrectly Stated

{% raw %}

	Article: Q135457
	Product(s): Microsoft Mail For PC Networks
	Version(s): WINDOWS:3.2,3.5
	Operating System(s): 
	Keyword(s): 
	Last Modified: 20-NOV-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Mail for PC Networks, versions 3.2, 3.5 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	On page 313 of version 3.2 or page 315 of version 3.5 Microsoft Mail for PC
	Networks "Administrator's Guide," the following is incorrectly stated:
	
	  If there is no new mail, the Errorlevel is set to 0 by the New Mail utility;
	  any other value is an error.
	
	It should read:
	
	  If there is new mail, Errorlevel is set to 0 by the New Mail utility;
	  otherwise it is set to 1.
	
	MORE INFORMATION
	================
	
	The following can be added to the AUTOEXEC.BAT batch file or the Novell login
	script to start the Mail program automatically when there is new mail:
	
	  NEWMAIL mailbox
	  If Errorlevel 1 goto END
	  MAIL mailbox -ppassword
	  :END
	
	Additional query words: 3.20 3.50
	
	======================================================================
	Keywords          :  
	Technology        : kbMailSearch kbZNotKeyword3 kbMailPCN320 kbMailPCN350
	Version           : WINDOWS:3.2,3.5
	
	=============================================================================
	

{% endraw %}
