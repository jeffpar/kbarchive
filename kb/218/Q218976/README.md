---
layout: page
title: "Q218976: BUG: COPY FILE TO Command Behaves Differently Based on OS"
permalink: kb/218/Q218976/
---

## Q218976: BUG: COPY FILE TO Command Behaves Differently Based on OS

	Article: Q218976
	Product(s): Microsoft FoxPro
	Version(s): WINDOWS:3.0b,5.0,5.0a,6.0
	Operating System(s): 
	Keyword(s): kbprint kbPrinting kbvfp300bBUG kbvfp500aBUG kbvfp600bug kbXBase kbGrpDSFox kbDSupport
	Last Modified: 11-SEP-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual FoxPro for Windows, versions 3.0b, 5.0, 5.0a, 6.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	The COPY FILE TO command allows you to print to a device name under Windows NT.
	In Windows 95 or Windows 98, the command simply makes a file without an
	extension with the same name as the device.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a bug in the Microsoft products listed at the
	beginning of this article.
	
	MORE INFORMATION
	================
	
	Steps to Reproduce Behavior
	---------------------------
	
	1. While running Visual FoxPro 3.0x, 5.0x, or 6.0 on a Windows NT 4.0 Server or
	  Workstation machine, create a text file named Bob.txt with a few lines of
	  text in it.
	
	2. Create a program containing the following code and run it:
	
	  x=GetPrinter()
	  ? x
	  COPY FILE Bob.txt TO (x)
	  SET PRINTER TO
	  SET PRINTER TO
	
	3. When the Printer dialog box appears, choose a printer from the Name drop-down
	  list and click OK.
	
	4. Run the same code on a Windows 95 or 98 machine with Visual FoxPro 3.0x,
	  5.0x, or 6.0.
	
	On the Windows NT machine, the file prints to the printer selected in the Printer
	dialog box. It resolves the name as a device.
	
	On Windows 95 or Windows 98, the same commands copy the file Bob.txt to another
	file with the name of the printer chosen in the Printer dialog box. This new
	file has no extension. In addition, no printed output occurs.
	
	REFERENCES
	==========
	
	For additional information about the GetPrinter() function, click the article
	number below to view the article in the Microsoft Knowledge Base:
	
	  Q220157 PRB: GETPRINTER() Behaves Differently Based on Machine's OS
	
	Additional query words:
	
	======================================================================
	Keywords          : kbprint kbPrinting kbvfp300bBUG kbvfp500aBUG kbvfp600bug kbXBase kbGrpDSFox kbDSupport kbCodeSnippet 
	Technology        : kbVFPsearch kbAudDeveloper kbVFP300b kbVFP500 kbVFP600 kbVFP500a
	Version           : WINDOWS:3.0b,5.0,5.0a,6.0
	Issue type        : kbbug
	Solution Type     : kbpending
	
	=============================================================================
	
