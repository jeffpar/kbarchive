---
layout: page
title: "Q113288: Envelope Address Prints Too High on BJ300 and BJ330"
permalink: /kb/113/Q113288/
---

## Q113288: Envelope Address Prints Too High on BJ300 and BJ330

{% raw %}

	Article: Q113288
	Product(s): Microsoft Windows Printing Issues
	Version(s): WINDOWS:3.1,3.11,6.0,6.0a
	Operating System(s): 
	Keyword(s): 
	Last Modified: 08-DEC-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Word for Windows, versions 6.0, 6.0a 
	- Microsoft Windows versions 3.1, 3.11 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you print an envelope from Word 6.0 or 6.0a for Windows to a Canon
	Bubble-Jet 300 (BJ300) or 330 (BJ330) printer using the Bubble-Jet printer
	driver, the envelope delivery address prints too high on the envelope.
	
	STATUS
	======
	
	Microsoft is researching this problem and will post new information here in the
	Microsoft Knowledge Base as it becomes available.
	
	WORKAROUND
	==========
	
	To print the envelope correctly, switch the Bubble-Jet to IBM Proprinter XL24e
	emulation mode and use the XL24e driver by following the steps below.
	
	Switching Emulation Modes on the Printer
	----------------------------------------
	
	1. Turn the printer around so you are looking at the back of the printer.
	
	2. Open the drop-down door near the center of the back of the printer.
	
	  You should see a row of 18 dip switches. The left 8 switches are labeled SW1.
	  The right 10 switches are labeled SW2. By default, when the Bubble-Jet is in
	  native Bubble-Jet mode, all 18 switches are in the up position.
	
	3. Using a pen or another pointed object, move the leftmost 2 switches (SW1 #1
	  and #2) to the down position. This puts the printer in IBM Proprinter XL24e
	  emulation mode. (The remainder of the dip switches set printer default
	  settings, such as form length and line spacing. You do not need to change
	  these switches.)
	
	Installing the XL24e Printer Driver
	-----------------------------------
	
	1. In Windows Control Panel, choose Printers.
	
	2. Choose the Add button.
	
	3. In the Printer box, choose the IBM Proprinter XL24e and choose the Install
	  button.
	
	4. Insert the appropriate Windows disk in your floppy disk drive and choose the
	  OK button.
	
	5. Once the Proprinter appears in the Installed Printers box, choose the Set As
	  Default Printer button and close the Printers dialog box.
	
	Configuring Word for the Proprinter
	-----------------------------------
	
	1. From the Tools menu, choose Envelopes And Labels.
	
	2. Choose the Envelope tab.
	
	3. Choose the Options button.
	
	4. Choose the Printing Options tab.
	
	5. Choose the Reset button to return the Envelope feed options to their
	  defaults.
	
	6. Choose the landscape feed method (the left envelope feed icon) so that the
	  envelope feed method matches the method the printer actually uses.
	
	7. Choose the OK button to close the dialog box.
	
	Printing an Envelope from Word
	------------------------------
	
	1. Insert an envelope in the top of the printer so that the top of the envelope
	  is facing down, the back flap of the envelope is facing the front of the
	  printer, and the left edge of the envelope lines up with the zero (0) mark on
	  the printer.
	
	  Do NOT press the Load button on the front control panel of the printer.
	
	2. From the Tools menu in Word, choose Envelopes And Labels.
	
	3. Type the envelope address information in the envelope window.
	
	4. Choose the Print button.
	
	The envelope should be pulled into the printer and printed correctly.
	
	MORE INFORMATION
	================
	
	The above procedure was tested with the IBM Proprinter driver (PROPM24.DRV)
	version 1.0 from the Windows 3.1 disks and version 2.15. Both versions of the
	driver printed envelopes correctly when using the above procedure.
	
	Printing envelopes using the Epson LQ-1050 emulation (for the BJ330) produced
	garbage characters for the return address, but the delivery address printed in
	the correct location. For this reason, the IBM Proprinter is the recommended
	emulation.
	
	Printing envelopes from the Write program with the printer in native BJ300 and
	BJ330 modes produced the same problem: the delivery address prints too high on
	the envelope.
	
	
	After following the above steps, if the printer does not generate any output,
	check Print Manager. If a dialog box appears saying "Insert Paper," choose the
	OK button, and the envelope then prints correctly. To disable this message box,
	do the following:
	
	1. From Windows Control Panel, choose Printers.
	
	2. Choose the Setup button.
	
	3. Change the Paper Source to Tractor.
	
	The Bubble-Jet and Proprinter products included here are manufactured by vendors
	independent of Microsoft; we make no warranty, implied or otherwise, regarding
	these products' performance or reliability.
	
	REFERENCES
	==========
	
	Canon Bubble-Jet 300/330 "User's Manual," pages II-4 through II-7
	
	
	Additional query words: 6.00 6.00a w4wprint BubbleJet XL 24E BJ 300 330
	
	======================================================================
	Keywords          :  
	Technology        : kbWordSearch kbWin3xSearch kbZNotKeyword2 kbZNotKeyword3 kbWord600 kbWord600a kbWin310 kbWin311
	Version           : WINDOWS:3.1,3.11,6.0,6.0a
	
	=============================================================================
	

{% endraw %}
