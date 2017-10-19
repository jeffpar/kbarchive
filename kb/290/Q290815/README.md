---
layout: page
title: "Q290815: Microsoft Enterprise Learning Library: Step by Step Interactive"
permalink: /kb/290/Q290815/
---

## Q290815: Microsoft Enterprise Learning Library: Step by Step Interactive

	Article: Q290815
	Product(s): Microsoft Press
	Version(s): 
	Operating System(s): 
	Keyword(s): kbchackingthereallylongkeywordshereinthisapplicationcanIaddthis
	Last Modified: 16-OCT-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- MSPRESS Microsoft Enterprise Learning Library: Step by Step Interactive Version 3 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	This article contains comments and information about creating a Remote
	Administrator console for Microsoft Enterprise Learning Library Step by Step
	Interactive Version 3 Network Installations.
	
	MORE INFORMATION
	================
	
	The following steps are required to install a Remote Administrator:
	
	1. Locate the Admin folder on the server. This is typically located in C:\Program
	Files\MSPress\MPITraining\Admin
	2. Copy the Admin folder to the target computer. example: C:\Admin
	3. Locate the LADMIN32.INI file on the server. This is typically located in
	C:\WINNT
	4. Copy the LADMIN32.INI file to the target computer. example: C:\WINNT
	5. Edit the LADMIN32.INI file.
	6. Locate the line RootPath=
	7. Change the line to reference the location of the ADMIN folder on the target
	computer. example: RootPath=C:\Admin
	8. Save the change made to the LADMIN32.INI file.
	9. Create an ODBC System DSN named MSPRESS on the target computer.
	10. Associate MSPRESS.dsn to the database on the server.
	11. Create a desktop shortcut icon to LADMIN32.EXE (optional)
	
	Additional query words: Remote Admin, MELL, Microsoft Enterprise Learning Library,
	
	======================================================================
	Keywords          :  kbchackingthereallylongkeywordshereinthisapplicationcanIaddthis
	Technology        : kbMSPressSearch
	Version           : :
	Issue type        : kbhowto kbinfo kbchackingthereallylongkeywordshereinthisapplicationcanIaddthis
	
	=============================================================================
	
