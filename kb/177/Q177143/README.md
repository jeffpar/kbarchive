---
layout: page
title: "Q177143: PRB: &quot;Error Writing to File&quot; Error Using a Table on a CD-ROM"
permalink: /kb/177/Q177143/
---

## Q177143: PRB: &quot;Error Writing to File&quot; Error Using a Table on a CD-ROM

	Article: Q177143
	Product(s): Microsoft FoxPro
	Version(s): WINDOWS:3.0,3.0b,5.0,5.0a
	Operating System(s): 
	Keyword(s): kbvfp kbvfp300 kbvfp500
	Last Modified: 08-DEC-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual FoxPro for Windows, versions 3.0, 3.0b, 5.0, 5.0a, on platform(s):
	   - the operating system: Microsoft Windows 95 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When closing a table or executing a COPY TO or APPEND FROM command on a table
	that has no code page located on a CD-ROM, the following error message appears:
	
	  Error Writing To File
	
	This error occurs only under Windows 95. Windows NT version 4.0 does not produce
	the error message. This message is most likely to happen with a CD- ROM drive
	installed on the local computer. If the CD-ROM drive is mapped over a network,
	the message may not occur.
	
	CAUSE
	=====
	
	Visual FoxPro tries to write the code page selected in the Code Page dialog box
	back to the table. However, since the CD-ROM is read-only, the error occurs.
	Visual FoxPro versions 3.0x and 5.0x running on Windows 95 cannot detect that
	the CD-ROM is a read-only device.
	
	RESOLUTION
	==========
	
	Here are four workarounds for this problem:
	
	- Copy the file from the CD-ROM to a read/write medium and remove the Read-Only
	  attribute on the file. Once copied, use Cpzero.prg to set the code page to
	  zero or another code page value. Use CPDBF() to check the table's current
	  code page.
	
	-or-
	
	- Click on the Option menu bar under the Tools menu pad and click the Data tab.
	  Clear the "Prompt for Code Page" check box.
	
	-or-
	
	- Type SET CPDIALOG OFF in the Command window before opening the table.
	
	-or-
	
	- Click Cancel when Visual FoxPro prompts for a code page. This solution may
	  only be practical if you mainly use the table interactively through the
	  interface.
	
	STATUS
	======
	
	This behavior is by design.
	
	MORE INFORMATION
	================
	
	This error is more difficult to invoke when using the COPY TO and APPEND FROM
	commands. Depending on the size of the table, the error occurs only after many
	hundreds or thousands of records are copied. Therefore, the message may appear
	as an intermittently occurring error that is difficult to reproduce. This makes
	troubleshooting the problem extremely difficult.
	
	The problem does not appear to be linked to the read-only attribute on the file.
	If a read-only table without a code page is located on the hard drive, Visual
	FoxPro does not prompt for a code page.
	
	Steps to Reproduce Behavior
	---------------------------
	
	1. Insert a CD-ROM that contains a Visual FoxPro table without a code page in
	  the CD-ROM drive.
	
	2. Type the following in the Visual FoxPro Command window and navigate to the
	  CD-ROM drive and open the table:
	
	        USE ?
	
	3. When the Code Page dialog box appears, select the 1252-Windows ANSI code
	  page.
	
	4. Close the table by issuing the USE command in the Command window and the
	  error appears.
	
	Additional query words: error writing file append copy cd-rom
	
	======================================================================
	Keywords          : kbvfp kbvfp300 kbvfp500 
	Technology        : kbVFPsearch kbAudDeveloper
	Version           : WINDOWS:3.0,3.0b,5.0,5.0a
	Issue type        : kbprb
	
	=============================================================================
	
