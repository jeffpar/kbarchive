---
layout: page
title: "Q184759: XADM: Pfadmin.exe 1.2.1 Uses Commas As The Delimiter"
permalink: /kb/184/Q184759/
---

## Q184759: XADM: Pfadmin.exe 1.2.1 Uses Commas As The Delimiter

	Article: Q184759
	Product(s): Microsoft Exchange
	Version(s): WINDOWS:4.0,5.0,5.5
	Operating System(s): 
	Keyword(s): 
	Last Modified: 10-APR-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Exchange Server, versions 4.0, 5.0, 5.5 
	-------------------------------------------------------------------------------
	
	
	SYMPTOMS
	========
	
	If you use the Pfadmin.exe program version 1.2.1 to import public folder
	permissions, and one or more mailbox display names or public folder names have
	commas in them, the permissions may not be imported properly.
	
	CAUSE
	=====
	
	This problem occurs because Pfadmin.exe version 1.2.1 uses commas as the
	delimiter. Therefore, when mailbox display names or public folder names contain
	commas, Pfadmin.exe may be unable to distinguish the mailbox display name from
	the public folder name.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in the Pfadmin.exe program,
	versions 1.2.1 and earlier. This problem was resolved in Pfadmin.exe version
	1.3.0, which is included in the Microsoft BackOffice Resource Kit, Second
	Edition. This later version uses tabs as the default delimiter.
	
	MORE INFORMATION
	================
	
	In cases where public folder permissions have been lost due to re-homing or
	other causes, Pfadmin.exe can be used to easily import public folder permissions
	from the command line or from an input file. This is done by using the SETACL
	command. By default, the program uses commas as delimiters to the SETACL
	command.
	
	However, in many Exchange Server organizations, the mailbox names and/or public
	folder names have commas in them, which causes parsing errors in Pfadmin.exe.
	Pfadmin.exe can no longer distinguish correctly the mailbox names and public
	folder names.
	
	Pfadmin.exe version 1.2.1 is a program that ships in the Microsoft BackOffice
	Resource Kit II.
	
	Additional query words: BORK
	
	======================================================================
	Keywords          :  
	Technology        : kbExchangeSearch kbExchange500 kbExchange550 kbExchange400 kbZNotKeyword2
	Version           : WINDOWS:4.0,5.0,5.5
	Issue type        : kbbug
	Solution Type     : kbpending
	
	=============================================================================
	
