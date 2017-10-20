---
layout: page
title: "Q177083: How to Verify the Internet Mail Enhancement Patch Is Installed"
permalink: /kb/177/Q177083/
---

## Q177083: How to Verify the Internet Mail Enhancement Patch Is Installed

{% raw %}

	Article: Q177083
	Product(s): The Microsoft Network
	Version(s): WINDOWS:2.5,97
	Operating System(s): 
	Keyword(s): kbenv kbtool kbmsnkbfaq
	Last Modified: 26-OCT-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- The Microsoft Network version 2.5 
	- Microsoft Outlook 97 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	To use Microsoft Outlook 97 as your e-mail client on MSN, The Microsoft Network,
	the Internet Mail Enhancement Patch must be installed.
	
	MORE INFORMATION
	================
	
	To verify the Internet Mail Enhancement Patch is installed, follow these steps:
	
	1. Click Start, point to Settings, and then click Control Panel.
	
	2. Double-click Mail or Mail And Fax.
	
	3. On the Services tab, verify that "Internet E-mail" is listed in the "The
	  following information services are set up in this profile" box. If "Internet
	  Mail" is listed, the Internet Mail Enhancement Patch may not be installed.
	
	4. Double-click "Internet E-mail" or "Internet Mail."
	
	You should see the following tabs in the dialog box that opens on the screen:
	
	- General
	
	- Servers
	
	- Connection
	
	- Advanced
	
	If any of these tabs are missing, the Internet Mail Enhancement Patch is not
	installed.
	
	To install the Internet Mail Enhancement Patch, use the following steps:
	
	1. Click Start, point to Find, and then click Files Or Folders.
	
	2. In the Named box, type "minet32.dll" (without quotation marks), and then
	  click Find Now.
	
	3. In the list of found files, right-click the Minet32.dll file, and then click
	  Rename.
	
	4. Type "minet32.old" (without quotation marks), and then press ENTER.
	
	5. Close the Find: Files Named Minet32.dll window, and then restart the
	  computer.
	
	6. Install the Internet Mail Enhancement Patch.
	
	For information about how to install the Internet Mail Enhancement Patch, please
	see the following article in the Microsoft Knowledge Base:
	
	  Q174062 Internet Mail Enhancement Patch Needed to Use Outlook 97 w/MSN
	
	For more information about how to use Outlook 97 with MSN, please see the
	following articles in the Microsoft Knowledge Base:
	
	  Q176064 How to Set Outlook 97 as the Default MSN E-Mail Program
	
	  Q176276 Frequently Asked Questions About Mail Migration on MSN
	
	Additional query words: msnet msnetwork microsoft-net m.s.n. imep
	
	======================================================================
	Keywords          : kbenv kbtool kbmsn kbfaq
	Technology        : kbOutlookSearch kbMSNSearch kbOutlook97Search kbZNotKeyword3 kbMSN250
	Version           : WINDOWS:2.5,97
	Issue type        : kbhowto
	
	=============================================================================
	

{% endraw %}
