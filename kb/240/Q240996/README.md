---
layout: page
title: "Q240996: Troubleshooting Distinctive Ring"
permalink: kb/240/Q240996/
---

## Q240996: Troubleshooting Distinctive Ring

	Article: Q240996
	Product(s): Microsoft Windows 95.x Retail Product
	Version(s): WINDOWS:95
	Operating System(s): 
	Keyword(s): kbtshoot win95 win98 win98se kbgraphxlinkcritical
	Last Modified: 06-AUG-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows 95 
	- Microsoft Windows 98 
	- Microsoft Windows 98 Second Edition 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	This article describes how to troubleshoot Distinctive Ring functionality.
	
	MORE INFORMATION
	================
	
	Distinctive Ring requires:
	
	- Distinctive Ring service from your phone company.
	
	- Distinctive Ring support in your modem hardware (that is, the modem must
	  support true Distinctive Ring, and not DRON/DROFF).
	
	- A Windows modem .INF file with Distinctive Ring support.
	
	- A Windows TAPI Service Provider such as Unimodem V that enables the operating
	  system to "see" incoming Distinctive Ring responses from the modem.
	
	How to Configure Distinctive Ring in Windows 9x
	-----------------------------------------------
	
	1. Make sure you have Unimodem/V installed on your computer.
	
	Depending on the release date of your Windows 95 software, you may have Unimodem
	(shipped with earlier versions) or Unimodem V (shipped with later versions of
	Windows 95 and Windows 98). Unimodem is the Windows 95 TAPI standard for modem
	communication. Unimodem V is a more recent Windows 95 TAPI standard with
	enhanced voice capabilities. To determine which version of the TAPI files you
	have:
	  a. Click the Start button, point to Find, and then click Files Or Folders.
	     The Find All Files window appears.
	
	  b. Click the Name & Location tab.
	
	  c. In the Named field, type:
	
	  " unimdm.tsp " (without the quotation marks)
	
	When the file is found, it appears in the lower portion of the Find All Files
	window. In Windows 95, this file is in the SYSTEM subfolder of your Windows
	installation folder.
	
	  d. Right-click the file, and then click Properties.
	
	  e. Click the Version tab.
	
	  f. In the Item Name list, click Product Version. The version number appears
	     in the Value list.
	
	  g. Use the list below to determine whether or not Unimodem V is installed on
	     your computer.
	
	+---------------------------------+
	| Version  | TAPI files installed | 
	+---------------------------------+
	| 4.00.950 | Unimodem files       | 
	+---------------------------------+
	| 4.10.43  | Unimodem             | 
	+---------------------------------+
	
	  h. If you do not have Unimodem/V TAPI files installed on your computer and
	     you want to use a phone service that requires it, you must install
	     Unimodem V.
	
	     The following file is available for download from the Microsoft Download
	     Center:
	
	  Download Unimodv.exe now
	
	     For additional information about how to download Microsoft Support files,
	     click the following article number to view the article in the Microsoft
	     Knowledge Base:
	
	  Q119591 How to Obtain Microsoft Support Files from Online Services
	
	     Microsoft scanned this file for viruses. Microsoft used the most current
	     virus-detection software that was available on the date that the file was
	     posted. The file is stored on secure servers that prevent any unauthorized
	     changes to the file.
	
	     NOTE: The file is for Windows 95 only.
	
	2. Click Start, point to Settings, and then click Control Panel.
	
	3. Double-click Modems.
	
	4. Select the modem that is installed on your computer, and then click
	  Properties.
	
	5. On the Distinctive Ring tab, select the "This phone line has Distinctive Ring
	  services" check box, and then click the appropriate type of call for each
	  ring pattern provided by your distinctive ringing service.
	
	NOTE: If the Distinctive Ring tab is not shown, the modem may not have this
	capability.
	
	Testing the Distinctive Ring Feature
	------------------------------------
	
	The best way to test the Distinctive Ring feature is to use a terminal data
	program, such as the HyperTerminal program in Windows 95/98.
	
	To use HyperTerminal:
	
	1. Click the Start button, point to Programs, point to Accessories, and then
	  click HyperTerminal.
	
	2. Double-click hyperterm or hyperterm.exe.
	
	3. Name the new connection "test" (without the quotation marks), and then click
	  OK.
	
	4. Change the "connect using" setting to "Direct to COM <X>", were "X" is
	  the COM port used by the Caller ID device.
	
	5. Click OK on the Port Settings window.
	
	To test your modem:
	
	1. Type the string "ATZ" (without the quotation marks), and then press Enter (OK
	  should then be displayed on the screen).
	
	2. Type the Distinctive Ring string to be tested.
	
	NOTE: For some modems, the string "at-sdr=7" (without the quotation marks)
	enables Distinctive Ring. Look in you modem's documentation to see if any setup
	string is referenced or mentioned. It is always best to verify the correct
	command with your modem documentation or vendor.
	
	
	3. If OK is displayed, continue on to the next step. If ERROR is displayed, the
	  modem may not support Distinctive Ring and you should try a different setup
	  string.
	
	4. Have someone call your computer and watch the terminal screen.
	
	5. If Distinctive Ring is working, the word RING, followed by a letter or number
	  is displayed.
	
	6. If Distinctive Ring is not working, only the word RING is displayed for each
	  incoming ring. If this is the case, try another setup string and go back to
	  step 2.
	
	When Distinctive Ring data works, the most common result is the following:
	
	RING A
	RING A
	RING A
	
	  Other results could be RING B, RING C, RING 1, RING 2, RING 3.
	
	  NOTE: If your modem is outputting DRON/DROFF messages, this is a non-standard
	  implementation of Distinctive Ring. This implementation does not work with
	  TAPI-based software, as UnimodemV does not support this format.
	
	REFERENCES
	==========
	
	For additional information about distinctive ringing, please click the article
	number below to view the article in the Microsoft Knowledge Base:
	
	  Q230333 MSPS: Distinctive Ringing Does Not Work Properly with Call Manager
	
	Additional query words:
	
	======================================================================
	Keywords          : kbtshoot win95 win98 win98se kbgraphxlinkcritical 
	Technology        : kbWin95search kbWin98search kbWin98SEsearch kbZNotKeyword3 kbWin98 kbWin98SE
	Version           : WINDOWS:95
	Issue type        : kbhowto
	
	=============================================================================
	
