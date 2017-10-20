---
layout: page
title: "Q177565: Unattended Install Fails If Using IBM Token Ring 16/4 /A NIC"
permalink: /kb/177/Q177565/
---

## Q177565: Unattended Install Fails If Using IBM Token Ring 16/4 /A NIC

{% raw %}

	Article: Q177565
	Product(s): Microsoft Windows NT
	Version(s): winnt:4.0
	Operating System(s): 
	Keyword(s): kbsetup kbOPK kbSBK
	Last Modified: 09-AUG-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Workstation version 4.0 
	- Microsoft Windows NT Server version 4.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	During an unattended installation of Windows NT 4.0 on a system with an IBM
	Token Ring 16/4 /A network interface card, the following error occurs:
	
	  Badly formed setup script command ""
	
	After the error occurs, if you manually step back through the network options and
	reset all choices, the setup process still does not continue.
	
	If you go through a manual installation and allowing Windows NT to autodetect the
	card, it works fine. The problem only occurs when you do an unattended
	installation.
	
	CAUSE
	=====
	
	There is a script error in the Oemnadtm.inf file that shipped with Windows NT.
	This script error causes only unattended installations to fail.
	
	RESOLUTION
	==========
	
	To resolve the problem and allow setup to complete an unattended installation,
	follow these steps:
	
	1. Expand the oemnadtm.in_ file from the I386 share to anywhere on the local
	  hard drive by typing the following at a command prompt:
	
	  "expand <server\share>\oemnadtm.in_ <local drive>\oemnadtm.inf"
	  (without the quotation marks)
	
	2. Open the Oemnadtm.inf file in notepad, search for the following section:
	
	        ifstr(i) $(!STF_GUI_UNATTENDED) == "YES"
	                            NetworkAddress = ""
	                            goto WriteNetworkAddr
	                       endif
	
	3. Add the word "set", without the quotes, to the second line of this section,
	  so it reads as follows:
	
	        ifstr(i) $(!STF_GUI_UNATTENDED) == "YES"
	                            Set NetworkAddress = ""
	                            goto WriteNetworkAddr
	                       endif
	
	4. Save the file.
	
	5. Rename the file to Oemnadtm.in_ (its original name). Do not compress the
	  file, simply rename it.
	
	6. Copy the modified file back to the <server\share> directory.
	
	After the file has been modified and copied back to the share, unattended setup
	will install the card with no errors.
	
	Additional query words: unattend NICS tokenring 16/4A MCA Unattended Setup
	
	======================================================================
	Keywords          : kbsetup kbOPK kbSBK 
	Technology        : kbWinNTsearch kbWinNTWsearch kbWinNTW400 kbWinNTW400search kbWinNT400search kbWinNTSsearch kbWinNTS400search kbWinNTS400
	Version           : winnt:4.0
	Issue type        : kbprb
	
	=============================================================================
	

{% endraw %}
