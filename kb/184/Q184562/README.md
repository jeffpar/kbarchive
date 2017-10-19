---
layout: page
title: "Q184562: Internet Information Server ResKit Comments and Corrections"
permalink: /kb/184/Q184562/
---

## Q184562: Internet Information Server ResKit Comments and Corrections

	Article: Q184562
	Product(s): Microsoft Press
	Version(s): 
	Operating System(s): 
	Keyword(s): kbdocfix kbdocerr
	Last Modified: 11-APR-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- MSPRESS Microsoft Internet Information Server Resource Kit ISBN 1-57231-638-1 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	This article contains information on known errors, corrections, and comments
	relating to the Microsoft Press book "Microsoft Internet Information Server
	Resource Kit," ISBN 1-57231-638-1.
	
	Contents
	--------
	
	- Pages 204 & 206: Missing Code Samples
	
	- HTTPMon Does Not Generate CSV Files
	
	- Susrv.exe Missing from Companion CD-ROM
	
	MORE INFORMATION
	================
	
	Pages 204 & 206: Missing Code Samples
	-------------------------------------
	
	Page 204, second code sample: Change:
	
	    My name is:
	
	To:
	
	    My name is: <%= Session("MyName") %>
	
	Page 206, box, end of first paragraph:
	Insert:
	
	Response.Redirect "http://w10.microsoft.com/Webapp/firstpage.asp")
	
	
	HTTPMon Does Not Generate CSV Files
	-----------------------------------
	
	No data CSV files are generated in the OUTPUTDIRECTORY when the Microsoft HttpMon
	service is started.
	
	To work around this problem, obtain the updated version of Httpmon.exe. The new
	version of Httpmon.exe 2.0 is build 011298.
	
	For further information on this error and the location of the updated HttpMon,
	please see the following article in the Microsoft Knowledge Base:
	
	  Q181372 HttpMon.exe Does Not Write to CSV File
	
	
	
	Susrv.exe Missing from Companion CD-ROM
	---------------------------------------
	
	\IIS Resource Kit\Utility\ISP SignUp Server\WebDoc\signup2.htm states that the
	user should, as part of the Setup process, run Susrv.exe. Susrv.exe is not
	included on the IIS RK CD-ROM, and is no longer available for distribution.
	
	The documentation error will be corrected in future reprints and editions of the
	Microsoft Internet Information Server Resource Kit.
	
	
	Microsoft Press is committed to providing informative and accurate books. All
	comments and corrections listed above are ready for inclusion in future
	printings of this book. If you have a later printing of the book, it may already
	contain the above corrections.
	
	Additional query words: ms_press iis 4.0 reskit
	
	======================================================================
	Keywords          : kbdocfix kbdocerr 
	Technology        : kbMSPressSearch
	Version           : :
	Issue type        : kbinfo
	
	=============================================================================
	
