---
layout: page
title: "Q154743: PRB: Using FoxBASE+ Label Form in Visual FoxPro"
permalink: /kb/154/Q154743/
---

## Q154743: PRB: Using FoxBASE+ Label Form in Visual FoxPro

	Article: Q154743
	Product(s): Microsoft FoxPro
	Version(s): MACINTOSH:3.0b; WINDOWS:3.0,3.0b
	Operating System(s): 
	Keyword(s): 
	Last Modified: 14-DEC-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual FoxPro for Macintosh, version 3.0b 
	- Microsoft Visual FoxPro for Windows, versions 3.0, 3.0b 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	Visual FoxPro displays a message prompting you to convert a FoxBASE+ label file
	when using the LABEL FORM <labelname> to print or to preview the label.
	However, it is possible to print or preview a FoxBASE+ label without converting
	it.
	
	WORKAROUND
	==========
	
	When using the LABEL FORM <labelfilename> PREVIEW or TO PRINTER command,
	you must include the FoxBASE+ label extension (LBL) with the file name. Visual
	FoxPro then prints or previews the label normally.
	
	STATUS
	======
	
	Microsoft is researching this behavior and will post new information here in the
	Microsoft Knowledge Base as it becomes available.
	
	MORE INFORMATION
	================
	
	Visual FoxPro displays the following message when the .lbl extension is not
	included with the label name used with a LABEL FORM command:
	
	  Invalid file format. If this is a dBASE file, it must be converted first. To
	  convert it, type "MODIFY LABEL <labelfilename>" (without the quotation
	  marks)
	
	The REPORT FORM command used on a FoxBASE+ report file always produces a message
	informing you to convert the file. This message appears whether or not the file
	extension is included.
	
	Visual FoxPro for the Macintosh behaves differently. Both label and report files
	created in FoxBASE+ for the Macintosh pass the .FRX extension. The inclusion of
	a label file extension with the LABEL FORM command does not prevent Visual
	FoxPro for the Macintosh from prompting the user to convert the file.
	
	Steps to Reproduce Behavior
	---------------------------
	
	1. Create a label file called "Test" in FoxBASE+.
	
	2. Copy the FoxBASE+ table and the Test label into the Visual FoxPro for Windows
	  directory.
	
	3. Use the FoxBASE+ table.
	
	4. In the Command window, type the following:
	
	        LABEL FORM Test PREVIEW
	
	  The message listed above appears.
	
	5. In the Command window, change the command to:
	
	        LABEL FORM Test.lbl PREVIEW
	
	  The label now appears in a preview window.
	
	Additional query words: kbdsd vfoxwin vfoxmac
	
	======================================================================
	Keywords          :  
	Technology        : kbHWMAC kbOSMAC kbVFPsearch kbAudDeveloper kbVFP300bMac kbVFP300 kbVFP300b
	Version           : MACINTOSH:3.0b; WINDOWS:3.0,3.0b
	
	=============================================================================
	
