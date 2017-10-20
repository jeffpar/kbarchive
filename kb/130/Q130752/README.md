---
layout: page
title: "Q130752: PC DB: Use of the ALIAS.TPL"
permalink: /kb/130/Q130752/
---

## Q130752: PC DB: Use of the ALIAS.TPL

{% raw %}

	Article: Q130752
	Product(s): Microsoft Mail For PC Networks
	Version(s): WINDOWS:3.2,3.2a
	Operating System(s): 
	Keyword(s): 
	Last Modified: 12-NOV-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Mail for PC Networks, versions 3.2, 3.2a 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	The ALIAS.TPL is a text file that describes how an alias entry will look in the
	Personal Address Book (PAB) for the custom Postoffice/Network address template
	window.
	
	MORE INFORMATION
	================
	
	When you add a new address to your PAB, for a user on another Mail for PC
	Networks address, you will have the following four entries to complete:
	
	- Alias:
	
	- Mailbox:
	
	- Postoffice:
	
	- Network:
	
	The alias field in the dialog is controlled by the ALIAS.TPL file. The shipped
	ALIAS.TPL file is read only and should be in the following format:
	
	  Alias:~9~30~ULNP~~
	
	For more information on the format of a template file, refer to version 3.2 of
	Microsoft Mail for PC Networks "Administrators Guide," pages 145-147.
	
	
	Additional query words: 3..20 3.20a
	
	======================================================================
	Keywords          :  
	Technology        : kbMailSearch kbZNotKeyword3 kbMailPCN320 kbMailPCN320a
	Version           : WINDOWS:3.2,3.2a
	
	=============================================================================
	

{% endraw %}
