---
layout: page
title: "Q184508: PDF Files May Need Recompilation under New Service Pack"
permalink: /kb/184/Q184508/
---

## Q184508: PDF Files May Need Recompilation under New Service Pack

{% raw %}

	Article: Q184508
	Product(s): Microsoft SNA Server
	Version(s): WINDOWS:3.0,3.0 SP1,3.0 SP2,4.0
	Operating System(s): 
	Keyword(s): 
	Last Modified: 02-APR-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft SNA Server, versions 3.0, 3.0 SP1, 3.0 SP2, 4.0 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	If a print session is configured to use a PDT file, then a recompilation may be
	required, using the version of PDFCOMP.EXE that is distributed with a new
	service pack. Unpredictable results may occur if PDT files compiled with
	PDFCOMP.EXE from earlier service packs are used on a newer service pack level.
	
	MORE INFORMATION
	================
	
	To compile the PDF, enter the following command line:
	
	  " pdfcomp <PDFfile> <PDTfile.PDT>" (without the quotation marks)
	
	You must use the extension .PDT for the SNA Server Manager to find the file. If
	you do not specify a path, PDFCOMP.EXE will write the PDT file in the current
	folder. Optionally, create a folder to hold your PDTs and add that path to the
	PDT file name. The first time you select a PDT file in SNA Server Manager, it
	will look in the \SNA\SYSTEM folder. If you keep your PDT files elsewhere and
	browse to your PDT folder, SNA Server Manager will remember that folder.
	
	Additional query words:
	
	======================================================================
	Keywords          :  
	Technology        : kbAudDeveloper kbSNAServSearch kbSNAServ300 kbSNAServ400 kbSNAServ300SP1 kbSNAServ300SP2
	Version           : WINDOWS:3.0,3.0 SP1,3.0 SP2,4.0
	Issue type        : kbinfo
	
	=============================================================================
	

{% endraw %}
