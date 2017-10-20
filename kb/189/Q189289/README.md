---
layout: page
title: "Q189289: XADM: Reinstall of Exchange Server Fails"
permalink: /kb/189/Q189289/
---

## Q189289: XADM: Reinstall of Exchange Server Fails

{% raw %}

	Article: Q189289
	Product(s): Microsoft Exchange
	Version(s): WINDOWS:5.5
	Operating System(s): 
	Keyword(s): 
	Last Modified: 18-APR-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Exchange Server, version 5.5 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you reinstall Microsoft Exchange Server 5.5, the following error message
	appears immediately after the Select Installation Type screen:
	
	  Your upgrade did not complete successfully. Please restart your
	  Microsoft Exchange Services and your system will behave as it did before
	  the upgrade was attempted.
	  Please contact Microsoft Product Support Services for more information.
	  Microsoft Exchange Server Setup
	  ID: no. c1032c08
	
	The message appears when Typical, Custom, or Minimum is selected as an
	installation choice.
	
	No additional errors are recorded in the application log.
	
	CAUSE
	=====
	
	The Windows NT system path has been altered or deleted.
	
	WORKAROUND
	==========
	
	In order to run, Setup.exe must have full access to %SystemRoot%\system32 and
	%SystemRoot%.
	
	To verify this, at a command prompt, type PATH <Enter>. Be sure that this
	displays the actual path (for example: C:\WINNT\SYSTEM32;C:\WINNT) and not the
	system variables referenced above.
	
	The system path can be changed in the Control Panel Systems icon on the
	Environment tab. When this has been modified correctly, the setup process will
	not display the previous message.
	
	Additional query words: PATH WATSON ADMIN
	
	======================================================================
	Keywords          :  
	Technology        : kbExchangeSearch kbExchange550 kbZNotKeyword2
	Version           : WINDOWS:5.5
	Issue type        : kbprb
	
	=============================================================================
	

{% endraw %}
