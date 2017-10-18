---
layout: page
title: "Q95589: PRB: Problems Using SET PRINTER TO &#92;&#92;SPOOLER on Novell Network"
permalink: kb/095/Q95589/
---

## Q95589: PRB: Problems Using SET PRINTER TO &#92;&#92;SPOOLER on Novell Network

	Article: Q95589
	Product(s): Microsoft FoxPro
	Version(s): 2.0 2.5x 2.6x 3.0 5.0 6.0
	Operating System(s): 
	Keyword(s): kb3rdparty kbvfp kbvfp300 kbvfp500 kbvfp600
	Last Modified: 04-AUG-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual FoxPro for Windows, versions 3.0, 5.0, 6.0 
	- Microsoft FoxPro for Windows, versions 2.5x, 2.6x 
	- Microsoft FoxPro for MS-DOS, versions 2.0, 2.5x, 2.6x 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	The following switches to the SET PRINTER TO \\SPOOLER command do not
	consistently direct the printer setup on a Novell network:
	
	  \NB               Suppresses the printing of a banner page.
	  \F = <expN>       Specifies the form number to print on.
	  \B = <banner>     Specifies a banner name.
	  \C = <expN>       Specifies the number of copies to be printed.
	
	CAUSE
	=====
	
	This problem occurs only with the Novell 3.26 shell or later. Older versions of
	the software work correctly, but they may produce other problems if you are
	using Windows. Novell 3.26 or later is the preferred software to use with
	Windows.
	
	RESOLUTION
	==========
	
	These options should be set by using the RUN command to shell out to MS-DOS and
	then using the Novell CAPTURE command. After printing, you must close the print
	file and send the print job. To do this, either issue a RUN ENDCAP command or
	quit FoxPro.
	
	MORE INFORMATION
	================
	
	The Novell network product included here is manufactured by a vendor independent
	of Microsoft; we make no warranty, implied or otherwise, regarding this
	product's performance or reliability.
	
	Additional query words: NetWare novel
	
	======================================================================
	Keywords          : kb3rdparty kbvfp kbvfp300 kbvfp500 kbvfp600 
	Technology        : kbVFPsearch kbAudDeveloper kbFoxproSearch kbZNotKeyword3 kbFoxPro200DOS kbVFP300 kbVFP500 kbVFP600
	Version           : 2.0 2.5x 2.6x 3.0 5.0 6.0
	Issue type        : kbprb
	
	=============================================================================
	
