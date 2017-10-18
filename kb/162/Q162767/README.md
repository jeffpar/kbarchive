---
layout: page
title: "Q162767: QMS Print System 1725 Always Defaults to Letter"
permalink: kb/162/Q162767/
---

## Q162767: QMS Print System 1725 Always Defaults to Letter

	Article: Q162767
	Product(s): Microsoft Windows NT
	Version(s): WINNT:4.0
	Operating System(s): 
	Keyword(s): kbnetwork
	Last Modified: 08-AUG-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Workstation version 4.0 
	- Microsoft Windows NT Server version 4.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	The driver for QMS Print System 1725 always defaults to the form letter, no
	matter what type the application has set.
	
	RESOLUTION
	==========
	
	To resolve this problem, use either of the resolutions below. The first
	resolution works manually from the user interface. The second resolution
	requires you to modify a Windows NT file, but it works better in corporate
	rollout scenarios. Each of these resolutions is described in more detail below.
	
	- Change the default paper tray.
	
	  -or-
	
	- Make a change to the Qms1725.ppd file.
	
	Change the Default Paper Tray
	-----------------------------
	
	To select a different form for the paper tray, perform the following steps:
	
	1. Open the Printers folder.
	
	2. Select the QMS 1725 print system.
	
	3. On the File menu, click Document Defaults.
	
	4. Click the Advanced tab.
	
	5. Expand the list of Document Options and Printer Features by clicking the plus
	  sign (+) next to each.
	
	6. In the Printer Features section, select Paper Tray.
	
	7. In the list box at the bottom contains the list of available forms. Choose
	  the form you want and then click OK.
	
	Modify the Qms1725.ppd File
	---------------------------
	
	To make the required change, perform the following steps:
	
	1. Expand the Qms1725.pp_ file from the Windows NT CD.
	
	2. Open the file in a text editor (such as Notepad).
	
	3. Search the file for "*DefaultPaperTray" (without the quotation marks).
	
	4. On the line where DefaultPaperTray is found, replace "Letter" with the form
	  name you want to use.
	
	5. Save the file.
	
	6. Use the following command to compress the file:
	
	  compress /r /z qms1725.ppd
	
	7. Copy the resulting Qms1725.pp_ file to the desired installation share.
	
	8. Install Windows NT from this share or point existing installations to this
	  share.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in Windows NT version 4.0. We are
	researching this problem and will post new information here in the Microsoft
	Knowledge Base as it becomes available.
	
	Additional query words: prodnt CD-ROM
	======================================================================
	Keywords          : kbnetwork 
	Technology        : kbWinNTsearch kbWinNTWsearch kbWinNTW400 kbWinNTW400search kbWinNT400search kbWinNTSsearch kbWinNTS400search kbWinNTS400
	Version           : WINNT:4.0
	Issue type        : kbbug
	
	=============================================================================
	
