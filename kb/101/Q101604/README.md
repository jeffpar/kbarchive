---
layout: page
title: "Q101604: PC WRmt: Possible Results of Missing or Invalid ACCESS4.GLB"
permalink: /kb/101/Q101604/
---

## Q101604: PC WRmt: Possible Results of Missing or Invalid ACCESS4.GLB

{% raw %}

	Article: Q101604
	Product(s): Microsoft Mail For PC Networks
	Version(s): WINDOWS:3.2
	Operating System(s): 
	Keyword(s): 
	Last Modified: 29-OCT-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Mail Remote for Windows, version 3.2 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you start version 3.2 of Microsoft Mail Remote for Windows, your sign-in is
	validated against the ACCESS4.GLB file in your <WINDOWS>\MSMAIL\MSRMT\GLB
	directory. As a result, you may experience one of the following situations:
	
	- If ACCESS4.GLB is invalid, you can get various modes of operation or
	  non-operation, including a general protection fault (GP-Fault).
	
	- If ACCESS4.GLB is missing, you can sign in, but you will get the following
	  message before Mail aborts:
	
	  Mail cannot connect to your mail server
	
	In both cases, no message indicates problems with the ACCESS4.GLB or that it is
	missing; however once identified, the workaround is easy.
	
	RESOLUTION
	==========
	
	To create a new ACCESS4.GLB, before running Mail Remote for Windows, copy the
	contents of the user data disk to your <WINDOWS>\MSMAIL\MSRMT\USERINFO
	directory. The file will be created when you start Mail Remote for Windows.
	
	You should choose Update Address Lists upon your next connection to your
	postoffice to update your address books.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in version 3.2 of Microsoft Mail
	Remote for Windows. We are researching this problem and will post new
	information here in the Knowledge Base as it becomes available.
	
	Additional query words: 3.20 gpf
	
	======================================================================
	Keywords          :  
	Technology        : kbMailSearch kbZNotKeyword3 kbMailRemote320
	Version           : WINDOWS:3.2
	
	=============================================================================
	

{% endraw %}
