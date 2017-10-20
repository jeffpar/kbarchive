---
layout: page
title: "Q155853: PC WIN: Error Using Details in the Spanish Windows 3.5 Client"
permalink: /kb/155/Q155853/
---

## Q155853: PC WIN: Error Using Details in the Spanish Windows 3.5 Client

{% raw %}

	Article: Q155853
	Product(s): Microsoft Mail For PC Networks
	Version(s): WINDOWS:3.5
	Operating System(s): 
	Keyword(s): 
	Last Modified: 11-NOV-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Mail for Windows, version 3.5 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	When a Spanish Microsoft Mail 3.5 client views details for a user address, an
	error message is displayed as follows: "STOP: No hay detalles disponibles para
	esta entrada. OK."
	
	Translated to English this means "No details are available for this entry".
	
	WORKAROUND
	==========
	
	To solve this problem, copy all of the template files included on "Disco 6 -
	Version para Windows y OS/2 Presentation manager para Estaclones de trabajo" to
	the TPL directory on each postoffice that Spanish Windows clients connect to.
	
	MORE INFORMATION
	================
	
	The following excerpt from the README.TXT file from the Microsoft Mail for PC
	Networks 3.5 Server version that includes a Spanish Mail client describes this
	issue.
	
	C.4. Installing Spanish Template Files for Windows Users.
	---------------------------------------------------------
	
	Because the postoffice included in this version of Microsoft Mail is an English
	language postoffice, users of the Spanish version of the Windows client will
	experience errors when they attempt to see user account details in the Address
	Book.
	
	To solve this problem, copy all of the template files included on "Disco 6 -
	Version para Windows y OS/2 Presentation manager para Estaclones de trabajo" to
	the TPL directory on each postoffice that Spanish Windows clients connect to.
	
	To copy the template files:
	---------------------------
	
	1. Insert "Disco 6 - Version para Windows y OS/2 Presentation manager para
	  Estaclones de trabajo" into drive A.
	
	2. Type: "copy a:*.tpl m:\tpl" (without the quotation marks) If you are not
	  connected to the postoffice using drive M, replace "m:" with the appropriate
	  drive letter.
	
	For information about template files, see Chapter 8, "Templates and Custom User
	Directories" in the Microsoft Mail Administrator's Guide.
	
	Additional query words: kbusage
	
	======================================================================
	Keywords          :  
	Technology        : kbMailSearch kbZNotKeyword3 kbMail350
	Version           : WINDOWS:3.5
	
	=============================================================================
	

{% endraw %}
