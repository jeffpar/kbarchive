---
layout: page
title: "Q113194: PC Win: Err Msg: An Error...Loading the Spelling Library"
permalink: /kb/113/Q113194/
---

## Q113194: PC Win: Err Msg: An Error...Loading the Spelling Library

{% raw %}

	Article: Q113194
	Product(s): Microsoft Mail For PC Networks
	Version(s): WINDOWS:3.0,3.0b,3.2
	Operating System(s): 
	Keyword(s): 
	Last Modified: 30-OCT-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Mail for Windows, versions 3.0, 3.0b, 3.2 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	If you use universal naming convention (UNC) style paths to refer to the
	locations of spelling libraries in the WIN.INI file, the following error message
	appears:
	
	  An error occurred while loading the spelling library
	
	CAUSE
	=====
	
	Microsoft Office products (such as Microsoft Excel and Word) enable you to use
	UNC paths to refer to the locations of their spelling libraries. Microsoft Mail
	does not have this functionality.
	
	RESOLUTION
	==========
	
	1. Add the following line to the [MS Proofing Tools] section of the WIN.INI file
	  to provide Mail with a local path to the spelling libraries:
	
	  Spelling(mail) 1033,0=C:\WINDOWS\MSAPPS\PROOF\MSSPEL2.DLL,
	  C:\WINDOWS\MSAPPS\PROOF\MSSP2_EN.LEX
	
	  NOTE: This should be typed as a single line.
	
	2. Modify the "Spelling=Spelling 1033,0" line in the [MS Proofing Tools] section
	  of the MSMAIL.INI file to read as follows:
	
	  Spelling=Spelling(mail) 1033,0
	
	Another workaround is to maintain a persistent connection to the server that
	contains the spelling libraries, and modify the WIN.INI file to point to the
	drive letter this connection uses. In the following example, a persistent
	connection has been established using drive E:
	
	  Spelling 1033,0=E:\MSSPEL2.DLL,E:\MSSP2_EN.LEX
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in versions 3.0, 3.0b, and 3.2 of
	Microsoft Mail for Windows. We are researching this problem and will post new
	information here in the Microsoft Knowledge Base as it becomes available.
	
	Additional query words: Spell 3.00 3.00b 3.20 Word WinWord Excel Office w4woffice officeinterop w4wproof speller shared apps msmail checking
	
	======================================================================
	Keywords          :  
	Technology        : kbMailSearch kbZNotKeyword3 kbMail300 kbMail320 kbMail300b
	Version           : WINDOWS:3.0,3.0b,3.2
	
	=============================================================================
	

{% endraw %}
