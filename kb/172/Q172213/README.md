---
layout: page
title: "Q172213: MS SQL Server Training Corrections and Comments"
permalink: /kb/172/Q172213/
---

## Q172213: MS SQL Server Training Corrections and Comments

	Article: Q172213
	Product(s): Microsoft Press
	Version(s): 
	Operating System(s): 
	Keyword(s): 
	Last Modified: 16-MAY-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- MSPRESS Microsoft SQL Server Training 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	This article contains comments, corrections, and information on known errors
	relating to the Microsoft Press book Microsoft SQL Server Training, ISBN
	1-55615-930-7.
	
	Contents:
	
	- Product ID for Microsoft SQL Server
	
	- CD-ROM: System requirements
	
	- Edits to pg. xxxii & 25 for use with Evaluation Copy of SQL
	
	- Page 17: Typographical Error In Diagram
	
	- Page 319: Results Do Not Match Steps
	
	- Page 494: DBCC_MEMUSAGE return values
	
	- Page 731: Example incorrect. Should use 'out' option
	
	MORE INFORMATION
	================
	
	Product ID for Microsoft SQL Server
	-----------------------------------
	
	In the second screen of the Microsoft SQL Server 6.5 Evaluation Edition
	installation, the customer is asked to provide a name, company, and product ID
	from the Microsoft SQL Server box.
	
	The product ID field is optional, and should be left blank. The installation
	should continue without a problem.
	
	Full directions for installing the evaluation copy of Microsoft SQL Server are
	available in Volume 1, Chapter 2, "Installing SQL Server." Page 37 gives
	specific directions for this screen.
	
	
	CD-ROM: System Requirements
	---------------------------
	
	In order to use the practice files included with the Microsoft SQL Server
	Training Kit, you must have a computer equipped with the following:
	
	- Microsoft Windows NT Server (version 3.51 or later)
	
	- 300 MB free hard disk space
	
	- 16 MB of RAM (32 MB for replication)
	
	- CD-ROM drive
	
	- Network adapter card
	
	- Microsoft Excel for Windows NT (32-bit version)
	
	Additionally, you will need Microsoft SQL Server 6.5. A trial copy of Microsoft
	SQL Server 6.5 is distributed with the Microsoft SQL Server Training Kit.
	However, this trial copy will cease to run after 120 days.
	
	Certain files included on the CD-ROM, such as the animated demonstrations and the
	Knowledge Base articles may run on other operating systems such as Microsoft
	Windows NT Workstation 4.0. However, you will not be able to complete the
	practice sessions listed in the training kit.
	
	
	Corrections to Pg. xxxii & 25 for Evaluation Copy of Microsoft SQL Server
	-------------------------------------------------------------------------
	
	An evaluation copy of Microsoft SQL Server version 6.5 is included on the CD-ROM
	accompanying this book. While this evaluation copy will work with all the
	practice files, certain limitations of the evaluation copy must be noted:
	
	- The software will cease functioning after 120 days.
	
	- The software will only allow 128 client connections.
	
	- The software does not include separate installation files for MIPS and Alpha
	  computers. Installation of the evaluation software to these platforms may not
	  be successful.
	
	For more information on these limitations, please read page xxxii.
	
	Correction:
	Page xxxii, after paragraph 1:
	Add the following text:
	"Note: The evaluation copy of SQL Server included on the CD-ROM that comes with
	this book may not be compatible with MIPS and Alpha-Based Machines. Registered
	copies of SQL Server are compatible with all four platforms."
	
	
	Page 17: Typographical Error in Diagram
	---------------------------------------
	
	Page 17, diagram, 2nd table heading:
	Change: "juvinile"
	To: "juvenile"
	
	
	Page 319: Results Do Not Match Steps
	------------------------------------
	
	The SELECT statement mentioned in step 2 will create a list of over 200 entries.
	To create the list shown at the bottom, write and execute a SELECT statement
	that selects the member number and name for members 300 and 301.
	
	Correction:
	Page 319, step 2, sentence 1:
	Change: "for members 300 and 500 whether or not..."
	To: "for members 300 and 301 whether or not..."
	
	
	Page 494: DBCC_MEMUSAGE Return Values
	-------------------------------------
	
	Page 494, bullet 3, sentence 1:
	Change: "How much memory is used by the 12 largest objects..." To: "How much
	memory is used by the 20 largest objects..."
	
	
	Page 731: Example Incorrect
	---------------------------
	
	The following example command is printed on page 731 of Microsoft SQL Server
	Training Kit (volume 2):
	
	  The following example transfers data from the testtable table in the testpubs
	  database to a file named TRANSFER.BCP.
	
	  bcp testpubs..testtable in D:\TRANSFER.BCP /c /t"," /r \n /e D:\TRANSFER.ERR
	  /m100 /b500 /a4096 /Usa /Scrserver
	
	This example command line will produce the following error message:
	
	  Bcp: Unable to open host data-file.
	
	The "out" (without the quotation marks) option copies to a file from the database
	table or view, and should be used instead of "in" for this example. The example
	should read (with all other parameters the same):
	
	  bcp testpubs..testtable out D:\TRANSFER.BCP...
	
	
	Additional query words: mspress ms_press press
	
	======================================================================
	Keywords          :  
	Technology        : kbMSPressSearch kbZNotKeyword3
	Version           : :
	Solution Type     : kbfix
	
	=============================================================================
	
