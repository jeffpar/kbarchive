---
layout: page
title: "Q224155: Err Msg: &quot;Unable to Create RNA Phonebook Entry&quot;"
permalink: /kb/224/Q224155/
---

## Q224155: Err Msg: &quot;Unable to Create RNA Phonebook Entry&quot;

{% raw %}

	Article: Q224155
	Product(s): Microsoft Windows 95.x Retail Product
	Version(s): WINDOWS:95
	Operating System(s): 
	Keyword(s): 
	Last Modified: 06-AUG-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows 95 
	- Microsoft Windows 95 OEM Service Release, versions 2.0, 2.1, 2.5 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you attempt to install the Pacific Bell Internet dialing software, you may
	receive the following error message:
	
	  Unable to create RNA phonebook entry.
	
	CAUSE
	=====
	
	This behavior can occur for either of the following reasons:
	
	- The Dial-Up Networking component is not installed.
	
	- There are no connectoids in the Dial-Up Networking folder.
	
	RESOLUTION
	==========
	
	To install Dial-Up Networking:
	
	1. Click Start, point to Settings, click Control Panel, and then double-click
	  Add/Remove Programs.
	
	2. On the Windows Setup tab, click Communications (be sure to click the word
	  Communications, not the check box next to the word).
	
	3. Click Details, and then click to select the Dial-Up Networking check box.
	
	4. Click OK, click OK, and then click Yes, when you are prompted to restart your
	  computer.
	
	5. After the computer restarts, reinstall the Pacific Bell Internet software.
	
	To set up a dial-up connectoid in the Dial-Up Networking folder:
	
	1. Double-click My Computer, double-click the Dial-Up Networking folder, and
	  then double-click Make New Connection.
	
	2. In the "Type a name for the computer you are dialing" box, type "Test"
	  (without the quotation marks).
	
	3. Make sure your modem is selected in the "Select a modem" box, and then click
	  Next.
	
	4. In the Area code box, type "nnn" (without the quotation marks), where nnn is
	  your area code.
	
	5. In the "Telephone number" box, type "nnn-nnnn" (without the quotation marks),
	  where nnn-nnnn is the telephone number.
	
	6. Click Next, and then click Finish.
	
	7. If you are prompted to install a dial-up adapter, click OK.
	
	8. If you are prompted to restart your computer, click Yes.
	
	9. After the computer restarts (or the Make New Connection wizard is finished),
	  reinstall the Pacific Bell Internet software.
	
	Additional query words: PacBell
	
	======================================================================
	Keywords          :  
	Technology        : kbWin95search kbOPKSearch kbZNotKeyword3 kbWin95OPKOSR25 kbWin95OPKOSR210
	Version           : WINDOWS:95
	Issue type        : kbprb
	
	=============================================================================
	

{% endraw %}
