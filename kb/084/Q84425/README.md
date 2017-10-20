---
layout: page
title: "Q84425: Qume Printers Not Printing Documents from Windows"
permalink: /kb/084/Q84425/
---

## Q84425: Qume Printers Not Printing Documents from Windows

{% raw %}

	Article: Q84425
	Product(s): Microsoft Windows 95.x Retail Product
	Version(s): WINDOWS:3.0,3.0a,3.1,3.11
	Operating System(s): 
	Keyword(s): 
	Last Modified: 06-DEC-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows versions 3.0, 3.0a, 3.1, 3.11 
	-------------------------------------------------------------------------------
	
	
	SYMPTOMS
	========
	
	You have a Qume CrystalPrint Publisher II printer, and when you try to print
	from Microsoft Windows, the processing light comes on, and then switches back
	off.
	
	These printers emulate an Apple LaserWriter IINT.
	
	CAUSE
	=====
	
	According to Qume Technical Support, the Qume CrystalPrint Publisher II printer
	requires ROM version 1.17 in order to print documents from Microsoft Windows.
	The Qume CrystalPrint Express printer requires ROM version 1.07.
	
	WORKAROUND
	==========
	
	Print to a file and then copy the file to the port:
	
	1. Run Control Panel and choose the Printers icon.
	
	2. Choose the Connect button, then select the port called FILE:.
	
	3. Choose the OK button, then choose the Close button.
	
	4. Run Write and type several lines of text.
	
	5. From the File menu, choose Print.
	
	6. Type the following and press ENTER:
	
	  " c:\output.prn" (without the quotation marks)
	
	7. Switch to Program Manager, choose the MS-DOS Prompt icon, and type the
	  following at the MS-DOS command prompt
	
	  " copy c:\output.prn lptX" (without the quotation marks)
	
	  where "x" is the port number. If you are using a COM port, replace LPTx with
	  COMx.
	
	MORE INFORMATION
	================
	
	Windows 3.0 and Qume Printers
	-----------------------------
	
	Qume has written drivers for using the CrystalPrint Express and Publisher II
	printers with Windows 3.0. To order these drivers, call Qume.
	
	The CrystalPrint printers included here are manufactured by Qume, a vendor
	independent of Microsoft; we make no warranty, implied or otherwise, regarding
	these products' performance or reliability.
	
	
	Additional query words: 3.10 crystal print 3.00 3.00a 3.11
	
	======================================================================
	Keywords          :  
	Technology        : kbWin3xSearch kbZNotKeyword3 kbWin300 kbWin300a kbWin310 kbWin311
	Version           : WINDOWS:3.0,3.0a,3.1,3.11
	
	=============================================================================
	

{% endraw %}
