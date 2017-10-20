---
layout: page
title: "Q136850: HOWTO: Connect Network Printers in Different Windows Platforms"
permalink: /kb/136/Q136850/
---

## Q136850: HOWTO: Connect Network Printers in Different Windows Platforms

{% raw %}

	Article: Q136850
	Product(s): Microsoft FoxPro
	Version(s): 
	Operating System(s): 
	Keyword(s): kbprint kbdocerr kbPrinting kbvfp300 kbvfp500 kbvfp600
	Last Modified: 11-SEP-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual FoxPro for Windows, versions 3.0, 5.0, 6.0 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	The Visual FoxPro printer interface was designed to work smoothly across all
	Windows platforms. However, differences among the printing architectures of the
	three operating systems result in a few interface differences.
	
	MORE INFORMATION
	================
	
	To establish network printer connections, use the Windows Print Manager under
	Windows version 3.1x or Windows NT, or use the Printers icon under Windows 95.
	The Printers icon is the only way to establish network printer connections when
	running Visual FoxPro under Windows 95. However, the Printer Setup dialog box in
	Visual FoxPro under the Windows 3.1x and Windows NT platforms also allows you to
	establish network printer connections.
	
	Running Visual FoxPro under Windows NT gives developers additional control over
	network printer connections. A Windows NT network printer address of the form:
	"[\\machine name\printer name]" can be substituted for the
	"[WindowsPrinterName]" in the "SET PRINTER TO NAME [WindowsPrinterName]" syntax.
	If the user is not currently connected to the specified network printer, a
	connection will be established and, if necessary, Windows NT will automatically
	download the appropriate printer driver to the user's workstation. Note that
	this works only for correctly configured Windows NT printer servers working in
	conjunction with Windows NT clients.
	
	NOTE: The syntax "SET PRINTER TO NAME [WindowsPrinterName]", which is supported
	under all three Windows platforms, allows you to set the current Visual FoxPro
	printer from the list of currently installed printers in the registry or Win.ini
	file.
	
	NOTE: The online and printed documentation describing how to connect to a network
	printer under Windows NT is incorrect. It is missing the "NAME" clause. It reads
	SET PRINTER TO [\\machine name\printer name] when it should read: SET PRINTER TO
	NAME [\\machine name\printer name].
	
	In the Help file of Visual FoxPro 6.0, the command is correctly documented.
	
	Additional query words:
	
	======================================================================
	Keywords          : kbprint kbdocerr kbPrinting kbvfp300 kbvfp500 kbvfp600 
	Technology        : kbVFPsearch kbAudDeveloper kbVFP300 kbVFP500 kbVFP600
	Issue type        : kbhowto
	
	=============================================================================
	

{% endraw %}
