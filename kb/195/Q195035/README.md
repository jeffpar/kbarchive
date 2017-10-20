---
layout: page
title: "Q195035: False Virus Report in Hitchhiker's Guide to VB &amp; SQL Server"
permalink: /kb/195/Q195035/
---

## Q195035: False Virus Report in Hitchhiker's Guide to VB &amp; SQL Server

{% raw %}

	Article: Q195035
	Product(s): Microsoft Press
	Version(s): 
	Operating System(s): 
	Keyword(s): 
	Last Modified: 07-JAN-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- MSPRESS Hitchhiker's Guide to Visual Basic and SQL Server, 4th Edition ISBN 1-55615-906-4 
	- MSPRESS Hitchhiker's Guide to Visual Basic and SQL Server, 5th Edition ISBN 1-57231-567-9 
	- MSPRESS Hitchhiker's Guide to Visual Basic and SQL Server, 6th Edition ISBN 1-57231-848-1 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	If you have installed Network Associates, Inc. VirusScan version 3.2.0 (3108)
	for Microsoft Windows NT and you scan all of the files on the companion CD-ROM
	for viruses, you may receive the following message regarding several executable
	files on the CD-ROM:
	
	  KNOWN TROJAN (No Remover Available)
	
	The affected files are:
	
	  DBGrid Help files\Dbghelp.exe
	
	  \DBGrid Help files\Dbghlp.exe
	
	  \True DBGrid Standard - 16bit\Tdbgs16.exe
	
	  \True DBGrid Standard - 16bit\Tdbgsx16.exe
	
	  \True DBGrid Standard - 32bit\Tdbgs32.exe
	
	  \True DBGrid Standard - 32bit\Tdbgsx32.exe
	
	The default location for these files is
	
	  \Software\Apex DBGrid\Apex DBGrid from 4th Edition\<folder name>
	
	where <folder name> is the folder listed above with the file name.
	
	NOTE: The folder structure will differ slightly depending on which edition of the
	Hitchhiker's Guide to Visual Basic and SQL Server you have.
	
	CAUSE
	=====
	
	Microsoft and Network Associates Software have confirmed that this error message
	is false. There is no trojan horse, virus, or other destructive code in these
	programs.
	
	RESOLUTION
	==========
	
	Network Associates, Inc. reports that this problem can be resolved by deleting
	the file Trojans.dat which installs with VirusScan. By default, this file is
	located at:
	
	  C:\Program Files\Network Associates\NetShield NT\Trojans.dat
	
	After this file is deleted and VirusScan is restarted, the false positive will no
	longer occur.
	
	MORE INFORMATION
	================
	
	Network Associates has repackaged this product to eliminate this problem. For
	more information about Network Associates, Inc., the McAfee Virus Research
	Department, and other virus information, access the Network Associates web site
	at http://www.nai.com/vinfo/.
	
	The third-party products discussed here are manufactured by vendors independent
	of Microsoft; we make no warranty, implied or otherwise, regarding these
	products' performance or reliability.
	
	Additional query words: ms_press vb40 vb50 vb60 1-57231-848-1 1-57231-567-9 1-55615-906-4
	
	======================================================================
	Keywords          :  
	Technology        : kbMSPressSearch kbZNotKeyword6 kbZNotKeyword2 kbZNotKeyword3
	Version           : :
	Issue type        : kbprb
	
	=============================================================================
	

{% endraw %}
