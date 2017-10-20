---
layout: page
title: "Q115476: How To Encrypt FoxPro .DBF Files"
permalink: /kb/115/Q115476/
---

## Q115476: How To Encrypt FoxPro .DBF Files

{% raw %}

	Article: Q115476
	Product(s): Microsoft FoxPro
	Version(s): 2.50 2.50a 2.50b 2.60 3.00| 2.00
	Operating System(s): 
	Keyword(s): kb3rdparty
	Last Modified: 24-AUG-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual FoxPro for Windows, versions 3.0, 6.0 
	- Microsoft FoxPro for MS-DOS, versions 2.0, 2.5, 2.5a, 2.5b, 2.6 
	- Microsoft FoxPro for Windows, versions 2.5, 2.5a, 2.5b, 2.6 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	FoxPro can encrypt database files by building them into an encrypted .EXE file.
	However, when the .EXE file is run, the database files cannot be modified.
	
	To work around this behavior, you can use several third-party products to encrypt
	FoxPro database files while allowing the data to be modified. You can also write
	a program to encrypt FoxPro database files.
	
	MORE INFORMATION
	================
	
	Encryption prevents users from accessing .DBF files directly. It works by
	changing the file so it is not recognizable as a .DBF file. FoxPro cannot use
	the database file again until it is decrypted. Following are some of the ways
	you can encrypt .DBF files in FoxPro.
	
	Using FoxPro to Encrypt .DBFs
	-----------------------------
	
	If a database file does not need to be modified, you can add it to your project
	list and not mark it for exclusion. When you build an encrypted .EXE file, the
	.DBF data will be included in it. You do not need to physically copy the .DBF
	file to the subdirectory where the .EXE file will be found. When you run the
	.EXE file, the database information can be accessed but it cannot be changed.
	Decryption of the .DBF file is automatic when the .EXE file is run.
	
	Third-Party Products to Encrypt .DBFs
	-------------------------------------
	
	NOTE: The third-party products included here are manufactured by vendors
	independent of Microsoft; we make no warranty, implied or otherwise, regarding
	these products' performance or reliability.
	
	  NetLib
	  Communication Horizons
	  65 High Ridge Road, Suite 428
	  Stamford, CT 06905
	  Phone: (203) 656-0448 or (800) 480-1604
	  Fax: (203) 655-4049
	  http://www.netlib.com
	  Available for FoxPro 2.0, 2.5, and 2.6 for MS-DOS and Windows.
	  A 32-bit version is scheduled to release in January 1997.
	  Retails for $399.
	
	  Cryptor
	  Xitech, Inc.
	  5515 Southwyck Blvd.
	  Toledo, OH 43614
	  Phone: (419) 867-3622
	  Available for FoxPro for MS-DOS only, Windows version in development.
	  Retails for $99 single user or $299 multiuser six-pack.
	
	
	Writing a Program to Encrypt .DBFs
	----------------------------------
	
	Many FoxPro reference books contain sample code for different methods of
	encrypting and decrypting database files.
	
	For examples, see these books:
	
	"FoxPro 2.0 Power Tools," Malcolm C. Rubel, pages 938-942, Bantam Books, 1991,
	ISBN 0-553-35294-6
	
	"Tom Rettig's FoxPro Handbook," Tom Rettig, pages 622-625, Bantam Books, 1990,
	ISBN 0-553-34937-6
	
	"FoxPro 2.5 Advanced Developer's Handbook", Pat Adams and Jordan Powell, pages
	222-228, Brady Publishing, 1993, ISBN 0-13-325341-4
	
	Additional query words: VFoxWin FoxDos FoxWin encrypt hide
	
	======================================================================
	Keywords          : kb3rdparty 
	Technology        : kbVFPsearch kbAudDeveloper kbFoxproSearch kbZNotKeyword3 kbFoxPro200DOS kbFoxPro250DOS kbFoxPro250aDOS kbFoxPro250bDOS kbFoxPro260DOS kbFoxPro260 kbFoxPro250 kbFoxPro250a kbFoxPro250b kbVFP300 kbVFP600
	Version           : 2.50 2.50a 2.50b 2.60 3.00| 2.00
	
	=============================================================================
	

{% endraw %}
