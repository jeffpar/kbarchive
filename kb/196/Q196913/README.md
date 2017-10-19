---
layout: page
title: "Q196913: WD97:Errors Saving Files or Running Wizards over PC-NFS Networks"
permalink: /kb/196/Q196913/
---

## Q196913: WD97:Errors Saving Files or Running Wizards over PC-NFS Networks

	Article: Q196913
	Product(s): Word 97 for Windows
	Version(s): WINDOWS:97
	Operating System(s): 
	Keyword(s): kbmacro word97kbfaq
	Last Modified: 14-NOV-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Word 97 for Windows 
	-------------------------------------------------------------------------------
	
	
	SYMPTOMS
	========
	
	When you run Word on a Chameleon NFS, DEC PathWorks, or Sun PC-NFS network, you
	get the following behavior:
	
	Case 1: Saving a Document
	-------------------------
	
	When you save a document, the following error message may occur:
	
	  Word cannot save or create this file. Make sure the disk is not write
	  protected.
	
	  -or-
	
	You are able to save to the local drive but receive the following message when
	you attempt to save to a network drive:
	
	  Word cannot save this document. Be sure the drive is not full or
	  write-protected.
	
	NOTE: You may be able to use My Computer or Explorer in Windows 95 (or File
	Manager in earlier versions of Windows) to move documents to the network drive,
	but you are unable to access the documents directly from within Word for
	Windows.
	
	Case 2: Running a Wizard
	------------------------
	
	If you run a wizard, the following error message may occur:
	
	  Error 1025: Cannot open the document.
	
	Case 3: Opening a Document
	--------------------------
	
	If you try to open a document, the following error message may occur:
	
	  Error 1025: Word cannot open the document.
	
	CAUSE
	=====
	
	These error messages occur when Word cannot create a docfile (the OLE2 file
	format). This happens when your connection to a PC-NFS network drive does not
	include file locking (also known as mandatory record locking). File-locking
	functionality does not exist when:
	
	- You create the connection WITHOUT using the /NS ("no share") switch. For
	  example:
	
	  NET USE F: SUNNY:/HOME/WINWORD
	
	  -or-
	
	- You create the connection WITH the /MS ("must share") switch. For example:
	
	  NET USE F: SUNNY:/HOME/WINWORD /MS
	
	Both of the examples above create a connection to a PC-NFS network that does not
	include file locking. Therefore, Word cannot create docfiles.
	
	
	RESOLUTION
	==========
	
	Change the /MS switch to /NS, or add the /NS switch if it is missing from your
	network connection command line. The following sample command line creates a
	connection on a PC-NFS network that supports file locking:
	
	  NET USE F: SUNNY:/HOME/WINWORD /NS
	
	
	MORE INFORMATION
	================
	
	Record-Locking Information
	--------------------------
	
	The following information comes from page 75 in the "DEC PathWorks PC- NFS 5.0
	Administration Guide":
	
	  File sharing provides security at the file level. However, many
	  applications require that a common database be updated by multiple
	  clients (for example, a transaction-based stock control
	  application).
	
	  For this kind of situation, MS-DOS 3.1 or later supports record
	  locking mode, also known as byte-range locking. Record locking lets
	  you temporarily deny other users access to a particular section of a
	  file.
	
	  PC-NFS software supports advisory record locking. It does not
	  provide mandatory locking. It is important to be aware of the
	  distinction between mandatory and advisory record locking in order
	  to adequately protect the integrity of your files in a networked
	  environment.
	
	  Mandatory record locking means that if you lock part or all of a
	  file, no other application can access the locked portion of the
	  file. Mandatory locking prevents access to the locked portion of a
	  file, regardless of the consistency of locking requests by other
	  users. Advisory record locking ensures that locking requests are
	  granted consistently.
	
	The DEC PathWorks and Sun products included here are manufactured by Digital
	Equipment Corporation and Sun Microsystems, respectively, vendors independent of
	Microsoft; we make no warranty, implied or otherwise, regarding these products'
	performance or reliability.
	
	REFERENCES
	==========
	
	"DEC PathWorks PC-NFS 5.0 Administration Guide," page 75
	
	Additional query words: 6.00a pcnfs pc/nfs pc-nfs pc nfs share nsf word7 word6 6.00c 7.00 word95 Digital 8.00 word8 word97 os2 os/2 os-2 macword winword ethernet appleshare
	
	======================================================================
	Keywords          : kbmacro word97 kbfaq
	Technology        : kbWordSearch kbWord97 kbWord97Search kbZNotKeyword2
	Version           : WINDOWS:97
	Issue type        : kbprb
	
	=============================================================================
	
