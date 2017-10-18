---
layout: page
title: "Q96500: PC Win: Err Msg: A TPL File Has Been Incorrectly Modified..."
permalink: kb/096/Q96500/
---

## Q96500: PC Win: Err Msg: A TPL File Has Been Incorrectly Modified...

	Article: Q96500
	Product(s): Microsoft Mail For PC Networks
	Version(s): WINDOWS:3.0,3.0b,3.2
	Operating System(s): 
	Keyword(s): 
	Last Modified: 20-NOV-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Mail for Windows, versions 3.0, 3.0b, 3.2 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	In versions 3.0, 3.0b, and 3.2 of Microsoft Mail for Windows, you may receive
	the following error message when selecting details on a user from the postoffice
	address list:
	
	  A TPL file has been incorrectly modified. Contact your Administrator.
	
	CAUSE
	=====
	
	This error occurs if the field data type entry in the ADMIN.TPL file is in
	lowercase letters. The ADMIN.TPL file is an ASCII text file that can be defined
	by the user. It provides additional information to be displayed when selecting
	details on an address. The fields are in the following form:
	
	  FieldPrompt:~Entry1~Entry2~Entry3~Entry4~
	
	where Entry3 is the field data type.
	
	The Windows client only accepts {A,L,U,N,P} for the field data type. The MS-DOS
	client accepts {a,A,l,L,u,U,n,N,p,P} and works properly with any of these
	values.
	
	RESOLUTION
	==========
	
	For the template to work properly in both clients, the ADMIN.TPL field data type
	entries must appear in capital letters. You can make this modification using any
	text editor.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in versions 3.0, 3.0b, and 3.2 of
	Microsoft Mail for Windows. We are researching this problem and will post new
	information here in the Microsoft Knowledge Base as it becomes available.
	
	
	Additional query words: 3.00 3.00b 3.20
	
	======================================================================
	Keywords          :  
	Technology        : kbMailSearch kbZNotKeyword3 kbMail300 kbMail320 kbMail300b
	Version           : WINDOWS:3.0,3.0b,3.2
	
	=============================================================================
	
