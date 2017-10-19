---
layout: page
title: "Q183496: XADM: Importing International Characters Into Exchange Fails"
permalink: /kb/183/Q183496/
---

## Q183496: XADM: Importing International Characters Into Exchange Fails

	Article: Q183496
	Product(s): Microsoft Exchange
	Version(s): WINDOWS:5.0,5.5
	Operating System(s): 
	Keyword(s): 
	Last Modified: 08-APR-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Exchange Server, versions 5.0, 5.5 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you try to import a CSV file with international characters via the Exchange
	directory import, the characters will be replaced with symbols or incorrect
	characters.
	
	CAUSE
	=====
	
	The CSV file was created using MS-DOS text, which uses the IBM PC Extended
	Character Set (ECS). The Microsoft Exchange Server Administrator program uses
	the Standard ANSI character set, which is incompatible with ECS.
	
	MORE INFORMATION
	================
	
	MS-DOS uses the IBM PC Extended Character Set, or ECS for short. The lower 128
	values are the same as the ASCII character set, but values 128-255 map into the
	European characters differently from other character sets, including those used
	in Windows.
	
	Unfortunately, the ANSI character set is incompatible with the ECS character set
	used by DOS. For example, the British pound symbol is code 163 in ANSI, but code
	156 in ECS. Likewise, ANSI does not include many of the ECS symbols,
	particularly the line drawing characters. If you try to display a DOS document
	in Windows, Windows attempts to convert the ECS characters to ANSI. Any
	character that does not convert is replaced by an arbitrary graphic. Therefore a
	round-trip conversion from DOS to Windows and back will not re-create the
	original document.
	
	If you are using Visual Basic to create CSV files from MS-DOS text, you can refer
	to the following Knowledge Base article to understand how to convert between the
	MS-DOS and ANSI character set used by Microsoft Exchange:
	
	  Q75857 How to Print the ASCII Character Set in Visual Basic
	
	This article shows you how to use the OEM_Fixed font to print the ECS character
	set. Simple modifications to this program can print out the Windows ANSI
	character set.
	
	Additional query words: batch import export random bimport code page
	
	======================================================================
	Keywords          :  
	Technology        : kbExchangeSearch kbExchange500 kbExchange550 kbZNotKeyword2
	Version           : WINDOWS:5.0,5.5
	Issue type        : kbprb
	
	=============================================================================
	
