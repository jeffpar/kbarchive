---
layout: page
title: "Q129989: MS WIN NT RESOURCE GUIDE 2ED  V1 Corrections and Comments"
permalink: /kb/129/Q129989/
---

## Q129989: MS WIN NT RESOURCE GUIDE 2ED  V1 Corrections and Comments

	Article: Q129989
	Product(s): Microsoft Press
	Version(s): 
	Operating System(s): 
	Keyword(s): 
	Last Modified: 07-JAN-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- MSPRESS Windows NT Resource Guide, (Windows NT 3.5 Resource Kit volume 1) ISBN 1-55615-653-7 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	This article contains information on known errors, corrections, and comments
	relating to the Microsoft Press book "Windows NT Resource Guide," Windows NT 3.5
	Resource Kit volume 1.
	
	The following topics are covered:
	
	- Installation: Remote Command Server Not Installed Properly
	
	- Page 521: Unclear Reference to "NT Remote Access Service Administrator's
	  Guide"
	
	MORE INFORMATION
	================
	
	In addition to a description of the book's problems, this document might also
	include sections labeled "Correction" and "Comments." Please note that the
	"Correction" section is worded for correcting the book and does not necessarily
	address the problem introduced by the book error. The "Comments" section
	contains specific information for working around problems.
	
	Installation: Remote Command Server Not Installed Properly
	----------------------------------------------------------
	
	The "Tools for Windows NT" help file for the "Remote Command Installation"
	incorrectly states the following:
	
	  After the installation of the resource kit, the necessary files should be
	  copied to the system directory.
	
	  In Program Manager, Control Panel, Network, Add Software, select "Remote
	  Command Server."
	
	However, there is no "Remote Command Server" option present.
	
	Comments:
	
	This is a mistake in the documentation. To install the Remote Command Server, you
	must first copy the following files from your RESKIT directory to your SYSTEM32
	directory:
	
	  RCMD.EXE
	  RCMDSVC.EXE
	  OEMNSVRC.INF
	
	After you copy these files to your SYSTEM32 directory, the Remote Command Server
	will work properly.
	
	From this point, you can follow the installation instructions as written.
	
	Page 521: Unclear Reference to "NT Remote Access Service Administrator's Guide"
	-------------------------------------------------------------------------------
	
	The reference to the "Windows NT Remote Access Service Administrator's Guide" on
	page 521 in paragraph 3 is unclear as to where the cited documentation can be
	found.
	
	The appendix title in the same paragraph is also incorrect.
	
	Correction:
	
	Change
	
	  "Windows NT Remote Access Service Administrator's Guide"
	
	to
	
	  "Windows NT Remote Access Service" book, which comes as part of the Windows
	  NT Server product documentation. This book is also included in the "Books
	  Online" part of Windows NT Server.
	
	The appendix title in the same paragraph should be:
	
	  Appendix B, "Migrating from Earlier Versions of the Remote Access Service"
	
	Comments:
	
	The "Windows NT Remote Access Service" book comes with Windows NT Server as part
	of the documentation. This book is also included in the "Books Online" part of
	Windows NT Server.
	
	Microsoft Press is committed to providing informative and accurate books. All
	comments and corrections listed above are ready for inclusion in future
	printings of this book. If you have a later printing of this book, it may
	already contain most or all of the above corrections.
	
	Additional query words: mspress ms_press press bookbug
	
	======================================================================
	Keywords          :  
	Technology        : kbMSPressSearch
	Version           : :
	
	=============================================================================
	
