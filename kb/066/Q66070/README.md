---
layout: page
title: "Q66070: Printing to LPTx.yyy or COMx.yyy From Windows 3.0"
permalink: /kb/066/Q66070/
---

## Q66070: Printing to LPTx.yyy or COMx.yyy From Windows 3.0

{% raw %}

	Article: Q66070
	Product(s): Microsoft Windows 95.x Retail Product
	Version(s): WINDOWS:3.0,3.0a
	Operating System(s): 
	Keyword(s): 
	Last Modified: 03-OCT-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows versions 3.0, 3.0a 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	When you print to LPTx.yyy, COMx.yyy (where "yyy" is any extension), or print to
	a file and subsequently copy the file to a port, the print job may be
	truncated.
	
	This problem occurs primarily when you are printing graphics. To work around this
	problem, you must either print to a port without an extension or copy the file
	to the port with the /b (binary) parameter when you print to a file.
	
	NOTE: This information does not apply to later versions of Windows.
	
	MORE INFORMATION
	================
	
	When you print to a port with an extension, Windows writes the output to a file
	called LPTx.yyy or COMx.yyy. Since LPT and COM are reserved words for Microsoft
	MS-DOS, when Windows writes to a file called LPTx.yyy or COMx.yyy, MS-DOS
	redirects the output to the LPTx or COMx port.
	
	You can achieve the same functionality manually by printing to a file (that is, a
	port called FILE) and then copying the file to LPTx or COMx.
	
	The truncation problem occurs when one of the characters in the document
	formatting code or a graphic contains the ^Z (CTRL+Z) character. Because this
	character is the end-of-file marker for text files, the print job ends when the
	^Z character is encountered.
	
	You can workaround this problem by copying the file to the port with the /b
	parameter as in the following example:
	
	  COPY FILENAME.PRN LPT1: /b
	
	The /b option lets the COPY command know the file is a binary file.
	
	The LPTx.yyy port option in Windows does not invoke the /b parameter. Printing
	graphics using this parameter may cause the print job to be truncated.
	
	To print graphics when you have a hardware problem that Windows is detecting,
	print to a file, then copy the file to the printer using MS-DOS with the /b
	switch. The steps below outline this procedure.
	
	1. In the Control Panel window, choose the Printers icon. Choose the
	  Configuration button, and select FILE: as the printer port.
	
	2. Choose the print option within the Windows application from which you are
	  trying to print.
	
	3. When you are prompted for a filename, name the file using standard MS-DOS
	  conventions. The file is then placed in the current WINDOWS directory. You
	  can also include a full path before the filename to save the file to a path
	  of your choice.
	
	4. Exit Windows or run choose the MS-DOS Prompt icon.
	
	5. Change to the WINDOWS directory, or the path specified in step 3, and type
	  the following:
	
	  copy /b <filename> <portx>:
	
	Microsoft has confirmed this to be a problem in Windows versions 3.0 and 3.0a.
	This problem was corrected and does not occur in later versions.
	
	Additional query words: msdos 3.00 3.00a win30
	
	======================================================================
	Keywords          :  
	Technology        : kbWin3xSearch kbZNotKeyword3 kbWin300 kbWin300a
	Version           : WINDOWS:3.0,3.0a
	
	=============================================================================
	

{% endraw %}
