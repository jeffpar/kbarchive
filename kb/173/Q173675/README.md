---
layout: page
title: "Q173675: WD97: Word Hangs Opening Print or Page Setup Dialog Boxes"
permalink: /kb/173/Q173675/
---

## Q173675: WD97: Word Hangs Opening Print or Page Setup Dialog Boxes

{% raw %}

	Article: Q173675
	Product(s): Word 97 for Windows
	Version(s): WINDOWS:97
	Operating System(s): 
	Keyword(s): kbnetwork kbprint
	Last Modified: 07-SEP-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Word 97 for Windows, used with:
	   - the operating system: Microsoft Windows NT 
	-------------------------------------------------------------------------------
	
	
	SYMPTOMS
	========
	
	Microsoft Word may appear to stop responding when you open either the File Print
	dialog box or the File Page Setup dialog box.
	
	CAUSE
	=====
	
	This problem may occur when all of the following conditions are true:
	
	- You are running Word 97 on a computer running Windows NT Workstation.
	
	  -and-
	
	- The default printer is using a printer driver on a print server computer
	  running Windows NT Server.
	
	  -and-
	
	- The network connection to the print server is lost.
	
	Word 97 is trying to access the printer driver on the print server. Windows NT is
	continuously trying to access the server and takes a long time to send an error
	message back to Word.
	
	WORKAROUND
	==========
	
	If you wait long enough, Word receives the error message from Windows NT, and
	then Word continues to run properly (with the exception of printing).
	
	To prevent this problem from occurring, select another printer that does not use
	the lost connection as the default printer, until you reestablish the
	connection.
	
	In some cases the printer with the lost connection does not have to be the
	default printer to cause a delay when opening the File Print dialog box. In this
	case, you need to delete the printer, modify, or reestablish the connection.
	
	To Delete a Printer
	-------------------
	
	1. Click the Start button, point to Settings, and then click Printers.
	
	2. Right-click the icon of the printer that you want to delete.
	
	3. Click Delete on the shortcut menu, and click Yes when you are asked whether
	  you want to delete the printer.
	
	To Modify a Printer Connection
	------------------------------
	
	1. Click the Start button, point to Settings, and then click Printers.
	
	2. Right-click the icon of the printer whose connection you want to modify.
	
	3. Click Properties on the shortcut menu, and then click the Details tab.
	
	4. In the "Print to the following port" list, click to select a valid printer
	  path.
	
	5. Click OK.
	
	To Install a New Printer
	------------------------
	
	1. Click the Start button, point to Settings, and then click Printers.
	
	2. Double-click the Add Printer icon, and then click Next.
	
	3. Click Local Printer or Network Printer as appropriate, and then click Next.
	
	  NOTE: If you click Network Printer, you are prompted for the network path for
	  the printer. If you do not know the correct path, click Browse, or check with
	  your network administrator.
	
	4. Click either Yes or No in the "Do you print from MS-DOS-based programs?"
	  area, and then click Next.
	
	5. Click the appropriate manufacturer and model for your printer, and then click
	  Next.
	
	6. If you choose to install a local printer, click the correct port and then
	  click Next.
	
	7. Type a name for the printer (or accept the default name), and then click
	  either Yes or No in the "Do you want your Windows-based programs to use this
	  printer as the default printer?" area. Click Next.
	
	8. To print a test page, click Yes.
	
	9. Click Finish.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in the Microsoft products listed at
	the beginning of this article.
	
	Additional query words: 8.0 8.00
	
	======================================================================
	Keywords          : kbnetwork kbprint 
	Technology        : kbWordSearch kbWord97 kbWord97Search kbZNotKeyword2
	Version           : WINDOWS:97
	Issue type        : kbbug
	Solution Type     : kbpending
	
	=============================================================================
	

{% endraw %}
