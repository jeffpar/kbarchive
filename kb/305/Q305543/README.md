---
layout: page
title: "Q305543: MELL: Installing SQL Database for Step by Step Interactive Versi"
permalink: /kb/305/Q305543/
---

## Q305543: MELL: Installing SQL Database for Step by Step Interactive Versi

	Article: Q305543
	Product(s): Microsoft Press
	Version(s): 
	Operating System(s): 
	Keyword(s): kbchackingthereallylongkeywordshereinthisapplicationcanIaddthis
	Last Modified: 16-OCT-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- MSPRESS Microsoft Enterprise Learning Library: Step by Step Interactive Version 4 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	Step by Step Interactive SQL Server database fails to install on a seperate SQL
	server.
	
	MORE INFORMATION
	================
	
	This problem occurs when installing Step By Step Interactive Training software
	on an IIS Server with no SQL Server installed.
	
	Steps to correct:
	1) Install a network build, but when setup asks you to setup SQL (step 3) Answer
	NO.
	2) Step by Step Interactive install completes.
	3) Copy OSQL.EXE [need to Identify where to get it - see below] to the folder
	where the SQL scripts are. Default path is: c:\program files\MIT
	Admin\Database\Setup.
	4) Run SETUP.EXE from the SQL folder. This installs the SQL database. Setup is
	now complete.
	
	Where to get OSQL.EXE:
	http://www.microsoft.com/SQL/techinfo/development/2000/MSDE2000.asp
	
	Information on OSQL.EXE:
	http://www.microsoft.com/office/ork/2000/five/75t2_6.htm
	
	And from MS Press:
	http://mspress.microsoft.com/books/ww/sampchap/1545a.htm
	
	Additional query words: MSPress Step OfficeXP
	
	======================================================================
	Keywords          :  kbchackingthereallylongkeywordshereinthisapplicationcanIaddthis
	Technology        : kbMSPressSearch
	Version           : :
	Issue type        : kbinfo
	Solution Type     : kbfix
	
	=============================================================================
	
