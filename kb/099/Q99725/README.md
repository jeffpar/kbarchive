---
layout: page
title: "Q99725: PC DB: Checking for Ownerless Files in NetWare"
permalink: /kb/099/Q99725/
---

## Q99725: PC DB: Checking for Ownerless Files in NetWare

{% raw %}

	Article: Q99725
	Product(s): Microsoft Mail For PC Networks
	Version(s): WINDOWS:2.1,3.0,3.2
	Operating System(s): 
	Keyword(s): 
	Last Modified: 05-NOV-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Mail for PC Networks, versions 2.1, 3.0, 3.2 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	There are two Novell NetWare utilities you can use to check for ownerless
	database files: NDIR and Filer.
	
	NDIR
	----
	
	To use NDIR to check for ownerless files in the GLB subdirectory of the Microsoft
	Mail database, do the following:
	
	1. Change to the GLB subdirectory in the Mail database.
	
	2. Type the following and press ENTER:
	
	  " ndir *.* " (without the quotation marks)
	
	  A listing similar to the following should appear:
	
	  SERVER/SYS:HOME\MAILDATA\GLB
	
	  Files                 Size       Last Updated          Flags      Owner
	  ------------------------------------------------------------------------
	
	  ACCESS    GLB           586  5-21-93  5:05p [Rw-A--------------]   N/A
	  ACCESS2   GLB            69  5-21-93  5:05p [Rw-A--------------]   N/A
	  ACCESS3   GLB           512  5-21-93  5:05p [Rw-A--------------]   N/A
	  ANSISORT  GLB           795  9-09-92  0:00  [Rw-A--------------]   N/A
	  BUSY      MDM         1,563  9-09-92  0:00  [Rw-A--------------]   N/A
	  BUSY      SCR           297  9-09-92  0:00  [Rw-A--------------]   N/A
	  C850SORT  GLB           795  9-09-92  0:00  [Rw-A--------------]   N/A
	  CONTROL   GLB             8  5-21-93  5:05p [Rw-A--------------]   N/A
	  CREDCARD  MDM         7,806  9-09-92  0:00  [Rw-A--------------]   N/A
	  DEFAULT   MDM         6,517  9-09-92  0:00  [Rw-A--------------]   N/A
	  DEFAULT   SCR         2,144  9-09-92  0:00  [Rw-A--------------]   N/A
	  DS_MSG    GLB        32,512  9-09-92  0:00  [Rw-A--------------]   N/A
	  ERRORADM  GLB        22,272  9-09-92  0:00  [Rw-A--------------]   N/A
	  ERRORDYN  GLB         1,920  9-09-92  0:00  [Rw-A--------------]   N/A
	  GLOBAL    GLB           512  5-21-93  5:05p [Rw-A--------------]   N/A
	  GROUP     GLB             4  5-21-93  5:05p [Rw-A--------------]   N/A
	  GRPMEM    GLB             4  5-21-93  5:05p [Rw-A--------------]   N/A
	  GWTRANS   GLB             0  5-21-93  5:05p [Rw-A--------------]   N/A
	  HAYES12   MDM         6,127  9-09-92  0:00  [Rw-A--------------]   N/A
	  HAYES12   SCR         1,927  9-09-92  0:00  [Rw-A--------------]   N/A
	  HAYES24   MDM         6,262  9-09-92  0:00  [Rw-A--------------]   N/A
	
	  "N/A" in the Owner column indicates the file has no owner.
	
	Filer
	-----
	
	To use FILER.EXE to check for ownerless files, do the following:
	
	1. Change to the subdirectory where the suspected ownerless file resides.
	
	2. Type the following and press ENTER:
	
	  " filer " (without the quotation marks)
	
	3. In the Available Topics list box, select Directory Contents and press ENTER.
	  A listing of files in the directory will be displayed.
	
	4. Highlight the file you suspect to be ownerless, and press ENTER.
	
	5. From the File Options menu, select View/Set File Information and press ENTER.
	
	6. At the File Information For <filename> menu, an Owner field will be
	  displayed and will contain the entry "No Owner."
	
	Additional query words: 2.10 3.00 3.20
	
	======================================================================
	Keywords          :  
	Technology        : kbMailSearch kbZNotKeyword3 kbMailPCN320 kbMailPCN300 kbMailPCN210
	Version           : WINDOWS:2.1,3.0,3.2
	
	=============================================================================
	

{% endraw %}
